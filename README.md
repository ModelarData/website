# modelardata.com

Website of ModelarData ApS, built with [Astro](https://astro.build) and hosted on GitHub Pages.

| | |
| --- | --- |
| Hosting | GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main` |
| Preview | https://modelardata.github.io/website/ (until the custom domain is set) |
| DNS | Wix (`ns0.wixdns.net`, `ns1.wixdns.net`) |
| E-mail (MX) | Microsoft 365 — do not change these records |

## Working on the site

```sh
npm ci
npm run dev     # local preview at http://localhost:4321
npm run build   # static site in dist/
npm run check   # type check
```

- All copy is in `src/content.ts`. Facts marked REPO come from [ModelarDB-RS](https://github.com/ModelarData/ModelarDB-RS).
- Team photos and collaborator logos in `src/assets/` are served as responsive WebP. The logo is `src/components/Logo.astro`.
- There is no form: "Get a demo" and "Contact" open an e-mail to hello@modelardata.com.
- SEO: title, description, canonical, Open Graph image (`public/og.png`), JSON-LD, sitemap and robots. Fonts are self-hosted; no cookies or third-party scripts.
- Links to pages on the site use `withBase()` from `src/lib/url.ts`, so the site works both under `/website/` on github.io and at the root of the custom domain.

## GitHub Pages notes

- Pages cannot send HTTP headers, so the Content-Security-Policy is a `<meta>` tag in `src/layouts/Layout.astro`. HSTS and `frame-ancestors` are not available.
- `/mobile` (the old Wix mobile page) is a redirect page; unknown paths show `src/pages/404.astro`.

## Custom domain

1. In Settings → Pages, set the custom domain to `www.modelardata.com`.
2. At Wix DNS: `www` CNAME → `modelardata.github.io`; apex A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Keep the Microsoft 365 records (MX, SPF, autodiscover, verification) unchanged.
3. When the certificate is issued, enable "Enforce HTTPS".
