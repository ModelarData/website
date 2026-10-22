# modelardata.com — static copy (for team validation)

One-to-one static copy of the Wix site https://www.modelardata.com/ (ModelarData ApS), made on 2026-10-22 so the team can validate it before the domain is moved off Wix. **Do not change content** — it is a copy.

| | |
| --- | --- |
| Original | Wix (non-responsive "classic" editor), single page, separate mobile layout |
| DNS today | Wix (`ns0.wixdns.net`, `ns1.wixdns.net`), not Cloudflare |
| E-mail (MX) | Microsoft 365 (`modelardata-com.mail.protection.outlook.com`) — do not touch |
| Azure | `rg-web-modelardata` / `swa-modelardata` (Free, West Europe), delete lock |
| Preview URL | https://white-desert-030260a03.4.azurestaticapps.net |
| Deploy | `.github/workflows/deploy-modelardata.yml`, secret `AZURE_SWA_TOKEN_MODELARDATA` |

## Layout

- `site/` — what gets deployed: `index.html` (desktop), `mobile.html` (Wix mobile layout), `assets/` (images, Wix CSS), `staticwebapp.config.json`, `robots.txt`, `sitemap.xml`.
- `snapshot/` — how it was made: `render.mjs` (scroll-through render with headless Chrome), `anchors.mjs` (menu anchor → element map, result in `anchors.json`), `head.html` / `body.html` (small scripts that replace the Wix runtime). Converter: `tools/wix_snapshot.py`.

## Rebuild

```bash
# once, in a scratch folder: npm i puppeteer-core   (uses the installed Chrome)
node render.mjs https://www.modelardata.com/ <tmp> desktop
node render.mjs https://www.modelardata.com/ <tmp> mobile
python -I tools/wix_snapshot.py <tmp>/desktop_dom.html sites/modelardata/site index.html --bg-width 2560 --origin https://www.modelardata.com \
  --anchors sites/modelardata/snapshot/anchors.json --extra-head sites/modelardata/snapshot/head.html --extra-body sites/modelardata/snapshot/body.html
python -I tools/wix_snapshot.py <tmp>/mobile_dom.html  sites/modelardata/site mobile.html  (same options)
```

## Differences from the original

1. **No Wix runtime.** The page is the HTML Wix rendered in Chrome after scrolling through it (so entrance animations, lazy images and the logo gallery are in their final state). All Wix scripts are removed. Entrance animations therefore do not play; content is simply visible.
2. **Desktop vs mobile.** Wix chooses the layout by user agent on the server. Here a small inline script sends phones to `/mobile.html` and desktop browsers back to `/` (tablets get desktop, as on Wix).
3. **Menu links** point to `#comp-…` anchors instead of being handled by Wix JS; positions measured equal to the live site. As on live, "Collaborators" and "About Us" do nothing on mobile (those anchors do not exist in the Wix mobile layout).
4. **Mobile menu** (hamburger) and the **parallax background** of the desktop "Get Started" section are re-implemented in a few lines of plain JS (`snapshot/body.html`), matched to measurements of the live site.
5. **Contact form.** The Wix form sent submissions to Wix. On the copy, "Submit" opens the visitor's e-mail program with a pre-filled message to hello@modelardata.com (required fields still enforced). `TODO(owner): decide on a real form backend (e.g. Azure Function + mail service) before DNS cutover, or keep the mailto behaviour.`
6. **Fonts stay on Wix's CDN** (`static.parastorage.com`, allows cross-origin use). Helvetica, Avenir and DIN Next are Monotype fonts licensed for Wix sites, so they are not copied to our hosting. If the Wix subscription is cancelled the font licence question must be settled. `TODO(owner): replace with licensed or open fonts before or soon after cutover.`
7. **Images** are copied from `static.wixstatic.com` in the exact sizes Wix served; pixel difference to the live site is 0.08 % (desktop) and 0.003 % (mobile), from image re-encoding. The two desktop **section backgrounds** (hero, "Get Started") are fetched 2560 px wide and fill the section at any window width, as Wix does with JS on resize (`--bg-width 2560`; checked equal to live at 1366, 1920 and 2560 px).
8. Footer text "Powered and secured by Wix" and the Wix default favicon are kept (one-to-one). `TODO(owner): remove/replace at cutover?`
9. `robots.txt` simplified (Wix-specific rules dropped); `sitemap.xml` lists the one page. Canonical URL stays `https://www.modelardata.com`.
10. Security headers from `staticwebapp.config.json` (HSTS, nosniff, frame-options, referrer and permissions policy); unknown URLs redirect to `/`.

## Before DNS cutover (owner approval required)

- Team sign-off on the preview URL.
- Decide items 5, 6 and 8 above.
- DNS is at Wix: either move the domain's DNS to Cloudflare (like the other sites) or edit records at Wix. E-mail is Microsoft 365: copy MX, SPF, autodiscover and any verification records exactly — `hello@modelardata.com` must keep working.
