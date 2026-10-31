# Node.js Jest - Gilded Rose Refactoring Kata

This repository contains the JavaScript version of Emily Bache's
[Gilded Rose Refactoring Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata),
using Jest.

Read [the requirements](GildedRoseRequirements.md), add tests to characterize the
existing behavior, then refactor `Shop.updateQuality()` and add support for
Conjured items. Do not alter the `Item` class or the `items` property.

## Getting started

This project is ready to go in a [dev container](https://containers.dev/), so you
don't need Node.js or npm installed on your machine. Pick whichever option is
easiest for you:

1. **GitHub Codespaces** — on GitHub, click **Code → Create codespace on main**.
   To open another branch, first select it from the branch selector above the
   file list. Then click **Code → Codespaces** and choose
   `Create codespace on <branch>`. The codespace will contain that branch's code.
2. **VS Code** — install the [Dev Containers] extension, open this folder and
   run **Dev Containers: Reopen in Container**.
3. **Other dev container compatible tools** (Gitpod, Cursor, etc.) — open this
   repository; they pick up `.devcontainer/devcontainer.json` automatically.

The first time the container starts, `npm ci` installs exactly the dependency
tree recorded in `package-lock.json`.

## Running the tests

From a terminal inside the dev container:

```shell
npm test
```

For watch mode, run `npm run test:watch`.

## Linting

```shell
npm run lint
```

The project uses [neostandard] via ESLint's flat configuration.

## Project layout

- `gilded_rose.js` — the legacy `Shop` code and the `Item` model
- `gilded_rose.test.js` — the starting Jest test
- `gilded_rose.characterisation.test.js` — the 30-day golden-master test
- `texttests/ThirtyDays/stdout.gr` — the expected characterisation test output
- `GildedRoseRequirements.md` — the kata requirements
- `package.json` — dependencies and npm scripts
- `package-lock.json` — the pinned dependency tree
- `eslint.config.mjs` — ESLint flat configuration
- `.devcontainer/devcontainer.json` — dev container configuration

[Dev Containers]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
[neostandard]: https://github.com/neostandard/neostandard
