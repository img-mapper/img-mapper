import path from 'node:path';

import type { StorybookConfig } from '@storybook/react-vite';

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['./react-code-addon/register.tsx', './vue-code-addon/register.tsx'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  features: {
    interactions: false,
    actions: false,
  },
  viteFinal: (viteConfig) => {
    const { root } = viteConfig;

    if (!root) return viteConfig;

    return {
      ...viteConfig,
      resolve: {
        ...viteConfig.resolve,
        alias: {
          ...(Array.isArray(viteConfig.resolve?.alias)
            ? null
            : (viteConfig.resolve?.alias as Record<string, string>)),
          '@': path.resolve(root, 'src'),
        },
      },
    };
  },
} as StorybookConfig;

export default config;
