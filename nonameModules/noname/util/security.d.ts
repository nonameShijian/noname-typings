export default exports;
export type AccessAction = import("./sandbox.js").AccessAction;
export type Domain = import("./sandbox.js").Domain;
export type Marshal = import("./sandbox.js").Marshal;
export type Monitor = import("./sandbox.js").Monitor;
export type Rule = import("./sandbox.js").Rule;
export type Sandbox = import("./sandbox.js").Sandbox;
declare namespace exports {
    export { enterSandbox };
    export { exitSandbox };
    export { currentSandbox };
    export { createSandbox };
    export { isUnsafeObject };
    export { assertSafeObject };
    export { getIsolateds };
    export { getIsolatedsFrom };
    export { importSandbox };
    export { requireSandbox };
    export { requireSandboxOn };
    export { isSandboxRequired };
    export { initSecurity };
    export { _eval as eval };
    export { _exec as exec };
    export { _exec2 as exec2 };
    export { SANDBOX_ENABLED };
}
/**
 * ```plain
 * 将一个沙盒作为当前联网传输的运行沙盒
 * ```
 *
 * @param {Sandbox} box
 */
declare function enterSandbox(box: Sandbox): void;
/**
 * ```plain
 * 退出当前联网传输的运行沙盒
 * ```
 */
declare function exitSandbox(): void;
/**
 * ```plain
 * 获取当前指定的联网传输运行沙盒
 * ```
 *
 * @returns {Sandbox?}
 */
declare function currentSandbox(): Sandbox | null;
/**
 * ```plain
 * 创建一个新的沙盒
 * ```
 *
 * @returns {Sandbox?}
 */
declare function createSandbox(): Sandbox | null;
/**
 * ```plain
 * 判断对象是否是安全对象
 * ```
 *
 * @param {Object?} obj 要检查的对象
 * @param {string?} prop 指定要检查的属性描述符
 */
declare function isUnsafeObject(obj: any | null, prop?: string | null): boolean;
/**
 * ```plain
 * 确保对象是安全对象
 * ```
 *
 * @param {Object?} obj 要检查的对象
 * @param {string?} prop 指定要检查的属性描述符
 */
declare function assertSafeObject(obj: any | null, prop?: string | null): void;
/**
 * ```plain
 * 导出当前沙盒的Function类型
 * ```
 *
 * @param {Sandbox} sandbox
 * @returns {Array<typeof Function>}
 */
declare function getIsolateds(sandbox: Sandbox): Array<typeof Function>;
/**
 * ```plain
 * 根据传入对象的运行域获取对应的Function类型
 * ```
 *
 * @param {Object} item
 * @returns {Array<typeof Function>}
 */
declare function getIsolatedsFrom(item: any): Array<typeof Function>;
/**
 * ```plain
 * 导入 `sandbox.js` 的相关类
 *
 * 请注意，这需要先判断 `security.isSandboxRequired()`
 * ```
 *
 * @returns {{
 *     AccessAction: typeof import("./sandbox.js").AccessAction,
 *     Domain: typeof import("./sandbox.js").Domain,
 *     Marshal: typeof import("./sandbox.js").Marshal,
 *     Monitor: typeof import("./sandbox.js").Monitor,
 *     Rule: typeof import("./sandbox.js").Rule,
 *     Sandbox: typeof import("./sandbox.js").Sandbox,
 * }}
 */
declare function importSandbox(): {
    AccessAction: typeof import("./sandbox.js").AccessAction;
    Domain: typeof import("./sandbox.js").Domain;
    Marshal: typeof import("./sandbox.js").Marshal;
    Monitor: typeof import("./sandbox.js").Monitor;
    Rule: typeof import("./sandbox.js").Rule;
    Sandbox: typeof import("./sandbox.js").Sandbox;
};
/**
 * ```plain
 * 进入沙盒运行模式
 * ```
 */
declare function requireSandbox(): void;
/**
 * ```plain
 * 进入沙盒运行模式
 * ```
 *
 * @param {string} ip
 */
declare function requireSandboxOn(ip: string): void;
/**
 * ```plain
 * 判断是否是沙盒运行模式
 * ```
 *
 * @returns {boolean}
 */
declare function isSandboxRequired(): boolean;
/**
 * ```plain
 * 初始化模块
 * ```
 */
declare function initSecurity({ lib, game, ui, get, ai, _status, gnc, }: {
    lib: any;
    game: any;
    ui: any;
    get: any;
    ai: any;
    _status: any;
    gnc: any;
}): Promise<void>;
/**
 * ```plain
 * 简单的、不带上下文的模拟eval函数
 *
 * 自动根据沙盒的启用状态使用不同的实现
 * ```
 *
 * @param {any} x
 * @returns {any}
 */
declare function _eval(x: any): any;
/**
 * ```plain
 * 携带简单上下文的eval函数
 *
 * 自动根据沙盒的启用状态使用不同的实现
 * ```
 *
 * @param {any} x
 * @param {Object} scope
 * @returns {any}
 */
declare function _exec(x: any, scope?: any): any;
/**
 * ```plain
 * 携带简单上下文的eval函数，并返回scope
 * eval代码的返回值将覆盖 `scope.return` 这个属性
 * 另外任意因对未定义变量赋值导致全局变量赋值的行为将被转移到scope里面
 * （替代eval的对策函数，具体看下面的例子）
 *
 * 自动根据沙盒的启用状态使用不同的实现
 *
 * 下面是 `security.exec2` 的使用示例:
 * ```
 * @example
 * ```javascript
 * // 执行一段代码并获取赋值的多个变量
 * let { return: skill, filter, content } = security.exec2(`
 *     filter = (e, p) => e.source && e.source == p;
 *     content = async (e, t, p) => t.cancel();
 *     return { filter, content };
 * `, { content: () => {}, lib, game, ui, get, ai, _status, }); // 提供默认的content，提供六个变量
 * ```
 *
 * @param {any} x
 * @param {Object|"window"} scope 传入一个对象作为上下文，或者传入 "window" 来生成一个包含指向自身的 `window` 属性的对象
 * @returns {Object}
 */
declare function _exec2(x: any, scope?: any | "window"): any;
/** @type {boolean} */
declare let SANDBOX_ENABLED: boolean;
/** @type {typeof import("./sandbox.js").Sandbox} */
declare let Sandbox: typeof import("./sandbox.js").Sandbox;
/** @type {typeof import("./sandbox.js").AccessAction} */
declare let AccessAction: typeof import("./sandbox.js").AccessAction;
/** @type {typeof import("./sandbox.js").Domain} */
declare let Domain: typeof import("./sandbox.js").Domain;
/** @type {typeof import("./sandbox.js").Marshal} */
declare let Marshal: typeof import("./sandbox.js").Marshal;
/** @type {typeof import("./sandbox.js").Monitor} */
declare let Monitor: typeof import("./sandbox.js").Monitor;
/** @type {typeof import("./sandbox.js").Rule} */
declare let Rule: typeof import("./sandbox.js").Rule;
