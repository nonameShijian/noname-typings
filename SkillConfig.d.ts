/** 导入技能包的配置信息 */
interface ExSkillConifgData extends ExCommonConfig {
    /** 技能 */
	skill: SMap<ExSkillData> //| { [key: string]: any }>;
	/** 技能描述 */
	translate: SMap<string>;
}

/** 技能的配置信息 */
declare interface ExSkillData {
    /** 
     * 技能按钮名字，不写则默认为此技能的翻译（可认为为该技能用于显示的翻译名）
     * 注：用得挺少得，貌似主要是使用翻译得
     */
    name?: string;
    /** 
     * 新版：用于记录自身名字key，希望能用于自身某些配置上直接使用......，需要测试过才肯定；【结果：失败，还是没用，屏蔽掉】
     * 
     * 旧版：用于解析用的key，不直接参与游戏逻辑，参与自己定义的解析流程，实质就是技能的名字，规范按技能名命名 
     */
    // key?:string;

    /**
     * 继承
     * 
     * 比较特殊的属性，继承当前技能没有的，而inherit继承技能中有的属性；
     * 其中“audio”属性，尽可能直接继承赋值为inherit的名字；
     * 同时，对应的翻译会覆盖成继承技能的翻译。
     */
    inherit?: string;

    //声音
    /**
     * 配音：
	 * 
     * 主要分为：audioname（默认技能名），audioinfo（默认info.audio）
     * 
     * 若为字符串时，带有“ext:”，则使用无名杀录目\extension\扩展名内的配音（扩展的配音）
	 * 
	 * ，命名方法：技能名+这是第几个配音
	 * 
	 * 
     * 否则，该字符串指代的是另一个技能的名字，若该技能名存在，则audioinfo为该技能的audio;
	 * 
     * 若为数组，则是[audioname,audioinfo]，分布覆盖原有的值。
	 * 
     * audioinfo为数字时，数字为配音数量索引（同一技能有多个配音），从1开始，使用无名杀目录\audio\skill内的配音（audioname1~audioinfo序号）;
     * 
	 * audioinfo为布尔值true或者字符串非空时，执行game.playSkillAudio(audioname)，使用无名杀目录\audio\skill内的配音;
     * 
	 * 否则，若为false，空字符串，null结果，则不播音，
	 * 
     * 若info.audio:true，则使用game.playSkillAudio(audioname)。
     * 
     * 扩展(以game.trySkillAudio为准)：
	 * 
     * 若info.audio是字符串：
	 * 
     *     1.则主要是播放扩展声音,格式：ext:扩展包的名字:额外参数；
	 * 
     *     2.直接就是技能名，即继承该技能的播放信息，audioinfo；
	 * 
     * 若info.audio是数组，则[扩展名,额外参数]；
	 * 
     * 额外参数：1."true"，则直接播放该名字的声音；2.数字，则是随机选一个该"技能名+1-数字范围"的声音播放；
     *  
	 * 若info.audio是数字，则直接就是用解析出来的"audioname+1-数字范围";
     */
    audio?: number | string | boolean | [string, number];
    /** 
     * 指定武将名的音频。
     * 
     * 强制使用该audioname覆盖上面解析出来的audioname，其解析出来的audioname为“audioname_玩家武将名”,
     * 
	 * 最终路径为：无名杀目录\audio\“audioname_玩家武将名”
     * 
     * 扩展：
     *  若info.audioname存在，且是数组，且方法参数有player，则播放"audioname_玩家名"的声音（即可同一个技能，不同人播放不同声音）
     */
    audioname?: string[];
    //【v1.9.102】
    /**
     * 添加audioname2机制，用于重定向特定角色的语音到特定技能
     * 
     * 其key值为人物的name；
     */
    audioname2?: SMap<string>;
    /** 强制播放音频 */
    forceaudio?: boolean;


    //时机与触发相关
    /** 
     * 触发的时机 
     * 
	 * 一般用于触发技能（被动技能）
     * 
	 * 注1：主动触发enable，是没有event._trigger;
     * 
	 * 注2：有trigger，就表示这是一个触发技能，触发技能必须要有触发内容“content”，没有会引发报错；
     */
    trigger?: ExTriggerData;

    /**
     * 为true时，将该技能加入到_hookTrigger
     * 
     * 根据代码理解：
     * 
	 * 通过addSkillTrigger，挂载在player._hookTrigger中；
     * 
	 * 作为一个单独触发的方式，每次createTrigger，logSkill，filterTriggers时执行所有挂载在_hookTrigger所有对应的hookTrigger；
     * 
     * 目前可知，其相关使用方法：after,block,log【目前只有于国战方法中，应该是作为全局执行方法的一种简约写法，实用不大】
     */
    hookTrigger?: HookTriggerData;

    /** 同时机技能发动的优先度 */
    priority?: number;

    //基本都在核心createTrigger，addTrigger，trigger中逻辑触发相关，属于重要得属性
    /** 
     * 目前具体不知什么功能，当前所知，非常重要，和createTrigger，addTrigger，trigger相关
     * （推测，这属性是指明客户端是否显示该技能的操作按钮）
     * 
     * 1.用于双将，若该设置不为true，该技能时在hiddenSkills隐藏技能列表中，且为“非明置”状态，结束当前“createTrigger”事件的触发；
     * 即该设置，可以让隐藏技能触发；
     * 
     * 2.用于event.addTrigger，event.trigger中，若该设置为true，默认为其priority+1，影响技能的触发顺序
     * （该顺序从代码看起来主要受priority影响，因为会*100，设置这个，会比其他同级优先一点）
     * 
     * 3.当设置了该值为true，
     *  若forced没设置到，则默认为true；
     *  若popup没设置到，则默认为false；
     * 
     * 故该设置核心功能：表明该技能是强行触发技能,并且不提示
     */
    silent?: boolean;
    /** 
     * 目前具体不清楚什么功能，当前所知，也是个很重要得属性，估计是托管时是否触发得标记
     * 
	 * 功能相当于forced+nopop ,会不会是被托管时的标记呢，正在验证
     * 
     * 用于双将，上面的silent为true，其非明置，该设置不为true，则触发“triggerHidden”；
     * 
     * 功能好像是直接触发，在createTrigger中，直接event._result={bool:true}执行，否则可能需要（info.check进行ai检测）；
     */
    direct?: boolean;
    /**
     * 此技能是否可以被设置为自动发动（不询问）
     * 
     * 设置了该属性的技能，可加入到配置选项中，自己设置是否自动发动（即该技能非必发技能）
     * 
	 * 若该属性值是“check”，则调用当前技能得check方法检测
     */
    frequent?: boolean | string | TwoParmFun<Trigger, Player, boolean>;
    /** 
     * 此技能是否可以被设置为自动发动2 
     * 
	 * 可以细分当前技能强制发动选项，（应该是为了细分子技能），保存到lib.config.autoskilllist，
     * 
	 * 在ui.click.autoskill2中执行,
     * 
	 * 取值为子技能的名字（注：目前，看来，只是在UI上作用，自动发动，更多是依赖frequent参数）
     */
    subfrequent?: string[];
    /**
     * 自动延迟的时间
     * 
	 * 可以影响技能触发响应时间（主要影响loop之间的时间,即game.delayx的调用情况）
     */
    autodelay?: boolean | number | TwoParmFun<Trigger, Player, number>;
    /** 当前时机首要执行此技能 */
    firstDo?:boolean;
    /** 当前时机最后执行此技能 */
    lastDo?:boolean;

