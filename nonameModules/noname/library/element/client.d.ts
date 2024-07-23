export class Client {
    /**
     * @param {import('../index.js').NodeWS | InstanceType<typeof import('ws').WebSocket> | Client} ws
     * @param {boolean} temp
     */
    constructor(ws: import('../index.js').NodeWS | InstanceType<typeof import('ws').WebSocket> | Client, temp?: boolean);
    ws: any;
    /**
     * @type { string }
     */
    id: string;
    closed: boolean;
    sandbox: import("../../util/sandbox.js").Sandbox;
    send(...args: any[]): this;
    close(): this;
}
