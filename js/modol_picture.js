//vue代码
var app = new Vue({
    el: '#app',
    data: {
        inp: "",
        info: {}, //自定义属性绑定，用于传输电影信息到播放器
        egif: false, //是否显示大图 默认隐藏
        eg: {}, //自定义属性绑定，用于传输图片 查看大图
        tags: [], //标签数组 来自数据的class
        //主页
        box: [
            { id: "v1", class: "box siwa ol", tags: ["丝袜", "秘书ol"], src: "https://besa-lcx.github.io/LAV_picture_jp/STARS-439.jpg", text: "STARS-439「ほんとは君が好きだったのに…」さっさと告白してくれない同期（幼馴染）の目の前で上司と見せつけSEXをしてしまう私… 青空ひかり", video: "https://besa-lcx.github.io/lcx_av_library/video/JAV/STARS-439.mp4" },
            { id: "v2", class: "box siwa ol waishe", tags: ["丝袜", "秘书ol", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-770.jpg", text: "IPX-770 死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた神菜美まい", video: "https://besa-lcx.github.io/lcx_av_library/video/JAV/IPX-770.mp4" },
            { id: "v3", class: "box siwa renqi waishe", tags: ["丝袜", "秘书ol", "人妻", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-245.jpg", text: "SSIS-245 酒、ギャンブル漬けの日雇い労働者のオレがモデル並みの美人妻と毎日ハメちぎりで人生大逆転 星宮一花", video: "https://besa-lcx.github.io/LAV_video_jp/SSIS-245.mp4" },
            { id: "v4", class: "box siwa ol zc", tags: ["丝袜", "秘书ol", "中出"], src: "https://besa-lcx.github.io/LAV_picture_jp/MIAA-548.jpg", text: "MIAA-548 見せつけOCS尻で即ハメオフィス不倫を持ちかける誘惑女上司 篠田ゆう", video: "https://besa-lcx.github.io/LAV_video_jp/MIAA-548.mp4" },
            { id: "v5", class: "box siwa ol waishe", tags: ["丝袜", "秘书ol", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-157.jpg", text: "SSIS-157 出張先で軽蔑している中年セクハラ上司とまさかの相部屋に…朝まで続く絶倫性交に不覚にも感じてしまったHカップ新入社員", video: "https://besa-lcx.github.io/lcx_av_library//video/JAV/STARS-439.mp4" },
            { id: "v6", class: "box siwa ol yanshe", tags: ["丝袜", "秘书ol", "颜射"], src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-625.jpg", text: "IPX-625  死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた梓ヒカリ", video: "https://besa-lcx.github.io/lcx_av_library//video/JAV/STARS-439.mp4" }
        ],
        //主页 日本番号一览
        boxgroup: [
            { id: "v7", class: "box siwa ol", tags: ["丝袜", "秘书ol"], src: "https://besa-lcx.github.io/LAV_picture_jp/STARS-439.jpg", text: "STARS-439「ほんとは君が好きだったのに…」さっさと告白してくれない同期（幼馴染）の目の前で上司と見せつけSEXをしてしまう私… 青空ひかり", video: "https://besa-lcx.github.io/lcx_av_library/video/JAV/STARS-439.mp4" },
            { id: "v8", class: "box siwa ol waishe", tags: ["丝袜", "秘书ol", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-770.jpg", text: "IPX-770 死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた神菜美まい", video: "https://besa-lcx.github.io/lcx_av_library/video/JAV/IPX-770.mp4" },
            { id: "v9", class: "box siwa renqi waishe", tags: ["丝袜", "人妻", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-245.jpg", text: "SSIS-245 酒、ギャンブル漬けの日雇い労働者のオレがモデル並みの美人妻と毎日ハメちぎりで人生大逆転 星宮一花", video: "https://besa-lcx.github.io/LAV_video_jp/SSIS-245.mp4" },
            { id: "v10", class: "box siwa ol zc", tags: ["丝袜", "秘书ol", "中出"], src: "https://besa-lcx.github.io/LAV_picture_jp/MIAA-532.jpg", text: "MIAA-532 ある日、隠れ肉食新卒部下に童貞を喰べられて、その後もチ○ポとマ○コの相性が良すぎて都合良くセフレ扱いされる上司の僕 星谷瞳", video: "https://besa-lcx.github.io/LAV_video_jp/MIAA-532.mp4" },
            { id: "v11", class: "box siwa ol zc", tags: ["丝袜", "秘书ol", "中出"], src: "https://besa-lcx.github.io/LAV_picture_jp/MIAA-548.jpg", text: "MIAA-548 見せつけOCS尻で即ハメオフィス不倫を持ちかける誘惑女上司 篠田ゆう", video: "https://besa-lcx.github.io/LAV_video_jp/MIAA-548.mp4" },
            { id: "v12", class: "box siwa renqi", tags: ["丝袜", "人妻"], src: "https://besa-lcx.github.io/LAV_picture_jp/CLUB-658.jpg", text: "CLUB-658 完全盗撮 同じアパートに住む美人妻2人と仲良くなって部屋に連れ込んでめちゃくちゃセックスした件。其の41", video: "https://besa-lcx.github.io/LAV_video_jp/CLUB-658.mp4" },
            { id: "v13", class: "box siwa renqi zc", tags: ["丝袜", "人妻", "中出"], src: "https://besa-lcx.github.io/LAV_picture_jp/CLOT-020.jpg", text: "CLOT-020-竹内夏希", video: "https://besa-lcx.github.io/LAV_video_jp/CLOT-020.mp4" },
            { id: "v14", class: "box siwa ol waishe", tags: ["丝袜", "人妻", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-157.jpg", text: "SSIS-157 出張先で軽蔑している中年セクハラ上司とまさかの相部屋に…朝まで続く絶倫性交に不覚にも感じてしまったHカップ新入社員 小宵こなん", video: '' },
            { id: "v15", class: "box hushi", tags: ["护士"], src: "https://besa-lcx.github.io/LAV_picture_jp/MVSD-473.jpg", text: "MVSD-473 院内淫交 溜まった患者に有料マ○コ貸し出し吐精サービス 堀内未果子", video: '' },
            { id: "v16", class: "box luoli waishe", tags: ["萝莉", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/IPIT-010.jpg", text: "IPIT-010 彼女の美人お姉さんのハミ尻デカ尻誘惑が反則すぎる。 七瀬アリス", video: '' },
            { id: "v17", class: "box hushi renqi siwa", tags: ["护士", "人妻", "丝袜"], src: "https://besa-lcx.github.io/LAV_picture_jp/MVSD-475.jpg", text: "MVSD-475 脅迫ナースコール 声が出せない相部屋病室で絶倫クズ男の不潔な巨根で何度もイカされ中出しされた献身人妻ナース 妃ひかり", video: '' },
            { id: "v18", class: "box siwa ol waishe", tags: ["丝袜", "秘书ol", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/MMUS-054.jpg", text: "MMUS-054 挑発パンチラ 絶対誘惑ハーレムオフィス 木下ひまり、森日向子", video: '' },
            { id: "v19", class: "box siwa renqi waishe", tags: ["丝袜", "人妻", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/SW-788.jpg", text: "SW-788 近所のデカ尻奥さんはミニスカ黒パンストで誘惑するむっつりスケベ！", video: '' },
            { id: "v20", class: "box siwa ol yanshe", tags: ["丝袜", "秘书ol", "颜射"], src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-625.jpg", text: "IPX-625 死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた梓ヒカリ", video: '' },
            { id: "v21", class: "box siwa ol waishe", tags: ["丝袜", "秘书ol", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/WFR-016.jpg", text: "WFR-016 仕事帰りの性欲を持て余したお姉さんが奥までビショ濡れイキ狂い 藤森里穂", video: '' },
            { id: "v26", class: "box siwa renqi waishe", tags: ["丝袜", "人妻", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/ASI-031.jpg", text: "ASI-031 初撮り人妻 23 今からこの人妻とハメ撮りします。最上ゆら", video: "" },
            { id: "v30", class: "box nv siwa waishe", tags: ["女子校生", "丝袜", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/ZMEN-083.jpg", text: "ZMEN-083 女子○生の義妹は僕を男とみてないのか無防備なので我慢できずにハメてしまった…2", video: "" },
            { id: "v54", class: "box siwa ol waishe", tags: ["丝袜", "秘书ol", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-865.jpg", text: "SSNI-865 巨乳OLと絶倫童貞上司の毎週エスカレートする週末のセックス残業 三上悠亜", video: "" },
            { id: "v63", class: "box hushi siwa nvup waishe", tags: ["护士", "丝袜", "女上位", "外射"], src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-830.jpg", text: "SSNI-830 股下3センチ美脚タイトミニスカナースの誘惑 星宮一花", video: "" },
            { id: "v43", class: "box ht", tags: ["家教"], src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-596.jpg", text: "IPX-596 美人家庭教師カレン先生の接吻レクチャー個人レッスン 楓カレン", video: "" },
        ],
        //主页 台湾特色
        boxgroup2: [
            { id: "v145", class: "box siwa renqi tao", tags: ["丝袜", "人妻", "戴套"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw1.png", text: "ck! 我的肉体来为您治疗勃起障碍-阿蛇姐姐", video: "" },
            { id: "v146", class: "box siwa ol tao nvup endinter", tags: ["丝袜", "秘书ol", "戴套", "女上位", "后入"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw3.png", text: "ck! 日出文化传媒之OL丝袜诱惑-娜娜", video: "" },
            { id: "v147", class: "box siwa ol tao waishe endinter", tags: ["丝袜", "秘书ol", "戴套", "外射", "后入"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw10.png", text: "ck! 干爹的肉便器开档黑丝拜金女-香菜公主", video: "" },
            { id: "v148", class: "box siwa ol ht kyoshi nvup endinter tao waishe", tags: ["丝袜", "秘书ol", "家教", "女教师", "女上位", "后入", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw13.png", text: "ck! 家访老师的药物迷惑-香菜公主", video: "" },
            { id: "v149", class: "box luoli nv siwa waishe", tags: ["萝莉", "女子校生", "丝袜", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw19.png", text: "用性交鼓励你的麻衣学姐-柚子猫", video: "" },
            { id: "v150", class: "box yue waishe", tags: ["约炮", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw21.png", text: "ck! 游戏陪玩的特殊手段-斯文禽兽", video: "" },
            { id: "v151", class: "box luoli nv endinter tao waishe", tags: ["萝莉", "女子校生", "后入", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw38.png", text: "国产AV剧情-面基叛逆期少女-不见星空", video: "" },
            { id: "v152", class: "box luoli tao endinter waishe", tags: ["萝莉", "戴套", "后入", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw43.png", text: "甜美萌妹生日遭灌醉-不见星空", video: "" },
            { id: "v153", class: "box luoli yue tao nvup endinter", tags: ["萝莉", "约炮", "戴套", "女上位", "后入"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw44.png", text: "可爱女仆性服务-不见星空", video: "" },
            { id: "v154", class: "box out tao waishe", tags: ["户外", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw51.png", text: "古装剧情野性欢愉-穆雪", video: "" },
            { id: "v155", class: "box renqi yue tao waishe", tags: ["人妻", "约炮", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw53.png", text: "奥运迷妹小少妇-袁子仪", video: "" },
            { id: "v156", class: "box siwa nv waishe", tags: ["丝袜", "女子校生", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw70.png", text: "下面有跟棒棒糖剧情演绎-学妹用肉体抵债房费高潮子宫收缩", video: "" },
            { id: "v157", class: "box nv tao waishe", tags: ["女子校生", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw71.png", text: "激情色情学生妹勾引自己的老师MD0134", video: "" },
            { id: "v158", class: "box luoli nvup tao waishe", tags: ["萝莉", "女上位", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw79.png", text: "吃不完的早餐-突袭爆草沙发上的大奶子女友TM0014", video: "" },
            { id: "v159", class: "box renqi nvup tao waishe", tags: ["人妻", "女上位", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw88.png", text: "稚嫩人妻的挑逗背着叔叔偷偷做爱MD0132苏畅", video: "" },
            { id: "v160", class: "box ol siwa tao waishe", tags: ["秘书ol", "丝袜", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw89.png", text: "律政俏佳人夏晴子", video: "" },
            { id: "v161", class: "box siwa ol endinter yanshe", tags: ["丝袜", "秘书ol", "后入", "颜射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw94.png", text: "JVID剧情微电影无码气质美女薰工地督导惨遭水电工狼狈围奸", video: "" },
            { id: "v162", class: "box luoli siwa tao endinter", tags: ["萝莉", "丝袜", "戴套", "后入"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw95.png", text: "极品白虎萌妹又又酱lolita被爸爸操的不能自理小眼神真无辜-又又酱", video: "" },
            { id: "v163", class: "box siwa ol nvup endinter tao", tags: ["丝袜", "秘书ol", "女上位", "后入", "戴套"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw97.png", text: "swag面试就面试为什麽要人家脱衣服JSBY-0011", video: "" },
            { id: "v164", class: "box nv out luoli endinter nvup tao yanshe", tags: ["女子校生", "户外", "萝莉", "后入", "女上位", "戴套", "颜射"], src: "https://besa-lcx.github.io/LAV_picture_tw/tw98.png", text: "swag啪啪列车-差点被抓捷运上玩跳蛋被发现MRT-0002linlinbebe琳琳", video: "" },

        ],
        //主页-国产系列
        boxgroup3: [
            { id: "v165", class: "box siwa renqi tao yue", tags: ["丝袜", "人妻", "戴套", "约炮"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch1.png", text: "ck! 会所女技师为少年做全套", video: "" },
            { id: "v166", class: "box siwa ol endinter nvup zc", tags: ["丝袜", "秘书ol", "后入", "女上位", "中出"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch2.png", text: "ck! 酒店公关经理-chocoletmilkk", video: "" },
            { id: "v167", class: "box renqi siwa endinter zc", tags: ["人妻", "丝袜", "后入", "中出"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch3.png", text: "ck! 性感紧身空姐服-国大夫妇", video: "" },
            { id: "v168", class: "box siwa renqi tao", tags: ["丝袜", "人妻", "戴套"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch10.png", text: "国产骚货《下面有跟棒棒糖》黑丝高跟性感御姐极致挑逗 按在", video: "" },
            { id: "v169", class: "box luoli siwa zc", tags: ["萝莉", "丝袜", "中出"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch25.png", text: "91大神D先生后入爆操极品白丝窒息女仆", video: "" },
            { id: "v170", class: "box renqi tao waishe", tags: ["人妻", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch27.png", text: "妻子的野心下集林凤娇-黄雪纯", video: "" },
            { id: "v171", class: "box yue nvup tao waishe", tags: ["约炮", "女上位", "戴套", "外射"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch33.png", text: "大神汤三哥复出广州大战高颜值F杯极品淘宝模特看着广州塔射满她", video: "" },
            { id: "v172", class: "box luoli siwa zc", tags: ["萝莉", "丝袜", "中出"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch36.png", text: "小余-剧情演出被尾强奸的汉服少女", video: "" },
            { id: "v173", class: "box siwa ol waishe", tags: ["丝袜", "秘书ol", "外射"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch41.png", text: "下面有根棒棒糖-白领女友喜欢穿黑色厚裤袜", video: "" },
            { id: "v174", class: "box siwa ol Carshock waishe", tags: ["丝袜", "秘书ol", "车震", "外射"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch45.png", text: "接小骚逼秘书下班实在忍不住在车上干了起来", video: "" },
            { id: "v175", class: "box nv siwa waishe", tags: ["女子校生", "丝袜", "外射"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch47.png", text: "00后大学生下面有根棒棒糖黑丝淫语激情性爱", video: "" },
            { id: "v176", class: "box kyoshi siwa nvup tao", tags: ["女教师", "丝袜", "女上位", "戴套"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch48.png", text: "网曝门事件最近火爆高颜值美女为人师婊小学教室李雪梨与男友不雅视图流出第二期", video: "" },
            { id: "v177", class: "box nv yue tao endinter", tags: ["女子校生", "约炮", "戴套", "后入"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch50.png", text: "91骚货果儿精彩自拍作品集各种姿势啪啪啪天天就是操逼", video: "" },
            { id: "v178", class: "box yue endinter waishe yanshe", tags: ["约炮", "后入", "外射", "颜射"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch53.png", text: "可爱小女仆为了5星好评让我爆肏-白丝服务主人非常到位", video: "" },
            { id: "v179", class: "box ca siwa waishe", tags: ["空姐", "丝袜", "外射"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch55.png", text: "公子哥驱车迎接刚下航的黑丝性感美腿大奶空姐前凸后翘身材太棒了国语对白", video: "" },
            { id: "v180", class: "box yue endinter nvup siwa tao yanshe", tags: ["约炮", "后入", "女上位", "丝袜", "戴套", "颜射"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch56.png", text: "在桑拿会所点到一个极品技师穿上各种制服装让人沉醉的技术", video: "" },
            { id: "v181", class: "box siwa renqi yue", tags: ["丝袜", "人妻", "约炮"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch57.png", text: "真刺激边讲着电话边给老公戴绿帽", video: "" },
            { id: "v182", class: "box siwa luoli nv tao endinter nvup", tags: ["丝袜", "萝莉", "女子校生", "戴套", "后入", "女上位"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch61.png", text: "18岁女友醉酒瘫软在床被男友迷操暴插白丝肉丝情趣内衣迷迷糊糊的呻吟", video: "" },
            { id: "v183", class: "box siwa nv luoli tao endinter", tags: ["丝袜", "女子校生", "萝莉", "戴套", "后入"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch63.png", text: "福利姬抖音妹-JK黑丝爆操大屁股粉穴", video: "" },
            { id: "v184", class: "box yue nv tao nvup endinter", tags: ["约炮", "女子校生", "戴套", "女上位", "后入"], src: "https://besa-lcx.github.io/LAV_picture_ch/ch64.png", text: "情感主播李寻欢TP再约极品大奶粉穴萌妹子还是那么有初恋的感觉", video: "" },
        ],
        //主页-韩国激情
        boxgroup4: [
            { id: "v185", class: "box renqi siwa nvup", src: "https://besa-lcx.github.io/LAV_picture_kr/kr1.png", text: "ck! 摄影棚看妻子被操-韩国骚妻", video: "" },
            { id: "v186", class: "box nv nvup", src: "https://besa-lcx.github.io/LAV_picture_kr/kr2.png", text: "刚体验完初潮的邻家JK00后女孩被强推，做爱都不忘玩手机", video: "" },
            { id: "v187", class: "box renqi endinter yanshe", src: "https://besa-lcx.github.io/LAV_picture_kr/kr3.png", text: "越南门事件极品单身母亲LngMinhPhng与飞行员男友性爱视频外流最全合集", video: "" },
            { id: "v188", class: "box siwa nv nvup yanshe", src: "https://besa-lcx.github.io/LAV_picture_kr/kr4.png", text: "学妹到我家玩我把裤子脱了她就上来帮我舔真听话逼逼又粉叫的也好听", video: "" },
        ],
        //主页-欧美情色
        boxgroup5: [
            { id: "v189", class: "box siwa nv waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea1.png ", text: "第一视角-大吊哥哥把淫荡妹妹干到翻白眼", video: "" },
            { id: "v190", class: "box luoli nv yanshe nvup", src: "https://besa-lcx.github.io/LAV_picture_ea/ea2.png ", text: "妹妹做瑜伽也不老实勾引我狠狠操她", video: "" },
            { id: "v191", class: "box luoli endinter nvup waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea3.png ", text: "女仆负责干活我负责干女仆", video: "" },
            { id: "v192", class: "box out nvup waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea4.png ", text: "在天台把苗条白皙骚逼射得一肚皮精液", video: "" },
            { id: "v193", class: "box waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea5.png ", text: "美妙的身躯就让我射在她的肚皮上", video: "" },
            { id: "v194", class: "box renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea6.png", text: "本周推特大奶抽汁超强合集", video: "" },
            { id: "v195", class: "box yue nvup endinter waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea7.png ", text: "金发爆乳尤物大翘臀都被啪得通红了", video: "" },
            { id: "v196", class: "box nv endinter yanshe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea8.png ", text: "骚气女友化身求精饥渴母狗", video: "" },
            { id: "v197", class: "box luoli nv nvup waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea9.png ", text: "哥哥在自慰被我抓到就让我来榨干他", video: "" },
            { id: "v198", class: "box luoli nv waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea10.png ", text: "第一视角-控制不住喷射弄脏了女友的肚皮", video: "" },
            { id: "v199", class: "box Carshock yue siwa endinter waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea11.png ", text: "金发美女在车里被大屌司机顶到底", video: "" },
            { id: "v200", class: "box siwa luoli endinter waishe", src: "https://besa-lcx.github.io/LAV_picture_ea/ea12.png ", text: "暴力肆虐我的黑丝女友然后在丝袜上射精", video: "" },
        ],
        //日本番号
        boxgroupJav: [],
        boxgroupTw: [],
        boxgroupCh: []

    },
    computed: {
        search() {
            var s = this.inp.toUpperCase();
            if (s) {
                return this.boxgroup.filter((value) => {
                    return value.text.includes(s);
                });
            }
        },
    },
    methods: {
        pageChange(k) {
            $(".content-top,.container-content").hide();
            $("#video-player").show();
            this.info = k;
            this.tags = k.tags;
            $("title").text(k.text);
        },
        open_play(i) {
            console.log(i.src);
            this.pageChange(i)
            location.href = "#video-player";
        },
        //jav
        open_play2(j) {
            this.pageChange(j);
            location.href = "#video";
        },
        sousuo1() {
            if (!this.inp) {
                return this.boxgroup;
            } else {
                return this.search;
            }
        },
        //放大看图
        enlargeIcon(k) {
            this.egif = true;
            this.eg = k;
        },
        closeModol() {
            this.egif = false;
        }
    },
    created() {

    },
    mounted() {
        //取出session数据,延迟0.5秒执行。（等数据存入session后再取）
        setTimeout(() => {
            let jav = sessionStorage.getItem("Jav");
            let tw = sessionStorage.getItem("tw");
            let ch = sessionStorage.getItem("ch");
            let jo1 = JSON.parse(jav);
            let jo2 = JSON.parse(tw);
            let jo3 = JSON.parse(ch);
            this.boxgroupJav = jo1; //日本番号数据渲染
            this.boxgroupTw = jo2; //台湾特色数据渲染
            this.boxgroupCh = jo3; //国产系列数据渲染
        }, 500);
        //获取屏幕高度
        var sh = $(window).width();
        //点击页面跳转
        $("#home").click(function() {
            $(".back-top").hide();
        });
        $("#page1,#page2,#page3,#page4,#page5,#page6,#page7,#page8,#page9,#page10,#page11,#page12").click(function() {
            $(".content-top,.container-content").hide();
            //移动端关闭右侧导航栏
            $("#offcanvasRight").css({ visibility: "hidden" });
        });
        $("#page1,#page7").click(function() {
            $("title").text("日本番号");
            //pc端
            if (sh <= 1500 && sh >= 960) {
                $("iframe").height("6200px");
            } else if (sh < 960 && sh >= 768) {
                $("iframe").height("5000px");
            } //移动端
            else {
                $("iframe").height("17000px");
            }
            location.href = "#page1";
            $(".back-top").show();
        });
        $("#page2,#page8").click(function() {
            $("title").text("台湾特色");
            //pc端
            if (sh <= 1500 && sh >= 960) {
                $("iframe").height("4450px");
            } else if (sh < 960 && sh >= 768) {
                $("iframe").height("3250px");
            } //移动端
            else {
                $("iframe").height("12500px");
            }
            location.href = "#page2";
            $(".back-top").show();

        });
        $("#page3,#page9").click(function() {
            $("title").text("国产系列");
            //pc端
            if (sh <= 1500 && sh >= 960) {
                $("iframe").height("3200px");
            } else if (sh < 960 && sh >= 768) {
                $("iframe").height("2000px");
            } //移动端
            else {
                $("iframe").height("8400px");
            }
            location.href = "#page3";
            $(".back-top").show();
        });
        $("#page4,#page10").click(function() {
            $("title").text("韩国激情");
            $("iframe").height("700px");
            location.href = "#page4";
            $(".back-top").show();
        });
        $("#page5,#page11").click(function() {
            $("title").text("欧美情色");
            $("iframe").height("700px");
            location.href = "#page5";
            $(".back-top").show();
        });
        $("#page6,#page12").click(function() {
            $("title").text("短视频");
            $("iframe").height("1000px");
            location.href = "#page6";
            $(".back-top").show();
        });
        //图片懒加载
        //获取全部img标签
        var imgs = document.querySelectorAll(".box>img");
        var imgs_long = document.querySelectorAll(".box-Erect>img");

        window.addEventListener("scroll", (e) => {
            //当发生滚动事件时调用ergodic事件
            ergodic();
        });

        function ergodic() {
            // 遍历每一张图
            for (let i of imgs) {
                //判断当前图片是否在可视区内
                if (i.offsetTop < window.innerHeight + window.scrollY) {
                    //获取自定义data-src属性的值
                    let trueSrc = i.getAttribute("data-src");
                    //把值赋值给图片的src属性
                    i.setAttribute("src", trueSrc);
                }
            }
            // 遍历每一张图
            for (let i of imgs_long) {
                //判断当前图片是否在可视区内
                if (i.offsetTop < window.innerHeight + window.scrollY) {
                    //获取自定义data-src属性的值
                    let trueSrc = i.getAttribute("data-src");
                    //把值赋值给图片的src属性
                    i.setAttribute("src", trueSrc);
                }
            }
        }
        //没发生滚动事件时也要先执行一次
        ergodic();
    }



})