    /** 
     * 此技能是否能固定触发（即自动发动）。
     * 
     * true为固定触发（可视为一种锁定技的，锁定技实质是mod里的技能）
     * 国战可以触发亮将。
     * 
     * 【核心】作为game.check检测用的标准属性之一，在满足条件下强制执行。
     */
    forced?: boolean;
    /** 
     * 死亡后是否可以发动技能
     */
    forceDie?: boolean;
    /** 
     * 是否触发可以弹出选择技能的发动
     * 
     * 用于在arrangeTrigger过滤出多个同时机的触发技能时，在createTrigger中，询问玩家的技能发动，
     * 
	 * 若为false，不会加入询问触发的技能列表上（只有设置false才会）;
     * 
	 * 若为字符串，则在createTrigger【step 3】触发技能时，使用player.popup弹出该提示文本；
     */
    popup?: boolean|string;
    /**
     * player是否logSkill('此技能').
     * 
     * 设置true，则不弹出提示
     * 
     * 注：logSkill 则是在玩家确定要使用卡牌的情况下 弹出发动的技能（马里奥大佬的解释，到时看下）
     * true为不
     */
    nopop?: boolean;
    /**
     * 取消触发后的处理
     * 
	 * 在createTrigger中step 3处理
     * 
	 * @param trigger 
     * @param player 
     */
    oncancel?(trigger: Trigger, player: Player): void;

    //触发内容基本触发流程
    /**
     * 在content之前执行
     * 
     * 在chooseToUse，step2中执行：
     *  其执行时机和chooseButton一致，当chooseButton不存在时且game.online为false，则会执行这个
     * @param config 
     */
    precontent?: ContentFuncByAll;
    /**
     * 在content之前触发内容
     * 
	 * 在useSkill中使用，主动触发技能content之前
     */
    contentBefore?: ContentFuncByAll;
    /**
     * 触发内容（技能内容）
     * 
     * 作为被动触发技能：
     *  在createTrigger，step3中创建当前技能的事件，设置该content为事件content作为触发内容；
     * 
	 * 作为主动触发技能：
     *  在useSkill中创建当前技能的事件
     * 分步执行(通过step x分割开执行逻辑步骤)
     * 
     * 注：此时的content，已经为触发该技能的效果而创建的，该技能执行中的事件，此时的event一般是不具备
     *  触发信息，触发的信息，主要在trigger触发事件中获取。
     */
    content?: ContentFuncByAll;
    /**
     * 在content之后触发内容
     * 
	 * 在useSkill中使用，主动触发技能content之后
     */
    contentAfter?: ContentFuncByAll;

    //技能初始化与移除：
    /**
     * 获得技能时发动，初始化技能
     * 
     * 技能的话，则在addSkillTrigger，若第三个参数triggeronly取值为true，只设置触发，不初始化该技能；
     * 正常在addSkill处理，this.addSkillTrigger(skill)，使用此初始化；
     * 
	 * @param player 
	 * @param Skill
     */
    init?(player: Player, skill: Skill): void;
    /** 
     * 添加技能时，初始化技能信息
     * 
     * 在addSkill中调用，每次添加都会执行
     */
    init2?(player: Player, skill: Skill): void;
    /** 在执行player.disableSkill丧失技能时，若该属性为true，则执行技能的onremove */
    ondisable?: boolean;
    /**
     * 失去技能时发动
     * 当值为string时:
	 * 
     *  若为“storage”，删除player.storage中该技能的缓存（用于保存标记等信息）；
     *      注：失去这个技能时销毁标记。
	 * 
     *  若为“discard”，若player.storage[skill]缓存的是卡牌时，执行game.cardsDiscard，并播放丢牌动画，然后移除player.storage[skill]；
     *  
	 *  若为“lose”，和“discard”差不多，不过不播丢牌动画；
     * 
	 * 当值为true时，直接移除player.storage[skill]；
	 * 
     * 当值为字符串集合时，则是删除集合中对应player.storage（即删除多个指定storage）
     * 
	 * 注：当前disableSkill中，若当前info.ondisable，调用onremove必须是方法，且不注入skill参数；
     */
    onremove?: TwoParmFun<Player, Skill, void> | string | string[] | boolean;
    /** 是否持续的附加技能，在removeSkill中使用 */
    keepSkill?: boolean;


    //以下3个属性基本功能时一致：在某些模式下是否能使用，只使用一个就差不多
    /**
     * 指定该技能在哪些模式下禁用
     * 
     * 注：在指定模式被禁用的技能，会被设置成空对象，并且“技能_info”的描述变成“此模式下不可用”。
     */
    forbid?: string[];
    /** 与forbid相反，只能在指定玩法模式下才能被使用，其他逻辑一致 */
    mode?: string[];
    /** 当前模式下是否能使用，返回false则不能使用，其实和forbid逻辑一致 */
    available?(mode: string): boolean;


    //技能相关设置：
    /** 
     * 技能组：
	 * 
     * 拥有这个技能时相当于拥有技能组内的技能
	 * 
     * 注：一些特殊技能标签：
	 * 
     * “undist”：不计入距离的计算且不能使用牌且不是牌的合法目标
	 * 
     *  （被隔离玩家，目前确定的作用：player.getNext获取下一位玩家，player.getPrevious确定上一位玩家，player.distance计算玩家距离）；
     */
    group?: string[];
    /** 
     * 子技能：
	 * 
     * 你不会拥有写在这里面的技能，可以调用，可以用技能组联系起来;
	 * 
     * 子技能名字：“主技能_子技能”，翻译为主技能翻译
     * 
     * 注：子技能，会被视为“技能_子技能”独立保存起来。
     */
    subSkill?: SMap<ExSkillData>;
    /**
     * 全局技能?:
	 * 
     * 你拥有此技能时，所有角色拥有此技能（global的值为技能名）
	 * 
     * 注：无论是否拥有此技能，此技能都为全局技能写法：技能名前 + _
     */
    global?: string|string[];
    /**
     * 在game.addGlobalSkill中使用：
	 * 
     * 强行设置global技能；
     */
    globalSilent?: boolean;

