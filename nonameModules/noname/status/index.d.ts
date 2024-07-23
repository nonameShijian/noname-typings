export class status {
    paused: boolean;
    paused2: boolean;
    /**
     * @type { boolean | "paused" }
     */
    paused3: boolean | "paused";
    over: boolean;
    clicked: boolean;
    auto: boolean;
    /**
     * @type { GameEventPromise }
     */
    event: GameEventPromise;
    ai: {};
    lastdragchange: any[];
    /**
     * @type { string[] }
     */
    skillaudio: string[];
    dieClose: any[];
    dragline: any[];
    dying: any[];
    /**
     * @type { GameHistory[] }
     */
    globalHistory: GameHistory[];
    cardtag: {
        yingbian_zhuzhan: any[];
        yingbian_kongchao: any[];
        yingbian_fujia: any[];
        yingbian_canqu: any[];
        yingbian_force: any[];
    };
    renku: any[];
    prehidden_skills: any[];
    postReconnect: {};
    /**
     * @type { string | undefined }
     */
    extension: string | undefined;
    /**
     * @type { boolean | undefined }
     */
    dragged: boolean | undefined;
    /**
     * @type { boolean | undefined }
     */
    touchconfirmed: boolean | undefined;
    /**
     * @type { boolean | undefined }
     */
    connectMode: boolean | undefined;
    /**
     * @type { boolean | undefined }
     */
    video: boolean | undefined;
    /**
     * @type { boolean | undefined }
     */
    importingExtension: boolean | undefined;
    /**
     * @type { string[] | undefined }
     */
    extensionLoaded: string[] | undefined;
    /**
     * @type { Promise<any>[] | undefined }
     */
    extensionLoading: Promise<any>[] | undefined;
    /**
     * @type { { [key: string]: Promise<any>[] } | undefined }
     */
    importing: {
        [key: string]: Promise<any>[];
    };
    /**
     * @type { Function | boolean | undefined }
     */
    new_tutorial: Function | boolean | undefined;
    /**
     * @type { Player | undefined }
     */
    roundStart: Player | undefined;
    /**
     * @type { boolean }
     */
    roundSkipped: boolean;
}
export let _status: status;
export function setStatus(instance?: InstanceType<typeof status>): void;
