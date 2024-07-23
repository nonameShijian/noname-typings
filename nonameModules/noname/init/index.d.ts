export function canUseHttpProtocol(): boolean;
/**
 * 传递升级完成的信息
 * @returns { string | void } 返回一个网址
 */
export function sendUpdate(): string | void;
export function boot(): Promise<void>;
export { onload } from "./onload.js";
