import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
    external: ['angular'],
		output: {
			name: 'angularFixedAspectImg',
			file: pkg.browser,
			format: 'umd',
      globals: {
        angular: 'angular'
      }
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				presets: ['@babel/preset-env'],
				exclude: ['node_modules/**']
			})
		]
	},
	{
		input: 'src/index.js',
		external: ['angular'],
		output: [
			{ file: pkg.main,
        format: 'cjs'
      },
			{ file: pkg.module,
        format: 'es'
      }
		],
		plugins: [
			babel({
				presets: ['@babel/preset-env'],
				exclude: ['node_modules/**']
			})
		]
	}
];
