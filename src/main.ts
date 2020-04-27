declare module "browser-hrtime" {
  function hrtime(time?: [number, number]): [number, number];
  export = hrtime;
}