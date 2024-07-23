export class Card extends HTMLDivElement {
    /**
     * @param {HTMLDivElement|DocumentFragment} [position]
     */
    constructor(position?: HTMLDivElement | DocumentFragment);
    /**
     * @param {'noclick'} [info]
     * @param {true} [noclick]
     */
    build(info?: 'noclick', noclick?: true): this;
    buildEventListener(info: any): void;
    buildProperty(): void;
    /**
     * @type { SMap<any> }
     */
    storage: SMap<any>;
    /**
     * @type { any[] }
     */
    vanishtag: any[];
    /**
     * @type { any[] }
     */
    gaintag: any[];
    /**
     * @type { any[] }
     */
    _uncheck: any[];
    buildNode(): void;
    /** @type { SMap<HTMLDivElement> } */
    node: SMap<HTMLDivElement>;
    buildIntro(noclick: any): void;
    /**
     * @type { string }
     */
    name: string;
    /**
     * @type { boolean }
     */
    isCard: boolean;
    selfDestroy(event: any): void;
    willBeDestroyed(targetPosition: any, player: any, event: any): any;
    hasNature(nature: any, player: any): boolean;
    addNature(nature: any): string;
    nature: string;
    removeNature(nature: any): string;
    addGaintag(gaintag: any): void;
    removeGaintag(tag: any): void;
    hasGaintag(tag: any): boolean;
    /**
     * @param {[string, number, string, string] | {
     * suit: string;
     * number: number;
     * name: string;
     * nature: string;
     * }} card
     */
    init(card: [string, number, string, string] | {
        suit: string;
        number: number;
        name: string;
        nature: string;
    }): this;
    suit: string;
    number: number;
    destroyed: any;
    cardid: string;
    /**
     * @param {[string, number, string, string]} card
     */
    $init(card: [string, number, string, string]): this;
    updateTransform(bool: any, delay: any): void;
    aiexclude(): void;
    addKnower(player: any): void;
    _knowers: any[];
    removeKnower(player: any): void;
    clearKnowers(): void;
    isKnownBy(player: any): boolean;
    getSource(name: any): any;
    moveDelete(player: any): void;
    fixed: boolean;
    _onEndMoveDelete: any;
    moveTo(player: any): this;
    copy(...args: any[]): Card;
    clone: Card;
    uncheck(skill: any): void;
    recheck(skill: any): void;
    /**
     * 判断此牌是否包含class样式，参数有多个时，只需一个满足。
     *
     * @param {string} className
     *
     * @returns {boolean} 是否包含class
     */
    classListContains(className: string, ...args: any[]): boolean;
    /**
     * 判断此牌是否包含class样式，参数有多个时，需全部满足。
     *
     * @param {string} className
     *
     * @returns {boolean} 是否包含class
     */
    classListContainsAll(...args: any[]): boolean;
    /**
     * 返回一个键值，用于在缓存中作为键名。
     *
     * @returns {string} cacheKey
     */
    getCacheKey(): string;
    discard(bool: any): void;
    hasTag(tag: any): boolean;
    hasPosition(): boolean;
    isInPile(): boolean;
}
