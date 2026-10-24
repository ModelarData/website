# modelardata.com — ModelarData ApS (Astro 5, English)

Rebuilt 2026-10-22/24 from the Wix site at the owner's request: same content and colours, SEO, and a dark, code-first developer-tool look (owner feedback 2026-10-24, `temp/2026-10-24_0930_modelardata-dark-devtool-style.md`).
Facts marked REPO in `src/content.ts` (licence, Rust, Arrow/DataFusion/Parquet, code snippets) come from ModelarData's public repository github.com/ModelarData/ModelarDB-RS.
The one-to-one static copy of the Wix site is in git history (commit 4f84d3f, PR #3).
Plan record: `temp/2026-10-22_0925_modelardata-redesign.md`.

| | |
| --- | --- |
| DNS today | Wix (`ns0.wixdns.net`, `ns1.wixdns.net`), not Cloudflare |
| E-mail (MX) | Microsoft 365 (`modelardata-com.mail.protection.outlook.com`) — do not touch |
| Azure | `rg-web-modelardata` / `swa-modelardata` (Free, West Europe), delete lock |
| Preview URL | https://white-desert-030260a03.4.azurestaticapps.net |
| Deploy | `.github/workflows/deploy-modelardata.yml`, secret `AZURE_SWA_TOKEN_MODELARDATA` |

- All copy is in `src/content.ts`. Facts come only from the original site; wording tightened and typos fixed, no new claims.
- Team photos and collaborator logos in `src/assets/` are the owner's uploads from the Wix site, served as responsive WebP. The logo (`src/components/Logo.astro`) is the original line-chart mark.
- Wix stock photos (wind turbines, case-study photos, wave background) are not used: they are licensed for Wix sites only. The hero and case-study pictures are drawn SVG illustrations with no data in them.
- No form: the Wix form only works on Wix. "Get a demo" and "Contact" open an e-mail to hello@modelardata.com (demo with a pre-filled subject).
- SEO: title, meta description, canonical, Open Graph image (`public/og.png`), `Organization` + `SoftwareApplication` JSON-LD, sitemap, robots. Inter and JetBrains Mono are self-hosted; no cookies or third-party scripts.
- `/mobile` (the copy's mobile page) redirects to `/`. Copyright "© 2023–<year>" is kept current in the browser.

Commands: `npm run dev`, `npm run build`, `npm run check`.

## Before DNS cutover (owner approval required)

- Team sign-off on the preview.
- DNS is at Wix: either move the domain's DNS to Cloudflare (like the other sites) or edit records at Wix. E-mail is Microsoft 365: copy MX, SPF, autodiscover and any verification records exactly — `hello@modelardata.com` must keep working.
