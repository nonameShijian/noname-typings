export class NodeWS {
    /**
     * @param {string | NodeWS} id
     */
    constructor(id: string | NodeWS);
    wsid: string;
    send(message: any): void;
    on(type: any, func: any): void;
    close(): void;
}
