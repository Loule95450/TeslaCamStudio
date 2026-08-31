<p align="center">
  <img src="src/logo-small.png" alt="TeslaCam Studio Logo" width="80" height="80">
</p>
<h1 align="center">TeslaCam Studio</h1>

<p align="center">
  <a href="https://github.com/Loule95450/TeslaCamStudio/releases"><img src="https://img.shields.io/github/v/release/Loule95450/TeslaCamStudio?style=flat-square&color=blue" alt="Release"></a>
  <a href="https://github.com/Loule95450/TeslaCamStudio/releases"><img src="https://img.shields.io/github/downloads/Loule95450/TeslaCamStudio/total?style=flat-square&color=green" alt="Downloads"></a>
  <a href="https://github.com/Loule95450/TeslaCamStudio/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Loule95450/TeslaCamStudio?style=flat-square" alt="License"></a>
  <a href="https://github.com/Loule95450/TeslaCamStudio/stargazers"><img src="https://img.shields.io/github/stars/Loule95450/TeslaCamStudio?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/Loule95450/TeslaCamStudio/actions/workflows/build.yml"><img src="https://img.shields.io/github/actions/workflow/status/Loule95450/TeslaCamStudio/build.yml?style=flat-square&label=CI" alt="CI"></a>
  <a href="https://app.tdashcam.studio/"><img src="https://img.shields.io/badge/Website-app.tdashcam.studio-blue?style=flat-square" alt="Website"></a>
</p>

A modern, browser-based viewer for your Tesla dashcam footage. Play all six camera angles (Front, Back, Left, Right, Left B-Pillar, Right B-Pillar) simultaneously with a sleek and intuitive interface. Deployed as a single container, reading straight from a mounted volume.

## 🆚 Why choose TeslaCam Studio?

Compared to the original Tesla Dashcam player, this project provides more powerful features and a superior experience:

| Feature | Tesla In-Car Player | Raw PC Playback | TeslaCam Studio (This Project) |
| :--- | :--- | :--- | :--- |
| **Sync Playback** | ✅ Supports 6 channels | ❌ Manual file opening, no sync | ✅ **Perfect 6-channel sync, intuitive layout** |
| **Viewing Exp.** | Limited to car screen | Large screen, but messy file folders | **Multi-device**, large screen, organized events |
| **Filtering** | Basic categories only | ❌ Manual search in thousands of folders | ✅ **Smart filtering by date, time, and event type** |
| **Driving Data** | ✅ Supports metadata | ❌ Video only, no hidden data access | ✅ **Visual Dashboard: Speed, Pedals, AP, etc.** |
| **Video Editing** | ❌ Not supported | ❌ Requires pro tools (FFmpeg/Premiere) | ✅ **Visual drag-and-drop, exported videos include metadata watermarks** |
| **Easy Sharing** | ❌ Hard to share | ❌ Raw segments only, poor experience | ✅ **One-click Grid Export with time & driving info watermarks** |
| **Map/Location** | Basic map display | ❌ No location data | ✅ **Street names + Deep link to Google/Gaode** |
| **Privacy** | - | ✅ Local playback | ✅ **100% Local processing**, privacy first |


![Screenshot](./.github/assets/home.webp)

## 📺 Feature Showcase

| Feature | Demonstration |
| :--- | :--- |
| **Quick Start**: Support folder drag-and-drop, plug and play | ![Quick Start](.github/assets/GIF/drop-open.webp) |
| **Modern UI**: Dark/Light mode support with smooth animations | ![Modern UI](.github/assets/GIF/ui.gif) |
| **Smart Filtering**: Locate events by date and type quickly | ![Smart Filtering](.github/assets/GIF/filter.gif) |
| **Map Integration**: Street names & deep links to maps | ![Map Integration](.github/assets/GIF/map.webp) |
| **Playback Speed**: Flexible 0.5x - 2.0x speed control | ![Playback Speed](.github/assets/GIF/speed.gif) |
| **Driving Data**: Real-time display of speed, turn signals, accelerator depth, brake pedal, AP/FSD, steering angle, etc. | ![Driving Data](.github/assets/GIF/meta-data.webp) |
| **Speed Curve**: Real-time speed curve on progress bar for quick acceleration/braking identification | ![Speed Curve](.github/assets/GIF/speed-curve.webp) |
| **Data Export**: One-click export of driving metadata to CSV for data analysis | ![Data Export](.github/assets/GIF/csv-export.webp) |
| **Sync Playback**: Perfectly synced footage with multiple layouts | ![Sync Playback](.github/assets/GIF/play.webp) |
| **Visual Clipping**: Drag-and-drop handles for precise export | ![Visual Clipping](.github/assets/GIF/export.webp) |
| **Export Results**: Grid videos with driving data watermarks | ![Export Results](.github/assets/GIF/6-exported-play.webp) |

