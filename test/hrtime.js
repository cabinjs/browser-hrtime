(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.hrtime = factory());
}(this, (function () { 'use strict';

  var _perfomancePolyfill = function () {
      // based on https://gist.github.com/paulirish/5438650 copyright Paul Irish 2015
      if ("performance" in window === false) {
          window.performance = {};
      }
      Date.now = (Date.now || (function () {
          return new Date().getTime();
      }));
      if ("now" in window.performance === false) {
          var nowOffset_1 = Date.now();
          if (performance.timing && performance.timing.navigationStart) {
              nowOffset_1 = performance.timing.navigationStart;
          }
          window.performance.now = function () { return Date.now() - nowOffset_1; };
      }
  };
  var _hrtime = function (previousTimestamp) {
      _perfomancePolyfill();
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
