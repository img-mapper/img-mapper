// eslint-disable-next-line import-x/no-extraneous-dependencies
import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/ImageMapper.tsx',
  dts: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
  platform: 'browser',
  treeshake: true,
  minify: true,
  exports: true,
});
