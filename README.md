# eslint-plugin-no-async-array-methods

No async callback for Array methods forEach, map, filter, reduce, some, every

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
        "no-async-array-methods/no-async-array-methods": 2 // 0 for off, 1 for warning, 2 for error, as per eslint configs
    }
}
```
