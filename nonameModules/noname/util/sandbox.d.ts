export type Window = any;
/**
 * ```plain
 * AccessAction枚举
 * 提供给Rule类作为权限ID
 * 对应 Proxy 的12种拦截器
 * ```
 */
export class AccessAction {
    /** ```Reflect.apply``` */
    static CALL: number;
    /** ```Reflect.construct``` */
    static NEW: number;
    /** ```Reflect.get``` */
    static READ: number;
    /** ```Reflect.set ``` */
    static WRITE: number;
    /** ```Reflect.getOwnPropertyDescriptor``` */
    static DESCRIBE: number;
    /** ```Reflect.defineProperty``` */
    static DEFINE: number;
    /** ```Reflect.getPrototypeOf``` */
    static TRACE: number;
    /** ```Reflect.setPrototypeOf``` */
    static META: number;
    /** ```Reflect.preventExtensions``` */
    static SEAL: number;
    /** ```Reflect.has``` */
    static EXISTS: number;
    /** ```Reflect.ownKeys``` */
    static LIST: number;
    /** ```Reflect.delete``` */
    static DELETE: number;
    /**
     * 判断给定的action是否是AccessAction
     *
     * @param {number} action
     * @returns
     */
    static isAccessAction(action: number): boolean;
}
/**
 * ```plain
 * 指定一个对象的封送规则
 *
 * 是否允许对象进行封送
 * 是否允许对象封送到某个具体的运行域
 * 是否允许封送的对象进行特定的操作
 * ```
 */
export class Rule {
    /**
     * ```plain
     * 检查当前是否是 Rule 所属的运行域
     * ```
     *
     * @param {Rule} thiz
     */
    static "__#4@#assertOperator": (thiz: Rule) => void;
    /**
     * ```plain
     * 创建一个封送规则
     * ```
     *
     * @param {Rule?} rule
     */
    constructor(rule?: Rule | null);
    /**
     * ```plain
     * 是否允许对象进行封送
     * ```
     *
     * @type {boolean}
     */
    set canMarshal(newValue: boolean);
    /**
     * ```plain
     * 是否允许对象进行封送
     * ```
     *
     * @type {boolean}
     */
    get canMarshal(): boolean;
    /**
     * ```plain
     * 检查当前的规则是否允许封送到指定的运行域
     * ```
     *
     * @param {Domain} domain
     * @returns {boolean}
     */
    canMarshalTo(domain: Domain): boolean;
    /**
     * ```plain
     * 将特定的运行域添加到当前对象的封送白名单
     *
     * 请注意，封送白名单与黑名单不能同时指定
     * ```
     *
     * @param {Domain} domain
     */
    allowMarshalTo(domain: Domain): void;
    /**
     * ```plain
     * 将特定的运行域添加到当前对象的封送黑名单
     *
     * 请注意，封送白名单与黑名单不能同时指定
     * ```
     *
     * @param {Domain} domain
     */
    disallowMarshalTo(domain: Domain): void;
    /**
     * ```plain
     * 检查给定的AccessAction是否被允许
     * ```
     *
     * @param {number} action
     * @returns {boolean}
     */
    isGranted(action: number): boolean;
    /**
     * ```plain
     * 指定给定的AccessAction是否被允许
     * ```
     *
     * @param {number} action
     * @param {boolean} granted
     */
    setGranted(action: number, granted: boolean): void;
    /**
     * ```plain
     * 判断在给定的AccessAction与指定的参数下是否允许访问
     * ```
     *
     * @param {number} action
     * @param  {...any} args
     * @returns {boolean}
     */
    canAccess(action: number, ...args: any[]): boolean;
    /**
     * ```plain
     * 设置当前的权限控制器
     *
     * 权限控制器形参是拦截器的对应参数
     * 返回值则控制本次访问是否允许
     * ```
     *
     * @param {(action: number, ...args: any[]) => boolean} accessControl
     */
    setAccessControl(accessControl: (action: number, ...args: any[]) => boolean): void;
    #private;
}
/**
 * ```plain
 * 提供封送对象的行为监控
 *
 * 可以对具体的行为、访问的属性进行监控并更改行为
 *
 * 例如监听 dummy 这个对象的 value 属性在运行域 domain 的修改行为:
 * ```
 * ```javascript
 * const monitor = new Monitor();
 * monitor.allow(domain); // 指定监听 domain 运行域
 * monitor.action(AccessAction.WRITE); // 指定监听 Reflect.set 行为
 * monitor.require("target", dummy); // 指定监听 dummy 对象
 * monitor.require("property", "value"); // 指定监听 value 属性
 * monitor.filter((access, nameds) => nameds.value >= 0); // 过滤掉大于等于 0 的修改
 * monitor.then((access, nameds, control) => {
 *     control.overrideParameter("value", 0); // 将要修改的新值改回 0
 * });
 * monitor.start(); // 启动Monitor
 * ```
 */
