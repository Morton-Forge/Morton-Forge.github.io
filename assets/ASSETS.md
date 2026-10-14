# Site assets and licensing

All files in this folder are used by the Morton Forge static website (`src/index.html`).

| Asset | Origin | License / rights |
|-------|--------|------------------|
| `favicon.svg` | Original artwork for Morton Forge LLC (MF monogram) | © Morton Forge LLC. All rights reserved. |
| `og-image.svg` | Original artwork for Morton Forge LLC (social preview card) | © Morton Forge LLC. All rights reserved. |

`og-image.svg` is referenced by Open Graph and Twitter meta tags. Some social crawlers prefer raster images (PNG/JPEG); add a raster variant in a later publishing task if preview cards require it.

## Logo treatment

No separate raster or vector logo file is checked in. The header uses the approved **text treatment** (“Morton Forge” / “Morton Forge LLC”) with the `favicon.svg` mark for visual identity.

## Typography

The site uses **system UI fonts** only (`system-ui`, `Segoe UI`, etc. in CSS). No third-party font files are bundled.

## Apple touch icon

No `apple-touch-icon` PNG is checked in yet. iOS home-screen icons typically need a 180×180 PNG; add one in a follow-up task if that experience is required.

## Production URLs

Social and canonical metadata in `index.html` reference the production site at `https://www.mortonforge.com/`. Asset paths are **relative** (`assets/…`, `css/…`) so they resolve correctly on that host and in local preview.
