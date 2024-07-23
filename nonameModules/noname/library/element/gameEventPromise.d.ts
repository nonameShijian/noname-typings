/**
 * 将事件Promise化以使用async异步函数来执行事件。
 *
 * 事件Promise化后，需要既能使用await等待事件完成，
 * 又需要在执行之前对事件进行配置。
 *
 * 所以这个类的实例集成了事件和Promise二者的所有属性，
 * 且Promise的原有属性无法被修改，一切对这个类实例的属性修改，删除，
 * 再配置等操作都会转发到事件对应的属性中。
 *
 * @extends {Promise<GameEvent>}
 *
 * @example
 * 使用await xx()等待异步事件执行：
 * ```js
 * await game.xxx().setContent('yyy').set(zzz, 'i');
 * ```
 * 使用await player.xxx()等待异步事件执行：
 * ```js
 * await player.draw(2);
 * game.log('等待', player, '摸牌完成执行log');
 * ```
 */
export class GameEventPromise extends Promise<import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent> {
    /**
     * @param { GameEvent } arg
     */
    constructor(arg: GameEvent);
    /** 获取原事件对象 */
    toEvent(): import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent;
    /**
     * 在某个异步事件中调试变量信息
     *
     * 注: 在调试步骤中`定义的变量只在当前输入的语句有效`
     *
     * @example
     * 在技能中调试技能content相关的信息
     * ```js
     * await event.debugger();
     * ```
     * 在技能中调试触发此技能事件的相关的信息
     * ```js
     * await trigger.debugger();
     * ```
     */
    debugger(): Promise<any>;
    /**
     * 获取 Result 对象中的信息。
     * @example
     * ```js
     // 示例 1：
     const chooseCardResult = await player.chooseCard().forResult();
     // 获取整个结果对象，然后访问如 chooseCardResult.cards 等属性
     
     // 示例 2：
     const cards = await player.chooseCard().forResult('cards');
     // 获取结果对象中 'cards' 属性的值
     
     // 示例 3：
     const [success, cards, targets] = await player.chooseCardTarget().forResult('bool', 'cards', 'targets');
     // 获取结果对象中多个属性的值
     // - success 表示是否成功
     // - cards 表示选择的卡片
     // - targets 表示选择的目标
     ```
     * @template {keyof Result} T
     * @overload
     * @returns {Promise<Result>}
     *
     * @overload
     * @param {T} param0
     * @returns {Promise<Exclude<Result[T], undefined>>}
     *
     * @overload
     * @param { T[] } params
     * @returns { Promise<Exclude<Result[T], undefined>[]> }
     */
    forResult<T extends keyof Result>(): Promise<Result>;
    /**
     * 获取 Result 对象中的信息。
     * @example
     * ```js
     // 示例 1：
     const chooseCardResult = await player.chooseCard().forResult();
     // 获取整个结果对象，然后访问如 chooseCardResult.cards 等属性
     
     // 示例 2：
     const cards = await player.chooseCard().forResult('cards');
     // 获取结果对象中 'cards' 属性的值
     
     // 示例 3：
     const [success, cards, targets] = await player.chooseCardTarget().forResult('bool', 'cards', 'targets');
     // 获取结果对象中多个属性的值
     // - success 表示是否成功
     // - cards 表示选择的卡片
     // - targets 表示选择的目标
     ```
     * @template {keyof Result} T
     * @overload
     * @returns {Promise<Result>}
     *
     * @overload
     * @param {T} param0
     * @returns {Promise<Exclude<Result[T], undefined>>}
     *
     * @overload
     * @param { T[] } params
     * @returns { Promise<Exclude<Result[T], undefined>[]> }
     */
    forResult<T extends keyof Result>(param0: T): Promise<Exclude<Result[T], undefined>>;
    /**
     * 获取 Result 对象中的信息。
     * @example
     * ```js
     // 示例 1：
     const chooseCardResult = await player.chooseCard().forResult();
     // 获取整个结果对象，然后访问如 chooseCardResult.cards 等属性
     
     // 示例 2：
     const cards = await player.chooseCard().forResult('cards');
     // 获取结果对象中 'cards' 属性的值
     
     // 示例 3：
     const [success, cards, targets] = await player.chooseCardTarget().forResult('bool', 'cards', 'targets');
     // 获取结果对象中多个属性的值
     // - success 表示是否成功
     // - cards 表示选择的卡片
     // - targets 表示选择的目标
     ```
     * @template {keyof Result} T
     * @overload
     * @returns {Promise<Result>}
     *
     * @overload
     * @param {T} param0
     * @returns {Promise<Exclude<Result[T], undefined>>}
     *
     * @overload
     * @param { T[] } params
     * @returns { Promise<Exclude<Result[T], undefined>[]> }
     */
    forResult<T extends keyof Result>(params: T[]): Promise<Exclude<Result[T], undefined>[]>;
    /**
     * 返回result中的bool项
     */
    forResultBool(): Promise<boolean>;
    /**
     * 返回result中的targets项。
     */
    forResultTargets(): Promise<import("noname-typings/nonameModules/noname/library/element/player.js").Player[]>;
    /**
     * 返回result中的cards项
     */
    forResultCards(): Promise<import("noname-typings/nonameModules/noname/library/element/card.js").Card[]>;
    /**
     * 返回result中的card项
     *
     * @returns {Promise<VCard>|Promise<Card>} 返回的card项。
     *
     */
    forResultCard(): Promise<VCard> | Promise<Card>;
    /**
     * 返回result中的control项。
     */
    forResultControl(): Promise<string>;
    /**
     * 返回result中的links项。
     */
    forResultLinks(): Promise<any[]>;
    #private;
}
