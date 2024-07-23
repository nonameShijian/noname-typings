export class UI {
    updates: any[];
    thrown: any[];
    touchlines: any[];
    todiscard: {};
    /**
     * @type { HTMLStyleElement[] }
     */
    playerPositions: HTMLStyleElement[];
    create: Create;
    click: Click;
    selected: {
        /**
         * @type { Button[] }
         */
        buttons: Button[];
        /**
         * @type { Card[] }
         */
        cards: Card[];
        /**
         * @type { Player[] }
         */
        targets: Player[];
    };
    /**
     * @type { Dialog[] }
     */
    dialogs: Dialog[];
    /**
     * @type { Dialog }
     */
    dialog: Dialog;
    /**
     * @type { HTMLDivElement }
     */
    arena: HTMLDivElement;
    /**
     * @type { Control[] }
     */
    controls: Control[];
    /**
     * @type { Control }
     */
    control: Control;
    /**
     * @type { Control | undefined }
     */
    confirm: Control | undefined;
    /**
     * @type { Control | undefined }
     */
    skills: Control | undefined;
    /**
     * @type { Control | undefined }
     */
    skills1: Control | undefined;
    /**
     * @type { Control | undefined }
     */
    skills2: Control | undefined;
    /**
     * @type { Control | undefined }
     */
    skills3: Control | undefined;
    /**
     * @type { HTMLDivElement }
     */
    window: HTMLDivElement;
    /**
     * @type { HTMLDivElement }
     */
    pause: HTMLDivElement;
    /**
     * @type { HTMLAudioElement }
     */
    backgroundMusic: HTMLAudioElement;
    /**
     * @type { HTMLDivElement }
     */
    special: HTMLDivElement;
    /**
     * @type { HTMLDivElement }
     */
    fakeme: HTMLDivElement;
    /**
     * @type { HTMLDivElement }
     */
    chess: HTMLDivElement;
    /**
     * 手动在菜单栏中添加一个武将包的ui
     * @type { ((packName: string) => void)[] }
     */
    updateCharacterPackMenu: ((packName: string) => void)[];
    /**
     * 手动在菜单栏中添加一个卡牌包的ui
     * @type { ((packName: string) => void)[] }
     */
    updateCardPackMenu: ((packName: string) => void)[];
    /**
     * @type { HTMLDivElement } 挑战模式下正在操作的角色
     */
    mebg: HTMLDivElement;
    /**
     * @type { Function | undefined }
     */
    updateUpdate: Function | undefined;
    /**
     * @type {HTMLDivElement}
     */
    commandnode: HTMLDivElement;
    /**
     * @type {() => void}
     */
    updateVideoMenu: () => void;
    /**
     * @type {HTMLDivElement}
     */
    menuContainer: HTMLDivElement;
    /**
     * @type {HTMLDivElement}
     */
    auto: HTMLDivElement;
    /**
     * @type {HTMLDivElement}
     */
    wuxie: HTMLDivElement;
    /**
     * @type {HTMLDivElement}
     */
    tempnowuxie: HTMLDivElement;
    /**
     * @type {HTMLDivElement[]}
     */
    toastQueue: HTMLDivElement[];
    /**
     * @type {HTMLDivElement}
     */
    cardPile: HTMLDivElement;
    refresh(node: any): void;
    clear(): void;
    updatec(): void;
    updatex(...args: any[]): void;
    updatexr(): void;
    updatejm(player: any, nodes: any, start: any, inv: any): void;
    updatem(player: any): void;
    updatej(player: any): void;
    updatehl(): void;
    updateh(compute: any): void;
    updatehx(node: any): void;
    updated(): void;
    updatez(): void;
    update(): void;
    recycle(node: any, key: any): any;
    /**
     * @author curpond
     * @author Tipx-L
     * @param {number} [numberOfPlayers]
     */
    updateConnectPlayerPositions(numberOfPlayers?: number): void;
    /**
     * @author curpond
     * @author Tipx-L
     * @param {number} [numberOfPlayers]
     */
    updatePlayerPositions(numberOfPlayers?: number): void;
    updateRoundNumber(roundNumber: any, cardPileNumber: any): void;
}
export let ui: UI;
export function setUI(instance?: InstanceType<typeof UI>): void;
import { Create } from "./create/index.js";
import { Click } from "./click/index.js";
