/**
 * @typedef { (string | number | boolean)[] | string | number | boolean } AudioInfo
 * @typedef { {
 *  audio: AudioInfo,
 *  audioname?: string[],
 *  audioname2?: { [playerName: string]: AudioInfo }
 * } } SkillInfo
 * @typedef { {
 *  name: string,
 *  sex:Sex,
 *  name1?: string,
 *  name2?: string,
 *  tempname: string[]
 *  skin: { name?:string }
 * } } FormatedPlayer
 * @typedef { {
 *  name: string,
 *  file: string,
 *  text: string | undefined,
 *  type: string,
 * } } TextMap
 */
export class Audio {
    /**
     * @type { { [key: string]: TextMap[] } }
     */
    static "__#25@#audioCache": {
        [key: string]: TextMap[];
    };
    /**
     * 根据skill中的audio,audioname,audioname2和player来获取技能台词列表及其对应的源文件名
     * @param { object } options
     * @param { string } options.skill 技能名
     * @param { Player | string } [options.player] 角色/角色名
     * @param { AudioInfo | SkillInfo } [options.info] 使用指定的skillInfo/audioInfo
     * @returns { Audio }
     */
    static skill({ skill, player, info }: {
        skill: string;
        player?: Player | string;
        info?: AudioInfo | SkillInfo;
    }): Audio;
    /**
     * 获取角色死亡时能播放的所有阵亡台词列表及其对应的源文件名
     * @param { object } options
     * @param { Player | string } options.player 角色/角色名
     * @param { AudioInfo } [options.info] 使用指定的audioInfo
     * @returns { Audio }
     */
    static die({ player, info }: {
        player: Player | string;
        info?: AudioInfo;
    }): Audio;
    /**
     * @param { Player | string } player
     * @returns { FormatedPlayer }
     */
    static formatPlayer(player: Player | string): FormatedPlayer;
    /**
     * @param {TextMap[]} list
     * @returns {string[]}
     */
    static toFile(list: TextMap[]): string[];
    /**
     * @param {TextMap[]} list
     * @returns {string[]}
     */
    static toText(list: TextMap[]): string[];
    /**
     * @param {AudioBase} audio
     * @param {string[]} history
     */
    constructor(audio: AudioBase, history?: string[]);
    get name(): string;
    get type(): string;
    /**
     * @type { TextMap[] }
     */
    get audioList(): TextMap[];
    get fileList(): string[];
    get textList(): string[];
    initAudioList(): void;
    getAudio(name: any, info: any): TextMap[];
    checkHistory(): boolean;
    /**
     * @param {string} name
     * @param {AudioInfo} audioInfo
     * @returns {TextMap[]}
     */
    parseAudio(name: string, audioInfo: AudioInfo): TextMap[];
    #private;
}
export type AudioInfo = (string | number | boolean)[] | string | number | boolean;
export type SkillInfo = {
    audio: AudioInfo;
    audioname?: string[];
    audioname2?: {
        [playerName: string]: AudioInfo;
    };
};
export type FormatedPlayer = {
    name: string;
    sex: Sex;
    name1?: string;
    name2?: string;
    tempname: string[];
    skin: {
        name?: string;
    };
};
export type TextMap = {
    name: string;
    file: string;
    text: string | undefined;
    type: string;
};
/**
 * @interface
 */
declare class AudioBase {
    /**
    * @type { string }
    */
    type: string;
    /**
    * @type { string }
    */
    name: string;
    /**
     * @type { (name: string) => boolean }
     */
    isExist: (name: string) => boolean;
    /**
     * @type { string }
     */
    defaultPath: string;
    /**
     * @type { AudioInfo }
     */
    defaultInfo: AudioInfo;
    /**
     * @type { boolean }
     */
    useCache: boolean;
    /**
     * @type { () => string }
     */
    getCacheKey: () => string;
    /**
     * @type { () => AudioInfo }
     */
    getAudioInfo: () => AudioInfo;
    /**
     * @type { (name: string, info?: AudioInfo) => AudioBase }
     */
    getAudio: (name: string, info?: AudioInfo) => AudioBase;
    /**
     * @type { ( path: string, ext: string, name: string ) => TextMap }
     */
    textMap: (path: string, ext: string, name: string) => TextMap;
    /**
     * @type { ( path: string, ext: string, index?: number ) => TextMap }
     */
    textMapWithIndex: (path: string, ext: string, index?: number) => TextMap;
}
export {};
