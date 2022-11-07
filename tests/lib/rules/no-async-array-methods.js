/**
 * @fileoverview Blah
 * @author Sabbir
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var ruleGenerator = require("../../../lib/no-async-array-methods-generator"),
  RuleTester = require("eslint").RuleTester;

const notAllowedArrayMethods = [
  "forEach",
  "map",
  "reduce",
  "filter",
  "some",
  "every",
  "find",
  "findIndex",
];

var rule = ruleGenerator(notAllowedArrayMethods);

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTestersValids = notAllowedArrayMethods
  .map((method) => {
    return [
      {
        code: `[].${method}(() => {})`,
        parserOptions: { ecmaVersion: 8 },
      },
      {
        code: `[].${method}(function() {})`,
        parserOptions: { ecmaVersion: 8 },
      },
    ];
  })
  .flat();

const ERROR_MSG = (method) => `No async function in method '${method}'`;
const ruleTestersInvalids = notAllowedArrayMethods
  .map((method) => {
    return [
      {
        code: `[].${method}(async () => {});`,
        parserOptions: { ecmaVersion: 8 },
        errors: [
          {
            message: ERROR_MSG(method),
          },
        ],
      },
      {
        code: `[].${method}(async function() {});`,
        parserOptions: { ecmaVersion: 8 },
        errors: [
          {
            message: ERROR_MSG(method),
          },
        ],
      },
    ];
  })
  .flat();

var ruleTester = new RuleTester();
ruleTester.run("no-async-array-methods", rule, {
  valid: ruleTestersValids,
  invalid: ruleTestersInvalids,
});
