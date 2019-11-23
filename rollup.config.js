import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';

const commonPlugins = [
  resolve(),
  postcss({}),
  babel({
    exclude: ['node_modules/**'],
    presets: ['@babel/preset-env', '@babel/preset-react']
  }),
  commonjs()
];

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'ReactPrismJS',
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'React'
      }
    },
    external: ['react'],
    plugins: [...commonPlugins]
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    external: ['react'],
    plugins: [...commonPlugins]
  }
];
