(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.hrtime = factory());
}(this, (function () { 'use strict';

  var _hrtime = function (previousTimestamp) {
      var baseNow = Math.floor((Date.now() - performance.now()) * 1e-3);
      var clocktime = performance.now() * 1e-3;
      var seconds = Math.floor(clocktime) + baseNow;
      var nanoseconds = Math.floor((clocktime % 1) * 1e9);
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
  var NS_PER_SEC = 1e9;
  _hrtime.bigint = function (time) {
      var diff = _hrtime(time);
      return (diff[0] * NS_PER_SEC + diff[1]);
  };
  if ((typeof process === 'undefined' || typeof process.hrtime === 'undefined') && typeof window.process === 'undefined') {
      window.process = {};
  }
  var index = typeof process.hrtime === 'undefined' ? (window.process.hrtime = _hrtime) : process.hrtime;

  return index;

})));
