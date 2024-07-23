export class Is {
    /**
     * 判断是否为进攻坐骑
     * @param { Card | VCard } card
     * @param { false | Player } [player]
     * @returns { boolean }
     */
    attackingMount(card: Card | VCard, player?: false | Player): boolean;
    /**
     * 判断是否为防御坐骑
     * @param { Card | VCard } card
     * @param { false | Player } [player]
     * @returns { boolean }
     */
    defendingMount(card: Card | VCard, player?: false | Player): boolean;
    /**
     * 判断坐骑栏是否被合并
     * @returns { boolean }
     */
    mountCombined(): boolean;
    /**
     * 判断传入的参数的属性是否相同（参数可以为卡牌、卡牌信息、属性等）
     * @param {...} infos 要判断的属性列表
     * @param {boolean} every 是否判断每一个传入的属性是否完全相同而不是存在部分相同
     */
    sameNature(...args: any[]): boolean;
    /**
     * 判断传入的参数的属性是否不同（参数可以为卡牌、卡牌信息、属性等）
     * @param ...infos 要判断的属性列表
     * @param every {boolean} 是否判断每一个传入的属性是否完全不同而不是存在部分不同
     */
    differentNature(...args: any[]): boolean;
    /**
     * 判断一张牌是否为明置手牌
     * @param { Card } card
     */
    shownCard(card: Card): boolean;
    /**
     * 是否是虚拟牌
     * @param { Card | VCard } card
     */
    virtualCard(card: Card | VCard): boolean;
    /**
     * 是否是转化牌
     * @param { Card | VCard } card
     */
    convertedCard(card: Card | VCard): boolean;
    /**
     * 是否是实体牌
     * @param { Card | VCard } card
     */
    ordinaryCard(card: Card | VCard): boolean;
    /**
     * 押韵判断
     * @param { string } str1
     * @param { string } str2
     */
    yayun(str1: string, str2: string): boolean;
    /**
     * @param { string } skill 技能id
     * @param { Player } player 玩家
     * @returns
     */
    blocked(skill: string, player: Player): boolean;
    /**
     * 是否是双势力武将
     * @param { string } name
     * @param { string[] } [array]
     * @returns { boolean | string[] }
     */
    double(name: string, array?: string[]): boolean | string[];
    /**
     * Check if the card has a Yingbian condition
     *
     * 检测此牌是否具有应变条件
     * @param { Card | VCard } card
     */
    yingbianConditional(card: Card | VCard): boolean;
    /**
     * @param { Card | VCard } card
     */
    complexlyYingbianConditional(card: Card | VCard): boolean;
    /**
     * @param { Card | VCard } card
     */
    simplyYingbianConditional(card: Card | VCard): boolean;
    /**
     * Check if the card has a Yingbian effect
     *
     * 检测此牌是否具有应变效果
     *
     * @param { Card | VCard } card
     */
    yingbianEffective(card: Card | VCard): boolean;
    /**
     * @param { Card | VCard } card
     */
    yingbian(card: Card | VCard): boolean;
    /**
     * @param { string } [substring]
     */
    emoji(substring?: string): boolean;
    /**
     * @param { string } str
     */
    banWords(str: string): boolean;
    /**
     * @param { GameEventPromise } event
     */
    converted(event: GameEventPromise): boolean;
    safari(): boolean;
    /**
     * @param { (Card | VCard)[]} cards
     */
    freePosition(cards: (Card | VCard)[]): boolean;
    /**
     * @param { string } name
     * @param { boolean } item
     */
    nomenu(name: string, item: boolean): boolean;
    altered(skillName: any): boolean;
    /**
     * @param { any } obj
     * @returns { boolean }
     */
    node(obj: any): boolean;
    /**
     * @param { any } obj
     */
    div(obj: any): boolean;
    /**
     * @param { any } obj
     */
    map(obj: any): boolean;
    /**
     * @param { any } obj
     */
    set(obj: any): boolean;
    /**
     * @param { any } obj
     */
    object(obj: any): boolean;
    /**
     * @overload
     * @param { Function } func
     * @returns { false }
     */
    singleSelect(func: Function): false;
    /**
     * @overload
     * @param { number | [number, number] } func
     * @returns { boolean }
     */
    singleSelect(func: number | [number, number]): boolean;
    /**
     * @param { string | Player } name
     */
    jun(name: string | Player): boolean;
    versus(): boolean;
    changban(): boolean;
    single(): boolean;
    /**
     * @param { Player } [player]
     */
    mobileMe(player?: Player): boolean;
    newLayout(): boolean;
    phoneLayout(): boolean;
    singleHandcard(): any;
    /**
     * @param { Player } player
     */
    linked2(player: Player): boolean;
    /**
     * @param { {} } obj
     */
    empty(obj: {}): boolean;
    /**
     * @param { string } str
     */
    pos(str: string): str is "h" | "e" | "j" | "he" | "hej" | "ej" | "hj";
    /**
     * @param { string } skill
     * @param { Player } player
     * @returns
     */
    locked(skill: string, player: Player): any;
    /**
     * @param { string } skill
     * @param { Player } player
     * @returns
     */
    zhuanhuanji(skill: string, player: Player): boolean;
    /**
     * 检查指定玩家的名称的子串是否包含指定字符串
     *
     * @author tangXins
     * @param {Player} player
     * @param {string} name
     * @returns {boolean}
     */
    playerNames(player: Player, name: string): boolean;
}
