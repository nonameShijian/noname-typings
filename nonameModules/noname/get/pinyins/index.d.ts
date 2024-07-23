export function addDict(dict: any, name: any): void;
export function clearCustomDict(dict: any): void;
/**
 * @description: 拼音格式转换。pin1 yin1 -> pīn yīn 或 pīn yīn -> pin1 yin1 或 pīn yīn -> pin yin
 * @param {string | string[]} pinyin 要转换的拼音字符串或者拼音字符串数组
 * @param {any} options 配置项
 * @return {string | string[]} 转换后的拼音字符串或者拼音字符串数组
 */
export function convert(pinyin: string | string[], options: any): string | string[];
/**
 * @description: 用户自定义拼音
 * @param {{ [key: string]: string }} config 用户自定义的拼音映射（支持汉字、词语、句子的映射），若匹配到该映射，优先将汉字转换为该映射
 * @param {any} options multiple/polyphonic 对于 customPinyin 补充词汇的处理
 */
export function customPinyin(config: {
    [key: string]: string;
}, options: any): void;
/**
 * @description: 获取带拼音汉字的 html 字符串
 * @param {string} text 要转换的字符串
 * @param {any} options html 中标签类名相关配置
 * @return {string} 带汉字的拼音字符串
 */
export function html(text: string, options: any): string;
/**
 * @description: 检测汉语字符串和拼音是否匹配
 * @param {string} text 汉语字符串
 * @param {string} pinyin 拼音，支持各种缩写形式
 * @param {any} options 配置项
 * @return {Array | null} 若匹配成功，返回 text 中匹配成功的下标数组；若匹配失败，返回 null
 */
export function match(text: string, pinyin: string, options: any): any[] | null;
/**
 * @description: 获取汉语字符串的拼音
 * @param {string} word 要转换的汉语字符串
 * @param {any} options 配置项
 * @return {string | string[] | any[]} options.type 为 string 时，返回字符串，中间用空格隔开；为 array 时，返回拼音字符串数组；为 all 时返回全部信息的数组
 */
export function pinyin(word: string, options: any): string | string[] | any[];
/**
 * @description: 获取每个汉字的所有读音
 * @param {string} text 要转换的汉语字符串
 * @param {any} options 配置项
 * @return {string[] | string[][] | any[][]} options.type 为 string 时，返回字符串数组，中间用空格隔开；为 array 时，返回二维拼音字符串数组；为 all 时返回二维全部信息的数组
 */
export function polyphonic(text: string, options?: any): string[] | string[][] | any[][];
export function removeDict(dictName: any): void;