export class Monitor {
    /** @type {Set<Monitor>} */
    static "__#8@#monitorSet": Set<Monitor>;
    /**
     * ```plain
     * 检查当前是否是 Monitor 所属的运行域
     * ```
     *
     * @param {Monitor} thiz
     */
    static "__#8@#assertOperator": (thiz: Monitor) => void;
    /**
     * ```plain
     * 向外暴露 Monitor 监听的相关数据
     * ```
     *
     * @param {Monitor} thiz
     */
    static "__#8@#exposeInfo": (thiz: Monitor) => Set<any>[];
    /**
     * ```plain
     * 检查 Monitor 监听的命名参数是否符合要求
     * ```
     *
     * @param {Record<string, any>} nameds
     * @param {Record<string, Set>} checkInfo
     */
    static "__#8@#check": (nameds: Record<string, any>, checkInfo: Record<string, Set<any>>) => boolean;
    /**
     * ```plain
     * 处理 Monitor 监听事件
     * ```
     *
     * @param {Monitor} thiz
     * @param {number} access
     * @param {Nameds} nameds
     * @param {Control} control
     */
    static "__#8@#handle": (thiz: Monitor, access: number, nameds: {
        target: any;
        thisArg?: any;
        arguments?: Array<any>;
        newTarget?: Function;
        property?: string | symbol;
        descriptor?: {
            value?: any;
            writable?: boolean;
            get?: () => any;
            set?: (value: any) => void;
            enumerable?: boolean;
            configurable?: boolean;
        };
        receiver?: any;
        prototype?: any;
        value?: any;
    }, control: {
        preventDefault: () => void;
        stopPropagation: () => void;
        overrideParameter: (name: "descriptor" | "value" | "target" | "prototype" | "arguments" | "property" | "receiver" | "newTarget" | "thisArg", value: any) => void;
        setReturnValue: (value: any) => void;
        throwDenied: (message?: string) => never;
    }) => void;
    /**
     * @param {Symbol} signal
     * @param  {...any} args
     */
    static [SandboxExposer2](signal: Symbol, ...args: any[]): void | Set<Monitor> | Set<any>[];
    /**
     * ```plain
     * 获取 Monitor 所属的运行域
     * ```
     */
    get domain(): Domain;
    /**
     * ```plain
     * 指定 Monitor 可以监听的运行域
     * 默认监听封送到的所有运行域
     * ```
     *
     * @param  {...Domain} domains
     * @returns {this}
     */
    allow(...domains: Domain[]): this;
    /**
     * ```plain
     * 指定 Monitor 不可监听的运行域
     * 默认监听封送到的所有运行域
     * ```
     *
     * @param  {...Domain} domains
     * @returns {this}
     */
    disallow(...domains: Domain[]): this;
    /**
     * ```plain
     * 指定 Monitor 监听的访问动作
     * ```
     *
     * @param  {...number} action
     * @returns {this}
     */
    action(...action: number[]): this;
    /**
     *
     * @typedef {"target" | "thisArg" | "arguments"
     *     | "newTarget" | "property" | "descriptor"
     *     | "receiver" | "prototype" | "value"
     * } PropertyKey
     *
     * @typedef {{
     *     domain: Domain,
     *     action: number,
     * }} Access
     *
     * @typedef {{
     *     target: Object,
     *     thisArg?: Object,
     *     arguments?: Array<any>,
     *     newTarget?: Function,
     *     property?: string | symbol,
     *     descriptor?: {
     *         value?: any,
     *         writable?: boolean,
     *         get?: () => any,
     *         set?: (value: any) => void,
     *         enumerable?: boolean,
     *         configurable?: boolean,
     *     },
     *     receiver?: Object,
     *     prototype?: Object,
     *     value?: any,
     * }} Nameds
     *
     * @typedef {{
     *     preventDefault: () => void,
     *     stopPropagation: () => void,
     *     overrideParameter: (name: PropertyKey, value: any) => void,
     *     setReturnValue: (value: any) => void,
     *     throwDenied: (message?: string) => never,
     * }} Control
     *
     */
    /**
     * ```plain
     * 指定 Monitor 监听的命名参数
     *
     * 命名参数可能如下:
     * target: 监听的对象，访问动作：所有
     * thisArg: 调用的this对象，访问动作：CALL
     * arguments: 调用的参数，访问动作：CALL, NEW
     * newTarget: 构造的new.target，访问动作：NEW
     * property: 访问的属性，访问动作：DEFINE, DELETE, DESCRIBE, EXISTS, READ, WRITE
     * descriptor: 定义的属性描述符，访问动作：DEFINE
     * receiver: 设置或读取的this对象，访问动作：READ, WRITE
     * prototype: 定义的原型，访问动作：META
     * value: 设置的新值，访问动作：WRITE
     * ```
     *
     * @param {PropertyKey} name 命名参数名称
     * @param  {...any} values 命名参数可能的值
     * @returns {this}
     */
    require(name: "descriptor" | "value" | "target" | "prototype" | "arguments" | "property" | "receiver" | "newTarget" | "thisArg", ...values: any[]): this;
    /**
     * ```plain
     * 指定 Monitor 监听的过滤器
     *
     * 回调参数 nameds 是一个对象，包含了 Monitor 监听的命名参数
     * ```
     *
     * @param {(access: Access, nameds: Nameds) => boolean} filter 要指定的过滤器
     * @returns {this}
     */
    filter(filter: (access: {
        domain: Domain;
        action: number;
    }, nameds: {
        target: any;
        thisArg?: any;
        arguments?: Array<any>;
        newTarget?: Function;
        property?: string | symbol;
        descriptor?: {
            value?: any;
            writable?: boolean;
            get?: () => any;
            set?: (value: any) => void;
            enumerable?: boolean;
            configurable?: boolean;
        };
        receiver?: any;
        prototype?: any;
        value?: any;
    }) => boolean): this;
    /**
     * ```plain
     * 指定 Monitor 监听的回调函数
     *
     * 回调参数 nameds 是一个对象，包含了 Monitor 监听的命名参数
     * 回调参数 control 是一个对象，提供本次监听的控制函数
     * control.preventDefault(value) 阻止默认的行为，并将设定的返回值作为本次代理访问的返回值
     * control.stopPropagation() 阻断后续的监听器，但不会阻止默认行为
     * control.overrideParameter(name, value) 覆盖本次监听的命名参数
     * control.setReturnValue(value) 设置本次代理访问的返回值，可以覆盖之前监听器设置的返回值
     * ```
     *
     * @param {(access: Access, nameds: Nameds, control: Control) => void} handler
     * @returns {this}
     */
    then(handler: (access: {
        domain: Domain;
        action: number;
    }, nameds: {
        target: any;
        thisArg?: any;
        arguments?: Array<any>;
        newTarget?: Function;
        property?: string | symbol;
        descriptor?: {
            value?: any;
            writable?: boolean;
            get?: () => any;
            set?: (value: any) => void;
            enumerable?: boolean;
            configurable?: boolean;
        };
        receiver?: any;
        prototype?: any;
        value?: any;
    }, control: {
        preventDefault: () => void;
        stopPropagation: () => void;
        overrideParameter: (name: "descriptor" | "value" | "target" | "prototype" | "arguments" | "property" | "receiver" | "newTarget" | "thisArg", value: any) => void;
        setReturnValue: (value: any) => void;
        throwDenied: (message?: string) => never;
    }) => void): this;
    /**
     * ```plain
     * 判断 Monitor 是否已经启动
     * ```
     *
     * @type {boolean}
     */
    get isStarted(): boolean;
    /**
     * ```plain
     * 启动 Monitor
     * ```
     */
    start(): void;
    /**
     * ```plain
     * 停止 Monitor
     * ```
     */
    stop(): void;
    #private;
}
/**
 * ```plain
 * 提供运行域之间的对象封送
 * ```
 */
