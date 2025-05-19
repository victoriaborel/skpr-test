import { FlatCompat } from '@eslint/eslintrc';
import perfectionist from 'eslint-plugin-perfectionist';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const rules = {
  'perfectionist/sort-imports': [
    'error',
    {
      order: 'asc',
      type: 'natural',
      newlinesBetween: 'always',
      groups: [
        'type',
        ['builtin', 'external'],
        'internal-type',
        ['assets', 'svg'],
        'internal',
        ['aliasedType', 'parent-type', 'sibling-type', 'index-type'],
        ['aliasedComponents', 'parent', 'sibling', 'index'],
        ['aliasedHelpers', 'aliasedConstants'],
        'object',
        'side-effect',
        'unknown',
      ],
      customGroups: {
        value: {
          assets: ['^@assets/.+'],
          svg: ['^@svg/.+'],
          aliasedType: ['@types', '@types/.+'],
          aliasedComponents: ['^@components/.+'],
          aliasedHelpers: ['@helpers/.+'],
          aliasedConstants: ['@constants/.+', '@constants'],
        },
      },
    },
  ],
  'perfectionist/sort-exports': [
    'error',
    {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      specialCharacters: 'keep',
      partitionByComment: false,
      partitionByNewLine: false,
      groupKind: 'mixed',
    },
  ],
  'react/jsx-curly-brace-presence': [
    'error',
    {
      children: 'never',
      props: 'never',
    },
  ],
};

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  { plugins: { perfectionist: perfectionist }, rules: rules },
];

export default eslintConfig;
