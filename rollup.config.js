import pkg from './package.json';
import {terser} from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';
import sourceMaps from 'rollup-plugin-sourcemaps';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'umd',
			name: 'hrtime',
			sourcemap: true
		},
	],
    watch: {
        include: 'src/**',
    },
	external: [
		// ...Object.keys(pkg.dependencies || {})
	],
    plugins: [
		typescript(),
		terser(),
		sourceMaps()
    ]
};