    //技能相关设置=>功能设置
    /** 
     * 每回合限制使用次数
     * 
     * （若限制使用次数为变量时需写在filter内，即通过filter与变量动态判断） 
	 * 
     * 主要在createTrigger，step3中触发计数。
	 * 
     * 触发计数，会在玩家身上添加“counttrigger”技能，计数记录在：player.storage.counttrigger[当前技能名]
     */
    usable?: number;
    /** 
     * 每N轮可使用1次技能
     * 
     * 设置了该属性，会创建一个“技能名_roundcount”技能，将其加入group（技能组）中；
	 * 
     * 该技能的触发阶段“roundStart”（一轮的开始），用于记录当前技能的在一轮中使用的次数
     */
    round?: number;
    /** 用于“技能名_roundcount”技能中，当前技能不可使用时，“n轮后”xxx，中xxx的部分显示（即后面部分） */
    roundtext?: string;
    /** 增加显示的信息，这部分时增加，“n轮后”前面部分 */
    addintro?(storage: SMap<any>, player: Player): string;
    /** 延迟的时间 */
    delay?: number;
    /** 
     * 锁定技
     * 
     * 若取值false，则get.is.locked，直接返回就false了；
	 * 
     * （锁定技的判定：1.info.trigger&&info.forced；2.info.mod；3.info.locked）
     * 
     * 是否可以被“封印”（内置技能“fengyin”）的技能，取值为false时，get.is.locked返回为false；true则正常逻辑 
     */
    locked?: boolean;
    /** 是否是旧版技能，值为true，添加到lib.config.vintageSkills中，可以实现新/旧版技能切换，如果该为true，则“原翻译名_alter”即作为当前的翻译 */
    alter?: boolean;


    //锁定技
    /** 
	 * mod技能的设置
	 * 
	 * 如果有，技能视为锁定技 
	 * */
    mod?: ExModData;

    //【重点】标记的key需要和技能名一致，游戏内都是通过对应skill取得对应的标记key，即player.storage[skill]
    //限定技与觉醒技与技能标记
    /*
    关于限定技规范：
        一般情况下，需要在filter中，可加入!player.storage.xxx==true判定，
        在发动后，content内设置player.storage.xxx=true，代表已经触发了；
        目前，可以采用另一种简洁的方法，即觉醒技方法：
            player.awakenSkill("xxx");
        这样就会屏蔽发动过的技能，不会发动第二次；
    */
   
    /**
     * 限定技（标记）
     * 
     * 该标记为true时，若没有设置以下内容，则会自动设置：
	 * 
     *  mark设置为true；
	 * 
     *  intro.content设置为“limited”；
	 * 
     *  skillAnimation设置为true；
	 * 
     *  init设置为初始化玩家缓存的该技能名标记为false；
     */
    limited?: boolean;
    /** 
     * 是否开启觉醒动画
     * 
     * 准备来说，常用于觉醒动画，实际是指技能动画
	 * 
     * 字符串时取值：epic，legend
     */
    skillAnimation?: boolean | string;
    /** 是否只显示文字特效 */
    textAnimation?: boolean;
    /** 动画文字(可用于觉醒文字) */
    animationStr?: string;
    /** 动画文字颜色(觉醒文字颜色) */
    animationColor?: string; 
    /**
     * 觉醒技标记：
	 * 
     * (目前来看，这个目前单纯是技能标记，在主逻辑上并没使用，但貌似会被某些技能本身用到，或者类似左慈判断不能获得的技能的)
     */
    juexingji?: boolean;
	/**
	 * 转换技标记
	 */
	zhuanhuanji?: boolean;
	/**
	 * 使命技标记
	 * 
	 * 使命技 = 有失败条件的觉醒技，其技能在成功/失败后都会失去此技能
	 * 
	 * 具体功能实现请自行在技能内实现，此标签仅仅只有标签这是个使命技的作用
	 */
	dutySkill?: boolean;
    /** 
     * 获得技能时是否显示此标记，
	 * 
     * 若为false，可以用 markSkill 来显示此标记，
	 * 
     * 可以用 unmarkSkill 不显示标记
     * 
     * mark的常量值："card","cards","image","character"，表示，标记显示的特殊形式（UI上）
     * 
	 * 注：character，只能在表示一个角色时使用，标记以角色牌形式显示；
     * 
     * 注：取值“auto”，在updateMark时，有计数时，执行unmarkSkill(?????)
     */
    mark?: boolean|string;
    /** 标记显示文本，一般为一个字 */
    marktext?: string;
	/** 标记图片 */
	markimage?: string;
    /** 标记显示内容 */
    intro?: {
        /** 自定义mark弹窗的显示内容 */
        mark?:ThreeParmFun<Dialog,GameStorageItem,Player,string>;
        /** 用于info.mark为“character”，添加，移除标记时，log显示的标记名（好像意义不大） */
        name?:string|TwoParmFun<GameStorageItem, Player, string>;
        /** 
         * 标记显示内容？
         * 为cards时显示标记内的牌.
         * 
         * 当标记显示内容是文本:
		 * 
         *  "mark":有（数）个标记；
		 * 
         *  "card":一张牌；
		 * 
         *  "cards":多张牌；
		 * 
         *  "limited":限定技，觉醒技专用；(若没设置，在info.limited为true下回默认设置这个)
         *  
		 *  "time":剩余发动次数；
		 * 
         *  "turn":剩余回合数；
		 * 
         *  "cardCount":牌数；
		 * 
         *  "info":技能描述；
		 * 
         *  "character":武将牌；
		 * 
         *  "player":一个玩家；
		 * 
         *  "players":多个玩家；
		 * 
         *  可以只是一个描述文本；
		 * 
         * 在get.storageintro 中使用,以上，即为该方法的type，返回标记的描述内容
         * 
         * 若info.mark为“character”，则一般为一个描述文本；
		 * 
         * 注:info.mark为true时，也可以使用文本描述，比较自由（按道理都可以，不过默认搭配而已）；
         * 
         * 其中，文本可使用以下占位符：
		 * 
         *  "#"：(this.storage[skill])获取对应的计数,
		 * 
         *  "&"：get.cnNumber(this.storage[skill])获取对应的计数(需要使用到get.cnNumber来获取的数量),
         *  
		 *  "$"：get.translation(this.storage[skill])获取对应描述(一般是描述的角色名)
         * 
         * 也可以是个自定义的方法
         */
        content?: string | ThreeParmFun<GameStorageItem, Player, string,string>;
        /** 
         * 标记数
		 * 
         * 主要在player.updateMark时使用，实际顶替this.storage[i+'_markcount']获取标记数 
         */
        markcount?: number | TwoParmFun<GameStorageItem, Player, number>;
        /** 是否不启用技能标记计数 */
        nocount?: boolean;
        /**
         * 移除该标记时，在unmarkSkill执行
		 * 
         * 若值为字符串“throw”，该玩家缓存中该技能标记的为牌时，播放丢牌动画；
		 * 
         * 若是方法，则直接使用该回调方法处理。
         * 
         * 注：该参数原本只在把整个标记移除时执行，后续可能自己扩展；
         */
        onunmark?: TwoParmFun<GameStorageItem, Player, void> | string;
        // id?:string; //id名字需带“subplayer”，用于特殊模式显示信息用
    };

    //主公技
    /** 
     * 是否为主公技：
	 * 
     * true时，将这个技能设置为主公技 
	 * 
     * (目前来看，这个目前单纯是技能标记，在主逻辑上并没使用，但貌似会被某些技能本身用到)
     */
    zhuSkill?: boolean;

