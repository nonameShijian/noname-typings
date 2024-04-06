/**
 * 简易的解析报错栈堆位置信息的函数
 *
 * @param {string} urlLike
 * @returns {string[]}
 */
export function extractLocation(urlLike: string): string[];
/**
 * 关于`Google Chrome`的异步错误处理
 *
 * 由于`v8`提供的`Error.prepareStackTrace(error, structuredStackTrace)`接口存在一些限制，导致不适合无名杀
 *
 * 故我们直接解析`Error`的栈堆信息，来获取相关内容
 *
 * ~~`Chrome`所用的`v8`引擎为`Error`提供了特有的报错栈堆处理接口，用于用户自定义报错栈堆的内容。~~
 *
 * ~~我们用到了`Error.prepareStackTrace(error, structuredStackTrace)`这个接口，这个接口的信息可参考[这里](https://v8.dev/docs/stack-trace-api#customizing-stack-traces)~~
 *
 * ~~该接口提供了结构化的栈堆信息，很幸运的是，这个结构化的栈堆能直接告诉我们报错的文件以及位置，故我们使用该接口，让异步报错能直接定位原始位置~~
 *
 * @implements {PromiseErrorHandler}
 */
export class ChromePromiseErrorHandler implements PromiseErrorHandler {
    /**
     * ~~初始化`Error.prepareStackTrace`，将该值赋值成我们需要的函数~~
     *
     * ~~未防止本来Error.prepareStackTrace便存在赋值的行为，我们将原始值存储，并在需要的函数中调用~~
     *
     * 初始化存储报错信息的列表
     */
    onLoad(): void;
    /**
     * ~~将原来可能的`Error.prepareStackTrace`赋值回去~~
     *
     * @deprecated
     */
    onUnload(): void;
    /**
     * 在获取报错的时候，我们通过发生报错的`Promise`来进行捕获错误的操作
     *
     * 如果捕获出来的错误存放我们存报错栈堆的列表中，则证明该错误能获取到栈堆，由此来获取报错的地址和行列号
     *
     * @param {PromiseRejectionEvent} event
     */
    onHandle(event: PromiseRejectionEvent): void;
    /**
     * ~~正式报错时便不再需要报错信息了，故直接清空列表，释放内存~~
     *
     * @deprecated
     */
    onErrorPrepare(): void;
    #private;
}
export type PromiseErrorHandler = import('../interface/promise-error-handler').PromiseErrorHandler;
