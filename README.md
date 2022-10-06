# Box Office

**Kick-off Product**

Define tasks to deliver new features.

This repository is an implementation in web components of Ryan Singer's [Systemizing kick-off](https://world.hey.com/rjs/15-systemizing-kick-off-c05bbbf2) article.

## Quickstart

```shell
# test npm version, if version < 7 run 'npm install -g npm@latest'
npm --version

npm install

# enable Git pre-commit hook
npm run prepare

# run local development server
npm run start
```

## Supporting Documentation

**Development Dependencies**

-   [browserslist](https://github.com/browserslist/browserslist) - targeted browser list for tooling
-   [chai](https://www.chaijs.com/) - make testing assertions
-   [ESLint](https://eslint.org) - static analysis to find and fix JavaScript problems
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - turn off linting rules that conflict with prettier
-   [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - linting for browser compatible code patterns
-   [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) - apply linting rules to inline scripts in html
-   [eslint-plugin-lit](https://github.com/43081j/eslint-plugin-lit) - linting rules for Lit templating library
-   [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc) - linting rules for custom elements (web components)
-   [husky](https://github.com/typicode/husky) - easily setup git hooks
-   [lint-staged](https://github.com/okonet/lint-staged) - execute scripts on staged files via git pre-commit hook
-   [prettier](https://prettier.io) - low configuration opinionated code formatter
-   [web-dev-server](https://modern-web.dev/docs/dev-server/overview/) - buildless development server
-   [web-test-runner](https://modern-web.dev/docs/test-runner/overview/) - test runner for web applications

**Dependencies**

-   [Lit](https://lit.dev) - web component template rendering library

For an ever-developing account of why I make the decisions I make see my [engineering philosophy statement](https://github.com/nkabrown/truckers-atlas/blob/main/engineering-mindset.md).
