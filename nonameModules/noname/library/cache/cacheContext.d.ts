/**
 * 缓存上下文，用于在各种方法中暂时缓存值，以第一次获取的缓存值为准。
 */
export class CacheContext {
    /**
     * 设置当前是否处于缓存环境。当使用inject对类进行注入时，只在缓存环境下会返回缓存值。
     * @param {boolean} cache
     */
    static setInCacheEnvironment(cache: boolean): void;
    /**
     * 设置一个公有的缓存上下文。缓存上下文持有期间，假设所缓存的函数在参数相同时，绝对不会（注意是绝对不会）返回不同的返回值。
     * 使用inject对类进行注入时，将应用公有的缓存上下文。
     * @param {CacheContext} context
     */
    static setCacheContext(context: CacheContext): void;
    /**
     * 返回当前公有的缓存上下文。
     * @returns {CacheContext} 缓存上下文
     */
    static getCacheContext(): CacheContext;
    /**
     * 移除当前公有的缓存上下文。
     */
    static removeCacheContext(): void;
    /**
     * 返回公有的缓存上下文，没有就创建一个新的返回（不会设置为新的公有缓存上下文）。
     * @returns {CacheContext} 缓存上下文
     */
    static requireCacheContext(): CacheContext;
    /**
     * 对一个类进行注入。methods为可以返回缓存的所有方法。注入后，此类的相关方法会在公有缓存上下文下返回缓存值。
     * @param {any} source
     * @param {Array<string>} methods
     * @returns
     */
    static inject(source: any, methods: Array<string>): any;
    static _getCacheValueFromObject(storage: any, key: any, params: any, source: any, func: any): any;
    static _ensureMember(obj: any, key: any): any;
    static _wrapParametersToCacheKey(params: any): string;
    static _wrapParameterToCacheKey(param: any): any;
    lib: typeof Library;
    game: typeof Game;
    get: typeof Get;
    sourceMap: Map<any, any>;
    storageMap: Map<any, any>;
    /**
     * 对一个对象进行代理，对象的所有函数都将按条件返回缓存结果。
     * 注意：以cache开头的方法依然保持原来的调用。
     * 如果所代理的对象拥有cacheSupportFunction方法（返回一个方法名数组），只有允许的方法才会返回缓存结果，剩余方法依然保持原来的调用。
     * @param {any} source 需要代理的对象
     * @returns
     */
    delegate(source: any): any;
    _requireStorage(obj: any): any;
    /**
     * @template T
     * @param {T} delegateObject
     * @returns {T}
     */
    _createCacheProxy<T>(delegateObject: T): T;
}
import { Library } from "../index.js";
import { Game } from "../../game/index.js";
import { Get } from "../../get/index.js";
