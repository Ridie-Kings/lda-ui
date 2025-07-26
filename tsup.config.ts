import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom'],
  clean: true,
  sourcemap: true,
  splitting: false,
  outDir: 'dist',
  loader: {
    '.css': 'copy',
  },
  tsconfig: './tsconfig.app.json',
});