import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/index.jsx',
	output: [
		{
			file: 'lib/index.js',
			format: 'es',
		},
	],
	external: ['react', 'react-dom', 'prop-types'],
	plugins: [
		resolve(),
		commonjs(),
		postcss({ minimize: true, }),
		babel({
			runtimeHelpers: true,
			babelrc: false,
			presets: [['@babel/env', { modules: false }], '@babel/preset-react'],
			plugins: [
				[
					'@babel/plugin-transform-runtime',
					{
						corejs: false,
						helpers: false,
						regenerator: true,
						useESModules: false
					}
				],
				['@babel/plugin-proposal-class-properties', { loose: false }]
			]
		}),
	],
};
