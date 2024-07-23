export class Dialog extends HTMLDivElement {
    constructor(...args: any[]);
    /** @type { HTMLDivElement } */
    contentContainer: HTMLDivElement;
    /** @type { HTMLDivElement } */
    content: HTMLDivElement;
    /** @type { HTMLDivElement } */
    bar1: HTMLDivElement;
    /** @type { HTMLDivElement } */
    bar2: HTMLDivElement;
    /** @type { Button[] } */
    buttons: Button[];
    /** @type { boolean } */
    static: boolean;
    /** @type { boolean } */
    noforcebutton: boolean;
    /** @type { boolean } */
    noopen: boolean;
    /**
     *
     * @param { string | HTMLDivElement | Card[] | Player[] } item
     * @param {*} [noclick]
     * @param { boolean } [zoom]
     */
    add(item: string | HTMLDivElement | Card[] | Player[], noclick?: any, zoom?: boolean): string | HTMLDivElement | import("noname-typings/nonameModules/noname/library/element/player.js").Player[] | import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
    forcebutton: boolean;
    /**
     * @param { string } str
     * @param { boolean } [center]
     */
    addText(str: string, center?: boolean): this;
    addSmall(item: any, noclick: any): string | HTMLDivElement | import("noname-typings/nonameModules/noname/library/element/player.js").Player[] | import("noname-typings/nonameModules/noname/library/element/card.js").Card[];
    addAuto(content: any): void;
    open(): this;
    _dragtransform: any;
    close(): this;
    /**
     * @param { string } str
     */
    setCaption(str: string): this;
}
