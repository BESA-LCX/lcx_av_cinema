//vue代码
var app = new Vue({
    el: '#app',
    data: {
        inp: "",
        info: {}, //自定义属性绑定，用于传输电影信息到播放器
        egif: false, //是否显示大图 默认隐藏
        eg: {}, //自定义属性绑定，用于传输图片 查看大图
        //主页
        box: [
            { id: "v1", class: "box siwa ol", src: "https://besa-lcx.github.io/LAV_picture_jp/STARS-439.jpg", text: "STARS-439「ほんとは君が好きだったのに…」さっさと告白してくれない同期（幼馴染）の目の前で上司と見せつけSEXをしてしまう私… 青空ひかり", video: "https://besa-lcx.github.io/lcx_av_library/video/JAV/STARS-439.mp4" },
            { id: "v2", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-770.jpg", text: "IPX-770 死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた神菜美まい", video: "https://besa-lcx.github.io/lcx_av_library/video/JAV/IPX-770.mp4" },
            { id: "v3", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-245.jpg", text: "SSIS-245 酒、ギャンブル漬けの日雇い労働者のオレがモデル並みの美人妻と毎日ハメちぎりで人生大逆転 星宮一花", video: "https://besa-lcx.github.io/LAV_video_jp/SSIS-245.mp4" },
            { id: "v4", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/MIAA-548.jpg", text: "MIAA-548 見せつけOCS尻で即ハメオフィス不倫を持ちかける誘惑女上司 篠田ゆう", video: "https://besa-lcx.github.io/LAV_video_jp/MIAA-548.mp4" },
            { id: "v5", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-157.jpg", text: "SSIS-157 出張先で軽蔑している中年セクハラ上司とまさかの相部屋に…朝まで続く絶倫性交に不覚にも感じてしまったHカップ新入社員", video: "https://besa-lcx.github.io/lcx_av_library//video/JAV/STARS-439.mp4" },
            { id: "v6", class: "box siwa ol yanshe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-625.jpg", text: "IPX-625  死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた梓ヒカリ", video: "https://besa-lcx.github.io/lcx_av_library//video/JAV/STARS-439.mp4" }
        ],
        //主页 日本番号一览
        boxgroup: [
            { id: "v7", class: "box siwa ol", src: "https://besa-lcx.github.io/LAV_picture_jp/STARS-439.jpg", text: "STARS-439「ほんとは君が好きだったのに…」さっさと告白してくれない同期（幼馴染）の目の前で上司と見せつけSEXをしてしまう私… 青空ひかり", video: "https://besa-lcx.github.io/lcx_av_library/video/JAV/STARS-439.mp4" },
            { id: "v8", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-770.jpg", text: "IPX-770 死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた神菜美まい", video: "https://besa-lcx.github.io/lcx_av_library/video/JAV/IPX-770.mp4" },
            { id: "v9", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-245.jpg", text: "SSIS-245 酒、ギャンブル漬けの日雇い労働者のオレがモデル並みの美人妻と毎日ハメちぎりで人生大逆転 星宮一花", video: "https://besa-lcx.github.io/LAV_video_jp/SSIS-245.mp4" },
            { id: "v10", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/MIAA-532.jpg", text: "MIAA-532 ある日、隠れ肉食新卒部下に童貞を喰べられて、その後もチ○ポとマ○コの相性が良すぎて都合良くセフレ扱いされる上司の僕 星谷瞳", video: "https://besa-lcx.github.io/LAV_video_jp/MIAA-532.mp4" },
            { id: "v11", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/MIAA-548.jpg", text: "MIAA-548 見せつけOCS尻で即ハメオフィス不倫を持ちかける誘惑女上司 篠田ゆう", video: "https://besa-lcx.github.io/LAV_video_jp/MIAA-548.mp4" },
            { id: "v12", class: "box siwa renqi", src: "https://besa-lcx.github.io/LAV_picture_jp/CLUB-658.jpg", text: "CLUB-658 完全盗撮 同じアパートに住む美人妻2人と仲良くなって部屋に連れ込んでめちゃくちゃセックスした件。其の41", video: "https://besa-lcx.github.io/LAV_video_jp/CLUB-658.mp4" },
            { id: "v13", class: "box siwa renqi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/CLOT-020.jpg", text: "CLOT-020-竹内夏希", video: "https://besa-lcx.github.io/LAV_video_jp/CLOT-020.mp4" },
            { id: "v14", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-157.jpg", text: "SSIS-157 出張先で軽蔑している中年セクハラ上司とまさかの相部屋に…朝まで続く絶倫性交に不覚にも感じてしまったHカップ新入社員 小宵こなん", video: '' },
            { id: "v15", class: "box hushi", src: "https://besa-lcx.github.io/LAV_picture_jp/MVSD-473.jpg", text: "MVSD-473 院内淫交 溜まった患者に有料マ○コ貸し出し吐精サービス 堀内未果子", video: '' },
            { id: "v16", class: "box luoli waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPIT-010.jpg", text: "IPIT-010 彼女の美人お姉さんのハミ尻デカ尻誘惑が反則すぎる。 七瀬アリス", video: '' },
            { id: "v17", class: "box hushi renqi siwa", src: "https://besa-lcx.github.io/LAV_picture_jp/MVSD-475.jpg", text: "MVSD-475 脅迫ナースコール 声が出せない相部屋病室で絶倫クズ男の不潔な巨根で何度もイカされ中出しされた献身人妻ナース 妃ひかり", video: '' },
            { id: "v18", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/MMUS-054.jpg", text: "MMUS-054 挑発パンチラ 絶対誘惑ハーレムオフィス 木下ひまり、森日向子", video: '' },
            { id: "v19", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SW-788.jpg", text: "SW-788 近所のデカ尻奥さんはミニスカ黒パンストで誘惑するむっつりスケベ！", video: '' },
            { id: "v20", class: "box siwa ol yanshe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-625.jpg", text: "IPX-625 死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた梓ヒカリ", video: '' },
            { id: "v21", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/WFR-016.jpg", text: "WFR-016 仕事帰りの性欲を持て余したお姉さんが奥までビショ濡れイキ狂い 藤森里穂", video: '' },
        ],
        //日本番号
        boxgroupJav: [
            { id: "v7", class: "box siwa ol", src: "https://besa-lcx.github.io/LAV_picture_jp/STARS-439.jpg", text: "STARS-439「ほんとは君が好きだったのに…」さっさと告白してくれない同期（幼馴染）の目の前で上司と見せつけSEXをしてしまう私… 青空ひかり", video: "" },
            { id: "v8", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-770.jpg", text: "IPX-770 死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた神菜美まい", video: "" },
            { id: "v9", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-245.jpg", text: "SSIS-245 酒、ギャンブル漬けの日雇い労働者のオレがモデル並みの美人妻と毎日ハメちぎりで人生大逆転 星宮一花" },
            { id: "v10", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/MIAA-532.jpg", text: "MIAA-532 ある日、隠れ肉食新卒部下に童貞を喰べられて、その後もチ○ポとマ○コの相性が良すぎて都合良くセフレ扱いされる上司の僕 星谷瞳", video: "" },
            { id: "v11", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/MIAA-548.jpg", text: "MIAA-548 見せつけOCS尻で即ハメオフィス不倫を持ちかける誘惑女上司 篠田ゆう", video: "" },
            { id: "v12", class: "box siwa renqi", src: "https://besa-lcx.github.io/LAV_picture_jp/CLUB-658.jpg", text: "CLUB-658 完全盗撮 同じアパートに住む美人妻2人と仲良くなって部屋に連れ込んでめちゃくちゃセックスした件。其の41", video: "" },
            { id: "v13", class: "box siwa renqi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/CLOT-020.jpg", text: "CLOT-020-竹内夏希", video: "" },
            { id: "v14", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-157.jpg", text: "SSIS-157 出張先で軽蔑している中年セクハラ上司とまさかの相部屋に…朝まで続く絶倫性交に不覚にも感じてしまったHカップ新入社員 小宵こなん", video: "" },
            { id: "v15", class: "box hushi", src: "https://besa-lcx.github.io/LAV_picture_jp/MVSD-473.jpg", text: "MVSD-473 院内淫交 溜まった患者に有料マ○コ貸し出し吐精サービス 堀内未果子", video: "" },
            { id: "v16", class: "box luoli waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPIT-010.jpg", text: "IPIT-010 彼女の美人お姉さんのハミ尻デカ尻誘惑が反則すぎる。 七瀬アリス", video: "" },
            { id: "v17", class: "box hushi renqi siwa", src: "https://besa-lcx.github.io/LAV_picture_jp/MVSD-475.jpg", text: "MVSD-475 脅迫ナースコール 声が出せない相部屋病室で絶倫クズ男の不潔な巨根で何度もイカされ中出しされた献身人妻ナース 妃ひかり", video: "" },
            { id: "v18", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/MMUS-054.jpg", text: "MMUS-054 挑発パンチラ 絶対誘惑ハーレムオフィス 木下ひまり、森日向子", video: "" },
            { id: "v19", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SW-788.jpg", text: "SW-788 近所のデカ尻奥さんはミニスカ黒パンストで誘惑するむっつりスケベ！", video: "" },
            { id: "v20", class: "box siwa ol yanshe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-625.jpg", text: "IPX-625 死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた梓ヒカリ", video: "" },
            { id: "v21", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/WFR-016.jpg", text: "WFR-016 仕事帰りの性欲を持て余したお姉さんが奥までビショ濡れイキ狂い 藤森里穂", video: "" },
            { id: "v22", class: "box siwa ol renqi", src: "https://besa-lcx.github.io/LAV_picture_jp/SHKD-953.jpg", text: "SHKD-953 共働き主婦の湿ったパンスト 美咲かんな", video: "" },
            { id: "v23", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSIS-066.jpg", text: "SSIS-066 憧れの隣人の美脚お姉さんを覗き見して5日目、とうとうバレてしまうが…誘惑されてめちゃくちゃSEXした 星宮一花", video: "" },
            { id: "v24", class: "box siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/DPMX-015.jpg", text: "DPMX-015 セレビッチ！ 誘惑の完全着衣 碓氷れん", video: "" },
            { id: "v25", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/BAZX-238.jpg", text: "BAZX-238 生中出しアイドル枕営業 Vol.009", video: "" },
            { id: "v26", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ASI-031.jpg", text: "ASI-031 初撮り人妻 23 今からこの人妻とハメ撮りします。最上ゆら", video: "" },
            { id: "v27", class: "box nv luoli waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SW-762.jpg", text: "SW-762 最上ゆら、河奈亚依", video: "" },
            { id: "v28", class: "box renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SOAV-075.jpg", text: "SOAV-075 人妻の浮気心 最上ゆら", video: "" },
            { id: "v29", class: "box hushi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/SDDE-645.jpg", text: "SDDE-645 催洗脳病院で性奴化された美人看護師姉妹 愛する妹を救うため潜入した病院で懐柔され絶望の中で犯れる 最上ゆら", video: "" },
            { id: "v30", class: "box nv siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ZMEN-083.jpg", text: "ZMEN-083 女子○生の義妹は僕を男とみてないのか無防備なので我慢できずにハメてしまった…2", video: "" },
            { id: "v31", class: "box siwa siwa ol", src: "https://besa-lcx.github.io/LAV_picture_jp/HGOT-034.jpg", text: "HGOT-034 深夜1時静まり返ったオフィス 若い男女二人っきりの残業オフィスSEX 美咲かんな", video: "" },
            { id: "v32", class: "box nv luoli waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/HODV-21497.jpg", text: "HODV-21497 気まぐれで僕の童貞を奪った1コ下の幼なじみ、実は僕にぞっこんLOVEだったみたいでイチャラブSEXしまくった日々 弥生みづき", video: "" },
            { id: "v33", class: "box siwa zc", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-633.jpg", text: "IPX-633 「もう射精してるってばぁ！」状態でもムレムレ汗だくで痴女ってくる義理姉 明里つむぎ", video: "" },
            { id: "v34", class: "box siwa renqi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/CLOT-017.jpg", text: "CLOT-017  パンストの誘惑 藍川みれい", video: "" },
            { id: "v35", class: "box hushi siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/DKD-003.jpg", text: "DKD-003 明日にはパパになるっていうのに、こんなことしていいんですか？ 弥生みづき", video: "" },
            { id: "v36", class: "box nv siwa zc", src: "https://besa-lcx.github.io/LAV_picture_jp/DOKS-534.jpg", text: "DOKS-534 美少女優等生 放課後変態黒パンスト倶楽部 弥生みづき", video: "" },
            { id: "v37", class: "box ol siwa waishe endinter", src: "https://besa-lcx.github.io/LAV_picture_jp/KTB-039.jpg", text: "KTB-039 OLスーツ倶楽部18～おじさん大好きみづきさんのお仕事スーツと大人可愛いパパ活コーデ～ 弥生みづき", video: "" },
            { id: "v38", class: "box ol renqi waishe nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-992.jpg", text: "SSNI-992 憧れの女上司と相部屋がきっかけで… 田舎の宿でこっそ～り何度も射精させられた僕 星宮一花", video: "" },
            { id: "v39", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/SDMM-083.jpg", text: "SDMM-083", video: "" },
            { id: "v40", class: "box siwa kyoshi", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-583.jpg", text: "IPX-583 禁断の放課後 女教師と生徒の背徳ベロキス性交 天海つばさ", video: "" },
            { id: "v41", class: "box kyoshi ht", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-612.jpg", text: "IPX-612 生徒と美人女教師の 逃避交 滞在先で愛し合う濃密ハメ撮り記録映像 楓カレン", video: "" },
            { id: "v42", class: "box renqi endinter", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-618.jpg", text: "IPX-618 口でするだけなら…浮気じゃないよね？ オンナの口は嘘をつく…口から始まる寝取られ話 フェラチオNTR 明里つむぎ", video: "" },
            { id: "v43", class: "box ht", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-596.jpg", text: "IPX-596 美人家庭教師カレン先生の接吻レクチャー個人レッスン 楓カレン", video: "" },
            { id: "v44", class: "box hushi siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-586.jpg", text: "IPX-586 マラ好き手コキ痴女ナース 囁き淫語と緩急手コキで深い射精に導いてくれる極上手マ○コ痴療 明里つむぎ", video: "" },
            { id: "v45", class: "box kyoshi siwa waishe nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/MIDE-858.jpg", text: "MIDE-858 中出しOK！女教師仲村みうの誘惑授業 仲村みう", video: "" },
            { id: "v46", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/HUNTA-928.jpg", text: "HUNTA-928", video: "" },
            { id: "v47", class: "box nv siwa luoli", src: "https://besa-lcx.github.io/LAV_picture_jp/ZMEN-072.jpg", text: "ZMEN-072 女子○生の義妹は僕を男とみてないのか無防備なので我慢できずにハメてしまった… 河奈亚依", video: "" },
            { id: "v48", class: "box siwa ol", src: "https://besa-lcx.github.io/LAV_picture_jp/T-28596.jpg", text: "T-28596 びしょ濡れOL雨宿りオフィス強わいせつ 木下ひまり", video: "" },
            { id: "v49", class: "box siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/DPMI-054.jpg", text: "DPMI-054 生姦Queen 木下ひまり", video: "" },
            { id: "v50", class: "box siwa nv", src: "https://besa-lcx.github.io/LAV_picture_jp/SKSK-038.jpg", text: "SKSK-038 黒パンスト生徒カレンのフェッチな1日 杏羽カレン", video: "" },
            { id: "v51", class: "box siwa renqi", src: "https://besa-lcx.github.io/LAV_picture_jp/SILK-131 Deep Desire V-break-.jpg", text: "SILK-131 Deep Desire V-break- 花咲いあん", video: "" },
            { id: "v52", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-534.jpg", text: "IPX-534 死ぬほど気持ち悪い上司のデカチンに何度もイカされる屈辱レ×プ 変態上司にザーメンマーキングされた楓カレン", video: "" },
            { id: "v53", class: "box ol nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/MDBK-103.jpg", text: "MDBK-103 アナタだけに奉仕する 淫らなサービスが大人気な派遣型個人秘 筱田优、美咲佳奈", video: "" },
            { id: "v54", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-865.jpg", text: "SSNI-865 巨乳OLと絶倫童貞上司の毎週エスカレートする週末のセックス残業 三上悠亜", video: "" },
            { id: "v55", class: "box siwa renqi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/CLOT-013.jpg", text: "CLOT-013 パンストの誘惑 美咲かんな", video: "" },
            { id: "v56", class: "box siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/MIBM-004.jpg", text: "MIBM-004 光沢パンスト 5COSPLAYフェティッシュ 叶ユリア", video: "" },
            { id: "v57", class: "box luoli waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ABP-791.jpg", text: "ABP-791 神乳Ecupを味わい尽くす性感覚醒3本番 ひたすら乳首とおっぱいを責めまくる175分 オトコを虜にする適乳Eカップ！ 藤江史帆", video: "" },
            { id: "v58", class: "box siwa renqi luoli", src: "https://besa-lcx.github.io/LAV_picture_jp/CLOT-012.jpg", text: "CLOT-012 パンストの誘惑 山本蓮加", video: "" },
            { id: "v59", class: "box siwa renqi", src: "https://besa-lcx.github.io/LAV_picture_jp/ATID-433.jpg", text: "ATID-433 喪服妻の湿ったパンスト 弥生みづき", video: "" },
            { id: "v60", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/MIBM-003.jpg", text: "MIBM-003 光沢パンスト 5COSPLAYフェティシュ 吉良りん", video: "" },
            { id: "v61", class: "box kyoshi siwa", src: "https://besa-lcx.github.io/LAV_picture_jp/GNAB-032.jpg", text: "GNAB-032 普段は真面目過ぎるめがね先生がインチキ催淫アプリを使い僕が暗示にかかったフリをすると肉食スケベな本性丸出しで…", video: "" },
            { id: "v62", class: "box hushi siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ZMEN-060.jpg", text: "ZMEN-060 看護師の義妹が僕の前であざと可愛く無防備なので我慢できずにハメてしまった…", video: "" },
            { id: "v63", class: "box hushi siwa nvup waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-830.jpg", text: "SSNI-830 股下3センチ美脚タイトミニスカナースの誘惑 星宮一花", video: "" },
            { id: "v64", class: "box siwa endinter", src: "https://besa-lcx.github.io/LAV_picture_jp/PXH-008.jpg", text: "PXH-008 コスプレキャノンボール RUN.08 巨乳Fcup×美尻×エロコス  逢沢まりあ", video: "" },
            { id: "v65", class: "box siwa renqi nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/GNAB-027.jpg", text: "GNAB-027 黒ストソープで副業する同僚OLに「内緒にしてあげる」と言った結果", video: "" },
            { id: "v66", class: "box nv siwa luoli", src: "https://besa-lcx.github.io/LAV_picture_jp/GNAB-030.jpg", text: "GNAB-030 学校帰りの黒ストJ系に「リモバイ」を着けたまま帰宅する過激ミッションに挑戦してもらったところ…", video: "" },
            { id: "v67", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/WFR-011.jpg", text: "WFR-011 仕事帰りの性欲を持て余したお姉さんが奥までビショ濡れイキ狂い 蓮実クレア", video: "" },
            { id: "v68", class: "box siwa nvup waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/OVG-139.jpg", text: "OVG-139 様々なシチュエーションで痴女たちが男を上から目線で陵する騎乗位！パンストを見せつけ破れた穴からパンティずらして強挿入2", video: "" },
            { id: "v69", class: "box siwa renqi", src: "https://besa-lcx.github.io/LAV_picture_jp/CEAD-307.jpg", text: "CEAD-307 完全撮り下ろし！むっちりエロ尻お姉さん陰部密着黒パンスト穿いたままSEX 大浦真奈美", video: "" },
            { id: "v70", class: "box siwa nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/OVG-130.jpg", text: "OVG-130 様々なシチュエーションで痴女たちが男を上から目線で陵する騎乗位！パンストを見せつけ破れた穴からパンティずらして強挿入！河奈亚依", video: "" },
            { id: "v71", class: "box renqi siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/XVSR-538.jpg", text: "XVSR-538  パンストマニアックス 倉多まお", video: "" },
            { id: "v72", class: "box siwa renqi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/CLOT-011.jpg", text: "CLOT-011 パンストの誘惑 雪乃凛央", video: "" },
            { id: "v73", class: "box siwa luoli waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-482.jpg", text: "IPX-482 大嫌いなおじさんの大好物は私の脚でした… 脚フェチ親父に嫁いだ若妻 広瀬なるみ", video: "" },
            { id: "v74", class: "box siwa ol", src: "https://besa-lcx.github.io/LAV_picture_jp/GVH-051.jpg", text: "GVH-051 社長の息子のHな社会科見学3 大浦真奈美、河北春菜", video: "" },
            { id: "v75", class: "box kyoshi siwa nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-475.jpg", text: "IPX-475 パンストマニアの標的になった美脚女教師 股下85cm！ハリある太もも！狂気的ストーカーの粘着孕ませ性交 希島あいり", video: "" },
            { id: "v76", class: "box ca siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/VRTM-480.jpg", text: "VRTM-480 航空会社勤務の黒パンスト穿いたデカ尻姉に媚薬と睡眠薬を同時に飲ませた！大浦真奈美", video: "" },
            { id: "v77", class: "box siwa ca", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-708.jpg", text: "SSNI-708 五つ星ホテルで上級国民に狙われて… 415号室からフロントに内線がなるたび性的ルームサービスを強要され犯れた高級ホテル従業員 星宮一花", video: "" },
            { id: "v78", class: "box siwa renqi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/CLOT-010.jpg", text: "CLOT-010 パンストの誘惑 水谷あおい", video: "" },
            { id: "v79", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ZMEN-038.jpg", text: "ZMEN-038 パンストを脱ぎかけた女上司の無防備な後ろ姿に超勃起！ガマンできずにそのまま一発！履かせてもう一発！！3 大浦真奈美", video: "" },
            { id: "v80", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-650.jpg", text: "SSNI-650  NTR同窓会 愛する妻と最悪な元彼の気が狂いそうな胸糞浮気映像。 星宮一花", video: "" },
            { id: "v81", class: "box siwa nv luoli waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/OKP-046.jpg", text: "OKP-046 神パンスト 冬愛ことね 制服ロリ美少女の美脚を包んだ生ナマしいパンストを完全着衣でムレた足裏からつま先を味わい尽くす！", video: "" },
            { id: "v82", class: "box ol siwa nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-624.jpg", text: "SSNI-624 3年前に寿退社した出戻り元上司を出張先ホテルで3日間ずっと犯し続けた記録 星宮一花", video: "" },
            { id: "v83", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-367.jpg", text: "IPX-367 出張先相部屋NTR 絶倫の部下に一晩中何度もイカされた巨乳女上司 桜空もも", video: "" },
            { id: "v84", class: "box renqi siwa endinter", src: "https://besa-lcx.github.io/LAV_picture_jp/SW-656.jpg", text: "SW-656  パツパツ尻パンストに擦りつけたい。 近所の若妻たちのムチムチ太股パンストを見てたら、奥さん達も夫以外の男に見られて大興奮！エッチな人妻マ○コに挿入！", video: "" },
            { id: "v85", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/VRTM-458.jpg", text: "VRTM-458  いつもは高飛車な女上司はほろ酔い状態になるとパンスト穿きながら馬乗り生挿入！欲求不満過ぎて自ら激しいピストン何度も勝手に絶頂！4 倉多まお", video: "" },
            { id: "v86", class: "box hushi siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ZMEN-031.jpg", text: "ZMEN-031 ガチ天使！！看護師になった友人の妹がお泊まりにいったボクのチ○ポにイタズラしてきて…", video: "" },
            { id: "v87", class: "box nv siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/OKP-042.jpg", text: "OKP-042 麻里梨夏", video: "" },
            { id: "v88", class: "box siwa renqi ol", src: "https://besa-lcx.github.io/LAV_picture_jp/ATID-362.jpg", text: "ATID-362 オフィスレディの湿ったパンスト 織笠るみ", video: "" },
            { id: "v89", class: "box hushi siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ZMEN-022.jpg", text: "ZMEN-022  お仕事中の看護師さんの無防備すぎるパンチラが天使すぎて超勃起！", video: "" },
            { id: "v90", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/XRW-706.jpg", text: "XRW-706 美脚パンティストッキングイズム 03 富田優衣", video: "" },
            { id: "v91", class: "box kyoshi siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-479.jpg", text: "「高嶺の花を生徒全員で犯す」輪姦レプされた新任女教師 星宮一花", video: "" },
            { id: "v92", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ZMEN-014.jpg", text: "ZMEN-014 同僚の無警戒なパンストにたまらず勃起！抑えられずにチ○ポをこすりつけたら糸を引くほど濡れていた…", video: "" },
            { id: "v93", class: "box renqi siwa", src: "https://besa-lcx.github.io/LAV_picture_jp/CLOT-004.jpg", text: "CLOT-004 CLOT-004-伊东真绪", video: "" },
            { id: "v94", class: "box siwa ol zc", src: "https://besa-lcx.github.io/LAV_picture_jp/VRTM-390.jpg", text: "VRTM-390 突然やってきた営業レディは媚薬を飲むと、黒パンストを擦りつけながら淫らに股間を滴らせ、カニバサミで中出しを求めた！ 5 大槻响、波多野结衣", video: "" },
            { id: "v95", class: "box nv siwa", src: "https://besa-lcx.github.io/LAV_picture_jp/TAAK-027.jpg", text: "TAAK-027 引っ越してきたばかりのナオちゃんは、セクハラされまくりのピチピチ女子大生 神宫寺ナオ", video: "" },
            { id: "v96", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SW-611.jpg", text: "SW-611  パツパツ尻パンストに擦りつけたい。 近所の若妻たちのムチムチ太股パンストを見てたら、奥さん達も夫以外の男に見られて発情しちゃった", video: "" },
            { id: "v97", class: "box siwa nv waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/OKP-030.jpg", text: "OKP-030 神パンスト 宮沢ちはる 人妻や母、働く制服OL等やらしい熟女の美脚を包んだ生ナマしいパンストを完全着衣でムレた足裏からつま先を味わい尽くす！オナニーや顔騎や足コキ、", video: "" },
            { id: "v98", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/HARU-049.jpg", text: "HARU-049 巨乳お姉さんのパンスト美脚でチ○ポを弄ばれたい！！ 逢沢まりあ、藤森里穂", video: "" },
            { id: "v99", class: "box renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/DOCP-061.jpg", text: "DOCP-061 巨乳兄嫁の無防備な胸チラに我慢できず即ハメ！戸惑いつつも義弟のデカチン棒が気持ちよすぎて「今日だけ特別よ」と笑顔で貪りご奉仕SEX！ 逢沢まりあ", video: "" },
            { id: "v100", class: "box siwa ol", src: "https://besa-lcx.github.io/LAV_picture_jp/ATID-331.jpg", text: "ATID-331 女税理士の湿ったパンスト 桜木優希音", video: "" },
            { id: "v101", class: "box siwa ol", src: "https://besa-lcx.github.io/LAV_picture_jp/ATID-339.jpg", text: "ATID-339  受付嬢の湿ったパンスト 花咲いあん", video: "" },
            { id: "v102", class: "box siwa ol waishe endinter", src: "https://besa-lcx.github.io/LAV_picture_jp/VRTM-421.jpg", text: "VRTM-421 新卒採用で入社した優しいデカ尻姉の黒パンスト姿に理性崩壊！弟は 望月りさ", video: "" },
            { id: "v103", class: "box luoli nv endinter yanshe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-436.jpg", text: "SSNI-436-桥本有菜", video: "" },
            { id: "v104", class: "box hushi siwa", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-278.jpg", text: "IPX-278 楓カレン", video: "" },
            { id: "v105", class: "box luoli", src: "https://besa-lcx.github.io/LAV_picture_jp/MIDE-633.jpg", text: "MIDE-633 七泽美亚", video: "" },
            { id: "v106", class: "box siwa ol waishe yanshe kyoshi hushi", src: "https://besa-lcx.github.io/LAV_picture_jp/ABP-841.jpg", text: "ABP-841 藤江史帆", video: "" },
            { id: "v107", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-454.png", text: "SSNI-454-葵司", video: "" },
            { id: "v108", class: "box nv nvup waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SSNI-432.png", text: "SSNI-432-三上悠亚", video: "" },
            { id: "v109", class: "box kyoshi siwa waishe nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/PRED-132.jpg", text: "PRED-132 女教師の誘惑 タイトスカート編 新井優香", video: "" },
            { id: "v110", class: "box nv yanshe", src: "https://besa-lcx.github.io/LAV_picture_jp/MDS-833.jpg", text: "MDS-833 学校でしようよ- 唯川希（最上架純）", video: "" },
            { id: "v111", class: "box nvup waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SQTE-181.jpg", text: "SQTE-181 イマドキの清楚な美人って、実は淫らで敏感 唯川希（最上架純）", video: "" },
            { id: "v112", class: "box renqi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/DOCP-015.jpg", text: "DOCP-015 「え、うそ！まだそんなに勃つの！？」友達の彼氏自慢にイラつきながらも絶倫チ◯コに興味津々！略奪セックスで精子を搾り取ろうとするも予想以上の絶倫具合に返り討ち！果てないピストンで何度もイカされる！", video: "" },
            { id: "v113", class: "box nvup waishe ol", src: "https://besa-lcx.github.io/LAV_picture_jp/SW-198.jpg", text: "SW-198 女性のスーツ姿が好きな僕は黒ストッキングとパンティに興奮して勃起してしまったチ○ポを尻に押しつけた 大槻响", video: "" },
            { id: "v114", class: "box kyoshi siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/DVAJ-276.jpg", text: "DVAJ-276 学校でしたいの 逢沢まりあ", video: "" },
            { id: "v115", class: "box kyoshi endinter waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SHKD-777.jpg", text: "SHKD-777 恥辱の教育実習生15 逢沢まりあ", video: "" },
            { id: "v116", class: "box luoli hushi siwa", src: "https://besa-lcx.github.io/LAV_picture_jp/STAR-895.jpg", text: "STAR-895 榎本美咲 「エッッロ…！」日常で目にするエッロい瞬間から夢の展開へ！", video: "" },
            { id: "v117", class: "box siwa ol yanshe", src: "https://besa-lcx.github.io/LAV_picture_jp/SDMU-804.jpg", text: "SDMU-804  SOD本社内連れ回し露出調教研修 業務中3SEX 黒パンスト美脚ムッツリ経理部 SOD女子社員 入社2年目 相沢さつき（23）", video: "" },
            { id: "v118", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/MXGS-1044.jpg", text: "MXGS-1044 社内で唯一の黒パンスト女子 咲野の花", video: "" },
            { id: "v119", class: "box siwa ol hushi waishe nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/IPX-150.jpg", text: "IPX-150 職場でフェロモンをまき散らす 働く痴女お姉さんの匂い立つパンスト美脚誘惑セックス 有原あゆみ", video: "" },
            { id: "v120", class: "box renqi siwa", src: "https://besa-lcx.github.io/LAV_picture_jp/SW-562.jpg", text: "SW-562 パツパツ尻パンストに擦りつけたい。 近所の若妻たちのムチムチ太股パンストを見てたら、奥さん達も夫以外の男に見られて大興奮！硬いチ○ポ挿入して！", video: "" },
            { id: "v121", class: "box hushi siwa zc", src: "https://besa-lcx.github.io/LAV_picture_jp/VRTM-358.jpg", text: "VRTM-358 入院中の禁欲生活に耐え切れない弟が看護師のデカ尻姉に媚薬を飲ませると白パンスト擦りつけながら淫らに股間を滴らせ、カニバサミで中出しを求めた！2 樱木优希音", video: "" },
            { id: "v122", class: "box nv siwa zc", src: "https://besa-lcx.github.io/LAV_picture_jp/VRTM-360.jpg", text: "VRTM-360 「一度でいいから揉んでみたい！」黒パンスト穿いた制服姿のデカ尻娘に父が睡眠薬を飲ませて、夢の豊満尻を堪能し何度も中出し！", video: "" },
            { id: "v123", class: "box siwa ol nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/TAAK-022.jpg", text: "TAAK-022 スタイル抜群の結衣ちゃんは、セクハラされまくりのパンストメーカー社員 波多野結衣", video: "" },
            { id: "v124", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/MMTA-011.jpg", text: "MMTA-011 パンスト大好き少年 親戚の綺麗なお姉さんの秘蜜の匂い 友田彩也香", video: "" },
            { id: "v125", class: "box siwa ol endinter waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/VRTM-342.jpg", text: "VRTM-342 新卒採用で入社した優しいデカ尻姉の黒パンスト姿に理性崩壊！弟は勃起が止まらずまさかのストッキング越しの強制素股！欲求不満な姉は敏感過ぎてパンツから漏れるほど愛液ジワリ！子宮奥に突き刺さる激ピストンで何度も絶頂！2 佐佐波绫", video: "" },
            { id: "v126", class: "box siwa hushi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/VRTM-302.jpg", text: "VRTM-302 入院中の禁欲生活に耐え切れない弟が看護師のデカ尻姉に媚薬を飲ませると白パンスト擦りつけながら淫らに股間を滴らせ、カニバサミで中出しを求めた！佐佐波绫", video: "" },
            { id: "v127", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/MIDE-487.jpg", text: "MIDE-487 毎日違うパンストで挑発してくるいんやらしい女上司 秋山祥子", video: "" },
            { id: "v128", class: "box hushi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ADN-129.jpg", text: "ADN-129 あなたに愛されたくて。 希崎ジェシカ", video: "" },
            { id: "v129", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/SNIS-908.jpg", text: "SNIS-908 豊満巨乳妻をオイルマッサージ店で脱がさず犯る 星野ナミ", video: "" },
            { id: "v130", class: "box hushi nvup waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/GS-110.jpg", text: "GS-110 看護師の逆夜這い！！ストレスがたまる職場の看護師は、検診の時間に活きの良いチ○ポを持った患者を見つけると媚薬を飲ませて、敏感になった男性患者の身体を隅から隅まで味わいまくる！逆媚薬でチ○チン暴発しそうです！", video: "" },
            { id: "v131", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/VRTM-240.jpg", text: "VRTM-240 突然やってきた営業レディは媚薬を飲むと、黒パンストを擦りつけながら淫らに股間を滴らせ、カニバサミで中出しを求めた！ 3 樱木优希音", video: "" },
            { id: "v132", class: "box hushi siwa waishe nvup", src: "https://besa-lcx.github.io/LAV_picture_jp/MDB-398.jpg", text: "MDB-398 オトナのナース検診 ～あなたのおちんちん癒してあげる～ 4時間 野村萌香", video: "" },
            { id: "v133", class: "box siwa ol waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/DCOL-068.jpg", text: "DCOL-068  美脚パンスト美女の誘惑 紺野ひかる", video: "" },
            { id: "v134", class: "box renqi", src: "https://besa-lcx.github.io/LAV_picture_jp/IPZ-857.jpg", text: "IPZ-857 ヤリ過ぎセックス生ライブチャット「かん菜」ログイン中 24時間超ヌケル激レア映像大配信！ 雪白かん菜", video: "" },
            { id: "v135", class: "box siwa hushi waishe tao", src: "https://besa-lcx.github.io/LAV_picture_jp/DPHN-147.jpg", text: "DPHN-147  非日常的悶絶遊戯 訪問介護士、しずかの場合 管野しずか", video: "" },
            { id: "v136", class: "box siwa ol hushi ca", src: "https://besa-lcx.github.io/LAV_picture_jp/ABP-553.jpg", text: "ABP-553 働く痴女系お姉さん vol.06 雪白かん菜", video: "" },
            { id: "v137", class: "box kyoshi siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/FSET-665.jpg", text: "FSET-665  色香で包まれた黒パンスト女教師 桜木優希音", video: "" },
            { id: "v138", class: "box siwa renqi waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/PGD-896.jpg", text: "PGD-896  パンパンチ○ポを気持ち良～くイカせる 黒パンストM性感 佐々木あき", video: "" },
            { id: "v139", class: "box siwa luoli", src: "https://besa-lcx.github.io/LAV_picture_jp/HXAD-015.jpg", text: "HXAD-015 清楚な美少女のおっぴろげガニ股パンストVol.2 鈴原エミリ", video: "" },
            { id: "v140", class: "box siwa renqi zc", src: "https://besa-lcx.github.io/LAV_picture_jp/DVAJ-145.jpg", text: "DVAJ-145 美女とイケメン監督と野獣とデート 真木ゆかり", video: "" },
            { id: "v141", class: "box siwa nv", src: "https://besa-lcx.github.io/LAV_picture_jp/FSET-609.jpg", text: "FSET-609 sheng徒會長小宮山ゆき", video: "" },
            { id: "v142", class: "box siwa ol nvup zc", src: "https://besa-lcx.github.io/LAV_picture_jp/UFD-013.jpg", text: "UFD-013 働く美女と性交  中島あいり", video: "" },
            { id: "v143", class: "box kyoshi siwa endinter", src: "https://besa-lcx.github.io/LAV_picture_jp/MIDE-302.jpg", text: "MIDE-302  女教師パンスト密着誘惑～憧れの先生のむっちり美脚に狂わされた僕達～  初川みなみ", video: "" },
            { id: "v144", class: "box nv nvup siwa waishe", src: "https://besa-lcx.github.io/LAV_picture_jp/ELO-331.jpg", text: "ELO-331  黒ストッキング強制ガニ股女子校生 大沢美加", video: "" },
        ],

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
            $(".content-top,#container,#container2").hide();
            $("#video-player").show();
            this.info = k;
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
    mounted: function() {
        //获取屏幕高度
        var sh = $(window).width();
        //点击页面跳转
        $("#home").click(function() {
            $(".back-top").hide();
        });
        $("#page1,#page2,#page3,#page4,#page5,#page6,#page7,#page8,#page9,#page10,#page11,#page12").click(function() {
            $(".content-top,.container-content").hide();
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
                $("iframe").height("6200px");
            } else if (sh < 960 && sh >= 768) {
                $("iframe").height("5000px");
            } //移动端
            else {
                $("iframe").height("17000px");
            }
            location.href = "#page2";
            $(".back-top").show();

        });
        $("#page3,#page9").click(function() {
            $("title").text("国产系列");
            $("iframe").height("700px");
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