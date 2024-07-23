export class Character {
    /**
     * @param { Object|[string, string, string|number, string[], any[]|undefined, any[]|undefined] } [data]
     */
    constructor(data?: any | [string, string, string | number, string[], any[] | undefined, any[] | undefined]);
    /**
     * 武将牌的性别
     * @type { Sex | "" }
     **/
    sex: Sex | "";
    /**
     * 武将牌的体力值
     * @type { number }
     **/
    hp: number;
    /**
     * 武将牌的体力上限
     * @type { number }
     **/
    maxHp: number;
    /**
     * 武将牌的护甲值
     * @type { number }
     **/
    hujia: number;
    /**
     * 武将姓名
     * @type { string|undefined }
     */
    names: string | undefined;
    /**
     * 武将牌的势力
     * @type { string }
     **/
    group: string;
    /**
     * 武将牌的势力边框颜色（如徐庶“身在曹营心在汉”）
     * @type { string|undefined }
     **/
    groupBorder: string | undefined;
    /**
     * 神武将牌在国战模式下的势力
     * @type { string|undefined }
     **/
    groupInGuozhan: string | undefined;
    /**
     * 武将牌拥有的技能
     * @type { string[] }
     **/
    skills: string[];
    /**
     * 武将牌是否为常备主公
     * @type { boolean }
     **/
    isZhugong: boolean;
    /**
     * 武将牌是否为隐藏武将
     * @type { boolean }
     **/
    isUnseen: boolean;
    /**
     * 武将牌是否拥有隐匿技能
     * @type { boolean }
     **/
    hasHiddenSkill: boolean;
    /**
     * 垃圾桶，用于存储原本Character[4]的垃圾数据
     * @type { any[] }
     **/
    trashBin: any[];
    /**
     * 武将牌对应的另一半双面武将牌
     * @type { string|undefined }
     **/
    dualSideCharacter: string | undefined;
    /**
     * 多势力武将牌的全部势力
     * @type { string[] }
     **/
    doubleGroup: string[];
    /**
     * 武将牌是否为minskin
     * @type { boolean }
     **/
    isMinskin: boolean;
    /**
     * 武将牌是否为挑战模式下的BOSS
     * @type { boolean }
     **/
    isBoss: boolean;
    /**
     * 武将牌是否为隐藏BOSS
     * @type { boolean }
     **/
    isHiddenBoss: boolean;
    /**
     * 武将牌是否“仅点将可用”
     * @type { boolean }
     **/
    isAiForbidden: boolean;
    /**
     * 武将牌在炉石模式/挑战模式下的特殊信息
     * @type { any[]|undefined }
     **/
    extraModeData: any[] | undefined;
    /**
     * 武将牌是否为炉石模式下的随从
     * @type { boolean }
     **/
    isFellowInStoneMode: boolean;
    /**
     * 武将牌是否为炉石模式下的隐藏武将
     * @type { boolean }
     **/
    isHiddenInStoneMode: boolean;
    /**
     * 武将牌是否为炉石模式下的特殊随从（可以使用装备和法术）
     * @type { boolean }
     **/
    isSpecialInStoneMode: boolean;
    /**
     * 武将牌是否为bossallowed
     * @type { boolean }
     **/
    isBossAllowed: boolean;
    /**
     * 武将牌是否为战旗模式下的BOSS
     * @type { boolean }
     **/
    isChessBoss: boolean;
    /**
     * 武将牌是否为剑阁模式下的BOSS
     * @type { boolean }
     **/
    isJiangeBoss: boolean;
    /**
     * 武将牌是否为剑阁模式下的机械
     * @type { boolean }
     **/
    isJiangeMech: boolean;
    /**
     * 武将牌是否在国战模式下拥有独立的皮肤
     * @type { boolean }
     **/
    hasSkinInGuozhan: boolean;
    /**
     * 武将牌对应的全部宗族
     * @type { string[] }
     **/
    clans: string[];
    /**
     * 武将牌的图片信息
     * @type {string | undefined}
     */
    img: string | undefined;
    /**
     * 武将牌拥有的全部阵亡语音
     * @type { string[] }
     **/
    dieAudios: string[];
    /**
     * 武将牌“无法享受到的主公/地主红利”
     * @type { string[] }
     **/
    initFilters: string[];
    /**
     * 武将牌的“临时名称”
     * @type { string[] }
     */
    tempname: string[];
    /**
     * 武将牌是否存在(get.character未找到武将使用)
     * @type { boolean }
     */
    isNull: boolean;
    initializeTrashProperties(): void;
    /**
     * @param { any[] } trash
     */
    setPropertiesFromTrash(trash: any[]): void;
    set 0(sex: "" | Sex);
    /**
     * @deprecated
     */
    get 0(): "" | Sex;
    set 1(group: string);
    /**
     * @deprecated
     */
    get 1(): string;
    set 2(hp: string | number);
    /**
     * @deprecated
     */
    get 2(): string | number;
    set 3(skills: string[]);
    /**
     * @deprecated
     */
    get 3(): string[];
    set 4(trashBin: string[]);
    /**
     * 把新格式下的数据转换回传统的屎山
     * @deprecated
     */
    get 4(): string[];
    set 5(stoneData: any[]);
    get 5(): any[];
}
