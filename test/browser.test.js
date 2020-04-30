const pti = require('puppeteer-to-istanbul');
const puppeteer = require('puppeteer');
const path = require('path');

const timeout = process.env.SLOWMO ? 30000 : 10000;
let browser, page;

describe('browser', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(`http://127.0.0.1:1234/test/'`, { waitUntil: 'domcontentloaded' });
    await page.coverage.startJSCoverage();
  });

  beforeAll(async () => {
    await page.addScriptTag({ url: '../lib/hrtime.js', type: 'module' });
  });
  describe('process.hrtime.bigint()', () => {
    test(
      'process.hrtime.bigint() should be a function',
      async () => {
        const hrtimeType = await page.evaluate(() => {
          return typeof process.hrtime.bigint;
        });
        expect(hrtimeType).toBe('function');
      },
      timeout
    );

    test(
      'global var hrtime.bigint() should be a function',
      async () => {
        const hrtimeType = await page.evaluate(() => {
          return typeof hrtime.bigint;
        });
        expect(hrtimeType).toBe('function');
      },
      timeout
    );

    test(
      'process.hrtime.bigint() should return number',
      async () => {
        const result = await page.evaluate(() => {
          var time = process.hrtime.bigint(); // e.g [ 1800216, 25 ]
          return time;
        });
        expect(result).toBeGreaterThanOrEqual(0);
      },
      timeout
    );
  });

  describe('process.hrtime()', () => {
    test(
      'process.hrtime() should be a function',
      async () => {
        const hrtimeType = await page.evaluate(() => {
          return typeof process.hrtime;
        });
        expect(hrtimeType).toBe('function');
      },
      timeout
    );

    test(
      'global var hrtime() should be a function',
      async () => {
        const hrtimeType = await page.evaluate(() => {
          return typeof hrtime;
        });
        expect(hrtimeType).toBe('function');
      },
      timeout
    );

    test(
      'process.hrtime() should return array length of 2',
      async () => {
        const result = await page.evaluate(() => {
          var time = process.hrtime(); // e.g [ 1800216, 25 ]
          return time;
        });
        expect(result).toHaveLength(2);
      },
      timeout
    );

    test(
      'should return around ~1000000552 nanoseconds',
      async () => {
        const result = await page.evaluate(() => {
          return new Promise((resolve, reject) => {
            var time = process.hrtime(); // e.g [ 1800216, 25 ]
            setTimeout(() => {
              var diff = process.hrtime(time); // [ 1, 552 ]
              resolve(Number(diff[0] * 1e9 + diff[1]));
            }, 1000);
          });
        });
        const actual = Math.round(result / 100000000);
        expect(actual).toBe(10); // 1000000552 nanoseconds
      },
      timeout
    );
  });

  afterAll(async () => {
    const jsCoverage = await page.coverage.stopJSCoverage();
    pti.write(jsCoverage);
    await browser.close();
  });
});
