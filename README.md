# eslint-config-tnez

[![npm version](https://badge.fury.io/js/eslint-config-tnez.svg)](https://badge.fury.io/js/eslint-config-tnez)
[![GitHub license](https://img.shields.io/badge/license-MIT-green)](https://github.com/tnez/eslint-config-tnez/blob/master/LICENCE)

## Installation

1. Install all peer dependencies

    - **npm**: `npx install-peerdeps --dev eslint-config-tnez`
    - **yarn**:  `npx install-peerdeps --dev -Y eslint-config-tnez`

1. Add `.eslintrc`:

    ```
    {
      "extends": ["tnez"]
    }
    ```

1. (Optionally ) Add `.prettierrc` that matches config in order to play nicely with editor plugins:

    ```
    {
      "semi": false,
      "singleQuote": true,
      "trailingComma": "all"
    }
    ```
