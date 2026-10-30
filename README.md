# NodeJS - Bootstrapping Jest Test Suite

This project is ready to go in a [dev container](https://containers.dev/), so you
don't need NodeJS (or npm) installed on your machine at all — the
[ghcr.io/tdd-workshops/devcontainer-js](https://ghcr.io/tdd-workshops/devcontainer-js)
image provides everything needed.

## Getting started

Pick whichever option is easiest for you:

1. **GitHub Codespaces** — on GitHub, click **Code → Create codespace on main**.

2. **VS Code** — install the [Dev Containers] extension, open this folder and
   run **Dev Containers: Reopen in Container**.

3. **Other dev container compatible tools** (Gitpod, Cursor, etc.) — open this
   repository; they pick up `.devcontainer/devcontainer.json` automatically.

The first time the container starts, `make install-dependencies` runs
automatically (via `postCreateCommand`). It installs the pinned packages listed
in `package.json` into a `node_modules` folder in the workspace, so everyone in
a workshop ends up with exactly the same Jest and Babel versions.

## Running the tests

From a terminal inside the dev container:

```shell
npm test
```

or:

```shell
make test
```

You should see something like this:

```shell
> tdd-lab-nodejs-jest@1.0.0 test
> jest

 PASS  ./sum.test.js

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.294 s
Ran all test suites.
```

Run `make help` to see all available targets.

## Project layout

- `sum.js` — the code under test:

  ```javascript
  const sum = (a, b) => a + b
  export default sum
  ```

- `sum.test.js` — the test suite:

  ```javascript
  import sum from './sum'

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
  ```

- `.babelrc` — tells Babel to compile for the Node version in the container,
  which is what lets Jest run the ES module syntax above
- `package.json` — pinned dependencies and the `npm test` / `npm run lint`
  scripts
- `eslint.config.mjs` — ESLint flat config (see [Linting](#linting))
- `Makefile` — common tasks (`make help`)
- `.devcontainer/devcontainer.json` — dev container configuration

## Linting

From a terminal inside the dev container:

```shell
npm run lint
```

or:

```shell
make lint
```

The project uses [neostandard], the maintained successor to the old `standard`
ESLint config, via ESLint's flat config file `eslint.config.mjs`. The
`env: ['jest']` option in that file declares the globals Jest injects at runtime
(`test`, `expect` and friends); without it ESLint reports them as undefined in
`sum.test.js`.

## About Jest

Jest is a test runner that bundles its own assertion library, so you write
expectations as matcher calls instead of plain `assert` statements:

```javascript
expect(sum(1, 2)).toBe(3)
```

`toBe` compares with `Object.is`, which is what you want for primitives. For
arrays, objects and other structures use `toEqual`, which compares recursively —
and when they differ Jest tells you exactly which part didn't match. For example,
append this to `sum.test.js`:

```javascript
test('lists are equivalent', () => {
  expect([1]).toEqual([1, 2])
})
```

This gives you the following output:

```shell
 FAIL  ./sum.test.js

  ● lists are equivalent

    expect(received).toEqual(expected) // deep equality

    Expected: [1, 2]
    Received: [1]

       1 | test('lists are equivalent', () => {
    >  2 |   expect([1]).toEqual([1, 2])
         |               ^
       3 | })

      at Object.<anonymous> (sum.test.js:2:15)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
```

Read up more about the types of matchers available in Jest:
[https://jestjs.io/docs/using-matchers][jest-matchers]

## About dev containers

Dev containers standardise a project's development environment in a
`.devcontainer/devcontainer.json` file at the root of the repository. Any tool
that understands the [dev container spec](https://containers.dev/) — VS Code,
GitHub Codespaces, Gitpod, and others — will build or reuse the same container
image, so every participant in a workshop gets an identical setup. The old
Gitpod-specific configuration has been replaced by this single, portable
definition, and the duplicate npm/yarn lockfiles are gone — dependencies are
pinned in `package.json` and installed by `make install-dependencies`.

[Dev Containers]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
[neostandard]: https://github.com/neostandard/neostandard
[jest-matchers]: https://jestjs.io/docs/using-matchers
