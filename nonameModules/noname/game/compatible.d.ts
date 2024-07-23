/**
 * @param { InstanceType<typeof GameCompatible> } [instance]
 */
export function setGameCompatible(instance?: InstanceType<typeof GameCompatible>): void;
export class GameCompatible {
    /**
     * `game/game.js`中退出客户端用到的代码
     *
     * @author Spmario233
     */
    exit(): void;
    /**
     * @async
     * @param {UpdateReason} type
     * @param {string} [text]
     * @returns {Promise<unknown>}
     */
    tryUpdateClient(type: UpdateReason, text?: string): Promise<unknown>;
}
export let game: GameCompatible;
/**
 * *
 */
export type UpdateReason = number;
export namespace UpdateReason {
    let DEBUG: number;
    let FALLBACK: number;
    let UNDERSUPPORT: number;
}
