module.exports = {
    meta: {
        docs: {
            description: "Enforce limit the number of 'any' types"
        },
        schema: [
            {
                type: "integer",
                minimum: 0,
                default: 5
            }
        ]
    },
    create: function (context) {
        let anyCount = 0;
        const maxCount = context.options[0] || 5; // default to 5
        return {
            TSAnyKeyword(node) {
                anyCount++;
                if (anyCount > maxCount) {
                    context.report({
                        node,
                        message: `In file ${context.getFilename()} at line ${
                            node.loc.start.line
                        }, column ${
                            node.loc.start.column
                        }: The "any" type has been used more than ${maxCount} times.`,
                    });
                }
            },
        };
    },
};