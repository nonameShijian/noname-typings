export class DynamicStyle {
    /**
     * Turn the Object Style to string format.
     * 将给定的对象样式转换成字符串的形式
     *
     * @param {StyleObject} style 给定的对象样式
     * @returns {string} 样式的字符串形式
     */
    translate(style: {
        [x: string]: string | number;
    }): string;
    /**
     * Generate the common css selector.
     * 生成标准的CSS样式
     *
     * @param {string} name 选择器
     * @param {StyleObject} style 对象样式
     * @returns {string} 标准的CSS样式
     */
    generate(name: string, style: {
        [x: string]: string | number;
    }): string;
    /**
     * Determine the selector is in rules.
     * 检查是否存在对应选择器的规则
     *
     * @param {string} name 选择器
     * @returns {boolean}
     */
    has(name: string): boolean;
    /**
     * Get the style of given selector, or return null.
     * 获得对应选择器的样式对象，若不存在，则返回`null`
     *
     * @param {string} name 选择器
     * @returns {?StyleObject}
     */
    get(name: string): {
        [x: string]: string | number;
    };
    /**
     * Callback of `DynamicStyle#find`, getting the rule wanted.
     * `DynamicStyle#find`的回调函数，用于获取符合要求的规则
     *
     * @callback FindCallback
     * @param {Rule} rule 样式规则
     * @param {number} index 样式编号
     * @param {Rule[]} rules 规则集
     * @returns {boolean}
     */
    /**
     * Get the rule wanted by given function.
     * 通过给定的函数，获取符合要求的规则
     *
     * @param {FindCallback} fn 用于检查的函数
     * @returns {Rule}
     */
    find(fn: (rule: [string, {
        [x: string]: string | number;
    }], index: number, rules: [string, {
        [x: string]: string | number;
    }][]) => boolean): [string, {
        [x: string]: string | number;
    }];
    /**
     * Length of rules.
     * 规则集的长度
     *
     * @returns {number}
     */
    size(): number;
    /**
     * Get the index of given selector, or return `-1`.
     * 获得对应选择器的位置，若不存在，则返回`-1`
     *
     * @param {string} name 选择器
     * @returns {number}
     */
    indexOf(name: string): number;
    /**
     * @param {string} name 选择器
     * @param {StyleObject} style 要添加的样式对象
     * @returns {boolean} 添加的结果，为`true`则添加成功，为`false`则添加失败
     */
    add(name: string, style: {
        [x: string]: string | number;
    }): boolean;
    /**
     * @param {Record<string, StyleObject>} object 以`name: style`存储的映射
     * @returns {boolean[]} 添加的结果，为`true`则添加成功，为`false`则添加失败
     */
    addObject(object: Record<string, {
        [x: string]: string | number;
    }>): boolean[];
    /**
     * @param {string} name 要移除规则的选择器
     * @returns {boolean} 移除的结果，为`true`则移除成功，为`false`则移除失败
     */
    remove(name: string): boolean;
    /**
     * @param {string} name 要移除规则的选择器
     * @param {string[]} styles 要移除的样式
     * @returns {boolean} 移除的结果，为`true`则移除成功，为`false`则移除失败
     */
    removeStyles(name: string, styles: string[]): boolean;
    /**
     * 添加或修改一个规则所对应的样式
     *
     * @param {string} name 要变更规则的选择器
     * @param {StyleObject} style 变更规则的样式
     * @returns {boolean} 更新的结果，为`true`则更新成功，为`false`则更新失败
     */
    update(name: string, style: {
        [x: string]: string | number;
    }): boolean;
    #private;
}
