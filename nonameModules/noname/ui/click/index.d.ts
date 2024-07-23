export class Click {
    /**
     * @type {() => void}
     */
    consoleMenu: () => void;
    /**
     * @type {(arg0: string) => void}
     */
    menuTab: (arg0: string) => void;
    /**
     * @type {() => void}
     */
    configMenu: () => void;
    identitycircle(): void;
    connectEvents(): void;
    connectClients(): void;
    autoskin(): void;
    skin(avatar: any, name: any, callback: any): void;
    touchpop(forced: any): void;
    exit(): void;
    shortcut(show: any): void;
    favouriteCharacter(e: any): void;
    innerHTML: string;
    buttonnameenter(): void;
    buttonnameleave(): void;
    dragtouchdialog(e: any): void;
    _dragorigin: {
        clientX: any;
        clientY: any;
    };
    _dragtransform: number[];
    _dragorigintransform: number[];
    identity(e: any): void;
    _customintro: (uiintro: any) => void;
    identity2(): void;
    roundmenu(): void;
    pausehistory(): import("../../library/element/dialog.js").Dialog;
    pauseconfig(): import("../../library/element/dialog.js").Dialog;
    cardPileButton(): import("../../library/element/dialog.js").Dialog;
    chat(): import("../../library/element/dialog.js").Dialog;
    volumn(): import("../../library/element/dialog.js").Dialog;
    volumn_background(e: any): void;
    volumn_audio(e: any): void;
    hoverpopped(): void;
    _uiintro: any;
    hoverpopped_leave(): void;
    _poppedalready: boolean;
    leavehoverpopped(): void;
    dierevive(): void;
    dieswap(): void;
    dieswap2(): void;
    touchconfirm(): void;
    windowtouchstart(e: any): void;
    windowtouchmove(e: any): void;
    windowtouchend(e: any): void;
    checkroundtranslate(translate: any): void;
    checkdialogtranslate(translate: any, dialog: any): void;
    windowmousewheel(e: any): void;
    windowmousemove(e: any): void;
    windowmousedown(e: any): void;
    cardtouchstart(e: any): void;
    _waitingfordrag: {
        clientX: any;
        clientY: any;
    };
    cardtouchmove(e: any): void;
    windowmouseup(e: any): void;
    mousemove(): void;
    mouseenter(): void;
    mouseleave(): void;
    _mouseentercreated: boolean;
    mousedown(): void;
    mouseentercancel(): void;
    hoverplayer(e: any): import("../../library/element/dialog.js").Dialog;
    longpressdown(e: any): void;
    _longpresstimeout: NodeJS.Timeout;
    _longpressevent: any;
    longpresscallback(): void;
    longpresscancel(): void;
    window(): void;
    toggle(): void;
    link: boolean;
    editor(): void;
    switcher(): void;
    choice(): void;
    button(): void;
    touchintro(): void;
    card(...args: any[]): void;
    avatar(): void;
    _doubleClicking: boolean;
    avatar2(): void;
    connectroom(e: any): void;
    player(...args: any[]): any;
    target(e: any): void;
    control2(): void;
    control(): void;
    dialogcontrol(): void;
    skill(skill: any): void;
    ok(node: any): void;
    cancel(node: any): void;
    logv(e: any): void;
    logvtimeout: any;
    logvleave(): void;
    charactercard(name: any, sourcenode: any, noedit: any, resume: any, avatar: any): void;
    intro(e: any): import("../../library/element/dialog.js").Dialog;
    intro2(): void;
    auto(...args: any[]): void;
    wuxie(): void;
    tempnowuxie(): void;
    pause(): void;
    resume(e: any): boolean;
    config(): void;
    swap(): void;
    mousewheel(evt: any): void;
    touchStart(e: any): void;
    startX: number;
    startY: number;
    dialogtouchStart(e: any): void;
    touchScroll(e: any): void;
    autoskill(bool: any, node: any): void;
    skillbutton(): void;
    autoskill2(e: any): void;
    hiddenskill(e: any): void;
    rightplayer(e: any): boolean;
    right(e: any): boolean;
}
