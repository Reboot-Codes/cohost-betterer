import { definePlugins } from '@gera2ld/plaid-rollup';
import { defineConfig } from 'rollup';
import userscript from 'rollup-plugin-userscript';
import pkg from './package.json' assert { type: 'json' };
import terser from "@rollup/plugin-terser";

export default defineConfig(Object.entries({
  'cohost-betterer': 'src/cohost-betterer/index.tsx',
}).map(([name, entry]) => ({
  input: entry,
  plugins: [
    ...definePlugins({
      esm: true,
      minimize: false,
      postcss: {
        inject: false,
        minimize: true,
      },
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx'],
    }),
    terser(),
    userscript((meta) => meta.replace('process.env.AUTHOR', pkg.author)),
  ],
  output: {
    format: 'iife',
    file: `dist/${name}.user.js`,
    banner: `(async () => {`,
    footer: `})();`,
    indent: false,
  },
})));
