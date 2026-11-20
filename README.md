# EcoTrack

A local-first sustainability tracker built with React, TypeScript and Vite. Log electricity, water, waste and travel measurements; review trends and history; keep a private journal; and export/import backups.

## Downloads

Windows desktop installers and the browser build are published under [GitHub Releases](https://github.com/muscovich/ecotrackbyandre/releases).

- **Windows setup:** `EcoTrack Setup 1.0.0.exe`
- **Windows portable:** `EcoTrack 1.0.0.exe`
- **Web app:** `EcoTrack-web.zip`

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

## Build release assets

```bash
npm run build
npm run dist:web
npm run dist:win
```

The web build is a static PWA suitable for GitHub Pages or another static host. The Windows desktop build uses Electron.

## Data and privacy

EcoTrack stores profile details, usage entries and journal notes locally. The browser build uses local storage; the desktop build uses its local application storage. No account, cloud sync, analytics, server, or shared community feed is included. Data is not shared between devices. Use **Settings → Export** to create a JSON backup and **Import** to restore it. Browser cleanup or removal of application data can erase records, so keep backups.

The web service worker caches application files for offline use. It does not upload user records.

## Measurement notes

EcoTrack records user-entered quantities in kWh, litres, kilograms and kilometres. It does not fabricate carbon savings, environmental equivalencies, rankings, or community-wide statistics. Blank fields are recorded as zero. Note when a measurement is an estimate rather than a direct reading.

## Automated publishing

Pushing a tag matching `v*` triggers the release workflow. It builds the web ZIP and Windows setup/portable executables, then attaches them to a GitHub Release. Pushing to `main` deploys the web build to GitHub Pages. If Pages deployment is not enabled, select **Settings → Pages → Build and deployment → GitHub Actions**.

## Licence

MIT.