export class Marshal {
    static "__#9@#revertTarget": symbol;
    static "__#9@#sourceDomain": symbol;
    static "__#9@#marshalRules": WeakMap<object, any>;
    static "__#9@#marshalledProxies": WeakSet<object>;
    /**
     * ```plain
     * 判断是否应该封送
     * ```
     *
     * @param {any} obj
     * @returns {boolean}
     */
    static "__#9@#shouldMarshal": (obj: any) => boolean;
    /**
     * ```plain
     * 判断是否禁止封送
     * ```
     *
     * @param {any} obj
     * @returns {boolean}
     */
    static "__#9@#strictMarshal": (obj: any) => boolean;
    /**
     * ```plain
     * 拆除封送代理
     * ```
     *
     * @typedef {[
     *     Domain,
     *     Object,
     * ]} Reverted
     *
     * @param {any} proxy
     * @returns {Reverted}
     */
    static "__#9@#revertProxy": (proxy: any) => [Domain, any];
    /**
     * ```plain
     * 检查封送缓存
     * ```
     *
     * @param {Object} obj
     * @param {Domain} domain
     * @returns {Object?}
     */
    static "__#9@#cacheProxy": (obj: any, domain: Domain) => any | null;
    /**
     * ```plain
     * 获取指定对象的封送规则引用
     * ```
     *
     * @param {Object} obj
     * @returns {{rule: Rule}}
     */
    static "__#9@#ensureRuleRef": (obj: any) => {
        rule: Rule;
    };
    /**
     * ```plain
     * 判断某个对象是否指定了封送规则
     * ```
     *
     * @param {Object} obj
     * @returns {boolean}
     */
    static hasRule(obj: any): boolean;
    /**
     * ```plain
     * 指定某个对象的封送规则
     * ```
     *
     * @param {Object} obj
     * @param {Rule} rule
     */
    static setRule(obj: any, rule: Rule): void;
    /**
     * ```plain
     * 判断某个对象是否是其他运行域被封送的对象
     * ```
     *
     * @param {Object} obj
     * @returns {boolean}
     */
    static isMarshalled(obj: any): boolean;
    /**
     * ```plain
     * 获取封送对象的源运行域
     * ```
     *
     * @param {Object} obj
     * @returns {Domain?}
     */
    static getMarshalledDomain(obj: any): Domain | null;
    /**
     * ```plain
     * 对于封送或未封送的函数执行转字符串操作
     * ```
     *
     * @param {Function} func
     */
    static decompileFunction(func: Function): any;
    /**
     * ```plain
     * 判断给定的参数列表和函数体字符串是否可以构造一个合法的函数
     * ```
     *
     * @typedef {"async"|"generator"|"agenerator"|"any"|null} FunctionType
     *
     * @param {string|string[]} paramList
     * @param {string} funcBody
     * @param {FunctionType} [type = null]
     */
    static canCreateFunction(paramList: string | string[], funcBody: string, type?: "async" | "generator" | "agenerator" | "any"): any;
    /**
     * ```plain
     * 陷入某个运行域并执行代码
     * ```
     *
     * @param {Domain} domain
     * @param {() => any} action
     */
    static "__#9@#trapDomain": (domain: Domain, action: () => any) => any;
    /**
     * ```plain
     * 封送数组
     * ```
     *
     * @param {Array} array
     * @param {Domain} targetDomain
     * @returns {Array}
     */
    static "__#9@#marshalArray": (array: any[], targetDomain: Domain) => any[];
    /**
     * ```plain
     * 封送对象
     * ```
     *
     * @param {Object} object
     * @param {Domain} targetDomain
     * @returns {Object}
     */
    static "__#9@#marshalObject": (object: any, targetDomain: Domain) => any;
    /**
     * ```plain
     * 根据目标对象的特征复制一个基本对象
     * ```
     *
     * @param {Object} src
     * @returns {any}
     */
    static "__#9@#clonePureObject": (src: any) => any;
    /**
     * ```plain
     * 封送核心函数
     * ```
     *
     * @param {Object} obj
     * @param {Domain} targetDomain
     * @returns {Object}
     */
    static "__#9@#marshal": (obj: any, targetDomain: Domain) => any;
    /**
     * @param {Symbol} signal
     * @param {...any} args
     */
    static [SandboxExposer2](signal: Symbol, ...args: any[]): any;
}
/**
 * ```plain
 * 运行域对象
 *
 * 提供运行域的创建以及周期管理
 * ```
 */
