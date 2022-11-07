//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const allBannedMethods = [
  "forEach",
  "filter",
  "some",
  "every",
  "find",
  "findIndex",
  "map",
  "reduce",
];

const defaultBannedMethods = [
  "forEach",
  "filter",
  "some",
  "every",
  "find",
  "findIndex",
];

const mapReduceMethods = ["map", "reduce"];

const generator = require("./lib/no-async-array-methods-generator");

module.exports = {
  rules: {
    "no-async-array-methods": generator(allBannedMethods),
    all: generator(allBannedMethods),
    defaults: generator(defaultBannedMethods),
    "map-reduce": generator(mapReduceMethods),
  },
};
