export class Button extends HTMLDivElement {
    /**
     * @param {{}} item
     * @param {keyof typeof ui.create.buttonPresets | ((item: {}, type: Function, position?: HTMLDivElement | DocumentFragment, noClick?: true, button?: Button) => Button)} type
     * @param {HTMLDivElement|DocumentFragment} [position]
     * @param {true} [noClick]
     * @param { Button } [button]
     */
    constructor(item: {}, type: "character" | "tdnodes" | "blank" | "card" | "vcard" | "characterx" | "player" | ((item: {}, type: Function, position?: HTMLDivElement | DocumentFragment, noClick?: true, button?: Button) => Button), position?: HTMLDivElement | DocumentFragment, noClick?: true, button?: Button);
    exclude(): void;
    get updateTransform(): (bool: any, delay: any) => void;
}
import { UI as ui } from '../../ui/index.js';
