export class CodeSnippet {
    /** @type {Array<CodeSnippet>} */
    static "__#1@#snippetStack": Array<CodeSnippet>;
    /**
     * ```plain
     * 获取当前代码片段
     * ```
     *
     * @type {CodeSnippet?}
     */
    static get currentSnippet(): CodeSnippet;
    /**
     * ```plain
     * 压入一个代码片段作为当前代码片段
     * ```
     *
     * @param {CodeSnippet} snippet
     */
    static pushSnippet(snippet: CodeSnippet): void;
    /**
     * ```plain
     * 弹出当前代码片段
     * ```
     *
     * @returns {CodeSnippet}
     */
    static popSnippet(): CodeSnippet;
    /**
     * ```plain
     * 构造一个代码片段对象
     *
     * 通过 `erroff` 指定在发生错误时，错误信息指出的行与实际代码行的偏移量
     * ```
     * @param {string} code
     * @param {number} erroff
     */
    constructor(code: string, erroff?: number);
    /** @type {string} */
    get code(): string;
    /** @type {Array<string>} */
    get lines(): string[];
    /**
     * ```plain
     * 给定错误行号来获取错误代码片段
     * ```
     *
     * @param {number} lineno
     * @returns {string}
     */
    viewCode(lineno: number): string;
    #private;
}
export class ErrorReporter {
    static "__#2@#topAlert": any;
    static "__#2@#errorLineNoPatterns": RegExp[];
    static "__#2@#findLineNo": (line: any) => number;
    /**
     * ```plain
     * 向用户报告错误信息
     * ```
     *
     * @param {Error} error
     * @param {string} title
     */
    static reportError(error: Error, title?: string): void;
    /**
     * ```plain
     * 构造一个错误报告对象
     * 以此来保存错误相关信息
     * ```
     *
     * @param {Error} error
     * @param {CodeSnippet?} snippet
     */
    constructor(error: Error, snippet?: CodeSnippet | null);
    get message(): string;
    get stack(): string;
    viewCode(): string;
    /**
     * ```plain
     * 向用户报告错误信息
     * ```
     *
     * @param {string} title
     * @returns {string}
     */
    report(title: string): string;
    #private;
}
export class ErrorManager {
    /** @type {WeakMap<Function, CodeSnippet>} */
    static "__#3@#codeSnippets": WeakMap<Function, CodeSnippet>;
    /** @type {WeakMap<Object, ErrorReporter>} */
    static "__#3@#errorReporters": WeakMap<any, ErrorReporter>;
    /**
     * ```plain
     * 获取函数对应的代码片段
     * ```
     *
     * @param {Function} func
     * @returns {CodeSnippet?}
     */
    static getCodeSnippet(func: Function): CodeSnippet | null;
    /**
     * ```plain
     * 设置函数对应的代码片段
     * ```
     *
     * @param {Function} func
     * @param {CodeSnippet} snippet
     */
    static setCodeSnippet(func: Function, snippet: CodeSnippet): WeakMap<Function, CodeSnippet>;
    /**
     * ```plain
     * 获取错误堆栈中与行列无关的错误信息
     * ```
     *
     * @param {Error} error
     * @returns {string[]?}
     */
    static "__#3@#getFramesHead": (error: Error) => string[] | null;
    /**
     * ```plain
     * 计算错误A比错误B多的堆栈层数
     * ```
     *
     * @param {Error} errorA
     * @param {Error} errorB
     * @returns {number?}
     */
    static "__#3@#compareStackLevel": (errorA: Error, errorB: Error) => number | null;
    /**
     * ```plain
     * 封装被设定了代码片段函数的错误捕获调用
     *
     * 当 `body` 函数在它这一层调用栈中出现错误时
     * 此函数将自动记录此次错误信息并整理相关代码片段
     * ```
     * @example
     * ```javascript
     * ErrorManager.errorHandle(() => {
     *     event.content(...);
     * }, event.content);
     * ```
     *
     * @param {Function} action 调用函数的闭包
     * @param {Function} body 实际被调用的函数，同时也是持有代码片段的函数
     * @param {number} extraLevel action调用到body的间隔调用栈层数
     */
    static errorHandle(action: Function, body: Function, extraLevel?: number): void;
    /**
     * ```plain
     * 设置错误报告器
     *
     * 在报告错误时可以从此处获取错误报告器来直接报告错误
     * ```
     *
     * @param {Object} obj
     * @param {ErrorReporter|CodeSnippet|null} reporter
     *
     * @overload
     * @param {Object} obj
     *
     * @overload
     * @param {Object} obj
     * @param {ErrorReporter?} reporter
     *
     * @overload
     * @param {Object} obj
     * @param {CodeSnippet?} codeSnippet
     */
    static setErrorReporter(obj: any): any;
    /**
     * ```plain
     * 设置错误报告器
     *
     * 在报告错误时可以从此处获取错误报告器来直接报告错误
     * ```
     *
     * @param {Object} obj
     * @param {ErrorReporter|CodeSnippet|null} reporter
     *
     * @overload
     * @param {Object} obj
     *
     * @overload
     * @param {Object} obj
     * @param {ErrorReporter?} reporter
     *
     * @overload
     * @param {Object} obj
     * @param {CodeSnippet?} codeSnippet
     */
    static setErrorReporter(obj: any, reporter: ErrorReporter | null): any;
    /**
     * ```plain
     * 设置错误报告器
     *
     * 在报告错误时可以从此处获取错误报告器来直接报告错误
     * ```
     *
     * @param {Object} obj
     * @param {ErrorReporter|CodeSnippet|null} reporter
     *
     * @overload
     * @param {Object} obj
     *
     * @overload
     * @param {Object} obj
     * @param {ErrorReporter?} reporter
     *
     * @overload
     * @param {Object} obj
     * @param {CodeSnippet?} codeSnippet
     */
    static setErrorReporter(obj: any, codeSnippet: CodeSnippet | null): any;
    /**
     * ```plain
     * 获取设置的错误报告器
     * ```
     *
     * @param {Object} obj
     * @returns {ErrorReporter?}
     */
    static getErrorReporter(obj: any): ErrorReporter | null;
}
