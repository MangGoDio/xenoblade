// 物品表
export const _GOODS = {
    '阿伐利提亚': {
        '主食': {
            buff: '战斗经验值提升10%',
            goods: [
                { name: '阿伐利提亚什锦面', desc: '仅限晚上出售', },
                { name: '多汁包子', desc: '完成彭诺回家支线开启', },
                { name: '弹弹炒饭', desc: '完成彭诺回家支线开启', },
                { name: '巨大蘑菇派', desc: '完成彭诺回家支线开启', },
                { name: '阳光包子', desc: '完成彭诺回家支线开启', need: true, },
                { name: '美味香肠包', desc: '完成彭诺回家支线开启', need: true, },
            ]
        },
        '鱼': {
            buff: '获得心相点数时额外获得1点',
            goods: [
                { name: '烤锚尾鱼', },
                { name: '炒油牡蛎', },
                { name: '糖醋海洋茶鱼', },
            ],
        },
        '甜点': {
            buff: '获得发展点数时额外获得1点',
            goods: [
                { name: '迷情蜜瓜冰糕', },
                { name: '诺彭彭卷', },
                { name: '亮晶晶砂糖', },
                { name: '纳西梨果冻', },
                { name: '蜜豆牡丹饼', need: true, },
            ],
        },
        '饮料': {
            buff: '道具发现能力提升10%',
            goods: [
                { name: '闪亮果汁', },
                { name: '泡泡果汁', },
                { name: '绵绵果汁', },
                { name: '水苏菜', desc: '找齐十二兄弟刷新', },
                { name: '蜂蜜牛奶', desc: '找齐十二兄弟刷新', },
                { name: '什锦冰沙', desc: '找齐十二兄弟刷新', },
            ],
        },
        '乐器': {
            buff: '敌方侦查距离降低5%',
            goods: [
                { name: '圆圆沙锤', },
                { name: '诺彭里里', },
                { name: '欢乐康加鼓', },
                { name: '吵闹竖笛', },
                { name: '扭动响板', need: true, },
                { name: '坚硬摇铃', need: true, },
            ],
        },
        '书籍': {
            buff: '获得心相点数时额外获得1点',
            goods: [
                { name: '简单打捞说明书', },
                { name: '怪盗毛毛和黄金枪', },
                { name: '千年阿鲁斯', },
                { name: '玫拉姆森林冒险记', need: true, },
                { name: '诺彭小姆尼于蒸汽镇', need: true, },
                { name: '莫尔斯古文献第2卷', desc: '式的羁绊任务', },
            ],
        },
        '桌游': {
            buff: '生活道具上限增加10',
            goods: [
                { name: '卡卡岛', },
                { name: '诺彭棋', },
                { name: '秘密潜入', },
                { name: '66号交易通道', },
                { name: '珊瑚彭诺棋', need: true, },
                { name: '利贝拉里塔斯的生活', need: true, },
            ],
        },
        '化妆品': {
            buff: '掉落道具收集范围提升50cm',
            goods: [
                { name: '软绵古龙水', },
                { name: '润滑化妆水', },
                { name: '清爽凝胶水', },
                { name: '卷卷假睫毛', },
                { name: '饱满指甲油', },
                { name: '绵密满月衬垫', need: true, },
            ],
        }
    },
    '古拉': {
        '主食': {
            buff: '奔跑速度提升5%',
            goods: [
                { name: '卢斯卡团子', },
                { name: '炖卢斯卡面', },
                { name: '火腿番茄三明治', },
                { name: '甜菜鱼肉飞饼', },
                { name: '奶油橘味煎饼', },
                { name: '什锦卢斯卡面', need: true, },
                { name: '幸运锦兰面包', desc: '重音羁绊任务' },
            ]
        },
        '蔬菜': {
            buff: '掉落道具收集范围提升50cm',
            goods: [
                { name: '快煎脆脆草', },
                { name: '托里格风味腌菜', },
                { name: '肉甜椒镶菜', },
                { name: '脆叶包心菜色拉', },
            ]
        },
        '肉': {
            buff: '吸引距离提升2m',
            goods: [
                { name: '星形肉排', },
                { name: '甜甜小香肠', },
                { name: '木豆酱炒肉', need: true, },
                { name: '芥末酱香肠', need: true, },
            ]
        },
        '鱼': {
            buff: '掉落道具收集范围提升50cm',
            goods: [
                { name: '古拉鲣鱼干', },
                { name: '香煎金刚岩鱼', },
                { name: '二足蟹辣椒汤', need: true, },
            ],
        },
        '饮料': {
            buff: '非战斗状态队伍槽减少量降低25%',
            goods: [
                { name: '月光香蕉牛奶', },
                { name: '古拉蜜蜂茶', },
                { name: '库克莱尔天然水', },
                { name: '牛奶朝气百香果', need: true, },
                { name: '胜利果冰', need: true, },
            ],
        },
        '乐器': {
            buff: '奔跑速度提升5%',
            goods: [
                { name: '托里格鲁特琴', },
                { name: '木纹阿尔卑斯长号', },
                { name: '万年杉树古琴', },
                { name: '木琴', need: true, },
                { name: '珊瑚木琴', need: true, },
            ],
        },
        '美术品': {
            buff: '道具发现能力提升10%',
            goods: [
                { name: '丘陵上伫立的少女', },
                { name: '黑色花田', },
                { name: '巴恩的版画', need: true, },
                { name: '木雕烈王像', need: true, },
            ],
        },
        '化妆品': {
            buff: '战斗经验值提升10%',
            goods: [
                { name: '软软粉底', },
                { name: '树枝护发素', },
                { name: '风花梳子', },
                { name: '海螺假发', need: true, },
                { name: '雪花闪亮香水', need: true, },
            ],
        },
        '纺织品': {
            buff: '战斗获取金币提升10%',
            goods: [
                { name: '拼图木小包', },
                { name: '托里格布垫子', },
                { name: '树染缠腰布', },
                { name: '树叶光斑纹样的窗帘', },
                { name: '镂空花纹的树叶头巾', need: true, },
                { name: '雪花边披肩', need: true, },
            ],
        }
    },
    '弗雷斯贝古村庄': {
        '蔬菜': {
            buff: '获得发展点数时额外获得1点',
            goods: [
                { name: '黑石榴果香肠', },
                { name: '腌制火花烤串', },
                { name: '水煮肌肉莲花', need: true, },
                { name: '流水腌冰包心菜', need: true, },
            ]
        },
        '饮料': {
            buff: '吸引距离提升2m',
            goods: [
                { name: '深焙黑咖啡', },
                { name: '赛利奥茶', },
                { name: '木豆奶昔', },
                { name: '冒泡拉西', need: true, },
            ],
        },
        '乐器': {
            buff: '敌方侦查距离降低5%',
            goods: [
                { name: '赤杆三味线', },
                { name: '冯斯低音提琴', },
                { name: '豪杰竖琴', },
                { name: '云卷贝阿贝鸠奈琴', },
                { name: '珀彭大提琴', need: true, },
            ],
        },
        '纺织品': {
            buff: '战斗获取金币提升10%',
            goods: [
                { name: '佐鸣布发饰', },
                { name: '鳞甲兽皮角斗士', },
                { name: '珊瑚布毛巾', },
                { name: '绚烂图饰手帕', },
                { name: '古拉木羽衣', },
                { name: '佐鸣布结晶毯子', },
            ],
        }
    },
    '英维迪亚首都': {
        '主食': {
            buff: '道具发现能力提升10%',
            goods: [
                { name: '薄饼包菜', },
                { name: '三味奶酪馅饼', },
                { name: '主任咖喱', },
                { name: '热带芋馅饼', need: true, },
                { name: '足料香肠馅饼', need: true, },
            ]
        },
        '肉': {
            buff: '掉落道具收集范围提升50cm',
            goods: [
                { name: '带骨鳞甲兽肉排', },
                { name: '兽肉细面', },
                { name: '酱烤铁板肉', need: true, },
                { name: '炭烤铁火鸟', need: true, },
            ]
        },
        '鱼': {
            buff: '战斗获取金币提升10%',
            goods: [
                { name: '兴奋翻车鱼干', },
                { name: '薄切大佬金枪雪花鱼片', },
                { name: '清蒸蓝腮太阳鱼', need: true, },
                { name: '冰鱼烤坚果肉', need: true, },
            ],
        },
        '甜点': {
            buff: '非战斗状态队伍槽减少量降低25%',
            goods: [
                { name: '胜利吉事果', desc: '小卖车出售，不计入产权' },
                { name: '苦味巧克力', desc: '小卖车出售，不计入产权' },
                { name: '彩虹冰糕', },
                { name: '花香巴伐利亚奶羹', },
                { name: '羽衣桃羊羹', need: true, },
            ],
        },
        '美术品': {
            buff: '战斗获取金币提升10%',
            goods: [
                { name: '喜剧王的雕刻', },
                { name: '最后的合唱', },
                { name: '唱圣歌的圣女像', need: true, },
                { name: '升天的阿鲁斯', need: true, },
            ],
        },
        '书籍': {
            buff: '吸引距离提升2m',
            goods: [
                { name: '幽界神话戏曲', },
                { name: '塞洛斯亚公爵传记', },
                { name: '幽界美术名画全集', need: true, },
                { name: '阿德尔初恋战纪', need: true, },
            ],
        },
        '桌游': {
            buff: '奔跑速度提升5%',
            goods: [
                { name: '阶级扑克牌', },
                { name: '剑斗士相扑', },
                { name: '珊瑚黑白棋', },
                { name: '宝石航线', },
                { name: '诺彭彭庭院', },
                { name: '珊瑚纸牌', },
            ],
        },
        '化妆品': {
            buff: '毒性区域等地形伤害降低10%',
            goods: [
                { name: '蛋白珊瑚口红', },
                { name: '阿鲁斯油护手霜', },
                { name: '黄金睫毛膏', },
                { name: '美丽胭脂', need: true, },
                { name: '弥先珊瑚唇彩', need: true, },
            ],
        },
    },
    '斯佩比亚': {
        '蔬菜': {
            buff: '敌方侦查距离降低5%',
            goods: [
                { name: '海豚苦瓜夹肉', },
                { name: '黄昏炭火烤串', },
                { name: '爽口温菜色拉', need: true, },
                { name: '蒸汽雪花凉拌色拉', need: true, },
            ]
        },
        '肉': {
            buff: '增幅器道具上限数提升10',
            goods: [
                { name: '兽肉木豆烤串', },
                { name: '香草生肉奶油粥', },
                { name: '蒸汽铁火鸟', },
                { name: '星形炸肉排', },
                { name: '木豆煮鳞甲兽肉', },
                { name: '炸肉排', },
            ]
        },
        '鱼': {
            buff: '增幅器道具上限数提升10',
            goods: [
                { name: '香烤沙鲑', },
                { name: '云海蟹奶油土豆饼', },
                { name: '甜醋沙鲑', need: true, },
                { name: '香味干金枪鱼头汤', need: true, },
            ],
        },
        '甜点': {
            buff: '吸引距离提升2m',
            goods: [
                { name: '蒸汽奶味面包', },
                { name: '蒸汽宝石冰', },
                { name: '木豆大福团子', },
                { name: '满天宝石挞', need: true, },
                { name: '迪法露果胶挞', need: true, },
                { name: '热红宝石蒸汽面包', need: true, },
            ],
        },
        '乐器': {
            buff: '掉落道具收集范围提升50cm',
            goods: [
                { name: '铜管小号', },
                { name: '蒸汽管风琴', },
                { name: '军队中提琴', },
                { name: '金属小鼓', },
                { name: '管木琴', need: true, },
                { name: '冰柱马林巴', need: true, },
            ],
        },
        '美术品': {
            buff: '非战斗状态队伍槽减少量降低25%',
            goods: [
                { name: '朋克人偶', },
                { name: '艾菲姆的铜像', },
                { name: '斯佩比亚熊木雕', },
                { name: '妖精菲尔梅莉的雕像', need: true, },
                { name: '海螺八音盒', need: true, },
            ],
        },
        '书籍': {
            buff: '毒性区域等地形伤害降低10%',
            goods: [
                { name: '斯佩比亚帝国军兵器图鉴', },
                { name: '皇帝艾非姆战纪', },
                { name: '帝国秘密温泉一日游', },
                { name: '假肢阿乔的悲惨世界', },
                { name: '纯白之恋~穿越雪原~', },
                { name: '诺彭能发战争财吗？', need: true, },
            ],
        },
        '桌游': {
            buff: '道具发现能力提升10%',
            goods: [
                { name: '军事区域', },
                { name: '管桩积木', },
                { name: '秘密裁决', },
                { name: '决斗王国', },
                { name: '交涉王国', need: true, },
                { name: '水管工逃脱游戏', need: true, },
            ],
        }
    },
    '洛修利亚': {
        '主食': {
            buff: '非战斗状态队伍槽减少量降低25%',
            goods: [
                { name: '熔岩馅饼', },
                { name: '奥托燕麦粥', },
                { name: '蛋黄酱烤章鱼', },
                { name: '果肉包', need: true, },
                { name: '铁火肉排盖浇饭', need: true, },
            ]
        },
        '蔬菜': {
            buff: '战斗经验值提升10%',
            goods: [
                { name: '炖蔬菜浓汤', },
                { name: '英雄阿德尔烤饼', },
                { name: '香脆冰雪酱瓜', },
                { name: '粉雪粉叶草软冻', },
                { name: '雪醋淋冰包心菜', need: true, },
            ]
        },
        '鱼': {
            buff: '战斗经验值提升10%',
            goods: [
                { name: '慢火煎芬芳虾', },
                { name: '烤全深渊蝶鲨', },
                { name: '热牡蛎卷', need: true, },
                { name: '冰鱼包子浓汤', need: true, },
            ],
        },
        '甜点': {
            buff: '生活道具上限数量增加10',
            goods: [
                { name: '轻飘飘雪花冰霜', },
                { name: '融雪千层饼', },
                { name: '烤炉钠夕立', },
                { name: '高级雪花奶酪蛋糕', },
                { name: '迪法路宾治', need: true, },
                { name: '饼雪团子', need: true, },
            ],
        },
        '美术品': {
            buff: '',
            goods: [
                { name: '古代王肖像', },
                { name: '雪花水晶壶', },
                { name: '隐匿勇者嘉拉德的肖像画', },
                { name: '丘陵上伫立的少女', },
                { name: '最后的合唱', },
            ],
        },
        '书籍': {
            buff: '奔跑速度提升5%',
            goods: [
                { name: '与荣耀共行', },
                { name: '鳞甲兽的感情', },
                { name: '铠虾座的证人', },
                { name: '英雄阿德尔的历史', },
                { name: '暴风雪中的圣歌队', need: true, },
                { name: '天文占卜大辞典', need: true, },
                { name: '耽美绅士之书', desc: '协助执笔支线，无关产权', },
            ],
        },
        '桌游': {
            buff: '道具发现能力提升10%',
            goods: [
                { name: '意外之失', },
                { name: '吹牛之夜', },
                { name: '再见了金钱', },
                { name: '雪原的诺彭强盗', need: true, },
                { name: '宝石台球', need: true, },
            ],
        },
        '化妆品': {
            buff: '生活道具上限数量增加10',
            goods: [
                { name: '暖暖油', },
                { name: '巧克力眼影', },
                { name: '星月唇膏', },
                { name: '诺彭尾指甲油', },
                { name: '蒸汽粉底', },
            ],
        },
        '纺织品': {
            buff: '战斗经验值提升10%',
            goods: [
                { name: '洛修利亚天鹅绒', },
                { name: '雪花纹步鞋垫', },
                { name: '玄武纹棉布', },
                { name: '热条纹布', },
                { name: '五线谱花纹发夹', need: true, },
                { name: '托里格雪花围巾', need: true, },
            ],
        }
    },
    '弥先村': {
        '蔬菜': {
            buff: '战斗获取金币提升10%',
            goods: [
                { name: '里贝利亚杂烩汤', },
                { name: '绿奶酪色拉', },
                { name: '烤蔬菜千层饼', },
                { name: '温蔬菜煎牡蛎', need: true, },
                { name: '雪孩子土豆色拉', need: true, },
            ]
        },
        '肉': {
            buff: '毒性区域等地形伤害降低10%',
            goods: [
                { name: '鸵羽兽肉煎饺', },
                { name: '叠烤白培根', },
                { name: '甜味红烧鳞甲兽排骨肉', },
                { name: '活力炒电击里脊肉', },
                { name: '香味包子奶油浓汤', need: true, },
                { name: '薄饼杂炒', need: true, },
            ]
        },
        '鱼': {
            buff: '奔跑速度提升5%',
            goods: [
                { name: '煮独刺鱼', },
                { name: '煎拍水大虾', },
                { name: '炙烤云海蟹', },
                { name: '火炙冰鱼花胡桃', },
                { name: '蜜青将鱼', },
            ],
        },
        '饮料': {
            buff: '敌方侦察距离降低5%',
            goods: [
                { name: '迪法露', },
                { name: '阿卡狄亚茶', },
                { name: '冰霜迪法露', },
                { name: '水管吸管果冰霜', need: true, },
                { name: '鳞甲兽奶柠檬茶', need: true, },
            ],
        },
        '美术品': {
            buff: '获得心相点数时获得1点',
            goods: [
                { name: '月光花环', },
                { name: '莫特科拉人偶', },
                { name: '钢管海翼龙', },
                { name: '嫩绿月光面具', },
            ],
        },
        '纺织品': {
            buff: '吸引距离提升2m',
            goods: [
                { name: '水母凤仙花绒毯', },
                { name: '曼陀罗花纹门帘', },
                { name: '辟魔曼陀罗毛巾', },
                { name: '镂空披肩', },
                { name: '彭诺斗篷', need: true, },
                { name: '镂空花纹头饰', need: true, },
            ],
        }
    },
    '异刃技能': {
        '焰的料理': {
            goods: [
                { name: '托里格风味塔尔塔里烤鱼', },
                { name: '三色丸子', },
            ]
        },
        '月的冰雕': {
            goods: [
                { name: '洛修利亚冰魔方', },
            ]
        },
        '鸣的纺织': {
            goods: [
                { name: '王家羊毛', },
            ]
        },
        '雄黄的糕点': {
            goods: [
                { name: '霓虹葡萄布丁', },
            ]
        },
    }
}