    //主动技能（主动使用技能，包含技能使用的相关操作配置）
    /** 
     * 可使用的阶段 
     * 
     * 一般用于主动技能
     * 
     * 注：从这个info.enable==event.name看出，其实和trigger差不多，所有事件的发动都会阶段时点；
     * 
	 * 即，当前执行的事件，触发game.check，时，检测触发的技能的event.name，即是info.enable;
     * 
     * 常用的阶段：
	 * 
     * phaseUse：出牌阶段使用；
	 * 
     * chooseToRespond：用以响应；
	 * 
     * chooseToUse：常用于“濒死使用”/打出使用
     */
    enable?: string | string[] | OneParmFun<Trigger, boolean>;
    /**
     * 是否显示弹出该技能使用卡牌的文字
     * 
     * useCard中使用，
	 * 
     * 若为true的话，则执行player.popup
	 * 
     * 例如：
	 * ```jsx
	 * player.popup({name, nature}, 'metal')
	 * ```
     */
    popname?: boolean;

    //视为技（转换卡牌的技能）
    /**
     * (视为)目标卡牌
	 * 
     * 一般用于视为技能
     * 
     * 【v1.9.102】扩展：可以使用函数式viewAs，目前核心支持使用地方：backup,ok;
     */
    viewAs?: string | CardBaseUIData | TwoParmFun<Card[],Player,string>;
    /**
     * 视为技按钮出现条件（即发动条件）
     * @param player 
     */
    viewAsFilter?(player: Player): boolean;
    /**
     * 使用视为牌时触发内容。
	 * 
     * result.cards是视为前的牌
     * 
     * 注：实际是useResult，若当前处理的是技能，则先触发这个，后面再更具具体情况执行useCard,useSkill;
     * 
	 * 一般是用于视为技作为，效果处理，作为其他处理，会显得多余，算是视为技的扩展操作
	 * 
     * @param result 
     * @param player 
     */
    onuse?(result:BaseCommonResultData, player: Player): void;
    /**
     * 选择按钮（牌）
     * 
     * 常用于视为技需要实现复杂的功能选项时使用；
	 * 
     * 当前使用范围：
	 * 
     * chooseToUse
	 * 
     * chooseToRespond
     */
    chooseButton?: ChooseButtonConfigData;
    /**
     * 源技能
	 * 
     * (该属性应该是动态生成的,用于记录执行backup的技能名，即执行backup的视为技能，实质是执行本技能)
     * 
     * 在chooseToUse，step1中使用，若有，将器添加到event._aiexclude中；
	 * 
     * 
	 * 目前来看，该字段不是配置进去的，而是chooseToUse，step3中，执行chooseButton的backup方法，
     * 
	 * 返回一个新的“视为”技能：“技能名_backup”，并设置到lib.skill中，
     * 
	 * 并且将技能名作为该技能的源技能设置到这个新技能的sourceSkill中。
     */
    sourceSkill?: string;


    //具体功能的处理
    //弃牌，失去牌(默认不设置discard，lose，则直接player.discard弃置选择的牌)
    //discard，lose其中一个false，都会为非视为技走lose事件失去卡牌，且提供丰富的参数设置；
    /**
     * 是否弃牌
     * 
     * 在useSkill中调用，
     * 
	 * 选择牌发动技能后，被选择的牌都要弃置
     * 
	 * 取值false（因为undefined != false结果为true，故默认不填和true效果一致）
     */
    discard?: boolean;
    /** 
     * 是否失去牌（是否调用player.lose）
     * 
     * 与discard调用时机一致，都在useSkill中，
     * 取值为false
     */
    lose?: boolean; 
    /**
     * 不弃牌，准备用这些牌来干什么（用于播放动画）
     * 
     * 其字符串枚举有：
     * 
	 * give，give2，throw，throw2
     * 
	 * 若不是字符串，则执行该方法
     */
    prepare?: string | ThreeParmFun<Card[], Player, Target[], string>;
    /** 在lose事件中使用，触发执行“lose_卡牌名”事件的content */
    onLose?:ContentFunc|ContentFunc[];
    /**
     *  在lose事件中使用，必须要失去的卡牌为“equips”（装备牌），有onLose才生效。
     * 若符合以上条件，则检测该牌是否需要后续触发执行“lose_卡牌名”事件，既上面配置的onLose
     */
    filterLose?:TwoParmFun<Card,Player,boolean>;
    /** 在lose事件中使用，取值为true，作用貌似强制延迟弃牌动画处理 */
    loseDelay?:boolean;

    /** 
     * 是否触发lose失去牌阶段
     * 
     * 取值false；
     * 
	 * 若为false，则跳过该触发
     * 
	 * 适合lose绑定一起使用，为false时，设置丢失牌事件_triggered为null
     */
    //新版本出牌阶段主动技的新参数（均仅在discard为false且lose不为false时有效），且losetrigger不为false，
    //是默认情况下：执行player.lose(cards,ui.special)，以下为
    losetrigger?: boolean;
    /** 让角色失去卡牌的过程中强制视为正面朝上失去(losetrigger不为false时，既默认情况下生效) */
    visible?:boolean;
    /** 
     * 指定失去特殊区卡牌的去向 (即设置卡牌的position)
     * 
	 * 其值采用的是ui的成员，即通过ui[info.loseTo]，获取实体对象设置；
     * 
	 * 默认为："special",
     * 
	 * 取值："special","discardPile","cardPile","ordering"，"control"(这一般都不会用上,好像没看见)
     */
    loseTo?:string;
    /**
     * 需要失去的牌的区域ui.special(默认情况是这个，受loseTo影响)，
     * 
	 * 设置lose事件的toStorage为true，失去的牌到牌记录到自己的storage中；
     */
    toStorage?:boolean;
    /** 
     * 用于将失去的牌置于某个区域的顶端（而非默认的顶端）；【v1.9.108.6】
     */
    insert?:boolean;

    /** 
     * 技能响应前处理(非联机时，不在线时处理，估计时用于自动响应)
     * 
     * 在chooseToRespond中使用
     */
    prerespond?(result, player: Player): void;
    /** 
     * 技能响应(可直接使用技能来响应，在这里进行响应的处理)
     * 
     * 在respond中使用
     */
    onrespond?(event: Trigger, player: Player): void;
    /**
     * 过滤发动条件，返回true则可以发动此技能
     * 
     * 主要在filterTrigger,game.check中处理,返回false则不处理（可以不设置该配置，相当于默认true结果）
     * 
     * 注：
     * 
	 * 1.主动触发：一般走的是game.check,其filter,传入的event指的是当前game.check处理的事件；
     * 
	 * 2.被动触发：一般走的是lib.filter.filterTrigger,其filter,传入的event指的是当前的触发事件，其中还会把触发事件名传入第三个参数；
     * @param event 事件，即event._trigger,相当于trigger时机（此时的event为触发该技能时机时的事件）
     * @param player 
     * @param name 触发名，为event.triggername，目前只有在lib.filter.filterTrigger中才传该值，即被动触发，主动触发不检测该值，目前暂未完善
     */
    filter?(event: Trigger, player: Player, name?:string): boolean;
    /**
     * 选择的目标武将牌上出现什么字。
     * 
	 * 使用地方：ui.click.target/player，....
     * 
     * 如果是数组第几元素对应第几个目标；
     * 
     * 如果是方法，则直接根据入参target，判断返回的文本；
     * 
     * 例子：
     * targetprompt:['出杀','出闪'],依次就是你点击第一个角色后在其旁边显示出杀，第二个角色显示出闪
     */
    targetprompt?: string|string[]|OneParmFun<Target,string>;
    /**
     * 是否每个目标都结算一次(多个目标)
     * 
     * true为可选择多名目标
     */
    multitarget?: boolean | number;
    /**
     * 指向线的颜色枚举：
     * fire（橙红色FF9244），thunder（浅蓝色8DD8FF），green（青色8DFFD8），
     */
    line?: string|{color:number[]};
    /** 是否显示多条指引线 */
    multiline?: boolean;

