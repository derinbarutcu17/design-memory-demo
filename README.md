# Design Memory — live demo

This repo is the live proof that [Design Memory](https://github.com/derinbarutcu17/DesignMemory) works:

- `tokens.json` (W3C DTCG) + `DESIGN.md` are the design truth.
- `src/styles/theme.css` is the Tailwind v4 `@theme` generated from the tokens.
- The GitHub Action in `.github/workflows/design-memory.yml` gates every PR.
- Open a PR that adds a raw hex, an arbitrary Tailwind value, or an inline style and the check fails with inline annotations on the exact lines.

Try it: modify `src/components/Input.tsx`, push a branch, open a PR.

Local run:

```bash
npm install
npm run dev        # the app
npx design-memory sync-reference
npx design-memory audit   # after staging changes
```
