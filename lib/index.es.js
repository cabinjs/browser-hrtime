var hrtime = function (previousTimestamp) {
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
hrtime.bigint = function (time) {
    var diff = hrtime(time);
    return (diff[0] * NS_PER_SEC + diff[1]);
};
if (typeof process === 'undefined') {
    window.process = {};
}
if (typeof process.hrtime === 'undefined') {
    window.process.hrtime = hrtime;
}
var index = process.hrtime;

export default index;
