# eslint-plugin-no-async-array-methods

[![npm version](https://badge.fury.io/js/eslint-plugin-no-async-array-methods.svg)](https://badge.fury.io/js/eslint-plugin-no-async-array-methods)

No async callback for Array methods forEach, map, filter, reduce, some, every, etc.

## Installation

```
$ npm i eslint-plugin-no-async-array-methods --save-dev
$ yarn add -D eslint-plugin-no-async-array-methods
```

**Note:** You have to install `eslint-plugin-no-async-array-methods` globally (using the `-g` flag) if you installed ESLint globally.

## Usage

In your `.eslintrc` configuration file, add `no-async-array-methods` to the plugins section.

```json
{
    "plugins": [
        "no-async-array-methods"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-async-array-methods/no-async-array-methods": 2
    }
} 
```

## Available rules

- `"no-async-array-methods/no-async-array-methods"`
  - Bans async `forEach, filter, some, every, find, findIndex, map, reduce`


- `"no-async-array-methods/all"`
  - (same as above)


- `"no-async-array-methods/defaults"`
  - Bans async `forEach, filter, some, every, find, findIndex`


- `"no-async-array-methods/map-reduce"`
  - Bans async `map, reduce`