export class Domain {
    static "__#10@#hasInstance": (value: any) => boolean;
    /** @type {Array<Domain>} */
    static "__#10@#domainStack": Array<Domain>;
    /** @type {Domain} */
    static "__#10@#currentDomain": Domain;
    /** @type {Domain} */
    static "__#10@#topDomain": Domain;
    /** @type {Array<WeakRef<Domain>>} */
    static "__#10@#domainLinks": Array<any>;
    /**
     * ```plain
     * 检查对象是否是Promise对象
     * ```
     *
     * @param {Error?} error
     * @returns {boolean}
     */
    static isError(error: Error | null): boolean;
    /**
     * @param {Domain} domain
     */
    static "__#10@#enterDomain": (domain: Domain) => void;
    static "__#10@#exitDomain": () => void;
    /**
     * @returns {Array<Domain>}
     */
    static "__#10@#listDomain": () => Array<Domain>;
    /**
     * ```plain
     * 获取当前运行域
     * ```
     *
     * @type {Domain}
     */
    static get current(): Domain;
    /**
     * ```plain
     * 获取调用链中上一个运行域
     * ```
     *
     * @type {Domain?}
     */
    static get caller(): Domain;
    /**
     * ```plain
     * 获取顶级运行域
     * ```
     *
     * @type {Domain}
     */
    static get topDomain(): Domain;
    /**
     * ```plain
     * 检查当前的调用是否来自可信的运行域
     *
     * 如果检查顶级运行域，则要求没有进行任何其他运行域的陷入
     * 如果检查非顶级运行域，则要求只有顶级运行域与给定运行域的陷入
     * ```
     *
     * @param {Domain} domain
     */
    static isBelievable(domain: Domain): boolean;
    /**
     * @param {Symbol} signal
     * @param {...any} args
     */
    static [SandboxExposer2](signal: Symbol, ...args: any[]): void | Domain[];
    /**
     * ```plain
     * 检查对象是否来自于当前的运行域
     * ```
     *
     * @param {Object?} obj
     * @returns {boolean}
     */
    isFrom(obj: any | null): boolean;
    /**
     * ```plain
     * 检查对象是否来自于当前的运行域的Promise
     * ```
     *
     * @param {Promise?} promise
     * @returns {boolean}
     */
    isPromise(promise: Promise<any> | null): boolean;
    /**
     * ```plain
     * 检查对象是否来自于当前的运行域的Error
     * ```
     *
     * @param {Error?} error
     * @returns {boolean}
     */
    isError(error: Error | null): boolean;
    /**
     * ```plain
     * 检查对象是否来自于当前的运行域的危险对象
     * ```
     *
     * @param {Object?} obj
     * @returns {boolean}
     */
    isUnsafe(obj: any | null): boolean;
    toString(): string;
    /**
     * @param {Symbol} signal
     * @param {...any} args
     */
    [SandboxExposer](signal: Symbol, ...args: any[]): any;
    #private;
}
/**
 * ```plain
 * 向JavaScript提供类似于Python的exec的自带上下文的eval功能
 * 同时自动排除原有作用域以沙盒方式来执行部分代码
 * ```
 */
