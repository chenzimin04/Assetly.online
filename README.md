# Assetly

Assetly is a public guide library about organizing, preparing, and delivering creative files. The site contains original articles and uses fictional examples that are labeled as such.

## Local build

Python 3.12 or newer is sufficient; there are no third-party packages.

```sh
python3 site/build.py
python3 -m http.server 8765 -d dist
```

Open `http://localhost:8765/`. Articles live in `content/guides/`; layout and page copy live in `site/build.py`, and styles in `site/static/style.css`.

## Deployment

The repository includes `vercel.json`. Vercel runs the Python build and serves `dist/` as a static site. Keep the Vercel project connected to this repository with `main` as the production branch and the project root set to the repository root.

The old storefront routes and APIs are removed from the deployed site when this version reaches production. Preserve the previous Git history, external order records, and payment provider access for any outstanding customer support. The Contact page gives earlier purchasers a support route.

## Before applying for AdSense

Confirm that `support@assetly.online` receives mail, inspect the live domain and all public pages, verify ownership and Search Console, review the live privacy disclosures, and complete the separate 73-point AdSense audit. Publishing the site does not guarantee AdSense approval.
