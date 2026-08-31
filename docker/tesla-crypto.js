'use strict';

/**
 * Tesla dashcam clip decryption (vehicle software 2026.20+).
 *
 * This follows Tesla's own implementation, which ships unminified as
 * dashcam.tesla.com/assets/encryptfs-*.js. It is plain eCryptfs:
 *
 *   header, 8192 bytes (two 4096-byte pages)
 *     0x0000   8   plaintext size, uint64 BE
 *     0x0008   4   magic part 1
 *     0x000c   4   magic part 2      part1 ^ part2 == 0x3c81b7f5
 *     0x0010   4   version and flags == 0x03000002
 *     0x0014   4   data offset       == 4096
 *     0x0018   2   extent count      == 2
 *     0x1000   4   key id, uint32 BE
 *     0x1004   n   public key, EC point starting 0x04 (57..65 bytes)
 *     +n      17   VIN, ASCII
 *     +17      8   timestamp, uint64 BE
 *     +8      44   wrapped key
 *   payload from 0x2000, AES-128-CBC in 4096-byte pages
 *
 * The public key is variable length, so the fields after it are found by
 * walking rather than at fixed offsets. Community documentation of this format
 * gives fixed offsets and puts a file UUID at 0x0004; both are wrong. There is
 * no UUID in the file at all, and 0x0004 is the tail of the size field.
 *
 * The page IV is derived, not stored:
 *
 *   iv = MD5( MD5(file_key) || ascii(page_index), zero-padded to 32 bytes )
 *
 * The per-file key is never on the drive: it comes from Tesla's API.
 */

const crypto = require('crypto');

const PAGE_SIZE = 4096;
const HEADER_SIZE = 8192;
const PAYLOAD_START = HEADER_SIZE;
const MAGIC = 0x3c81b7f5;
const VERSION_AND_FLAGS = 0x03000002;
const EXTENT_COUNT = 2;
const KEY_SIZE = 16;
const VIN_LENGTH = 17;
const PUBLIC_KEY_LENGTH = 65;
const PUBLIC_KEY_MIN_LENGTH = PUBLIC_KEY_LENGTH - 8;
const WRAPPED_KEY_LENGTH = 12 + 16 + 16;

class InvalidHeaderError extends Error {}

/**
 * Validate the eCryptfs header and pull out what the key API needs.
 * @param {Buffer} header the first 8192 bytes
 * @param {number} fileSize total size of the encrypted file
 */
function parseHeader(header, fileSize) {
    if (header.length < HEADER_SIZE) {
        throw new InvalidHeaderError(`file is too small to hold an ecryptfs header (${header.length} bytes)`);
    }
    if (fileSize % PAGE_SIZE !== 0) {
        throw new InvalidHeaderError(`file size ${fileSize} is not a multiple of the page size`);
    }

    const plaintextSize = Number(header.readBigUInt64BE(0));
    if (plaintextSize > fileSize - HEADER_SIZE) {
        throw new InvalidHeaderError(`declared plaintext size ${plaintextSize} is too large for the file`);
    }
    if ((header.readUInt32BE(8) ^ header.readUInt32BE(12)) >>> 0 !== MAGIC) {
        throw new InvalidHeaderError('missing ecryptfs magic: this is not an encrypted clip');
    }
    if (header.readUInt32BE(16) !== VERSION_AND_FLAGS) {
        throw new InvalidHeaderError(`unsupported version or flags 0x${header.readUInt32BE(16).toString(16)}`);
    }
    if (header.readUInt32BE(20) !== PAGE_SIZE) {
        throw new InvalidHeaderError(`unexpected data offset ${header.readUInt32BE(20)}`);
    }
    if (header.readUInt16BE(24) !== EXTENT_COUNT) {
        throw new InvalidHeaderError(`unexpected extent count ${header.readUInt16BE(24)}`);
    }

    let cursor = PAGE_SIZE;
    const keyId = header.readUInt32BE(cursor);
    cursor += 4;

    // The public key can be shorter than 65 bytes, so find where the VIN ends
    // by walking to the first zero byte and measuring backwards.
    const expectedVinStart = cursor + PUBLIC_KEY_LENGTH;
    let tsStart = expectedVinStart;
    const tsStartMax = expectedVinStart + VIN_LENGTH;
    while (tsStart <= tsStartMax && header[tsStart] !== 0) tsStart++;

    let publicKeyLength = (tsStart <= tsStartMax && header[tsStart] === 0)
        ? tsStart - VIN_LENGTH - cursor
        : PUBLIC_KEY_LENGTH;
    if (publicKeyLength < PUBLIC_KEY_MIN_LENGTH ||
        publicKeyLength > PUBLIC_KEY_LENGTH ||
        header[cursor] !== 0x04) {
        publicKeyLength = PUBLIC_KEY_LENGTH;
    }

    const publicKey = header.subarray(cursor, cursor + publicKeyLength);
    cursor += publicKeyLength;
    const vin = header.subarray(cursor, cursor + VIN_LENGTH).toString('ascii');
    cursor += VIN_LENGTH;
    const timestamp = Number(header.readBigUInt64BE(cursor));
    cursor += 8;
    const wrappedKey = header.subarray(cursor, cursor + WRAPPED_KEY_LENGTH);

    if (vin.charCodeAt(0) === 0 || publicKey[0] !== 0x04) {
        throw new InvalidHeaderError('wrapped key section does not look valid');
    }

    return {
        plaintextSize,
        vin,
        key_id: keyId,
        timestamp,
        wrapped_key: wrappedKey.toString('base64'),
        public_key: publicKey.toString('base64'),
    };
}

