import { IS_DEV } from "./config";

export const d = (v: unknown) =>
  IS_DEV ? console.log(JSON.stringify(v, null, 2)) : () => {};
export const p = IS_DEV ? (...args: unknown[]) => console.log(args) : () => {};
