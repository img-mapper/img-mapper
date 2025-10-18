import { rules } from 'eslint-config-airbnb-extended';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

const customImportESLintConfig = [
  // Strict Import Rules
  rules.base.importsStrict,
  // Unused Import Config
  {
    name: 'unused-imports/config',
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
  // Disable Default Export for Hooks
  {
    name: 'x/import-x/disable-default-export',
    files: ['**/use*.ts'],
    rules: {
      'import-x/prefer-default-export': 'off',
    },
  },
  // Disable Dependencies Import Issue for Templates ESLint Files
  {
    name: 'x/import-x/disable-extraneous-deps',
    files: ['docs/**/*.{ts,cts,mts,tsx}'],
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
  // Disable Extensions in Module Files
  {
    name: 'x/import-x/disable-extensions-in-module-files',
    files: ['**/*.mjs'],
    rules: {
      'import-x/extensions': 'off',
    },
  },
];

export default customImportESLintConfig;
