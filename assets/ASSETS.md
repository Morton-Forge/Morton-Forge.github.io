# Site assets and licensing

All files in this folder are used by the Morton Forge static website (`src/index.html`, `src/privacy.html`, and related pages).

## Brand marks (Morton Forge LLC)

| File | Use | Notes |
|------|-----|--------|
| `logo-horizontal-light.jpg` | **Site header** (full horizontal lockup) | Used in light and dark UI; cream mat matches `#f7f6f2` chip in header. © Morton Forge LLC. |
| `logo-horizontal-on-dark.png` | Site header (`prefers-color-scheme: dark`) | White “MORTON” + orange “FORGE” on black. © Morton Forge LLC. |
| `logo-horizontal-dark.png` | **Deprecated** | Superseded by `logo-horizontal-on-dark.png` (old file had illegible charcoal “MORTON”). Safe to delete. |
| `favicon.png` | Browser tab | Symbol from app-icon export. |
| `apple-touch-icon.jpg` | iOS home screen | Rounded-square symbol. |
| `og-image.jpg` | Link previews (LinkedIn, Slack, etc.) | Not shown in page chrome. |
| `logo-stacked-reference.png` | Design reference only | Not linked in HTML. |
| `logo-stacked-reference.png` | Reference only (not linked in HTML) | Original stacked concept on white. |
| `og-image.jpg` | Open Graph / Twitter `summary_large_image` | 1200×630-style card with tagline. |
| `favicon.png` | Browser tab icon (from app-icon symbol) | PNG; also used at 192×192. |
| `apple-touch-icon.jpg` | iOS home-screen icon | Rounded-square symbol on white. |
Legacy placeholders (safe to delete after review): `favicon.svg`, `logo-mark.svg`, `logo.svg`, `og-image.svg`.

## Typography

Self-hosted **WOFF2** subsets under `fonts/`:

| File | Family | License |
|------|--------|---------|
| `dm-sans-latin.woff2` | DM Sans | [SIL OFL 1.1](fonts/OFL.txt) |
| `source-serif-4-600-latin.woff2` | Source Serif 4 | [SIL OFL 1.1](fonts/OFL.txt) |

Site accent orange **`#F26522`** is aligned with the brand mark.

## Production URLs

Canonical and social metadata use `https://www.mortonforge.com/`. Asset paths in HTML are **relative** (`assets/…`).

## CI note (`og-image.jpg`)

`npm run validate` skips the live `og-image.jpg` URL until the first publish that includes this file (linkinator runs before the ADO publish step). After production serves the JPG, you may remove the skip from `package.json` if you want link checks on that URL.

## Follow-up for design tools

Optional upgrades from your design agent:

- `logo-horizontal-transparent.png` (true transparency for any header background)
- `logo-symbol.svg` for crisp favicon at small sizes