    /**
     * 选中该技能使用时,进行处理
     * 
     * 在chooseToUse 的content中调用，
     * 
	 * 目前参考的例子中，大多数多是用于添加一些牌到待选择到event.set(key，收集的牌)中，
     * 
	 * 用于使用前先选牌的效果
     * 
	 * 注：其调用时机应该远早于触发技能的，在选中牌时就开始处理。
     * @param event 
     */
    onChooseToUse?(event: Trigger): void;

    /**
     * 改变拼点用的牌
     * 
     * 在chooseToCompare和chooseToCompareMultiple，step2中使用，返回玩家用于的拼点的牌
     * @param player 
     */
    onCompare?(player: Player): Card[];

    /**
     * 在chooseToRespond时使用，会前置执行当前chooseToRespond事件player所有的技能该接口；
     * 
	 * 应该时用于chooseToRespond事件时，技能进行一些初始化处理（暂无使用实例）
     * 【v1.9.106】
     * @param event 
     */
    onChooseToRespond?(event: GameEvent):void;

    //核心
    //event.bakcup设置的信息，game.check使用到的一些参数，其实就是把game.check需要的一些参数设置到技能中，作为check时的条件
    // 追加：这个主要用于game.check检测中，取代当前事件的条件；若没有主动申请检测，则其实用不上；
    // 在表现上，主要用于：主动技，视为技
    /* 这些就是作为前提条件的主要属性
    filterButton
    selectButton
    filterTarget
    selectTarget
    filterCard
    selectCard
    position
    forced
    complexSelect?:boolean;
    complexCard?:boolean;
    complexTarget
    ai1
    ai2
    */
    //目标
    /**
     * 需要选择多少张牌才能发动
     * 
	 * 选择的牌数
     * 
	 * -1时，选择所有牌,否则就是指定数量的牌
     * 
	 * 数组时，这个数组就是选择牌数的区间,其中任意（至少一张）：[1,Infinity]
     * 
	 * 为变量时（具体情况具体分析），例：()=>number
     */
    selectCard?: number | Select | NoneParmFum<number | Select>;
    /**
     * 需要选择多少个目标才能发动
     * 
	 * 选择的目标数：
     * 
	 * 为-1时，选择全部人
     * 
	 * 为数组时，这个数组就是选择目标数的区间
     */
    selectTarget?: number | Select | NoneParmFum<number | Select>;
    /**
     * 选择的牌需要满足的条件
     * 
	 * 可以使用键值对的简便写法
     * 
	 * 也可以使用函数返回值（推荐）
     * 
     * 都是通过get.filter处理成事件的filterCard的方法；
     * 
     * 直接填true，则有些地方，会优先触发过滤可使用的卡牌，例如ui.click.skill,ai.basic.chooseCard
     * 
     * 注：game.check时，如果当前时viewAs“视为技”，则其过滤技能时filterCard,作为方法，多入参一个event参数，需要时可以使用；
     * （一般没有）
     */
    filterCard?: boolean | CardBaseUIData | TwoParmFun<Card,Player, boolean>|boolean;
    /** 
     * 是否使用mod检测
     * 
     * 取值true;
     * 
	 * 在event.backup使用，
     * 
	 * 当info.viewAs有值的时候（即该技能为视为技），
     * 
	 * 若没有设置filterCard，默认设置一个filterCard：
     *      可以优先使用“cardEnabled2”的mod检测卡牌是否可使用；
     * 
     * 
	 * 已找不到，可能就是改成cardEnabled2
     * 
	 * 则若当前事件为”chooseToUse“（选择卡牌使用）,使用”cardEnabled“卡牌是否能使用mod检测；
     * 
	 * 则若当前事件为”chooseToRespond“（选择卡牌响应），使用”cardRespondable“卡牌是否能响应mod检测；
     */
    ignoreMod?:boolean;
    /**
     * 选择的目标需要满足的条件
     * @param card 
     * @param player 
     * @param target 
     */
    filterTarget?(card: Card, player: Player, target: Target): boolean;
    /** 
     * 指定位置：
     * 'h'：手牌区, 'e'：装备区, 'j'：判定区 
     */
    position?: string;
    /**
     * 选择时弹出的提示
     * 
     * 单参数的方法，主要用再技能点击使用时的提示；
     * 
     * 注：即触发技能/主动发动技能的提示描述信息；
     */
    prompt?: string  | TwoParmFun<Trigger, Player, String> ;
    //| TwoParmFun<Trigger, Player, String> | TwoParmFun<Links, Player, string> //好像没见到用
    /**
     * 二次提示
     * 
     * 主要在createTrigger，step1中，设置event.prompt2
     * 
	 * 若是boolean类型，则取值false,不显示prompt2，默认使用lib.translate[“技能名_info”]的描述
     * 
     * 注：即发动技能时，prompt提示下的提示（默认显示技能描述）；
     */
    prompt2?: string | TwoParmFun<Trigger, Player, String>  | boolean;
    /** 
     * 在ui.click.skill中使用，若当前event.skillDialog不存在，可以用该方法生成的文本的dialog作为skillDialog；
     * 
	 * 若没有该方法，可以使用翻译中该技能的info信息代替。
     */
    promptfunc?: TwoParmFun<Trigger, Player, String>;
    /** 表示这次描述非常长(涉及用了h5文本)，设置为true，重新执行ui.update()，设置skillDialog.forcebutton为true */
    longprompt?: boolean;

    // 补充game.check相关参数的声明：
    /** 过滤不可选择按钮 */
    filterButton?(button: Button, player: Player): boolean;
    /** 按钮的可选数量，大多数情况下，默认1 */
    selectButton?: number | Select | NoneParmFum<number | Select>;
    complexSelect?: boolean;
    /** 复合选牌：即每选完一次牌后，都会重新下一次对所有牌的过滤 */
    complexCard?: boolean;
    complexTarget?:boolean;
    
    /** 一般作为chooseCard相关ai */
    ai1?: Function;
    /** 一般作为chooseTarget相关ai */
    ai2?: Function;

    /**
     * 是否检测隐藏的卡牌
     * 
     * 使用范围：player.hasUsableCard，player.hasWuxie
     * 
     * 常用：让系统知道玩家“有无懈”；
     * 
	 * 例子：可以参考“muniu”（木牛流马）
     * @param player 
     * @param name 
     */
    hiddenCard?(player: Player, name: string): boolean;

    /** 录像相关，game.videoContent.skill中相关 */
    video?(player: Player, data: string | any[]): void;

    process?(player: Player): void;