/** IV for one page: MD5 of (MD5(key) || ascii(page)) in a 32-byte buffer. */
function pageIv(fileKey, pageIndex) {
    const rootIv = crypto.createHash('md5').update(fileKey).digest();
    const block = Buffer.alloc(32);
    rootIv.copy(block, 0);
    block.write(String(pageIndex), rootIv.length, 'ascii');
    return crypto.createHash('md5').update(block).digest();
}

/** Pages are whole AES blocks and carry no padding of their own. */
function decryptPage(fileKey, pageIndex, ciphertext) {
    const decipher = crypto.createDecipheriv('aes-128-cbc', fileKey, pageIv(fileKey, pageIndex));
    decipher.setAutoPadding(false);
    return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}

/** Encrypt one page. Used to round-trip the scheme in tests. */
function encryptPage(fileKey, pageIndex, plaintext) {
    const cipher = crypto.createCipheriv('aes-128-cbc', fileKey, pageIv(fileKey, pageIndex));
    cipher.setAutoPadding(false);
    return Buffer.concat([cipher.update(plaintext), cipher.final()]);
}

function pagesForRange(start, end) {
    return { firstPage: Math.floor(start / PAGE_SIZE), lastPage: Math.floor(end / PAGE_SIZE) };
}

function pageOffset(pageIndex) {
    return PAYLOAD_START + pageIndex * PAGE_SIZE;
}

/** Build a valid header. Test helper only. */
function buildHeader({ plaintextSize, fileKey, vin, keyId = 1, timestamp = 0, publicKeyLength = PUBLIC_KEY_LENGTH }) {
    const header = Buffer.alloc(HEADER_SIZE);
    header.writeBigUInt64BE(BigInt(plaintextSize), 0);
    const m1 = 0x11223344;
    header.writeUInt32BE(m1, 8);
    header.writeUInt32BE((m1 ^ MAGIC) >>> 0, 12);
    header.writeUInt32BE(VERSION_AND_FLAGS, 16);
    header.writeUInt32BE(PAGE_SIZE, 20);
    header.writeUInt16BE(EXTENT_COUNT, 24);

    let cursor = PAGE_SIZE;
    header.writeUInt32BE(keyId, cursor); cursor += 4;
    const pub = Buffer.alloc(publicKeyLength, 0xab); pub[0] = 0x04;
    pub.copy(header, cursor); cursor += publicKeyLength;
    header.write(vin.padEnd(VIN_LENGTH, '\0'), cursor, 'ascii'); cursor += VIN_LENGTH;
    header.writeBigUInt64BE(BigInt(timestamp), cursor); cursor += 8;
    crypto.createHash('md5').update(fileKey).digest().copy(header, cursor);
    return header;
}

module.exports = {
    PAGE_SIZE, HEADER_SIZE, PAYLOAD_START, MAGIC, KEY_SIZE, WRAPPED_KEY_LENGTH,
    InvalidHeaderError,
    parseHeader, pageIv, decryptPage, encryptPage, pagesForRange, pageOffset, buildHeader,
};
