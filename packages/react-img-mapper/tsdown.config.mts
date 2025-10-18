// eslint-disable-next-line import-x/no-extraneous-dependencies
import { defineConfig } from 'tsdown';

export default defineConfig((options) => {
  const { watch } = options;

  return {
    entry: 'src/ImageMapper.tsx',
    dts: true,
    format: ['cjs', 'esm'],
    outDir: 'dist',
    platform: 'browser',
    treeshake: !watch,
    minify: !watch,
    exports: !watch,
  };
});
