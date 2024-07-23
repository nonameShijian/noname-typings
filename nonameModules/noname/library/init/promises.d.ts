export class LibInitPromises {
    /**
     * Promise版的`lib.init.js`
     *
     * @param {string} path - 文件路径
     * @param {string | string[]} [file] - 文件名或文件名组，忽略则直接读取`path`的内容
     * @returns {Promise<Event>}
     */
    js(path: string, file?: string | string[]): Promise<Event>;
    /**
     * Promise版的`lib.init.css`
     *
     * @param {string} path - 文件路径
     * @param {string | string[]} [file] - 文件名或文件名组，忽略则直接读取`path`的内容
     * @param {Element} [before] - 新样式dom的位置
     * @param {boolean} [noerror = false] - 是否忽略报错
     * @returns {Promise<HTMLLinkElement>}
     */
    css(path: string, file?: string | string[], before?: Element, noerror?: boolean): Promise<HTMLLinkElement>;
    /**
     * Promise版的`lib.init.req`
     *
     * @param {string} str - 要读取的地址
     * @param {string} [master]
     * @returns {Promise<ProgressEvent>}
     */
    req(str: string, master?: string): Promise<ProgressEvent>;
    /**
     * Promise版的`lib.init.json`
     *
     * @param {string} url - 要读取的地址
     * @returns {Promise<object>}
     */
    json(url: string): Promise<object>;
    /**
     * Promise版的`lib.init.sheet`
     *
     * @returns {Promise<HTMLStyleElement>}
     */
    sheet(): Promise<HTMLStyleElement>;
    /**
     * @async
     * @param {string | URL} link - 需要解析的路径
     * @param {((item: string) => string) | null} [defaultHandle] - 在给定路径不符合可用情况（或基于无名杀相关默认情况）时，处理路径的函数，返回的路径应是相对于根目录的相对路径，默认为`null`，当且仅当无法解析成`URL`时会调用该回调
     * @param {boolean} [forceLoadAsDataUrl] - 是否将资源加载为[Data URL](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)，默认为`false`
     * @returns {Promise<URL>}
     */
    parseResourceAddress(link: string | URL, defaultHandle?: (item: string) => string, forceLoadAsDataUrl?: boolean): Promise<URL>;
    /**
     * @async
     * @param {string | URL} link - 需要解析的路径
     * @param {((item: string) => string) | null} [defaultHandle] - 在给定路径不符合可用情况（或基于无名杀相关默认情况）时，处理路径的函数，返回的路径应是相对于根目录的相对路径，默认为`null`，当且仅当无法解析成`URL`时会调用该回调
     * @returns {Promise<[origin: URL, data: URL]>}
     */
    parseResourceAddressExt(link: string | URL, defaultHandle?: (item: string) => string): Promise<[origin: URL, data: URL]>;
}
