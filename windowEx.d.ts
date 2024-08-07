//一些附加到window的对象的提示
declare interface Window {
    /** 初始界面的暂时配置？ */
    tempSetNoname?: string;
    /** 游戏更新信息配置 */
    noname_update?: {
        version: string,
        update: string,
        changeLog: string[],
        files: string[],
        players?: string[],
        cards?: string[],
    }

    /** 游戏配置 */
    config: SMap<any>,

    /** 游戏源列表（预加载资源列表，待验证） */
    noname_source_list?: string[],

    /** 游戏懒加载资源列表(外部扩展资源列表，待验证) */
    noname_asset_list?: string[],

    /** 默认皮肤列表 */
    noname_skin_list?: SMap<number>;

    /** codeMirror,一个代码编辑器库 */
    // CodeMirror: typeof import('codemirror/index');

    resetGameTimeout: number;

    cordovaLoadTimeout?: number;

    /** window.onerror的参数列表 */
    ea?: any[];
    /** 错误信息 */
    em?: string | Event;
    /** 错误行号 */
    el?: number;
    /** 错误列号 */
    ec?: number;
    /** 错误对象 */
    eo?: Error;

    game: Game;
    lib: Library;
    _status: Status;
    ui: UI;
    get: Get;
    ai: AI;

    saveNonameInput?: Function;
    /** 是否处于启动页 */
    inSplash: boolean;
    /** 游戏是否正常启动？ */
    resetExtension: Function;

    /** 【应用配置扩展】从该路径获取无名杀的变量信息 */
    newExtApiUrl: string;
    /** 【应用配置扩展】全局变量获取无名杀的变量 */
    newExtensionApi: {
        game: Game;
        lib: Library;
        _status: Status;
        ui: UI;
        get: Get;
        ai: AI;
    }
    /** 为其他自定义平台提供文件读写函数赋值的一种方式 */
    initReadWriteFunction?(game: Game): Promise<void>;

    bannedKeyWords: string[];

    device: Device;

    NonameAndroidBridge: NonameAndroidBridge;
}
