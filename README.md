# Project Baseplate
This is intended to serve as a base when initializing new projects to lay the foundations for good coding practices throughout it's lifecycle.

What's included:
  - [eslint](http://eslint.org/)
  - [sasslint](https://github.com/sasstools/sass-lint)
  - ~Webpack~ (future release)
  
---

To get started, open up terminal in your projects git root. I say `git root` because there is no purpose in linting an entire WordPress installation for example, when we only care about the `themes` directory.

Execute the command:

```git clone https://github.com/JUMP-Agency/project-baseplate . && npm install```

Next, you'll want to set up the paths to your scss and js directories for the linters to find in your package.json

````
  ...
  "scripts": {
    "eslint": "./node_modules/.bin/eslint js/**/*.js --format table; exit 0",
    "sasslint": "./node_modules/.bin/sass-lint -c ./sass-lint.yml 'scss/**/*.scss' -v -q"
  }
  ...
````

In the future, these tasks will be combined into the build process but for now are listed separate and will need to be invoked manually.

## Rules Used ##

#### SASS ####
```
  # Extends
  extends-before-mixins: 1
  extends-before-declarations: 1
  placeholder-in-extend: 1

  # Mixins
  mixins-before-declarations: 1

  # Line Spacing
  one-declaration-per-line: 1
  empty-line-between-blocks: 1
  single-line-per-selector: 1

  # Disallows
  no-attribute-selectors: 0
  no-color-hex: 0
  no-color-keywords: 1
  no-color-literals: 1
  no-combinators: 0
  no-css-comments: 0
  no-debug: 1
  no-disallowed-properties: 0
  no-duplicate-properties: 1
  no-empty-rulesets: 1
  no-extends: 0
  no-ids: 1
  no-important: 0
  no-invalid-hex: 1
  no-mergeable-selectors: 1
  no-misspelled-properties: 1
  no-qualifying-elements: 1
  no-trailing-whitespace: 1
  no-trailing-zero: 1
  no-transition-all: 1
  no-universal-selectors: 0
  no-url-domains: 0
  no-url-protocols: 1
  no-vendor-prefixes: 1
  no-warn: 1
  property-units: 0

  # Nesting
  declarations-before-nesting: 1
  force-attribute-nesting: 1
  force-element-nesting: 1
  force-pseudo-nesting: 1

  # Name Formats
  class-name-format: 1
  function-name-format: 1
  id-name-format: 0
  mixin-name-format: 1
  placeholder-name-format: 1
  variable-name-format: 1

  # Style Guide
  attribute-quotes: 1
  bem-depth: 0
  border-zero: 1
  brace-style: 1
  clean-import-paths: 1
  empty-args: 1
  hex-length: 1
  hex-notation: 1
  indentation: 1
  leading-zero: 1
  max-line-length: 0
  max-file-line-count: 0
  nesting-depth: 1
  property-sort-order: 1
  pseudo-element: 1
  quotes: 1
  shorthand-values: 1
  url-quotes: 1
  variable-for-property: 1
  zero-unit: 1

  # Inner Spacing
  space-after-comma: 1
  space-before-colon: 1
  space-after-colon: 1
  space-before-brace: 1
  space-before-bang: 1
  space-after-bang: 1
  space-between-parens: 1
  space-around-operator: 1

  # Final Items
  trailing-semicolon: 1
  final-newline: 1
```

---

#### JavaScript #### 
Uses the [AirBnB configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with the added rules of using double quotes as oppposed to single quotes. This is purely by preference and really has no added benefit other than aesthetic. What matters is consistency.
