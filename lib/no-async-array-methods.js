/**
 * @fileoverview Blah
 * @author Sabbir
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const notAllowedArrayMethods = [
  "forEach",
  "map",
  "reduce",
  "filter",
  "some",
  "every",
];

module.exports = {
  create: function (context) {
    return {
      ExpressionStatement: function (node) {
        const { callee } = node.expression;
        if (!callee || !callee.property || !callee.property.name) return;
        if (notAllowedArrayMethods.includes(callee.property.name)) {
          const functionArguments = node.expression.arguments.find((n) => {
            return (
              n.type === "ArrowFunctionExpression" ||
              n.type === "FunctionExpression"
            );
          });
          if (functionArguments) {
            if (functionArguments.async) {
              context.report(
                node,
                `No async function in method '${callee.property.name}'`
              );
            }
          }
        }
      },
    };
  },
};
