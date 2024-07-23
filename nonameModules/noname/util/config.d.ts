/**
 * @param {string} name
 * @returns {any}
 */
export function get(name: string): any;
/**
 * @param {string} name
 * @param {any} value
 * @returns {void}
 */
export function set(name: string, value: any): void;
/**
 * @param {string} name
 * @returns {boolean}
 */
export function has(name: string): boolean;
/**
 * 从数据库中读取数据，根据目前可用情况自动选择相应地数据库
 *
 * 此函数仅用于读取一个“数据库”形式的数据：即无论如何，`localStorage`存的必然是对象
 *
 * @async
 * @param {string} name - 要读取数据的`key`
 * @param {string} type - `indexedDB`所使用的`storeName`和`localStorage`的`key`，当`type`为`"data"`时仅用于`indexedDB`
 * @param {boolean} [reinitLocalStorage=true] - 是否在用`localStorage`读取失败时将对应键的值初始化为空对象
 * @param {any} [reinitIndexedDB=undefined] - 是否在用`indexedDB`读取失败时将对应键的值初始化；若给定值，则初始化为给定的值
 * @return {Promise<any>}
 */
export function load(name: string, type: string, reinitLocalStorage?: boolean, reinitIndexedDB?: any): Promise<any>;
/**
 * 向数据库中保存数据，根据目前可用情况自动选择相应地数据库
 *
 * 此函数仅用于保存一个“数据库”形式的数据：即无论如何，`localStorage`存的必然是对象
 *
 * @async
 * @param {string} name - 要保存数据的`key`
 * @param {string} type - `indexedDB`所使用的`storeName`和`localStorage`的`key`，当`type`为`"data"`时仅用于`indexedDB`
 * @param {any} value - 需要保存的数据；当`type`为`"data"`时必须为`object`类型
 * @return {Promise<void>}
 */
export function save(name: string, type: string, value: any): Promise<void>;