    //在skillDisabled中，根据以下5个属性，检测技能是否是不能使用（若其中有一个时true都排除掉），在chooseSkill,选择获得技能时筛选列表
    //在getStockSkills中，有前3个标签属性的技能也是无法获取的
    /** 
     * 唯一
     * 
     * 在skillintro中使用（左慈不能化身） 
     * 
     * 注：该技能是否为特殊技能，即左慈化身能否获取等等，常与部分锁定技、主公技、觉醒技连用
     */
    unique?: boolean;
    /** 临时技能，在die死亡时，会被移除 */
    temp?: boolean;
    /** 子技能标签，在subSkill的技能中，会默认标记该属性为true */
    sub?: boolean;
    /** 固有技，不能被removeSkill移除 */
    fixed?: boolean;
    /** 一次性技能，在resetSkills时，直接移除该技能 */
    vanish?: boolean;

    /** 
     * 武将特有固有技能
     * 
     * 从逻辑上来看，比固定技优先级还高，不会受“fengyin”，“baiban”等技能移除；
     * 
	 * 在clearSkills时，如果不是“删除所有的all为true”的情况下，不会被移除；
     * 
	 * 不会被，“化身”之类的技能获得，删除；
     */
    charlotte?: boolean;
    /** 在clearSkills中使用,标记此标记，永远不会被该方法删除，该标记独立使用，一般其他方法没有对其进行处理 */
    superCharlotte? :boolean;
    /** 作用不明，并没有什么用，与ui相关，在skillintro中使用,值为true */
    gainable?: boolean;
    /** 在nodeintro中使用，添加classname:thundertext,值为true */
    thundertext?: boolean;

    //在nodeintro中使用的（这几个配置都没什么意义）
    /** 设置nodeintro的点击事件 */
    clickable?(player: Player): void;
    /** 过滤点击，应该是过滤弹出面板是否能点击，具体作用日后细究 */
    clickableFilter?(player: Player): boolean;
    /** 技能名不带【】括号 */
    nobracket?: boolean;

    //日志相关：
    /** 是否在历史日志中显示，取值未false不显示 */
    logv?: boolean;
    /**
     * 显示场上日志中显示
     * 
     * 在useSkill时，若值为“notarget”，则不显示出对所有“对...”目标相关描述的日志;
     * 
	 * 在useCard时，若该设置未false，则不执行player.logSkill;
     */
    log?: boolean | string;
    /**
     * 目标日志
     * 
	 * 若是字符串，则配置一个当前处理的trigger事件的一个玩家元素，例如"player","source","target"...；
     * 
	 * 若是方法，则配置一个方法直接返回文本,或者玩家
     * 
	 * 若没有配置prompt，显示该配置的提示
     */
    logTarget?: string | TwoParmFun<Trigger, Player, string|Player>;
    /** 
     * 是否通过logTarget显示触发者的目标日志；
     * 
     * 目的：应该是为了细节化显示日志；在createTrigger，step3中使用，取值false，不使用logTarget，显示logSkill;
     */
    logLine?: boolean;

    //技能的信息显示：
    /**
     * 内容描述
     * 
     * 在addCard时，设置“技能名_info”的翻译；（addCard很少使用）
     * 
     * 若时subSkill子技能，则设置“技能名_子技能名_info”的翻译；(主要适用于子技能描述)
     * 
     * 该技能的描述（自定义，非子技能时和game逻辑无关,用于自己的解析逻辑）
     */
    description?: string;
    /** 该技能的描述（自定义，和game逻辑无关,用于自己的解析逻辑） */
    // infoDescription?:string;
    /** 
     * 来源：
     * 
	 * 若该来源技能不存在，则当前技能会被移除；
     */
    derivation?: string[] | string;

    /**
     * 强制加载该card配置，
     * 例如，一些原本不用于contect模式得卡，设置该值可强制加载该card
     */
    forceLoad?:boolean;

    //AI相关
    /** ai的详细配置 */
    ai?: ExAIData;
    
    /**
     * ai用于检测的方法：
     * 
     * 第一个参数好想有些不一样：event，card,子技能button；
     * 
     * 基本ai.basic使用的check方法(既涉及choose系列时用的ai自动选择)：
     * 
	 * 1）ai如何选牌：
     * 
	 * 在ai.basic.chooseCard中使用；
     * 
	 * 2）ai如何选按钮：
     * 
	 * 在ai.basic.chooseButton中使用；
     * 
	 * 3）ai如何选玩家：
     * 
	 * 在ai.basic.chooseTarget中使用；
     * 
	 * 注：其实这些应该都有两个参数的，既第二个参数其实当前所有选中的的数据；
     * 
	 * 有时甚至不传参，所以遇到保存，做好健壮性屏蔽；
     * 
     * 特殊作用：
     * 
	 * 在触发createTrigger中使用,参数：trigger事件，player玩家；
     * 
	 * 1）在技能过滤触发时作为过滤条件（当前技能info.frequent=='check'）：
     * 
	 * 2）告诉ai是否发动这个技能：返回true则发动此技能，即作为createTrigger过程中，设置ai如何chooseBool这个技能；
     * 
     * 例：
     * 
	 * a.触发技判断敌友，大于0为选择队友发动，若<=0是对敌方发动:return get.attitude(player,event.player)>0; 
     * 
	 * b.选取价值小于8的牌：return 8-get.value(card); 数字越大，会选用的牌范围越广，8以上甚至会选用桃发动技能，一般为6-ai.get.value(card); 
     * 
     * 注：
     * 
	 * 两个参数，用于事件触发技能：event:GameEvent,player:Player；
     * 
	 * 一个参数，用于主动使用触发技能：card:Card；
     * 
	 * 无参，简洁写法；
     */
    check?:OneParmFun<Card,number|boolean> | TwoParmFun<GameEvent,Player,number|boolean> | NoneParmFum<number|boolean>;
    // check?(...any:any):number|boolean;
    // /** ai用于检测的方法：用于主动使用触发技能 */
    // check?(card:Card):number|boolean;
    // /** ai用于检测的方法：用于事件触发技能 */
    // check?(event:GameEvent,player:Player):number|boolean;
    // check?():number|boolean;
    // check?:OneParmFun<Card,number|boolean> | OneParmFun<Button,number|boolean> | OneParmFun<Player,number|boolean> | TwoParmFun<GameEvent,Player,number|boolean>;

    //event.addTrigger,默认对于技能优先度的标记：rule<card<equip（注：silent默认比同级多1优先度）
    /** 装备技能 */
    equipSkill?:boolean;
    /** 卡牌技能 */
    cardSkill?:boolean;
    /** 规则技能 */
    ruleSkill?:boolean;

    //自己扩充：
    /** 
     * 技能是否可以触发“重铸” 
     * 
     * 注：目前只能1对1“重铸”，若需要复数牌不能使用；
     */
    chongzhu?:boolean|ThreeParmFun<Card,GameEvent,Player,boolean>;
    /** 扩展，用于某些属性boss技，直接使用game.addGlobalSkill添加该技能 */
    isAddGlobalSkill?: boolean;
    /**
     * 【v1.9.122】与skillCategoriesOf配合。在get.skillCategoriesOf调用时，这里的函数自动调用。作用为读取自定义技能标签名
     */
    categories?(skill: ExSkillData, player: Player): string[];

    //日后还有很多属性要添加的
    [key: string]: any;
}

