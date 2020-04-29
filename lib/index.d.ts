export declare type HRTime = [number, number];
declare global {
    namespace process{
        function hrtime(previousTimestamp?: [HRTime] | undefined): HRTime;
    }
}
export default hrtime;