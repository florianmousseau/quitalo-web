# quitalo-web

Marketing site for [Quitalo](https://quitalo.co), the local-first companion
for French private landlords: receipts (quittances), rent tracking, IRL
indexation and arrears letters. Free, no account, no server; the data lives
in the landlord's browser.

The application itself lives at
[florianmousseau/quitalo](https://github.com/florianmousseau/quitalo) and is
served at [app.quitalo.co](https://app.quitalo.co).

## Stack

Astro (static output), deployed on Cloudflare Pages from `main`. French-first
content; the canonical product definition lives in `src/consts.ts` and is
reused verbatim by the pages and `/llms.txt`.

## Develop

```sh
npm install
npm run dev
```

## Quality gate

```sh
npm run gate
```

`gate` = `format:check` + `lint` + `check` + `knip` + `dup`. CI runs it on
every push and pull request; gitleaks scans for secrets.
