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

