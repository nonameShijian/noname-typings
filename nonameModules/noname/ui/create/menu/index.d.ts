export function openMenu(node: any, e: any, onclose: any): void;
export function clickToggle(): void;
export function clickSwitcher(): void;
/**
 * @this { HTMLDivElement } menuContainer
 */
export function clickContainer(this: HTMLDivElement, connectMenu: any): void;
export function clickMenuItem(): void;
export function createMenu(connectMenu: any, tabs: any, config: any): {
    menu: HTMLDivElement;
    pages: HTMLDivElement[];
};
export function createConfig(config: any, position: any): HTMLDivElement;
/**
 * @param { Function } fun
 */
export function setUpdateActive(fun: Function): void;
/**
 * @param { Function } fun
 */
export function setUpdateActiveCard(fun: Function): void;
/**
 * @param { boolean } [connectMenu]
 */
export function menu(connectMenu?: boolean): void;
/**
 * @type { HTMLDivElement }
 *
 * 也是一个全屏div，但它的子元素是菜单栏
 */
export let menuContainer: HTMLDivElement;
/**
 * @type { HTMLDivElement }
 *
 * 一个全屏div
 */
export let popupContainer: HTMLDivElement;
/**
 * @type { Function }
 */
export let updateActive: Function;
/**
 * @type { Function }
 */
export let updateActiveCard: Function;
/**
 * @type { { menu: HTMLDivElement; pages: HTMLDivElement[]; } }
 */
export let menux: {
    menu: HTMLDivElement;
    pages: HTMLDivElement[];
};
/**
 * @type { HTMLDivElement[] }
 */
export let menuxpages: HTMLDivElement[];
/**
 * @type { Function[] }
 */
export const menuUpdates: Function[];
