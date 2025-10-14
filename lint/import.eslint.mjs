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
