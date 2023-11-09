const noPrivateKeywordRule = {
    meta: {
        docs: {
            description: 'Enforce the use of # to create private properties',
            category: 'Best Practices',
            recommended: true,
        },
        fixable: 'code',
        type: 'Problem',
    },
    create(context: any) {
        return {
            PropertyDefinition(node: any) {
                if (node.accessibility === 'private' && !node.key.name.startsWith('#')) {
                    context.report({
                        node,
                        message: `Private class property '${node.key.name}' should use '#' instead of the keyword private.`,
                        /*fix(fixer) {
                            const range = [node.key.range[0], node.key.range[0]];
                            const text = '#' + node.key.name;
                            return fixer.replaceTextRange(range, text);
                        }*/
                    });
                }
            },
            MethodDefinition(node: any) {
                if (node.accessibility === 'private' && !node.key.name.startsWith('#')) {
                    context.report({
                        node,
                        message: `Private class method '${node.key.name}' should use '#' instead of the keyword private.`,
                    });
                }
            }
        };
    },
};

export default noPrivateKeywordRule;