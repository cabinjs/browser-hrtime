const _hrtime = (previousTimestamp?: [number, number]): [number, number] => {
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
};
const NS_PER_SEC: number = 1e9;
_hrtime.bigint = (time?: [number, number]): bigint => {
  const diff = _hrtime(time);
  return ((diff[0] * NS_PER_SEC + diff[1]) as unknown) as bigint;
};
if ((typeof process === 'undefined' || typeof process.hrtime === 'undefined') && typeof window.process === 'undefined') {
  window.process = <any>{};
}
export default typeof process.hrtime === 'undefined' ? (window.process.hrtime = _hrtime) : process.hrtime;
