import {Rule} from 'eslint';
import RuleListener = Rule.RuleListener;

const missingTranslationRule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prevent text without translation'
    },
    schema: [],
    messages: {
      type: 'Problem',
    }
  },
  create(context: any): RuleListener {
    const stringContainsText = (input: any) => {
      return input.replace(/\s/g, '').length !== 0
    };

    return {
      Text$3(node: any) {
        if (node.value !== undefined && stringContainsText(node.value) && !node.value.includes('transloco') && node.parent.name !== 'mat-icon') {
          context.report({
            node: node,
            // @ts-ignore
            messageOd: 'transloco',
            message: '"{{ nodeValue }}" should be piped in transloco',
            data: {
              nodeValue: node.value.replace(/\n+/g, '').replace(/ +/g, '').trim()
            }
          })
        }
      }
    }
  }
};

export default missingTranslationRule;
