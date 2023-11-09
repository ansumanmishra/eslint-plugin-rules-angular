const noFuncCallsInTemplateRule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow function calls in Angular templates',
            category: 'Possible Errors',
            recommended: false,
        },
        schema: [],
    },
    create: function(context: any) {
        // Parser that can parse Angular templates and provide an AST that ESLint can work with.
        const parser = require('@angular-eslint/template-parser');

        return {
            'Program': (node: any) => {
                // The following code assumes the existence of a parser that can turn Angular templates into an AST ESLint can traverse.
                const templateAST = parser.parse(node);

                // Walk through the template AST looking for function calls.
                traverseTemplateAST(templateAST, (templateNode: any) => {
                    if (templateNode.type === 'FunctionCall') {
                        context.report({
                            node: templateNode,
                            message: 'Using function calls inside Angular templates is disallowed.',
                        });
                    }
                });
            }
        };
    },
};

function traverseTemplateAST(node: any, callback: any) {
    // Recursively traverse the Angular template AST and run the callback on each node.
    callback(node);
    if (node.children) {
        node.children.forEach( (child: any) => traverseTemplateAST(child, callback));
    }
}

export default noFuncCallsInTemplateRule;