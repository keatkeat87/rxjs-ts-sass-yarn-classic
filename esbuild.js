/* eslint-disable */
const esbuild = require('esbuild');
const glob = require('glob');

esbuild
  .build({
    entryPoints: glob.sync('./src/**/*.ts').filter(path => !path.includes('/module/')),
    minify: process.env.NODE_ENV === 'production',
    bundle: true,
    outdir: './src',
    sourcemap: true,
    watch: true,
  })
  .catch(() => process.exit(1));
