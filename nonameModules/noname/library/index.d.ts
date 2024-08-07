/// <reference types="node" />
export class Library {
    configprefix: string;
    versionOL: number;
    updateURLS: {
        coding: string;
        github: string;
    };
    updateURL: string;
    mirrorURL: string;
    hallURL: string;
    assetURL: string;
    userAgent: string;
    characterDefaultPicturePath: string;
    compatibleEdition: boolean;
    changeLog: any[];
    updates: any[];
    canvasUpdates: any[];
    /**
     * @type { Video[] }
     */
    video: Video[];
    skilllist: any[];
    connectBanned: any[];
    characterIntro: {};
    characterTitle: {};
    characterPack: {};
    characterFilter: {};
    characterSort: {};
    characterReplace: {};
    characterSubstitute: {};
    characterInitFilter: {};
    characterGuozhanFilter: string[];
    dynamicTranslate: {};
    cardPack: {};
    cardPackInfo: {};
    /**
     * @type { SMap<number> }
     */
    skin: SMap<number>;
    onresize: any[];
    onphase: any[];
    onwash: any[];
    onover: any[];
    ondb: any[];
    ondb2: any[];
    chatHistory: any[];
    emotionList: {
        xiaowu_emotion: number;
        xiaokuo_emotion: number;
        shibing_emotion: number;
        guojia_emotion: number;
        zhenji_emotion: number;
        xiaosha_emotion: number;
        xiaotao_emotion: number;
        xiaojiu_emotion: number;
    };
    animate: {
        skill: {};
        card: {};
    };
    onload: any[];
    onload2: any[];
    onprepare: any[];
    /**
     * @type { Function[] | undefined }
     */
    arenaReady: Function[] | undefined;
    onfree: any[];
    inpile: any[];
    inpile_nature: any[];
    extensions: any[];
    extensionPack: {};
    /**
     * @type { IOnloadSplash[] }
     */
    onloadSplashes: IOnloadSplash[];
    cardType: {};
    hook: {
        globalskill: {};
    };
    /**
     *  @type { Player | undefined }
     */
    tempSortSeat: Player | undefined;
    /**
     * @type { 'android' | 'ios' | undefined }
     */
    device: 'android' | 'ios' | undefined;
    /**
     * @type { string }
     */
    version: string;
    /**
     * @type { Videos[] }
     */
    videos: Videos[];
    /**
     * @type { {
     * 	fs: typeof import("fs"),
     *  path: typeof import("path"),
     *  debug: () => void,
     *  clients: Element.Client[],
     *  banned:[],
     *  observing:[],
     *  torespond:{},
     *  torespondtimeout:{},
     * } }
     */
    node: {
        fs: typeof import("fs");
        path: typeof import("path");
        debug: () => void;
        clients: Element.Client[];
        banned: [];
        observing: [];
        torespond: {};
        torespondtimeout: {};
    };
    /**
     * @type { { [key: string]: Player } }
     */
    playerOL: {
        [key: string]: Element.Player;
    };
    /**
     * @type { IDBRequest<IDBDatabase> }
     */
    db: IDBRequest<IDBDatabase>;
    /**
     * 你可以往这里加入{钩子名:函数数组}，并在数组里增加你的自定义函数
     * 这样当某个地方调用game.callHook(钩子名,[...函数参数])时，就会按顺序将对应数组中的每个函数运行一遍（传参为callHook的第二个参数）。
     * 你可以将hook机制类比为event.trigger()，但是这里只能放同步代码
     */
    hooks: Readonly<{
        checkBegin: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "checkBegin">;
        checkCard: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "checkCard">;
        checkTarget: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "checkTarget">;
        checkButton: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "checkButton">;
        checkEnd: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "checkEnd">;
        uncheckBegin: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "uncheckBegin">;
        uncheckCard: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "uncheckCard">;
        uncheckTarget: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "uncheckTarget">;
        uncheckButton: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "uncheckButton">;
        uncheckEnd: import("./assembly/index.js").NonameAssembly<import("./assembly/interface.js").NonameAssemblyType, "uncheckEnd">;
        addGroup: import("./hooks/hook.js").NonameHook<import("./hooks/interface.js").NonameHookType, "addGroup">;
        addNature: import("./hooks/hook.js").NonameHook<import("./hooks/interface.js").NonameHookType, "addNature">;
    }>;
    /**
     * **无名杀频道推送机制**
     *
     * 鉴于`Javascript`的特性及自身对所需功能的思考，这是一个参考`Golang`的`channel`设计的、完全和`go channel`不一样的异步消息传递对象
     *
     * 当且仅当接收方和发送方均存在时进行消息传递，完全保证信息传递的单一性（发送方/接收方一旦确定则无法更改）和准确性（发送方必然将消息发送给接收方）
     *
     * 若存在发送方/接收方时调用`send`/`receive`，将报错
     *
     * 若需要异步/不报错发送信息，请等待`lib.actor`
     *
     * @example
     * // 创建一个频道
     * const channel = new lib.channel();
     *
     * // 从某个角落接收channel发出的消息，若无消息则等待
     * const message = await channel.receive();
     *
     * // 从某个角落向channel发消息，若无消息接收则等待
     * await channel.send(item);
     */
    channel: typeof Channel;
    /**
     * **无名杀消息推送库**
     *
     * 通过`EventTarget`机制，实现消息推送和接收的解耦，
     * 从而使消息接收方无需依赖发布方，发布方也无需考虑接收方
     *
     * > `lib.announce`不是`actor`模型，若不存在订阅者，则消息发送将无意义
     *
     * @example
     * // 甲扩展（如《千幻聆音》）在角色皮肤切换后，调用：
     * lib.announce.publish("skinChange", {
     * 	player,
     * 	playerName: "zhangfei",
     * 	originSkin: "image/xxx.jpg",
     * 	currentSkin: "image/yyy.jpg"
     * });
     *
     * // 乙扩展监听此`skinChange`事件，并修改自己扩展相关界面的图片：
     * const method = lib.announce.subscribe("skinChange", (e) => {
     * 	div.setBackgroundImage(e.currentSkin);
     * });
     *
     * // 若此时乙扩展不想继续订阅`skinChange`事件，可以通过`unsubscribe`解除订阅
     * lib.announce.unsubscribe("skinChange", method);
     */
    announce: Announce;
    objectURL: Map<any, any>;
    hookmap: {};
    imported: {};
    layoutfixed: string[];
    pinyins: {
        _metadata: {
            shengmu: string[];
            special_shengmu: string[];
            feijiemu: {
                i: string[];
                u: string[];
                ü: string[];
            };
            zhengtirendu: string[];
            yunjiao: {
                一麻: string[];
                二波: string[];
                三皆: string[];
                四开: string[];
                五微: string[];
                六豪: string[];
                七尤: string[];
                八寒: string[];
                九文: string[];
                十唐: string[];
                十一庚: string[];
                十二齐: string[];
                十三支: string[];
                十四姑: string[];
            };
        };
    };
    /**
     * Yingbian
     *
     * 应变
     */
    yingbian: {
        condition: {
            color: Map<string, string>;
            complex: Map<string, (event: any, ...args: any[]) => Element.GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise>;
            simple: Map<string, (event: any) => any>;
        };
        effect: Map<string, () => void>;
        prompt: Map<string, string>;
    };
    /**
     * Stratagem buff
     *
     * 谋攻强化
     */
    stratagemBuff: {
        cost: Map<string, number>;
        effect: Map<string, (event: any, option: any) => void>;
        prompt: Map<string, () => string>;
    };
    /**
     * The actual card name
     *
     * 实际的卡牌名称
     */
    actualCardName: Map<string, string>;
    characterDialogGroup: {
        收藏: (name: any, capt: any) => any;
        最近: (name: any, capt: any) => any;
    };
    listenEnd(node: any): void;
    configMenu: {
        general: {
            name: string;
            config: {
                mount_combine: {
                    name: string;
                    init: boolean;
                    intro: string;
                    restart: boolean;
                };
                low_performance: {
                    name: string;
                    init: boolean;
                    intro: string;
                    onclick(bool: any): void;
                };
                compatiblemode: {
                    name: string;
                    init: boolean;
                    intro: string;
                    onclick(bool: any): void;
                };
                confirm_exit: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                keep_awake: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                    onclick(bool: any): void;
                };
                auto_confirm: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                skip_shan: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                unauto_choose: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                wuxie_self: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                tao_enemy: {
                    name: string;
                    init: boolean;
                    intro: string;
                    unfrequent: boolean;
                };
                enable_drag: {
                    name: string;
                    init: boolean;
                    intro: string;
                    unfrequent: boolean;
                };
                enable_dragline: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                enable_touchdragline: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                touchscreen: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    unfrequent: boolean;
                    intro: string;
                    onclick(bool: any): boolean;
                };
                swipe: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                swipe_down: {
                    name: string;
                    init: string;
                    unfrequent: boolean;
                    intro: string;
                    item: {
                        system: string;
                        menu: string;
                        pause: string;
                        auto: string;
                        chat: string;
                        off: string;
                    };
                    onclick(item: any): boolean;
                };
                swipe_up: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        system: string;
                        menu: string;
                        pause: string;
                        auto: string;
                        chat: string;
                        off: string;
                    };
                    onclick(item: any): boolean;
                };
                swipe_left: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        system: string;
                        menu: string;
                        pause: string;
                        auto: string;
                        chat: string;
                        off: string;
                    };
                    onclick(item: any): boolean;
                };
                swipe_right: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        system: string;
                        menu: string;
                        pause: string;
                        auto: string;
                        chat: string;
                        off: string;
                    };
                    onclick(item: any): boolean;
                };
                round_menu_func: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        system: string;
                        menu: string;
                        pause: string;
                        auto: string;
                    };
                    onclick(item: any): boolean;
                };
                show_splash: {
                    name: string;
                    intro: string;
                    init: string;
                    item: {
                        off: string;
                        init: string;
                        always: string;
                    };
                };
                game_speed: {
                    name: string;
                    init: string;
                    item: {
                        vslow: string;
                        slow: string;
                        mid: string;
                        fast: string;
                        vfast: string;
                        vvfast: string;
                    };
                    intro: string;
                };
                sync_speed: {
                    name: string;
                    intro: string;
                    init: boolean;
                };
                enable_vibrate: {
                    name: string;
                    intro: string;
                    init: boolean;
                };
                right_click: {
                    name: string;
                    init: string;
                    intro: string;
                    unfrequent: boolean;
                    item: {
                        pause: string;
                        shortcut: string;
                        config: string;
                        auto: string;
                    };
                    onclick(item: any): boolean;
                };
                longpress_info: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                right_info: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                hover_all: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                hover_handcard: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                hoveration: {
                    name: string;
                    unfrequent: boolean;
                    intro: string;
                    init: string;
                    item: {
                        500: string;
                        700: string;
                        1000: string;
                        1500: string;
                        2500: string;
                    };
                };
                doubleclick_intro: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                video: {
                    name: string;
                    init: string;
                    intro: string;
                    item: {
                        0: string;
                        5: string;
                        10: string;
                        20: string;
                        50: string;
                        10000: string;
                    };
                    unfrequent: boolean;
                };
                video_default_play_speed: {
                    name: string;
                    init: string;
                    intro: string;
                    item: {
                        "0.25x": string;
                        "0.5x": string;
                        "1x": string;
                        "1.5x": string;
                        "2x": string;
                        "4x": string;
                    };
                    unfrequent: boolean;
                };
                max_loadtime: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        5000: string;
                        10000: string;
                        20000: string;
                        60000: string;
                    };
                    onclick(item: any): void;
                };
                mousewheel: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                    onclick(bool: any): void;
                };
                auto_check_update: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                lucky_star: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                dev: {
                    name: string;
                    intro: string;
                    init: boolean;
                    onclick(bool: any): void;
                    unfrequent: boolean;
                };
                extension_alert: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                fuck_sojson: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                errstop: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                update_link: {
                    name: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        coding: string;
                        github: string;
                    };
                    onclick(item: any): void;
                };
                extension_source: {
                    name: string;
                    init: string;
                    unfrequent: boolean;
                    item: {};
                    intro: () => string;
                };
                extension_create: {
                    name: string;
                    clear: boolean;
                    unfrequent: boolean;
                    onclick(): void;
                };
                extension_delete: {
                    name: string;
                    clear: boolean;
                    unfrequent: boolean;
                    onclick(): void;
                };
                update: (config: any, map: any) => void;
            };
        };
        appearence: {
            name: string;
            config: {
                theme: {
                    name: string;
                    init: string;
                    item: {};
                    visualMenu: (node: any, link: any) => void;
                    onclick: (theme: any) => Promise<void>;
                };
                layout: {
                    name: string;
                    init: string;
                    item: {
                        newlayout: string;
                        mobile: string;
                        long: string;
                        long2: string;
                        nova: string;
                    };
                    visualMenu: (node: any, link: any) => void;
                    onclick(layout: any): void;
                };
                splash_style: {
                    name: string;
                    init: string;
                    item: {
                        style1: string;
                        style2: string;
                    };
                    visualMenu: (node: any, link: any) => Promise<void>;
                };
                player_height: {
                    name: string;
                    init: string;
                    item: {
                        short: string;
                        default: string;
                        long: string;
                    };
                    onclick(item: any): void;
                };
                player_height_nova: {
                    name: string;
                    init: string;
                    item: {
                        short: string;
                        default: string;
                        long: string;
                    };
                    onclick(item: any): void;
                };
                ui_zoom: {
                    name: string;
                    unfrequent: boolean;
                    init: string;
                    item: {
                        esmall: string;
                        vsmall: string;
                        small: string;
                        normal: string;
                        big: string;
                        vbig: string;
                        ebig: string;
                        eebig: string;
                        eeebig: string;
                        eeeebig: string;
                    };
                    onclick(zoom: any): void;
                };
                image_background: {
                    name: string;
                    init: string;
                    item: {};
                    visualBar: (node: any, item: any, create: any) => void;
                    visualMenu: (node: any, link: any, name: any, config: any) => void;
                    onclick(background: any, node: any): void;
                };
                image_background_random: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                image_background_blur: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                phonelayout: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): boolean;
                };
                change_skin: {
                    name: string;
                    init: boolean;
                    intro: string;
                };
                change_skin_auto: {
                    name: string;
                    init: string;
                    item: {
                        off: string;
                        30000: string;
                        60000: string;
                        120000: string;
                        300000: string;
                    };
                    intro: string;
                    onclick(item: any): void;
                };
                card_style: {
                    name: string;
                    init: string;
                    intro: string;
                    item: {
                        wood: string;
                        music: string;
                        simple: string;
                        ol: string;
                        custom: string;
                        default: string;
                    };
                    visualBar: (node: any, item: any, create: any, switcher: any) => void;
                    visualMenu: (node: any, link: any, name: any, config: any) => void;
                    onclick(layout: any): void;
                    unfrequent: boolean;
                };
                cardback_style: {
                    name: string;
                    intro: string;
                    init: string;
                    item: {
                        official: string;
                        feicheng: string;
                        liusha: string;
                        ol: string;
                        custom: string;
                        default: string;
                    };
                    visualBar: (node: any, item: any, create: any, switcher: any) => void;
                    visualMenu: (node: any, link: any, name: any, config: any) => void;
                    onclick(layout: any): void;
                    unfrequent: boolean;
                };
                hp_style: {
                    name: string;
                    init: string;
                    item: {
                        default: string;
                        emotion: string;
                        glass: string;
                        round: string;
                        ol: string;
                        xinglass: string;
                        xinround: string;
                        custom: string;
                    };
                    visualBar: (node: any, item: any, create: any, switcher: any) => void;
                    visualMenu: (node: any, link: any, name: any, config: any) => void;
                    onclick(layout: any): void;
                    unfrequent: boolean;
                };
                player_style: {
                    name: string;
                    init: string;
                    intro: string;
                    item: {
                        wood: string;
                        music: string;
                        simple: string;
                        custom: string;
                        default: string;
                    };
                    visualBar: (node: any, item: any, create: any, switcher: any) => void;
                    visualMenu: (node: any, link: any, name: any, config: any) => void;
                    onclick(layout: any): void;
                    unfrequent: boolean;
                };
                border_style: {
                    name: string;
                    init: string;
                    intro: string;
                    item: {
                        gold: string;
                        silver: string;
                        bronze: string;
                        dragon_gold: string;
                        dragon_silver: string;
                        dragon_bronze: string;
                        custom: string;
                        auto: string;
                        default: string;
                    };
                    visualBar: (node: any, item: any, create: any, switcher: any) => void;
                    visualMenu: (node: any, link: any, name: any, config: any) => void;
                    onclick(layout: any): void;
                    unfrequent: boolean;
                };
                autoborder_count: {
                    name: string;
                    intro: string;
                    init: string;
                    item: {
                        kill: string;
                        damage: string;
                        mix: string;
                    };
                    unfrequent: boolean;
                };
                autoborder_start: {
                    name: string;
                    init: string;
                    item: {
                        bronze: string;
                        silver: string;
                        gold: string;
                    };
                    unfrequent: boolean;
                };
                player_border: {
                    name: string;
                    init: string;
                    intro: string;
                    unfrequent: boolean;
                    item: {
                        slim: string;
                        narrow: string;
                        normal: string;
                        wide: string;
                    };
                    onclick(item: any): void;
                };
                menu_style: {
                    name: string;
                    init: string;
                    item: {
                        wood: string;
                        music: string;
                        simple: string;
                        custom: string;
                        default: string;
                    };
                    visualBar: (node: any, item: any, create: any, switcher: any) => void;
                    visualMenu: (node: any, link: any, name: any, config: any) => void;
                    onclick(layout: any): void;
                    unfrequent: boolean;
                };
                control_style: {
                    name: string;
                    init: string;
                    item: {
                        wood: string;
                        music: string;
                        simple: string;
                        custom: string;
                        default: string;
                    };
                    visualBar: (node: any, item: any, create: any, switcher: any) => void;
                    visualMenu: (node: any, link: any, name: any, config: any) => void;
                    onclick(layout: any): void;
                    unfrequent: boolean;
                };
                custom_button: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                custom_button_system_top: {
                    name: string;
                    init: string;
                    item: {
                        "-5x": string;
                        "-4x": string;
                        "-3x": string;
                        "-2x": string;
                        "-1x": string;
                        "0x": string;
                        "1x": string;
                        "2x": string;
                        "3x": string;
                        "4x": string;
                        "5x": string;
                    };
                    unfrequent: boolean;
                    onclick(item: any): void;
                };
                custom_button_system_bottom: {
                    name: string;
                    init: string;
                    item: {
                        "-5x": string;
                        "-4x": string;
                        "-3x": string;
                        "-2x": string;
                        "-1x": string;
                        "0x": string;
                        "1x": string;
                        "2x": string;
                        "3x": string;
                        "4x": string;
                        "5x": string;
                    };
                    unfrequent: boolean;
                    onclick(item: any): void;
                };
                custom_button_control_top: {
                    name: string;
                    init: string;
                    item: {
                        "-5x": string;
                        "-4x": string;
                        "-3x": string;
                        "-2x": string;
                        "-1x": string;
                        "0x": string;
                        "1x": string;
                        "2x": string;
                        "3x": string;
                        "4x": string;
                        "5x": string;
                    };
                    unfrequent: boolean;
                    onclick(item: any): void;
                };
                custom_button_control_bottom: {
                    name: string;
                    init: string;
                    item: {
                        "-5x": string;
                        "-4x": string;
                        "-3x": string;
                        "-2x": string;
                        "-1x": string;
                        "0x": string;
                        "1x": string;
                        "2x": string;
                        "3x": string;
                        "4x": string;
                        "5x": string;
                    };
                    unfrequent: boolean;
                    onclick(item: any): void;
                };
                radius_size: {
                    name: string;
                    init: string;
                    item: {
                        off: string;
                        reduce: string;
                        default: string;
                        increase: string;
                    };
                    unfrequent: boolean;
                    onclick(item: any): void;
                };
                glow_phase: {
                    name: string;
                    unfrequent: boolean;
                    init: string;
                    intro: string;
                    item: {
                        none: string;
                        yellow: string;
                        green: string;
                        purple: string;
                    };
                    onclick(bool: any): void;
                };
                equip_span: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                fold_card: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                fold_mode: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                seperate_control: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                blur_ui: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                glass_ui: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                damage_shake: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                button_press: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                jiu_effect: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                animation: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                skill_animation_type: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        default: string;
                        old: string;
                        off: string;
                    };
                };
                die_move: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        off: string;
                        move: string;
                        flip: string;
                    };
                };
                target_shake: {
                    name: string;
                    intro: string;
                    init: string;
                    item: {
                        off: string;
                        zoom: string;
                        shake: string;
                    };
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                turned_style: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                link_style2: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        chain: string;
                        rotate: string;
                        mark: string;
                    };
                    onclick(style: any): void;
                };
                cardshape: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        default: string;
                        oblong: string;
                    };
                    onclick(item: any): void;
                };
                cardtempname: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        default: string;
                        horizon: string;
                        image: string;
                        off: string;
                    };
                    onclick(item: any): void;
                };
                buttoncharacter_style: {
                    name: string;
                    init: string;
                    item: {
                        default: string;
                        simple: string;
                        old: string;
                    };
                    unfrequent: boolean;
                };
                buttoncharacter_prefix: {
                    name: string;
                    init: string;
                    item: {
                        default: string;
                        simple: string;
                        off: string;
                    };
                    unfrequent: boolean;
                };
                cursor_style: {
                    name: string;
                    init: string;
                    intro: string;
                    unfrequent: boolean;
                    item: {
                        auto: string;
                        pointer: string;
                    };
                    onclick(item: any): void;
                };
                name_font: {
                    name: string;
                    init: string;
                    unfrequent: boolean;
                    item: {};
                    textMenu: (node: any, link: any) => void;
                    onclick(font: any): void;
                };
                identity_font: {
                    name: string;
                    init: string;
                    unfrequent: boolean;
                    item: {};
                    textMenu: (node: any, link: any) => void;
                    onclick(font: any): void;
                };
                cardtext_font: {
                    name: string;
                    init: string;
                    unfrequent: boolean;
                    item: {};
                    textMenu: (node: any, link: any) => void;
                    onclick(font: any): void;
                };
                global_font: {
                    name: string;
                    init: string;
                    unfrequent: boolean;
                    item: {};
                    textMenu: (node: any, link: any) => void;
                    onclick(font: any): void;
                };
                suits_font: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                    onclick(bool: any): void;
                };
                update: (config: any, map: any) => void;
            };
        };
        view: {
            name: string;
            config: {
                update: (config: any, map: any) => void;
                show_history: {
                    name: string;
                    init: string;
                    intro: string;
                    unfrequent: boolean;
                    item: {
                        off: string;
                        left: string;
                        right: string;
                    };
                    onclick(bool: any): void;
                };
                pop_logv: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_log: {
                    name: string;
                    init: string;
                    intro: string;
                    unfrequent: boolean;
                    item: {
                        off: string;
                        left: string;
                        center: string;
                        right: string;
                    };
                    onclick(bool: any): void;
                };
                clear_log: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                log_highlight: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    intro: string;
                };
                show_time: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_time2: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                watchface: {
                    name: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        none: string;
                        simple: string;
                    };
                    onclick(item: any): void;
                };
                show_time3: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_statusbar_android: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_statusbar_ios: {
                    name: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        default: string;
                        overlay: string;
                        auto: string;
                        off: string;
                    };
                    onclick(bool: any): void;
                };
                show_card_prompt: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                hide_card_prompt_basic: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                hide_card_prompt_equip: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_phase_prompt: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_phaseuse_prompt: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                auto_popped_config: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                auto_popped_history: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_round_menu: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): boolean;
                };
                remember_round_button: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                remember_dialog: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                transparent_dialog: {
                    name: string;
                    init: boolean;
                    intro: string;
                    onclick(bool: any): void;
                };
                show_rarity: {
                    name: string;
                    init: boolean;
                    intro: string;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                mark_identity_style: {
                    name: string;
                    intro: string;
                    unfrequent: boolean;
                    init: string;
                    item: {
                        menu: string;
                        click: string;
                    };
                };
                character_dialog_tool: {
                    name: string;
                    intro: string;
                    init: string;
                    item: {
                        收藏: string;
                        最近: string;
                        all: string;
                    };
                    unfrequent: boolean;
                };
                recent_character_number: {
                    name: string;
                    intro: string;
                    init: string;
                    item: {
                        6: string;
                        12: string;
                        20: string;
                        30: string;
                    };
                    unfrequent: boolean;
                };
                popequip: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                filternode_button: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_charactercard: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_favourite: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_favmode: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_favourite_menu: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_ban_menu: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                right_range: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                hide_card_image: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                    restart: boolean;
                };
                show_name: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_sex: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_group: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_replay: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_playerids: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_sortcard: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_pause: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_auto: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_volumn: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_cardpile: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_cardpile_number: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_handcardbutton: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_giveup: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                show_wuxie: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                    onclick(bool: any): void;
                };
                wuxie_right: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_discardpile: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_extensionmaker: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_extensionshare: {
                    name: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                show_characternamepinyin: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        doNotShow: string;
                        showPinyin: string;
                        showCodeIdentifier: string;
                        showPinyin2: string;
                        showCodeIdentifier2: string;
                    };
                    visualMenu: (node: any, link: any, name: any) => void;
                };
                show_skillnamepinyin: {
                    name: string;
                    intro: string;
                    init: string;
                    unfrequent: boolean;
                    item: {
                        doNotShow: string;
                        showPinyin: string;
                        showCodeIdentifier: string;
                        showPinyin2: string;
                        showCodeIdentifier2: string;
                    };
                    visualMenu: (node: any, link: any, name: any) => void;
                };
            };
        };
        audio: {
            name: string;
            config: {
                update: (config: any, map: any) => void;
                background_music: {
                    updatex: () => void;
                    name: string;
                    init: boolean;
                    item: {
                        music_default: string;
                    };
                    onclick(item: any): void;
                };
                import_music: {
                    name: string;
                    clear: boolean;
                };
                background_audio: {
                    name: string;
                    init: boolean;
                };
                background_speak: {
                    name: string;
                    init: boolean;
                };
                equip_audio: {
                    name: string;
                    init: boolean;
                };
                repeat_audio: {
                    name: string;
                    init: boolean;
                };
                volumn_audio: {
                    name: string;
                    init: number;
                    item: {
                        0: string;
                        1: string;
                        2: string;
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        7: string;
                        8: string;
                    };
                    onclick(volume: any): void;
                };
                volumn_background: {
                    name: string;
                    init: number;
                    item: {
                        0: string;
                        1: string;
                        2: string;
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        7: string;
                        8: string;
                    };
                    onclick(volume: any): void;
                };
                clear_background_music: {
                    name: string;
                    clear: boolean;
                    onclick(): void;
                };
            };
        };
        skill: {
            name: string;
            config: {
                update: (config: any, map: any) => void;
            };
        };
        others: {
            name: string;
            config: {
                reset_game: {
                    name: string;
                    onclick(): void;
                    clear: boolean;
                };
                reset_hiddenpack: {
                    name: string;
                    onclick(): void;
                    clear: boolean;
                };
                reset_tutorial: {
                    name: string;
                    onclick(): void;
                    clear: boolean;
                };
                import_data: {
                    name: string;
                    onclick(): void;
                    clear: boolean;
                };
                import_data_button: {
                    name: string;
                    clear: boolean;
                };
                export_data: {
                    name: string;
                    onclick(): void;
                    clear: boolean;
                };
                redownload_game: {
                    name: string;
                    onclick(): void;
                    clear: boolean;
                };
                update: (config: any, map: any) => void;
            };
        };
    };
    extensionMenu: {
        cardpile: {
            enable: {
                name: string;
                init: boolean;
                restart: boolean;
            };
            intro: {
                name: string;
                clear: boolean;
                nopointer: boolean;
            };
            sha: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            huosha: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            leisha: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            shan: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            tao: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            jiu: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            wuxie: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            nanman: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            wanjian: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            guohe: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            shunshou: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            tiesuo: {
                name: string;
                init: string;
                item: {
                    1: string;
                    0.5: string;
                    0: string;
                };
            };
            hide: {
                name: string;
                clear: boolean;
                onclick(): void;
            };
        };
        boss: {
            enable: {
                name: string;
                init: boolean;
                restart: boolean;
                onswitch: (bool: any) => void;
            };
            intro: {
                name: string;
                clear: boolean;
                nopointer: boolean;
            };
            enableai: {
                name: string;
                init: boolean;
            };
            hide: {
                name: string;
                clear: boolean;
                onclick(): void;
            };
        };
        wuxing: {
            enable: {
                name: string;
                init: boolean;
                restart: boolean;
            };
            intro: {
                name: string;
                clear: boolean;
                nopointer: boolean;
            };
            num: {
                name: string;
                init: string;
                item: {
                    0.1: string;
                    0.2: string;
                    0.3: string;
                    0.5: string;
                };
            };
            hide: {
                name: string;
                clear: boolean;
                onclick(): void;
            };
        };
        coin: {
            enable: {
                name: string;
                init: boolean;
                restart: boolean;
                onclick(bool: any): void;
            };
            intro: {
                name: string;
                clear: boolean;
                nopointer: boolean;
            };
            display: {
                name: string;
                init: string;
                item: {
                    symbol: string;
                    text: string;
                };
                onclick(item: any): void;
            };
            canvas: {
                name: string;
                init: boolean;
                onclick(bool: any): void;
            };
            hide: {
                name: string;
                clear: boolean;
                onclick(): void;
            };
        };
    };
    mode: {
        identity: {
            name: string;
            connect: {
                update: (config: any, map: any) => void;
                connect_identity_mode: {
                    name: string;
                    init: string;
                    item: {
                        normal: string;
                        zhong: string;
                        stratagem: string;
                        purple: string;
                    };
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
                connect_player_number: {
                    name: string;
                    init: string;
                    readonly item: {};
                    frequent: boolean;
                    restart: boolean;
                };
                connect_limit_zhu: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        off: string;
                        group: string;
                        4: string;
                        6: string;
                        8: string;
                    };
                };
                connect_zhong_card: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                connect_double_nei: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    readonly intro: string;
                };
                connect_enable_commoner: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                    readonly intro: string;
                };
                connect_double_character: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                connect_change_card: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                connect_special_identity: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
                connect_enable_year_limit: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                    readonly intro: string;
                };
                connect_round_one_use_fury: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                connect_enhance_zhu: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    intro: string;
                };
            };
            config: {
                update: (config: any, map: any) => void;
                identity_mode: {
                    name: string;
                    init: string;
                    item: {
                        normal: string;
                        zhong: string;
                        stratagem: string;
                        purple: string;
                    };
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
                player_number: {
                    name: string;
                    init: string;
                    readonly item: {};
                    frequent: boolean;
                    restart: boolean;
                };
                double_nei: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
                choose_group: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
                nei_fullscreenpop: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                double_character: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                special_identity: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
                zhong_card: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                double_hp: {
                    name: string;
                    init: string;
                    item: {
                        hejiansan: string;
                        pingjun: string;
                        zuidazhi: string;
                        zuixiaozhi: string;
                        zonghe: string;
                    };
                    restart: boolean;
                };
                auto_identity: {
                    name: string;
                    item: {
                        off: string;
                        one: string;
                        two: string;
                        three: string;
                        always: string;
                    };
                    init: string;
                    onclick(bool: any): void;
                    intro: string;
                };
                auto_mark_identity: {
                    name: string;
                    init: boolean;
                    intro: string;
                };
                enhance_zhu: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    intro: string;
                };
                free_choose: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_identity: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_choice: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_card: {
                    name: string;
                    init: string;
                    item: {
                        disabled: string;
                        once: string;
                        twice: string;
                        unlimited: string;
                    };
                };
                round_one_use_fury: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                nei_auto_mark_camouflage: {
                    name: string;
                    intro: string;
                    init: boolean;
                    unfrequent: boolean;
                };
                continue_game: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                    intro: string;
                };
                dierestart: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                revive: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                ban_identity: {
                    name: string;
                    init: string;
                    item: {
                        off: string;
                        zhu: string;
                        zhong: string;
                        nei: string;
                        fan: string;
                    };
                };
                ban_identity2: {
                    name: string;
                    init: string;
                    item: {
                        off: string;
                        zhu: string;
                        zhong: string;
                        nei: string;
                        fan: string;
                    };
                };
                ban_identity3: {
                    name: string;
                    init: string;
                    item: {
                        off: string;
                        zhu: string;
                        zhong: string;
                        nei: string;
                        fan: string;
                    };
                };
                ai_strategy: {
                    name: string;
                    init: string;
                    item: {
                        ai_strategy_1: string;
                        ai_strategy_2: string;
                        ai_strategy_3: string;
                        ai_strategy_4: string;
                        ai_strategy_5: string;
                        ai_strategy_6: string;
                    };
                    intro: string;
                };
                difficulty: {
                    name: string;
                    init: string;
                    item: {
                        easy: string;
                        normal: string;
                        hard: string;
                    };
                };
                choice_zhu: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        8: string;
                        10: string;
                    };
                };
                limit_zhu: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        off: string;
                        group: string;
                        4: string;
                        6: string;
                        8: string;
                    };
                };
                choice_zhong: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        8: string;
                        10: string;
                    };
                };
                choice_nei: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        8: string;
                        10: string;
                    };
                };
                choice_fan: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        8: string;
                        10: string;
                    };
                };
                enable_commoner: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
                choice_commoner: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        8: string;
                        10: string;
                    };
                };
                enable_year_limit: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
            };
        };
        guozhan: {
            name: string;
            connect: {
                connect_guozhan_mode: {
                    name: string;
                    init: string;
                    item: {
                        normal: string;
                        yingbian: string;
                        old: string;
                    };
                    frequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                connect_player_number: {
                    name: string;
                    init: string;
                    readonly item: {};
                    frequent: boolean;
                    restart: boolean;
                };
                connect_aozhan: {
                    name: string;
                    init: boolean;
                    intro: string;
                    frequent: boolean;
                    restart: boolean;
                };
                readonly connect_separatism: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                connect_initshow_draw: {
                    name: string;
                    item: {
                        off: string;
                        draw: string;
                        mark: string;
                    };
                    init: string;
                    frequent: boolean;
                    intro: string;
                };
                connect_viewnext: {
                    name: string;
                    init: boolean;
                    intro: string;
                };
                connect_zhulian: {
                    name: string;
                    init: boolean;
                    intro: string;
                };
                connect_junzhu: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    intro: string;
                };
                connect_change_card: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
            };
            config: {
                update: (config: any, map: any) => void;
                guozhan_mode: {
                    name: string;
                    init: string;
                    item: {
                        normal: string;
                        yingbian: string;
                        old: string;
                        free: string;
                    };
                    frequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                player_number: {
                    name: string;
                    init: string;
                    readonly item: {};
                    frequent: boolean;
                    restart: boolean;
                };
                aozhan: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                separatism: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                initshow_draw: {
                    name: string;
                    item: {
                        off: string;
                        draw: string;
                        mark: string;
                    };
                    init: string;
                    frequent: boolean;
                    intro: string;
                };
                viewnext: {
                    name: string;
                    init: boolean;
                    intro: string;
                };
                aozhan_bgm: {
                    updatex: () => void;
                    name: string;
                    item: {
                        disabled: string;
                        online: string;
                        rewrite: string;
                        chaoming: string;
                        random: string;
                    };
                    init: string;
                    onclick(item: any): void;
                };
                zhulian: {
                    name: string;
                    init: boolean;
                    intro: string;
                };
                changeViceType: {
                    name: string;
                    init: string;
                    item: {
                        default: string;
                        online: string;
                    };
                    frequent: boolean;
                    restart: boolean;
                };
                onlyguozhan: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                guozhanSkin: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                    intro: string;
                };
                junzhu: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    intro: string;
                };
                double_hp: {
                    name: string;
                    init: string;
                    item: {
                        hejiansan: string;
                        pingjun: string;
                        zuidazhi: string;
                        zuixiaozhi: string;
                        zonghe: string;
                    };
                    restart: boolean;
                };
                free_choose: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                onlyguozhanexpand: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    intro: string;
                };
                change_identity: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_choice: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_card: {
                    name: string;
                    init: string;
                    item: {
                        disabled: string;
                        once: string;
                        twice: string;
                        unlimited: string;
                    };
                };
                continue_game: {
                    name: string;
                    init: boolean;
                    intro: string;
                    onclick(bool: any): void;
                };
                dierestart: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                revive: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                difficulty: {
                    name: string;
                    init: string;
                    item: {
                        easy: string;
                        normal: string;
                        hard: string;
                    };
                };
                choice_num: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        5: string;
                        6: string;
                        7: string;
                        8: string;
                        9: string;
                        10: string;
                    };
                };
            };
        };
        versus: {
            name: string;
            connect: {
                update: (config: any, map: any) => void;
                connect_versus_mode: {
                    name: string;
                    init: string;
                    item: {
                        "1v1": string;
                        "2v2": string;
                        "3v3": string;
                        "4v4": string;
                        guandu: string;
                    };
                    frequent: boolean;
                };
                connect_replace_handcard: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    intro: string;
                };
                connect_olfeiyang_four: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    intro: string;
                };
                connect_choice_num: {
                    name: string;
                    init: string;
                    frequent: boolean;
                    item: {
                        12: string;
                        16: string;
                        20: string;
                        24: string;
                        40: string;
                    };
                };
                connect_replace_number: {
                    name: string;
                    init: string;
                    frequent: boolean;
                    item: {
                        0: string;
                        1: string;
                        2: string;
                        3: string;
                        4: string;
                        5: string;
                    };
                };
            };
            config: {
                update: (config: any, map: any) => void;
                versus_mode: {
                    name: string;
                    init: string;
                    item: {
                        four: string;
                        three: string;
                        two: string;
                        guandu: string;
                        jiange: string;
                        siguo: string;
                        standard: string;
                    };
                    restart: boolean;
                    frequent: boolean;
                };
                ladder: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                ladder_monthly: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                enable_all: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                enable_all_cards_four: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                enable_all_three: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                enable_all_cards: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                four_assign: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                };
                four_phaseswap: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                };
                two_assign: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                };
                two_phaseswap: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                };
                free_choose: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    onclick(bool: any): void;
                };
                fouralign: {
                    name: string;
                    init: boolean;
                };
                change_identity: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_choice: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                    frequent: boolean;
                };
                double_character_jiange: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                replace_handcard_two: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    intro: string;
                };
                olfeiyang_four: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    intro: string;
                };
                replace_character_two: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    intro: string;
                };
                expand_dialog: {
                    name: string;
                    intro: string;
                    init: boolean;
                };
                siguo_character: {
                    name: string;
                    init: string;
                    item: {
                        increase: string;
                        normal: string;
                        off: string;
                    };
                    frequent: boolean;
                };
                ladder_reset: {
                    name: string;
                    onclick(): void;
                    clear: boolean;
                };
                edit_character_three: {
                    name: string;
                    clear: boolean;
                    onclick(): void;
                };
                reset_character_three: {
                    name: string;
                    intro: string;
                    clear: boolean;
                    onclick(): void;
                };
                edit_character_four: {
                    name: string;
                    clear: boolean;
                    onclick(): void;
                };
                reset_character_four: {
                    name: string;
                    intro: string;
                    clear: boolean;
                    onclick(): void;
                };
            };
        };
        connect: {
            name: string;
            config: {
                connect_nickname: {
                    name: string;
                    input: boolean;
                    frequent: boolean;
                };
                connect_avatar: {
                    name: string;
                    init: string;
                    item: {};
                    frequent: boolean;
                    onclick(item: any): void;
                };
                hall_ip: {
                    name: string;
                    input: boolean;
                    frequent: boolean;
                };
                hall_button: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    onclick(bool: any): void;
                };
                wss_mode: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    intro: string;
                };
                read_clipboard: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    intro: string;
                };
            };
        };
        boss: {
            name: string;
            config: {
                free_choose: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    onclick(bool: any): void;
                };
                change_choice: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                    frequent: boolean;
                };
                single_control: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    onclick(bool: any): void;
                    intro: string;
                };
            };
        };
        doudizhu: {
            name: string;
            connect: {
                update: (config: any, map: any) => void;
                connect_doudizhu_mode: {
                    name: string;
                    init: string;
                    item: {
                        normal: string;
                        kaihei: string;
                        huanle: string;
                        binglin: string;
                        online: string;
                    };
                    restart: boolean;
                    frequent: boolean;
                };
                connect_double_character: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                connect_change_card: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
            };
            config: {
                update: (config: any, map: any) => void;
                doudizhu_mode: {
                    name: string;
                    init: string;
                    item: {
                        normal: string;
                        kaihei: string;
                        huanle: string;
                        binglin: string;
                        online: string;
                    };
                    restart: boolean;
                    frequent: boolean;
                };
                double_character: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                double_hp: {
                    name: string;
                    init: string;
                    item: {
                        hejiansan: string;
                        pingjun: string;
                        zuidazhi: string;
                        zuixiaozhi: string;
                        zonghe: string;
                    };
                    restart: boolean;
                };
                free_choose: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_identity: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_choice: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_card: {
                    name: string;
                    init: string;
                    item: {
                        disabled: string;
                        once: string;
                        twice: string;
                        unlimited: string;
                    };
                };
                continue_game: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                    intro: string;
                };
                dierestart: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                revive: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                choice_zhu: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        8: string;
                        10: string;
                    };
                };
                choice_fan: {
                    name: string;
                    init: string;
                    restart: boolean;
                    item: {
                        3: string;
                        4: string;
                        5: string;
                        6: string;
                        8: string;
                        10: string;
                    };
                };
                edit_character: {
                    name: string;
                    clear: boolean;
                    onclick(): void;
                };
                reset_character: {
                    name: string;
                    intro: string;
                    clear: boolean;
                    onclick(): void;
                };
            };
        };
        single: {
            name: string;
            connect: {
                connect_single_mode: {
                    name: string;
                    init: string;
                    item: {
                        normal: string;
                        dianjiang: string;
                        changban: string;
                        wuxianhuoli: string;
                    };
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
                connect_enable_jin: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                };
                connect_change_card: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                update: (config: any, map: any) => void;
            };
            config: {
                single_mode: {
                    name: string;
                    init: string;
                    item: {
                        normal: string;
                        dianjiang: string;
                        changban: string;
                        wuxianhuoli: string;
                    };
                    restart: boolean;
                    frequent: boolean;
                    intro: string;
                };
                enable_jin: {
                    name: string;
                    init: boolean;
                    restart: boolean;
                    frequent: boolean;
                };
                change_card: {
                    name: string;
                    init: string;
                    item: {
                        disabled: string;
                        once: string;
                        twice: string;
                        unlimited: string;
                    };
                };
                update: (config: any, map: any) => void;
            };
        };
        chess: {
            name: string;
            config: {
                chess_mode: {
                    name: string;
                    init: string;
                    item: {
                        combat: string;
                        three: string;
                        leader: string;
                    };
                    restart: boolean;
                    frequent: boolean;
                };
                update: (config: any, map: any) => void;
                chess_leader_save: {
                    name: string;
                    init: string;
                    item: {
                        save1: string;
                        save2: string;
                        save3: string;
                        save4: string;
                        save5: string;
                    };
                    restart: boolean;
                    frequent: boolean;
                };
                chess_leader_allcharacter: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                chess_leader_clear: {
                    name: string;
                    onclick(): void;
                    clear: boolean;
                    frequent: boolean;
                };
                chess_obstacle: {
                    name: string;
                    init: string;
                    item: {
                        0: string;
                        0.2: string;
                        0.333: string;
                        0.5: string;
                    };
                    frequent: boolean;
                };
                show_range: {
                    name: string;
                    init: boolean;
                };
                show_distance: {
                    name: string;
                    init: boolean;
                };
                chess_character: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                chess_card: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                free_choose: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_choice: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                chessscroll_speed: {
                    name: string;
                    init: string;
                    intro: string;
                    item: {
                        0: string;
                        10: string;
                        20: string;
                        30: string;
                    };
                };
            };
        };
        tafang: {
            name: string;
            config: {
                tafang_turn: {
                    name: string;
                    init: string;
                    frequent: boolean;
                    item: {
                        10: string;
                        20: string;
                        30: string;
                        1000: string;
                    };
                };
                tafang_difficulty: {
                    name: string;
                    init: string;
                    frequent: boolean;
                    item: {
                        1: string;
                        2: string;
                        3: string;
                    };
                };
                show_range: {
                    name: string;
                    init: boolean;
                };
                show_distance: {
                    name: string;
                    init: boolean;
                };
                chessscroll_speed: {
                    name: string;
                    intro: string;
                    init: string;
                    item: {
                        0: string;
                        10: string;
                        20: string;
                        30: string;
                    };
                };
            };
        };
        brawl: {
            name: string;
            config: {
                huanhuazhizhan: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                duzhansanguo: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                daozhiyueying: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                weiwoduzun: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                tongxingzhizheng: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                jiazuzhizheng: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                tongqueduopao: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                tongjiangmoshi: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                baiyidujiang: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                qianlidanji: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                liangjunduilei: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
                scene: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                };
            };
        };
        stone: {
            name: string;
            config: {
                battle_number: {
                    name: string;
                    init: string;
                    frequent: boolean;
                    item: {
                        1: string;
                        2: string;
                        3: string;
                        4: string;
                        6: string;
                        8: string;
                        10: string;
                    };
                    onclick(num: any): void;
                };
                mana_mode: {
                    name: string;
                    init: string;
                    item: {
                        inf: string;
                        inc: string;
                    };
                    frequent: boolean;
                };
                skill_bar: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: boolean;
                };
                double_character: {
                    name: string;
                    init: boolean;
                    frequent: boolean;
                    restart: () => boolean;
                };
                free_choose: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
                change_choice: {
                    name: string;
                    init: boolean;
                    onclick(bool: any): void;
                };
            };
        };
    };
    status: {
        running: boolean;
        canvas: boolean;
        time: number;
        reload: number;
        delayed: number;
        frameId: number;
        videoId: number;
        globalId: number;
    };
    help: {
        关于游戏: string;
        游戏操作: string;
        游戏命令: string;
        游戏名词: string;
    };
    /**
     * @type {import('path')}
     */
    path: import("path").PlatformPath;
    getErrorTip(msg: any): any;
    codeMirrorReady(node: any, editor: any): void;
    setIntro(node: any, func: any, left: any): void;
    setPopped(node: any, func: any, width: any, height: any, forceclick: any, paused2: any): void;
    placePoppedDialog(dialog: any, e: any): void;
    setHover(node: any, func: any, hoveration: any, width: any): any;
    setScroll(node: any): any;
    setMousewheel(node: any): void;
    setLongPress(node: any, func: any): any;
    updateCanvas(time: any): boolean;
    run(time: any): void;
    getUTC(date: any): any;
    saveVideo(): void;
    genAsync(fn: Function): (...args: any[]) => Promise<Generator<unknown, any, unknown>>;
    genAwait(item: any): Promise<any>;
    gnc: {
        of: (fn: Function) => (...args: any[]) => Promise<Generator<unknown, any, unknown>>;
        is: {
            coroutine: (item: any) => boolean;
            generatorFunc: (item: any) => boolean;
            generator: (item: any) => boolean;
        };
    };
    comparator: {
        equals: (...args: any[]) => boolean;
        equalAny: (...args: any[]) => boolean;
        notEquals: (...args: any[]) => boolean;
        notEqualAny: (...args: any[]) => boolean;
        typeEquals: (...args: any[]) => boolean;
    };
    creation: {
        readonly array: any[];
        readonly object: {};
        readonly nullObject: any;
        readonly string: string;
    };
    linq: {
        cselector: {
            hasAttr: (name: any) => string;
            isAttr: (name: any, item: any) => string;
            inAttr: (name: any, item: any) => string;
            conAttr: (name: any, item: any) => string;
            onAttr: (name: any, item: any) => string;
            bgnAttr: (name: any, item: any) => string;
            endAttr: (name: any, item: any) => string;
            merge: (...args: any[]) => string;
            of: (...args: any[]) => string;
            class: (...args: any[]) => string;
            group: (...args: any[]) => string;
            media: (type: any) => string;
        };
        dom: {
            attributes: {
                style(name: any, value: any): {
                    _type: string;
                    name: any;
                    value: any;
                };
            };
            inject(element: any, options: any): any;
            generate(...args: any[]): any;
            attribute(name: any, value: any): {
                _type: string;
                name: any;
                value: any;
            };
            div(...args: any[]): any;
        };
    };
    init: LibInit;
    cheat: {
        /**
         * 将游戏内部的对象暴露到全局中
         *
         * lib.cheat, game, ui, get, ai, lib, _status
         */
        i(): void;
        /**
         * 自己的下家(如果下家是主公身份则是下家的下家)立即死亡
         */
        dy(): void;
        /**
         * 在控制台输出每个扩展文件夹内的所有文件
         *
         * 需要node环境
         *
         * @param  { ...string } args 只需要显示的文件夹首字符
         */
        x(...args: string[]): void;
        /**
         * 游戏设置变更为固定数据(不更改扩展设置)
         */
        cfg(): void;
        /**
         * 移除旁观时的手牌暗置效果
         */
        o(): void;
        /**
         * 向牌堆顶添加牌(即创建一些卡牌添加到牌堆里)
         * @param  { ...string } list 卡牌名称数字
         */
        pt(...list: string[]): void;
        /**
         * 将卡牌的样式在simple和default之间切换
         *
         * 有参数时改为获得指定的牌
         *
         * @param { ...string } args
         */
        q(...args: string[]): void;
        /**
         * 替换皮肤
         * @param { string } name 武将名称
         * @param { number | true } [i] 指定game.players的第几个元素，不填指定为自己的下家。为true时切换玩家布局
         * @param { string } [skin] 皮肤id
         */
        p(name: string, i?: number | true, skin?: string): void;
        /**
         * @overload
         * @description 不传参数默认装备麒麟弓，八卦阵，的卢，赤兔，木牛
         * @returns { void }
         */
        /**
         * @overload
         * @description 指定的玩家或自己装备指定的牌
         * @param  {...Player | string} args 玩家或卡牌名
         * @returns { void }
         */
        /**
         * @overload
         * @description 不传参数默认装备麒麟弓，八卦阵，的卢，赤兔，木牛
         * @returns { void }
         */
        e(): any;
        /**
         * @overload
         * @description 不传参数默认装备麒麟弓，八卦阵，的卢，赤兔，木牛
         * @returns { void }
         */
        /**
         * @overload
         * @description 指定的玩家或自己装备指定的牌
         * @param  {...Player | string} args 玩家或卡牌名
         * @returns { void }
         */
        /**
         * @overload
         * @description 指定的玩家或自己装备指定的牌
         * @param  {...Player | string} args 玩家或卡牌名
         * @returns { void }
         */
        e(): any;
        /**
         * 检测当前游戏开启的武将数，卡堆的数量分布情况
         */
        c(): void;
        /**
         * 显示场上所有的角色的身份
         */
        id(): void;
        /**
         * 替换dialog中待选择的卡牌(或其他东西)对应的真实卡牌(或其他东西)
         * ```js
         * // 在神吕蒙涉猎时使用:
         * // 涉猎如果选择l第一张牌，那你获得的是你创造的这张杀
         * lib.cheat.b(game.createCard('sha'));
         * ```
         */
        b(...args: any[]): void;
        /**
         * 炉石模式可用，使用'spell_yexinglanghun'卡牌
         * @param { boolean } [me] 决定是自己还是对手使用'spell_yexinglanghun'卡牌
         */
        uy(me?: boolean): void;
        /**
         * 炉石模式可用，使用`spell_${name}`卡牌
         * @param { string } [name]
         * @param { boolean } [act]
         */
        gs(name?: string, act?: boolean): void;
        /**
         * 炉石模式可用，获得`stone_${name}_stonecharacter`卡牌
         * @param { string } [name]
         * @param { boolean } [act]
         */
        gc(name?: string, act?: boolean): void;
        /**
         * 进入/关闭快速自动测试模式(游戏速度最快)，只有游戏记录界面
         * @param { boolean | string } [bool]
         */
        a(bool?: boolean | string): void;
        /**
         * 临时去掉“自动测试模式”带来的css效果，
         *
         * 如果要彻底关闭，需要再执行一次lib.cheat.a
         */
        as(): void;
        /**
         * 装备麒麟弓，并且下家玩家对你发动借刀杀人,杀你的上家
         */
        uj(): void;
        /**
         * 下家对你使用一张牌
         * @param  {...Player | Player[] | string | VCard } args
         *
         * @example
         * ```js
         * // 传入player是卡牌的使用者
         * // 传入player数组是卡牌的目标(没有则目标是game.me)
         * // 传入字符串设置卡牌名称
         * // 传入Vcard对象设置卡牌更具体的卡牌信息
         * lib.cheat.u(player1, 'sha', [player2, player3]);
         * ```
         */
        u(...args: (Player | Player[] | string | VCard)[]): void;
        /**
         * 输出每个强度的武将数量、每个武将包的每个强度的武将数量、每个武将对应的id和翻译
         * @param { boolean } [bool] 为false不输出无名杀自带的武将id和翻译
         */
        r(bool?: boolean): void;
        /**
         * 打印目标玩家的手牌
         * @param { Player } player
         */
        h(player: Player): void;
        /**
         * 给自己立刻添加手牌
         *
         * @example
         * ```js
         * // 获得3张杀和1张闪
         * lib.cheat.g('sha', 3, 'shan', 1)
         * ```
         */
        g(...args: any[]): void;
        /**
         * 立即获得指定类型的牌各一张
         *
         * 会添加到不属于当前模式的牌和某些角色专属牌
         *
         * @param { string } type
         */
        ga(type: string): void;
        /**
         *  给所有玩家立刻添加一张或多张指定的牌
         * @param  {...string} args
         * @example
         * ```js
         * // 给所有玩家立刻添加一张杀和一张闪
         * lib.cheat.gg('sha', 'shan');
         * ```
         */
        gg(...args: string[]): void;
        /**
         * 给目标立即添加一张手牌
         * @param { string } name
         * @param { Player } target
         */
        gx(name: string, target?: Player): void;
        /**
         * 创建卡牌
         *
         * 如果lib.card里没有对应卡牌名返回null
         *
         * @param { string } name
         * @returns { Card }
         * @example
         * ```js
         * // 创建一个梅花杀
         * lib.cheat.gn('clubsha');
         * // 创建一个红色杀
         * lib.cheat.gn('redsha');
         * // 创建一个黑色杀
         * lib.cheat.gn('blacksha');
         * // 创建一个火杀
         * lib.cheat.gn('huosha');
         * // 创建一个雷杀
         * lib.cheat.gn('leisha');
         * // 冰杀神杀刺杀没有
         * ```
         */
        gn(name: string): Card;
        /**
         * 指定的玩家或自己立即获得诸葛连弩，青龙刀，八卦阵，的卢，赤兔，木牛
         * @param { Player } [target]
         */
        ge(target?: Player): void;
        /**
         * 自己立即获得闪电，火山，洪水，乐不思蜀，鬼幽结
         */
        gj(): void;
        /**
         * 自己立即获得所有食物牌各一张
         */
        gf(): void;
        /**
         * 自己立刻获取牌堆顶num张牌
         * @param { number } [num]
         * @param { Player } [target]
         */
        d(num?: number, target?: Player): void;
        /**
         * 给自己立刻添加一个或多个技能
         * @param {...string} args 技能名
         */
        s(...args: string[]): void;
        /**
         * 弃置指定位置玩家的所有牌
         *
         * 不传入num默认为弃置所有玩家的所有牌
         *
         * @param { number | Player } [num]
         */
        t(num?: number | Player): void;
        /**
         *  自己以外的其他玩家弃置所有牌
         */
        to(): void;
        /**
         * 弃置自己所有牌
         */
        tm(): void;
        /**
         * 指定一个目标，弃置所有牌，血量变1，并且自己获得一张"juedou"
         * @param i 从自己开始算起，自己为0，不填默认1，即自己下家
         */
        k(i?: number): void;
        /**
         * 重新设置当前的主公的武将牌，且血量上限+1(不论当局人数是否大于3)
         * @param { string } name
         */
        z(name: string): void;
    };
    translate: {
        flower: string;
        egg: string;
        wine: string;
        shoe: string;
        yuxisx: string;
        jiasuo: string;
        junk: string;
        common: string;
        rare: string;
        epic: string;
        legend: string;
        default: string;
        special: string;
        zhenfa: string;
        aozhan: string;
        mode_derivation_card_config: string;
        mode_banned_card_config: string;
        mode_favourite_character_config: string;
        mode_banned_character_config: string;
        heart: string;
        diamond: string;
        spade: string;
        club: string;
        none: string;
        ghujia: string;
        ghujia_bg: string;
        heart2: string;
        diamond2: string;
        spade2: string;
        club2: string;
        none2: string;
        red: string;
        black: string;
        red2: string;
        black2: string;
        ok: string;
        ok2: string;
        cancel: string;
        cancel2: string;
        restart: string;
        setting: string;
        start: string;
        random: string;
        _out: string;
        agree: string;
        refuse: string;
        fire: string;
        thunder: string;
        poison: string;
        kami: string;
        ice: string;
        stab: string;
        wei: string;
        shu: string;
        wu: string;
        qun: string;
        shen: string;
        western: string;
        key: string;
        jin: string;
        double: string;
        wei2: string;
        shu2: string;
        wu2: string;
        qun2: string;
        shen2: string;
        western2: string;
        key2: string;
        jin2: string;
        double2: string;
        male: string;
        female: string;
        mad: string;
        mad_bg: string;
        draw_card: string;
        discard_card: string;
        take_damage: string;
        reset_character: string;
        recover_hp: string;
        lose_hp: string;
        get_damage: string;
        weiColor: string;
        shuColor: string;
        wuColor: string;
        qunColor: string;
        shenColor: string;
        westernColor: string;
        jinColor: string;
        keyColor: string;
        basic: string;
        equip: string;
        trick: string;
        delay: string;
        special_delay: string;
        character: string;
        revive: string;
        equip1: string;
        equip2: string;
        equip3: string;
        equip3_4: string;
        equip4: string;
        equip5: string;
        equip6: string;
        zero: string;
        one: string;
        two: string;
        three: string;
        four: string;
        five: string;
        six: string;
        seven: string;
        eight: string;
        nine: string;
        ten: string;
        _recasting: string;
        _lianhuan: string;
        _lianhuan2: string;
        _kamisha: string;
        _icesha: string;
        qianxing: string;
        mianyi: string;
        fengyin: string;
        baiban: string;
        _disableJudge: string;
        xiaowu_emotion: string;
        guojia_emotion: string;
        zhenji_emotion: string;
        shibing_emotion: string;
        xiaosha_emotion: string;
        xiaotao_emotion: string;
        xiaojiu_emotion: string;
        xiaokuo_emotion: string;
        pause: string;
        config: string;
        auto: string;
        unknown: string;
        unknown0: string;
        unknown1: string;
        unknown2: string;
        unknown3: string;
        unknown4: string;
        unknown5: string;
        unknown6: string;
        unknown7: string;
        unknown8: string;
        unknown9: string;
        unknown10: string;
        unknown11: string;
        feichu_equip1: string;
        feichu_equip1_info: string;
        feichu_equip2: string;
        feichu_equip2_info: string;
        feichu_equip3: string;
        feichu_equip3_info: string;
        feichu_equip4: string;
        feichu_equip4_info: string;
        feichu_equip5: string;
        feichu_equip5_info: string;
        feichu_equip6: string;
        feichu_equip6_info: string;
        feichu_equip1_bg: string;
        feichu_equip2_bg: string;
        feichu_equip3_bg: string;
        feichu_equip4_bg: string;
        feichu_equip5_bg: string;
        feichu_equip6_bg: string;
        disable_judge: string;
        disable_judge_info: string;
        disable_judge_bg: string;
        pss: string;
        pss_paper: string;
        pss_scissor: string;
        pss_stone: string;
        pss_paper_info: string;
        pss_scissor_info: string;
        pss_stone_info: string;
        renku: string;
        group_wei: string;
        group_shu: string;
        group_wu: string;
        group_qun: string;
        group_key: string;
        group_jin: string;
        group_wei_bg: string;
        group_shu_bg: string;
        group_wu_bg: string;
        group_qun_bg: string;
        group_key_bg: string;
        group_jin_bg: string;
        zhengsu: string;
        zhengsu_leijin: string;
        zhengsu_bianzhen: string;
        zhengsu_mingzhi: string;
        zhengsu_leijin_info: string;
        zhengsu_bianzhen_info: string;
        zhengsu_mingzhi_info: string;
        db_atk: string;
        db_atk1: string;
        db_atk2: string;
        db_def: string;
        db_def1: string;
        db_def2: string;
        cooperation_damage: string;
        cooperation_damage_info: string;
        cooperation_draw: string;
        cooperation_draw_info: string;
        cooperation_discard: string;
        cooperation_discard_info: string;
        cooperation_use: string;
        cooperation_use_info: string;
        charge: string;
        expandedSlots: string;
        stratagem_fury: string;
        _stratagem_add_buff: string;
        phaseZhunbei: string;
        phaseJudge: string;
        phaseDraw: string;
        phaseUse: string;
        phaseDiscard: string;
        phaseJieshu: string;
    };
    experimental: typeof Experimental;
    element: {
        content: {
            emptyEvent: () => void;
            changeCharacter(event: any, trigger: any, player: any): Promise<void>;
            changeSkills(event: any, trigger: any, player: any): Promise<void>;
            addShownCards: () => void;
            hideShownCards: () => void;
            executeDelayCardEffect: () => void;
            gift: () => void;
            recast: () => void;
            disableEquip: () => void;
            enableEquip: () => void;
            expandEquip: () => void;
            replaceEquip: () => void;
            equip: () => void;
            changeGroup: () => void;
            chooseToDebate: () => void;
            delay: () => void;
            chooseCooperationFor: () => void;
            chooseToPlayBeatmap: () => void;
            chooseToMove: () => void;
            showCharacter: () => void;
            removeCharacter: () => void;
            chooseUseTarget: () => void;
            chooseToDuiben: () => void;
            chooseToPSS: () => void;
            cardsDiscard: () => void;
            orderingDiscard: () => void;
            cardsGotoOrdering: () => void;
            cardsGotoSpecial: () => void;
            cardsGotoPile: () => void;
            chooseToEnable: (event: any, trigger: any, player: any) => Promise<void>;
            chooseToDisable: (event: any, trigger: any, player: any) => Promise<void>;
            swapEquip: () => void;
            disableJudge: () => void;
            enableJudge: () => void;
            phasing: () => void;
            toggleSubPlayer: () => void;
            exitSubPlayer: () => void;
            callSubPlayer: () => void;
            addExtraTarget: () => void;
            reverseOrder: () => void;
            addJudgeCard: () => void;
            equipCard: () => void;
            gameDraw: () => void;
            phaseLoop: () => void;
            loadPackage: () => void;
            loadMode: () => void;
            forceOver: () => void;
            arrangeTrigger: (event: any, trigger: any, player: any) => Promise<void>;
            createTrigger: () => any;
            playVideoContent: () => void;
            waitForPlayer: () => void;
            replaceHandcards: () => void;
            replaceHandcardsOL: () => void;
            phase: () => void;
            phase_old: () => void;
            phaseZhunbei: () => void;
            phaseJudge: () => void;
            phaseDraw: () => void;
            phaseUse: () => void;
            phaseDiscard: () => void;
            phaseJieshu: () => void;
            chooseToUse: () => void;
            chooseToRespond: () => void;
            chooseToGive: () => void;
            chooseToDiscard: () => void;
            gaincardMultiple: () => void;
            discardMultiple: () => void;
            chooseToCompareLose: () => void;
            chooseToCompareMeanwhile: () => void;
            chooseToCompareMultiple: () => void;
            chooseToCompare: () => void;
            chooseSkill: () => void;
            discoverCard: () => void;
            chooseButton: () => void;
            chooseCardOL: () => void;
            chooseButtonOL: () => void;
            chooseCard: () => void;
            chooseTarget: () => void;
            chooseCardTarget: () => void;
            chooseControl: () => void;
            chooseBool: () => void;
            chooseDrawRecover: () => void;
            choosePlayerCard: () => void;
            discardPlayerCard: () => void;
            gainPlayerCard: () => void;
            showHandcards: () => void;
            showCards: () => void;
            viewCards: () => void;
            moveCard: () => void;
            useCard: () => void;
            useSkill: () => void;
            draw: () => void;
            discard: () => void;
            loseToDiscardpile: () => void;
            respond: () => void;
            swapHandcards: () => void;
            swapHandcardsx: () => void;
            gainMultiple: () => void;
            gain: () => void;
            addToExpansion: () => void;
            lose: () => void;
            damage: () => void;
            recover: () => void;
            loseHp: () => void;
            doubleDraw: () => void;
            loseMaxHp: () => void;
            gainMaxHp: () => void;
            changeHp: () => void;
            changeHujia: () => void;
            dying: () => void;
            die: () => void;
            addJudge: () => void;
            judge: () => void;
            turnOver: () => void;
            link: () => void;
            chooseToGuanxing: () => void;
        };
        contents: SMap<((event: import("noname-typings/nonameModules/noname/library/index.js").GameEventPromise, trigger: import("noname-typings/nonameModules/noname/library/index.js").GameEventPromise, player: import("noname-typings/nonameModules/noname/library/element/player.js").Player) => Promise<any>)[]>;
        Player: typeof Element.Player;
        Card: typeof Element.Card;
        VCard: typeof Element.VCard;
        Button: typeof Element.Button;
        GameEvent: typeof Element.GameEvent;
        GameEventPromise: typeof Element.GameEventPromise;
        Dialog: typeof Element.Dialog;
        Control: typeof Element.Control;
        Client: typeof Element.Client;
        NodeWS: typeof Element.NodeWS;
        Character: typeof Element.Character;
        ws: {
            onopen: () => void;
            onmessage: (messageevent: any) => void;
            onerror: (e: any) => void;
            onclose: () => void;
        };
        /**
         * @legacy Use {@link lib.element.Player.prototype} instead.
         */
        readonly player: Element.Player;
        /**
         * @legacy Use {@link lib.element.Card.prototype} instead.
         */
        readonly card: Element.Card;
        /**
         * @legacy Use {@link lib.element.Button.prototype} instead.
         */
        readonly button: Element.Button;
        /**
         * @legacy Use {@link lib.element.GameEvent.prototype} instead.
         */
        readonly event: Element.GameEvent;
        /**
         * @legacy Use {@link lib.element.Dialog.prototype} instead.
         */
        readonly dialog: Element.Dialog;
        /**
         * @legacy Use {@link lib.element.Control.prototype} instead.
         */
        readonly control: Element.Control;
        /**
         * @legacy Use {@link lib.element.Client.prototype} instead.
         */
        readonly client: Element.Client;
        /**
         * @legacy Use {@link lib.element.NodeWS.prototype} instead.
         */
        readonly nodews: Element.NodeWS;
        /**
         * @legacy Use {@link lib.element.Character.prototype} instead.
         */
        readonly character: Element.Character;
    };
    card: {
        /**
         * @type { [CardBaseUIData['suit'], CardBaseUIData['number'], string][] }
         */
        list: [CardBaseUIData['suit'], CardBaseUIData['number'], string][];
        cooperation_damage: {
            fullskin: boolean;
        };
        cooperation_draw: {
            fullskin: boolean;
            cardimage: string;
        };
        cooperation_discard: {
            fullskin: boolean;
            cardimage: string;
        };
        cooperation_use: {
            fullskin: boolean;
            cardimage: string;
        };
        pss_paper: {
            type: string;
            fullskin: boolean;
        };
        pss_scissor: {
            type: string;
            fullskin: boolean;
        };
        pss_stone: {
            type: string;
            fullskin: boolean;
        };
        feichu_equip1: {
            type: string;
            subtype: string;
        };
        feichu_equip2: {
            type: string;
            subtype: string;
        };
        feichu_equip3: {
            type: string;
            subtype: string;
        };
        feichu_equip4: {
            type: string;
            subtype: string;
        };
        feichu_equip5: {
            type: string;
            subtype: string;
        };
        feichu_equip6: {
            type: string;
            subtype: string;
        };
        empty_equip1: {
            type: string;
            subtype: string;
        };
        empty_equip2: {
            type: string;
            subtype: string;
        };
        empty_equip3: {
            type: string;
            subtype: string;
        };
        empty_equip4: {
            type: string;
            subtype: string;
        };
        empty_equip5: {
            type: string;
            subtype: string;
        };
        empty_equip6: {
            type: string;
            subtype: string;
        };
        zhengsu_leijin: {};
        zhengsu_mingzhi: {};
        zhengsu_bianzhen: {};
        disable_judge: {};
        group_wei: {
            fullskin: boolean;
        };
        group_shu: {
            fullskin: boolean;
        };
        group_wu: {
            fullskin: boolean;
        };
        group_qun: {
            fullskin: boolean;
        };
        group_key: {
            fullskin: boolean;
        };
        group_jin: {
            fullskin: boolean;
        };
        db_atk1: {
            type: string;
            fullimage: boolean;
        };
        db_atk2: {
            type: string;
            fullimage: boolean;
        };
        db_def1: {
            type: string;
            fullimage: boolean;
        };
        db_def2: {
            type: string;
            fullimage: boolean;
        };
    };
    filter: {
        all: () => boolean;
        none: () => boolean;
        /**
         * Check if the card does not count toward the player's hand limit
         *
         * 检测此牌是否不计入此角色的手牌上限
         * @param { Card } card
         * @param { Player } player
         * @returns { boolean }
         */
        ignoredHandcard: (card: Card, player: Player) => boolean;
        /**
         * Check if the card is giftable
         *
         * 检测此牌是否可赠予
         * @param { Card } card
         * @param { Player } player
         * @param { Player } target
         * @param { boolean } [strict]
         */
        cardGiftable: (card: Card, player: Player, target: Player, strict?: boolean) => boolean;
        /**
         * Check if the card is recastable
         *
         * 检查此牌是否可重铸
         * @param { Card } card
         * @param { Player } player
         * @param { Player } [source]
         * @param { boolean } [strict]
         */
        cardRecastable: (card: Card, player?: Player, source?: Player, strict?: boolean) => boolean;
        /**
         * @param { Card } card
         * @param { Player } player
         * @returns { boolean }
         */
        canBeReplaced: (card: Card, player: Player) => boolean;
        buttonIncluded: (button: any) => boolean;
        filterButton: (button: any) => boolean;
        cardSavable: (card: any, player: any, target: any) => any;
        /**
         *
         * @param {GameEvent} event
         * @param {Player} player
         * @param {string} triggername
         * @param {string} skill
         * @returns {boolean}
         */
        filterTrigger: (event: GameEvent, player: Player, triggername: string, skill: string, indexedData: any) => boolean;
        /**
         *
         * @param {GameEvent} event
         * @param {Player} player
         * @param {string} skill
         * @returns {boolean}
         */
        filterEnable: (event: GameEvent, player: Player, skill: string) => boolean;
        characterDisabled: (i: any, libCharacter: any) => boolean;
        characterDisabled2: (i: any) => boolean;
        skillDisabled: (skill: any) => boolean;
        cardEnabled: (card: any, player: any, event: any) => any;
        cardRespondable: (card: any, player: any, event: any) => any;
        cardUsable2: (card: any, player: any, event: any) => boolean;
        cardUsable: (card: any, player: any, event: any) => boolean;
        cardDiscardable: (card: any, player: any, event: any) => any;
        canBeDiscarded: (card: any, player: any, target: any, event: any) => any;
        canBeGained: (card: any, player: any, target: any, event: any) => any;
        cardAiIncluded: (card: any) => boolean;
        filterCard: (card: any, player: any, event: any) => boolean;
        targetEnabledx: (card: any, player: any, target: any, ...args: any[]) => any;
        targetEnabled: (card: any, player: any, target: any) => any;
        targetEnabled2: (card: any, player: any, target: any) => boolean;
        targetEnabled3: (card: any, player: any, target: any) => boolean;
        targetInRange: (card: any, player: any, target: any) => any;
        filterTarget: (card: any, player: any, target: any) => any;
        filterTarget2: (card: any, player: any, target: any) => any;
        notMe: (card: any, player: any, target: any) => boolean;
        isMe: (card: any, player: any, target: any) => boolean;
        attackFrom: (card: any, player: any, target: any) => boolean;
        globalFrom: (card: any, player: any, target: any) => boolean;
        selectCard: () => number[];
        selectTarget: (card: any, player: any) => number | number[] | (() => number | Select);
        judge: (card: any, player: any, target: any) => any;
        autoRespondSha: () => boolean;
        autoRespondShan: () => boolean;
        wuxieSwap: (event: any) => boolean;
    };
    sort: {
        nature: (a: any, b: any) => number;
        group: (a: any, b: any) => number;
        character: (a: any, b: any) => number;
        card: (a: any, b: any) => number;
        random: () => number;
        seat: (a: any, b: any) => number;
        position: (a: any, b: any) => number;
        priority: (a: any, b: any) => number;
        number: (a: any, b: any) => number;
        number2: (a: any, b: any) => number;
        capt: (a: any, b: any) => 1 | -1;
        name: (a: any, b: any) => 0 | 1 | -1;
    };
    /**
     * @type {{
     * 	global: string[];
     * 	globalmap: SMap<Player[]>;
     * 	storage: SMap<any>;
     * 	undist: SMap<any>;
     * 	thers: SMap<any>;
     * 	zhu: SMap<any>;
     * 	zhuSkill: SMap<any>;
     * 	land_used: SMap<any>;
     * 	[key: string]: Skill;
     * }}
     */
    skill: {
        [key: string]: Skill;
        global: string[];
        globalmap: SMap<Player[]>;
        storage: SMap<any>;
        undist: SMap<any>;
        thers: SMap<any>;
        zhu: SMap<any>;
        zhuSkill: SMap<any>;
        land_used: SMap<any>;
    };
    /** @type {Object<string, import("./element/character.js").Character>} */
    character: {
        [x: string]: import("./element/character.js").Character;
    };
    perfectPair: {};
    cardPile: {};
    message: {
        server: {
            /**
             * @this {import("./element/client.js").Client}
             */
            init(this: Element.Client, version: any, config: any, banned_info: any): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            inited(this: Element.Client): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            reinited(this: Element.Client): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            result(this: Element.Client, result: any): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            tempResult(this: Element.Client, result: any): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            startGame(this: Element.Client): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            changeRoomConfig(this: Element.Client, config: any): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            changeNumConfig(this: Element.Client, num: any, index: any, bool: any): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            throwEmotion(this: Element.Client, target: any, emotion: any, rotate: any): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            emotion(this: Element.Client, id: any, pack: any, emotion: any): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            chat(this: Element.Client, id: any, str: any): void;
            /**
             * ```plain
             * 当客机向主机发送投降请求时的回调
             * ```
             *
             * @this {import("./element/client.js").Client}
             * @param {Player} player
             */
            giveup(this: Element.Client, player: Player): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            auto(this: Element.Client): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            unauto(this: Element.Client): void;
            exec(func: any): void;
            /**
             * @this {import("./element/client.js").Client}
             */
            log(this: Element.Client, ...args: any[]): void;
        };
        client: {
            log: (arr: any) => void;
            opened: () => void;
            onconnection: (id: any) => void;
            onmessage: (id: any, message: any) => void;
            onclose: (id: any) => void;
            selfclose: () => void;
            reloadroom: (forced: any) => void;
            createroom: (index: any, config: any, mode: any) => void;
            enterroomfailed: () => void;
            roomlist: (list: any, events: any, clients: any, wsid: any) => void;
            updaterooms: (list: any, clients: any) => void;
            updateclients: (clients: any, bool: any) => void;
            updateevents: (events: any) => void;
            eventsdenied: (reason: any) => void;
            init: (id: any, config: any, ip: any, servermode: any, roomId: any) => void;
            reinit: (config: any, state: any, state2: any, ip: any, observe: any, onreconnect: any, cardtag: any, postReconnect: any) => void;
            exec: (func: any, ...args: any[]) => void;
            denied: (reason: any) => void;
            cancel: (id: any) => void;
            closeDialog: (id: any) => void;
            createDialog: (id: any, ...args: any[]) => void;
            gameStart: () => void;
            updateWaiting: (map: any) => void;
        };
    };
    suit: string[];
    suits: string[];
    color: {
        black: string[];
        red: string[];
        none: string[];
    };
    group: string[];
    nature: Map<string, number>;
    natureAudio: {
        damage: {
            fire: string;
            thunder: string;
            ice: string;
            stab: string;
        };
        hujia_damage: {
            fire: string;
            thunder: string;
            ice: string;
        };
        sha: {
            fire: string;
            thunder: string;
            ice: string;
            stab: string;
            poison: string;
            kami: string;
        };
    };
    linked: string[];
    natureBg: Map<string, string>;
    natureSeparator: string;
    namePrefix: Map<string, {
        color: string;
        nature: string;
        showName?: undefined;
        /**
         * @returns {string}
         */
        getSpan?: undefined;
    } | {
        color: string;
        nature: string;
        showName: string;
        /**
         * @returns {string}
         */
        getSpan?: undefined;
    } | {
        nature: string;
        color?: undefined;
        showName?: undefined;
        /**
         * @returns {string}
         */
        getSpan?: undefined;
    } | {
        showName: string;
        color?: undefined;
        nature?: undefined;
        /**
         * @returns {string}
         */
        getSpan?: undefined;
    } | {
        getSpan: (prefix: any, name: any) => string;
        color?: undefined;
        nature?: undefined;
        showName?: undefined;
    }>;
    groupnature: {
        shen: string;
        wei: string;
        shu: string;
        wu: string;
        qun: string;
        western: string;
        key: string;
        jin: string;
        ye: string;
    };
    lineColor: Map<string, number[]>;
    phaseName: string[];
    quickVoice: string[];
    other: {
        ignore: () => any;
    };
    InitFilter: {
        noZhuHp: string;
        noZhuSkill: string;
    };
    config: any;
    configOL: any;
}
export let lib: Library;
export function setLibrary(instance?: InstanceType<typeof Library>): void;
export type Player = InstanceType<typeof lib.element.Player>;
export type Card = InstanceType<typeof lib.element.Card>;
export type VCard = InstanceType<typeof lib.element.VCard>;
export type Button = InstanceType<typeof lib.element.Button>;
export type Dialog = InstanceType<typeof lib.element.Dialog>;
export type GameEvent = InstanceType<typeof lib.element.GameEvent>;
export type GameEventPromise = GameEvent & InstanceType<typeof lib.element.GameEventPromise>;
export type NodeWS = InstanceType<typeof lib.element.NodeWS>;
export type Control = InstanceType<typeof lib.element.Control>;
export type IOnloadSplash = import("../init/onload/onload-splash.d.ts").OnloadSplash;
import * as Element from "./element/index.js";
import { Channel } from "./channel/index.js";
import { Announce } from "./announce/index.js";
import { LibInit } from "./init/index.js";
import { Experimental } from "./experimental/index.js";
