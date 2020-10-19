import pkg from './package.json';
import {terser} from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';
import sourceMaps from 'rollup-plugin-sourcemaps';
import copy from 'rollup-plugin-copy'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'umd',
			name: 'hrtime',
			plugins: [terser()],
			sourcemap: true
		},
		{
			file: 'test/hrtime.js',
			format: 'umd',
			name: 'hrtime',
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
		sourceMaps(),
		copy({
			targets: [
				{ src: 'src/hrtime.d.ts', dest: 'dist' },
			]
		})
    ]
};
