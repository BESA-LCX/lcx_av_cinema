const airForce = [
    { id: 1, type: "第五代超音速隐身战机", code: "ELOZ-5000", name: "超级光束狮", count: "60", planeKind: "王牌战机" },
    { id: 2, type: "第五代隐身联合攻击战机", code: "F-35A", name: "闪电II", count: "40", planeKind: "王牌战机" },
    { id: 3, type: "超音速多用途战斗轰炸机", code: "F-15SN/SG", name: "皇牌鹰/先进鹰", count: "22+8", planeKind: "主力战机" },
    { id: 4, type: "电子战机", code: "EA-18G", name: "咆哮者", count: "20", planeKind: "王牌战机" },
    { id: 5, type: "全能通用型战机", code: "Rafale M", name: "阵风 M", count: "20", planeKind: "王牌战机" },
    { id: 6, type: "高机动多用途战机", code: "Typhoon BLOCK II", name: "台风 BLOCK II", count: "46", planeKind: "王牌战机" },
    { id: 7, type: "超音速多用途战斗轰炸机", code: "F-15E/I", name: "打击鹰/雷电", count: "60+12", planeKind: "主力战机" },
    { id: 8, type: "轻型多用途空优战机", code: "F-16IN", name: "超级毒蛇", count: "22", planeKind: "主力战机" },
    { id: 9, type: "轻型多用途空优战机", code: "F-16V", name: "毒蛇", count: "12", planeKind: "主力战机" },
    { id: 10, type: "轻型多用途空优战机", code: "F-16E/F", name: "沙漠隼", count: "50", planeKind: "主力战机" },
    { id: 11, type: "轻型多用途空优战机", code: "F-2B", name: "平成零战", count: "20", planeKind: "支援战机" },
    { id: 12, type: "超音速高机动轻型多用途战机", code: "JAS-39C", name: "鹰狮", count: "70", planeKind: "支援战机" },
    { id: 13, type: "超音速高机动重型空优战机", code: "F-15C/D/J/DJ", name: "鹰", count: "120", planeKind: "主力战机" },
    { id: 14, type: "轻型多用途空优战机", code: "F-16C/D", name: "战隼", count: "100", planeKind: "主力战机" },
    { id: 15, type: "超音速多用途战斗攻击机", code: "F/A-18C/D", name: "大黄蜂", count: "126", planeKind: "主力战机" },
    { id: 16, type: "轻型多用途空优战机", code: "F-16XL", name: "-", count: "24", planeKind: "特种战机" },
    { id: 17, type: "轻型多用途空优战机", code: "AFTI-16", name: "-", count: "32", planeKind: "特种战机" },
    { id: 18, type: "攻击机", code: "LC-002", name: "沙漠之狮", count: "120", planeKind: "主力战机" },
    { id: 19, type: "电子战机", code: "LC-001", name: "闪电之狮", count: "60", planeKind: "主力战机" },
    { id: 20, type: "无人攻击机", code: "FLQ-4/4K", name: "神秘鹤/敏捷鹤", count: "312", planeKind: "特种战机" },
    { id: 21, type: "电子侦察机", code: "DA-6E", name: "萤火虫", count: "39", planeKind: "特种战机" },
    { id: 22, type: "预警机", code: "E-2C", name: "鹰眼", count: "44", planeKind: "特种战机" },
    { id: 23, type: "预警机", code: "E-3C", name: "望楼", count: "34", planeKind: "特种战机" },
    { id: 24, type: "空中加油机", code: "KC-767J", name: "飞马", count: "46", planeKind: "特种战机" },
    { id: 25, type: "空中加油机", code: "KC-10A", name: "补充者", count: "6", planeKind: "特种战机" },
    { id: 26, type: "空中加油机", code: "KC-135R", name: "-", count: "72", planeKind: "特种战机" },
    { id: 27, type: "战略运输机", code: "MV-200G", name: "-", count: "122", planeKind: "特种战机" },
]
const newEquip = [
    { id: 1, type: "空中加油机", code: "KC-10A", name: "补充者", count: "10", armedServices: "南岛皇家空军", status: "已交付6架，4架生产中" },
    { id: 2, type: "第五代隐身联合攻击战机", code: "F-35C", name: "闪电II", count: "12", armedServices: "南岛皇家海军", status: "生产中" },
    { id: 3, type: "预警机", code: "E-2D", name: "先进鹰眼", count: "10", armedServices: "南岛皇家海军", status: "生产中" },
    { id: 4, type: "超音速多用途战斗攻击机", code: "LC-005", name: "台风之狮", count: "44", armedServices: "南岛皇家海军", status: "生产中" },
    { id: 5, type: "无人多功能战车", code: "-", name: "尤斯塔斯", count: "230", armedServices: "南岛陆军", status: "已交付" },
    { id: 6, type: "战略运输机", code: "MV-200G", name: "-", count: "30", armedServices: "南岛皇家空军", status: "已交付" },
]
const exportEquip = [
    { id: 1, type: "预警机", code: "E-3C", name: "望楼", count: "2", country: "阿联酋", status: "已交付" },
    { id: 2, type: "轻型坦克", code: "CQ-S2", name: "-", count: "120", country: "沙特", status: "已交付" },
    { id: 3, type: "无人攻击机", code: "FLQ-4K", name: "敏捷鹤", count: "27", country: "印度", status: "生产中" },
    { id: 4, type: "攻击机", code: "LC-002", name: "沙漠之狮", count: "70", country: "沙特", status: "生产中" },
    { id: 5, type: "防空反导系统", code: "-", name: "陆基离子防空炮", count: "2", country: "以色列", status: "已交付" },
    { id: 6, type: "海间攻击机", code: "LC-003", name: "速豚之狮", count: "42", country: "埃及", status: "生产中" }
]
const AsiaFightersRanking = [
    { id: 1, type: "第五代隐身联合攻击战机", code: "F-35A/I", name: "闪电II", count: "21/25/20", country: "日本（A）/以色列（I）/韩国（A）", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.WDIR3TFpeZTlWJgXxHwgMwHaE8?w=298&h=199&c=7&r=0&o=5&pid=1.7", "https://tse4-mm.cn.bing.net/th/id/OIP-C.x65AoPv_9apZPHgDLremSwHaFY?w=249&h=181&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.0-0qOEn2uLieTyN6VNHsfgHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7"] },
    { id: 2, type: "超音速多用途战斗轰炸机", code: "F-15QA/SA", name: "-", count: "36/84", country: "卡塔尔（QA）/沙特（SA）", flag: ["https://tse4-mm.cn.bing.net/th/id/OIP-C.pLHVYquJ2lmneSau8ZddxQAAAA?w=254&h=135&c=7&r=0&o=5&pid=1.7", "https://tse2-mm.cn.bing.net/th/id/OIP-C._Ns_-XnAJxZwQZ4J2vjJJQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 3, type: "超音速多用途战斗轰炸机", code: "F-15SG", name: "先进鹰", count: "24", country: "新加坡", flag: ["https://tse3-mm.cn.bing.net/th/id/OIP-C.P9Y4XuO2cqbyaw7CPDxaMwHaE8?w=254&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 4, type: "超音速多用途战斗轰炸机", code: "F/A-18E/F", name: "超级大黄蜂", count: "28", country: "科威特", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.5PbyjGtNejnvkALzNXQokwAAAA?w=253&h=178&c=7&r=0&o=5&pid=1.7"] },
    { id: 5, type: "全能通用型战机", code: "Rafale", name: "阵风", count: "24/14", country: "卡塔尔/印度", flag: ["https://tse4-mm.cn.bing.net/th/id/OIP-C.pLHVYquJ2lmneSau8ZddxQAAAA?w=254&h=135&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.RNDM0ZEu5r1hZRlgTYLptwHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 6, type: "高机动性多用途战机", code: "Typhoon", name: "台风", count: "72", country: "沙特", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C._Ns_-XnAJxZwQZ4J2vjJJQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 7, type: "超音速多用途战斗轰炸机", code: "F-15I", name: "雷电", count: "25", country: "以色列", flag: ["https://tse4-mm.cn.bing.net/th/id/OIP-C.x65AoPv_9apZPHgDLremSwHaFY?w=249&h=181&c=7&r=0&o=5&pid=1.7"] },
    { id: 8, type: "超音速多用途战斗轰炸机", code: "F-15K", name: "冲击鹰", count: "60", country: "韩国", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.0-0qOEn2uLieTyN6VNHsfgHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7"] },
    { id: 9, type: "高机动全天候多用途战机", code: "su-35", name: "侧位-E", count: "24", country: "中国", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=278&h=186&c=7&r=0&o=5&pid=1.7"] },
    { id: 10, type: "超音速多用途战斗轰炸机", code: "F-15S", name: "攻击鹰", count: "72", country: "沙特", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C._Ns_-XnAJxZwQZ4J2vjJJQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 11, type: "轻型多用途空优战斗轰炸机", code: "F-16I", name: "风暴", count: "120", country: "以色列", flag: ["https://tse4-mm.cn.bing.net/th/id/OIP-C.x65AoPv_9apZPHgDLremSwHaFY?w=249&h=181&c=7&r=0&o=5&pid=1.7"] },
    { id: 12, type: "轻型多用途空优战机", code: "F-16E/F", name: "沙漠隼", count: "70", country: "阿联酋", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.ZH_uDPQp7Kupf92EFdHXuQHaE7?w=239&h=164&c=7&r=0&o=5&pid=1.7"] },
    { id: 13, type: "轻型多用途空优战机", code: "F-2A/B", name: "平成零战", count: "92", country: "日本", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.WDIR3TFpeZTlWJgXxHwgMwHaE8?w=298&h=199&c=7&r=0&o=5&pid=1.7"] },
    { id: 14, type: "超音速轻型多用途空优战机", code: "J-10C", name: "猛龙", count: "160", country: "中国", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 15, type: "超音速高机动轻型多用途战机", code: "JAS-39C", name: "鹰狮", count: "24", country: "泰国", flag: ["https://tse4-mm.cn.bing.net/th/id/OIP-C.No6IjunVkqWj78WrzjNtXgHaE8?w=297&h=198&c=7&r=0&o=5&pid=1.7"] },
    { id: 16, type: "超音速高机动全天候重型空优战机", code: "F-15C/D/J/DJ", name: "鹰", count: "-", country: "以色列（C/D）/沙特（C/D）日本（J/DJ）", flag: ["https://tse4-mm.cn.bing.net/th/id/OIP-C.x65AoPv_9apZPHgDLremSwHaFY?w=249&h=181&c=7&r=0&o=5&pid=1.7", "https://tse2-mm.cn.bing.net/th/id/OIP-C._Ns_-XnAJxZwQZ4J2vjJJQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.WDIR3TFpeZTlWJgXxHwgMwHaE8?w=298&h=199&c=7&r=0&o=5&pid=1.7"] },
    { id: 17, type: "轻型多用途空优战机", code: "F-16C/D", name: "战隼", count: "-", country: "以色列/韩国/土耳其/伊拉克/约旦/巴基斯坦", flag: ["https://tse4-mm.cn.bing.net/th/id/OIP-C.x65AoPv_9apZPHgDLremSwHaFY?w=249&h=181&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.0-0qOEn2uLieTyN6VNHsfgHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.qdIGNp4ydJZocvnH_8vxAgHaE7?w=260&h=180&c=7&r=0&o=5&pid=1.7", "https://tse3-mm.cn.bing.net/th/id/OIP-C.1ZguKLnVeTa4ViCRKS8XBwHaE7?w=244&h=180&c=7&r=0&o=5&pid=1.7", "https://tse4-mm.cn.bing.net/th/id/OIP-C.djaep79weF3MdawkDhFQgwHaDt?w=326&h=174&c=7&r=0&o=5&pid=1.7", "https://tse4-mm.cn.bing.net/th/id/OIP-C.F5nH3H9woWzoHsfLCyMvgwHaE8?w=250&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 18, type: "高机动全天候多用途战机", code: "su-30MKI/MKV/-", name: "侧位-C", count: "-", country: "印度/马来西亚/哈萨克斯坦", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.RNDM0ZEu5r1hZRlgTYLptwHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7", "https://tse3-mm.cn.bing.net/th/id/OIP-C.59Bmat_QRUZuakF27kOQ4gHaE7?w=257&h=180&c=7&r=0&o=5&pid=1.7", "https://tse4-mm.cn.bing.net/th/id/OIP-C.mKlDoUijvF9vOEUtI7CGPQHaE7?w=265&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 19, type: "高机动全天候多用途战机", code: "J-16/su-30MK2/su-30MV2", name: "侧位-C", count: "-", country: "中国/越南", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.zm1hxVmliq0tlUEfwyCTPgHaE7?w=274&h=183&c=7&r=0&o=5&pid=1.7"] },
    { id: 20, type: "超音速轻型多用途空优战机", code: "F/A-18C/D", name: "大黄蜂", count: "38/8", country: "科威特/马来西亚", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.5PbyjGtNejnvkALzNXQokwAAAA?w=253&h=178&c=7&r=0&o=5&pid=1.7", "https://tse3-mm.cn.bing.net/th/id/OIP-C.59Bmat_QRUZuakF27kOQ4gHaE7?w=257&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 21, type: "超音速轻型多用途空优战机", code: "J-10B", name: "猛龙", count: "-", country: "中国", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 22, type: "高机动全天候空优战机", code: "J-11B/BS/D", name: "侧位", count: "-", country: "中国", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 23, type: "高机动全天候多用途战机", code: "J-15", name: "飞鲨", count: "-", country: "中国", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 24, type: "高机动全天候多用途战机", code: "su-30MKK", name: "侧位-C", count: "-", country: "中国", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 25, type: "轻型多用途空优战机", code: "F-16V", name: "战隼", count: "128", country: "中华民国", flag: ["https://tse4-mm.cn.bing.net/th/id/OIP-C.m3QEWaOdJ06rCoyxHWgDYAHaE7?w=281&h=186&c=7&r=0&o=5&pid=1.7"] },
    { id: 26, type: "高机动全天候多用途战机", code: "J-10A", name: "猛龙", count: "-", country: "中国", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 27, type: "高机动全天候多用途战机", code: "J-11A", name: "侧位", count: "-", country: "中国", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 28, type: "高机动全天候多用途战机", code: "F-14D", name: "雄猫", count: "-", country: "伊朗", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.03N8XTxhpTgKZ2yNduDMKQHaEP?w=291&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 29, type: "轻型多用途三角翼战机", code: "Mirage-2000-5", name: "幻影2000-5", count: "48/-", country: "印度/中华民国", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.RNDM0ZEu5r1hZRlgTYLptwHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7", "https://tse4-mm.cn.bing.net/th/id/OIP-C.m3QEWaOdJ06rCoyxHWgDYAHaE7?w=281&h=186&c=7&r=0&o=5&pid=1.7"] },
    { id: 30, type: "轻型多用途空优战机", code: "F-16A/B", name: "战隼", count: "-", country: "印度尼西亚/巴基斯坦", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.imLiNpQlhwcWfPYUiVnsZwHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7", "https://tse4-mm.cn.bing.net/th/id/OIP-C.F5nH3H9woWzoHsfLCyMvgwHaE8?w=250&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 31, type: "轻型多用途空优战机", code: "Mig-29", name: "支点", count: "-", country: "印度/伊朗/朝鲜", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.RNDM0ZEu5r1hZRlgTYLptwHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.03N8XTxhpTgKZ2yNduDMKQHaEP?w=291&h=180&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.fVfqSJqxjtmjKJ578j4xWgHaE1?w=260&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 32, type: "可变后掠翼多用途战斗轰炸机", code: "IDS", name: "狂风", count: "-", country: "沙特", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C._Ns_-XnAJxZwQZ4J2vjJJQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 33, type: "轻型多用途战机", code: "--", name: "经国", count: "-", country: "中华民国", flag: ["https://tse4-mm.cn.bing.net/th/id/OIP-C.m3QEWaOdJ06rCoyxHWgDYAHaE7?w=281&h=186&c=7&r=0&o=5&pid=1.7"] },
    { id: 34, type: "超音速多用途战机", code: "F-4E/J", name: "鬼怪", count: "-", country: "日本/以色列/土耳其/伊朗", flag: ["https://tse1-mm.cn.bing.net/th/id/OIP-C.WDIR3TFpeZTlWJgXxHwgMwHaE8?w=298&h=199&c=7&r=0&o=5&pid=1.7", "https://tse4-mm.cn.bing.net/th/id/OIP-C.x65AoPv_9apZPHgDLremSwHaFY?w=247&h=180&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.qdIGNp4ydJZocvnH_8vxAgHaE7?w=260&h=180&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.03N8XTxhpTgKZ2yNduDMKQHaEP?w=291&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 35, type: "超音速多用途战机", code: "JH-7/7K", name: "飞豹", count: "-", country: "中国", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7"] },
    { id: 36, type: "超音速多用途战机", code: "J-7/J-8/Mig-21", name: "支点", count: "-", country: "中国/巴基斯坦/印度/朝鲜", flag: ["https://tse2-mm.cn.bing.net/th/id/OIP-C.Ox769W5YqjJFUJaXhGd2jgHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7", "https://tse4-mm.cn.bing.net/th/id/OIP-C.F5nH3H9woWzoHsfLCyMvgwHaE8?w=250&h=180&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.RNDM0ZEu5r1hZRlgTYLptwHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7", "https://tse1-mm.cn.bing.net/th/id/OIP-C.fVfqSJqxjtmjKJ578j4xWgHaE1?w=260&h=180&c=7&r=0&o=5&pid=1.7"] },
]
window.onload = function() {
    let airForcePlane = JSON.stringify(airForce);
    let newEquips = JSON.stringify(newEquip);
    let exportEquips = JSON.stringify(exportEquip);
    let AsiaFightersRankings = JSON.stringify(AsiaFightersRanking);
    sessionStorage.setItem("airForce", airForcePlane);
    sessionStorage.setItem("Equip", newEquips);
    sessionStorage.setItem("exportEquip", exportEquips);
    sessionStorage.setItem("AsiaFightersRanking", AsiaFightersRankings);
}