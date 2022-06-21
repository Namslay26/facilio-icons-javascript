import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: './index.js',
  output: {
    file: './index.esm.js',
    format: 'esm'
  },
  external:[/@babel\/runtime/],
  plugins: [resolve(), babel({ babelHelpers:'runtime' ,plugins:['@babel/plugin-transform-runtime']})]
};