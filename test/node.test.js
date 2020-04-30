const hrtime = require('../lib/hrtime');
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
