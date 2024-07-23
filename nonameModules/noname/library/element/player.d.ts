export class Player extends HTMLDivElement {
    /**
     * @param {HTMLDivElement|DocumentFragment} [position]
     */
    constructor(position?: HTMLDivElement | DocumentFragment);
    build(noclick: any): this;
    buildNode(): void;
    /** @type { SMap<HTMLDivElement> } */
    node: SMap<HTMLDivElement>;
    buildExtra(): void;
    buildProperty(): void;
    /**
     * @type { number }
     */
    phaseNumber: number;
    /**
     * @type { string[] }
     */
    skipList: string[];
    /**
     * @type { string[] }
     */
    skills: string[];
    /**
     * @type { string[] }
     */
    invisibleSkills: string[];
    /**
     * @type { string[] }
     */
    initedSkills: string[];
    /**
     * @type { SMap<string[]> }
     */
    additionalSkills: SMap<string[]>;
    /**
     * @type { SMap<string[]> }
     */
    disabledSkills: SMap<string[]>;
    /**
     * @type { string[] }
     */
    hiddenSkills: string[];
    /**
     * @type { string[] }
     */
    awakenedSkills: string[];
    /**
     * @type { SMap<string[]> }
     */
    forbiddenSkills: SMap<string[]>;
    /**
     * @type { any[] }
     */
    popups: any[];
    /**
     * @type { any[] }
     */
    damagepopups: any[];
    /**
     * @type { Card[] }
     */
    judging: Card[];
    /**
     * @type { { card:{}, skill: {} }[] }
     */
    stat: {
        card: {};
        skill: {};
    }[];
    /**
     * @type { ActionHistory[] }
     */
    actionHistory: ActionHistory[];
    /**
     * @type { SMap<string[]> }
     */
    tempSkills: SMap<string[]>;
    /**
     * @type { SMap<any> }
     */
    storage: SMap<any>;
    /**
     * @type { SMap<HTMLDivElement> }
     */
    marks: SMap<HTMLDivElement>;
    /**
     * @type { SMap<number> }
     */
    expandedSlots: SMap<number>;
    /**
     * @type { SMap<number> }
     */
    disabledSlots: SMap<number>;
    /**
     * @type { {
     * 	friend: [],
     * 	enemy: [],
     * 	neutral: [],
     * 	shown?: number,
     * 	handcards?: {
     * 		global: [],
     * 		source: [],
     * 		viewed: []
     * 	}
     * } }
     */
    ai: {
        friend: [];
        enemy: [];
        neutral: [];
        shown?: number;
        handcards?: {
            global: [];
            source: [];
            viewed: [];
        };
    };
    /**
     * @type { number }
     */
    queueCount: number;
    /**
     * @type { number }
     */
    outCount: number;
    buildEventListener(noclick: any): void;
    noclick: boolean;
    /**
     * @type { number }
     */
    maxHp: number;
    /**
     * @type { number }
     */
    hp: number;
    /**
     * @type { number }
     */
    hujia: number;
    /**
     * @type { number }
     */
    seatNum: number;
    /**
     * @type { Player }
     */
    nextSeat: Player;
    /**
     * @type { Player }
     */
    next: Player;
    /**
     * @type { Player }
     */
    previousSeat: Player;
    /**
     * @type { Player }
     */
    previous: Player;
    /**
     * @type { string }
     */
    name: string;
    /**
     * @type { string }
     */
    name1: string;
    /**
     * @type { string }
     */
    name2: string;
    /**
     * @type { any[] }
     */
    tempname: any[];
    /**
     * @type { string }
     */
    sex: string;
    /**
     * @type { string }
     */
    group: string;
    /**
     * @type { ((player: this) => any)[] }
     */
    inits: ((player: this) => any)[];
    /**
     * @type { ((player: this) => any)[] }
     */
    _inits: ((player: this) => any)[];
    /**
     * @type { boolean }
     */
    isZhu: boolean;
    /**
     * @type { string }
     */
    identity: string;
    /**
     * @type { boolean | undefined }
     */
    identityShown: boolean | undefined;
    /**
     * @type { boolean }
     */
    removed: boolean;
    /**
     * 怒气
     * @param { number } amount
     * @param { boolean } [limit]
     */
    changeFury(amount: number, limit?: boolean): void;
    /**
     * version 1.7
     *
     * 链式创建一次性技能的api。
     *
     * 使用者只需要关注技能的效果，而不是技能的本身。
     *
     * v1.7 可传递作用域
     * @example
     * ```js
     * (function () {
     * 	let _var = 1;
     * 	let me = player;
     * 	player.when('drawAfter')
     * 		.apply(code => eval(code))
     * 		.then(() => console.log(_var))
     * 		.then('me.gainMaxHp(5)');
     * })();
     * ```
     */
    when(...args: any[]): {
        /**
         * @param { Required<Skill>['filter'] } fun
         */
        filter(fun: Required<Skill>['filter']): any;
        /**
         * @param { Required<Skill>['filter'] } fun
         */
        removeFilter(fun: Required<Skill>['filter']): any;
        /**
         * @param { Required<Skill>['filter'] } fun
         */
        filter2(fun: Required<Skill>['filter']): any;
        /**
         * @param { Required<Skill>['filter'] } fun
         */
        removeFilter2(fun: Required<Skill>['filter']): any;
        /**
         * @param { Required<Skill>['content'] } fun
         */
        then(fun: Required<Skill>['content']): any;
        /**
         * @param { string } str
         */
        popup(str: string): any;
        /**
         * @param { string } translation
         */
        translation(translation: string): any;
        /**
         * @param { SMap<any> } obj
         */
        assign(obj: SMap<any>): any;
        /**
         * @param { SMap<any> } arg
         */
        vars(arg: SMap<any>): any;
        /**
         * 传递外部作用域
         *
         * 一般是传递一个 code=>eval(code) 函数
         *
         * 传递后可在then中使用外部变量(vars的上位替代)
         *
         * @param {Function} _scope
         */
        apply(_scope: Function): any;
        /**
         * 获得技能
         * 如果instantlyAdd为false，则需要以此法获得技能
         **/
        finish(): any;
    };
    /**
     * 让一名角色明置一些手牌
     */
    addShownCards(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 让一名角色暗置一些手牌
     */
    hideShownCards(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 获取角色所有的明置手牌
     */
    getShownCards(): import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
    /**
     * 获取该角色被other所知的牌
     * @param { Player } [other]
     * @param { (card: Card) => boolean } [filter]
     */
    getKnownCards(other?: Player, filter?: (card: Card) => boolean): import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
    /**
     * 判断此角色的手牌是否已经被看光了
     * @param { Player } [other]
     */
    isAllCardsKnown(other?: Player): boolean;
    /**
     * 判断此角色是否有被知的牌。
     * @param { Player } [other]
     * @param { (card: Card) => boolean } [filter]
     */
    hasKnownCards(other?: Player, filter?: (card: Card) => boolean): boolean;
    /**
     * 数此角色被知道的牌
     * @param { Player } [other]
     * @param { (card: Card) => boolean } [filter]
     */
    countKnownCards(other?: Player, filter?: (card: Card) => boolean): number;
    /**
     * Execute the delay card effect
     *
     * 执行延时锦囊牌效果
     * @param { Card | string } card
     * @param { Player } target
     * @param {*} judge
     * @param {*} judge2
     * @returns
     */
    executeDelayCardEffect(card: Card | string, target: Player, judge: any, judge2: any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * Check if the card does not count toward hand limit
     *
     * 检测此牌是否不计入手牌上限
     * @param { Card } card
     * @returns { boolean }
     */
    canIgnoreHandcard(card: Card): boolean;
    /**
     * Gift
     *
     * 赠予
     * @param { Card | Card[] } cards
     * @param { Player } target
     */
    gift(cards: Card | Card[], target: Player, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * Check if the player can gift the card
     *
     * 检测角色是否能赠予此牌
     * @param { Card } card
     * @param { Player } target
     * @param { boolean } [strict]
     */
    canGift(card: Card, target: Player, strict?: boolean): boolean;
    /**
     * Check if the player refuses gifts
     *
     * 检测角色是否拒绝赠予
     * @param { Card } card
     * @param { Player } player
     */
    refuseGifts(card: Card, player: Player): boolean;
    /**
     * Gift AI related
     *
     * 赠予AI相关
     * @param { Card } card
     * @param { Player } target
     */
    getGiftAIResultTarget(card: Card, target: Player): number;
    /**
     * @param { Card } card
     * @param { Player } target
     */
    getGiftEffect(card: Card, target: Player): number;
    /**
     * 重铸
     * @param { Card | Card[] } cards
     * @param { (player: Player, cards: Card[]) => any } [recastingLose]
     * @param { (player: Player, cards: Card[]) => any } [recastingGain]
     */
    recast(cards: Card | Card[], recastingLose?: (player: Player, cards: Card[]) => any, recastingGain?: (player: Player, cards: Card[]) => any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * Check if the player can recast the card
     *
     * 检测角色是否能重铸此牌
     * @param { Card } card
     * @param { Player } [source]
     * @param { boolean } [strict]
     */
    canRecast(card: Card, source?: Player, strict?: boolean): boolean;
    /**
     * 判断一名角色的某个区域是否被废除
     *
     * type为要判断的区域 若为空 则判断玩家是否有任意一个被废除的区域
     * @param { string | number } [type]
     * @returns { boolean }
     */
    hasDisabledSlot(type?: string | number): boolean;
    /**
     * 判断一名角色的某个区域被废除的数量
     *
     * 用法同 {@link hasDisabledSlot}
     * @param { string | number } [type]
     */
    countDisabledSlot(type?: string | number): number;
    /**
     * 判断一名角色是否有某个装备栏空着
     * @param { string | number } [type]
     * @returns { boolean }
     */
    hasEmptySlot(type?: string | number): boolean;
    /**
     * 判断一名角色的某个装备栏空位的数量
     * @param { string | number } [type]
     */
    countEmptySlot(type?: string | number): number;
    /**
     * 判断一名角色是否有可以用于装备新装备牌的区域（排除金箍棒和六龙等“不可被替换装备”）
     *
     * 用法同 {@link hasEnabledSlot}
     * @param { string | number } [type]
     */
    hasEquipableSlot(type?: string | number): boolean;
    /**
     * 统计一名角色有多少个可以用于装备新的装备牌的区域
     *
     * 用法同 {@link hasEnabledSlot}
     * @param { string | number } [type]
     */
    countEquipableSlot(type?: string | number): number;
    /**
     * 判断一名角色是否拥有未被废除的某个区域
     *
     * type为要判断的区域 若为空 则判断玩家是否有任意一个未被废除的区域
     * @param { string | number } [type]
     * @returns { boolean }
     */
    hasEnabledSlot(type?: string | number): boolean;
    /**
     * 判断一名角色的某个区域未被废除的数量
     *
     * 用法同 {@link hasEnabledSlot}
     * @param { string | number } [type]
     */
    countEnabledSlot(type?: string | number): number;
    /**
     * 获取一名角色装备区内某种类型的装备牌
     *
     * 参数可以为数字/区域字符串/实体牌/虚拟牌/牌名
     * @param { number | string | Card | VCard } subtype
     * @returns { Card[] }
     */
    getEquips(subtype: number | string | Card | VCard): Card[];
    /**
     * 新的废除装备区
     *
     * 参数：废除来源角色（不写默认当前事件角色），废除区域（数字/区域字符串/数组，可以写多个，重复废除）
     */
    disableEquip(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 新的恢复装备区
     *
     * 参数：恢复来源角色（不写默认当前事件角色），恢复区域（数字/区域字符串/数组，可以写多个，重复恢复）
     */
    enableEquip(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 新的扩展装备区
     *
     * 参数：扩展来源角色（不写默认当前事件角色），扩展区域（数字/区域字符串/数组，可以写多个，重复扩展）
     */
    expandEquip(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 判断判定区是否被废除
     */
    isDisabledJudge(): boolean;
    /**
     * 同步显示扩展装备区状态
     * @param { SMap<number> } [map]
     */
    $syncExpand(map?: SMap<number>): void;
    /**
     * 同步装备区废除牌显示状态
     * @param { SMap<number> } [map]
     */
    $syncDisable(map?: SMap<number>): void;
    /**
     * @param { string | Card | VCard | CardBaseUIData } name
     * @param { boolean } [replace]
     * @returns { boolean }
     */
    canEquip(name: string | Card | VCard | CardBaseUIData, replace?: boolean): boolean;
    /**
     * @deprecated
     */
    countDisabled(...args: any[]): number;
    /**
     * @deprecated
     */
    isDisabled(arg: any): boolean;
    /**
     * @deprecated
     */
    isEmpty(num: any): boolean;
    /**
     * @deprecated
     */
    $disableEquip(): void;
    /**
     * @deprecated
     */
    $enableEquip(): void;
    chooseToDebate(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 向target发起协力
     * @param { Player } target
     * @param { string } type
     * @param {*} reason
     */
    cooperationWith(target: Player, type: string, reason: any): void;
    chooseCooperationFor(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    checkCooperationStatus(target: any, reason: any): boolean;
    removeCooperation(info: any): void;
    /**
     * @param { boolean } unseen 是否无视暗将的限制
     * @returns { string[] }
     */
    getClans(unseen: boolean): string[];
    /**
     * @param { string } clan 氏族名称
     * @param { boolean } unseen 是否无视暗将的限制
     * @returns { boolean }
     */
    hasClan(clan: string, unseen: boolean): boolean;
    /**
     * @param { string } skill
     */
    changeZhuanhuanji(skill: string): void;
    /**
     * @param { string } skill
     */
    $changeZhuanhuanji(skill: string): void;
    /**
     * 设置玩家的座位号
     * @param { number } num
     */
    setSeatNum(num: number): void;
    /**
     * 返回玩家的座位号
     * @returns { number }
     */
    getSeatNum(): number;
    /**
     * 是否拥有某一性别
     * @param { string } sex
     */
    hasSex(sex: string): boolean;
    /**
     * 是否和target同一性别
     * @param { Player } target
     */
    sameSexAs(target: Player): boolean;
    /**
     * 是否和target不同性别
     * @param { Player } target
     */
    differentSexFrom(target: Player): boolean;
    /**
     * @param { string } skill
     */
    addSkillBlocker(skill: string): void;
    /**
     * @param { string } skill
     */
    removeSkillBlocker(skill: string): void;
    /**
     *
     * @param { Card[] } cards
     * @param { string } tag
     * @param { Player } target
     * @returns { GameEventPromise }
     */
    loseToSpecial(cards: Card[], tag: string, target: Player): GameEventPromise;
    /**
     * 给一些牌加上Gaintag
     * @param { Card | Card[] } cards
     * @param { string } tag
     */
    addGaintag(cards: Card | Card[], tag: string): void;
    /**
     * 移除一些牌的Gaintag
     * @param { string } tag
     * @param { Card | Card[] } [cards]
     */
    removeGaintag(tag: string, cards?: Card | Card[]): void;
    /**
     * @param { Player } target
     */
    canSave(target: Player): boolean;
    /**
     * @param { Card } card
     * @param { Player } target
     */
    canSaveCard(card: Card, target: Player): any;
    /**
     * @param { String } from
     * @param { String } to
     * @returns { GameEventPromise }
     */
    reinitCharacter(from: string, to: string, log?: boolean): GameEventPromise;
    /**
     * @param { String[] } newPairs
     * @returns { GameEventPromise }
     */
    changeCharacter(newPairs: string[], log?: boolean): GameEventPromise;
    /**
     * 亮将函数，若num为0，则只亮主将，num为1，则只亮副将，num为2，则亮主将和副将
     * @param { 0 | 1 | 2 } num
     * @param { false } [log]
     */
    showCharacter(num: 0 | 1 | 2, log?: false, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * @param { 0 | 1 | 2 } num
     * @param { false } [log]
     */
    $showCharacter(num: 0 | 1 | 2, log?: false): void;
    chooseToPlayBeatmap(beatmap: any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseToMove(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseToGuanxing(num: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * @param { Player } target
     * @param { string } name
     * @param {*} rotate
     */
    $throwEmotion(target: Player, name: string, rotate: any): void;
    /**
     * @param { boolean } bool
     */
    tryJudgeAnimate(bool: boolean): void;
    /**
     * @param { string } name
     * @param { string } popname
     * @param { 'main' | 'vice' | boolean } checkShow
     */
    trySkillAnimate(name: string, popname: string, checkShow: 'main' | 'vice' | boolean, ...args: any[]): void;
    /**
     * @param { Card } card
     * @param { string } name
     * @param { string } [nature]
     * @param { string } [popname]
     */
    tryCardAnimate(card: Card, name: string, nature?: string, popname?: string, ...args: any[]): void;
    /**
     * @param { string } name
     * @param { string } type
     * @returns { boolean | undefined }
     */
    hasUsableCard(name: string, type: string): boolean | undefined;
    /**
     * @param { Player } to
     * @returns { boolean }
     */
    inRange(to: Player): boolean;
    /**
     * @param { Player } source
     * @returns { boolean }
     */
    inRangeOf(source: Player): boolean;
    /**
     * Get the player's HP not less than 0. Set “raw” to true to get the player's raw HP instead.
     *
     * 获取角色的体力值。设置“raw”为true以获取角色的体力。
     *
     * @param { boolean } [raw]
     * @returns { number }
     */
    getHp(raw?: boolean): number;
    /**
     * Set “raw” to true to get the player's raw damaged HP instead.
     *
     * 设置“raw”为true以获取角色已损失的体力。
     *
     * @param { boolean } [raw]
     * @returns { number }
     */
    getDamagedHp(raw?: boolean): number;
    /**
     * 将玩家切换至某个势力
     * @param { string } group
     * @param { boolean } [log]
     * @param { "nobroadcast" } [broadcast]
     * @returns { GameEventPromise }
     */
    changeGroup(group: string, log?: boolean, broadcast?: "nobroadcast", ...args: any[]): GameEventPromise;
    /**
     * @param { Player } target
     */
    chooseToDuiben(target: Player): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 令玩家与target划拳
     * @param { Player } target
     * @returns { GameEventPromise }
     */
    chooseToPSS(target: Player): GameEventPromise;
    /**
     * 令玩家选择恢复一个已废除的装备栏
     * @returns { GameEventPromise }
     */
    chooseToEnable(...args: any[]): GameEventPromise;
    /**
     * 令玩家选择废除一个未废除的装备栏
     * @returns { GameEventPromise }
     */
    chooseToDisable(...args: any[]): GameEventPromise;
    /**
     * 返回玩家是否处于出牌阶段
     * @param { boolean } [notmeisok]
     */
    isPhaseUsing(notmeisok?: boolean): boolean;
    /**
     * 与target交换装备区里的牌
     * @param { Player } target
     */
    swapEquip(target: Player): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 返回玩家是否可以与target拼点
     * @param { Player } target
     * @param { boolean } [goon] 忽略玩家的手牌不足以拼点
     * @param { boolean} [bool] 忽略target的手牌不足以拼点
     */
    canCompare(target: Player, goon?: boolean, bool?: boolean): boolean;
    $disableJudge(): void;
    $enableJudge(): void;
    disableJudge(): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    enableJudge(): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    init(character: any, character2: any, skill: any, update: any): this;
    skin: {
        name: any;
        name2: any;
    };
    singleHp: boolean;
    $init(character: any, character2: any): this;
    /**
     * 换肤换音：想要支持某个武将更换皮肤，必须在lib.character.characterSubstitute中存在该武将的id（以下以name代指武将id，character代指换肤图片名）
     *
     * 如果换肤换音引用本体的image/character素材作为更换的皮肤且不需要使用本体audio/die以外的地方的配音，则你无需在characterSubstitute中书写关于此皮肤的信息
     *
     * 如果lib.character[character]不存在，且想引用其他路径的图片素材或阵亡素材，请以[character,[]]的形式写入lib.character.characterSubstitute[name]中，第二个数组填入形式同lib.character[4]的书写形式
     *
     * @param { string | object | function } map
     * @param { string } character
     */
    changeSkin(map: string | object | Function, character: string): void;
    changeSkinByName(character: any, index: any): void;
    initOL(name: any, character: any): void;
    nickname: any;
    avatar: any;
    uninitOL(): void;
    initRoom(info: any, info2: any): this;
    serving: boolean;
    roomempty: boolean;
    roomfull: boolean;
    roomgaming: boolean;
    version: any;
    key: any;
    config: any;
    reinit2(newPairs: any): void;
    $reinit12(newPairs: any): void;
    $reinit21(newPairs: any): void;
    reinit(from: any, to: any, maxHp: any, online: any): this;
    $reinit(from: any, to: any, maxHp: any, online: any): void;
    uninit(): this;
    $uninit(): void;
    getLeft(): number;
    getTop(): number;
    smoothAvatar(vice: any, video: any): void;
    changeSeat(position: any, video: any): void;
    send(...args: any[]): this;
    getId(): this;
    playerid: string;
    throwEmotion(target: any, emotion: any, rotate: any): void;
    emotion(pack: any, id: any): void;
    /**
     * 用法同 {@link say}，但联机模式用这个
     * @param { string } str
     */
    chat(str: string): void;
    /**
     * 让玩家说话
     * @param { string } str
     */
    say(str: string): void;
    showGiveup(): void;
    _giveUp: boolean;
    applySkills(skills: any): void;
    getState(): {
        hp: number;
        maxHp: number;
        nickname: any;
        sex: string;
        group: string;
        name: string;
        name1: string;
        name2: string;
        handcards: import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
        gaintag: any[];
        equips: import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
        judges: import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
        specials: import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
        expansions: import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
        expansion_gaintag: any[];
        disableJudge: boolean;
        disabledSlots: SMap<number>;
        expandedSlots: SMap<number>;
        views: any[];
        position: number;
        hujia: number;
        side: any;
        identityShown: boolean;
        identityNode: string[];
        identity: string;
        dead: boolean;
        linked: boolean;
        turnedover: boolean;
        out: boolean;
        phaseNumber: number;
        unseen: boolean;
        unseen2: boolean;
        seatNum: number;
    };
    setNickname(str: any): this;
    setAvatar(name: any, name2: any, video: any, fakeme: any): void;
    setAvatarQueue(name: any, list: any): void;
    flashAvatar(skill: any, name: any): void;
    update(...args: any[]): void;
    $update(...args: any[]): this;
    /**
     * 清除玩家的标记
     * @param { string } i
     * @param { boolean } [log]
     */
    clearMark(i: string, log?: boolean): void;
    /**
     * 移除玩家的标记
     * @param { string } i
     * @param { number } [num = 1]
     * @param { boolean } [log]
     */
    removeMark(i: string, num?: number, log?: boolean): void;
    /**
     * 增加玩家的标记
     * @param { string } i
     * @param { number } [num = 1]
     * @param { boolean } [log]
     */
    addMark(i: string, num?: number, log?: boolean): void;
    /**
     * 设置玩家的标记数
     * @param { string } name
     * @param { number } num
     * @param { boolean } [log]
     */
    setMark(name: string, num: number, log?: boolean): void;
    /**
     * 返回玩家的标记数
     * @param { string } i
     * @returns { number }
     */
    countMark(i: string): number;
    /**
     * 返回玩家是否拥有某个标记
     * @param { string } i
     * @returns { boolean }
     */
    hasMark(i: string): boolean;
    updateMark(i: any, storage: any): this;
    updateMarks(connect: any): void;
    /**
     * @deprecated
     */
    num(arg1: any, arg2: any, arg3: any): any;
    line(target: any, config: any): void;
    line2(targets: any, config: any): void;
    /**
     * 返回玩家的下家
     * @returns { Player | null }
     */
    getNext(): Player | null;
    /**
     * 返回玩家的上家
     * @returns { Player | null }
     */
    getPrevious(): Player | null;
    countUsed(card: any, type: any): number;
    getCacheKey(): string;
    /**
     * 返回玩家本回合使用某个技能的次数
     * @param { string } skill
     * @returns { number }
     */
    countSkill(skill: string): number;
    /**
     * @param {*} [unowned]
     * @param {*} [unique]
     * @param {*} [hidden]
     * @returns { string[] }
     */
    getStockSkills(unowned?: any, unique?: any, hidden?: any): string[];
    /**
     * @param { string } [arg1='h']
     * @param { string | Record<string, any> | ((card: Card) => boolean) } [arg2]
     * @returns { Iterable<Card> }
     */
    iterableGetCards(arg1?: string, arg2?: string | Record<string, any> | ((card: Card) => boolean)): Iterable<Card>;
    /**
     * @param { string } [arg1='h']
     * @param { string | Record<string, any> | ((card: Card) => boolean) } [arg2]
     * @returns { Card[] }
     */
    getCards(arg1?: string, arg2?: string | Record<string, any> | ((card: Card) => boolean)): Card[];
    /**
     * @param { Player } player
     * @param { string } [arg1]
     * @param { string } [arg2]
     * @returns { Generator<Card, void, unknown> }
     */
    iterableGetDiscardableCards(player: Player, arg1?: string, arg2?: string): Generator<Card, void, unknown>;
    getDiscardableCards(player: any, arg1: any, arg2: any): import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
    /**
     * @param {Parameters<lib['filter']['canBeGained']>[1]} player
     * @param {Parameters<this['iterableGetCards']>[0]} arg1
     * @param {Parameters<this['iterableGetCards']>[1]} arg2
     */
    iterableGetGainableCards(player: [card?: any, player?: any, target?: any, event?: any][1], arg1: Parameters<this['iterableGetCards']>[0], arg2: Parameters<this['iterableGetCards']>[1]): Generator<any, void, unknown>;
    /**
     *
     * @param {Parameters<this['iterableGetGainableCards']>[0]} player
     * @param {Parameters<this['iterableGetGainableCards']>[1]} [arg1]
     * @param {Parameters<this['iterableGetGainableCards']>[2]} [arg2]
     */
    getGainableCards(player: Parameters<this['iterableGetGainableCards']>[0], arg1?: Parameters<this['iterableGetGainableCards']>[1], arg2?: Parameters<this['iterableGetGainableCards']>[2]): any[];
    getGainableSkills(func: any): any[];
    /**
     * @param { Parameters<typeof this['iterableGetCards']>[0] } [arg1]
     * @param { Parameters<typeof this['iterableGetCards']>[1] } [arg2]
     */
    countCards(arg1?: Parameters<typeof this['iterableGetCards']>[0], arg2?: Parameters<typeof this['iterableGetCards']>[1]): number;
    getCardIndex(arg1: any, name: any, card: any, max: any): number;
    countDiscardableCards(player: any, arg1: any, arg2: any): number;
    /**
     * @param {Parameters<this['getGainableCards']>[0]} player
     * @param {Parameters<this['getGainableCards']>[1]} [arg1]
     * @param {Parameters<this['getGainableCards']>[2]} [arg2]
     */
    countGainableCards(player: Parameters<this['getGainableCards']>[0], arg1?: Parameters<this['getGainableCards']>[1], arg2?: Parameters<this['getGainableCards']>[2]): number;
    /**
     * 返回武将牌上原有的技能
     * @returns { Array<string> } 技能名数组
     */
    getOriginalSkills(): Array<string>;
    getModableSkills(): any[];
    /**
     * @param { string | boolean | null } [arg2]
     * @param { boolean | null} [arg3]
     * @param {boolean} [arg4]
     */
    getSkills(arg2?: string | boolean | null, arg3?: boolean | null, arg4?: boolean): any[];
    /**
     * @deprecated
     */
    get(arg1: any, arg2: any, arg3: any, arg4: any, ...args: any[]): any[] | ChildNode;
    syncStorage(skill: any): void;
    syncSkills(): void;
    playerfocus(time: any): this;
    setIdentity(identity: any, nature: any): this;
    insertPhase(skill: any, insert: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    insertEvent(name: any, content: any, arg: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    phase(skill: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    phaseZhunbei(): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    phaseJudge(): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    phaseDraw(): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    phaseUse(): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    phaseDiscard(): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    phaseJieshu(): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseToUse(use: any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseToRespond(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseToGive(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseToDiscard(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseToCompare(target: any, check: any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseSkill(target: any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    discoverCard(list: any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseCardButton(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseVCardButton(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseButton(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseButtonOL(list: any, callback: any, ai: any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseCardOL(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseCard(choose: any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseUseTarget(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseTarget(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseCardTarget(choose: any, ...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseControlList(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseControl(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseBool(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    chooseDrawRecover(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    choosePlayerCard(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    discardPlayerCard(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    gainPlayerCard(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 玩家展示手牌
     * @param { string } str
     * @returns { GameEventPromise }
     */
    showHandcards(str: string, ...args: any[]): GameEventPromise;
    /**
     * 玩家展示一些牌
     * @param { Card[] } cards
     * @param { string } str
     * @returns { GameEventPromise }
     */
    showCards(cards: Card[], str: string, ...args: any[]): GameEventPromise;
    /**
     * 玩家观看一些牌
     * @param { string } str
     * @param { Card[] } cards
     * @returns { GameEventPromise }
     */
    viewCards(str: string, cards: Card[], ...args: any[]): GameEventPromise;
    /**
     * 玩家观看target的手牌
     * @param { Player } target
     * @returns { GameEventPromise }
     */
    viewHandcards(target: Player): GameEventPromise;
    canMoveCard(withatt: any, nojudge: any, ...args: any[]): boolean;
    /**
     * 移动一些牌
     * @returns { GameEventPromise }
     */
    moveCard(...args: any[]): GameEventPromise;
    useResult(result: any, event: any): import("noname-typings/nonameModules/noname/library/index.js").GameEventPromise;
    /**
     * 令玩家使用牌
     * @returns { GameEventPromise }
     */
    useCard(...args: any[]): GameEventPromise;
    /**
     * 令玩家使用某个技能
     * @returns { GameEventPromise }
     */
    useSkill(...args: any[]): GameEventPromise;
    /**
     * 令玩家摸牌摸至指定值
     * @param { number } num
     * @param { * } args
     * @returns { GameEventPromise }
     */
    drawTo(num: number, args: any): GameEventPromise;
    /**
     * 令玩家摸牌
     * @returns { GameEventPromise }
     */
    draw(...args: any[]): GameEventPromise;
    randomDiscard(...args: any[]): import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
    randomGain(...args: any[]): any;
    /**
     * 令玩家弃置一些牌
     * @returns { GameEventPromise }
     */
    discard(...args: any[]): GameEventPromise;
    /**
     * 令玩家将一些牌置入弃牌堆
     * @returns { GameEventPromise }
     */
    loseToDiscardpile(...args: any[]): GameEventPromise;
    /**
     * 令玩家打出牌
     * @returns { GameEventPromise }
     */
    respond(...args: any[]): GameEventPromise;
    swapHandcards(target: any, cards1: any, cards2: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    directequip(cards: any): void;
    $addToExpansion(cards: any, broadcast: any, gaintag: any): this;
    directgain(cards: any, broadcast: any, gaintag: any): this;
    directgains(cards: any, broadcast: any, gaintag: any): this;
    /**
     * @param { Player[] } targets
     * @param { string } [position = "h"]
     */
    gainMultiple(targets: Player[], position?: string): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 令玩家获得一些牌
     * @returns { GameEventPromise }
     */
    gain(...args: any[]): GameEventPromise;
    /**
     * 将一些牌置入玩家的武将牌上
     * @returns { GameEventPromise }
     */
    addToExpansion(...args: any[]): GameEventPromise;
    /**
     * 玩家交给target一些牌
     * @param { Card | Card[] } cards
     * @param { Player } target
     * @param { boolean } [visible]
     */
    give(cards: Card | Card[], target: Player, visible?: boolean): import("noname-typings/nonameModules/noname/library/index.js").GameEventPromise;
    lose(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 令玩家受到伤害
     * @returns { GameEventPromise }
     */
    damage(...args: any[]): GameEventPromise;
    /**
     * 令玩家回复体力
     * @returns { GameEventPromise }
     */
    recover(...args: any[]): GameEventPromise;
    /**
     * 令玩家回复体力至指定值
     * @returns { GameEventPromise }
     */
    recoverTo(...args: any[]): GameEventPromise;
    doubleDraw(): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 令玩家流失体力
     * @param { number } [num]
     */
    loseHp(num?: number): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 扣减玩家的体力上限
     * @returns { GameEventPromise }}
     */
    loseMaxHp(...args: any[]): GameEventPromise;
    /**
     * 令玩家获得体力上限
     * @returns { GameEventPromise }
     */
    gainMaxHp(...args: any[]): GameEventPromise;
    /**
     * 调整玩家的体力值
     * @param { number } num
     * @param { boolean } [popup]
     * @returns { GameEventPromise }
     */
    changeHp(num: number, popup?: boolean): GameEventPromise;
    /**
     * 调整玩家的护甲值
     * @param { number } [num]
     * @param { "gain" | "lose" | "damage" | "null" } [type]
     * @param { number } [limit] 护甲上限
     * @returns { GameEventPromise }
     */
    changeHujia(num?: number, type?: "gain" | "lose" | "damage" | "null", limit?: number): GameEventPromise;
    getBuff(...args: any[]): this;
    getDebuff(...args: any[]): this;
    /**
     * 令玩家进入濒死状态
     * @param { GameEvent | GameEventPromise } [reason]
     * @returns { GameEventPromise }
     */
    dying(reason?: GameEvent | GameEventPromise): GameEventPromise;
    /**
     * 令玩家死亡
     * @param { GameEvent | GameEventPromise } reason
     * @returns { GameEventPromise }
     */
    die(reason: GameEvent | GameEventPromise): GameEventPromise;
    /**
     * 令玩家复活
     * @param { number } [hp = 1]
     * @param { boolean } [log]
     */
    revive(hp?: number, log?: boolean): void;
    isMad(): boolean;
    /**
     * 令玩家进入混乱状态
     */
    goMad(end: any): void;
    /**
     * 解除玩家的混乱状态
     */
    unMad(): void;
    tempHide(): void;
    addExpose(num: any): this;
    equip(card: any, draw: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * 将一些牌置入到玩家的判定区
     * @param { Card } card
     * @param { Card[] } [cards]
     * @returns { GameEventPromise }
     */
    addJudge(card: Card, cards?: Card[]): GameEventPromise;
    /**
     * 返回某些牌是否能进入玩家的判定区
     *
     * @overload
     * @param { string } card
     * @returns { boolean }
     *
     * @overload
     * @param { Card } card
     * @returns { boolean }
     */
    canAddJudge(card: string): boolean;
    /**
     * 返回某些牌是否能进入玩家的判定区
     *
     * @overload
     * @param { string } card
     * @returns { boolean }
     *
     * @overload
     * @param { Card } card
     * @returns { boolean }
     */
    canAddJudge(card: Card): boolean;
    addJudgeNext(card: any, unlimited: any): void;
    judge(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    turnOver(bool: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    out(skill: any): void;
    outSkills: any[];
    in(skill: any): void;
    link(bool: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    skip(name: any): void;
    wait(callback: any): void;
    unwait(result: any): void;
    tempUnwait(result: any): void;
    /**
     * @param { string | string[] } name
     * @param { Player | Player[] } [targets]
     * @param { boolean | string } [nature]
     * @param { boolean } [logv]
     */
    logSkill(name: string | string[], targets?: Player | Player[], nature?: boolean | string, logv?: boolean): void;
    unprompt(): void;
    prompt(str: any, nature: any): void;
    prompt_old(name2: any, className: any): void;
    /**
     *
     * @param { string } name
     * @param { string } className
     * @param { Parameters<this["damagepop"]>[3] } [nobroadcast]
     */
    popup(name: string, className?: string, nobroadcast?: Parameters<this["damagepop"]>[3]): void;
    popup_old(name: any, className: any): HTMLDivElement;
    _popup(): void;
    showTimer(time: any): void;
    hideTimer(): void;
    markAuto(name: any, info: any): void;
    unmarkAuto(name: any, info: any): void;
    getExpansions(tag: any): import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
    countExpansions(tag: any): number;
    hasExpansions(tag: any): boolean;
    setStorage(name: any, value: any, mark: any): any;
    getStorage(name: any, defaultValue?: any[]): any;
    hasStorage(name: any, value: any): boolean;
    hasStorageAny(name: any, values: any, ...args: any[]): any;
    hasStorageAll(name: any, values: any, ...args: any[]): any;
    initStorage(name: any, value: any, mark: any): any;
    updateStorage(name: any, operation: any, mark: any): any;
    updateStorageAsync(name: any, operation: any, mark: any): Promise<any>;
    removeStorage(name: any, mark: any): boolean;
    markSkill(name: any, info: any, card: any, nobroadcast: any): this;
    unmarkSkill(name: any, nobroadcast: any): this;
    markSkillCharacter(id: any, target: any, name: any, content: any, nobroadcast: any): this;
    markCharacter(name: any, info: any, learn: any, learn2: any): HTMLDivElement;
    mark(name: any, info: any, skill: any): any;
    unmark(name: any, info: any): void;
    addLink(): void;
    removeLink(): void;
    /**
     * @param { string | Card | VCard } card
     * @param { Player } target
     * @param { boolean } [distance]
     * @param { GameEventPromise | boolean } [includecard]
     * @returns { boolean }
     */
    canUse(card: string | Card | VCard, target: Player, distance?: boolean, includecard?: GameEventPromise | boolean): boolean;
    hasUseTarget(card: any, distance: any, includecard: any): boolean;
    hasValueTarget(card: any, distance: any, includecard: any): boolean;
    getUseValue(card: any, distance: any, includecard: any): number;
    addSubPlayer(cfg: any): string;
    removeSubPlayer(name: any): void;
    callSubPlayer(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    toggleSubPlayer(...args: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    exitSubPlayer(remove: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    getSubPlayers(tag: any): any[];
    addSkillTrigger(skills: any, hidden: any, triggeronly: any): this;
    _hookTrigger: any[];
    addSkillLog(skill: any): this;
    removeSkillLog(skill: any, popup: any): this;
    addInvisibleSkill(skill: any): void;
    removeInvisibleSkill(skill: any, ...args: any[]): any;
    addSkills(skill: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    removeSkills(skill: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    changeSkills(addSkill?: any[], removeSkill?: any[]): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    addSkill(skill: any, checkConflict: any, nobroadcast: any, addToSkills: any): any;
    addAdditionalSkills(skill: any, skillsToAdd: any, keep: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    addAdditionalSkill(skill: any, skillsToAdd: any, keep: any): this;
    $removeAdditionalSkills(skill: any, target: any): void;
    getRemovableAdditionalSkills(skill: any, target: any): string[];
    removeAdditionalSkill(skill: any, target: any): this;
    removeAdditionalSkills(skill: any, target: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    awakenSkill(skill: any, nounmark: any): this;
    restoreSkill(skill: any, nomark: any): this;
    disableSkill(skill: any, skills: any): this;
    enableSkill(skill: any): this;
    checkMarks(): this;
    addEquipTrigger(card: any): this;
    removeEquipTrigger(card: any): this;
    removeSkillTrigger(skills: any, triggeronly: any): this;
    removeSkill(skill: any, ...args: any[]): any;
    addTempSkills(skillsToAdd: any, expire: any): import("./gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent & import("noname-typings/nonameModules/noname/library/element/gameEventPromise.js").GameEventPromise;
    /**
     * @overload
     * @param { string } skill
     * @param { SkillTrigger | string | (event:GameEventPromise, player:Player, name:string) => boolean } [expire]
     * @param { boolean } [checkConflict]
     *
     * @overload
     * @param { string[] } skill 技能名数组
     * @param { SkillTrigger | string | (event:GameEventPromise, player:Player, name:string) => boolean } [expire]
     * @param { boolean } [checkConflict]
     */
    addTempSkill(skill: string, expire?: string | SkillTrigger | ((event: GameEventPromise, player: Player, name: string) => boolean), checkConflict?: boolean): any;
    /**
     * @overload
     * @param { string } skill
     * @param { SkillTrigger | string | (event:GameEventPromise, player:Player, name:string) => boolean } [expire]
     * @param { boolean } [checkConflict]
     *
     * @overload
     * @param { string[] } skill 技能名数组
     * @param { SkillTrigger | string | (event:GameEventPromise, player:Player, name:string) => boolean } [expire]
     * @param { boolean } [checkConflict]
     */
    addTempSkill(skill: string[], expire?: string | SkillTrigger | ((event: GameEventPromise, player: Player, name: string) => boolean), checkConflict?: boolean): any;
    tempBanSkill(skill: any, expire: any, log: any): any;
    /**
     * 返回技能是否暂时失效
     * @param { string } skill 技能名
     * @returns { boolean }
     */
    isTempBanned(skill: string): boolean;
    attitudeTo(target: any): any;
    clearSkills(all: any, ...args: any[]): string[];
    checkConflict(skill: any): void;
    /**
     * 快速获取一名角色当前轮次/前X轮次的历史
     *
     * 第一个参数填写获取的动作
     *
     * 第二个参数填写获取历史的筛选条件
     *
     * 第三个参数填写数字（不填默认为0），获取上X轮的历史（X为0则为本轮历史），第四个参数若为true，则获取从上X轮开始至现在
     *
     * 第四个参数若为true，则获取从上X轮开始至现在所有符合条件的历史
     *
     * 第五个参数填写event，获取此event之前所有符合条件的历史
     *
     * @param { string | function | number | boolean | object } map
     */
    getRoundHistory(key: any, filter: any, num: any, keep: any, last: any): any[];
    /**
     * @overload
     * @returns { ActionHistory }
     */
    getHistory(): ActionHistory;
    /**
     * @template { keyof ActionHistory } T
     * @overload
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } [filter]
     * @param { GameEventPromise } [last]
     * @returns { ActionHistory[T] }
     */
    getHistory<T extends keyof ActionHistory>(key: T, filter?: (event: GameEventPromise) => boolean, last?: GameEventPromise): ActionHistory[T];
    /**
     * @template { keyof ActionHistory } T
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } filter
     * @param { GameEventPromise } [last]
     */
    checkHistory<T_1 extends keyof ActionHistory>(key: T_1, filter: (event: GameEventPromise) => boolean, last?: GameEventPromise): void;
    /**
     * @template { keyof ActionHistory } T
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } [filter]
     * @param { GameEventPromise } [last]
     * @returns { boolean }
     */
    hasHistory<T_2 extends keyof ActionHistory>(key: T_2, filter?: (event: GameEventPromise) => boolean, last?: GameEventPromise): boolean;
    /**
     * @template { keyof ActionHistory } T
     * @overload
     * @param { T } [key]
     * @param { (event: GameEventPromise) => boolean } [filter]
     * @param { GameEventPromise } [last]
     * @returns { null | ActionHistory[T] | boolean }
     */
    getLastHistory<T_3 extends keyof ActionHistory>(key?: T_3, filter?: (event: GameEventPromise) => boolean, last?: GameEventPromise): boolean | ActionHistory[T_3];
    /**
     * @template { keyof ActionHistory } T
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } filter
     * @param { GameEventPromise } [last]
     */
    checkAllHistory<T_4 extends keyof ActionHistory>(key: T_4, filter: (event: GameEventPromise) => boolean, last?: GameEventPromise): void;
    /**
     * @template { keyof ActionHistory } T
     * @param { T } [key]
     * @param { (event: GameEventPromise) => boolean } [filter]
     * @param { GameEventPromise } [last]
     * @returns { ActionHistory[T] }
     */
    getAllHistory<T_5 extends keyof ActionHistory>(key?: T_5, filter?: (event: GameEventPromise) => boolean, last?: GameEventPromise): ActionHistory[T_5];
    /**
     * @template { keyof ActionHistory } T
     * @param { T } key
     * @param { (event: GameEventPromise) => boolean } filter
     * @param { GameEventPromise } [last]
     * @returns { boolean }
     */
    hasAllHistory<T_6 extends keyof ActionHistory>(key: T_6, filter: (event: GameEventPromise) => boolean, last?: GameEventPromise): boolean;
    getLastUsed(num: any): import("noname-typings/nonameModules/noname/library/index.js").GameEventPromise;
    getStat(key: any): any;
    getLastStat(key: any): any;
    queue(time: any): void;
    queueTimeout: NodeJS.Timeout;
    getCardUsable(card: any, pure: any): number;
    /**
     * 返回玩家的攻击距离
     * @param { boolean } raw
     * @returns { number }
     */
    getAttackRange(raw: boolean): number;
    /**
     * 返回一些牌的攻击距离
     * @param { Card[] } cards
     * @returns { number }
     */
    getEquipRange(cards: Card[]): number;
    getGlobalFrom(): number;
    getGlobalTo(): number;
    /**
     * 返回玩家的手牌上限
     * @returns { number }
     */
    getHandcardLimit(): number;
    getEnemies(func: any): import("noname-typings/nonameModules/noname/library/element/player.js").Player[];
    getFriends(func: any): any[];
    isEnemyOf(...args: any[]): boolean;
    isFriendOf(player: any): boolean;
    isFriendsOf(player: any): any;
    isEnemiesOf(player: any): any;
    isAlive(): boolean;
    isDead(): boolean;
    isDying(): boolean;
    isDamaged(): boolean;
    isHealthy(): any;
    /**
     * 判断玩家是否是场上体力最大的玩家
     * @param { boolean } [only] 是否唯一
     * @param { boolean } [raw]
     * @returns { boolean }
     */
    isMaxHp(only?: boolean, raw?: boolean): boolean;
    /**
     * 判断玩家是否是场上体力最少的玩家
     * @param { boolean } [only] 是否唯一
     * @param { boolean } [raw]
     * @returns { boolean }
     */
    isMinHp(only?: boolean, raw?: boolean): boolean;
    /**
     * 判断玩家是否是场上牌最多的玩家
     * @param { boolean } [only] 是否唯一
     * @returns { boolean }
     */
    isMaxCard(only?: boolean): boolean;
    /**
     * 判断玩家是否是场上牌最少的玩家
     * @param { boolean } [only] 是否唯一
     * @returns { boolean }
     */
    isMinCard(only?: boolean): boolean;
    /**
     * 判断玩家是否是场上手牌最多的玩家
     * @param { boolean } [only] 是否唯一
     * @returns { boolean }
     */
    isMaxHandcard(only?: boolean): boolean;
    /**
     * 判断玩家是否是场上手牌最少的玩家
     * @param { boolean } [only] 是否唯一
     * @returns { boolean }
     */
    isMinHandcard(only?: boolean): boolean;
    /**
     * 判断玩家是否是场上装备区牌最多的玩家
     * @param { boolean } [only] 是否唯一
     * @returns { boolean }
     */
    isMaxEquip(only?: boolean): boolean;
    /**
     * 判断玩家是否是场上装备区牌最少的玩家
     * @param { boolean } [only] 是否唯一
     * @returns { boolean }
     */
    isMinEquip(only?: boolean): boolean;
    /**
     * 返回玩家是否是横置状态
     * @returns { boolean }
     */
    isLinked(): boolean;
    /**
     * 返回玩家是否是翻面状态
     * @returns { boolean }
     */
    isTurnedOver(): boolean;
    /**
     * 返回玩家是否是被移出游戏
     * @returns { boolean }
     */
    isOut(): boolean;
    isMin(distance: any): boolean;
    isIn(): boolean;
    isUnseen(num: any): boolean;
    isUnderControl(self: any, me: any): any;
    isOnline(): boolean;
    isOnline2(): boolean;
    isOffline(): boolean;
    isMajor(): boolean;
    isNotMajor(): boolean;
    isMinor(nomajor: any): boolean;
    checkShow(skill: any, showonly: any): false | "main" | "vice";
    /**
     *
     * @param { number | Card[] | Card } [add]
     * @param { (card?: Card, player?: Player) => boolean } [filter]
     * @param { boolean } [pure]
     */
    needsToDiscard(add?: number | Card[] | Card, filter?: (card?: Card, player?: Player) => boolean, pure?: boolean): number;
    distanceTo(target: any, method: any): number;
    distanceFrom(target: any, method: any): number;
    /**
     * @param { string } skill
     * @param { Parameters<this['getSkills']>[0] } arg2
     * @param { Parameters<this['getSkills']>[1] } arg3
     * @param { Parameters<this['getSkills']>[2] } arg4
     * @returns { boolean }
     */
    hasSkill(skill: string, arg2: Parameters<this['getSkills']>[0], arg3: Parameters<this['getSkills']>[1], arg4: Parameters<this['getSkills']>[2]): boolean;
    /**
     * @param { string } skill
     * @param { Parameters<this['getStockSkills']>[0] } arg1
     * @param { Parameters<this['getStockSkills']>[1] } arg2
     * @param { Parameters<this['getStockSkills']>[2] } arg3
     * @returns { boolean }
     */
    hasStockSkill(skill: string, arg1: Parameters<this['getStockSkills']>[0], arg2: Parameters<this['getStockSkills']>[1], arg3: Parameters<this['getStockSkills']>[2]): boolean;
    isZhu2(): boolean;
    isInitFilter(tag: any): boolean;
    /**
     *
     * @param {string} skill
     * @param {Player} [player]
     */
    hasZhuSkill(skill: string, player?: Player): boolean;
    hasGlobalTag(tag: any, arg: any): boolean;
    /**
     * @param {string} tag
     * @param {Parameters<this['getSkills']>[0]} [hidden]
     * @param {Parameters<SkillAI['skillTagFilter']>[2]} [arg]
     * @param {boolean} [globalskill]
     */
    hasSkillTag(tag: string, hidden?: Parameters<this['getSkills']>[0], arg?: [player: import("noname-typings/nonameModules/noname/library/element/player.js").Player, tag: string, arg: any][2], globalskill?: boolean): boolean;
    /**
     * 返回玩家是否有某个牌名的牌
     *
     * @overload
     * @param { Card } name
     * @returns { boolean }
     *
     * @overload
     * @param { string } name
     * @returns { boolean}
     */
    hasJudge(name: Card): boolean;
    /**
     * 返回玩家是否有某个牌名的牌
     *
     * @overload
     * @param { Card } name
     * @returns { boolean }
     *
     * @overload
     * @param { string } name
     * @returns { boolean}
     */
    hasJudge(name: string): boolean;
    /**
     * 返回玩家是否存在队友
     * @returns { boolean }
     */
    hasFriend(): boolean;
    hasUnknown(num: any): boolean;
    isUnknown(player: any): boolean;
    hasWuxie(info: any): boolean;
    /**
     *
     * @param {string|boolean} [respond]
     * @param {boolean} [noauto]
     */
    hasSha(respond?: string | boolean, noauto?: boolean): boolean;
    hasShan(respond: any): boolean;
    mayHaveSha(viewer: any, type: any, ignore: any, rvt: any): number | boolean;
    mayHaveShan(viewer: any, type: any, ignore: any, rvt: any): number | boolean;
    hasCard(name: any, position: any): boolean;
    getEquip(name: any): import("noname-typings/nonameModules/noname/library/element/card.js").Card;
    /**
     * 返回玩家判定区中的牌
     * @param { string } [name]
     * @returns { Card[] }
     */
    getJudge(name?: string): Card[];
    $drawAuto(cards: any, target: any): void;
    $draw(num: any, init: any, config: any): void;
    $compareMultiple(card1: any, targets: any, cards: any): void;
    $compare(card1: any, target: any, card2: any): void;
    $throw(card: any, time: any, init: any, nosource: any): any;
    $throwordered(...args: any[]): any;
    $throwordered1(node: any, nosource: any): any;
    $throwordered2(node: any, nosource: any): any;
    $throwxy(card: any, left: any, top: any): any;
    $throwxy2(card: any, left: any, top: any, trans: any, flipx: any, flipy: any, ...args: any[]): any;
    throwDice(num: any): void;
    $giveAuto(card: any, player: any, ...args: any[]): any;
    $give(card: any, player: any, log: any, init: any): void;
    $handleEquipChange(): void;
    $equip(card: any): this;
    $gain(card: any, log: any, init: any): void;
    $gain2(cards: any, log: any): boolean;
    $skill(name: any, type: any, color: any, avatar: any): void;
    $fire(): void;
    $thunder(): void;
    $rare2(): void;
    $epic2(): void;
    $legend2(): void;
    $rare(time: any): void;
    $epic(time: any): void;
    $legend(time: any): void;
    $coin(): void;
    $dust(): void;
    $recover(): void;
    $fullscreenpop(str: any, nature: any, avatar: any, broadcast: any): void;
    /**
     *
     * @param { number | string } num
     * @param { string } [nature]
     * @param { boolean } [font]
     * @param { boolean } [nobroadcast]
     */
    $damagepop(num: number | string, nature?: string, font?: boolean, nobroadcast?: boolean): void;
    $damage(source: any, ...args: any[]): void;
    $die(): void;
    $dieflip(type: any): void;
    $phaseJudge(card: any): void;
}
export type ActionHistory = {
    useCard: GameEventPromise[];
    respond: GameEventPromise[];
    skipped: GameEventPromise[];
    lose: GameEventPromise[];
    gain: GameEventPromise[];
    sourceDamage: GameEventPromise[];
    damage: GameEventPromise[];
    custom: GameEventPromise[];
    useSkill: GameEventPromise[];
};
