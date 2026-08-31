'use strict';

/**
 * Tesla dashcam clip decryption (vehicle software 2026.20+).
 *
 * Layout of an encrypted clip, as reverse-engineered from dashcam.tesla.com
 * (see https://github.com/XGxF3/tesla-dashcam-decrypt):
 *
 *   0x0000   4   (unidentified)
 *   0x0004  16   file UUID                   -> API item id
 *
 * The published table also claims an 8-byte plaintext size at 0x0000, which
 * cannot be true at the same time as a 16-byte UUID at 0x0004: they overlap.
 * Rather than pick one reading, the payload length is derived from the file
 * size and the last page is trimmed of its zero padding, which is correct
 * either way.
 *   0x1000   4   key_id                      uint32 BE
 *   0x1004  65   public key (EC point, 0x04)
 *   0x1045  17   VIN (ASCII, null padded)
 *   0x1056   8   timestamp                   uint64 BE
 *   0x105e  44   wrapped key
 *   0x2000+      payload, AES-128-CBC in 4096-byte pages
 *
 * The page IV is derived rather than stored, eCryptfs style:
 *
 *   iv = MD5( MD5(file_key) || ascii(page_index) padded with zeroes to 32 )
 *
 * The per-file key is never on the drive. It comes from Tesla's API against
 * the account that recorded the clip.
 */

const crypto = require('crypto');

const PAGE_SIZE = 4096;
const PAYLOAD_START = 0x2000;
const HEADER_SIZE = PAYLOAD_START;

/** Field offsets, so the layout above is stated once. */
const OFF = {
    uuid: 0x0004,
    keyId: 0x1000,
    publicKey: 0x1004,
    vin: 0x1045,
    timestamp: 0x1056,
    wrappedKey: 0x105e,
};

function formatUuid(buf) {
    const h = buf.toString('hex');
    return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20, 32)}`;
}

/**
 * Pull the metadata Tesla needs to hand back a key.
 * @param {Buffer} header the first 0x2000 bytes of the clip
 */
function parseHeader(header) {
    if (header.length < HEADER_SIZE) {
        throw new Error(`header too short: ${header.length} bytes, need ${HEADER_SIZE}`);
    }
    const vinRaw = header.subarray(OFF.vin, OFF.vin + 17);
    const nul = vinRaw.indexOf(0);
    return {
        id: formatUuid(header.subarray(OFF.uuid, OFF.uuid + 16)),
        vin: vinRaw.subarray(0, nul === -1 ? 17 : nul).toString('ascii'),
        key_id: header.readUInt32BE(OFF.keyId),
        timestamp: Number(header.readBigUInt64BE(OFF.timestamp)),
        wrapped_key: header.subarray(OFF.wrappedKey, OFF.wrappedKey + 44).toString('base64'),
        public_key: header.subarray(OFF.publicKey, OFF.publicKey + 65).toString('base64'),
    };
}

/** IV for one page, derived from the file key and the page index. */
function pageIv(fileKey, pageIndex) {
    const rootIv = crypto.createHash('md5').update(fileKey).digest();   // 16 bytes
    const block = Buffer.alloc(32);
    rootIv.copy(block, 0);
    Buffer.from(String(pageIndex), 'ascii').copy(block, rootIv.length);
    return crypto.createHash('md5').update(block).digest();
}

/**
 * Decrypt one 4096-byte page.
 * Pages are whole AES blocks and carry no padding of their own, so padding is
 * disabled and any trailing bytes are trimmed against the plaintext size.
 */
function decryptPage(fileKey, pageIndex, ciphertext) {
    const decipher = crypto.createDecipheriv('aes-128-cbc', fileKey, pageIv(fileKey, pageIndex));
    decipher.setAutoPadding(false);
    return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}

/** Encrypt one page. Only used to round-trip the scheme in tests. */
function encryptPage(fileKey, pageIndex, plaintext) {
    const cipher = crypto.createCipheriv('aes-128-cbc', fileKey, pageIv(fileKey, pageIndex));
    cipher.setAutoPadding(false);
    return Buffer.concat([cipher.update(plaintext), cipher.final()]);
}

/** Byte range of the plaintext -> the page range that has to be read. */
function pagesForRange(start, end) {
    return {
        firstPage: Math.floor(start / PAGE_SIZE),
        lastPage: Math.floor(end / PAGE_SIZE),
    };
}

/** Where a page sits in the encrypted file. */
function pageOffset(pageIndex) {
    return PAYLOAD_START + pageIndex * PAGE_SIZE;
}

/**
 * Length of the plaintext, given the size of the encrypted file.
 *
 * Pages are padded with zeroes to 4096 bytes, so the last page is trimmed of
 * its trailing zeroes. MP4 boxes are self-describing and this only ever trims
 * padding, never real data: a trailing zero byte inside a box is still inside
 * the box, and the box length is what a player follows.
 */
function plaintextLength(encryptedSize, lastPagePlaintext) {
    const full = encryptedSize - PAYLOAD_START - PAGE_SIZE;
    let tail = lastPagePlaintext.length;
    while (tail > 0 && lastPagePlaintext[tail - 1] === 0) tail--;
    return Math.max(0, full) + tail;
}

module.exports = {
    plaintextLength,
    PAGE_SIZE, PAYLOAD_START, HEADER_SIZE, OFF,
    parseHeader, pageIv, decryptPage, encryptPage, pagesForRange, pageOffset, formatUuid,
};
