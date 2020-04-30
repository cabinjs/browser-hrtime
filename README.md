# browser-hrtime
browser support for `process.hrtime()`.

[![Build Status](https://travis-ci.com/vltansky/browser-hrtime.svg?branch=master)](https://travis-ci.com/vltansky/browser-hrtime)
[![Coverage Status](https://coveralls.io/repos/github/vltansky/browser-hrtime/badge.svg?branch=master)](https://coveralls.io/github/vltansky/browser-hrtime?branch=master)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvltansky%2Fbrowser-hrtime.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvltansky%2Fbrowser-hrtime?ref=badge_shield)

# Install
`npm i browser-hrtime`
# Usage

## NodeJS
### As a polyfill
```js
require('browser-hrtime');

const NS_PER_SEC = 1e9;
const time = process.hrtime();// [ 1800216, 25 ]

setTimeout(() => {
  const diff = process.hrtime(time);// [ 1, 552 ]
  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);// Benchmark took 1000000552 nanoseconds
}, 1000);
```
### As a function
```js
const hrtime = require('browser-hrtime');//if your code will 

const NS_PER_SEC = 1e9;
const time = hrtime();// [ 1800216, 25 ]

setTimeout(() => {
  const diff = hrtime(time);// [ 1, 552 ]
  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);// Benchmark took 1000000552 nanoseconds
}, 1000);
```

Typescript: `"esModuleInterop": true`

## ECMAScript

```js
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
```js
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
### usage as an Angular polyfill:
add to `src/polyfills.ts`:
`import 'browser-hrtime';`

*You should add @types/node to your Angular app*
`npm i -S @types/node`
Then in `tsconfig.json`
```json
"angularCompilerOptions": {
    "types" : ["node"]
    ....
}
```

## Use in browser
```html
<!DOCTYPE html>
<html>

<head>
    <script crossorigin src="https://unpkg.com/browser-hrtime/lib/umd/hrtime.min.js"></script>
    <script>
        console.log(hrtime());
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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvltansky%2Fbrowser-hrtime.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvltansky%2Fbrowser-hrtime?ref=badge_large)