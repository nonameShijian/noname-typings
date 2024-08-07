export class Game extends GameCompatible {
    online: boolean;
    onlineID: any;
    onlineKey: any;
    /**
     * @type {Player[]}
     */
    players: Player[];
    /**
     * @type {Player[]}
     */
    dead: Player[];
    imported: any[];
    /**
     * @type { { [key: string]: Player } }
     */
    playerMap: {
        [key: string]: import("noname-typings/nonameModules/noname/library/element/player.js").Player;
    };
    phaseNumber: number;
    roundNumber: number;
    shuffleNumber: number;
    promises: GamePromises;
    /**
     * @type { string }
     */
    layout: string;
    /**
     * @type { Player }
     */
    me: Player;
    /**
     * @type { boolean }
     */
    chess: boolean;
    /**
     * @type { Player }
     */
    zhu: Player;
    globalEventHandlers: {
        _handlers: {};
        getHandler(name: any, type: any): any;
        ensureHandlerList(name: any, type: any): any;
        removeHandler(name: any, type: any, func: any): void;
        pushHandler(name: any, type: any, ...args: any[]): void;
        getDefaultHandlerType(name: any): string;
        addHandlerToEvent(event: any): void;
    };
    setStratagemBuffCost(cardName: any, cost: any): void;
    setStratagemBuffEffect(cardName: any, effect: any): void;
    setStratagemBuffPrompt(cardName: any, prompt: any): void;
    /**
     * 添加新的属性杀
     */
    addNature(nature: any, translation: any, config: any): any;
    /**
     * 判断卡牌信息/事件是否有某个属性
     */
    hasNature(item: any, nature: any, player: any): boolean;
    /**
     * 设置卡牌信息/事件的属性
     */
    setNature(item: any, nature: any, addNature: any): any;
    /**
     * 洗牌
     */
    washCard(): false | any[] | (import("../library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise);
    /**
     * 基于钩子的添加势力方法
     */
    addGroup(id: any, short: any, name: any, config: any): any;
    /**
     * @typedef {import("../library/hooks/interface.js").NonameHookType} NonameHookType
     */
    /**
     * 通用的调用钩子函数
     *
     * @template {NonameHookType} HookType
     * @template {keyof HookType} Name
     * @param {Name} name
     * @param {Parameters<HookType[Name]>} args
     */
    callHook<HookType extends import("../library/hooks/interface.js").NonameHookType, Name extends keyof HookType>(name: Name, args: Parameters<HookType[Name]>): void;
    yingbianEffect(event: any, content: any, ...args: any[]): import("../library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    setYingbianConditionColor(yingbianCondition: any, color: any): void;
    setComplexYingbianCondition(yingbianCondition: any, condition: any): void;
    setSimpleYingbianCondition(yingbianCondition: any, condition: any): void;
    setYingbianEffect(yingbianEffect: any, effect: any): void;
    setYingbianPrompt(yingbian: any, prompt: any): void;
    /**
     * Dynamic Style Manager
     * 动态CSS管理对象
     *
     * > No idea to write, it's just a tool to handle css.
     * > 暂时不知道写啥，反正就是个管CSS的工具
     *
     * @example
     * // 为符合".content"的元素增加"text-align: center"的样式
     * game.dynamicStyle.add(".content", {
     * 	textAlign: "center"
     * });
     *
     * // 在上一条的基础上，再为".content"增加"color: #FFFFFF"的样式
     * game.dynamicStyle.add(".content", {
     * 	color: "#FFFFFF"
     * });
     *
     * @example
     * // 批量添加符合对应选择器元素的样式
     * game.dynamicStyle.addObject({
     * 	".content": {
     * 		textAlign: "center"
     * 	},
     * 	".ansory": {
     * 		fontSize: "16px"
     * 	}
     * });
     *
     * @example
     * // 移除".content"元素的样式
     * game.dynamicStyle.remove(".content");
     *
     * @example
     * // 移除".content"元素的"textAlign"样式
     * game.dynamicStyle.removeStyles(".content", ["textAligh"]);
     *
     * @example
     * // 如果".content"元素的样式存在，则将".content"的样式修改为给定的样式
     * // 反之效果同`game.dynamicStyle.add`
     * game.dynamicStyle.update(".content", {
     * 	textAlign: "center"
     * });
     */
    dynamicStyle: DynamicStyle;
    /**
     * Add a background music to the config option
     *
     * 在设置选项中添加一首背景音乐
     */
    addBackgroundMusic(link: any, musicName: any, aozhan: any): void;
    /**
     * Remove a background music from the config option
     *
     * 从设置选项中移除一首背景音乐
     */
    removeBackgroundMusic(link: any, aozhan: any): void;
    updateBackground(): void;
    /**
     * Generate a beatmap using the given BPM, beats, and offset
     *
     * 用给定的BPM、节拍和偏移生成谱面
     */
    generateBeatmapTimeleap(bpm: any, beats: any, offset: any): any;
    updateRenku(): void;
    /**
     * 为牌添加知情者
     * @param { Card[] | Card } cards
     * @param { Player[] } players
     */
    addCardKnower(cards: Card[] | Card, players: Player[]): void;
    /**
     * 移除牌的所有知情者。
     * @param { Card[] | Card } cards
     */
    clearCardKnowers(cards: Card[] | Card): void;
    /**
     * @param { { [key: string]: any } } [arg]
     */
    loseAsync(arg?: {
        [key: string]: any;
    }): import("../library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    callFuncUseStepCache(prefix: any, func: any, params: any): any;
    /**
     * @param {string} name
     */
    getRarity(name: string): "legend" | "epic" | "rare" | "junk" | "common";
    /**
     * @template { keyof GameHistory } T
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } filter
     * @param { GameEventPromise } [last]
     * @returns { boolean }
     */
    hasGlobalHistory<T extends keyof GameHistory>(key: T, filter: (event: GameEventPromise) => boolean, last?: GameEventPromise): boolean;
    /**
     * @template { keyof GameHistory } T
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } filter
     * @param { GameEventPromise } [last]
     * @returns { void }
     */
    checkGlobalHistory<T_1 extends keyof GameHistory>(key: T_1, filter: (event: GameEventPromise) => boolean, last?: GameEventPromise): void;
    /**
     * @overload
     * @returns { GameHistory }
     */
    getGlobalHistory(): GameHistory;
    /**
     * @template { keyof GameHistory } T
     * @overload
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } [filter]
     * @param { GameEventPromise } [last]
     * @returns { GameHistory[T] }
     */
    getGlobalHistory<T_2 extends keyof GameHistory>(key: T_2, filter?: (event: GameEventPromise) => boolean, last?: GameEventPromise): GameHistory[T_2];
    /**
     * @template { keyof GameHistory } T
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } filter
     * @param { GameEventPromise } [last]
     * @returns { boolean }
     */
    hasAllGlobalHistory<T_3 extends keyof GameHistory>(key: T_3, filter: (event: GameEventPromise) => boolean, last?: GameEventPromise): boolean;
    /**
     * @template { keyof GameHistory } T
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } filter
     * @param { GameEventPromise } [last]
     * @returns { void }
     */
    checkAllGlobalHistory<T_4 extends keyof GameHistory>(key: T_4, filter: (event: GameEventPromise) => boolean, last?: GameEventPromise): void;
    /**
     * @overload
     * @returns { GameHistory[] }
     */
    getAllGlobalHistory(): GameHistory[];
    /**
     * @template { keyof GameHistory } T
     * @overload
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } [filter]
     * @param { GameEventPromise } [last]
     * @returns { GameHistory[T] }
     */
    getAllGlobalHistory<T_5 extends keyof GameHistory>(key: T_5, filter?: (event: GameEventPromise) => boolean, last?: GameEventPromise): GameHistory[T_5];
    /**
     * @overload
     * @returns { void }
     */
    cardsDiscard(): void;
    /**
     * @overload
     * @param { Card } cards
     * @returns { GameEventPromise }
     */
    cardsDiscard(cards: Card): GameEventPromise;
    /**
     * @overload
     * @param {Card[]} cards
     * @returns { GameEventPromise }
     */
    cardsDiscard(cards: Card[]): GameEventPromise;
    /**
     * @overload
     * @returns { void }
     */
    cardsGotoOrdering(): void;
    /**
     * @overload
     * @param { Card } cards
     * @returns { GameEventPromise }
     */
    cardsGotoOrdering(cards: Card): GameEventPromise;
    /**
     * @overload
     * @param {Card[]} cards
     * @returns { GameEventPromise }
     */
    cardsGotoOrdering(cards: Card[]): GameEventPromise;
    /**
     * @overload
     * @returns { void }
     */
    cardsGotoSpecial(): void;
    /**
     * @overload
     * @param { Card } cards
     * @param { 'toRenku' | false } [bool] 为false时不触发trigger，为'toRenku'时牌放到仁库
     * @returns { GameEventPromise }
     */
    cardsGotoSpecial(cards: Card, bool?: 'toRenku' | false): GameEventPromise;
    /**
     * @overload
     * @param {Card[]} cards
     * @param { 'toRenku' | false } [bool] 为false时不触发trigger，为'toRenku'时牌放到仁库
     * @returns { GameEventPromise }
     */
    cardsGotoSpecial(cards: Card[], bool?: 'toRenku' | false): GameEventPromise;
    /**
     *
     * @param {...(
     * 	Card[] |
     * 	Card |
     * 	Function |
     * 	'insert' | 'washCard' | 'triggeronly' |
     * 	[string, any]
     * )} args
     * @returns
     */
    cardsGotoPile(...args: (Card[] | Card | Function | 'insert' | 'washCard' | 'triggeronly' | [
        string,
        any
    ])[]): import("../library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * @param { GameEventPromise } event
     */
    $cardsGotoPile(event: GameEventPromise): void;
    /**
     * @param { false } [pause]
     */
    showHistory(pause?: false): void;
    /**
     * @param { string } src
     * @param { true } [blur]
     */
    createBackground(src: string, blur?: true): HTMLDivElement;
    /**
     *
     * @param { string } url
     * @param { Player } [player]
     */
    changeLand(url: string, player?: Player): void;
    /**
     * @param { string[] } updates
     * @param { Function } proceed
     */
    checkFileList(updates: string[], proceed: Function): void;
    /**
     * @overload
     * @param  {[Player[]]} args
     */
    replaceHandcards(args: [Player[]]): any;
    /**
     * @overload
     * @param {Player[]} args
     */
    replaceHandcards(args: Player[]): any;
    /**
     * @param { string } name
     */
    removeCard(name: string): void;
    /**
     * @param { 'hidden' } [type]
     */
    randomMapOL(type?: 'hidden'): void;
    closeMenu(): void;
    closeConnectMenu(): void;
    closePopped(): void;
    /**
     * @template { keyof typeof lib.message.client } T
     * @overload
     * @param { T } func
     * @param { ...Parameters<typeof lib.message.client[T]> } args
     * @returns { void }
     */
    broadcast<T_6 extends "cancel" | "onclose" | "init" | "reinit" | "log" | "opened" | "onconnection" | "onmessage" | "selfclose" | "reloadroom" | "createroom" | "enterroomfailed" | "roomlist" | "updaterooms" | "updateclients" | "updateevents" | "eventsdenied" | "exec" | "denied" | "closeDialog" | "createDialog" | "gameStart" | "updateWaiting">(func: T_6, ...args: Parameters<{
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
    }[T_6]>): void;
    /**
     * @template { any[] } T
     * @overload
     * @param { (...args: T) => void } func
     * @param { ...T } args
     * @returns { void }
     */
    broadcast<T_6 extends "cancel" | "onclose" | "init" | "reinit" | "log" | "opened" | "onconnection" | "onmessage" | "selfclose" | "reloadroom" | "createroom" | "enterroomfailed" | "roomlist" | "updaterooms" | "updateclients" | "updateevents" | "eventsdenied" | "exec" | "denied" | "closeDialog" | "createDialog" | "gameStart" | "updateWaiting">(func: (...args: T_6) => void, ...args: T_6): void;
    /**
     * @template { keyof typeof lib.message.client } T
     * @overload
     * @param { T } func
     * @param { ...Parameters<typeof lib.message.client[T]> } args
     * @returns { void }
     */
    broadcastAll<T_7 extends "cancel" | "onclose" | "init" | "reinit" | "log" | "opened" | "onconnection" | "onmessage" | "selfclose" | "reloadroom" | "createroom" | "enterroomfailed" | "roomlist" | "updaterooms" | "updateclients" | "updateevents" | "eventsdenied" | "exec" | "denied" | "closeDialog" | "createDialog" | "gameStart" | "updateWaiting">(func: T_7, ...args: Parameters<{
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
    }[T_7]>): void;
    /**
     * @template { any[] } T
     * @overload
     * @param { (...args: T) => void } func
     * @param { ...T } args
     * @returns { void }
     */
    broadcastAll<T_7 extends "cancel" | "onclose" | "init" | "reinit" | "log" | "opened" | "onconnection" | "onmessage" | "selfclose" | "reloadroom" | "createroom" | "enterroomfailed" | "roomlist" | "updaterooms" | "updateclients" | "updateevents" | "eventsdenied" | "exec" | "denied" | "closeDialog" | "createDialog" | "gameStart" | "updateWaiting">(func: (...args: T_7) => void, ...args: T_7): void;
    syncState(): void;
    updateWaiting(): void;
    /**
     * @param { Function } func
     */
    waitForPlayer(func: Function): void;
    /**
     * @param { number } time
     * @param { Function } [onEnd]
     */
    countDown(time: number, onEnd?: Function): void;
    countChoose(clear: any): void;
    stopCountChoose(): void;
    /**
     * ```plain
     * 进入沙盒运行模式
     * ```
     *
     * @param { string } ip
     */
    requireSandboxOn(ip?: string): void;
    /**
     * @param { string } ip
     * @param { (result: boolean) => any } callback
     */
    connect(ip: string, callback: (result: boolean) => any): void;
    send(...args: any[]): void;
    /**
     * @param { string } id
     * @param {*} message
     */
    sendTo(id: string, message: any): import("../library/element/client.js").Client;
    createServer(): void;
    /**
     * @overload
     * @param { object } options
     * @param { string } options.path
     * //param { boolean } [options.broadcast = false]
     * @param { boolean } [options.addVideo = true]
     * @param { boolean } [options.video = false]
     * @param { (evt: Event) => void } [options.onCanPlay = (evt => void 0)]
     * @param { (evt: Event) => void } [options.onPlay = (evt => void 0)]
     * @param { (evt: Event) => void } [options.onEnded = (evt => void 0)]
     * @param { (evt: Event) => void } [options.onError = (evt => void 0)]
     * @returns { HTMLAudioElement }
     */
    playAudio(options: {
        path: string;
        addVideo?: boolean;
        video?: boolean;
        onCanPlay?: (evt: Event) => void;
        onPlay?: (evt: Event) => void;
        onEnded?: (evt: Event) => void;
        onError?: (evt: Event) => void;
    }): HTMLAudioElement;
    /**
     * @overload
     * @param { ...string | number | ((evt: Event) => void) } args
     * @returns { HTMLAudioElement }
     */
    playAudio(...args: string | number | ((evt: Event) => void)): HTMLAudioElement;
    /**
     * @param { object } options
     * @param { string[] } options.audioList
     * @param { boolean } [options.autoplay = true]
     * @param { boolean } [options.random = true]
     * @param { boolean } [options.addVideo = true]
     * @returns
     */
    tryAudio({ audioList, autoplay, random, addVideo }: {
        audioList: string[];
        autoplay?: boolean;
        random?: boolean;
        addVideo?: boolean;
    }): HTMLAudioElement | (() => HTMLAudioElement);
    /**
     * @deprecated 请使用get.Audio.skill().fileList
     *
     * 根据skill中的audio,audioname,audioname2和player来获取音频地址列表
     * @typedef {[string,number]|string|number|boolean} audioInfo
     * @typedef {{audio: audioInfo, audioname?:string[], audioname2?:{[playerName: string]: audioInfo}}} skillInfo
     * @param { string } skill  技能名
     * @param { Player | Object | string } [player]  角色/角色名
     * @param { skillInfo | audioInfo } [skillInfo]  使用指定的skillInfo/audioInfo
     * @returns { string[] }  语音地址列表
     */
    parseSkillAudio(skill: string, player?: Player | any | string, skillInfo?: {
        audio: string | number | boolean | [string, number];
        audioname?: string[];
        audioname2?: {
            [playerName: string]: string | number | boolean | [string, number];
        };
    } | (string | number | boolean | [string, number])): string[];
    /**
     * @deprecated 请使用get.Audio.skill().textList
     *
     * 根据skill中的audio,audioname,audioname2和player来获取技能台词列表
     * @param { string } skill  技能名
     * @param { Player | Object | string } [player]  角色/角色名
     * @param { skillInfo | audioInfo } [skillInfo]  使用指定的skillInfo/audioInfo
     * @returns { string[] }  语音地址列表
     */
    parseSkillText(skill: string, player?: Player | any | string, skillInfo?: {
        audio: string | number | boolean | [string, number];
        audioname?: string[];
        audioname2?: {
            [playerName: string]: string | number | boolean | [string, number];
        };
    } | (string | number | boolean | [string, number])): string[];
    /**
     * @deprecated 请使用get.Audio.skill().audioList
     *
     * 根据skill中的audio,audioname,audioname2和player来获取技能台词列表及其对应的源文件名
     * @param { string } skill  技能名
     * @param { Player | Object | string } [player]  角色/角色名
     * @param { skillInfo | audioInfo } [skillInfo]  使用指定的skillInfo/audioInfo
     * @returns 语音地址列表
     */
    parseSkillTextMap(skill: string, player?: Player | any | string, skillInfo?: {
        audio: string | number | boolean | [string, number];
        audioname?: string[];
        audioname2?: {
            [playerName: string]: string | number | boolean | [string, number];
        };
    } | (string | number | boolean | [string, number])): import("../get/audio.js").TextMap[];
    /**
     * @deprecated 请使用get.Audio.die().audioList
     *
     * 获取角色死亡时能播放的所有阵亡语音
     * @param { string | Player } player  角色名
     * @returns 语音地址列表
     */
    parseDieTextMap(player: string | Player): import("../get/audio.js").TextMap[];
    /**
     *
     * @param { string } skill
     * @param { Player | string } player
     * @param { boolean } [directaudio]
     * @param { boolean } [nobroadcast]
     * @param { any } [skillInfo]
     * @returns
     */
    trySkillAudio(skill: string, player: Player | string, directaudio?: boolean, nobroadcast?: boolean, skillInfo?: any): HTMLAudioElement | (() => HTMLAudioElement);
    /**
     * @param { Player | string } player
     * @returns
     */
    tryDieAudio(player: Player | string): HTMLAudioElement | (() => HTMLAudioElement);
    /**
     * @deprecated
     * @param { string } name
     * @param { number } [index]
     * @returns
     */
    playSkillAudio(name: string, index?: number, ...args: any[]): void;
    /**
     * @param { string | Card } card
     * @param { Player | Sex } sex
     */
    playCardAudio(card: string | Card, sex: Player | Sex): void;
    playBackgroundMusic(): void;
    /**
     * @overload
     * @param { 'character' } type
     * @param {(
     * 	lib: InstanceType<typeof import('../library/index.js').Library>,
     * 	game: InstanceType<typeof Game>,
     * 	ui: InstanceType<typeof import('../ui/index.js').UI>,
     * 	get: InstanceType<typeof import('../get/index.js').Get>,
     * 	ai: InstanceType<typeof import('../ai/index.js').AI>,
     * _status: InstanceType<typeof import('../status/index.js').status>
     * ) => importCharacterConfig } content
     * @param {*} [url]
     */
    import(type: 'character', content: (lib: InstanceType<typeof import('../library/index.js').Library>, game: InstanceType<typeof Game>, ui: InstanceType<typeof import('../ui/index.js').UI>, get: InstanceType<typeof import('../get/index.js').Get>, ai: InstanceType<typeof import('../ai/index.js').AI>, _status: InstanceType<typeof import('../status/index.js').status>) => importCharacterConfig, url?: any): any;
    /**
     * @overload
     * @param { 'card' } type
     * @param {(
     * 	lib: InstanceType<typeof import('../library/index.js').Library>,
     * 	game: InstanceType<typeof Game>,
     * 	ui: InstanceType<typeof import('../ui/index.js').UI>,
     * 	get: InstanceType<typeof import('../get/index.js').Get>,
     * 	ai: InstanceType<typeof import('../ai/index.js').AI>,
     * _status: InstanceType<typeof import('../status/index.js').status>
     * ) => importCardConfig } content
     * @param {*} [url]
     */
    import(type: 'card', content: (lib: InstanceType<typeof import('../library/index.js').Library>, game: InstanceType<typeof Game>, ui: InstanceType<typeof import('../ui/index.js').UI>, get: InstanceType<typeof import('../get/index.js').Get>, ai: InstanceType<typeof import('../ai/index.js').AI>, _status: InstanceType<typeof import('../status/index.js').status>) => importCardConfig, url?: any): any;
    /**
     * @overload
     * @param { 'mode' } type
     * @param {(
     * 	lib: InstanceType<typeof import('../library/index.js').Library>,
     * 	game: InstanceType<typeof Game>,
     * 	ui: InstanceType<typeof import('../ui/index.js').UI>,
     * 	get: InstanceType<typeof import('../get/index.js').Get>,
     * 	ai: InstanceType<typeof import('../ai/index.js').AI>,
     * _status: InstanceType<typeof import('../status/index.js').status>
     * ) => importModeConfig } content
     * @param {*} [url]
     */
    import(type: 'mode', content: (lib: InstanceType<typeof import('../library/index.js').Library>, game: InstanceType<typeof Game>, ui: InstanceType<typeof import('../ui/index.js').UI>, get: InstanceType<typeof import('../get/index.js').Get>, ai: InstanceType<typeof import('../ai/index.js').AI>, _status: InstanceType<typeof import('../status/index.js').status>) => importModeConfig, url?: any): any;
    /**
     * @overload
     * @param { 'player' } type
     * @param {(
     * 	lib: InstanceType<typeof import('../library/index.js').Library>,
     * 	game: InstanceType<typeof Game>,
     * 	ui: InstanceType<typeof import('../ui/index.js').UI>,
     * 	get: InstanceType<typeof import('../get/index.js').Get>,
     * 	ai: InstanceType<typeof import('../ai/index.js').AI>,
     * _status: InstanceType<typeof import('../status/index.js').status>
     * ) => importPlayerConfig } content
     * @param {*} [url]
     */
    import(type: 'player', content: (lib: InstanceType<typeof import('../library/index.js').Library>, game: InstanceType<typeof Game>, ui: InstanceType<typeof import('../ui/index.js').UI>, get: InstanceType<typeof import('../get/index.js').Get>, ai: InstanceType<typeof import('../ai/index.js').AI>, _status: InstanceType<typeof import('../status/index.js').status>) => importPlayerConfig, url?: any): any;
    /**
     * @overload
     * @param { 'extension' } type
     * @param {(
     * 	lib: InstanceType<typeof import('../library/index.js').Library>,
     * 	game: InstanceType<typeof Game>,
     * 	ui: InstanceType<typeof import('../ui/index.js').UI>,
     * 	get: InstanceType<typeof import('../get/index.js').Get>,
     * 	ai: InstanceType<typeof import('../ai/index.js').AI>,
     * _status: InstanceType<typeof import('../status/index.js').status>
     * ) => importExtensionConfig } content
     * @param {*} [url]
     */
    import(type: 'extension', content: (lib: InstanceType<typeof import('../library/index.js').Library>, game: InstanceType<typeof Game>, ui: InstanceType<typeof import('../ui/index.js').UI>, get: InstanceType<typeof import('../get/index.js').Get>, ai: InstanceType<typeof import('../ai/index.js').AI>, _status: InstanceType<typeof import('../status/index.js').status>) => importExtensionConfig, url?: any): any;
    /**
     * @overload
     * @param { 'play' } type
     * @param {(
     * 	lib: InstanceType<typeof import('../library/index.js').Library>,
     * 	game: InstanceType<typeof Game>,
     * 	ui: InstanceType<typeof import('../ui/index.js').UI>,
     * 	get: InstanceType<typeof import('../get/index.js').Get>,
     * 	ai: InstanceType<typeof import('../ai/index.js').AI>,
     * _status: InstanceType<typeof import('../status/index.js').status>
     * ) => importPlayConfig } content
     * @param {*} [url]
     */
    import(type: 'play', content: (lib: InstanceType<typeof import('../library/index.js').Library>, game: InstanceType<typeof Game>, ui: InstanceType<typeof import('../ui/index.js').UI>, get: InstanceType<typeof import('../get/index.js').Get>, ai: InstanceType<typeof import('../ai/index.js').AI>, _status: InstanceType<typeof import('../status/index.js').status>) => importPlayConfig, url?: any): any;
    loadExtension(object: any): Promise<any>;
    /**
     * 下载文件
     * @type { undefined | ((url: string, folder: string, onsuccess?: Function, onerror?: (e: Error) => void, dev?: 'nodev', onprogress?: Function) => void) }
     */
    download: (url: string, folder: string, onsuccess?: Function, onerror?: (e: Error) => void, dev?: 'nodev', onprogress?: Function) => void;
    /**
     * 读取文件为arraybuffer
     * @type { undefined | ((filename: string, callback?: (data: Buffer | ArrayBuffer) => any, onerror?: (e: Error) => void) => void) }
     */
    readFile: (filename: string, callback?: (data: Buffer | ArrayBuffer) => any, onerror?: (e: Error) => void) => void;
    /**
     * 读取文件为文本
     * @type { undefined | ((filename: string, callback?: (data: string) => any, onerror?: (e: Error) => void) => void) }
     */
    readFileAsText: (filename: string, callback?: (data: string) => any, onerror?: (e: Error) => void) => void;
    /**
     * 将数据写入文件
     * @type { undefined | ((data: File | ArrayBuffer, path: string, name: string, callback?: (e: Error) => void) => void) }
     */
    writeFile: (data: File | ArrayBuffer, path: string, name: string, callback?: (e: Error) => void) => void;
    /**
     * 移除文件
     * @type { undefined | ((filename: string, callback?: (e: Error) => void) => void) }
     */
    removeFile: (filename: string, callback?: (e: Error) => void) => void;
    /**
     * 获取文件列表
     * @type { undefined | ((dir: string, success: (folders: string[], files: string[]) => any, failure?: (e: Error) => void) => void) }
     */
    getFileList: (dir: string, success: (folders: string[], files: string[]) => any, failure?: (e: Error) => void) => void;
    /**
     * 按路径依次创建文件夹
     * @type { undefined | ((list: string | string[], callback: Function, file?: boolean) => void) }
     */
    ensureDirectory: (list: string | string[], callback: Function, file?: boolean) => void;
    /**
     * 创建文件夹
     * @type { undefined | ((directory: string, successCallback?: Function, errorCallback?: Function) => void) }
     */
    createDir: (directory: string, successCallback?: Function, errorCallback?: Function) => void;
    /**
     * 删除文件夹
     * @type { undefined | ((directory: string, successCallback?: Function, errorCallback?: Function) => void) }
     */
    removeDir: (directory: string, successCallback?: Function, errorCallback?: Function) => void;
    /**
     * @type { (forcecheck?: boolean | null, dev?: boolean) => Promise<any> }
     */
    checkForUpdate: (forcecheck?: boolean | null, dev?: boolean) => Promise<any>;
    /**
     * @type { () => Promise<any> }
     */
    checkForAssetUpdate: () => Promise<any>;
    importExtension(data: any, finishLoad: any, exportExtension: any, extensionPackage: any): Promise<boolean>;
    /**
     * @param { string } textToWrite
     * @param { string } [name]
     */
    export(textToWrite: string, name?: string): void;
    /**
     * @param { string[] } list
     * @param { Function } [onsuccess]
     * @param { Function } [onerror]
     * @param { Function } [onfinish]
     * @param { Function } [process]
     * @param {*} [dev]
     */
    multiDownload2(list: string[], onsuccess?: Function, onerror?: Function, onfinish?: Function, process?: Function, dev?: any): void;
    /**
     * @param { string[] } list
     * @param { Function } onsuccess
     * @param { Function } onerror
     * @param { Function } onfinish
     * @param { Function } [process]
     * @param {*} [dev]
     */
    multiDownload(list: string[], onsuccess: Function, onerror: Function, onfinish: Function, process?: Function, dev?: any, ...args: any[]): void;
    /**
     * @param { string } url
     * @param { Function } onload
     * @param { Function } [onerror]
     * @param { Function } [onprogress]
     */
    fetch(url: string, onload: Function, onerror?: Function, onprogress?: Function): void;
    /**
     * @param { string } time
     * @param { string } mode
     */
    playVideo(time: string, mode: string): void;
    /**
     * @param { Videos } video
     */
    playVideoContent(video: Videos): void;
    videoContent: {
        arrangeLib: (content: any) => void;
        $syncDisable: (player: any, map: any) => void;
        $syncExpand: (player: any, map: any) => void;
        $disableJudge: (player: any, map: any) => void;
        $enableJudge: (player: any, map: any) => void;
        jiuNode: (player: any, bool: any) => void;
        init: (players: any) => void;
        newcard: (content: any) => void;
        changeLand: (player: any, url: any) => void;
        destroyLand: () => void;
        playAudio: (str: any) => void;
        playSkillAudio: (name: any) => void;
        phaseChange: (player: any) => void;
        playerfocus: (player: any, time: any) => void;
        playerfocus2: () => void;
        identityText: (player: any, str: any) => void;
        identityColor: (player: any, str: any) => void;
        chessSwap: (content: any) => void;
        chessgainmod: (player: any, num: any) => void;
        moveTo: (player: any, pos: any) => void;
        addObstacle: (pos: any) => void;
        removeObstacle: (pos: any) => void;
        moveObstacle: (pos: any) => void;
        colorObstacle: (pos: any) => void;
        thrownhighlight1: () => void;
        thrownhighlight2: () => void;
        chessFocus: (player: any) => void;
        removeTreasure: (pos: any) => void;
        initobs: (obs: any) => void;
        stonePosition: (content: any) => void;
        bossSwap: (player: any, name: any) => void;
        stoneSwap: (info: any) => void;
        chess_tongshuai: (player: any, content: any) => void;
        chess_tongshuai_skill: (player: any, content: any) => void;
        smoothAvatar: (player: any, vice: any) => void;
        setAvatar: (player: any, content: any) => void;
        setAvatarQueue: (player: any, content: any) => void;
        addSubPlayer: (player: any, content: any) => void;
        arenaNumber: (content: any) => void;
        reinit: (source: any, content: any) => void;
        reinit2: (source: any, name: any) => void;
        reinit3: (source: any, content: any) => void;
        changeSkin: (player: any, map: any) => void;
        changeGroup: (player: any, targetGroup: any) => void;
        skill: (player: any, content: any) => void;
        addFellow: (content: any) => void;
        windowzoom1: () => void;
        windowzoom2: () => void;
        windowzoom3: () => void;
        windowzoom4: () => void;
        windowzoom5: () => void;
        updateActCount: (player: any, content: any) => void;
        showIdentity: (player: any, identity: any) => void;
        setIdentity: (player: any, identity: any) => void;
        showCharacter: (player: any, num: any) => void;
        hidePlayer: (player: any) => void;
        deleteHandcards: (player: any) => void;
        hideCharacter: (player: any, num: any) => void;
        popup: (player: any, info: any) => void;
        log: (str: any) => void;
        draw: (player: any, info: any) => void;
        drawCard: (player: any, info: any) => void;
        throw: (player: any, info: any) => void;
        compare: (player: any, info: any) => void;
        compareMultiple: (player: any, info: any) => void;
        give: (player: any, info: any) => void;
        giveCard: (player: any, info: any) => void;
        gain: (player: any, info: any) => void;
        gainCard: (player: any, info: any) => void;
        gain2: (player: any, cards: any) => void;
        deletenode: (player: any, cards: any, method: any) => void;
        highlightnode: (player: any, card: any) => void;
        uiClear: () => void;
        judge1: (player: any, content: any) => void;
        centernode: (content: any) => void;
        judge2: (videoId: any) => void;
        unmarkname: (player: any, name: any) => void;
        unmark: (player: any, name: any) => void;
        flame: (player: any, type: any) => void;
        throwEmotion: (player: any, content: any) => void;
        addGaintag: (player: any, content: any) => void;
        removeGaintag: (player: any, content: any) => void;
        line: (player: any, content: any) => void;
        fullscreenpop: (player: any, content: any) => void;
        damagepop: (player: any, content: any) => void;
        damage: (player: any, source: any) => void;
        diex: (player: any) => void;
        tafangMe: (player: any) => void;
        deleteChessPlayer: (player: any) => void;
        addChessPlayer: (content: any) => void;
        die: (player: any) => void;
        revive: (player: any) => void;
        update: (player: any, info: any) => void;
        phaseJudge: (player: any, card: any) => void;
        directgain: (player: any, cards: any) => void;
        directgains: (player: any, cards: any) => void;
        directequip: (player: any, cards: any) => void;
        gain12: (player: any, cards12: any) => void;
        equip: (player: any, card: any) => void;
        addJudge: (player: any, content: any) => void;
        markCharacter: (player: any, content: any) => void;
        changeMarkCharacter: (player: any, content: any) => void;
        mark: (player: any, content: any) => void;
        markSkill: (player: any, content: any) => void;
        unmarkSkill: (player: any, name: any) => void;
        storage: (player: any, content: any) => void;
        markId: (player: any, content: any) => void;
        unmarkId: (player: any, content: any) => void;
        lose: (player: any, info: any) => void;
        loseAfter: (player: any) => void;
        link: (player: any, bool: any) => void;
        turnOver: (player: any, bool: any) => void;
        showCards: (player: any, info: any) => void;
        cardDialog: (content: any) => void;
        changeSeat: (player: any, info: any) => void;
        dialogCapt: (content: any) => void;
        swapSeat: (content: any) => void;
        removeTafangPlayer: () => void;
        swapControl: (player: any, hs: any) => void;
        onSwapControl: () => void;
        swapPlayer: (player: any, hs: any) => void;
        over: (str: any) => void;
    };
    reload(): void;
    reload2(): void;
    /**
     * @param { string } url
     */
    open(url: string): void;
    reloadCurrent(): void;
    /**
     * @param { Function } func
     */
    update(func: Function): Function;
    /**
     * @param { Function } func
     */
    unupdate(func: Function): void;
    stop(): void;
    run(): void;
    /**
     * @param { string } type
     * @param { Player } player
     * @param { any } [content]
     * @returns
     */
    addVideo(type: string, player: Player, content?: any): void;
    /**
     * @param { Function } func
     */
    draw(func: Function): void;
    /**
     * @param { number } [time]
     */
    vibrate(time?: number): void;
    prompt(...args: any[]): void;
    alert(str: any): void;
    print(...args: any[]): void;
    animate: {
        window: (num: any) => void;
        flame: (x: any, y: any, duration: any, type: any) => void;
    };
    /**
     * @param { [number, number | {opacity:any, color:any, dashed:any, duration:any} | string, number, number] } path
     */
    linexy(path: [number, string | number | {
        opacity: any;
        color: any;
        dashed: any;
        duration: any;
    }, number, number], ...args: any[]): any;
    /**
     * @param { [number, number | {opacity:any, color:any, dashed:any, duration:any} | string, number, number] } path
     */
    _linexy(path: [number, string | number | {
        opacity: any;
        color: any;
        dashed: any;
        duration: any;
    }, number, number], ...args: any[]): void;
    /**
     * @param { string } name
     * @param { string } skill
     * @param { Player } player
     * @param { GameEventPromise } event
     * @returns { GameEventPromise }
     */
    createTrigger(name: string, skill: string, player: Player, event: GameEventPromise, indexedData: any): GameEventPromise;
    /**
     * @legacy Use {@link lib.element.GameEvent.constructor} instead.
     *
     * @param { string } name
     * @param { false } [trigger]
     * @param { GameEventPromise } [triggerEvent]
     */
    createEvent(name: string, trigger?: false, triggerEvent?: GameEventPromise): import("../library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * @param { string } name
     * @param { { extension: string, sex: Sex, group: string, hp: string | number, skills?: string[], tags?: any[], translate: string } } information
     */
    addCharacter(name: string, information: {
        extension: string;
        sex: Sex;
        group: string;
        hp: string | number;
        skills?: string[];
        tags?: any[];
        translate: string;
    }): void;
    /**
     * @param { { mode?: string, forbid?: any, character: { [key: string]: Character }, skill: { [key: string]: object }, [key: string]: any } } pack
     * @param { string } [packagename]
     */
    addCharacterPack(pack: {
        [key: string]: any;
        mode?: string;
        forbid?: any;
        character: {
            [key: string]: Character;
        };
        skill: {
            [key: string]: any;
        };
    }, packagename?: string): void;
    /**
     * @param { string } name
     * @param { Card } info
     * @param { { extension: string, translate: string, description: string, number?: number, color?: string } } info2
     */
    addCard(name: string, info: Card, info2: {
        extension: string;
        translate: string;
        description: string;
        number?: number;
        color?: string;
    }): void;
    /**
     * @param { { extension: string, mode?: string[], forbid?: string[], list: any[], card: {[key: string]: Card}, skill: { [key: string]: object }  } } pack
     * @param { string } [packagename]
     */
    addCardPack(pack: {
        extension: string;
        mode?: string[];
        forbid?: string[];
        list: any[];
        card: {
            [key: string]: import("noname-typings/nonameModules/noname/library/element/card.js").Card;
        };
        skill: {
            [key: string]: any;
        };
    }, packagename?: string): void;
    /**
     * @param { string } name
     * @param { { [key: string]: object } } info
     * @param { string } [translate]
     * @param { string } [description]
     * @param { string } [appendInfo]
     * @param { string } [abInfo]
     */
    addSkill(name: string, info: {
        [key: string]: any;
    }, translate?: string, description?: string, appendInfo?: string, abInfo?: string): boolean;
    /**
     * @param { string } name
     * @param {*} info
     * @param { { translate: string, config: { [key: string]: object } } } info2
     */
    addMode(name: string, info: any, info2: {
        translate: string;
        config: {
            [key: string]: any;
        };
    }): void;
    /**
     * @param { string } skill
     * @param { Player } [player]
     */
    addGlobalSkill(skill: string, player?: Player): boolean;
    /**
     * @param { string } skill
     * @param { lib.element.Player } player
     */
    removeGlobalSkill(skill: string, player: lib.element.Player): void;
    resetSkills(): void;
    /**
     * @param { string } extensionName
     */
    hasExtension(extensionName: string): boolean;
    /**
     * @param { string } extensionName
     */
    hasExtensionInstalled(extensionName: string): any;
    /**
     * @param { string } extensionName
     */
    hasExtensionLoaded(extensionName: string): boolean;
    /**
     * @param { string } extensionName
     * @param { Function } runnable
     */
    runAfterExtensionLoaded(extensionName: string, runnable: Function): void;
    /**
     * @param { string } extensionName
     * @param { boolean } [keepFile]
     */
    removeExtension(extensionName: string, keepFile?: boolean): void;
    addRecentCharacter(...args: any[]): void;
    /**
     * @overload
     * @returns { Card }
     */
    createCard(): Card;
    /**
     * @overload
     * @param { Card | string } name
     * @param { string } [suit]
     * @param { number | string } [number]
     * @param { string } [nature]
     */
    createCard(name: Card | string, suit?: string, number?: number | string, nature?: string): any;
    /**
     * @overload
     * @returns { Card }
     */
    createCard2(): Card;
    /**
     * @overload
     * @param { Card | string } name
     * @param { string } suit
     * @param { number } number
     * @param { string } nature
     */
    createCard2(name: Card | string, suit: string, number: number, nature: string): any;
    /**
     * @param { boolean } bool
     * @param { Function } callback
     */
    forceOver(bool: boolean, callback: Function): void;
    /**
     * @param { boolean | string } [result]
     * @param { boolean } [bool]
     * @returns
     */
    over(result?: boolean | string, bool?: boolean, ...args: any[]): void;
    /**
     * @type { Map<GameEvent, Promise<any>> }
     *
     * 以Promise储存异步事件的执行链，使async content调用事件时无需必须使用await
     *
     * 但是需要事件结果的除外
     */
    executingAsyncEventMap: Map<GameEvent, Promise<any>>;
    /**
     * @type { GameEventPromise[] }
     */
    belongAsyncEventList: GameEventPromise[];
    /**
     * @param { GameEventPromise } [belongAsyncEvent]
     */
    loop(belongAsyncEvent?: GameEventPromise): Promise<void>;
    /**
     * @param { GameEventPromise } [belongAsyncEvent]
     */
    runContent(belongAsyncEvent?: GameEventPromise): Promise<any>;
    pause(): void;
    pause2(): void;
    resume(): void;
    resume2(): void;
    delaye(...args: any[]): import("../library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    delayex(...args: any[]): import("../library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * @param { number } [time]
     * @param { number } [time2]
     */
    delay(time?: number, time2?: number): void;
    /**
     * @param { number } [time]
     * @param { number } [time2]
     */
    delayx(time?: number, time2?: number): void;
    /**
     * 在async content中对game.delay的代替使用方法
     *
     * 因为async content里不应该使用game.pause和game.resume
     *
     * @param { number } [time]
     * @param { number } [time2]
     */
    asyncDelay(time?: number, time2?: number): Promise<void>;
    /**
     * 在async content中对game.delayx的代替使用方法
     *
     * 因为async content里不应该使用game.pause和game.resume
     *
     * @param { number } [time]
     * @param { number } [time2]
     */
    asyncDelayx(time?: number, time2?: number): Promise<void>;
    /**
     * @param { GameEventPromise } [event]
     */
    check(event?: GameEventPromise): boolean;
    Check: Check;
    uncheck(...args: any[]): void;
    /**
     * @param { Player } player1
     * @param { Player } player2
     * @param { boolean } [prompt]
     * @param { boolean } [behind]
     * @param { boolean } [noanimate]
     */
    swapSeat(player1: Player, player2: Player, prompt?: boolean, behind?: boolean, noanimate?: boolean): void;
    /**
     * @param { Player } player1
     * @param { Player } [player2]
     */
    swapPlayer(player: any, player2?: Player): void;
    /**
     * @param { Player } player
     */
    swapControl(player: Player): void;
    swapPlayerAuto(player: any): void;
    /**
     * @param { Player } player
     */
    findNext(player: Player): import("noname-typings/nonameModules/noname/library/element/player.js").Player;
    /**
     * @param { string } name
     * @param { Function } callback
     */
    loadModeAsync(name: string, callback: Function): void;
    /**
     * @param { string } name
     * @param {*} configx
     */
    switchMode(name: string, configx: any): void;
    /**
     * @param { string } mode
     */
    loadMode(mode: string): void;
    /**
     * @param  {...string} args
     */
    loadPackage(...args: string[]): void;
    /**
     * @param { Player } player
     */
    phaseLoop(player: Player): void;
    /**
     * @param { Player } [player]
     */
    gameDraw(player?: Player, num?: number): import("../library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseCharacterDouble(...args: any[]): void;
    updateRoundNumber(): void;
    /**
     * @param { Player[] } players
     * @param { number | number[] | (player: Player) => number } [num]
     * @param { { drawDeck: boolean } } [drawDeck]
     * @param { boolean } [bottom]
     */
    asyncDraw(players: Player[], num?: number | number[] | ((player: Player) => number), drawDeck?: {
        drawDeck: boolean;
    }, bottom?: boolean): Promise<void>;
    /**
     * @param { Player[] } players
     * @param { number | number[] | (player: Player) => number } num
     * @param { { drawDeck: boolean } } [drawDeck]
     */
    asyncDrawAuto(players: Player[], num: number | number[] | ((player: Player) => number), drawDeck?: {
        drawDeck: boolean;
    }, ...args: any[]): void;
    finishSkill(i: any, sub: any): void;
    finishCards(): void;
    /**
     * 这玩意至少19种重载了吧
     */
    checkMod(...args: any[]): any;
    /**
     * @param { number } num
     */
    prepareArena(num: number): void;
    clearArena(): void;
    clearConnect(): void;
    log(...args: any[]): void;
    /**
     * @param { Player } player
     * @param { string | Card[] } card
     * @param { Player[] } [targets]
     * @param { GameEventPromise } [event]
     * @param { boolean } [forced]
     * @param { string } [logvid]
     */
    logv(player: Player, card: string | Card[], targets?: Player[], event?: GameEventPromise, forced?: boolean, logvid?: string): HTMLDivElement;
    /**
     * @param { string } storeName
     * @param { string } idbValidKey
     * @param { any } value
     * @param { Function } [onSuccess]
     * @param { Function } [onError]
     */
    putDB(storeName: string, idbValidKey: string, value: any, onSuccess?: Function, onError?: Function): Promise<any>;
    /**
     *
     * @param { string } storeName
     * @param { string | null } [query]
     * @param { Function } [onSuccess]
     * @param { Function } [onError]
     */
    getDB(storeName: string, query?: string | null, onSuccess?: Function, onError?: Function): Promise<any>;
    /**
     * @param { string } storeName
     * @param { string } [query]
     * @param { Function } [onSuccess]
     * @param { Function } [onError]
     */
    deleteDB(storeName: string, query?: string, onSuccess?: Function, onError?: Function): Promise<any>;
    /**
     * @param { string } key
     * @param { * } [value]
     * @param { string } [mode]
     */
    save(key: string, value?: any, mode?: string): void;
    showChangeLog(): void;
    /**
     * @param { string } str
     * @param { string } [extname]
     */
    showExtensionChangeLog(str: string, extname?: string): void;
    /**
     * @param { string } key
     * @param { * } [value]
     * @param { string | boolean } [local]
     * @param { function(): void } [callback]
     */
    saveConfig(key: string, value?: any, local?: string | boolean, callback?: () => void): void;
    /**
     * @param { string } key
     */
    saveConfigValue(key: string): void;
    /**
     * @param { string } extension
     * @param { string } key
     * @param { * } [value]
     */
    saveExtensionConfig(extension: string, key: string, value?: any): void;
    /**
     * @param { string } extension
     * @param { string } key
     */
    saveExtensionConfigValue(extension: string, key: string): void;
    /**
     * @param { string } extension
     * @param { string } key
     */
    getExtensionConfig(extension: string, key: string): any;
    /**
     * @param { string } mode
     */
    clearModeConfig(mode: string): void;
    /**
     * @param { number } position
     * @param { string } [character]
     * @param { string } [character2]
     */
    addPlayer(position: number, character?: string, character2?: string): import("../library/element/player.js").Player;
    /**
     * @param { number } position
     * @param { string } [character]
     * @param { string } [animation]
     */
    addFellow(position: number, character?: string, animation?: string): import("../library/element/player.js").Player;
    /**
     * @param { Player } player
     */
    triggerEnter(player: Player): import("../library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * @param { Player } player
     */
    restorePlayer(player: Player): import("noname-typings/nonameModules/noname/library/element/player.js").Player;
    /**
     * @param { Player } player
     */
    removePlayer(player: Player): import("noname-typings/nonameModules/noname/library/element/player.js").Player;
    /**
     * @param { Player } player
     * @param { string } [character]
     * @param { string } [character2]
     */
    replacePlayer(player: Player, character?: string, character2?: string): import("../library/element/player.js").Player;
    arrangePlayers(): void;
    /**
     * @param { string[] } skills
     * @param { Player } player
     * @param { string[] } exclude
     */
    filterSkills(skills: string[], player: Player, exclude: string[]): string[];
    /**
     * @param { string[] } skills
     */
    expandSkills(skills: string[]): string[];
    /**
     * @param { { [key:string]: any } } style
     */
    css(style: {
        [key: string]: any;
    }): void;
    /**
     * @param { (player: Player) => boolean } func
     * @param { boolean } [includeOut]
     */
    hasPlayer(func: (player: Player) => boolean, includeOut?: boolean): boolean;
    /**
     * @param { (player: Player) => boolean } func
     * @param { boolean } [includeOut]
     */
    hasPlayer2(func: (player: Player) => boolean, includeOut?: boolean): boolean;
    /**
     * @param { (player: Player) => boolean } func
     * @param { boolean } [includeOut]
     */
    countPlayer(func: (player: Player) => boolean, includeOut?: boolean): number;
    /**
     * @param { (player: Player) => boolean } func
     * @param { boolean } [includeOut]
     */
    countPlayer2(func: (player: Player) => boolean, includeOut?: boolean): number;
    /**
     * @overload
     * @returns { Player[] }
     */
    filterPlayer(): Player[];
    /**
     * @overload
     * @param { (player: Player) => boolean } func
     * @param { Player[] } [list]
     * @param { boolean } [includeOut]
     * @returns { Player[] }
     */
    filterPlayer(func: (player: Player) => boolean, list?: Player[], includeOut?: boolean): Player[];
    /**
     * @overload
     * @returns { Player[] }
     */
    filterPlayer2(): Player[];
    /**
     * @overload
     * @param { (player: Player) => boolean } func
     * @param { Player[] } [list]
     * @param { boolean } [includeOut]
     * @returns { Player[] }
     */
    filterPlayer2(func: (player: Player) => boolean, list?: Player[], includeOut?: boolean): Player[];
    /**
     * @param { (player: Player) => boolean } func
     * @param { boolean } [includeOut]
     */
    findPlayer(func: (player: Player) => boolean, includeOut?: boolean): import("noname-typings/nonameModules/noname/library/element/player.js").Player;
    /**
     * @param { (player: Player) => boolean } func
     * @param { boolean } [includeOut]
     */
    findPlayer2(func: (player: Player) => boolean, includeOut?: boolean): import("noname-typings/nonameModules/noname/library/element/player.js").Player;
    /**
     * @param { (player: Player) => boolean } func
     * @param { boolean } [all]
     */
    findCards(func: (player: Player) => boolean, all?: boolean): string[];
    countGroup(): number;
    /**
     * 此函数用于计算函数的时间消耗。
     * @param {function} 测试的函数
     * @returns {number} 消耗的时间
     */
    testRunCost(func: any): number;
    /**
     * 此方法用于对所有targets按顺序执行一个async函数。
     *
     * @param { Player[] } targets 需要执行async方法的目标
     * @param { (player: Player, i: number) => Promise<any | void> } asyncFunc 需要执行的async方法
     * @param { (a: Player, b: Player) => number } sort 排序器，默认为lib.sort.seat
     */
    doAsyncInOrder(targets: Player[], asyncFunc: (player: Player, i: number) => Promise<any | void>, sort: (a: Player, b: Player) => number): Promise<void>;
}
export let game: Game;
export function setGame(instance?: InstanceType<typeof Game>): void;
export type GameHistory = {
    cardMove: GameEventPromise[];
    custom: GameEventPromise[];
    useCard: GameEventPromise[];
    changeHp: GameEventPromise[];
    everything: GameEventPromise[];
};
export type Video = {
    name?: string;
    type: string;
    player?: string;
    content?: string | any[];
    delay: number;
};
export type Videos = {
    mode: string;
    name: string[];
    name1: string;
    name2?: string;
    time: number;
    video: Video;
    win: boolean;
};
import { GameCompatible } from "./compatible.js";
import { GamePromises } from "./promises.js";
import { DynamicStyle } from "./dynamic-style/index.js";
import { lib } from "../library/index.js";
import { Check } from "./check.js";
import { delay } from "../util/index.js";
