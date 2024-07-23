export class Basic {
    /**
     * @param { (
     * 	button: Button,
     * 	buttons?: Button[]
     * ) => number } check
     */
    chooseButton(check: (button: Button, buttons?: Button[]) => number): boolean;
    /**
     * @param { (
     * card?: Card,
     * cards?: Card[]
     * ) => number } check
     * @returns { boolean | undefined }
     */
    chooseCard(check: (card?: Card, cards?: Card[]) => number): boolean | undefined;
    /**
     * @param { (
     * target?: Player,
     * targets?: Player[]
     * ) => number } check
     */
    chooseTarget(check: (target?: Player, targets?: Player[]) => number): boolean;
}
