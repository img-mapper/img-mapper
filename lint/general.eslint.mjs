const customGeneralESLintConfig = [
  {
    name: 'x/general/rules',
    rules: {
      'no-console': 'off',
      'no-void': 'off',
      'consistent-return': 'off',
      'no-array-constructor': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allow: ['_id'],
        },
      ],
      'no-restricted-syntax': [
        'error',
        'ForStatement',
        'ContinueStatement',
        'DoWhileStatement',
        'WhileStatement',
        'WithStatement',
        // React
        {
          selector: 'MemberExpression[object.name="React"]',
          message: 'Use of React.method is not allowed.',
        },
        // React - TypeScript
        {
          selector: 'TSTypeReference[typeName.left.name="React"]',
          message: 'Use of React.type is not allowed.',
        },
      ],
    },
  },
  {
    name: 'x/general/ts-only',
    files: ['**/*.{ts,cts,mts,tsx}'],
    ignores: ['docs/**/*.{ts,cts,mts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./*', '../*'],
              message: "Please use the absolute path '@/*' instead.",
            },
          ],
        },
      ],
    },
  },
];

export default customGeneralESLintConfig;
