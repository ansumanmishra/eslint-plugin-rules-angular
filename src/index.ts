import { TSESLint } from '@typescript-eslint/utils';
import NoTranslationRule from "./no-translation-rule";
import noPrivateKeywordRule from "./no-private-keyword";

export const rules = {
  // @ts-ignore
  'no-translation': NoTranslationRule,
  // @ts-ignore
  'no-private-keyword': noPrivateKeywordRule
} satisfies Record<string, TSESLint.RuleModule<string, Array<unknown>>>;