/** 锁定技的配置（后续，整理每个mod主要触发的范围：（核心阶段，get方法，filter方法） */
interface ExModData {
    /**
     * 卡牌是否可弃置
     * @param card:Card 牌
     * @param player:Player 玩家
     */
    cardDiscardable?(card: Card, player: Player): boolean;
    /**
     * 卡牌是否可用(卡牌能否被选择)
     * cardEnabled一起使用
     * 
     * 适用范围：player.canUse，lib.filter.cardEnabled，默认lib.filter.filterCard
     * 
	 * @param card:Card 牌
     * @param player:Player 玩家
     */
    cardEnabled?(card: Card, player: Player): boolean;
    /**
     * 卡牌是否可用（适用范围基本可以视为所有情况下）
     * 
     * 适用范围：event.backup中技能信息触发（viewAS），cardEnabled（优先于该mod的触发），cardRespondable（优先于该mod的触发），_save（优先于cardSavable的mod触发）中均触发
     */
    cardEnabled2?(card: Card, player: Player): boolean;
    /**
     * 卡牌是否可用（改变卡牌的使用次数）
     * 
	 * 要与cardEnabled一起使用（目前看来两个效果一致）
	 * 
     * @param card Card 牌
     * @param player Player 玩家
     * @param num 使用次数
     */
    cardUsable?(card: Card, player: Player,num:number): boolean|number;
    /**
     * 卡牌是否可以响应
     * 
	 * 要与cardEnabled一起使用（目前看来两个效果一致）
	 * 
     * @param card:Card 牌
     * @param player:Player 玩家
     */
    cardRespondable?(card: Card, player: Player): boolean;
    /**
     * 卡牌是否可以救人
     * 
	 * 要与cardEnabled一起使用（目前看来两个效果一致）
     * 
	 * 注：还是和cardEnabled不同，设置了该mod检测，只要是在_save，濒死求救阶段，都可以触发；
     * 
	 * 不过前提，可能还是要通过该阶段的cardEnabled的检测，目前还没确定，日后再做分析
     * 
     * 适用范围：濒死阶段的filterCard
	 * 
     * @param card:Card 牌
     * @param player:Player 玩家
     * @param taregt:Target 当前处于濒死求救得玩家
     */
    cardSavable?(card: Card, player: Player ,taregt:Target): boolean;
    /** 
     * 在全局的防御范围 
     * 
     * 注：防御距离就是要和别人的距离越远，所以，拉开距离需要增加；
     */
    globalTo?(from: Player, to: Player, current): number;
    /** 
     * 在全局的进攻距离 
     * 
     * 注：进攻距离就是要和别人的距离越近，所以，增加距离需要减掉；
     */
    globalFrom?(from: Player, to: Player, distance:number): number;
    /**
     * 角色的攻击范围
	 * 
	 * 于【v1.9.113.4】更改效果
	 * 
	 * @deprecated attackFrom的mod不再影响攻击范围的数值，改为由attackRangeBase和attackRange控制，但attackFrom和attackTo仍然影响“A是否在B攻击范围内”的判断
	 * 
     */
    attackFrom?(from: Player, to: Player, range:number):number;
	// 通过Object.values(lib.skill).filter(s => s.mod?.attackRangeBase)查询所有带attackRangeBase的技能
	/**
	 * 角色的攻击范围基数
	 * 
	 * 【v1.9.113.4】
	 *
	 */
	attackRangeBase?(player: Player, num: number):number;
	/**
	 * 修改角色的攻击范围
	 * 
	 * 【v1.9.113.4】
	 *
	 */
	attackRange?(player: Player, distance: number):number;
    /**
     * 攻击到角色的范围
     * @param from 
     * @param to 
     * @param range 
     * 
     *  注：和globalTo同理，拉开距离，增加；
     */
    attackTo?(from: Player, to: Player, range:number):number;
    /** 手牌上限 */
    maxHandcard?(player: Player, num: number): number;
    /**
     * 选择的目标
	 * 
     * card：牌；
	 * 
     * player：玩家；
	 * 
     * range：
     *      range[1]：目标个数; 
     */
    selectTarget?(card: Card, player: Player, range: Select): void;

    /**
     * 该卡牌的发动源玩家是否能使用该卡牌（该角色是否能使用该牌）
	 * 
     * @param card:Card 
	 * 
     * @param player:Player 源玩家（使用牌的角色）
	 * 
     * @param target:Target 目标玩家
     */
    playerEnabled?(card: Card, player: Player, target: Target): boolean;
    /** 
     * 是否能成为目标 
	 * 
     * card：牌；
	 * 
     * player：使用牌的角色；
	 * 
     * target：玩家
     */
    targetEnabled?(card: Card, player: Player, target: Target): boolean;

    /**
     * 可以指定任意（范围内）目标
	 * 
     * @param card:Card 牌
	 * 
     * @param player:Player 玩家(使用牌的角色)
	 * 
     * @param target:Target 目标
	 * 
     * @return 返回bool值可以不接受，范围检测，使用返回的结果;返回number，即计算距离是增加该距离；不返回，默认正常的范围检测
     */
    targetInRange?(card: Card, player: Player, target: Target): boolean | number;
    /**
     * 弃牌阶段时，忽略的手牌
	 * 
     * @param card:Card 
	 * 
     * @param player:Player 
     */
    ignoredHandcard?(card: Card, player: Player): boolean;

    /** 过滤可以被丢弃的牌 */
    canBeDiscarded?(card: Card, player: Player, target: Target, eventName: string): boolean;
    /** 过滤可以获得的牌 */
    canBeGained?(card: Card, player: Player, target: Target, eventName: string): boolean;

    /**
     * 改变花色
     */
    suit?(card: Card, suit: string): string;
    /**
     * 改变判断结果
     * 
     * 注：目前似乎没有用到该mod.改变结果不影响判定的牌结果，影响判定的最终结果，即之后判定牌的effect会受该结果影响
     * @param player 
     * @param result 
     */
    judge?(player: Player, result: JudgeResultData);

    //2020-2-23版本：
    /** 
     * 为技能配置一个自定义在事件中处理的回调事件，该事件的使用需要自己使用，实际是一个自定义事件，没什么实际意义；
     * 
	 * 其设置的位置在技能content期间设置，设置在期间引发的事件中；
     * 
	 * 用于以下场合：judge，chooseToCompareMultiple，chooseToCompare
     * 
	 * 新版本的judge事件中 可以通过设置callback事件 在judgeEnd和judgeAfter时机之前对判定牌进行操作
     * 
	 * 在判断结果出来后，若事件event.callback存在，则发送“judgeCallback”事件
     * 
     * 同理拼点,在拼点结果出来后，发送“compareMultiple”事件（“compare”暂时没有）
     * 
     * callback就是作为以上事件的content使用
     */
    callback?:ContentFunc;