export class Sandbox {
    static "__#11@#topWindow": any;
    static "__#11@#topWindowHTMLElement": any;
    /** @type {WeakMap<Domain, Sandbox>} */
    static "__#11@#domainMap": WeakMap<Domain, Sandbox>;
    /** @type {Array} */
    static "__#11@#executingScope": any[];
    /** @type {WeakMap<Function, string>} */
    static "__#11@#functionRefCodes": WeakMap<Function, string>;
    /**
     * ```plain
     * 检查沙盒操作运行域
     * ```
     *
     * @param {Sandbox} thiz
     */
    static "__#11@#assertOperator": (thiz: Sandbox) => void;
    /**
     * ```plain
     * 封装沙盒的 Function 函数
     * ```
     *
     * @param {Sandbox} thiz
     * @param {Window} global
     */
    static "__#11@#initDomainFunctions": (thiz: Sandbox, global: Window) => void;
    /**
     * ```plain
     * 替代原本的eval函数，阻止访问原生的 window 对象
     * ```
     *
     * @param {Sandbox} thiz
     * @param {any} x
     * @returns
     */
    static "__#11@#wrappedEval": (thiz: Sandbox, x: any) => any;
    /**
     * ```plain
     * 核心编译函数
     * ```
     *
     * @param {Sandbox} thiz 当前沙盒实例
     * @param {string} code 代码字符串
     * @param {Object?} context 额外的执行上下文
     * @param {Array<string>?} paramList 参数名列表，以此来创建可以传递参数的函数
     * @param {boolean?} inheritScope 是否继承当前正在执行的scope而不是当前沙盒的scope（为封装Function类型而提供的参数）
     * @param {"exists"|"extend"|"all"} writeContext 当执行的代码尝试为未声明的变量赋值时，应该 根据context与window的变量写入(默认行为)|默认行为并且新的变量写入context|全部写入context
     * @returns
     */
    static "__#11@#compileCore": (thiz: Sandbox, code: string, context?: any | null, paramList?: Array<string> | null, inheritScope?: boolean | null, writeContext?: "exists" | "extend" | "all") => (this: any, ...args: any) => any;
    /**
     * ```plain
     * 根据运行域获取沙盒对象
     * ```
     *
     * @param {Domain} domain
     * @returns {Sandbox?}
     */
    static from(domain: Domain): Sandbox | null;
    /**
     * ```plain
     * 创建一个被代理的 Window 对象
     *
     * （为什么一定要指名道姓选window的东西喵）
     * ```
     *
     * @param {Sandbox} thiz
     */
    static "__#11@#createScope": (thiz: Sandbox) => void;
    static "__#11@#makeName": (prefix: string, conflict: any) => string;
    /**
     * @param {Symbol} signal
     * @param  {...any} args
     * @returns
     */
    static [SandboxExposer2](signal: Symbol, ...args: any[]): string;
    /**
     * ```plain
     * 获取当前的scope
     * ```
     *
     * @type {Object}
     */
    get scope(): any;
    /**
     * ```plain
     * 获取当前沙盒内的运行域
     * ```
     *
     * @type {Domain}
     */
    get domain(): Domain;
    /**
     * ```plain
     * 设置当前沙盒内的document对象
     * ```
     *
     * @type {Document}
     */
    set document(value: Document);
    /**
     * ```plain
     * 获取当前沙盒内的document对象
     * ```
     *
     * @type {Document}
     */
    get document(): Document;
    /**
     * ```plain
     * 当在当前scope中访问不到变量时，
     * 是否允许沙盒代码可以穿透到顶级域的全局变量域中
     * 去读取部分非内建的全局变量（仅读取）
     *
     * 此开关有风险，请谨慎使用
     * ```
     *
     * @type {boolean}
     */
    set freeAccess(value: boolean);
    /**
     * ```plain
     * 当在当前scope中访问不到变量时，
     * 是否允许沙盒代码可以穿透到顶级域的全局变量域中
     * 去读取部分非内建的全局变量（仅读取）
     *
     * 此开关有风险，请谨慎使用
     * ```
     *
     * @type {boolean}
     */
    get freeAccess(): boolean;
    /**
     * ```plain
     * 当在当前scope中访问不到变量时，
     * 是否允许沙盒代码可以穿透到顶级域的全局变量域中
     * 去读取DOM类型的构造函数（仅读取）
     * （包括Image、Audio等）
     *
     * 此开关有风险，请谨慎使用
     * ```
     *
     * @type {boolean}
     */
    set domAccess(value: boolean);
    /**
     * ```plain
     * 当在当前scope中访问不到变量时，
     * 是否允许沙盒代码可以穿透到顶级域的全局变量域中
     * 去读取DOM类型的构造函数（仅读取）
     * （包括Image、Audio等）
     *
     * 此开关有风险，请谨慎使用
     * ```
     *
     * @type {boolean}
     */
    get domAccess(): boolean;
    /**
     * ```plain
     * 向当前域注入内建对象
     *
     * 如果使用在使用了 `initBuiltins` 之后进行 `pushScope`，
     * 则将自动继承前面的内建对象，无需再次调用 `initBuiltins`
     * ```
     */
    initBuiltins(): void;
    /**
     * ```plain
     * 基于当前的scope克隆一个新的scope
     * 然后将原本的scope压入栈中
     * ```
     */
    pushScope(): void;
    /**
     * ```plain
     * 丢弃当前的scope并从栈中弹出原本的scope
     * ```
     */
    popScope(): void;
    /**
     * ```plain
     * 基于给定的代码与当前的scope来构造一个闭包函数
     *
     * 参数context指定临时上下文，类似与scope但是里面的变量优先级高于scope
     * 另外可以通过context.this属性来指定函数的this
     *
     * 请注意，当沙盒闭包函数构造后，scope将被闭包固定
     * 这意味着pushScope与popScope不会影响到构造好的函数
     * ```
     *
     * @param {string} code 沙盒闭包函数的代码
     * @param {Object?} context 临时上下文
     * @returns {(...args: any[]) => any} 构造的沙盒闭包函数
     */
    compile(code: string, context?: any | null): (...args: any[]) => any;
    /**
     * ```plain
     * 基于当前的scope在沙盒环境下执行给定的代码
     *
     * 参数context指定临时上下文，类似与scope但是里面的变量优先级高于scope
     * 另外可以通过context.this属性来指定函数的this
     * ```
     *
     * @param {string} code 沙盒闭包函数的代码
     * @param {Object?} context 临时上下文
     * @returns 执行代码的返回值
     */
    exec(code: string, context?: any | null): any;
    /**
     * ```plain
     * 基于当前的scope在沙盒环境下执行给定的代码
     *
     * 参数context指定临时上下文，类似与scope但是里面的变量优先级高于scope
     * 另外可以通过context.this属性来指定函数的this
     *
     * 与exec的区别在于，此函数可以指定未定义变量赋值行为
     * 当 `readonly` 为false时，不存在的全局变量的赋值行为将被转移到context里面
     * 当 `readonly` 为true(默认)时，任何全局变量的赋值行为将被转移到context里面
     * ```
     *
     * @param {string} code 沙盒闭包函数的代码
     * @param {Object?} context 临时上下文(没有给出将自动创建)
     * @param {boolean} readonly 是否拦截所有全局变量的赋值
     * @returns {[any, Object]} [执行代码的返回值, 参数context]
     */
    exec2(code: string, context?: any | null, readonly?: boolean): [any, any];
    #private;
}
/** @typedef {any} Window */
export const SANDBOX_ENABLED: boolean;
declare const SandboxExposer2: unique symbol;
declare const SandboxExposer: unique symbol;
export {};
