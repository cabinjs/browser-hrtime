type HrTime = [number, number];

const NS_PER_SEC: number = 1e9;

const hrtime = (previousTimestamp?: HrTime):HrTime => {
  const baseNow = Math.floor((Date.now() - performance.now()) * 1e-3);
  let clocktime = performance.now() * 1e-3;
  let seconds = Math.floor(clocktime) + baseNow;
  let nanoseconds = Math.floor((clocktime % 1) * 1e9);

  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
hrtime.bigint = (time?: HrTime) => {
    const diff = hrtime(time);
    return ((diff[0] * NS_PER_SEC + diff[1]) as unknown) as bigint;
};
if(!(typeof process !== "undefined" && typeof process.hrtime !== "undefined")){
  window.process = <any>{};
  global.process.hrtime = hrtime;
}

module.exports = process.hrtime;
export default process.hrtime;
