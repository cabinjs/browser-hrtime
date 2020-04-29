const hrtime = require("../lib");
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let save;
const NS_PER_SEC = 1e9;
describe('NodeJS', () => {
  // describe('NodeJS process.hrtime()', () => {
    test('process should be defined', async () => {
      expect(typeof process).not.toBe('undefined');
    });
    test('process.hrtime() should be a function', async () => {
      expect(typeof process.hrtime).toBe('function');
    });
  // });
  // describe('hrtime() function', () => {
  //   beforeAll(() => {
  //     save = process.hrtime;
  //     process.hrtime = undefined;

  //     hrtime = require('../lib/cjs/index');

  //   });
  //   afterAll(() => {
  //     process.hrtime = save;
  //   })
  //   test('process.hrtime() should be a function', async () => {
  //     expect(typeof process.hrtime).toBe('function');
  //   });

  //   test('process.hrtime() should return array length of 2', async () => {
  //     const result = process.hrtime(); // e.g [ 1800216, 25 ]
  //     expect(result).toHaveLength(2);
  //   });

  //   test('should return around ~1000000552 nanoseconds', async () => {
  //       const time = process.hrtime(); // e.g [ 1800216, 25 ]
  //       await wait(1000);
  //       const diff = process.hrtime(time); // [ 1, 552 ]
  //       const result = Number(diff[0] * 1e9 + diff[1]);
  //       const actual = Math.round(result / 100000000);
  //       expect(actual).toBe(10);// 1000000552 nanoseconds
  //     }
  //   );
  // });
});