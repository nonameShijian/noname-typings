/**
 * 暂停x毫秒
 * @param { number } ms
 * @returns { Promise<void> }
 */
export function delay(ms: number): Promise<void>;
/**
 * 将当前Record已有的普通项封装起来，但不阻止其继续扩展
 *
 * @template {object} T
 * @param {T} record - 要封装的Record
 * @returns {Readonly<T>}
 */
export function freezeButExtensible<T extends unknown>(record: T): Readonly<T>;
export function leaveCompatibleEnvironment(): void;
/**
 *
 *
 * @return {never}
 * @throws {Error}
 */
export function jumpToCatchBlock(): never;
/** @type { string } */
export const nonameInitialized: string;
export const assetURL: string;
/** @type {typeof Function} */
export const GeneratorFunction: typeof Function;
/** @type {typeof Function} */
export const AsyncFunction: typeof Function;
/** @type {typeof Function} */
export const AsyncGeneratorFunction: typeof Function;
export const userAgent: string;
export const characterDefaultPicturePath: "image/character/default_silhouette_";
export const device: "android" | "ios";
export const androidNewStandardApp: boolean;
/**
 * 不能被new的类
 */
export class Uninstantable {
}
export let compatibleEnvironment: boolean;
