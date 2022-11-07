/**
 * @fileoverview Plugin generator
 * @author Sabbir
 */
"use strict";

module.exports = (notAllowedArrayMethods) => ({
  create: function (context) {
    return {
      ExpressionStatement: function (node) {
        const { callee } = node.expression;
        if (!callee || !callee.property || !callee.property.name) return;
        if (notAllowedArrayMethods.includes(callee.property.name)) {
          const functionArguments = node.expression.arguments.find((n) => {
            return ["ArrowFunctionExpression", "FunctionExpression"].includes(
              n.type
            );
          });
          if (functionArguments && functionArguments.async) {
            context.report(
              node,
              `No async function in method '${callee.property.name}'`
            );
          }
        }
      },
    };
  },
});
