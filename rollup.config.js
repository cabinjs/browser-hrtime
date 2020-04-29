// export default {
//     input: 'lib/esm/index.js',
//     output: 'lib/umd/index.js',
//     output: {
//         name: 'hrtime',
//         file: 'lib/umd/index.js',
//         format: 'umd',
//     },
//   };

import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {terser} from "rollup-plugin-terser";

// delete old typings to avoid issues
require('fs').unlink('dist/index.d.ts', (err) => {});

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'umd',
            name: 'hrtime',
		},
		{
			file: 'lib/hrtime.min.js',
			format: 'umd',
            name: 'hrtime',
            plugins: [terser()]
		},
		{
			file: pkg.module,
			format: 'es',
		},
		// {
		// 	file: pkg.browser,
		// 	format: 'es'
		// },
	],
	external: [
		...Object.keys(pkg.dependencies || {})
	],
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
    ]
};
