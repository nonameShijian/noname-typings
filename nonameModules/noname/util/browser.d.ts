/**
 * 从浏览器名到不同浏览器下异步处理方式的映射
 *
 * `key`的值同`get.coreInfo`函数返回值的第一个元素
 *
 * @type {Record<"firefox" | "chrome" | "safari" | "other", new () => PromiseErrorHandler>}
 */
export const promiseErrorHandlerMap: Record<"firefox" | "chrome" | "safari" | "other", new () => PromiseErrorHandler>;
export type PromiseErrorHandler = import('./struct/interface/promise-error-handler.js').PromiseErrorHandler;
import { PromiseErrorHandler } from './struct/index.js';
