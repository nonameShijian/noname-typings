export class LibInit {
    /**
     * 部分函数的Promise版本
     */
    promises: LibInitPromises;
    init(): void;
    reset(): void;
    onload(): Promise<void>;
    startOnline(): void;
    onfree(): void;
    connection(ws: any): void;
    sheet(...args: any[]): HTMLStyleElement;
    css(path: any, file: any, before: any): HTMLLinkElement;
    jsForExtension(path: any, file: any, onLoad: any, onError: any): void;
    js(path: any, file: any, onLoad: any, onError: any): HTMLScriptElement;
    /**
     * 同步lib.init.js
     * @returns { void }
     */
    jsSync(path: any, file: any, onLoad: any, onError: any): void;
    req(str: any, onload: any, onerror: any, master: any): void;
    /**
     * 同步lib.init.req
     */
    reqSync(str: any, onload: any, onerror: any, master: any): string;
    json(url: any, onload: any, onerror: any): void;
    /**
     * 同步lib.init.json
     */
    jsonSync(url: any, onload: any, onerror: any): void;
    cssstyles(): void;
    layout(layout: any, nosave: any): void;
    background(): void;
    /**
     *
     * @param {*} item
     * @param {Function} [scope] 作用域
     * @returns
     */
    parsex(item: any, scope?: Function): any;
    eval(func: any): any;
    encode(strUni: any): string;
    decode(str: any): string;
    stringify(obj: any): string;
    stringifySkill(obj: any): string;
    /**
     * 在返回当前加载的esm模块相对位置。
     * @param {*} url 传入import.meta.url
     */
    getCurrentFileLocation(url: any): string;
    /**
     * @param {string | URL} link - 需要解析的路径
     * @param {((item: string) => string) | null} [defaultHandle] - 在给定路径不符合可用情况（或基于无名杀相关默认情况）时，处理路径的函数，返回的路径应是相对于根目录的相对路径，默认为`null`，当且仅当无法解析成`URL`时会调用该回调
     * @param {((item: URL) => unknown) | null} [loadAsDataUrlCallback] - 若存在值，则将资源加载为[Data URL](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)，然后传入进回调函数
     * @param {boolean} [dbNow] - 此刻是否在解析数据库中的内容，请勿直接使用
     * @returns {URL}
     */
    parseResourceAddress(link: string | URL, defaultHandle?: (item: string) => string, loadAsDataUrlCallback?: (item: URL) => unknown, dbNow?: boolean): URL;
}
import { LibInitPromises } from "./promises.js";
