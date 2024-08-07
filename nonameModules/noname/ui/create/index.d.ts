export class Create {
    /**
     * @type {(video: Videos, before: boolean) => void}
     */
    videoNode: (video: Videos, before: boolean) => void;
    /**
     * 创建身份牌实例
     */
    identityCard(identity: any, position: any, noclick: any): import("../../library/element/card.js").Card;
    /**
     * 让卡牌旋转
     */
    cardSpinning(card: any): void;
    /**
     * 旋转的身份牌！
     */
    spinningIdentityCard(identity: any, dialog: any): void;
    /**
     * 创建codemirror编辑器
     * @param {HTMLDivElement} container
     * @param {Function} saveInput
     */
    editor(container: HTMLDivElement, saveInput: Function): HTMLDivElement;
    /**
     * 弹出提示。
     * @param {string} message 弹出的文字
     */
    toast(message: string): HTMLDivElement;
    showNextToast(): HTMLDivElement;
    cardTempName(card: any, applyNode: any): any;
    connectRooms(list: any): void;
    rarity(button: any): void;
    div(...args: any[]): HTMLDivElement;
    filediv(...args: any[]): any;
    node(...args: any[]): any;
    iframe(src: any): void;
    identitycircle(list: any, target: any): void;
    chat(): void;
    exit(): void;
    connecting(bool: any): void;
    roomInfo(): void;
    templayer(time: any): void;
    selectlist(list: any, init: any, position: any, onchange: any): HTMLSelectElement;
    /** 创建菜单 */
    menu: typeof menu;
    /** 创建“开始”菜单 */
    startMenu: (connectMenu: any) => HTMLDivElement;
    /** 创建“选项”菜单 */
    optionsMenu: (connectMenu: any) => void;
    /** 创建“武将”菜单 */
    characterPackMenu: (connectMenu: any) => (packName: string) => void;
    /** 创建“卡牌”菜单 */
    cardPackMenu: (connectMenu: any) => (packName: string) => void;
    /** 创建“扩展”菜单 */
    extensionMenu: (connectMenu: any) => void;
    /** 创建“其他”菜单 */
    otherMenu: (connectMenu: boolean) => void;
    statictable(...args: any[]): HTMLTableElement;
    giveup(): void;
    groupControl(dialog: any): import("../../library/element/control.js").Control;
    cardDialog(...args: any[]): any;
    characterDialog2(filter: any): import("../../library/element/dialog.js").Dialog;
    characterDialog(...args: any[]): import("../../library/element/dialog.js").Dialog;
    dialog(...args: any[]): import("../../library/element/dialog.js").Dialog;
    line2(...args: any[]): any;
    line(...args: any[]): HTMLDivElement;
    switcher(name: any, current: any, current2: any, ...args: any[]): HTMLDivElement;
    caption(str: any, position: any): HTMLDivElement;
    control(...args: any[]): import("../../library/element/control.js").Control;
    confirm(str: any, func: any): void;
    skills(skills: any): import("noname-typings/nonameModules/noname/library/element/control.js").Control;
    skills2(skills: any): import("noname-typings/nonameModules/noname/library/element/control.js").Control;
    skills3(skills: any): import("noname-typings/nonameModules/noname/library/element/control.js").Control;
    arena(): void;
    system(str: any, func: any, right: any, before: any): HTMLDivElement;
    pause(): HTMLDivElement;
    prebutton(item: any, type: any, position: any, noclick: any): HTMLDivElement;
    buttonPresets: {
        /**
         * @returns { import("../library/index.js").Button }
         */
        tdnodes: (item: any, type: any, position: any, noclick: any, node: any) => any;
        /**
         * @returns { import("../library/index.js").Button }
         */
        blank: (item: any, type: any, position: any, noclick: any, node: any) => any;
        /**
         * @returns { import("../library/index.js").Button }
         */
        card: (item: any, type: any, position: any, noclick: any, node: any) => any;
        /**
         * @returns { import("../library/index.js").Button }
         */
        vcard: (item: any, type: any, position: any, noclick: any, node: any) => any;
        /**
         * @returns { import("../library/index.js").Button }
         */
        character: (item: any, type: any, position: any, noclick: any, node: any) => any;
        /**
         * @returns { import("../library/index.js").Button }
         */
        characterx: (item: any, type: any, position: any, noclick: any, node: any) => any;
        /**
         * @returns { import("../library/index.js").Button }
         */
        player: (item: any, type: any, position: any, noclick: any, node: any) => any;
    };
    button(item: any, type: any, position: any, noClick: any, button: any): import("../../library/element/button.js").Button;
    buttons(list: any, type: any, position: any, noclick: any, zoom: any): HTMLDivElement[];
    textbuttons(list: any, dialog: any, noclick: any): void;
    player(position: any, noclick: any): import("../../library/element/player.js").Player;
    connectPlayers(ip: any): void;
    players(numberOfPlayers: any): import("noname-typings/nonameModules/noname/library/element/player.js").Player[];
    me(hasme: any): void;
    card(position: any, info: any, noclick: any): import("../../library/element/card.js").Card;
    cardsAsync(...args: any[]): void;
    cards(ordered: any): void;
}
import { menu } from "./menu/index.js";
