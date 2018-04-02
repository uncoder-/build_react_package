import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/index.jsx',
	output: [
		{
			file: 'dist/index.js',
			format: 'es',
		},
	],
	external: ['react', 'react-dom', 'prop-types'],
	plugins: [
		resolve(),
		commonjs(),
		postcss({ minimize: true, }),
		babel({
			exclude: 'node_modules/**',
		}),
	],
};
