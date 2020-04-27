export default {
    input: 'lib/esm/index.js',
    output: 'lib/umd/index.js',
    output: {
        name: 'hrtime',
        file: 'lib/umd/index.js',
        format: 'umd',
        exports: "named",
    },
  };