## ✨ Features


### 🎥 Video Playback
*   **Multi-Layout Sync**: Perfectly synchronized footage with multiple viewing modes: 6-grid full view, new 4-grid, old 4-grid, and single-camera full screen.
*   **B-Pillar Support**: Full coverage including Tesla's interior B-pillar cameras.
*   **Real-Time Dashboard**: Automatically parses SEI metadata to display speed, gear, steering angle, pedal status, Autopilot (AP/FSD) state, and GPS coordinates.
*   **Progress Bar Speed Curve**: Renders a real-time speed curve in the progress bar background, allowing you to quickly locate key moments like rapid acceleration or emergency braking.
*   **Driving Data Export**: One-click export of the complete driving metadata for the current event to a CSV file for further data analysis.
*   **Smart Filtering**: Easily filter recordings by date, time, and event type (Recent, Saved, Sentry).
*   **Map Integration**: View real-time street names and click to open the exact location on Google Maps or Gaode Maps.
*   **Interactive Controls**: Picture-in-Picture switching, 0.5x - 2.0x playback speed, instant clip download, and keyboard shortcuts (`Space` for play/pause).


> **Note:** Vehicle metadata is only available in videos recorded with **vehicle software version 2025.44.25.11 or later**.

![Metadata Display 1](.github/assets/screenshot1.webp)
![Metadata Display 2](.github/assets/screenshot2.webp)

### ✂️ Video Clipping & Export

*   **Visual Precision Clipping**: Drag blue handles on the progress bar to select precise start and end points for your clip.
*   **Seamless Multi-Segment Merging**: Automatically handles clips that span across multiple 1-minute raw video files.
*   **One-Click Grid Export**: Combine selected camera views into a grid video (2x2 or 2x3) with enhanced, high-readability labels.
*   **Timestamp Watermarks**: Add real-time timestamp and driving information (speed, gear, AP status, etc.) overlays to your exported videos for comprehensive reference.
*   **Flexible Configuration**: Choose specific camera combinations to export and get real-time visual progress feedback.

### 🎨 Modern User Interface
*   **Dual-Theme Support**: Sleek Light and Dark modes with automatic system detection.
*   **Internationalization**: Full English and Chinese support, auto-detected from browser settings.
*   **Premium Design**: Modern card-based layout with smooth animations and a stylish purple gradient theme.
*   **Privacy & Performance**: 100% local processing in your browser (Canvas API & MediaRecorder). Your data never leaves your device.


## 🚀 Deployment

TeslaCam Studio runs as a single container. You mount your TeslaCam folder into
it, and the footage shows up in the browser - there is no folder to pick and
nothing to upload.

### Docker Compose

```yaml
services:
  teslacam-studio:
    image: ghcr.io/loule95450/teslacamstudio:latest
    container_name: teslacam-studio
    ports:
      - "8188:80"
    volumes:
      # The folder that contains RecentClips / SavedClips / SentryClips.
      - /mnt/usb/TeslaCam:/teslacam:ro
    environment:
      - AUTH_USER=me
      - AUTH_PASSWORD=change-me
    restart: unless-stopped
```

```bash
docker compose up -d
```

Then open <http://localhost:8188>.

### Docker CLI

```bash
docker run -d --name teslacam-studio -p 8188:80 \
  -v /mnt/usb/TeslaCam:/teslacam:ro \
  -e AUTH_USER=me -e AUTH_PASSWORD=change-me \
  ghcr.io/loule95450/teslacamstudio:latest
```

### The volume

Mount the folder that *contains* the Tesla subfolders:

```
/mnt/usb/TeslaCam        <- mount this at /teslacam
├── RecentClips/
├── SavedClips/
│   └── 2024-01-15_12-30-00/
│       ├── 2024-01-15_12-30-00-front.mp4
│       ├── event.json
│       └── thumb.png
└── SentryClips/
```

A `TeslaCam/` folder one level down is detected too, so mounting the drive root
works as well. Keep the mount **read-only** (`:ro`) - the app never writes to
your footage.

nginx exposes the mount as a JSON directory listing, and the frontend walks it
to build the clip list. Video is served with byte-range support, so seeking and
scrubbing work without downloading whole files.

### If no clips show up

The app tells you what it found at `/teslacam`. The most common cause is a host
path that does not exist: **Docker does not fail on a bad bind-mount source, it
silently creates an empty directory there and mounts that**, so the container
sees an empty volume. Check the left side of your `volumes:` mapping first.

```bash
docker exec teslacam-studio ls /teslacam
```

That should list `RecentClips`, `SavedClips` and `SentryClips`. If it is empty,
the host path is wrong.

### Permission denied on the volume

Common on a NAS, where the shared folder is private to its owner. Find the
numeric owner of the folder:

```bash
stat -c '%u:%g' /path/to/TeslaCam
```

