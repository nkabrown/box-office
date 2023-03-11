# Box Office

**Kick-off Product**

Define tasks to deliver new features.

This repository is an implementation in web components of Ryan Singer's [Systemizing kick-off](https://world.hey.com/rjs/15-systemizing-kick-off-c05bbbf2) article.

## Quickstart

```shell
# test npm version, if version < 7 run 'npm install -g npm@latest'
npm --version

# install exact dependencies and set up git hooks
npm ci

# start watchers for file changes and run buildless development server
npm run dev
```

## Supporting Documentation

**Dependencies**

-   [Lit](https://lit.dev) - web component template rendering library

**Development Dependencies**

-   [browserslist](https://github.com/browserslist/browserslist) - targeted browser list for tooling
-   [chai](https://www.chaijs.com/) - make testing assertions
-   [concurrently](https://github.com/open-cli-tools/concurrently) - run multiple npm scripts simultaneously
-   [copyfiles](https://github.com/calvinmetcalf/copyfiles) - copy files with the command line
-   [ESLint](https://eslint.org) - static analysis to find and fix JavaScript problems
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - turn off linting rules that conflict with prettier
-   [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - linting for browser compatible code patterns
-   [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) - apply linting rules to inline scripts in html
-   [eslint-plugin-lit](https://github.com/43081j/eslint-plugin-lit) - linting rules for Lit templating library
-   [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc) - linting rules for custom elements (web components)
-   [husky](https://github.com/typicode/husky) - easily setup git hooks
-   [lint-staged](https://github.com/okonet/lint-staged) - execute scripts on staged files via git pre-commit hook
-   [prettier](https://prettier.io) - low configuration opinionated code formatter
-   [rollup](https://rollupjs.org/) - tree-shaking ES6 module bundler for JavaScript
-   [rollup-plugin-copy](https://github.com/vladshcherbin/rollup-plugin-copy) - copy files and directories for distribution
-   [rollup-plugin-delete](https://github.com/vladshcherbin/rollup-plugin-delete) - delete files and directories of old distribution
-   [rollup-plugin-html-literals](https://github.com/jleeson/rollup-plugin-html-literals) - minify html and css template literals in bundle
-   [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve) - resolve paths to node modules in bundle
-   [rollup-plugin-scss-lit](https://github.com/prantlf/rollup-plugin-scss-lit) - import Sass files as constructable stylesheets in bundle
-   [rollup-plugin-summary](https://yousifalraheem.github.io/rollup-plugin-summary/) - summarizes size of rollup build output
-   [@rollup/plugin-terser](https://github.com/rollup/plugins/tree/master/packages/terser) - parse, mangle, and minify JS with terser in bundle
-   [TypeScript](https://www.typescriptlang.org/) - strongly typed superset of JavaScript that compiles down to working JavaScript
-   [typescript-lit-html-plugin](https://github.com/microsoft/typescript-lit-html-plugin) - adds intelliSense to VS Code for Lit TypeScript projects
-   [web-dev-server](https://modern-web.dev/docs/dev-server/overview/) - buildless development server
-   [web-test-runner](https://modern-web.dev/docs/test-runner/overview/) - test runner for web applications
-   [wireit](https://github.com/google/wireit) - additional performance and control for npm scripts

For an ever-developing account of why I make the decisions I make see my [engineering philosophy statement](https://github.com/nkabrown/truckers-atlas/blob/main/engineering-mindset.md).

## Updating Dependencies

Regularly updating dependencies and dev dependencies is very beneficial for long lasting codebases.

-   Run `npm outdated` to list dependencies in need of review.
-   Review release notes and/or change logs for list of dependencies with new updates.
    -   Is there new functionality this codebase can use?
    -   Do changes need to be made to upgrade?
    -   Are any problematic issues associated with these changes?
-   Run `npx browserslist-lint` to update `caniuse-lite` database.
