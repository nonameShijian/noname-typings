/**
 * @param { InstanceType<typeof GetCompatible> } [instance]
 */
export function setGetCompatible(instance?: InstanceType<typeof GetCompatible>): void;
/**
 * 用于老版本能用的`get`
 */
export class GetCompatible {
    /**
     *
     * @param {[majorVersion: number, minorVersion: number, patchVersion: number]} require
     * @param {[majorVersion: number, minorVersion: number, patchVersion: number]} current
     * @returns
     */
    checkVersion(require: [majorVersion: number, minorVersion: number, patchVersion: number], current: [majorVersion: number, minorVersion: number, patchVersion: number]): boolean;
    /**
     * 获取当前内核版本信息
     *
     * 目前仅考虑`chrome`, `firefox`和`safari`三种浏览器的信息，其余均归于其他范畴
     *
     * > 其他后续或许会增加，但`IE`永无可能
     *
     * @returns {["firefox" | "chrome" | "safari" | "other", number, number, number]}
     */
    coreInfo(): ["firefox" | "chrome" | "safari" | "other", number, number, number];
}
export let get: GetCompatible;
