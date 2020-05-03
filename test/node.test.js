const hrtime = require('../lib/hrtime');
// const {performance} = require('perf_hooks');
// global.performance = performance;
// const save = process.hrtime;
// process.hrtime = undefined;
// window = {};
// window.process = {};
// const hrtime = require('./test/hrtime');
// process.hrtime = save;

// let first = hrtime();
// first[1] += 20942101;
// const diff = hrtime(first);
// const res = Number(diff[0] * 1e9 + diff[1]);
// console.log(res);
describe('NodeJS', () => {
  test('hrtime === process.hrtime', async () => {
    expect(hrtime === process.hrtime).toBe(true);
  });

  test('hrtime() should be function', async () => {
    expect(typeof hrtime).not.toBe('undefined');
  });

  test('process should be defined', async () => {
    expect(typeof process).not.toBe('undefined');
  });

  test('process.hrtime() should be a function', async () => {
    expect(typeof process.hrtime).toBe('function');
  });

  test('process.hrtime.bigint() should be a function', async () => {
    expect(typeof process.hrtime.bigint).toBe('function');
  });
});
