import { build } from 'esbuild';
import { copyFile } from 'fs/promises';

// Build ESM version
await build({
  entryPoints: ['src/index.js'],
  outfile: 'dist/index.mjs',
  format: 'esm',
  bundle: true,
  minify: true,
  platform: 'neutral',
});

// Build CJS version
await build({
  entryPoints: ['src/index.js'],
  outfile: 'dist/index.js',
  format: 'cjs',
  bundle: true,
  minify: true,
  platform: 'neutral',
});

// Copy type definitions
await copyFile('src/index.d.ts', 'dist/index.d.ts');