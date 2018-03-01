import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'index.jsx',
	output: [
		{
			file: 'dest/index.js',
			format: 'cjs',
		},
	],
	external: ['react', 'react-dom', 'prop-types'],
	plugins: [
		resolve(),
		commonjs(),
		postcss({
			minimize: true,
		}),
		babel({
			exclude: 'node_modules/**',
		}),
	],
};
