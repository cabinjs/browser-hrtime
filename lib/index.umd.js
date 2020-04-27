(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['browser-hrtime'] = factory());
}(this, (function () { 'use strict';

  function hrtime(previousTimestamp) {
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

  var main = typeof process !== "undefined" && typeof process.hrtime !== "undefined"
      ? process.hrtime
      : hrtime;

  return main;

})));
