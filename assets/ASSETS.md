# Site assets and licensing

All files in this folder are used by the Morton Forge static website (`src/index.html` and related pages).

| Asset | Origin | License / rights |
|-------|--------|------------------|
| `favicon.svg` | Original artwork for Morton Forge LLC (MF monogram) | © Morton Forge LLC. All rights reserved. |
| `logo.svg` | Original horizontal lockup (anvil mark + wordmark) for Morton Forge LLC | © Morton Forge LLC. All rights reserved. Replace with a final brand file when the owner supplies the canonical logo. |
| `logo-mark.svg` | Anvil mark used in the site header beside HTML wordmark (theme-aware text) | © Morton Forge LLC. All rights reserved. |
| `og-image.svg` | Original artwork for Morton Forge LLC (social preview card) | © Morton Forge LLC. All rights reserved. |

`og-image.svg` is referenced by Open Graph and Twitter meta tags. Some social crawlers prefer raster images (PNG/JPEG); add a raster variant in a later publishing task if preview cards require it.

## Typography

Self-hosted **WOFF2** subsets under `fonts/`:

| File | Family | Weights | License |
|------|--------|---------|---------|
| `dm-sans-latin.woff2` | [DM Sans](https://fonts.google.com/specimen/DM+Sans) | 400–700 (variable) | [SIL Open Font License 1.1](https://openfontlicense.org/) |
| `source-serif-4-600-latin.woff2` | [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) | 600–700 (latin subset) | [SIL Open Font License 1.1](https://openfontlicense.org/) |

Loaded via `@font-face` in `css/site.css`. Latin `unicode-range` only; extend subsets if non-English copy is added. Full license text: [`fonts/OFL.txt`](fonts/OFL.txt).

## Apple touch icon

No `apple-touch-icon` PNG is checked in yet. iOS home-screen icons typically need a 180×180 PNG; add one in a follow-up task if that experience is required.

## Production URLs

Social and canonical metadata on the home page reference `https://www.mortonforge.com/`. Asset paths are **relative** (`assets/…`, `css/…`, `js/…`) so they resolve correctly on that host and in local preview.