Then pass those two numbers so the nginx workers run as that user:

```yaml
    environment:
      - PUID=1000
      - PGID=1000
```

Do **not** use Docker's `user:` setting for this. It changes the whole
container, and nginx's master process then cannot bind port 80 or write its own
configuration, so the container exits immediately. `PUID`/`PGID` only change the
worker processes, which is what actually reads your footage.

### 🔓 Encrypted clips

Vehicle software 2026.20 encrypts dashcam footage on the USB drive by default,
writing it into an `EncryptedClips/` tree. The clips keep the `.mp4` extension
but no player can open them: the bytes are AES-128-CBC, and the per-file keys
are held by Tesla against your account rather than stored on the drive.

Without credentials the app detects those clips, badges them, and explains what
they are instead of showing a dead player. Two ways to make them playable:

**Turn encryption off in the car** (affects future recordings only):
Controls > Safety > Encrypt Dashcam Recordings.

**Or let the container decrypt them.** It asks Tesla for the key and streams a
plain MP4 to your browser. Only file identifiers leave your machine; the
footage never does, and the token stays server-side.

```yaml
    environment:
      - TESLA_ACCESS_TOKEN=eyJhbGciOi...
    volumes:
      - ./teslacam-config:/config      # so a rotated token survives a restart
```

#### Getting the token

The token has to come from **dashcam.tesla.com itself**. Its OAuth client is
`dashcam`, and a token from a third-party Tesla auth app (client `ownerapi`) is
refused with HTTP 401. These are the values the site uses, read from its own
bundle:

| | |
|---|---|
| `client_id` | `dashcam` |
| `scope` | `openid profile email employee` |
| token endpoint | `https://auth.tesla.com/oauth2/v3/token` |
| `redirect_uri` | `https://dashcam.tesla.com/callback` |

**The quick way.** Open <https://dashcam.tesla.com>, sign in, then paste the
snippet in `doc/find-tesla-token.js` into the DevTools console. The site keeps
its tokens in `localStorage` under keys starting `ROCP_`, so the snippet lists
them with their audience and expiry **without printing the tokens themselves**.
Copy the access token with `copy(__tokens[0].token)`.

**Or from the network traffic.** With DevTools open on the Network tab, drag one
encrypted clip onto the page. Nothing calls the API before you do, so an empty
Network tab until then is expected. Then open any `/api/1/` request and copy
what follows `Authorization: Bearer `.

Either way it goes in `TESLA_ACCESS_TOKEN`, and it expires after a few hours.

For something longer lived, take the refresh token from the same
`localStorage` (`ROCP_refreshToken`) and set `TESLA_REFRESH_TOKEN` instead. The
container renews the access token itself against the `dashcam` client. Tesla
rotates refresh tokens on use, so mount `/config` on a writable volume or the
rotation is lost on the next restart.

#### When it does not work

```bash
docker compose logs 2>&1 | grep -E '\[decrypt\]|\[auth\]'
```

`HTTP 401` twice means the token is not accepted, and the log then prints the
token's `aud` claim so you can see which service it was minted for.

To check a real file against the layout the decryption expects, without moving
any footage anywhere:

```bash
curl -s -u USER:PASSWORD "http://localhost:8188/decrypt/inspect/EncryptedClips/RecentClips/SOME-CLIP-front.mp4"
```

`vinLooksValid: true` and `publicKeyFirstByte: 0x4` mean the offsets line up.

### 🔐 Authentication

`AUTH_USER` and `AUTH_PASSWORD` put the whole site behind HTTP basic auth,
footage included.

**Leave them unset and everything is public to anyone who can reach the port** -
your videos and the GPS track in their metadata. The container prints a loud
warning at startup when that is the case. Basic auth is only as private as the
transport, so put a TLS-terminating reverse proxy in front of it if the
instance is reachable from the internet.

### Building it yourself

```bash
docker build -t teslacam-studio .
```

### Running without Docker

Any static file server works, but the footage is then served from wherever you
point it - the volume features assume the container's nginx config.

```bash
npm run serve
```

## ⌨️ Keyboard Shortcuts

*   **`Spacebar`**: Play / Pause the video.

## 🔒 Privacy First

All video decoding and metadata parsing happens in your browser. Nothing is
uploaded anywhere: the footage is read straight off the volume you mounted, and
it never leaves the machine you run the container on.

That does mean the instance itself is the boundary. Set `AUTH_USER` /
`AUTH_PASSWORD`, and do not expose it to the internet without TLS.

## 🛠️ Tech Stack

*   **HTML5, CSS3, JavaScript (ES6+)**
*   No frameworks, just pure vanilla JS for performance.
*   File System Access API for local file handling.
*   **Tauri** for desktop application (Rust backend + WebView).

## 📄 License

AGPL-3.0 License