    //无懈相关：主要在_wuxie中，（此时应时无懈询问阶段），检测触发卡牌以下对应mod
    /*
        主要参数解析：
            card:trigger.card 触发该无懈阶段的卡牌；
			
            player:当前事件的玩家（应该也是触发该阶段的玩家）
			
            target:trigger.target 触发该无懈阶段的卡牌的玩家；
			
            current:当前game.filterPlayer，遍历过滤检测可以发动无懈的每一个玩家（即当前过滤检测中的玩家）
    */
    //触发阶段为:phaseJudge(判定阶段)
    /** 是否能在判定阶段使用无懈 */
    wuxieJudgeEnabled?(card: Card, player: Player, current: Current): boolean;
    /** 是否能在判定阶段响应无懈 */
    wuxieJudgeRespondable?(card: Card, player: Player, current: Current): boolean;
    //非判定阶段触发
    /** 是否能使用无懈 */
    wuxieEnabled?(card: Card, player: Player, target: Target, current: Current): boolean;
    /** 是否能响应无懈 */
    wuxieRespondable?(card: Card, player: Player, target: Target, current: Current): boolean;

    //94版本
    /** 改变卡牌名字  用于get.name*/
    cardname?(card: Card, player: Player): string;
    /** 改变卡牌伤害属性   用于get.nature*/
    cardnature?(card: Card, player: Player): string;
	/**
	 * 改变卡牌点数
	 * 
	 * 【v1.9.113.5】
	 * 
	 * @param number 原来的卡牌点数
	 */
	cardnumber?(card: Card, player: Player, number: number): number;

    /** 对特定角色使用牌的次数限制（用于优化【对特定角色使用牌无次数限制】的机制）【v1.9.105】 */
    cardUsableTarget?(card: Card, player: Player, target: Target):boolean;

    /** 用于get.value，对最后得返回value结果做处理 */ 
    aiValue?(player:Player,card:Card,num:number):number;
    /** 用于get.order，对最后得返回order结果做处理 */ 
    aiOrder?(player:Player,card:Card,num:number):number;

    //player.inRange新增：
    /** 在玩家范围内,即target是否在player的攻击范围内 */
    inRange?(from: Player, to: Player):boolean;
    /** 在目标范围内,即player是否在source的攻击范围内 */
    inRangeOf?(from: Player, to: Player):boolean;

    /**
     * 强制判断卡牌能否重铸
     * 【v1.9.108.6~】
     * @param card 
     * @param player 
     */
    cardChongzhuable?(card: Card, player: Player):boolean;

    //希望扩展：
    //是否能成为技能的目标

	/** 其他扩展自定义 */
	[key: string]: Function;
}

/** 
 * 选择按钮配置 
 * 
 * 时机：chooseToUse
 * 
 * 当你在选择使用时，选择的是技能，若技能有chooseButton设置，则执行player.chooseButton方法:
 * 
 * 以下则为调用该chooseButton的相关参数：
 * 
 * 将操作返回的“视为”结果卡牌，通过event.backup通过视为卡牌的操作，重新操作该操作（一个绕的逻辑）；
 * 
 * 其实质：是一种视为技的操作，弥补一些视为使用某些xxx锦囊时的复杂操作；
 * 
 * 在backup执行方法无法触发通信的原因：
    苏婆玛丽奥  11:50:33
    主机不需要执行
    这玩意是直接客机执行的
    执行完了 把总的结果和生成的backup技能发过去；
    即chooseButton的所有方法都是交给客机执行的，主机只负责获取返回的backup信息；

 * 当前使用范围：
 * 
 * chooseToUse
 * 
 * chooseToRespond 【v1.9.106】
 */
interface ChooseButtonConfigData {
    //player.chooseButton的参数：
    /** 
     * 选择内容的面板
     * 
     * 需要操作的内容，在这里创建；
	 * 
     * 返回传递给player.chooseButton的参数；
     * 
     * 其中参数event,为当前chooseToUse事件
     */
    dialog?(event: GameEvent, player: Player): Dialog;
    /**
     * 卡牌选择条件
     * 
     * 既player.chooseButton的filterButton
     * @param button 
     * @param player 
     */
    filter?(button: Button, player: Player): void;
    /**
     * ai如何选牌
     * 
     * 既player.chooseButton的ai
     * @param button 
     */
    check?(button: Button): number;
    /** 
     * 选择数目，默认为1
     * 
     * 既player.chooseButton的selectButton
     */
    select?: number;

    //成功选择操作后的内容：
    /**
     * 返回“视为”部分（即当作该选择为视为的操作逻辑）
     * 
     * 将该返回内容给event.backup，视为当前返回的信息条件作为使用；
     * 
     * @param links result.links（由get.links获得，一般是指当前面板上的所有可选择按钮的link数据,一般为卡牌信息）
     * @param player 
     */
    backup?(links: Links, player: Player): ExSkillData;  
    /**
     * 选择时弹出的提示
     * @param links result.links（由get.links获得，一般是指当前面板上的所有可选择按钮的link数据,一般为卡牌信息）
     * @param player 
     */
    prompt?(links: Links, player: Player): string;

    /**
     * 进行额外的选择时：
     * 【v1.9.105】
     * 
     * 在chooseButton类出牌阶段技能中调用chooseControl函数而不是chooseButton函数进行第一段选择
     * 
     * 注1：使用参考  例：神户小鸟【花绽】
	 * ；
     * 注2：生成中所有选项，记得加上cancel2！
	 * 
     * 注3：其选择结果在：result.control
	 * 
     * 注4：返回的结果是提供给player.chooseControl方法的参数列表；
	 * 
     * 注5：默认是使用配置的dialog方法，返回的dialog，若设有该参数配置，则优先使用它返回的参数列表，从而构建的control；
     * @param event 
     * @param player 
     */
    chooseControl?(event: GameEvent, player: Player):string[];
}

/** 时机的配置信息 */
interface ExTriggerData {
    /** 
     * 全场任意一名角色 
	 * 
     * 代表所有人
     */
    global?: string | string[];
    /** 
     * 玩家自己 
	 * 
     * 触发时件中，技能拥有者为事件的发起者;
	 * 
     * 注：需要是自己引发的事件；
     */
    player?: string | string[];
    /**
     * 你自己成为目标时
     */
    target?: string | string[];
    /**
     * 来源是你自己时
     */
    source?: string | string[];
}

/**
 * hookTrigger在不同方法中触发的方法接口
 * 
 * 注：似乎时用于模式，作为，游戏全局的一些每次都需要触发的方法（算是不实用的一个接口）
 */
interface HookTriggerData {
    /**
     * 【hookTrigger相关】
	 * 
     * 之后处理方法
	 * 
     * 在createTrigger中最终步骤中，需要当前没有hookTrigger配置才调用到
	 * 
     * 若返回true时，会触发“triggerAfter”
	 * 
     * @param event 
     * @param player 
     * @param triggername 
     */
    after?(event: GameEvent, player: Player, triggername: string): boolean;
    /**
     * 【hookTrigger相关】
	 * 
     * 在filterTrigger中执行，过滤发动条件，和filter有些类似，具体功能稍后分析
	 * 
     * @param event 
     * @param player 
     * @param name 
     * @param skill 
     */
    block?(event: Trigger, player: Player, name: string, skill: Skill): boolean;
    /**
     * 【hookTrigger相关】
	 * 
     * 在logSkill中执行，每次触发logSkill都会触发
     */
    log?: ThreeParmFun<Player,string,Target[],void>;
}
 
