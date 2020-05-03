const {performance} = require('perf_hooks');
global.performance = performance;
const save = process.hrtime;
process.hrtime = undefined;
// window = {};
// window.process = {};
const hrtime = require('./hrtime');
process.hrtime = save;

describe('Compare to original process.hrtime', () => {
    test('20942101 nanoseconds ', async () => {
      let impl = hrtime();
      let original = process.hrtime();
      impl[1] += 20942101;
      original[1] += 20942101;
      const diff = hrtime(impl);
      const diff_original = process.hrtime(original);
      const res = Math.round(Number(diff[0] * 1e9 + diff[1])/ 10000000);
      const res_original = Math.round(Number(diff_original[0] * 1e9 + diff_original[1])/ 10000000);
      expect(res === res_original).toBe(true);
    });
    test('1000000552 nanoseconds ', async () => {
      let impl = hrtime();
      let original = process.hrtime();
      original[0] -= 1;
      original[1] -= 552;
      impl[0] -= 1;
      impl[1] -= 552;
      const diff = hrtime(impl);
      const diff_original = process.hrtime(original);
      const res = Math.round(Number(diff[0] * 1e9 + diff[1])/ 10000000);
      const res_original = Math.round(Number(diff_original[0] * 1e9 + diff_original[1])/ 10000000);
      expect(res === res_original).toBe(true);
    });
});
