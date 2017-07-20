# Project Baseplate [![Dev Dependency Status](https://david-dm.org/jump-agency/project-baseplate/dev-status.svg)](https://david-dm.org/jump-agency/project-baseplate?type=dev) # 
This is intended to serve as a base when initializing new projects to lay the foundations for good coding practices throughout it's lifecycle. Included are also git pre-commit hooks that run the linters before any commits are made. If errors  are found in the project the commit is rejected along with detailed reports.

What's included:
  - [eslint](http://eslint.org/)
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [pre-commit](https://github.com/observing/pre-commit)
  - [sasslint](https://github.com/sasstools/sass-lint)
  - ~Webpack~ (future release)
  
Requirements:
  - node
  - npm
  
---

## Installing

To get started, open up terminal in your projects `git root`.

Execute the command:

```shell
git clone https://github.com/JUMP-Agency/project-baseplate && cd project-baseplate
```

Next, we need to ensure that git histories are not combined when we move the project to our root.

```shell
rm -rf .git
```

Then, move the files out of the git generated `project-baseplate` and into your `cwd` using the command:

```shell
mv project-baseplate/{,.}* .
```

Lastly

```shell
npm install
```


### Configure the package.json

Next, you'll want to set up the paths to your scss and js directories for the linters to find in your package.json

````json
  ...
  "scripts": {
    "eslint": "./node_modules/.bin/eslint js/**/*.js --format table",
    "sasslint": "./node_modules/.bin/sass-lint -c ./sass-lint.yml 'scss/**/*.scss' -v -q",
    ...
  }
  ...
````

Now, whenever you make a commit the linters are run and if an error occurs the commit is not executed. You can however, force the commit to go through using the command:

```shell
git commit -n
```

## Rules Used ##

#### SASS ####
```
  # Extends
  extends-before-mixins: 2
  extends-before-declarations: 2
  placeholder-in-extend: 2

  # Mixins
  mixins-before-declarations: 2

  # Line Spacing
  one-declaration-per-line: 2
  empty-line-between-blocks: 2
  single-line-per-selector: 2

  # Disallows
  no-attribute-selectors: 0
  no-color-hex: 0
  no-color-keywords: 2
  no-color-literals: 2
  no-combinators: 0
  no-css-comments: 0
  no-debug: 2
  no-disallowed-properties: 0
  no-duplicate-properties: 2
  no-empty-rulesets: 2
  no-extends: 0
  no-ids: 2
  no-important: 0
  no-invalid-hex: 2
  no-mergeable-selectors: 2
  no-misspelled-properties: 2
  no-qualifying-elements: 2
  no-trailing-whitespace: 2
  no-trailing-zero: 2
  no-transition-all: 2
  no-universal-selectors: 0
  no-url-domains: 0
  no-url-protocols: 2
  no-vendor-prefixes: 2
  no-warn: 2
  property-units: 0

  # Nesting
  declarations-before-nesting: 2
  force-attribute-nesting: 2
  force-element-nesting: 2
  force-pseudo-nesting: 2

  # Name Formats
  class-name-format: 2
  function-name-format: 2
  id-name-format: 0
  mixin-name-format: 2
  placeholder-name-format: 2
  variable-name-format: 2

  # Style Guide
  attribute-quotes: 2
  bem-depth: 0
  border-zero: 2
  brace-style: 2
  clean-import-paths: 2
  empty-args: 2
  hex-length: 2
  hex-notation: 2
  indentation: 2
  leading-zero: 2
  max-line-length: 0
  max-file-line-count: 0
  nesting-depth: 2
  property-sort-order: 2
  pseudo-element: 2
  quotes: 2
  shorthand-values: 2
  url-quotes: 2
  variable-for-property: 2
  zero-unit: 2

  # Inner Spacing
  space-after-comma: 2
  space-before-colon: 2
  space-after-colon: 2
  space-before-brace: 2
  space-before-bang: 2
  space-after-bang: 2
  space-between-parens: 2
  space-around-operator: 2

  # Final Items
  trailing-semicolon: 2
  final-newline: 2
```

---

#### JavaScript #### 
Uses the [AirBnB configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with the added rules of using double quotes as oppposed to single quotes. This is purely by preference and really has no added benefit other than aesthetic. What matters is consistency.
