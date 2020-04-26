# browser-hrtime
browser support for `process.hrtime()`.
# Install
`npm i browser-hrtime`
# Usage
```
const hrtime = require('browser-hrtime');

const NS_PER_SEC = 1e9;
const time = hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
  const diff = hrtime(time);
  // [ 1, 552 ]

  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
  // Benchmark took 1000000552 nanoseconds
}, 1000);
```

You can monkey-patch process.hrtime for your dependency graph like this:
```
process.hrtime = require('browser-hrtime');
const someModule = require('module-that-uses-hrtime');
```

see [NodeJS documenation](https://nodejs.org/api/process.html#process_process_hrtime_time) for more examples
