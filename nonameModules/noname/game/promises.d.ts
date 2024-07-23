export class GamePromises {
    /**
     * @overload
     * @param { string } title
     * @returns { Promise<string | false> }
     */
    prompt(title: string): Promise<string | false>;
    /**
     * @overload
     * @param { string } title
     * @param { boolean } [forced]
     * @returns { Promise<string> }
     *
     */
    prompt(title: string, forced?: boolean): Promise<string>;
    /**
     * 模仿h5的alert，用于显示信息的对话框
     *
     * @param { string } title
     * @example
     * ```js
     * await game.promises.alert('弹窗内容');
     * ```
     * @returns { Promise<true> }
     */
    alert(title: string): Promise<true>;
    download(url: any, folder: any, dev: any, onprogress: any): Promise<any>;
    /**
     * @param {string} filename
     * @returns {Promise<ArrayBuffer | Buffer>}
     */
    readFile(filename: string): Promise<ArrayBuffer | Buffer>;
    readFileAsText(filename: any): Promise<any>;
    writeFile(data: any, path: any, name: any): Promise<any>;
    ensureDirectory(list: any, callback: any, file: any): Promise<any>;
    createDir(directory: any): Promise<any>;
    removeFile(filename: any): Promise<void>;
    removeDir(directory: any): Promise<void>;
    /**
     * 获取文件列表
     *
     * @param { string } dir 目录
     * @returns { Promise<[string[], string[]]> } 返回一个数组，第一个元素是文件夹列表，第二个元素是文件列表
     */
    getFileList(dir: string): Promise<[string[], string[]]>;
    /**
     * @param { string } key
     * @param { * } [value]
     * @param { string | boolean } [local]
     */
    saveConfig(key: string, value?: any, local?: string | boolean): Promise<any>;
    /**
     * @param { string } key
     */
    saveConfigValue(key: string): Promise<any>;
    /**
     * @param { string } extension
     * @param { string } key
     * @param { * } [value]
     */
    saveExtensionConfig(extension: string, key: string, value?: any): Promise<any>;
    /**
     * @param { string } extension
     * @param { string } key
     */
    saveExtensionConfigValue(extension: string, key: string): Promise<any>;
}
