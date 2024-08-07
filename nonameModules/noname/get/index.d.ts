export class Get extends GetCompatible {
    is: Is;
    promises: Promises;
    Audio: typeof Audio;
    /**
     * 将一个传统格式的character转化为Character对象格式
     * @param { Array|Object|import("../library/element/character").Character } data
     * @returns {import("../library/element/character").Character}
     */
    convertedCharacter(data: any[] | any | import("../library/element/character").Character): import("../library/element/character").Character;
    /**
     * 返回 VCard[] 形式的所有牌，用于印卡将遍历
     * @param {Function} [filter]
     * @returns {string[][]}
     */
    inpileVCardList(filter?: Function): string[][];
    /**
     * 根据(Player的)座次数n（从1开始）获取对应的“n号位”翻译
     * @param {number | Player} seat
     * @returns { string }
     */
    seatTranslation(seat: number | Player): string;
    /**
     * @param {number} numberOfPlayers
     * @returns {string[]}
     */
    identityList(numberOfPlayers: number): string[];
    /**
     * Generate an object URL from the Base64-encoded octet stream
     *
     * 从Base64编码的八位字节流生成对象URL
     */
    objectURL(octetStream: any): any;
    /**
     * Get the card name length
     *
     * 获取此牌的字数
     * @param { Card } card
     * @param { Player } [player]
     * @returns { number }
     */
    cardNameLength(card: Card, player?: Player): number;
    /**
     * Get the Yingbian conditions (of the card)
     *
     * 获取（此牌的）应变条件
     */
    yingbianConditions(card: any): string[];
    complexYingbianConditions(card: any): string[];
    simpleYingbianConditions(card: any): string[];
    /**
     * Get the Yingbian effects (of the card)
     *
     * 获取（此牌的）应变效果
     */
    yingbianEffects(card: any): string[];
    /**
     * Get the default Yingbian effect of the card
     *
     * 获取此牌的默认应变效果
     */
    defaultYingbianEffect(card: any): any;
    /**
     * 优先度判断
     * @param { string } skill
     * @returns { number }
     */
    priority(skill: string): number;
    /**
     * 新装备栏相关
     *
     * 获取一张装备牌实际占用的装备栏(君曹操六龙)
     *
     * 用法同{@link subtype}，返回数组
     *
     * @param { string | Card | VCard | CardBaseUIData } obj
     * @param { false | Player } [player]
     * @returns { string[] }
     */
    subtypes(obj: string | Card | VCard | CardBaseUIData, player?: false | Player): string[];
    /**
     * @param {string} chinese
     * @param {boolean|undefined} withTone
     * @returns { any[] }
     */
    pinyin(chinese: string, withTone: boolean | undefined): any[];
    /**
     * @param { string } str
     * @returns { string }
     */
    yunmu(str: string): string;
    /**
     * 用于将参数转换为字符串，作为缓存的key。
     */
    paramToCacheKey(...args: any[]): string;
    /**
     * @param { string } str
     * @returns { string|null }
     */
    yunjiao(str: string): string | null;
    /**
     * @param { string } skill
     * @param { Player } player
     * @returns { string[] }
     */
    skillCategoriesOf(skill: string, player: Player): string[];
    numOf(obj: any, item: any): any;
    connectNickname(): any;
    zhinangs(filter: any): any;
    /**
     * 用于获取武将的姓氏和名字
     * @param { string } str
     * @param { string|undefined } defaultSurname
     * @param { string|undefined } defaultName
     * @returns { Array }
     */
    characterSurname(str: string, defaultSurname: string | undefined, defaultName: string | undefined): any[];
    /**
     * 返回角色对应的原角色
     * @param { string } str
     * @returns { string }
     * @example
     * //以界曹操为例
     * get.sourceCharacter("re_caocao") == "caocao"
     */
    sourceCharacter(str: string): string;
    /**
     * 返回玩家是否处于幸运星状态
     * @param { Player } player
     * @returns { boolean }
     */
    isLuckyStar(player: Player): boolean;
    infoHp(hp: any): number;
    infoMaxHp(hp: any): number;
    infoHujia(hp: any): number;
    /**
     * 获取牌堆底的牌
     * @param { number } [num = 1]
     * @param { boolean } [putBack]
     * @returns { Card[] }
     */
    bottomCards(num?: number, putBack?: boolean): Card[];
    discarded(): any;
    cardOffset(): number;
    colorspan(str: any): any;
    evtprompt(next: any, str: any): void;
    autoViewAs(card: any, cards: any): import("../library/element/vcard.js").VCard;
    /**
     * @deprecated
     */
    _autoViewAs(card: any, cards: any): any;
    max(list: any, func: any, type: any): any;
    min(list: any, func: any, type: any): any;
    /**
     * @overload
     * @param { string } name
     * @returns { import("../library/element/character").Character }
     */
    character(name: string): import("../library/element/character").Character;
    /**
     * @template { 0 | 1 | 2 | 3 | 4 } T
     * @overload
     * @param { string } name
     * @param { T } num
     * @returns { Character[T] }
     */
    character<T extends 0 | 2 | 1 | 3 | 4>(name: string, num: T): Character[T];
    characterInitFilter(name: any): string[];
    /**
     * 返回武将介绍
     * @param { string } name
     * @returns { string }
     */
    characterIntro(name: string): string;
    bordergroup(info: any, raw: any): any;
    groupnature(group: any, method: any): any;
    /**
     * 判定数字的正负，若num大于0，返回1，若num小于0，返回-1，若num等于0，返回0
     * @param { number } num
     * @returns { 1 | -1 | 0 }
     */
    sgn(num: number): 1 | -1 | 0;
    /**
     * 生成随机数，若存在num2，返回num到num2之间的随机数，否则返回0到num之间的随机数
     * @param { number } num
     * @param { number } [num2]
     * @returns { number }
     */
    rand(num: number, num2?: number): number;
    sort(arr: any, method: any, arg: any): any;
    /**
     * 返回一个按座次排序的玩家数组
     * @param { Player[] } arr
     * @param { Player } target
     * @returns { Player[] }
     */
    sortSeat(arr: Player[], target: Player): Player[];
    /**
     * @param { (zip: JSZip) => any } callback
     */
    zip(callback: (zip: JSZip) => any): void;
    delayx(num: any, max: any): number;
    prompt(skill: any, target: any, player: any): string;
    prompt2(skill: any, target: any, player: any, ...args: any[]): any;
    url(master: any): string;
    round(num: any, f: any): number;
    playerNumber(): number;
    benchmark(func1: any, func2: any, iteration: any, arg: any): number;
    /**
     * @param {any} obj
     * @param { number } [level = 0]
     */
    stringify(obj: any, level?: number): any;
    /**
     * 深拷贝函数（虽然只处理了部分情况）
     *
     * 除了普通的Object和NullObject，均不考虑自行赋值的数据，但会原样将Symbol复制过去
     *
     * @template T
     * @param {T} obj - 要复制的对象，若不是对象则直接返回原值
     * @param {boolean} [copyKeyDeep = false] - 是否深复制`Map`的`key`
     * @param {WeakMap<object, unknown>} [map] - 拷贝用的临时存储，用于处理循环引用（请勿自行赋值）
     * @returns {T} - 深拷贝后的对象，若传入值不是对象则为传入值
     */
    copy<T_1>(obj: T_1, copyKeyDeep?: boolean, map?: WeakMap<object, unknown>): T_1;
    plainTextMap: Map<any, any>;
    /**
     * 用于将HTML代码转换为纯文本。
     * @param { string } htmlContent
     * @returns { string }
     */
    plainText(htmlContent: string): string;
    inpilefull(type: any): {
        name: any;
        suit: any;
        number: any;
        nature: any;
    }[];
    inpile(type: any, filter: any): any[];
    inpile2(type: any): any[];
    typeCard(type: any, filter: any): string[];
    libCard(filter: any): string[];
    ip(): string;
    modetrans(config: any, server: any): string;
    charactersOL(func: any): number[];
    trimip(str: any): any;
    mode(): any;
    idDialog(id: any): import("noname-typings/nonameModules/noname/library/element/dialog.js").Dialog;
    arenaState(): {
        number: string;
        players: {};
        mode: any;
        dying: any[];
        servermode: any;
        roomId: any;
        over: boolean;
        inpile: any[];
        inpile_nature: any[];
        renku: any[];
    };
    skillState(player: any): {
        global: string[];
    };
    id(): string;
    zhu(player: any, skill: any, group: any): any;
    config(item: any, mode: any): any;
    coinCoeff(list: any): number;
    rank(name: any, num: any): number | "s" | "x" | "c" | "d" | "b" | "a" | "ap" | "am" | "bp" | "bm" | "sp";
    skillRank(skill: any, type: any, grouped: any): number;
    targetsInfo(targets: any): any[];
    infoTargets(infos: any): import("noname-typings/nonameModules/noname/library/element/player.js").Player[];
    cardInfo(card: any): any[];
    cardsInfo(cards?: any[]): any[][];
    infoCard(info: any): import("../library/element/card.js").Card;
    infoCards(infos: any): import("../library/element/card.js").Card[];
    cardInfoOL(card: any): string;
    infoCardOL(info: any): any;
    cardsInfoOL(cards: any): string[];
    infoCardsOL(infos: any): any[];
    playerInfoOL(player: any): string;
    infoPlayerOL(info: any): any;
    playersInfoOL(players: any): string[];
    infoPlayersOL(infos: any): any[];
    /**
     * ```plain
     * 测试一段代码是否为函数参数列表
     * ```
     *
     * @param {string} paramstr
     * @returns { boolean }
     */
    isFunctionParam(paramstr: string): boolean;
    /**
     * ```plain
     * 测试一段代码是否为函数体
     * ```
     *
     * @typedef {"async"|"generator"|"agenerator"|"any"|null} FunctionType
     *
     * @param {string} code
     * @param {FunctionType} type
     * @returns {boolean}
     */
    isFunctionBody(code: string, type?: "async" | "generator" | "agenerator" | "any"): boolean;
    /**
     * ```plain
     * 清洗函数体代码
     * ```
     *
     * @param {string} str
     * @param {boolean} log
     * @returns {string}
     */
    pureFunctionStr(str: string, log?: boolean): string;
    funcInfoOL(func: any): any;
    infoFuncOL(info: any): any;
    eventInfoOL(item: any, level: any, noMore: any): string;
    /**
     * @param {string} item
     */
    infoEventOL(item: string): string | import("../library/element/gameEvent.js").GameEvent;
    stringifiedResult(item: any, level: any, nomore: any): any;
    parsedResult(item: any): any;
    verticalStr(str: any, sp: any): string;
    numStr(num: any, method: any): any;
    rawName(str: any): any;
    /**
     * 作用修改：只读前缀 不读_ab
     */
    rawName2(str: any): any;
    slimNameHorizontal(str: any): any;
    /**
     * @param {string} prefix
     * @param {string} name
     * @returns {string}
     */
    prefixSpan(prefix: string, name: string): string;
    slimName(str: any): string;
    time(): number;
    utc(): number;
    evtDistance(e1: any, e2: any): number;
    xyDistance(from: any, to: any): number;
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(): void;
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: string): 'position' | 'natures' | 'nature';
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: Player[]): 'players';
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: Card[]): 'cards';
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: [number, number]): 'select';
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: [number, number, number, number]): 'divposition';
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: Button): 'button';
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: Card): 'card';
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: Player): 'player';
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: Dialog): 'dialog';
    /**
     * @overload
     * @returns { void }
     *
     * @overload
     * @param { string } obj
     * @returns { 'position' | 'natures' | 'nature' }
     *
     * @overload
     * @param { Player[] } obj
     * @returns { 'players' }
     *
     * @overload
     * @param { Card[] } obj
     * @returns { 'cards' }
     *
     * @overload
     * @param { [number, number] } obj
     * @returns { 'select' }
     *
     * @overload
     * @param { [number, number, number, number] } obj
     * @returns { 'divposition' }
     *
     * @overload
     * @param { Button } obj
     * @returns { 'button' }
     *
     * @overload
     * @param { Card } obj
     * @returns { 'card' }
     *
     * @overload
     * @param { Player } obj
     * @returns { 'player' }
     *
     * @overload
     * @param { Dialog } obj
     * @returns { 'dialog' }
     *
     * @overload
     * @param { GameEvent | GameEventPromise } obj
     * @returns { 'event' }
     */
    itemtype(obj: GameEvent | GameEventPromise): 'event';
    equipNum(card: any): number;
    /**
     * 返回对象的实际类型
     * @overload
     * @param { Array } obj
     * @returns { 'array' }
     *
     * @overload
     * @param { Object } obj
     * @returns { 'object' }
     *
     * @overload
     * @param { HTMLDivElement } obj
     * @returns { 'div' }
     *
     * @overload
     * @param { HTMLTableElement } obj
     * @returns { 'table' }
     *
     * @overload
     * @param { HTMLTableRowElement } obj
     * @returns { 'tr' }
     *
     * @overload
     * @param { HTMLTableCellElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { HTMLBodyElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { DocumentFragment } obj
     * @returns { 'fragment' }
     */
    objtype(obj: any[]): 'array';
    /**
     * 返回对象的实际类型
     * @overload
     * @param { Array } obj
     * @returns { 'array' }
     *
     * @overload
     * @param { Object } obj
     * @returns { 'object' }
     *
     * @overload
     * @param { HTMLDivElement } obj
     * @returns { 'div' }
     *
     * @overload
     * @param { HTMLTableElement } obj
     * @returns { 'table' }
     *
     * @overload
     * @param { HTMLTableRowElement } obj
     * @returns { 'tr' }
     *
     * @overload
     * @param { HTMLTableCellElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { HTMLBodyElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { DocumentFragment } obj
     * @returns { 'fragment' }
     */
    objtype(obj: any): 'object';
    /**
     * 返回对象的实际类型
     * @overload
     * @param { Array } obj
     * @returns { 'array' }
     *
     * @overload
     * @param { Object } obj
     * @returns { 'object' }
     *
     * @overload
     * @param { HTMLDivElement } obj
     * @returns { 'div' }
     *
     * @overload
     * @param { HTMLTableElement } obj
     * @returns { 'table' }
     *
     * @overload
     * @param { HTMLTableRowElement } obj
     * @returns { 'tr' }
     *
     * @overload
     * @param { HTMLTableCellElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { HTMLBodyElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { DocumentFragment } obj
     * @returns { 'fragment' }
     */
    objtype(obj: HTMLDivElement): 'div';
    /**
     * 返回对象的实际类型
     * @overload
     * @param { Array } obj
     * @returns { 'array' }
     *
     * @overload
     * @param { Object } obj
     * @returns { 'object' }
     *
     * @overload
     * @param { HTMLDivElement } obj
     * @returns { 'div' }
     *
     * @overload
     * @param { HTMLTableElement } obj
     * @returns { 'table' }
     *
     * @overload
     * @param { HTMLTableRowElement } obj
     * @returns { 'tr' }
     *
     * @overload
     * @param { HTMLTableCellElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { HTMLBodyElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { DocumentFragment } obj
     * @returns { 'fragment' }
     */
    objtype(obj: HTMLTableElement): 'table';
    /**
     * 返回对象的实际类型
     * @overload
     * @param { Array } obj
     * @returns { 'array' }
     *
     * @overload
     * @param { Object } obj
     * @returns { 'object' }
     *
     * @overload
     * @param { HTMLDivElement } obj
     * @returns { 'div' }
     *
     * @overload
     * @param { HTMLTableElement } obj
     * @returns { 'table' }
     *
     * @overload
     * @param { HTMLTableRowElement } obj
     * @returns { 'tr' }
     *
     * @overload
     * @param { HTMLTableCellElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { HTMLBodyElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { DocumentFragment } obj
     * @returns { 'fragment' }
     */
    objtype(obj: HTMLTableRowElement): 'tr';
    /**
     * 返回对象的实际类型
     * @overload
     * @param { Array } obj
     * @returns { 'array' }
     *
     * @overload
     * @param { Object } obj
     * @returns { 'object' }
     *
     * @overload
     * @param { HTMLDivElement } obj
     * @returns { 'div' }
     *
     * @overload
     * @param { HTMLTableElement } obj
     * @returns { 'table' }
     *
     * @overload
     * @param { HTMLTableRowElement } obj
     * @returns { 'tr' }
     *
     * @overload
     * @param { HTMLTableCellElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { HTMLBodyElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { DocumentFragment } obj
     * @returns { 'fragment' }
     */
    objtype(obj: HTMLTableCellElement): 'td';
    /**
     * 返回对象的实际类型
     * @overload
     * @param { Array } obj
     * @returns { 'array' }
     *
     * @overload
     * @param { Object } obj
     * @returns { 'object' }
     *
     * @overload
     * @param { HTMLDivElement } obj
     * @returns { 'div' }
     *
     * @overload
     * @param { HTMLTableElement } obj
     * @returns { 'table' }
     *
     * @overload
     * @param { HTMLTableRowElement } obj
     * @returns { 'tr' }
     *
     * @overload
     * @param { HTMLTableCellElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { HTMLBodyElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { DocumentFragment } obj
     * @returns { 'fragment' }
     */
    objtype(obj: HTMLBodyElement): 'td';
    /**
     * 返回对象的实际类型
     * @overload
     * @param { Array } obj
     * @returns { 'array' }
     *
     * @overload
     * @param { Object } obj
     * @returns { 'object' }
     *
     * @overload
     * @param { HTMLDivElement } obj
     * @returns { 'div' }
     *
     * @overload
     * @param { HTMLTableElement } obj
     * @returns { 'table' }
     *
     * @overload
     * @param { HTMLTableRowElement } obj
     * @returns { 'tr' }
     *
     * @overload
     * @param { HTMLTableCellElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { HTMLBodyElement } obj
     * @returns { 'td' }
     *
     * @overload
     * @param { DocumentFragment } obj
     * @returns { 'fragment' }
     */
    objtype(obj: DocumentFragment): 'fragment';
    /**
     * 返回牌的类型
     * @overload
     * @param { string } obj
     * @param { 'trick' } [method]
     * @param { Player } [player]
     * @returns { string }
     *
     * @overload
     * @param { Card } obj
     * @param { 'trick' } [method]
     * @param { Player } [player]
     * @returns { string }
     */
    type(obj: string, method?: 'trick', player?: Player): string;
    /**
     * 返回牌的类型
     * @overload
     * @param { string } obj
     * @param { 'trick' } [method]
     * @param { Player } [player]
     * @returns { string }
     *
     * @overload
     * @param { Card } obj
     * @param { 'trick' } [method]
     * @param { Player } [player]
     * @returns { string }
     */
    type(obj: Card, method?: 'trick', player?: Player): string;
    type2(card: any, player: any): string;
    /**
     * 返回牌的副类型
     * @param { string | Card | VCard | CardBaseUIData } obj
     * @param { false | Player } [player]
     * @returns { string | undefined }
     */
    subtype(obj: string | Card | VCard | CardBaseUIData, player?: false | Player): string | undefined;
    equiptype(card: any, player: any): number;
    /**
     * 返回牌的牌名
     * @param { Card | VCard | CardBaseUIData } card
     * @param { false | Player } [player]
     * @returns { string | undefined }
     */
    name(card: Card | VCard | CardBaseUIData, player?: false | Player): string | undefined;
    /**
     * 返回牌的花色
     * @param {Card | VCard | Card[] | VCard[]} card
     * @param {false | Player} [player]
     * @returns {string | undefined }
     */
    suit(card: Card | VCard | Card[] | VCard[], player?: false | Player): string | undefined;
    /**
     * 返回牌的颜色
     * @param {Card | VCard | Card[] | VCard[]} card
     * @param {false | Player} [player]
     * @returns {string | undefined }
     */
    color(card: Card | VCard | Card[] | VCard[], player?: false | Player): string | undefined;
    /**
     * 返回牌的点数
     * @param {Card | VCard} card
     * @param {false | Player} [player]
     * @returns {number | undefined | "unsure" | null}
     */
    number(card: Card | VCard, player?: false | Player): number | undefined | "unsure" | null;
    /**
     * 返回一张杀的属性。如有多种属性则用`lib.natureSeparator`分割开来。例：火雷【杀】的返回值为`fire|thunder`
     * @param {string | string[] | Card | VCard} card
     * @param {false | Player} [player]
     * @returns {string}
     */
    nature(card: string | string[] | Card | VCard, player?: false | Player): string;
    /**
     * 返回包含所有属性的数组
     * @param {string[] | string} card
     * @param {false | Player} [player]
     * @returns {string[]}
     */
    natureList(card: string[] | string, player?: false | Player): string[];
    /**
     * 返回牌堆顶的牌
     * @param { number } [num = 1]
     * @param { boolean } [putBack]
     * @returns
     */
    cards(num?: number, putBack?: boolean): ChildNode | ChildNode[];
    judge(card: any): any;
    judge2(card: any): any;
    distance(from: any, to: any, method: any): number;
    /**
     * @overload
     * @param { string } item
     * @returns { Skill }
     */
    info(item: string): Skill;
    /**
     * @overload
     * @param { Card | VCard | CardBaseUIData } item
     * @param { Player | false } [player]
     * @returns { any }
     */
    info(item: Card | VCard | CardBaseUIData, player?: Player | false): any;
    /**
     * @param { number | Select | (()=>Select) } [select]
     * @returns { Select }
     */
    select(select?: number | Select | (() => Select)): Select;
    card(original: any): any;
    /**
     * @overload
     * @returns {GameEvent}
     */
    event(): GameEvent;
    /**
     * @template { keyof GameEvent } T
     * @overload
     * @param {T} key
     * @returns {GameEvent[T]}
     */
    event<T_2 extends keyof import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent>(key: T_2): import("noname-typings/nonameModules/noname/library/element/gameEvent.js").GameEvent[T_2];
    player(): import("noname-typings/nonameModules/noname/library/element/player.js").Player;
    /**
     * 返回玩家的数组
     * @param {*} [sort]
     * @param { boolean } [dead] 包含死人
     * @param { boolean } [out] 包含移除游戏的人
     * @returns { Player[] }
     */
    players(sort?: any, dead?: boolean, out?: boolean): Player[];
    /**
     * 返回指定角色所有的id，用于统一双将和单将的检查
     *
     * @author tangXins
     * @param {Player} player
     * @returns {string[]}
     */
    nameList(player: Player): string[];
    position(card: any, ordering: any): number | "h" | "e" | "j" | "s" | "x" | "c" | "d" | "o";
    /**
     *
     * @param { string } str
     * @param { Player } [player]
     * @returns { string }
     */
    skillTranslation(str: string, player?: Player): string;
    skillInfoTranslation(name: any, player: any): any;
    /**
     * @returns {string}
     */
    translation(str: any, arg: any): string;
    menuZoom(): any;
    /**
     * 返回数字在扑克牌中的表示形式
     * @param { number } num
     * @returns { string }
     */
    strNumber(num: number): string;
    /**
     * 将阿拉伯数字转换为中文的表达形式
     * @param { number } num
     * @param { boolean } [ordinal]
     * @returns { string }
     */
    cnNumber(num: number, ordinal?: boolean): string;
    /**
     * 遍历子元素
     * @param {HTMLElement} node
     * @returns {Iterable<HTMLElement>} 迭代器
     */
    iterableChildNodes(node: HTMLElement, ...args: any[]): Iterable<HTMLElement>;
    /**
     * 返回可以选择的按钮
     * @param {((a: Button, b: Button) => number)} [sort] 排序函数
     * @returns { Button[] }
     */
    selectableButtons(sort?: (a: Button, b: Button) => number): Button[];
    /**
     * 返回可以选择的牌
     * @param {((a: Card, b: Card) => number)} [sort] 排序函数
     * @returns { Card[] }
     */
    selectableCards(sort?: (a: Card, b: Card) => number): Card[];
    /**
     * @returns { string[] } 技能名数组
     */
    skills(): string[];
    gainableSkills(func: any, player: any): any[];
    gainableSkillsName(name: any, func: any): any[];
    gainableCharacters(func: any): string[];
    /**
     * 返回可以选择的目标
     * @param {((a: Player, b: Player) => number)} [sort] 排序函数
     * @returns { Player[] }
     */
    selectableTargets(sort?: (a: Player, b: Player) => number): Player[];
    filter(filter: any, i: any): any;
    /**
     * 返回玩家本回合牌的使用次数
     * @overload
     * @param { true } card
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     *
     * @overload
     * @param { Card } card
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     *
     * @overload
     * @param { string } card 牌名
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     */
    cardCount(card: true, player?: Player): number;
    /**
     * 返回玩家本回合牌的使用次数
     * @overload
     * @param { true } card
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     *
     * @overload
     * @param { Card } card
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     *
     * @overload
     * @param { string } card 牌名
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     */
    cardCount(card: Card, player?: Player): number;
    /**
     * 返回玩家本回合牌的使用次数
     * @overload
     * @param { true } card
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     *
     * @overload
     * @param { Card } card
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     *
     * @overload
     * @param { string } card 牌名
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     */
    cardCount(card: string, player?: Player): number;
    /**
     * 返回玩家本回合技能的使用次数
     * @param { string } skill 技能ID
     * @param { Player } [player = _status.event.player]
     * @returns { number }
     */
    skillCount(skill: string, player?: Player): number;
    /**
     * 返回牌的所有者
     * @param { Card } card
     * @param { 'judge' } [method]
     * @returns { Player | undefined }
     */
    owner(card: Card, method?: 'judge'): Player | undefined;
    noSelected(): boolean;
    population(identity: any): number;
    totalPopulation(identity: any): number;
    /**
     * @param { Card | VCard } item
     * @param { string } tag
     */
    cardtag(item: Card | VCard, tag: string): any;
    tag(item: any, tag: any, item2: any, bool: any): any;
    sortCard(sort: any): (card: any) => any;
    difficulty(): 2 | 1 | 3;
    cardPile(name: any, create: any): any;
    cardPile2(name: any): any;
    discardPile(name: any): any;
    aiStrategy(): 2 | 1 | 3 | 4 | 5 | 6;
    skillintro(name: any, learn: any, learn2: any): string;
    intro(name: any): string;
    storageintro(type: any, content: any, player: any, dialog: any, skill: any): any;
    nodeintro(node: any, simple: any, evt: any): import("../library/element/dialog.js").Dialog;
    linkintro(dialog: any, content: any, player: any): void;
    groups(): string[];
    types(): any[];
    links(buttons: any): any[];
    threaten(target: any, player: any, hp: any): number;
    condition(player: any): any;
    attitude(from: any, to: any, ...args: any[]): any;
    sgnAttitude(...args: any[]): 0 | 1 | -1;
    useful_raw(card: any, player: any): any;
    useful(card: any, player: any): any;
    unuseful(card: any): number;
    unuseful2(card: any): number;
    unuseful3(card: any): number;
    value(card: any, player: any, method: any): any;
    equipResult(player: any, target: any, name: any): number;
    equipValue(card: any, player: any): number;
    equipValueNumber(card: any): number;
    disvalue(card: any, player: any): number;
    disvalue2(card: any, player: any): number;
    skillthreaten(skill: any, player: any, target: any): number | void;
    cacheOrder(item: any): number;
    /**
     * @returns { number }
     */
    order(item: any, player?: import("noname-typings/nonameModules/noname/library/element/player.js").Player): number;
    result(item: any, skill: any): any;
    cacheEffectUse(target: any, card: any, player: any, player2: any, isLink: any): number;
    effect_use(target: any, card: any, player: any, player2: any, isLink: any): number;
    cacheEffect(target: any, card: any, player: any, player2: any, isLink: any): number;
    effect(target: any, card: any, player: any, player2: any, isLink: any): number;
    damageEffect(target: any, player: any, viewer: any, nature: any): any;
    /**
     *
     * @param {any} source 如果参数是function，执行此函数并返回结果，传参为此方法剩余的参数。如果参数不是function，直接返回结果。
     * @returns 返回的结果
     */
    dynamicVariable(source: any, ...args: any[]): any;
    recoverEffect(target: any, player: any, viewer: any): number;
    buttonValue(button: any): number;
    attitude2(to: any): any;
    /**
     * Get the number of a skill's item's length
     *
     * 获取一个转换技的转换项数
     * @param {string} skill 技能名
     * @param {Player} player
     * @returns {number}
     */
    zhuanhuanItemNum(skill: string, player: Player): number;
    /**
     * 将URL转换成相对于无名杀根目录的路径
     *
     * ---
     *
     * 在无名杀正式过渡到http协议前，无名杀的路径在不同端拥有不同的情况:
     * - 网页端: 除了`db`外，没任何可能
     * - 电脑端(electron): 和`node.js`保持一致
     * - 手机端(cordova): 需要使用`cordova`的`cordova-plugin-file`插件实现，有较为严格的限制
     *
     * 故之前的路径API基本如下:
     * - 网页端完全不考虑
     * - 使用`lib.assetURL + <relative path>`的形式，其中`lib.assetURL`的值为:
     *   - 在网页端和电脑端为空字符串
     *   - 在手机端为无名杀包的`externalApplicationStorageDirectory`里（也就是`Android/data/<app-id>/`）
     *
     * 现在无名杀即将踏入http协议，也早已用上了ES Module，故活用`import.meta.url`来提供路径理应被重视，`URL`也理应成为路径的主要构成
     *
     * 然而由于之前的API混乱且针对多端有不同的情况，故需要提供函数，来方便提供调用旧API的情况
     *
     * @param {URL} url - 需要转换的URL对象
     * @param {boolean} [addAssetURL=false] - 是否需要在函数内加上`lib.assetURL`，
     * 默认为`false`，当为`true`时会在协议为`file`时增加`lib.assetURL`
     * @returns {string}
     *
     * @example
     * // 当前文件以"noname/get/index.js"举例
     * let parsedPath = get.relativePath(import.meta.url, true);
     * console.assert(parsedPath == `${lib.assetURL}noname/get/index.js`);
     */
    relativePath(url: URL, addAssetURL?: boolean): string;
    /**
     * 通过`FileReader`，将Blob转换成对应内容的[Data URL](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
     *
     * @async
     * @param {Blob} blob - 需要转换的内容
     * @returns {Promise<URL>} 对应Blob内容的
     *
     * @example
     * let text = "Hello, World!";
     * console.assert(btoa(text) === "SGVsbG8sIFdvcmxkIQ==");
     *
     * let blob = new Blob([text], { type: "text/plain" });
     * let url = await get.dataUrlAsync(blob);
     * console.assert(url.href === "data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==");
     */
    dataUrlAsync(blob: Blob): Promise<URL>;
    /**
     * 通过`Get#blobFromUrl`读取data URL的内容，转换成Blob后返回生成的blob URL
     *
     * > 实际上所有的URL都能通过此方法读取
     *
     * 该方法具有缓存，同一data URL仅会返回同一blob URL
     *
     * 该方法相比`get.objectURL`，会保留文件的类型
     *
     * ---
     *
     * > 其实我不确定`get.objectURL`是否有实际意义上的需求，我也不确定`get.objectURL`不保留类型是否是刚需，但既然原先就存在，那么就不要动
     *
     * @async
     * @param {string | URL} dataUrl - 需要转换的data URL
     * @returns {Promise<URL>}
     */
    objectUrlAsync(dataUrl: string | URL): Promise<URL>;
    /**
     * 读取给定的URL，将其中的内容转换成Blob
     *
     * 在File协议下通过无名杀自带的文件处理函数读取内容，其他协议通过`fetch`读取内容
     *
     * @async
     * @param {string | URL} url - 需要读取的URL
     * @returns {Promise<Blob>}
     */
    blobFromUrl(url: string | URL): Promise<Blob>;
    #private;
}
export let get: Get;
export function setGet(instance?: InstanceType<typeof Get>): void;
import { GetCompatible } from "./compatible.js";
import { Is } from "./is.js";
import { Promises } from "./promises.js";
import { Audio } from "./audio.js";
export { Is, Promises };
