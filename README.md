# browser-hrtime
browser support for `process.hrtime()`.

[![Build Status](https://travis-ci.com/vltansky/browser-hrtime.svg?branch=master)](https://travis-ci.com/vltansky/browser-hrtime)
[![Coverage Status](https://coveralls.io/repos/github/vltansky/browser-hrtime/badge.svg?branch=master)](https://coveralls.io/github/vltansky/browser-hrtime?branch=master)

# Install
`npm i browser-hrtime`
# Usage
## NodeJS
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

## ESM & Typescript
```
import hrtime from 'browser-hrtime';

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
or you can use as polyfill:
```
import 'browser-hrtime';
const NS_PER_SEC = 1e9;
const time = process.hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
  const diff = process.hrtime(time);
  // [ 1, 552 ]

  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
  // Benchmark took 1000000552 nanoseconds
}, 1000);
```
# UMD
```
<!DOCTYPE html>
<html>

<head>
    <script crossorigin src="https://unpkg.com/browser-hrtime/lib/umd/index.min.js"></script>
    <script>
        const first = process.hrtime();
        console.log(first);
        console.log(process.hrtime(first));
    </script>
</head>

<body>
</body>

</html>
```
see [NodeJS documenation](https://nodejs.org/api/process.html#process_process_hrtime_time) for more examples
