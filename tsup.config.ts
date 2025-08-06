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
    '.woff': 'copy',
    '.woff2': 'copy',
    '.ttf': 'copy',
  },
  tsconfig: './tsconfig.app.json',
  // Copy additional assets
  onSuccess: async () => {
    console.log('Build completed successfully');
  },
});