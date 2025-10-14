import { configs, plugins, rules } from 'eslint-config-airbnb-extended';

const customTSESLintConfig = [
  // TypeScript ESLint Plugin
  plugins.typescriptEslint,
  // Airbnb Base TypeScript Config
  ...configs.base.typescript,
  // Airbnb Next TypeScript Config
  ...configs.react.typescript,
  // Airbnb TypeScript ESLint Strict Rules
  rules.typescript.typescriptEslintStrict,
  // Disable Return Type for Features Hook
  {
    name: 'x/typescript-eslint/features-hook-only',
    files: ['src/features/**/use*.ts'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];

export default customTSESLintConfig;
