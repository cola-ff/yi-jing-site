// ============================================================
// 易经64卦完整数据
// 包含：卦名、卦象、爻线、天纪、地纪、人纪
// 卦辞、爻辞、彖辞、象辞均采用《周易》原文
// ============================================================

const GUA64_DATA = [
  {
    "id": 1,
    "name": "乾",
    "fullName": "乾为天",
    "upperGua": "乾",
    "lowerGua": "乾",
    "tianJi": {
      "nature": "天",
      "virtue": "健",
      "xiangCi": "天行健，君子以自强不息",
      "season": "立冬之后，阳气初动",
      "wuXing": "金",
      "astro": "东方苍龙七宿"
    },
    "diJi": {
      "direction": {
        "xianTian": "南",
        "houTian": "西北"
      },
      "geography": "高山、天际、开阔之地",
      "heLuoNumber": {
        "xianTian": 1,
        "houTian": 6
      },
      "naJia": "乾纳甲壬",
      "region": "西北之地、高亢之所",
      "fengShui": "宜高不宜低，宜动不宜静"
    },
    "renJi": {
      "guaCi": "乾：元，亨，利，贞",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "潜龙勿用",
          "interpret": "阳气潜藏于下，时机未至，当隐修养德，不宜妄动。"
        },
        {
          "yao": "九二",
          "text": "见龙在田，利见大人",
          "interpret": "阳气初露于地面，德行渐显，宜见贤思齐，得贵人相助。"
        },
        {
          "yao": "九三",
          "text": "君子终日乾乾，夕惕若厉，无咎",
          "interpret": "居位得当而勤勉不怠，朝夕戒惧，虽处危地亦可免祸。"
        },
        {
          "yao": "九四",
          "text": "或跃在渊，无咎",
          "interpret": "进退之机，当审时度势，跃而试之，纵入深渊亦无灾咎。"
        },
        {
          "yao": "九五",
          "text": "飞龙在天，利见大人",
          "interpret": "阳气盛极，德位相配，大展宏图之时，宜见大德之人。"
        },
        {
          "yao": "上九",
          "text": "亢龙有悔",
          "interpret": "阳刚过亢，盛极而衰，不知退守必有悔吝。"
        }
      ],
      "tuanCi": "大哉乾元，万物资始，乃统天。云行雨施，品物流形。大明终始，六位时成，时乘六龙以御天。乾道变化，各正性命，保合大和，乃利贞。首出庶物，万国咸宁。",
      "affairs": "刚健中正，宜开创进取，不宜屈居人下",
      "career": "利于开创新事业，独立自主，不宜从属",
      "marriage": "男方主动为吉，刚柔相济则成",
      "health": "注意头部、呼吸系统，防阳气过亢",
      "cultivation": "自强不息，戒骄戒躁，知进退存亡"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阳",
      "阳",
      "阳",
      "阳"
    ],
    "symbol": "☰☰"
  },
  {
    "id": 2,
    "name": "坤",
    "fullName": "坤为地",
    "upperGua": "坤",
    "lowerGua": "坤",
    "tianJi": {
      "nature": "地",
      "virtue": "顺",
      "xiangCi": "地势坤，君子以厚德载物",
      "season": "立秋之后，阴气渐长",
      "wuXing": "土",
      "astro": "北方玄武七宿"
    },
    "diJi": {
      "direction": {
        "xianTian": "北",
        "houTian": "西南"
      },
      "geography": "平原、田野、厚土之地",
      "heLuoNumber": {
        "xianTian": 8,
        "houTian": 2
      },
      "naJia": "坤纳乙癸",
      "region": "西南之地、低平之所",
      "fengShui": "宜厚不宜薄，宜静不宜动"
    },
    "renJi": {
      "guaCi": "坤：元，亨，利牝马之贞。君子有攸往，先迷后得主，利。西南得朋，东北丧朋。安贞，吉",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "履霜，坚冰至",
          "interpret": "见微知著，踏霜而知坚冰将至，防患于未然。"
        },
        {
          "yao": "六二",
          "text": "直，方，大，不习无不利",
          "interpret": "品德正直方正宏大，自然无为而无不利。"
        },
        {
          "yao": "六三",
          "text": "含章可贞。或从王事，无成有终",
          "interpret": "含蓄才华而不炫耀，辅佐君事不居功而有善终。"
        },
        {
          "yao": "六四",
          "text": "括囊，无咎无誉",
          "interpret": "收敛谨慎如扎紧口袋，虽无赞誉亦无灾祸。"
        },
        {
          "yao": "六五",
          "text": "黄裳，元吉",
          "interpret": "中正温润之德，如黄色下裳，大吉之至。"
        },
        {
          "yao": "上六",
          "text": "龙战于野，其血玄黄",
          "interpret": "阴气极盛而抗阳，两败俱伤，血染天地。"
        }
      ],
      "tuanCi": "至哉坤元，万物资生，乃顺承天。坤厚载物，德合无疆。含弘光大，品物咸亨。牝马地类，行地无疆，柔顺利贞。君子攸行，先迷失道，后顺得常。西南得朋，乃与类行；东北丧朋，乃终有庆。安贞之吉，应地无疆。",
      "affairs": "柔顺承载，宜辅佐配合，不宜争先",
      "career": "利于守成辅佐，踏实做事，不宜开创",
      "marriage": "女方柔顺为吉，宜配刚强之夫",
      "health": "注意脾胃、消化系统，宜静养",
      "cultivation": "厚德载物，含弘光大，柔顺守正"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阴",
      "阴",
      "阴",
      "阴"
    ],
    "symbol": "☷☷"
  },
  {
    "id": 3,
    "name": "屯",
    "fullName": "水雷屯",
    "upperGua": "坎",
    "lowerGua": "震",
    "tianJi": {
      "nature": "云雷",
      "virtue": "动乎险中",
      "xiangCi": "云雷屯，君子以经纶",
      "season": "冬至前后，一阳初生",
      "wuXing": "水木",
      "astro": "雷雨之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西东",
        "houTian": "北东"
      },
      "geography": "雷雨交加、初生之地",
      "heLuoNumber": {
        "xianTian": "6/4",
        "houTian": "1/3"
      },
      "naJia": "上坎纳戊，下震纳庚",
      "region": "东北方、草木初生之地",
      "fengShui": "宜固本培元，不宜急进"
    },
    "renJi": {
      "guaCi": "屯：元，亨，利，贞。勿用有攸往，利建侯",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "磐桓，利居贞，利建侯",
          "interpret": "初创之时徘徊难进，宜守正安居，建立根基。"
        },
        {
          "yao": "六二",
          "text": "屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字",
          "interpret": "艰难迟回，非寇而是求婚，女子守正待时，十年方成。"
        },
        {
          "yao": "六三",
          "text": "即鹿无虞，惟入于林中，君子几不如舍，往吝",
          "interpret": "逐鹿无向导，入林必迷，君子见机不如舍去，强往有吝。"
        },
        {
          "yao": "六四",
          "text": "乘马班如，求婚媾，往吉无不利",
          "interpret": "乘马徘徊，主动求偶，前往则吉无不利。"
        },
        {
          "yao": "九五",
          "text": "屯其膏，小贞吉，大贞凶",
          "interpret": "施泽未广，小事守正则吉，大事则凶。"
        },
        {
          "yao": "上六",
          "text": "乘马班如，泣血涟如",
          "interpret": "屯难至极，进退两难，泣血伤悲。"
        }
      ],
      "tuanCi": "屯，刚柔始交而难生，动乎险中，大亨贞。雷雨之动满盈，天造草昧，宜建侯而不宁。",
      "affairs": "初创艰难，宜建立根基，不宜冒进",
      "career": "利于奠基创业，寻求辅助，不宜扩张",
      "marriage": "初有波折，待时则成，宜耐心",
      "health": "注意肝胆、肾脏，宜调养气血",
      "cultivation": "经纶天下，处险不惊，固本培元"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阴",
      "阴",
      "阳",
      "阴"
    ],
    "symbol": "☵☳"
  },
  {
    "id": 4,
    "name": "蒙",
    "fullName": "山水蒙",
    "upperGua": "艮",
    "lowerGua": "坎",
    "tianJi": {
      "nature": "山下出泉",
      "virtue": "蒙昧待启",
      "xiangCi": "山下出泉，蒙，君子以果行育德",
      "season": "雨水时节，万物萌发",
      "wuXing": "土水",
      "astro": "山泉之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西北西",
        "houTian": "东北北"
      },
      "geography": "山下泉水、蒙昧之地",
      "heLuoNumber": {
        "xianTian": "7/6",
        "houTian": "8/1"
      },
      "naJia": "上艮纳丙，下坎纳戊",
      "region": "东北方、山泉之地",
      "fengShui": "宜启蒙教化，宜静养"
    },
    "renJi": {
      "guaCi": "蒙：亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "发蒙，利用刑人，用说桎梏，以往吝",
          "interpret": "启发蒙昧，宜立规矩约束，解脱束缚，但过则有吝。"
        },
        {
          "yao": "九二",
          "text": "包蒙吉。纳妇吉，子克家",
          "interpret": "包容蒙昧则吉，娶妇亦吉，子能治家。"
        },
        {
          "yao": "六三",
          "text": "勿用取女，见金夫，不有躬，无攸利",
          "interpret": "勿娶此女，见富贵即失身，无所利。"
        },
        {
          "yao": "六四",
          "text": "困蒙，吝",
          "interpret": "困于蒙昧，远离师友，有吝。"
        },
        {
          "yao": "六五",
          "text": "童蒙，吉",
          "interpret": "童稚纯真，虚心受教，吉。"
        },
        {
          "yao": "上九",
          "text": "击蒙，不利为寇，利御寇",
          "interpret": "以猛击蒙，不宜过暴如寇，宜用于御寇。"
        }
      ],
      "tuanCi": "蒙，山下有险，险而止，蒙。蒙亨，以亨行时中也。匪我求童蒙，童蒙求我，志应也。初筮告，以刚中也。再三渎，渎则不告，渎蒙也。蒙以养正，圣功也。",
      "affairs": "宜启蒙教化，虚心求教，不宜自以为是",
      "career": "利于学习积累，寻求导师，不宜独断",
      "marriage": "宜娶纯朴之女，不宜贪慕虚荣",
      "health": "注意肾、泌尿系统，宜清心寡欲",
      "cultivation": "果行育德，蒙以养正，虚心受教"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阴",
      "阴",
      "阴",
      "阳"
    ],
    "symbol": "☶☵"
  },
  {
    "id": 5,
    "name": "需",
    "fullName": "水天需",
    "upperGua": "坎",
    "lowerGua": "乾",
    "tianJi": {
      "nature": "云上于天",
      "virtue": "等待",
      "xiangCi": "云上于天，需，君子以饮食宴乐",
      "season": "小满时节，雨待降",
      "wuXing": "水金",
      "astro": "云天之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西南",
        "houTian": "北西北"
      },
      "geography": "云天之上、待雨之地",
      "heLuoNumber": {
        "xianTian": "6/1",
        "houTian": "1/6"
      },
      "naJia": "上坎纳戊，下乾纳甲壬",
      "region": "西北方、高处之地",
      "fengShui": "宜静待时机，宜高爽之地"
    },
    "renJi": {
      "guaCi": "需：有孚，光亨，贞吉。利涉大川",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "需于郊，利用恒，无咎",
          "interpret": "在郊外等待，远离危险，恒心守之无咎。"
        },
        {
          "yao": "九二",
          "text": "需于沙，小有言，终吉",
          "interpret": "在沙滩等待，稍有口舌是非，终则吉。"
        },
        {
          "yao": "九三",
          "text": "需于泥，致寇至",
          "interpret": "在泥泞中等待，逼近危险，招致寇至。"
        },
        {
          "yao": "六四",
          "text": "需于血，出自穴",
          "interpret": "在血泊中等待，从险穴中脱出。"
        },
        {
          "yao": "九五",
          "text": "需于酒食，贞吉",
          "interpret": "在酒食中等待，养精蓄锐，守正则吉。"
        },
        {
          "yao": "上六",
          "text": "入于穴，有不速之客三人来，敬之终吉",
          "interpret": "陷入穴中，有不速之客三人来，敬待之终吉。"
        }
      ],
      "tuanCi": "需，须也，险在前也。刚健而不陷，其义不困穷矣。需有孚，光亨，贞吉。位乎天位，以正中也。利涉大川，往有功也。",
      "affairs": "宜耐心等待，蓄势待发，不宜急躁",
      "career": "利于蓄积实力，待机而动，不宜冒进",
      "marriage": "宜缓不宜急，待时机成熟则成",
      "health": "注意肾、血液循环，宜饮食调养",
      "cultivation": "饮食宴乐，养精蓄锐，待时而动"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阳",
      "阴",
      "阳",
      "阴"
    ],
    "symbol": "☵☰"
  },
  {
    "id": 6,
    "name": "讼",
    "fullName": "天水讼",
    "upperGua": "乾",
    "lowerGua": "坎",
    "tianJi": {
      "nature": "天与水违行",
      "virtue": "争讼",
      "xiangCi": "天与水违行，讼，君子以作事谋始",
      "season": "秋分前后，燥气盛",
      "wuXing": "金水",
      "astro": "天水背行之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "南西",
        "houTian": "西北北"
      },
      "geography": "天水背行、争讼之地",
      "heLuoNumber": {
        "xianTian": "1/6",
        "houTian": "6/1"
      },
      "naJia": "上乾纳甲壬，下坎纳戊",
      "region": "西北方、险峻之地",
      "fengShui": "宜防争端，宜和解"
    },
    "renJi": {
      "guaCi": "讼：有孚，窒惕，中吉，终凶。利见大人，不利涉大川",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "不永所事，小有言，终吉",
          "interpret": "不长久纠缠讼事，虽有口舌，终则吉。"
        },
        {
          "yao": "九二",
          "text": "不克讼，归而逋，其邑人三百户无眚",
          "interpret": "讼败逃归，退守小邑三百户则免灾。"
        },
        {
          "yao": "六三",
          "text": "食旧德，贞厉，终吉。或从王事，无成",
          "interpret": "安享旧德，守正防危终吉。从王事不居功。"
        },
        {
          "yao": "九四",
          "text": "不克讼，复即命，渝，安贞吉",
          "interpret": "讼败回归本分，改变初衷，安贞则吉。"
        },
        {
          "yao": "九五",
          "text": "讼，元吉",
          "interpret": "公正断讼，大吉之至。"
        },
        {
          "yao": "上九",
          "text": "或锡之鞶带，终朝三褫之",
          "interpret": "纵讼胜得赏赐，一日之内三次被夺，终不长久。"
        }
      ],
      "tuanCi": "讼，上刚下险，险而健，讼。讼有孚窒惕，中吉，刚来而得中也。终凶，讼不可成也。利见大人，尚中正也。不利涉大川，入于渊也。",
      "affairs": "宜防争端，谋始慎行，不宜诉讼",
      "career": "利于谨慎谋划，避免纠纷，不宜冒险",
      "marriage": "多有口舌争执，宜和解包容",
      "health": "注意肺、肾脏，防情绪激动",
      "cultivation": "作事谋始，息事宁人，守正不争"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阴",
      "阳",
      "阳",
      "阳"
    ],
    "symbol": "☰☵"
  },
  {
    "id": 7,
    "name": "师",
    "fullName": "地水师",
    "upperGua": "坤",
    "lowerGua": "坎",
    "tianJi": {
      "nature": "地中有水",
      "virtue": "聚众",
      "xiangCi": "地中有水，师，君子以容民畜众",
      "season": "大寒前后，水藏地中",
      "wuXing": "土水",
      "astro": "地水之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "北西",
        "houTian": "西南北"
      },
      "geography": "地中有水、聚众之地",
      "heLuoNumber": {
        "xianTian": "8/6",
        "houTian": "2/1"
      },
      "naJia": "上坤纳乙癸，下坎纳戊",
      "region": "北方、藏蓄之地",
      "fengShui": "宜聚不宜散，宜藏蓄"
    },
    "renJi": {
      "guaCi": "师：贞，丈人吉无咎",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "师出以律，否臧凶",
          "interpret": "出师必以纪律，纪律不善则凶。"
        },
        {
          "yao": "九二",
          "text": "在师中吉，无咎，王三锡命",
          "interpret": "居中军帅，吉无咎，君王三次赐命嘉奖。"
        },
        {
          "yao": "六三",
          "text": "师或舆尸，凶",
          "interpret": "出师或大败载尸而归，凶。"
        },
        {
          "yao": "六四",
          "text": "师左次，无咎",
          "interpret": "军队左次驻扎，退守无咎。"
        },
        {
          "yao": "六五",
          "text": "田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶",
          "interpret": "田中有禽宜捕之。长子帅师吉，弟子载尸凶。"
        },
        {
          "yao": "上六",
          "text": "大君有命，开国承家，小人勿用",
          "interpret": "君王论功行赏，开国承家，但小人不可用。"
        }
      ],
      "tuanCi": "师，众也，贞正也，能以众正，可以王矣。刚中而应，行险而顺，以此毒天下而民从之，吉又何咎矣！",
      "affairs": "宜纪律严明，任用贤能，不宜任人唯亲",
      "career": "利于团队管理，统帅之才，不宜独断",
      "marriage": "宜长辈主持，门当户对",
      "health": "注意脾胃、肾，宜规律作息",
      "cultivation": "容民畜众，纪律严明，任贤使能"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阴",
      "阴",
      "阴",
      "阴"
    ],
    "symbol": "☷☵"
  },
  {
    "id": 8,
    "name": "比",
    "fullName": "水地比",
    "upperGua": "坎",
    "lowerGua": "坤",
    "tianJi": {
      "nature": "地上有水",
      "virtue": "亲比",
      "xiangCi": "地上有水，比，先王以建万国，亲诸侯",
      "season": "雨水时节，水润大地",
      "wuXing": "水土",
      "astro": "水地之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西北",
        "houTian": "北西南"
      },
      "geography": "水润大地、亲比之地",
      "heLuoNumber": {
        "xianTian": "6/8",
        "houTian": "1/2"
      },
      "naJia": "上坎纳戊，下坤纳乙癸",
      "region": "北方、水草丰美之地",
      "fengShui": "宜亲近团结，宜水润之地"
    },
    "renJi": {
      "guaCi": "比：吉。原筮元永贞，无咎。不宁方来，后夫凶",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "有孚比之，无咎。有孚盈缶，终来有它吉",
          "interpret": "以诚信亲比无咎，诚信如满缶，终有他吉。"
        },
        {
          "yao": "六二",
          "text": "比之自内，贞吉",
          "interpret": "发自内心亲比，守正则吉。"
        },
        {
          "yao": "六三",
          "text": "比之匪人",
          "interpret": "亲比不当之人，有悔。"
        },
        {
          "yao": "六四",
          "text": "外比之，贞吉",
          "interpret": "向外亲比贤人，守正则吉。"
        },
        {
          "yao": "九五",
          "text": "显比，王用三驱，失前禽。邑人不诫，吉",
          "interpret": "光明正大亲比，王三面围猎失前禽，邑人不惧，吉。"
        },
        {
          "yao": "上六",
          "text": "比之无首，凶",
          "interpret": "亲比而无首领，凶。"
        }
      ],
      "tuanCi": "比，吉也，比，辅也，下顺从也。原筮元永贞，无咎，以刚中也。不宁方来，上下应也。后夫凶，其道穷也。",
      "affairs": "宜团结亲附，诚信待人，不宜孤立",
      "career": "利于合作共赢，依附强者，不宜独来独往",
      "marriage": "宜两情相悦，门第相当",
      "health": "注意肾、脾胃，宜亲近自然",
      "cultivation": "亲比辅佐，诚信团结，择善而从"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阴",
      "阴",
      "阳",
      "阴"
    ],
    "symbol": "☵☷"
  },
  {
    "id": 9,
    "name": "小畜",
    "fullName": "风天小畜",
    "upperGua": "巽",
    "lowerGua": "乾",
    "tianJi": {
      "nature": "风行天上",
      "virtue": "小有蓄积",
      "xiangCi": "风行天上，小畜，君子以懿文德",
      "season": "谷雨前后，风和日丽",
      "wuXing": "木金",
      "astro": "风天之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西南南",
        "houTian": "东南西北"
      },
      "geography": "风行天上、蓄积之地",
      "heLuoNumber": {
        "xianTian": "5/1",
        "houTian": "4/6"
      },
      "naJia": "上巽纳辛，下乾纳甲壬",
      "region": "东南方、高爽之地",
      "fengShui": "宜蓄不宜散，宜文德"
    },
    "renJi": {
      "guaCi": "小畜：亨。密云不雨，自我西郊",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "复自道，何其咎，吉",
          "interpret": "回归正道，有何咎害，吉。"
        },
        {
          "yao": "九二",
          "text": "牵复，吉",
          "interpret": "携手并进回归正道，吉。"
        },
        {
          "yao": "九三",
          "text": "舆说辐，夫妻反目",
          "interpret": "车轮脱辐，夫妻反目，不能前行。"
        },
        {
          "yao": "六四",
          "text": "有孚，血去惕出，无咎",
          "interpret": "有诚信，免去流血之灾，出离危惧，无咎。"
        },
        {
          "yao": "九五",
          "text": "有孚挛如，富以其邻",
          "interpret": "诚信相系，与邻共富。"
        },
        {
          "yao": "上九",
          "text": "既雨既处，尚德载，妇贞厉。月几望，君子征凶",
          "interpret": "雨降而止，尚德积载，妇守正防危。月近圆，君子出征凶。"
        }
      ],
      "tuanCi": "小畜，柔得位而上下应之，曰小畜。健而巽，刚中而志行，乃亨。密云不雨，尚往也；自我西郊，施未行也。",
      "affairs": "宜小有蓄积，修养文德，不宜大动",
      "career": "利于积累沉淀，充实自我，不宜冒进",
      "marriage": "宜以德服人，防夫妻反目",
      "health": "注意肝、肺，宜调和气血",
      "cultivation": "懿文德，小蓄养，以柔蓄刚"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阳",
      "阴",
      "阳",
      "阳"
    ],
    "symbol": "☴☰"
  },
  {
    "id": 10,
    "name": "履",
    "fullName": "天泽履",
    "upperGua": "乾",
    "lowerGua": "兑",
    "tianJi": {
      "nature": "上天下泽",
      "virtue": "履礼",
      "xiangCi": "上天下泽，履，君子以辩上下，定民志",
      "season": "白露时节，天高泽润",
      "wuXing": "金",
      "astro": "天泽之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "南东南",
        "houTian": "西北西"
      },
      "geography": "天高泽润、礼制之地",
      "heLuoNumber": {
        "xianTian": "1/2",
        "houTian": "6/7"
      },
      "naJia": "上乾纳甲壬，下兑纳丁",
      "region": "西北方、泽润之地",
      "fengShui": "宜守礼制，宜明上下"
    },
    "renJi": {
      "guaCi": "履：履虎尾，不咥人，亨",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "素履，往无咎",
          "interpret": "朴素而行，前往无咎。"
        },
        {
          "yao": "九二",
          "text": "履道坦坦，幽人贞吉",
          "interpret": "履道平坦，幽静守正之人吉。"
        },
        {
          "yao": "六三",
          "text": "眇能视，跛能履，履虎尾，咥人凶。武人为于大君",
          "interpret": "眇而强视，跛而强行，踩虎尾被咬凶。武人妄为大君。"
        },
        {
          "yao": "九四",
          "text": "履虎尾，愬愬终吉",
          "interpret": "踩虎尾，戒惧谨慎终吉。"
        },
        {
          "yao": "九五",
          "text": "夬履，贞厉",
          "interpret": "果决而行，守正防危。"
        },
        {
          "yao": "上九",
          "text": "视履考祥，其旋元吉",
          "interpret": "审视履道考察吉凶，回归正道大吉。"
        }
      ],
      "tuanCi": "履，柔履刚也。说而应乎乾，是以履虎尾，不咥人，亨。刚中正，履帝位而不疚，光明也。",
      "affairs": "宜守礼慎行，知进退，不宜妄动",
      "career": "利于循规蹈矩，谨慎行事，不宜越位",
      "marriage": "宜门当户对，以礼相待",
      "health": "注意肺、口舌，宜清心寡欲",
      "cultivation": "辩上下，定民志，以礼履险"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阴",
      "阳",
      "阳",
      "阳"
    ],
    "symbol": "☰☱"
  },
  {
    "id": 11,
    "name": "泰",
    "fullName": "地天泰",
    "upperGua": "坤",
    "lowerGua": "乾",
    "tianJi": {
      "nature": "天地交泰",
      "virtue": "通达",
      "xiangCi": "天地交，泰，后以财成天地之道，辅相天地之宜，以左右民",
      "season": "立春前后，阴阳交泰",
      "wuXing": "土金",
      "astro": "天地交泰之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "北南",
        "houTian": "西南西北"
      },
      "geography": "天地交融、通达之地",
      "heLuoNumber": {
        "xianTian": "8/1",
        "houTian": "2/6"
      },
      "naJia": "上坤纳乙癸，下乾纳甲壬",
      "region": "中央、通达之地",
      "fengShui": "宜阴阳交合，宜通达之地"
    },
    "renJi": {
      "guaCi": "泰：小往大来，吉亨",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "拔茅茹，以其汇，征吉",
          "interpret": "拔茅连根，以其同类，出征吉。"
        },
        {
          "yao": "九二",
          "text": "包荒，用冯河，不遐遗，朋亡，得尚于中行",
          "interpret": "包容如荒野，徒步涉河，不遗远，不结朋，中道而行。"
        },
        {
          "yao": "九三",
          "text": "无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福",
          "interpret": "无平不陂，无往不复，艰守正无咎。诚信不忧，食有福。"
        },
        {
          "yao": "六四",
          "text": "翩翩不富，以其邻，不戒以孚",
          "interpret": "翩翩而下不富，携邻同来，不戒而诚信。"
        },
        {
          "yao": "六五",
          "text": "帝乙归妹，以祉元吉",
          "interpret": "帝乙嫁女，以此得福大吉。"
        },
        {
          "yao": "上六",
          "text": "城复于隍，勿用师，自邑告命，贞吝",
          "interpret": "城墙倾覆于隍中，勿用兵，自邑告命，守正有吝。"
        }
      ],
      "tuanCi": "泰，小往大来，吉亨。则是天地交而万物通也，上下交而其志同也。内阳而外阴，内健而外顺，内君子而外小人，君子道长，小人道消也。",
      "affairs": "宜通达交泰，上下沟通，不宜闭塞",
      "career": "利于事业通达，内外协调，大吉之卦",
      "marriage": "大吉之象，天作之合，阴阳和合",
      "health": "气血通畅，百病不生，宜保持",
      "cultivation": "财成天地之道，辅相天地之宜，包容通达"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阳",
      "阴",
      "阴",
      "阴"
    ],
    "symbol": "☷☰"
  },
  {
    "id": 12,
    "name": "否",
    "fullName": "天地否",
    "upperGua": "乾",
    "lowerGua": "坤",
    "tianJi": {
      "nature": "天地不交",
      "virtue": "闭塞",
      "xiangCi": "天地不交，否，君子以俭德辟难，不可荣以禄",
      "season": "秋分前后，阴阳分离",
      "wuXing": "金土",
      "astro": "天地不交之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "南北",
        "houTian": "西北西南"
      },
      "geography": "天地隔绝、闭塞之地",
      "heLuoNumber": {
        "xianTian": "1/8",
        "houTian": "6/2"
      },
      "naJia": "上乾纳甲壬，下坤纳乙癸",
      "region": "高处、闭塞之地",
      "fengShui": "宜避难隐退，不宜张扬"
    },
    "renJi": {
      "guaCi": "否之匪人，不利君子贞，大往小来",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "拔茅茹，以其汇，贞吉，亨",
          "interpret": "拔茅连根，以其同类，守正则吉亨。"
        },
        {
          "yao": "六二",
          "text": "包承，小人吉，大人否亨",
          "interpret": "包容承顺，小人吉，大人处否而亨。"
        },
        {
          "yao": "六三",
          "text": "包羞",
          "interpret": "包容羞辱，位不当也。"
        },
        {
          "yao": "九四",
          "text": "有命无咎，畴离祉",
          "interpret": "奉天命无咎，同类得福。"
        },
        {
          "yao": "九五",
          "text": "休否，大人吉。其亡其亡，系于苞桑",
          "interpret": "休止闭塞，大人吉。常怀危亡之心，系于苞桑。"
        },
        {
          "yao": "上九",
          "text": "倾否，先否后喜",
          "interpret": "倾覆闭塞，先否后喜。"
        }
      ],
      "tuanCi": "否之匪人，不利君子贞，大往小来。则是天地不交而万物不通也，上下不交而天下无邦也。内阴而外阳，内柔而外刚，内小人而外君子。小人道长，君子道消也。",
      "affairs": "宜俭德避难，隐忍待时，不宜张扬",
      "career": "事业闭塞，宜守不宜进，待时转运",
      "marriage": "多有阻隔，沟通不畅，宜耐心",
      "health": "气血不畅，注意郁结，宜疏通",
      "cultivation": "俭德辟难，不可荣禄，隐忍待时"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阴",
      "阳",
      "阳",
      "阳"
    ],
    "symbol": "☰☷"
  },
  {
    "id": 13,
    "name": "同人",
    "fullName": "天火同人",
    "upperGua": "乾",
    "lowerGua": "离",
    "tianJi": {
      "nature": "天与火",
      "virtue": "和同",
      "xiangCi": "天与火，同人，君子以类族辨物",
      "season": "夏至前后，火气升天",
      "wuXing": "金火",
      "astro": "天火之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "南东",
        "houTian": "西北南"
      },
      "geography": "天火相照、和同之地",
      "heLuoNumber": {
        "xianTian": "1/3",
        "houTian": "6/9"
      },
      "naJia": "上乾纳甲壬，下离纳己",
      "region": "南方、光明之地",
      "fengShui": "宜光明正大，宜和同"
    },
    "renJi": {
      "guaCi": "同人于野，亨。利涉大川，利君子贞",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "同人于门，无咎",
          "interpret": "出门即与人同心，无咎。"
        },
        {
          "yao": "六二",
          "text": "同人于宗，吝",
          "interpret": "只与宗族同心，有吝。"
        },
        {
          "yao": "九三",
          "text": "伏戎于莽，升其高陵，三岁不兴",
          "interpret": "埋伏兵于草莽，登高陵窥伺，三年不敢兴。"
        },
        {
          "yao": "九四",
          "text": "乘其墉，弗克攻，吉",
          "interpret": "登上城墙，不能攻下，退而则吉。"
        },
        {
          "yao": "九五",
          "text": "同人，先号啕而后笑，大师克相遇",
          "interpret": "与人同心，先哭后笑，大军战胜相遇。"
        },
        {
          "yao": "上九",
          "text": "同人于郊，无悔",
          "interpret": "在郊野与人同心，无悔。"
        }
      ],
      "tuanCi": "同人，柔得位得中，而应乎乾，曰同人。同人曰：同人于野，亨。利涉大川，乾行也。文明以健，中正而应，君子正也。唯君子为能通天下之志。",
      "affairs": "宜光明正大，团结众人，不宜结党营私",
      "career": "利于团队合作，广结善缘，大吉",
      "marriage": "宜志同道合，天作之合",
      "health": "注意心、肺，宜心情舒畅",
      "cultivation": "类族辨物，和而不同，通天下之志"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阳",
      "阳",
      "阳",
      "阳"
    ],
    "symbol": "☰☲"
  },
  {
    "id": 14,
    "name": "大有",
    "fullName": "火天大有",
    "upperGua": "离",
    "lowerGua": "乾",
    "tianJi": {
      "nature": "火在天上",
      "virtue": "大有",
      "xiangCi": "火在天上，大有，君子以遏恶扬善，顺天休命",
      "season": "大暑前后，火在天上",
      "wuXing": "火金",
      "astro": "火天之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东南",
        "houTian": "南西北"
      },
      "geography": "火照天下、丰盛之地",
      "heLuoNumber": {
        "xianTian": "3/1",
        "houTian": "9/6"
      },
      "naJia": "上离纳己，下乾纳甲壬",
      "region": "南方、光明之地",
      "fengShui": "宜明不宜暗，宜丰盛"
    },
    "renJi": {
      "guaCi": "大有：元亨",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "无交害，匪咎，艰则无咎",
          "interpret": "无交涉则无害，非咎，艰守则无咎。"
        },
        {
          "yao": "九二",
          "text": "大车以载，有攸往，无咎",
          "interpret": "大车装载，有所往，无咎。"
        },
        {
          "yao": "九三",
          "text": "公用亨于天子，小人弗克",
          "interpret": "公侯朝亨天子，小人不能。"
        },
        {
          "yao": "九四",
          "text": "匪其彭，无咎",
          "interpret": "不过盛，无咎。"
        },
        {
          "yao": "六五",
          "text": "厥孚交如，威如，吉",
          "interpret": "诚信交往，威严庄重，吉。"
        },
        {
          "yao": "上九",
          "text": "自天佑之，吉无不利",
          "interpret": "上天保佑，吉无不利。"
        }
      ],
      "tuanCi": "大有，柔得尊位大中，而上下应之，曰大有。其德刚健而文明，应乎天而时行，是以元亨。",
      "affairs": "宜遏恶扬善，盛大富有，不宜骄奢",
      "career": "事业大成，盛极一时，宜谦逊",
      "marriage": "大吉之象，丰盛美满",
      "health": "气血旺盛，宜防过亢",
      "cultivation": "遏恶扬善，顺天休命，满而不溢"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阳",
      "阳",
      "阴",
      "阳"
    ],
    "symbol": "☲☰"
  },
  {
    "id": 15,
    "name": "谦",
    "fullName": "地山谦",
    "upperGua": "坤",
    "lowerGua": "艮",
    "tianJi": {
      "nature": "地中有山",
      "virtue": "谦虚",
      "xiangCi": "地中有山，谦，君子以裒多益寡，称物平施",
      "season": "立冬前后，山藏地中",
      "wuXing": "土",
      "astro": "地山之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "北西北",
        "houTian": "西南东北"
      },
      "geography": "山藏地中、谦卑之地",
      "heLuoNumber": {
        "xianTian": "8/7",
        "houTian": "2/8"
      },
      "naJia": "上坤纳乙癸，下艮纳丙",
      "region": "东北方、山地",
      "fengShui": "宜藏不宜露，宜谦不宜亢"
    },
    "renJi": {
      "guaCi": "谦：亨，君子有终",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "谦谦君子，用涉大川，吉",
          "interpret": "谦而又谦的君子，用以涉大川，吉。"
        },
        {
          "yao": "六二",
          "text": "鸣谦，贞吉",
          "interpret": "鸣其谦德，守正则吉。"
        },
        {
          "yao": "九三",
          "text": "劳谦君子，有终吉",
          "interpret": "勤劳而谦虚的君子，有终吉。"
        },
        {
          "yao": "六四",
          "text": "无不利，撝谦",
          "interpret": "无不利，发挥谦德。"
        },
        {
          "yao": "六五",
          "text": "不富以其邻，利用侵伐，无不利",
          "interpret": "不富而邻归之，利于侵伐不服，无不利。"
        },
        {
          "yao": "上六",
          "text": "鸣谦，利用行师，征邑国",
          "interpret": "鸣其谦德，利于出师征邑国。"
        }
      ],
      "tuanCi": "谦亨，天道下济而光明，地道卑而上行。天道亏盈而益谦，地道变盈而流谦，鬼神害盈而福谦，人道恶盈而好谦。谦尊而光，卑而不可逾，君子之终也。",
      "affairs": "宜谦虚退让，裒多益寡，不宜骄满",
      "career": "利于谦逊行事，终有善果，大吉",
      "marriage": "宜谦和相待，终成眷属",
      "health": "宜平和心态，不骄不躁",
      "cultivation": "裒多益寡，称物平施，谦尊而光"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阳",
      "阴",
      "阴",
      "阴"
    ],
    "symbol": "☷☶"
  },
  {
    "id": 16,
    "name": "豫",
    "fullName": "雷地豫",
    "upperGua": "震",
    "lowerGua": "坤",
    "tianJi": {
      "nature": "雷出地奋",
      "virtue": "欢乐",
      "xiangCi": "雷出地奋，豫，先王以作乐崇德，殷荐之上帝，以配祖考",
      "season": "春分前后，雷出地奋",
      "wuXing": "木土",
      "astro": "雷地之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东北北",
        "houTian": "东西南"
      },
      "geography": "雷出地奋、欢乐之地",
      "heLuoNumber": {
        "xianTian": "4/8",
        "houTian": "3/2"
      },
      "naJia": "上震纳庚，下坤纳乙癸",
      "region": "东方、震动之地",
      "fengShui": "宜动不宜静，宜欢乐"
    },
    "renJi": {
      "guaCi": "豫：利建侯行师",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "鸣豫，凶",
          "interpret": "鸣其欢乐，志穷凶。"
        },
        {
          "yao": "六二",
          "text": "介于石，不终日，贞吉",
          "interpret": "坚如石，不终日即悟，守正吉。"
        },
        {
          "yao": "六三",
          "text": "盱豫悔，迟有悔",
          "interpret": "张目上视而乐悔，迟亦有悔。"
        },
        {
          "yao": "九四",
          "text": "由豫，大有得。勿疑，朋盍簪",
          "interpret": "由此而豫，大有得。勿疑，朋友聚合。"
        },
        {
          "yao": "六五",
          "text": "贞疾，恒不死",
          "interpret": "守正防疾，恒久不死。"
        },
        {
          "yao": "上六",
          "text": "冥豫，成有渝，无咎",
          "interpret": "昏冥之豫，事成而变，无咎。"
        }
      ],
      "tuanCi": "豫，刚应而志行，顺以动，豫。豫顺以动，故天地如之，而况建侯行师乎？天地以顺动，故日月不过，而四时不忒。圣人以顺动，则刑罚清而民服。豫之时义大矣哉！",
      "affairs": "宜顺时而动，作乐崇德，不宜纵乐",
      "career": "利于顺势而为，建立功业，大吉",
      "marriage": "宜欢乐和合，防纵乐生患",
      "health": "注意肝、脾，宜劳逸结合",
      "cultivation": "作乐崇德，顺以动，介于石"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阴",
      "阳",
      "阴",
      "阴"
    ],
    "symbol": "☳☷"
  },
  {
    "id": 17,
    "name": "随",
    "fullName": "泽雷随",
    "upperGua": "兑",
    "lowerGua": "震",
    "tianJi": {
      "nature": "泽中有雷",
      "virtue": "随从",
      "xiangCi": "泽中有雷，随，君子以向晦入宴息",
      "season": "春末夏初，雷藏泽中",
      "wuXing": "金木",
      "astro": "泽雷之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东南东北",
        "houTian": "西东"
      },
      "geography": "泽中有雷、随顺之地",
      "heLuoNumber": {
        "xianTian": "2/4",
        "houTian": "7/3"
      },
      "naJia": "上兑纳丁，下震纳庚",
      "region": "东方、泽润之地",
      "fengShui": "宜随顺时势，宜适时休息"
    },
    "renJi": {
      "guaCi": "随：元亨利贞，无咎",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "官有渝，贞吉。出门交有功",
          "interpret": "职务有变，守正吉。出门交有功。"
        },
        {
          "yao": "六二",
          "text": "系小子，失丈夫",
          "interpret": "系于小子，失丈夫。"
        },
        {
          "yao": "六三",
          "text": "系丈夫，失小子。随有求得，利居贞",
          "interpret": "系于丈夫，失小子。随有求得，宜守正。"
        },
        {
          "yao": "九四",
          "text": "随有获，贞凶。有孚在道，以明何咎",
          "interpret": "随而有获，守正防凶。诚信在道，何咎之有。"
        },
        {
          "yao": "九五",
          "text": "孚于嘉，吉",
          "interpret": "诚信于善，吉。"
        },
        {
          "yao": "上六",
          "text": "拘系之，乃从维之。王用亨于西山",
          "interpret": "拘系之，从而维之。王亨于西山。"
        }
      ],
      "tuanCi": "随，刚来而下柔，动而说，随。大亨贞，无咎，而天下随时。随时之义大矣哉！",
      "affairs": "宜随顺时势，择善而从，不宜固执",
      "career": "利于顺应变化，随遇而安，吉",
      "marriage": "宜随和相从，防所托非人",
      "health": "注意肝、肺，宜适时作息",
      "cultivation": "向晦入宴息，随时而动，择善而从"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阴",
      "阳",
      "阳",
      "阴"
    ],
    "symbol": "☱☳"
  },
  {
    "id": 18,
    "name": "蛊",
    "fullName": "山风蛊",
    "upperGua": "艮",
    "lowerGua": "巽",
    "tianJi": {
      "nature": "山下有风",
      "virtue": "整治",
      "xiangCi": "山下有风，蛊，君子以振民育德",
      "season": "秋末冬初，风行山下",
      "wuXing": "土木",
      "astro": "山风之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西北西南",
        "houTian": "东北东南"
      },
      "geography": "山下有风、整治之地",
      "heLuoNumber": {
        "xianTian": "7/5",
        "houTian": "8/4"
      },
      "naJia": "上艮纳丙，下巽纳辛",
      "region": "东北方、山风之地",
      "fengShui": "宜整治积弊，宜振作"
    },
    "renJi": {
      "guaCi": "蛊：元亨，利涉大川。先甲三日，后甲三日",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "干父之蛊，有子，考无咎，厉终吉",
          "interpret": "整治父之积弊，有子如此，父无咎，虽危终吉。"
        },
        {
          "yao": "九二",
          "text": "干母之蛊，不可贞",
          "interpret": "整治母之积弊，不可过正。"
        },
        {
          "yao": "九三",
          "text": "干父之蛊，小有悔，无大咎",
          "interpret": "整治父之积弊，小有悔，无大咎。"
        },
        {
          "yao": "六四",
          "text": "裕父之蛊，往见吝",
          "interpret": "宽缓父之积弊，往则有吝。"
        },
        {
          "yao": "六五",
          "text": "干父之蛊，用誉",
          "interpret": "整治父之积弊，用誉美。"
        },
        {
          "yao": "上九",
          "text": "不事王侯，高尚其事",
          "interpret": "不事王侯，高尚其志。"
        }
      ],
      "tuanCi": "蛊，刚上而柔下，巽而止，蛊。蛊元亨，而天下治也。利涉大川，往有事也。先甲三日，后甲三日，终则有始，天行也。",
      "affairs": "宜整治积弊，振民育德，不宜因循",
      "career": "利于革故鼎新，整顿改革，吉",
      "marriage": "宜整治关系，防积弊成患",
      "health": "注意肝、脾，宜排毒调理",
      "cultivation": "振民育德，先甲后甲，终则有始"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阳",
      "阴",
      "阴",
      "阳"
    ],
    "symbol": "☶☴"
  },
  {
    "id": 19,
    "name": "临",
    "fullName": "地泽临",
    "upperGua": "坤",
    "lowerGua": "兑",
    "tianJi": {
      "nature": "泽上有地",
      "virtue": "临近",
      "xiangCi": "泽上有地，临，君子以教思无穷，容保民无疆",
      "season": "冬至前后，阳长阴消",
      "wuXing": "土金",
      "astro": "地泽之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "北东南",
        "houTian": "西南西"
      },
      "geography": "泽上有地、临近之地",
      "heLuoNumber": {
        "xianTian": "8/2",
        "houTian": "2/7"
      },
      "naJia": "上坤纳乙癸，下兑纳丁",
      "region": "西方、泽畔之地",
      "fengShui": "宜居高临下，宜包容"
    },
    "renJi": {
      "guaCi": "临：元，亨，利，贞。至于八月有凶",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "咸临，贞吉",
          "interpret": "以感临人，守正吉。"
        },
        {
          "yao": "九二",
          "text": "咸临，吉无不利",
          "interpret": "以感临人，吉无不利。"
        },
        {
          "yao": "六三",
          "text": "甘临，无攸利。既忧之，无咎",
          "interpret": "以甜言临人，无所利。忧之则无咎。"
        },
        {
          "yao": "六四",
          "text": "至临，无咎",
          "interpret": "以至诚临人，无咎。"
        },
        {
          "yao": "六五",
          "text": "知临，大君之宜，吉",
          "interpret": "以智临人，大君之宜，吉。"
        },
        {
          "yao": "上六",
          "text": "敦临，吉无咎",
          "interpret": "以敦厚临人，吉无咎。"
        }
      ],
      "tuanCi": "临，刚浸而长，说而顺，刚中而应。大亨以正，天之道也。至于八月有凶，消不久也。",
      "affairs": "宜居高临下，教思容保，不宜懈怠",
      "career": "利于积极进取，阳长阴消，吉",
      "marriage": "宜主动追求，以诚相待",
      "health": "阳气渐长，宜顺势调养",
      "cultivation": "教思无穷，容保民无疆，知临敦临"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阴",
      "阴",
      "阴",
      "阴"
    ],
    "symbol": "☷☱"
  },
  {
    "id": 20,
    "name": "观",
    "fullName": "风地观",
    "upperGua": "巽",
    "lowerGua": "坤",
    "tianJi": {
      "nature": "风行地上",
      "virtue": "观察",
      "xiangCi": "风行地上，观，先王以省方观民设教",
      "season": "秋分前后，风行地上",
      "wuXing": "木土",
      "astro": "风地之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西南北",
        "houTian": "东南西南"
      },
      "geography": "风行地上、观察之地",
      "heLuoNumber": {
        "xianTian": "5/8",
        "houTian": "4/2"
      },
      "naJia": "上巽纳辛，下坤纳乙癸",
      "region": "东南方、风行之地",
      "fengShui": "宜观察体悟，宜设教"
    },
    "renJi": {
      "guaCi": "观：盥而不荐，有孚颙若",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "童观，小人无咎，君子吝",
          "interpret": "童稚之观，小人无咎，君子有吝。"
        },
        {
          "yao": "六二",
          "text": "窥观，利女贞",
          "interpret": "窥门缝而观，利女守正。"
        },
        {
          "yao": "六三",
          "text": "观我生，进退",
          "interpret": "观我之生平，以决进退。"
        },
        {
          "yao": "六四",
          "text": "观国之光，利用宾于王",
          "interpret": "观国之光，利于为王朝宾。"
        },
        {
          "yao": "九五",
          "text": "观我生，君子无咎",
          "interpret": "观我之生平，君子无咎。"
        },
        {
          "yao": "上九",
          "text": "观其生，君子无咎",
          "interpret": "观其人之生平，君子无咎。"
        }
      ],
      "tuanCi": "大观在上，顺而巽，中正以观天下。观盥而不荐，有孚颙若，下观而化也。观天之神道，而四时不忒，圣人以神道设教，而天下服矣。",
      "affairs": "宜观察体悟，省方设教，不宜浅薄",
      "career": "利于审时度势，观摩学习，吉",
      "marriage": "宜相互观察，深入了解",
      "health": "注意肝、脾，宜静观内省",
      "cultivation": "省方观民，设教化民，观我观人"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阴",
      "阴",
      "阳",
      "阳"
    ],
    "symbol": "☴☷"
  },
  {
    "id": 21,
    "name": "噬嗑",
    "fullName": "火雷噬嗑",
    "upperGua": "离",
    "lowerGua": "震",
    "tianJi": {
      "nature": "雷电噬嗑",
      "virtue": "咬合",
      "xiangCi": "雷电噬嗑，先王以明罚敕法",
      "season": "惊蛰前后，雷电交加",
      "wuXing": "火木",
      "astro": "雷电之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东东北",
        "houTian": "南东"
      },
      "geography": "雷电交加、明断之地",
      "heLuoNumber": {
        "xianTian": "3/4",
        "houTian": "9/3"
      },
      "naJia": "上离纳己，下震纳庚",
      "region": "东方、雷电之地",
      "fengShui": "宜明断是非，宜刑罚"
    },
    "renJi": {
      "guaCi": "噬嗑：亨，利用狱",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "屦校灭趾，无咎",
          "interpret": "脚戴刑具伤趾，小惩大诫无咎。"
        },
        {
          "yao": "六二",
          "text": "噬肤灭鼻，无咎",
          "interpret": "咬皮肤伤鼻，刑罚得当无咎。"
        },
        {
          "yao": "六三",
          "text": "噬腊肉，遇毒，小吝无咎",
          "interpret": "咬腊肉遇毒，小吝无咎。"
        },
        {
          "yao": "九四",
          "text": "噬干胏，得金矢，利艰贞吉",
          "interpret": "咬干肉得金箭，利于艰守正吉。"
        },
        {
          "yao": "六五",
          "text": "噬干肉，得黄金，贞厉无咎",
          "interpret": "咬干肉得黄金，守正防危无咎。"
        },
        {
          "yao": "上九",
          "text": "何校灭耳，凶",
          "interpret": "肩扛刑具伤耳，凶。"
        }
      ],
      "tuanCi": "颐中有物，曰噬嗑。噬嗑而亨。刚柔分，动而明，雷电合而章。柔得中而上行，虽不当位，利用狱也。",
      "affairs": "宜明断是非，刑罚得当，不宜姑息",
      "career": "利于决断难题，排除障碍，吉",
      "marriage": "宜明辨是非，防口舌争端",
      "health": "注意心、肝，宜清火解毒",
      "cultivation": "明罚敕法，小惩大诫，刚柔并济"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阴",
      "阳",
      "阴",
      "阳"
    ],
    "symbol": "☲☳"
  },
  {
    "id": 22,
    "name": "贲",
    "fullName": "山火贲",
    "upperGua": "艮",
    "lowerGua": "离",
    "tianJi": {
      "nature": "山下有火",
      "virtue": "文饰",
      "xiangCi": "山下有火，贲，君子以明庶政，无敢折狱",
      "season": "秋分前后，火照山下",
      "wuXing": "土火",
      "astro": "山火之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西北东",
        "houTian": "东北南"
      },
      "geography": "山下有火、文饰之地",
      "heLuoNumber": {
        "xianTian": "7/3",
        "houTian": "8/9"
      },
      "naJia": "上艮纳丙，下离纳己",
      "region": "东北方、山火之地",
      "fengShui": "宜文饰修饰，宜明政"
    },
    "renJi": {
      "guaCi": "贲：亨，小利有攸往",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "贲其趾，舍车而徒",
          "interpret": "文饰脚趾，舍车步行。"
        },
        {
          "yao": "六二",
          "text": "贲其须",
          "interpret": "文饰胡须，随从上行。"
        },
        {
          "yao": "九三",
          "text": "贲如濡如，永贞吉",
          "interpret": "文饰润泽，永守正吉。"
        },
        {
          "yao": "六四",
          "text": "贲如皤如，白马翰如，匪寇婚媾",
          "interpret": "文饰素白，白马如飞，非寇乃婚。"
        },
        {
          "yao": "六五",
          "text": "贲于丘园，束帛戋戋，吝，终吉",
          "interpret": "文饰丘园，束帛微薄，有吝终吉。"
        },
        {
          "yao": "上九",
          "text": "白贲，无咎",
          "interpret": "素白无饰，无咎。"
        }
      ],
      "tuanCi": "贲亨，柔来而文刚，故亨。分刚上而文柔，故小利有攸往。天文也；文明以止，人文也。观乎天文，以察时变；观乎人文，以化成天下。",
      "affairs": "宜文质彬彬，明政无敢折狱，不宜华而不实",
      "career": "利于修饰包装，小有所成，吉",
      "marriage": "宜注重仪表，终成眷属",
      "health": "注意心、脾，宜清淡饮食",
      "cultivation": "明庶政，无敢折狱，白贲无咎"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阳",
      "阴",
      "阴",
      "阳"
    ],
    "symbol": "☶☲"
  },
  {
    "id": 23,
    "name": "剥",
    "fullName": "山地剥",
    "upperGua": "艮",
    "lowerGua": "坤",
    "tianJi": {
      "nature": "山附于地",
      "virtue": "剥落",
      "xiangCi": "山附于地，剥，上以厚下安宅",
      "season": "霜降前后，阴盛阳衰",
      "wuXing": "土",
      "astro": "山地之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西北北",
        "houTian": "东北西南"
      },
      "geography": "山附于地、剥落之地",
      "heLuoNumber": {
        "xianTian": "7/8",
        "houTian": "8/2"
      },
      "naJia": "上艮纳丙，下坤纳乙癸",
      "region": "东北方、山地",
      "fengShui": "宜厚下安宅，不宜张扬"
    },
    "renJi": {
      "guaCi": "剥：不利有攸往",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "剥床以足，蔑贞凶",
          "interpret": "剥落床足，灭正凶。"
        },
        {
          "yao": "六二",
          "text": "剥床以辨，蔑贞凶",
          "interpret": "剥落床板，灭正凶。"
        },
        {
          "yao": "六三",
          "text": "剥之无咎",
          "interpret": "剥之无咎，失上下也。"
        },
        {
          "yao": "六四",
          "text": "剥床以肤，凶",
          "interpret": "剥落至床面，凶。"
        },
        {
          "yao": "六五",
          "text": "贯鱼，以宫人宠，无不利",
          "interpret": "贯鱼之序，以宫人受宠，无不利。"
        },
        {
          "yao": "上九",
          "text": "硕果不食，君子得舆，小人剥庐",
          "interpret": "硕果不食，君子得车，小人剥庐。"
        }
      ],
      "tuanCi": "剥，剥也，柔变刚也。不利有攸往，小人长也。顺而止之，观象也。君子尚消息盈虚，天行也。",
      "affairs": "宜厚下安宅，隐忍待时，不宜妄动",
      "career": "事业剥落，宜守不宜进，待时转运",
      "marriage": "多有波折，宜厚待对方",
      "health": "正气不足，宜固本培元",
      "cultivation": "厚下安宅，尚消息盈虚，顺而止之"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阴",
      "阴",
      "阴",
      "阳"
    ],
    "symbol": "☶☷"
  },
  {
    "id": 24,
    "name": "复",
    "fullName": "地雷复",
    "upperGua": "坤",
    "lowerGua": "震",
    "tianJi": {
      "nature": "雷在地中",
      "virtue": "复归",
      "xiangCi": "雷在地中，复，先王以至日闭关，商旅不行，后不省方",
      "season": "冬至一阳生",
      "wuXing": "土木",
      "astro": "地雷之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "北东北",
        "houTian": "西南东"
      },
      "geography": "雷在地中、复归之地",
      "heLuoNumber": {
        "xianTian": "8/4",
        "houTian": "2/3"
      },
      "naJia": "上坤纳乙癸，下震纳庚",
      "region": "东方、复生之地",
      "fengShui": "宜静养待复，宜闭关"
    },
    "renJi": {
      "guaCi": "复：亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "不远复，无祗悔，元吉",
          "interpret": "不远即复，无大悔，大吉。"
        },
        {
          "yao": "六二",
          "text": "休复，吉",
          "interpret": "休止而复，吉。"
        },
        {
          "yao": "六三",
          "text": "频复，厉无咎",
          "interpret": "频频复归，虽危无咎。"
        },
        {
          "yao": "六四",
          "text": "中行独复",
          "interpret": "居中独行而复。"
        },
        {
          "yao": "六五",
          "text": "敦复，无悔",
          "interpret": "敦厚而复，无悔。"
        },
        {
          "yao": "上六",
          "text": "迷复，凶，有灾眚。用行师，终有大败，以其国君凶，至于十年不克征",
          "interpret": "迷而不复，凶有灾。行师大败，国君凶，十年不能征。"
        }
      ],
      "tuanCi": "复亨，刚反，动而以顺行，是以出入无疾，朋来无咎。反复其道，七日来复，天行也。利有攸往，刚长也。复，其见天地之心乎？",
      "affairs": "宜静养待复，知错能改，不宜妄动",
      "career": "利于重新开始，一阳来复，吉",
      "marriage": "宜破镜重圆，失而复得",
      "health": "阳气初复，宜静养蓄势",
      "cultivation": "至日闭关，不远复，见天地之心"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阴",
      "阴",
      "阴",
      "阴"
    ],
    "symbol": "☷☳"
  },
  {
    "id": 25,
    "name": "无妄",
    "fullName": "天雷无妄",
    "upperGua": "乾",
    "lowerGua": "震",
    "tianJi": {
      "nature": "天下雷行",
      "virtue": "无妄",
      "xiangCi": "天下雷行，物与无妄，先王以茂对时育万物",
      "season": "惊蛰前后，雷行天下",
      "wuXing": "金木",
      "astro": "天雷之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "南东北",
        "houTian": "西北东"
      },
      "geography": "天下雷行、无妄之地",
      "heLuoNumber": {
        "xianTian": "1/4",
        "houTian": "6/3"
      },
      "naJia": "上乾纳甲壬，下震纳庚",
      "region": "东方、雷行之地",
      "fengShui": "宜顺天应时，不宜妄为"
    },
    "renJi": {
      "guaCi": "无妄：元，亨，利，贞。其匪正有眚，不利有攸往",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "无妄，往吉",
          "interpret": "无妄而行，往吉。"
        },
        {
          "yao": "六二",
          "text": "不耕获，不菑畲，则利有攸往",
          "interpret": "不耕而获，不垦而田，则利有攸往。"
        },
        {
          "yao": "六三",
          "text": "无妄之灾，或系之牛，行人之得，邑人之灾",
          "interpret": "无妄之灾，系牛被行人牵走，邑人遭殃。"
        },
        {
          "yao": "九四",
          "text": "可贞，无咎",
          "interpret": "可以守正，无咎。"
        },
        {
          "yao": "九五",
          "text": "无妄之疾，勿药有喜",
          "interpret": "无妄之疾，不用药自愈有喜。"
        },
        {
          "yao": "上九",
          "text": "无妄，行有眚，无攸利",
          "interpret": "无妄而行有灾，无所利。"
        }
      ],
      "tuanCi": "无妄，刚自外来而为主于内，动而健，刚中而应。大亨以正，天之命也。其匪正有眚，不利有攸往。无妄之往，何之矣？天命不佑，行矣哉？",
      "affairs": "宜顺天应时，不妄为，不宜投机取巧",
      "career": "利于守正而行，自然而然，吉",
      "marriage": "宜真诚相待，不存妄念",
      "health": "无妄之疾自愈，宜顺其自然",
      "cultivation": "茂对时育万物，守正不妄，顺天命"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阴",
      "阳",
      "阳",
      "阳"
    ],
    "symbol": "☰☳"
  },
  {
    "id": 26,
    "name": "大畜",
    "fullName": "山天大畜",
    "upperGua": "艮",
    "lowerGua": "乾",
    "tianJi": {
      "nature": "天在山中",
      "virtue": "大蓄积",
      "xiangCi": "天在山中，大畜，君子以多识前言往行，以畜其德",
      "season": "立冬前后，天藏山中",
      "wuXing": "土金",
      "astro": "山天之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西北南",
        "houTian": "东北西北"
      },
      "geography": "天在山中、大蓄之地",
      "heLuoNumber": {
        "xianTian": "7/1",
        "houTian": "8/6"
      },
      "naJia": "上艮纳丙，下乾纳甲壬",
      "region": "西北方、山高之地",
      "fengShui": "宜大蓄大藏，宜积德"
    },
    "renJi": {
      "guaCi": "大畜：利贞，不家食吉，利涉大川",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "有厉利已",
          "interpret": "有危厉，利于停止。"
        },
        {
          "yao": "九二",
          "text": "舆说輹",
          "interpret": "车脱轴板，不能行。"
        },
        {
          "yao": "九三",
          "text": "良马逐，利艰贞。曰闲舆卫，利有攸往",
          "interpret": "良马追逐，利于艰守正。练习车卫，利有攸往。"
        },
        {
          "yao": "六四",
          "text": "童牛之牿，元吉",
          "interpret": "童牛之栏，大吉。"
        },
        {
          "yao": "六五",
          "text": "豮豕之牙，吉",
          "interpret": "阉豕之牙，吉。"
        },
        {
          "yao": "上九",
          "text": "何天之衢，亨",
          "interpret": "荷天之衢，亨通。"
        }
      ],
      "tuanCi": "大畜，刚健笃实辉光，日新其德，刚上而尚贤。能止健，大正也。不家食吉，养贤也。利涉大川，应乎天也。",
      "affairs": "宜大蓄大藏，多识畜德，不宜急进",
      "career": "利于积累实力，蓄势待发，大吉",
      "marriage": "宜厚积薄发，门第相当",
      "health": "宜蓄养精气，强健体魄",
      "cultivation": "多识前言往行，畜其德，日新其德"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阳",
      "阴",
      "阴",
      "阳"
    ],
    "symbol": "☶☰"
  },
  {
    "id": 27,
    "name": "颐",
    "fullName": "山雷颐",
    "upperGua": "艮",
    "lowerGua": "震",
    "tianJi": {
      "nature": "山下有雷",
      "virtue": "养颐",
      "xiangCi": "山下有雷，颐，君子以慎言语，节饮食",
      "season": "立春前后，雷动山下",
      "wuXing": "土木",
      "astro": "山雷之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西北东北",
        "houTian": "东北东"
      },
      "geography": "山下有雷、养颐之地",
      "heLuoNumber": {
        "xianTian": "7/4",
        "houTian": "8/3"
      },
      "naJia": "上艮纳丙，下震纳庚",
      "region": "东北方、山地",
      "fengShui": "宜养颐调理，宜慎言节食"
    },
    "renJi": {
      "guaCi": "颐：贞吉。观颐，自求口实",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "舍尔灵龟，观我朵颐，凶",
          "interpret": "舍灵龟不养，观我嚼食，凶。"
        },
        {
          "yao": "六二",
          "text": "颠颐，拂经于丘颐，征凶",
          "interpret": "颠倒养道，违常求养于丘，征凶。"
        },
        {
          "yao": "六三",
          "text": "拂颐，贞凶，十年勿用，无攸利",
          "interpret": "违养道，守正凶，十年不用，无所利。"
        },
        {
          "yao": "六四",
          "text": "颠颐吉。虎视眈眈，其欲逐逐，无咎",
          "interpret": "颠倒养道吉。虎视眈眈，欲望逐逐，无咎。"
        },
        {
          "yao": "六五",
          "text": "拂经，居贞吉，不可涉大川",
          "interpret": "违常，居守正吉，不可涉大川。"
        },
        {
          "yao": "上九",
          "text": "由颐，厉吉，利涉大川",
          "interpret": "由之以养，虽危吉，利涉大川。"
        }
      ],
      "tuanCi": "颐，贞吉，养正则吉也。观颐，观其所养也；自求口实，观其自养也。天地养万物，圣人养贤以及万民。颐之时大矣哉！",
      "affairs": "宜慎言节食，养正养德，不宜贪求",
      "career": "利于修养内功，蓄养人才，吉",
      "marriage": "宜以养为本，相互滋养",
      "health": "注意脾胃、饮食，宜节制",
      "cultivation": "慎言语，节饮食，养正养德"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阴",
      "阴",
      "阴",
      "阳"
    ],
    "symbol": "☶☳"
  },
  {
    "id": 28,
    "name": "大过",
    "fullName": "泽风大过",
    "upperGua": "兑",
    "lowerGua": "巽",
    "tianJi": {
      "nature": "泽灭木",
      "virtue": "大过",
      "xiangCi": "泽灭木，大过，君子以独立不惧，遁世无闷",
      "season": "夏至前后，阳气过盛",
      "wuXing": "金木",
      "astro": "泽风之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东南西南",
        "houTian": "西东南"
      },
      "geography": "泽灭木、大过之地",
      "heLuoNumber": {
        "xianTian": "2/5",
        "houTian": "7/4"
      },
      "naJia": "上兑纳丁，下巽纳辛",
      "region": "西方、泽畔之地",
      "fengShui": "宜独立不惧，宜非常之举"
    },
    "renJi": {
      "guaCi": "大过：栋桡，利有攸往，亨",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "藉用白茅，无咎",
          "interpret": "用白茅垫祭品，谨慎无咎。"
        },
        {
          "yao": "九二",
          "text": "枯杨生稊，老夫得其女妻，无不利",
          "interpret": "枯杨生新芽，老夫得少妻，无不利。"
        },
        {
          "yao": "九三",
          "text": "栋桡，凶",
          "interpret": "栋梁弯曲，凶。"
        },
        {
          "yao": "九四",
          "text": "栋隆，吉，有它吝",
          "interpret": "栋梁隆起，吉，有他吝。"
        },
        {
          "yao": "九五",
          "text": "枯杨生华，老妇得其士夫，无咎无誉",
          "interpret": "枯杨开花，老妇得少夫，无咎无誉。"
        },
        {
          "yao": "上六",
          "text": "过涉灭顶，凶，无咎",
          "interpret": "涉水灭顶，凶，无咎。"
        }
      ],
      "tuanCi": "大过，大者过也。栋桡，本末弱也。刚过而中，巽而说行，利有攸往，乃亨。大过之时大矣哉！",
      "affairs": "宜独立不惧，非常之举，不宜常规行事",
      "career": "事业过载，宜量力而行，防折断",
      "marriage": "多有非常之配，宜慎重",
      "health": "阳气过亢，宜调和阴阳",
      "cultivation": "独立不惧，遁世无闷，本末兼顾"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阳",
      "阳",
      "阳",
      "阴"
    ],
    "symbol": "☱☴"
  },
  {
    "id": 29,
    "name": "坎",
    "fullName": "坎为水",
    "upperGua": "坎",
    "lowerGua": "坎",
    "tianJi": {
      "nature": "水洊至",
      "virtue": "险陷",
      "xiangCi": "水洊至，习坎，君子以常德行，习教事",
      "season": "冬至前后，水寒至极",
      "wuXing": "水",
      "astro": "北方玄武"
    },
    "diJi": {
      "direction": {
        "xianTian": "西",
        "houTian": "北"
      },
      "geography": "重险之地、沟壑深渊",
      "heLuoNumber": {
        "xianTian": 6,
        "houTian": 1
      },
      "naJia": "坎纳戊",
      "region": "北方、水险之地",
      "fengShui": "宜防险避险，宜常德"
    },
    "renJi": {
      "guaCi": "习坎：有孚，维心亨，行有尚",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "习坎，入于坎窞，凶",
          "interpret": "重险入于坎穴，凶。"
        },
        {
          "yao": "九二",
          "text": "坎有险，求小得",
          "interpret": "坎中有险，求小得。"
        },
        {
          "yao": "六三",
          "text": "来之坎坎，险且枕，入于坎窞，勿用",
          "interpret": "来往皆险，险且深，入坎穴，勿用。"
        },
        {
          "yao": "六四",
          "text": "樽酒簋贰，用缶，纳约自牖，终无咎",
          "interpret": "樽酒簋食，用瓦器，纳约自窗，终无咎。"
        },
        {
          "yao": "九五",
          "text": "坎不盈，祗既平，无咎",
          "interpret": "坎不盈满，将至平，无咎。"
        },
        {
          "yao": "上六",
          "text": "系用徽纆，寘于丛棘，三岁不得，凶",
          "interpret": "系以绳索，置于丛棘，三年不得，凶。"
        }
      ],
      "tuanCi": "习坎，重险也。水流而不盈，行险而不失其信。维心亨，乃以刚中也。行有尚，往有功也。天险不可升也，地险山川丘陵也，王公设险以守其国，险之时用大矣哉！",
      "affairs": "宜防险避险，诚信脱险，不宜冒险",
      "career": "事业多险，宜谨慎行事，终能脱险",
      "marriage": "多有波折险阻，宜以诚相待",
      "health": "注意肾、泌尿系统，宜防寒湿",
      "cultivation": "常德行，习教事，行险不失信"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阴",
      "阴",
      "阳",
      "阴"
    ],
    "symbol": "☵☵"
  },
  {
    "id": 30,
    "name": "离",
    "fullName": "离为火",
    "upperGua": "离",
    "lowerGua": "离",
    "tianJi": {
      "nature": "明两作",
      "virtue": "附丽",
      "xiangCi": "明两作，离，大人以继明照于四方",
      "season": "夏至前后，火气至盛",
      "wuXing": "火",
      "astro": "南方朱雀"
    },
    "diJi": {
      "direction": {
        "xianTian": "东",
        "houTian": "南"
      },
      "geography": "光明之地、火热之所",
      "heLuoNumber": {
        "xianTian": 3,
        "houTian": 9
      },
      "naJia": "离纳己",
      "region": "南方、光明之地",
      "fengShui": "宜光明正大，宜附丽"
    },
    "renJi": {
      "guaCi": "离：利贞，亨。畜牝牛吉",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "履错然，敬之无咎",
          "interpret": "步履错杂，敬慎无咎。"
        },
        {
          "yao": "六二",
          "text": "黄离，元吉",
          "interpret": "黄色附丽，大吉。"
        },
        {
          "yao": "九三",
          "text": "日昃之离，不鼓缶而歌，则大耋之嗟，凶",
          "interpret": "日斜之离，不鼓缶唱歌，则老者嗟叹，凶。"
        },
        {
          "yao": "九四",
          "text": "突如其来如，焚如，死如，弃如",
          "interpret": "突如其来，焚烧、死亡、弃绝。"
        },
        {
          "yao": "六五",
          "text": "出涕沱若，戚嗟若，吉",
          "interpret": "泪流如雨，忧戚嗟叹，吉。"
        },
        {
          "yao": "上九",
          "text": "王用出征，有嘉折首，获匪其丑，无咎",
          "interpret": "王出征，嘉奖斩首，获非其类，无咎。"
        }
      ],
      "tuanCi": "离，丽也；日月丽乎天，百谷草木丽乎土，重明以丽乎正，乃化成天下。柔丽乎中正，故亨；是以畜牝牛吉也。",
      "affairs": "宜光明正大，附丽正道，不宜暴烈",
      "career": "利于事业光明，大有成就，吉",
      "marriage": "宜热情相待，光明正大",
      "health": "注意心、眼，宜清心降火",
      "cultivation": "继明照于四方，柔丽中正，化成天下"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阳",
      "阳",
      "阴",
      "阳"
    ],
    "symbol": "☲☲"
  },
  {
    "id": 31,
    "name": "咸",
    "fullName": "泽山咸",
    "upperGua": "兑",
    "lowerGua": "艮",
    "tianJi": {
      "nature": "山上有泽",
      "virtue": "感应",
      "xiangCi": "山上有泽，咸，君子以虚受人",
      "season": "夏末秋初，阴阳交感",
      "wuXing": "金土",
      "astro": "泽山之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东南西北",
        "houTian": "西东北"
      },
      "geography": "山上有泽、感应之地",
      "heLuoNumber": {
        "xianTian": "2/7",
        "houTian": "7/8"
      },
      "naJia": "上兑纳丁，下艮纳丙",
      "region": "西方、山泽之地",
      "fengShui": "宜虚心受感，宜阴阳交合"
    },
    "renJi": {
      "guaCi": "咸：亨，利贞，取女吉",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "咸其拇",
          "interpret": "感应于脚拇趾，初始之动。"
        },
        {
          "yao": "六二",
          "text": "咸其腓，凶，居吉",
          "interpret": "感应于小腿，凶，安居则吉。"
        },
        {
          "yao": "九三",
          "text": "咸其股，执其随，往吝",
          "interpret": "感应于大腿，执意随人，往有吝。"
        },
        {
          "yao": "九四",
          "text": "贞吉悔亡，憧憧往来，朋从尔思",
          "interpret": "守正吉无悔，往来不绝，朋友从你所思。"
        },
        {
          "yao": "九五",
          "text": "咸其脢，无悔",
          "interpret": "感应于背脊，无悔。"
        },
        {
          "yao": "上六",
          "text": "咸其辅颊舌",
          "interpret": "感应于口颊舌，多言无益。"
        }
      ],
      "tuanCi": "咸，感也。柔上而刚下，二气感应以相与，止而说，男下女，是以亨利贞，取女吉也。天地感而万物化生，圣人感人心而天下和平。观其所感，而天地万物之情可见矣。",
      "affairs": "宜虚心感应，真诚相待，不宜浮躁",
      "career": "利于人际感应，合作共事，吉",
      "marriage": "大吉之象，男女感应，天作之合",
      "health": "注意口、腿，宜调和阴阳",
      "cultivation": "虚受人，二气感应，感人心而天下和平"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阳",
      "阳",
      "阳",
      "阴"
    ],
    "symbol": "☱☶"
  },
  {
    "id": 32,
    "name": "恒",
    "fullName": "雷风恒",
    "upperGua": "震",
    "lowerGua": "巽",
    "tianJi": {
      "nature": "雷风相与",
      "virtue": "恒久",
      "xiangCi": "雷风，恒，君子以立不易方",
      "season": "春分前后，雷风相薄",
      "wuXing": "木",
      "astro": "雷风之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东北西南",
        "houTian": "东东南"
      },
      "geography": "雷风相与、恒久之地",
      "heLuoNumber": {
        "xianTian": "4/5",
        "houTian": "3/4"
      },
      "naJia": "上震纳庚，下巽纳辛",
      "region": "东方、风雷之地",
      "fengShui": "宜恒久守正，宜立不易方"
    },
    "renJi": {
      "guaCi": "恒：亨，无咎，利贞，利有攸往",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "浚恒，贞凶，无攸利",
          "interpret": "深求恒久，守正凶，无所利。"
        },
        {
          "yao": "九二",
          "text": "悔亡",
          "interpret": "悔恨消失。"
        },
        {
          "yao": "九三",
          "text": "不恒其德，或承之羞，贞吝",
          "interpret": "不能恒守其德，或受羞辱，守正有吝。"
        },
        {
          "yao": "九四",
          "text": "田无禽",
          "interpret": "田猎无获。"
        },
        {
          "yao": "六五",
          "text": "恒其德贞，妇人吉，夫子凶",
          "interpret": "恒守其德，妇人吉，夫子凶。"
        },
        {
          "yao": "上六",
          "text": "振恒，凶",
          "interpret": "振动求恒，凶。"
        }
      ],
      "tuanCi": "恒，久也。刚上而柔下，雷风相与，巽而动，刚柔皆应，恒。恒亨无咎，利贞，久于其道也。天地之道，恒久而不已也。利有攸往，终则有始也。日月得天，而能久照；四时变化，而能久成；圣人久于其道，而天下化成。观其所恒，而天地万物之情可见矣！",
      "affairs": "宜恒久守正，立不易方，不宜朝三暮四",
      "career": "利于持之以恒，久久为功，吉",
      "marriage": "宜白头偕老，恒久不变",
      "health": "宜持之以恒，规律养生",
      "cultivation": "立不易方，恒其德，久于其道"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阳",
      "阳",
      "阴",
      "阴"
    ],
    "symbol": "☳☴"
  },
  {
    "id": 33,
    "name": "遁",
    "fullName": "天山遁",
    "upperGua": "乾",
    "lowerGua": "艮",
    "tianJi": {
      "nature": "天下有山",
      "virtue": "退避",
      "xiangCi": "天下有山，遁，君子以远小人，不恶而严",
      "season": "大暑前后，阳消阴长",
      "wuXing": "金土",
      "astro": "天山之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "南西北",
        "houTian": "西北东北"
      },
      "geography": "天下有山、退避之地",
      "heLuoNumber": {
        "xianTian": "1/7",
        "houTian": "6/8"
      },
      "naJia": "上乾纳甲壬，下艮纳丙",
      "region": "西北方、高山之地",
      "fengShui": "宜退避隐遁，宜远离小人"
    },
    "renJi": {
      "guaCi": "遁：亨，小利贞",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "遁尾，厉，勿用有攸往",
          "interpret": "遁退在后，危厉，不宜前往。"
        },
        {
          "yao": "六二",
          "text": "执之用黄牛之革，莫之胜说",
          "interpret": "用黄牛皮绳执系，不能解脱。"
        },
        {
          "yao": "九三",
          "text": "系遁，有疾厉，畜臣妾吉",
          "interpret": "系恋而遁，有疾厉，畜养臣妾吉。"
        },
        {
          "yao": "九四",
          "text": "好遁，君子吉，小人否",
          "interpret": "喜好遁退，君子吉，小人不能。"
        },
        {
          "yao": "九五",
          "text": "嘉遁，贞吉",
          "interpret": "嘉美遁退，守正吉。"
        },
        {
          "yao": "上九",
          "text": "肥遁，无不利",
          "interpret": "从容遁退，无不利。"
        }
      ],
      "tuanCi": "遁亨，遁而亨也。刚当位而应，与时行也。小利贞，浸而长也。遁之时义大矣哉！",
      "affairs": "宜适时退避，远小人，不宜恋栈",
      "career": "利于急流勇退，明哲保身，吉",
      "marriage": "宜暂缓，不宜强求",
      "health": "宜退养休息，远离纷扰",
      "cultivation": "远小人，不恶而严，嘉遁肥遁"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阳",
      "阳",
      "阳",
      "阳"
    ],
    "symbol": "☰☶"
  },
  {
    "id": 34,
    "name": "大壮",
    "fullName": "雷天大壮",
    "upperGua": "震",
    "lowerGua": "乾",
    "tianJi": {
      "nature": "雷在天上",
      "virtue": "大壮",
      "xiangCi": "雷在天上，大壮，君子以非礼弗履",
      "season": "春分前后，雷震天上",
      "wuXing": "木金",
      "astro": "雷天之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东北南",
        "houTian": "东西北"
      },
      "geography": "雷在天上、壮盛之地",
      "heLuoNumber": {
        "xianTian": "4/1",
        "houTian": "3/6"
      },
      "naJia": "上震纳庚，下乾纳甲壬",
      "region": "东方、高亢之地",
      "fengShui": "宜壮盛守礼，宜非礼弗履"
    },
    "renJi": {
      "guaCi": "大壮：利贞",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "壮于趾，征凶，有孚",
          "interpret": "壮于脚趾，出征凶，有孚信。"
        },
        {
          "yao": "九二",
          "text": "贞吉",
          "interpret": "守正吉。"
        },
        {
          "yao": "九三",
          "text": "小人用壮，君子用罔，贞厉。羝羊触藩，羸其角",
          "interpret": "小人用壮，君子用网，守正防危。公羊触藩，角被缠。"
        },
        {
          "yao": "九四",
          "text": "贞吉悔亡，藩决不羸，壮于大舆之輹",
          "interpret": "守正吉无悔，藩篱决开不缠，壮于大车之轴。"
        },
        {
          "yao": "六五",
          "text": "丧羊于易，无悔",
          "interpret": "丧羊于边邑，无悔。"
        },
        {
          "yao": "上六",
          "text": "羝羊触藩，不能退，不能遂，无攸利，艰则吉",
          "interpret": "公羊触藩，不能退不能进，无所利，艰守则吉。"
        }
      ],
      "tuanCi": "大壮，大者壮也。刚以动，故壮。大壮利贞，大者正也。正大而天地之情可见矣！",
      "affairs": "宜壮盛守礼，非礼弗履，不宜逞强",
      "career": "利于事业壮盛，但须守正，吉",
      "marriage": "宜以礼相待，防强求生患",
      "health": "气血壮盛，宜节制保精",
      "cultivation": "非礼弗履，正大光明，用罔不用壮"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阳",
      "阳",
      "阴",
      "阴"
    ],
    "symbol": "☳☰"
  },
  {
    "id": 35,
    "name": "晋",
    "fullName": "火地晋",
    "upperGua": "离",
    "lowerGua": "坤",
    "tianJi": {
      "nature": "明出地上",
      "virtue": "晋升",
      "xiangCi": "明出地上，晋，君子以自昭明德",
      "season": "清明前后，日出地上",
      "wuXing": "火土",
      "astro": "火地之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东北",
        "houTian": "南西南"
      },
      "geography": "明出地上、晋升之地",
      "heLuoNumber": {
        "xianTian": "3/8",
        "houTian": "9/2"
      },
      "naJia": "上离纳己，下坤纳乙癸",
      "region": "南方、光明之地",
      "fengShui": "宜晋升光明，宜自昭明德"
    },
    "renJi": {
      "guaCi": "晋：康侯用锡马蕃庶，昼日三接",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "晋如摧如，贞吉。罔孚，裕无咎",
          "interpret": "进而被摧，守正吉。未得信，宽裕无咎。"
        },
        {
          "yao": "六二",
          "text": "晋如愁如，贞吉。受兹介福，于其王母",
          "interpret": "进而忧愁，守正吉。受大福于王母。"
        },
        {
          "yao": "六三",
          "text": "众允，悔亡",
          "interpret": "众人允许，悔亡。"
        },
        {
          "yao": "九四",
          "text": "晋如鼫鼠，贞厉",
          "interpret": "进如鼫鼠贪而怯，守正防危。"
        },
        {
          "yao": "六五",
          "text": "悔亡，失得勿恤，往吉无不利",
          "interpret": "悔亡，得失不忧，往吉无不利。"
        },
        {
          "yao": "上九",
          "text": "晋其角，维用伐邑，厉吉无咎，贞吝",
          "interpret": "进其角，用于伐邑，危厉吉无咎，守正有吝。"
        }
      ],
      "tuanCi": "晋，进也。明出地上，顺而丽乎大明，柔进而上行，是以康侯用锡马蕃庶，昼日三接也。",
      "affairs": "宜晋升光明，自昭明德，不宜贪进",
      "career": "利于事业晋升，光明磊落，大吉",
      "marriage": "宜光明正大，终成眷属",
      "health": "阳气上升，宜积极调养",
      "cultivation": "自昭明德，柔进上行，顺而丽乎大明"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阴",
      "阳",
      "阴",
      "阳"
    ],
    "symbol": "☲☷"
  },
  {
    "id": 36,
    "name": "明夷",
    "fullName": "地火明夷",
    "upperGua": "坤",
    "lowerGua": "离",
    "tianJi": {
      "nature": "明入地中",
      "virtue": "光明受伤",
      "xiangCi": "明入地中，明夷，君子以莅众，用晦而明",
      "season": "冬至前后，日入地中",
      "wuXing": "土火",
      "astro": "地火之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "北东",
        "houTian": "西南南"
      },
      "geography": "明入地中、晦藏之地",
      "heLuoNumber": {
        "xianTian": "8/3",
        "houTian": "2/9"
      },
      "naJia": "上坤纳乙癸，下离纳己",
      "region": "西南方、晦藏之地",
      "fengShui": "宜用晦而明，宜韬光养晦"
    },
    "renJi": {
      "guaCi": "明夷：利艰贞",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言",
          "interpret": "明夷飞翔垂翼。君子出行三日不食，有所往，主人有言。"
        },
        {
          "yao": "六二",
          "text": "明夷，夷于左股，用拯马壮，吉",
          "interpret": "明夷伤左股，用壮马拯救，吉。"
        },
        {
          "yao": "九三",
          "text": "明夷于南狩，得其大首，不可疾贞",
          "interpret": "明夷南狩，得大首，不可急守正。"
        },
        {
          "yao": "六四",
          "text": "入于左腹，获明夷之心，于出门庭",
          "interpret": "入于左腹，获明夷之心，出门庭。"
        },
        {
          "yao": "六五",
          "text": "箕子之明夷，利贞",
          "interpret": "箕子之明夷，利于守正。"
        },
        {
          "yao": "上六",
          "text": "不明晦，初登于天，后入于地",
          "interpret": "不明而晦，初登于天，后入于地。"
        }
      ],
      "tuanCi": "明入地中，明夷。内文明而外柔顺，以蒙大难，文王以之。利艰贞，晦其明也，内难而能正其志，箕子以之。",
      "affairs": "宜韬光养晦，用晦而明，不宜张扬",
      "career": "事业受阻，宜隐忍待时，守正脱困",
      "marriage": "多有隐忧，宜相互包容",
      "health": "正气受伤，宜静养恢复",
      "cultivation": "用晦而明，内文明外柔顺，正其志"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阳",
      "阴",
      "阴",
      "阴"
    ],
    "symbol": "☷☲"
  },
  {
    "id": 37,
    "name": "家人",
    "fullName": "风火家人",
    "upperGua": "巽",
    "lowerGua": "离",
    "tianJi": {
      "nature": "风自火出",
      "virtue": "家人",
      "xiangCi": "风自火出，家人，君子以言有物而行有恒",
      "season": "小满前后，风火相生",
      "wuXing": "木火",
      "astro": "风火之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西南东",
        "houTian": "东南南"
      },
      "geography": "风自火出、家人之地",
      "heLuoNumber": {
        "xianTian": "5/3",
        "houTian": "4/9"
      },
      "naJia": "上巽纳辛，下离纳己",
      "region": "东南方、家风之地",
      "fengShui": "宜治家有道，宜言有物行有恒"
    },
    "renJi": {
      "guaCi": "家人：利女贞",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "闲有家，悔亡",
          "interpret": "早立家规防患，悔亡。"
        },
        {
          "yao": "六二",
          "text": "无攸遂，在中馈，贞吉",
          "interpret": "无所专断，主中馈，守正吉。"
        },
        {
          "yao": "九三",
          "text": "家人嗃嗃，悔厉吉。妇子嘻嘻，终吝",
          "interpret": "家人嗃嗃严管，悔厉吉。妇子嘻嘻，终吝。"
        },
        {
          "yao": "六四",
          "text": "富家，大吉",
          "interpret": "富家大吉。"
        },
        {
          "yao": "九五",
          "text": "王假有家，勿恤吉",
          "interpret": "王至家，勿忧吉。"
        },
        {
          "yao": "上九",
          "text": "有孚威如，终吉",
          "interpret": "有诚信威严，终吉。"
        }
      ],
      "tuanCi": "家人，女正位乎内，男正位乎外。男女正，天地之大义也。家人有严君焉，父母之谓也。父父，子子，兄兄，弟弟，夫夫，妇妇，而家道正。正家而天下定矣。",
      "affairs": "宜治家有道，各正其位，不宜失序",
      "career": "利于内部团结，各司其职，吉",
      "marriage": "大吉之象，家道正，夫妇和",
      "health": "宜家庭和睦，心情舒畅",
      "cultivation": "言有物而行有恒，正家而天下定"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阳",
      "阴",
      "阳",
      "阳"
    ],
    "symbol": "☴☲"
  },
  {
    "id": 38,
    "name": "睽",
    "fullName": "火泽睽",
    "upperGua": "离",
    "lowerGua": "兑",
    "tianJi": {
      "nature": "上火下泽",
      "virtue": "乖违",
      "xiangCi": "上火下泽，睽，君子以同而异",
      "season": "秋分前后，火泽相背",
      "wuXing": "火金",
      "astro": "火泽之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东东南",
        "houTian": "南西"
      },
      "geography": "上火下泽、乖违之地",
      "heLuoNumber": {
        "xianTian": "3/2",
        "houTian": "9/7"
      },
      "naJia": "上离纳己，下兑纳丁",
      "region": "南方、火泽之地",
      "fengShui": "宜求同存异，宜同而异"
    },
    "renJi": {
      "guaCi": "睽：小事吉",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "悔亡，丧马勿逐，自复。见恶人无咎",
          "interpret": "悔亡，丧马勿追自回。见恶人无咎。"
        },
        {
          "yao": "九二",
          "text": "遇主于巷，无咎",
          "interpret": "在巷中遇主，无咎。"
        },
        {
          "yao": "六三",
          "text": "见舆曳，其牛掣，其人天且劓，无初有终",
          "interpret": "见车被拖，牛被掣，人受刑，无初有终。"
        },
        {
          "yao": "九四",
          "text": "睽孤，遇元夫，交孚，厉无咎",
          "interpret": "睽违孤独，遇善人，交以诚信，虽危无咎。"
        },
        {
          "yao": "六五",
          "text": "悔亡，厥宗噬肤，往何咎",
          "interpret": "悔亡，宗族咬合，往何咎。"
        },
        {
          "yao": "上九",
          "text": "睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉",
          "interpret": "睽孤，见猪负泥，载鬼一车，先张弓后弛弓，非寇乃婚，往遇雨吉。"
        }
      ],
      "tuanCi": "睽，火动而上，泽动而下，二女同居，其志不同行。说而丽乎明，柔进而上行，得中而应乎刚，是以小事吉。天地睽而其事同也，男女睽而其志通也，万物睽而其事类也，睽之时用大矣哉！",
      "affairs": "宜求同存异，同而异之，不宜强求一致",
      "career": "利于小事，大事多乖违，宜谨慎",
      "marriage": "多有分歧，宜相互理解",
      "health": "注意心、肺，宜调和情志",
      "cultivation": "同而异，求同存异，睽中有合"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阴",
      "阳",
      "阴",
      "阳"
    ],
    "symbol": "☲☱"
  },
  {
    "id": 39,
    "name": "蹇",
    "fullName": "水山蹇",
    "upperGua": "坎",
    "lowerGua": "艮",
    "tianJi": {
      "nature": "山上有水",
      "virtue": "蹇难",
      "xiangCi": "山上有水，蹇，君子以反身修德",
      "season": "大寒前后，水凝山上",
      "wuXing": "水土",
      "astro": "水山之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西西北",
        "houTian": "北东北"
      },
      "geography": "山上有水、蹇难之地",
      "heLuoNumber": {
        "xianTian": "6/7",
        "houTian": "1/8"
      },
      "naJia": "上坎纳戊，下艮纳丙",
      "region": "北方、山险之地",
      "fengShui": "宜反身修德，宜见险而止"
    },
    "renJi": {
      "guaCi": "蹇：利西南，不利东北，利见大人，贞吉",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "往蹇，来誉",
          "interpret": "前往遇蹇，回来有誉。"
        },
        {
          "yao": "六二",
          "text": "王臣蹇蹇，匪躬之故",
          "interpret": "王臣蹇蹇济难，非为自身。"
        },
        {
          "yao": "九三",
          "text": "往蹇来反",
          "interpret": "前往遇蹇，回来反顾。"
        },
        {
          "yao": "六四",
          "text": "往蹇来连",
          "interpret": "前往遇蹇，回来连合。"
        },
        {
          "yao": "九五",
          "text": "大蹇朋来",
          "interpret": "大蹇之难，朋友来助。"
        },
        {
          "yao": "上六",
          "text": "往蹇来硕，吉，利见大人",
          "interpret": "前往遇蹇，回来有硕果，吉，利见大人。"
        }
      ],
      "tuanCi": "蹇，难也，险在前也。见险而能止，知矣哉！蹇利西南，往得中也；不利东北，其道穷也。利见大人，往有功也。当位贞吉，以正邦也。蹇之时用大矣哉！",
      "affairs": "宜反身修德，见险而止，不宜冒进",
      "career": "事业蹇难，宜求贵人相助，守正脱困",
      "marriage": "多有阻碍，宜耐心化解",
      "health": "注意肾、关节，宜温补",
      "cultivation": "反身修德，见险而止，求贤辅难"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阳",
      "阴",
      "阳",
      "阴"
    ],
    "symbol": "☵☶"
  },
  {
    "id": 40,
    "name": "解",
    "fullName": "雷水解",
    "upperGua": "震",
    "lowerGua": "坎",
    "tianJi": {
      "nature": "雷雨作解",
      "virtue": "解难",
      "xiangCi": "雷雨作解，君子以赦过宥罪",
      "season": "惊蛰春雨，雷雨解冻",
      "wuXing": "木水",
      "astro": "雷水之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东北西",
        "houTian": "东北"
      },
      "geography": "雷雨作解、解难之地",
      "heLuoNumber": {
        "xianTian": "4/6",
        "houTian": "3/1"
      },
      "naJia": "上震纳庚，下坎纳戊",
      "region": "东方、雷雨之地",
      "fengShui": "宜解难释险，宜赦过宥罪"
    },
    "renJi": {
      "guaCi": "解：利西南，无所往，其来复吉。有攸往，夙吉",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "无咎",
          "interpret": "无咎。"
        },
        {
          "yao": "九二",
          "text": "田获三狐，得黄矢，贞吉",
          "interpret": "田猎获三狐，得黄矢，守正吉。"
        },
        {
          "yao": "六三",
          "text": "负且乘，致寇至，贞吝",
          "interpret": "背负又乘车，招寇至，守正有吝。"
        },
        {
          "yao": "九四",
          "text": "解而拇，朋至斯孚",
          "interpret": "解开拇指，朋友至而诚信。"
        },
        {
          "yao": "六五",
          "text": "君子维有解，吉，有孚于小人",
          "interpret": "君子只有解难，吉，有信于小人。"
        },
        {
          "yao": "上六",
          "text": "公用射隼于高墉之上，获之无不利",
          "interpret": "公射隼于高墙之上，获之无不利。"
        }
      ],
      "tuanCi": "解，险以动，动而免乎险，解。解利西南，往得众也。其来复吉，乃得中也。有攸往夙吉，往有功也。天地解而雷雨作，雷雨作而百果草木皆甲坼，解之时大矣哉！",
      "affairs": "宜解难释险，赦过宥罪，不宜拖延",
      "career": "利于化解困境，趁早行动，吉",
      "marriage": "宜化解矛盾，冰释前嫌",
      "health": "宜疏通气血，解除郁结",
      "cultivation": "赦过宥罪，险以动，动而免乎险"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阴",
      "阳",
      "阴",
      "阴"
    ],
    "symbol": "☳☵"
  },
  {
    "id": 41,
    "name": "损",
    "fullName": "山泽损",
    "upperGua": "艮",
    "lowerGua": "兑",
    "tianJi": {
      "nature": "山下有泽",
      "virtue": "减损",
      "xiangCi": "山下有泽，损，君子以惩忿窒欲",
      "season": "秋分前后，泽润山下",
      "wuXing": "土金",
      "astro": "山泽之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西北东南",
        "houTian": "东北西"
      },
      "geography": "山下有泽、减损之地",
      "heLuoNumber": {
        "xianTian": "7/2",
        "houTian": "8/7"
      },
      "naJia": "上艮纳丙，下兑纳丁",
      "region": "东北方、山泽之地",
      "fengShui": "宜惩忿窒欲，宜损下益上"
    },
    "renJi": {
      "guaCi": "损：有孚，元吉无咎，可贞，利有攸往。曷之用，二簋可用享",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "已事遄往，无咎，酌损之",
          "interpret": "事毕速往，无咎，酌情减损。"
        },
        {
          "yao": "九二",
          "text": "利贞，征凶，弗损益之",
          "interpret": "利于守正，征凶，不损而益之。"
        },
        {
          "yao": "六三",
          "text": "三人行则损一人，一人行则得其友",
          "interpret": "三人行损一人，一人行得友。"
        },
        {
          "yao": "六四",
          "text": "损其疾，使遄有喜，无咎",
          "interpret": "减损其疾，速治有喜，无咎。"
        },
        {
          "yao": "六五",
          "text": "或益之十朋之龟，弗克违，元吉",
          "interpret": "有人益之十朋之龟，不可拒，大吉。"
        },
        {
          "yao": "上九",
          "text": "弗损益之，无咎，贞吉，利有攸往，得臣无家",
          "interpret": "不损而益之，无咎，守正吉，利有攸往，得臣无家。"
        }
      ],
      "tuanCi": "损，损下益上，其道上行。损而有孚，元吉无咎，可贞，利有攸往。曷之用？二簋可用享，二簋应有时。损刚益柔有时，损益盈虚，与时偕行。",
      "affairs": "宜惩忿窒欲，损己利人，不宜贪得",
      "career": "利于适当减损，以退为进，吉",
      "marriage": "宜相互忍让，损己从人",
      "health": "宜节制欲望，减少消耗",
      "cultivation": "惩忿窒欲，损下益上，与时偕行"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阴",
      "阴",
      "阴",
      "阳"
    ],
    "symbol": "☶☱"
  },
  {
    "id": 42,
    "name": "益",
    "fullName": "风雷益",
    "upperGua": "巽",
    "lowerGua": "震",
    "tianJi": {
      "nature": "风雷益",
      "virtue": "增益",
      "xiangCi": "风雷益，君子以见善则迁，有过则改",
      "season": "春分前后，风雷相益",
      "wuXing": "木",
      "astro": "风雷之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西南东北",
        "houTian": "东南东"
      },
      "geography": "风雷相益、增益之地",
      "heLuoNumber": {
        "xianTian": "5/4",
        "houTian": "4/3"
      },
      "naJia": "上巽纳辛，下震纳庚",
      "region": "东南方、风雷之地",
      "fengShui": "宜见善则迁，宜损上益下"
    },
    "renJi": {
      "guaCi": "益：利有攸往，利涉大川",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "利用为大作，元吉无咎",
          "interpret": "利于大作，大吉无咎。"
        },
        {
          "yao": "六二",
          "text": "或益之十朋之龟，弗克违，永贞吉。王用享于帝，吉",
          "interpret": "有人益之十朋之龟，不可拒，永守正吉。王享于帝，吉。"
        },
        {
          "yao": "六三",
          "text": "益之用凶事，无咎。有孚中行，告公用圭",
          "interpret": "益用于凶事，无咎。有孚中行，告公用圭。"
        },
        {
          "yao": "六四",
          "text": "中行告公从，利用为依迁国",
          "interpret": "中行告公从，利于迁国。"
        },
        {
          "yao": "九五",
          "text": "有孚惠心，勿问元吉。有孚惠我德",
          "interpret": "有孚惠心，不问大吉。有孚惠我德。"
        },
        {
          "yao": "上九",
          "text": "莫益之，或击之，立心勿恒，凶",
          "interpret": "无人益之，有人击之，立心不恒，凶。"
        }
      ],
      "tuanCi": "益，损上益下，民说无疆。自上下下，其道大光。利有攸往，中正有庆。利涉大川，木道乃行。益动而巽，日进无疆。天施地生，其益无方。凡益之道，与时偕行。",
      "affairs": "宜见善则迁，有过则改，损上益下",
      "career": "利于事业增益，大有发展，大吉",
      "marriage": "宜相互增益，共同成长",
      "health": "宜补益气血，增强体质",
      "cultivation": "见善则迁，有过则改，损上益下"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阴",
      "阴",
      "阳",
      "阳"
    ],
    "symbol": "☴☳"
  },
  {
    "id": 43,
    "name": "夬",
    "fullName": "泽天夬",
    "upperGua": "兑",
    "lowerGua": "乾",
    "tianJi": {
      "nature": "泽上于天",
      "virtue": "决断",
      "xiangCi": "泽上于天，夬，君子以施禄及下，居德则忌",
      "season": "清明前后，泽水上天",
      "wuXing": "金",
      "astro": "泽天之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东南南",
        "houTian": "西西北"
      },
      "geography": "泽上于天、决断之地",
      "heLuoNumber": {
        "xianTian": "2/1",
        "houTian": "7/6"
      },
      "naJia": "上兑纳丁，下乾纳甲壬",
      "region": "西方、高亢之地",
      "fengShui": "宜果决除弊，宜施禄及下"
    },
    "renJi": {
      "guaCi": "夬：扬于王庭，孚号有厉，告自邑，不利即戎，利有攸往",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "壮于前趾，往不胜为咎",
          "interpret": "壮于前趾，往不胜则有咎。"
        },
        {
          "yao": "九二",
          "text": "惕号，莫夜有戎，勿恤",
          "interpret": "警惕呼号，暮夜有兵，勿忧。"
        },
        {
          "yao": "九三",
          "text": "壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎",
          "interpret": "壮于面颊有凶。君子果决独行遇雨，若湿有愠，无咎。"
        },
        {
          "yao": "九四",
          "text": "臀无肤，其行次且。牵羊悔亡，闻言不信",
          "interpret": "臀无肉，行进迟疑。牵羊悔亡，闻言不信。"
        },
        {
          "yao": "九五",
          "text": "苋陆夬夬，中行无咎",
          "interpret": "如苋陆果决，中行无咎。"
        },
        {
          "yao": "上六",
          "text": "无号，终有凶",
          "interpret": "无人呼号，终有凶。"
        }
      ],
      "tuanCi": "夬，决也，刚决柔也。健而说，决而和。扬于王庭，柔乘五刚也。孚号有厉，其危乃光也。告自邑，不利即戎，所尚乃穷也。利有攸往，刚长乃终也。",
      "affairs": "宜果决除弊，施禄及下，不宜优柔寡断",
      "career": "利于果断决策，清除障碍，吉",
      "marriage": "宜果决处理，防优柔生患",
      "health": "阳气盛极，宜防过亢",
      "cultivation": "施禄及下，刚决柔，决而和"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阳",
      "阳",
      "阳",
      "阴"
    ],
    "symbol": "☱☰"
  },
  {
    "id": 44,
    "name": "姤",
    "fullName": "天风姤",
    "upperGua": "乾",
    "lowerGua": "巽",
    "tianJi": {
      "nature": "天下有风",
      "virtue": "相遇",
      "xiangCi": "天下有风，姤，后以施命诰四方",
      "season": "夏至前后，风行天下",
      "wuXing": "金木",
      "astro": "天风之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "南西南",
        "houTian": "西北东南"
      },
      "geography": "天下有风、相遇之地",
      "heLuoNumber": {
        "xianTian": "1/5",
        "houTian": "6/4"
      },
      "naJia": "上乾纳甲壬，下巽纳辛",
      "region": "西北方、风行之地",
      "fengShui": "宜施命诰四方，宜防微杜渐"
    },
    "renJi": {
      "guaCi": "姤：女壮，勿用取女",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "系于金柅，贞吉。有攸往，见凶，羸豕孚蹢躅",
          "interpret": "系于金属车闸，守正吉。有所往见凶，羸猪踯躅。"
        },
        {
          "yao": "九二",
          "text": "包有鱼，无咎，不利宾",
          "interpret": "包中有鱼，无咎，不利于宾。"
        },
        {
          "yao": "九三",
          "text": "臀无肤，其行次且，厉无大咎",
          "interpret": "臀无肉，行迟疑，危厉无大咎。"
        },
        {
          "yao": "九四",
          "text": "包无鱼，起凶",
          "interpret": "包中无鱼，起凶。"
        },
        {
          "yao": "九五",
          "text": "以杞包瓜，含章，有陨自天",
          "interpret": "以杞柳包瓜，含章美，有陨自天。"
        },
        {
          "yao": "上九",
          "text": "姤其角，吝无咎",
          "interpret": "遇其角，有吝无咎。"
        }
      ],
      "tuanCi": "姤，遇也，柔遇刚也。勿用取女，不可与长也。天地相遇，品物咸章也。刚遇中正，天下大行也。姤之时义大矣哉！",
      "affairs": "宜防微杜渐，施命诰四方，不宜轻遇",
      "career": "利于把握机遇，但须谨慎，防小人",
      "marriage": "防所遇非人，宜慎重选择",
      "health": "注意肝、肺，宜防微杜渐",
      "cultivation": "施命诰四方，防微杜渐，含章有陨"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阳",
      "阳",
      "阳",
      "阳"
    ],
    "symbol": "☰☴"
  },
  {
    "id": 45,
    "name": "萃",
    "fullName": "泽地萃",
    "upperGua": "兑",
    "lowerGua": "坤",
    "tianJi": {
      "nature": "泽上于地",
      "virtue": "聚集",
      "xiangCi": "泽上于地，萃，君子以除戎器，戒不虞",
      "season": "秋分前后，泽润大地",
      "wuXing": "金土",
      "astro": "泽地之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东南北",
        "houTian": "西西南"
      },
      "geography": "泽上于地、聚集之地",
      "heLuoNumber": {
        "xianTian": "2/8",
        "houTian": "7/2"
      },
      "naJia": "上兑纳丁，下坤纳乙癸",
      "region": "西方、泽畔之地",
      "fengShui": "宜聚集团结，宜除戎器戒不虞"
    },
    "renJi": {
      "guaCi": "萃：亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "有孚不终，乃乱乃萃。若号一握为笑，勿恤，往无咎",
          "interpret": "有孚不终，乃乱乃萃。若号一握为笑，勿忧，往无咎。"
        },
        {
          "yao": "六二",
          "text": "引吉无咎，孚乃利用禴",
          "interpret": "引吉无咎，孚乃利用禴祭。"
        },
        {
          "yao": "六三",
          "text": "萃如嗟如，无攸利。往无咎，小吝",
          "interpret": "聚而嗟叹，无所利。往无咎，小吝。"
        },
        {
          "yao": "九四",
          "text": "大吉无咎",
          "interpret": "大吉无咎。"
        },
        {
          "yao": "九五",
          "text": "萃有位，无咎。匪孚，元永贞，悔亡",
          "interpret": "聚而有位，无咎。未孚，永守正，悔亡。"
        },
        {
          "yao": "上六",
          "text": "赍咨涕洟，无咎",
          "interpret": "嗟叹流涕，无咎。"
        }
      ],
      "tuanCi": "萃，聚也；顺以说，刚中而应，故聚也。王假有庙，致孝享也。利见大人亨，聚以正也。用大牲吉，利有攸往，顺天命也。观其所聚，而天地万物之情可见矣。",
      "affairs": "宜聚集团结，戒备不虞，不宜松懈",
      "career": "利于人才聚集，团结共事，大吉",
      "marriage": "宜天作之聚，门当户对",
      "health": "宜聚气养神，防意外",
      "cultivation": "除戎器戒不虞，聚以正，顺天命"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阴",
      "阳",
      "阳",
      "阴"
    ],
    "symbol": "☱☷"
  },
  {
    "id": 46,
    "name": "升",
    "fullName": "地风升",
    "upperGua": "坤",
    "lowerGua": "巽",
    "tianJi": {
      "nature": "地中生木",
      "virtue": "上升",
      "xiangCi": "地中生木，升，君子以顺德，积小以高大",
      "season": "立春前后，木生地中",
      "wuXing": "土木",
      "astro": "地风之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "北西南",
        "houTian": "西南东南"
      },
      "geography": "地中生木、上升之地",
      "heLuoNumber": {
        "xianTian": "8/5",
        "houTian": "2/4"
      },
      "naJia": "上坤纳乙癸，下巽纳辛",
      "region": "东南方、生发之地",
      "fengShui": "宜积小成大，宜顺德上升"
    },
    "renJi": {
      "guaCi": "升：元亨，用见大人，勿恤，南征吉",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "允升，大吉",
          "interpret": "顺利上升，大吉。"
        },
        {
          "yao": "九二",
          "text": "孚乃利用禴，无咎",
          "interpret": "孚乃利用禴祭，无咎。"
        },
        {
          "yao": "九三",
          "text": "升虚邑",
          "interpret": "升入空虚之邑。"
        },
        {
          "yao": "六四",
          "text": "王用亨于岐山，吉无咎",
          "interpret": "王亨于岐山，吉无咎。"
        },
        {
          "yao": "六五",
          "text": "贞吉，升阶",
          "interpret": "守正吉，升阶而上。"
        },
        {
          "yao": "上六",
          "text": "冥升，利于不息之贞",
          "interpret": "冥升不息，利于不息守正。"
        }
      ],
      "tuanCi": "柔以时升，巽而顺，刚中而应，是以大亨。用见大人勿恤，有庆也。南征吉，志行也。",
      "affairs": "宜积小成大，顺德上升，不宜急躁",
      "career": "利于事业上升，循序渐进，大吉",
      "marriage": "宜稳步发展，终成眷属",
      "health": "宜循序渐进，调养生机",
      "cultivation": "顺德，积小以高大，柔以时升"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阳",
      "阴",
      "阴",
      "阴"
    ],
    "symbol": "☷☴"
  },
  {
    "id": 47,
    "name": "困",
    "fullName": "泽水困",
    "upperGua": "兑",
    "lowerGua": "坎",
    "tianJi": {
      "nature": "泽无水",
      "virtue": "困穷",
      "xiangCi": "泽无水，困，君子以致命遂志",
      "season": "大暑前后，泽涸水干",
      "wuXing": "金水",
      "astro": "泽水之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东南西",
        "houTian": "西北"
      },
      "geography": "泽无水、困穷之地",
      "heLuoNumber": {
        "xianTian": "2/6",
        "houTian": "7/1"
      },
      "naJia": "上兑纳丁，下坎纳戊",
      "region": "西方、涸泽之地",
      "fengShui": "宜致命遂志，宜守困待时"
    },
    "renJi": {
      "guaCi": "困：亨，贞，大人吉无咎，有言不信",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "臀困于株木，入于幽谷，三岁不觌",
          "interpret": "臀困于木桩，入幽谷，三年不见。"
        },
        {
          "yao": "九二",
          "text": "困于酒食，朱绂方来，利用享祀，征凶无咎",
          "interpret": "困于酒食，朱衣方来，利于享祀，征凶无咎。"
        },
        {
          "yao": "六三",
          "text": "困于石，据于蒺藜，入于其宫，不见其妻，凶",
          "interpret": "困于石，据蒺藜，入宫不见妻，凶。"
        },
        {
          "yao": "九四",
          "text": "来徐徐，困于金车，吝，有终",
          "interpret": "缓缓而来，困于金车，有吝，有终。"
        },
        {
          "yao": "九五",
          "text": "劓刖，困于赤绂，乃徐有说，利用祭祀",
          "interpret": "受刑，困于赤衣，渐渐脱困，利于祭祀。"
        },
        {
          "yao": "上六",
          "text": "困于葛藟，于臲卼，曰动悔有悔，征吉",
          "interpret": "困于葛藟，不安，动悔有悔，征吉。"
        }
      ],
      "tuanCi": "困，刚揜也。险以说，困而不失其所亨，其唯君子乎！贞大人吉，以刚中也。有言不信，尚口乃穷也。",
      "affairs": "宜致命遂志，守困待时，不宜多言",
      "career": "事业困穷，宜坚守正道，终能脱困",
      "marriage": "多有困阻，宜相互扶持",
      "health": "正气困乏，宜调养恢复",
      "cultivation": "致命遂志，困而不失其所亨，险以说"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阴",
      "阳",
      "阳",
      "阴"
    ],
    "symbol": "☱☵"
  },
  {
    "id": 48,
    "name": "井",
    "fullName": "水风井",
    "upperGua": "坎",
    "lowerGua": "巽",
    "tianJi": {
      "nature": "木上有水",
      "virtue": "井养",
      "xiangCi": "木上有水，井，君子以劳民劝相",
      "season": "谷雨前后，木上水润",
      "wuXing": "水木",
      "astro": "水风之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西西南",
        "houTian": "北东南"
      },
      "geography": "木上有水、井养之地",
      "heLuoNumber": {
        "xianTian": "6/5",
        "houTian": "1/4"
      },
      "naJia": "上坎纳戊，下巽纳辛",
      "region": "北方、水井之地",
      "fengShui": "宜井养不穷，宜劳民劝相"
    },
    "renJi": {
      "guaCi": "井：改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "井泥不食，旧井无禽",
          "interpret": "井泥不可食，旧井无禽。"
        },
        {
          "yao": "九二",
          "text": "井谷射鲋，瓮敝漏",
          "interpret": "井谷射小鱼，瓮破漏。"
        },
        {
          "yao": "九三",
          "text": "井渫不食，为我心恻，可用汲。王明，并受其福",
          "interpret": "井治不食，心恻，可汲。王明，并受其福。"
        },
        {
          "yao": "六四",
          "text": "井甃，无咎",
          "interpret": "井砌砖，无咎。"
        },
        {
          "yao": "九五",
          "text": "井冽寒泉食",
          "interpret": "井冽寒泉可食。"
        },
        {
          "yao": "上六",
          "text": "井收勿幕，有孚元吉",
          "interpret": "井收不盖，有孚大吉。"
        }
      ],
      "tuanCi": "巽乎水而上水，井；井养而不穷也。改邑不改井，乃以刚中也。汔至亦未繘井，未有功也。羸其瓶，是以凶也。",
      "affairs": "宜井养不穷，劳民劝相，不宜半途而废",
      "career": "利于养人济物，持之以恒，吉",
      "marriage": "宜以养为本，持之以恒",
      "health": "宜滋养身体，源源不断",
      "cultivation": "劳民劝相，井养不穷，改邑不改井"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阳",
      "阴",
      "阳",
      "阴"
    ],
    "symbol": "☵☴"
  },
  {
    "id": 49,
    "name": "革",
    "fullName": "泽火革",
    "upperGua": "兑",
    "lowerGua": "离",
    "tianJi": {
      "nature": "泽中有火",
      "virtue": "变革",
      "xiangCi": "泽中有火，革，君子以治历明时",
      "season": "夏至前后，火燃泽中",
      "wuXing": "金火",
      "astro": "泽火之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东南东",
        "houTian": "西南"
      },
      "geography": "泽中有火、变革之地",
      "heLuoNumber": {
        "xianTian": "2/3",
        "houTian": "7/9"
      },
      "naJia": "上兑纳丁，下离纳己",
      "region": "南方、火泽之地",
      "fengShui": "宜顺天变革，宜治历明时"
    },
    "renJi": {
      "guaCi": "革：己日乃孚，元亨利贞，悔亡",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "巩用黄牛之革",
          "interpret": "巩固用黄牛皮。"
        },
        {
          "yao": "六二",
          "text": "己日乃革之，征吉无咎",
          "interpret": "己日乃变革，征吉无咎。"
        },
        {
          "yao": "九三",
          "text": "征凶贞厉，革言三就，有孚",
          "interpret": "征凶守正防危，革言三就，有孚。"
        },
        {
          "yao": "九四",
          "text": "悔亡，有孚改命，吉",
          "interpret": "悔亡，有孚改命，吉。"
        },
        {
          "yao": "九五",
          "text": "大人虎变，未占有孚",
          "interpret": "大人虎变，未占有孚。"
        },
        {
          "yao": "上六",
          "text": "君子豹变，小人革面，征凶，居贞吉",
          "interpret": "君子豹变，小人革面，征凶，居守正吉。"
        }
      ],
      "tuanCi": "革，水火相息，二女同居，其志不相得，曰革。己日乃孚，革而信之。文明以说，大亨以正，革而当，其悔乃亡。天地革而四时成，汤武革命，顺乎天而应乎人，革之时义大矣哉！",
      "affairs": "宜顺天变革，治历明时，不宜因循守旧",
      "career": "利于革故鼎新，顺天应人，大吉",
      "marriage": "宜变革旧习，焕然一新",
      "health": "宜改变旧习，焕发生机",
      "cultivation": "治历明时，顺乎天应乎人，虎变豹变"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阳",
      "阳",
      "阳",
      "阴"
    ],
    "symbol": "☱☲"
  },
  {
    "id": 50,
    "name": "鼎",
    "fullName": "火风鼎",
    "upperGua": "离",
    "lowerGua": "巽",
    "tianJi": {
      "nature": "木上有火",
      "virtue": "鼎新",
      "xiangCi": "木上有火，鼎，君子以正位凝命",
      "season": "小满前后，火燃木上",
      "wuXing": "火木",
      "astro": "火风之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东西南",
        "houTian": "南东南"
      },
      "geography": "木上有火、鼎新之地",
      "heLuoNumber": {
        "xianTian": "3/5",
        "houTian": "9/4"
      },
      "naJia": "上离纳己，下巽纳辛",
      "region": "南方、火风之地",
      "fengShui": "宜正位凝命，宜鼎新养人"
    },
    "renJi": {
      "guaCi": "鼎：元吉，亨",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "鼎颠趾，利出否，得妾以其子，无咎",
          "interpret": "鼎颠趾，利于出否，得妾以其子，无咎。"
        },
        {
          "yao": "九二",
          "text": "鼎有实，我仇有疾，不我能即，吉",
          "interpret": "鼎有实，我仇有疾，不我能即，吉。"
        },
        {
          "yao": "九三",
          "text": "鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉",
          "interpret": "鼎耳革，行塞，雉膏不食，方雨亏悔，终吉。"
        },
        {
          "yao": "九四",
          "text": "鼎折足，覆公餗，其形渥，凶",
          "interpret": "鼎折足，覆公餗，其形渥，凶。"
        },
        {
          "yao": "六五",
          "text": "鼎黄耳金铉，利贞",
          "interpret": "鼎黄耳金铉，利贞。"
        },
        {
          "yao": "上九",
          "text": "鼎玉铉，大吉，无不利",
          "interpret": "鼎玉铉，大吉，无不利。"
        }
      ],
      "tuanCi": "鼎，象也。以木巽火，亨饪也。圣人亨以享上帝，而大亨以养圣贤。巽而耳目聪明，柔进而上行，得中而应乎刚，是以元亨。",
      "affairs": "宜正位凝命，鼎新养贤，不宜用人不当",
      "career": "利于鼎新立业，养贤任能，大吉",
      "marriage": "宜鼎新气象，门第相当",
      "health": "宜调养脾胃，鼎新养生",
      "cultivation": "正位凝命，亨以养圣贤，耳目聪明"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阳",
      "阳",
      "阴",
      "阳"
    ],
    "symbol": "☲☴"
  },
  {
    "id": 51,
    "name": "震",
    "fullName": "震为雷",
    "upperGua": "震",
    "lowerGua": "震",
    "tianJi": {
      "nature": "洊雷震",
      "virtue": "震动",
      "xiangCi": "洊雷震，君子以恐惧修省",
      "season": "惊蛰前后，雷声震动",
      "wuXing": "木",
      "astro": "东方苍龙"
    },
    "diJi": {
      "direction": {
        "xianTian": "东北",
        "houTian": "东"
      },
      "geography": "雷震之地、震动之所",
      "heLuoNumber": {
        "xianTian": 4,
        "houTian": 3
      },
      "naJia": "震纳庚",
      "region": "东方、雷动之地",
      "fengShui": "宜恐惧修省，宜临危不乱"
    },
    "renJi": {
      "guaCi": "震：亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "震来虩虩，后笑言哑哑，吉",
          "interpret": "震来恐惧，后笑言哑哑，吉。"
        },
        {
          "yao": "六二",
          "text": "震来厉，亿丧贝，跻于九陵，勿逐，七日得",
          "interpret": "震来危厉，大丧贝，登九陵，勿追，七日得。"
        },
        {
          "yao": "六三",
          "text": "震苏苏，震行无眚",
          "interpret": "震苏苏，震行无眚。"
        },
        {
          "yao": "九四",
          "text": "震遂泥",
          "interpret": "震坠于泥。"
        },
        {
          "yao": "六五",
          "text": "震往来厉，亿无丧，有事",
          "interpret": "震往来危厉，无丧，有事。"
        },
        {
          "yao": "上六",
          "text": "震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言",
          "interpret": "震索索，视矍矍，征凶。震不于其身，于其邻，无咎。婚媾有言。"
        }
      ],
      "tuanCi": "震，亨。震来虩虩，恐致福也。笑言哑哑，后有则也。震惊百里，惊远而惧迩也。出可以守宗庙社稷，以为祭主也。",
      "affairs": "宜恐惧修省，临危不乱，不宜惊慌失措",
      "career": "事业有变，宜沉着应对，终吉",
      "marriage": "多有震动波折，宜冷静处理",
      "health": "注意肝、神经，宜镇定安神",
      "cultivation": "恐惧修省，恐致福，后有则"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阴",
      "阳",
      "阴",
      "阴"
    ],
    "symbol": "☳☳"
  },
  {
    "id": 52,
    "name": "艮",
    "fullName": "艮为山",
    "upperGua": "艮",
    "lowerGua": "艮",
    "tianJi": {
      "nature": "兼山艮",
      "virtue": "静止",
      "xiangCi": "兼山艮，君子以思不出其位",
      "season": "立冬前后，山静不动",
      "wuXing": "土",
      "astro": "北方玄武"
    },
    "diJi": {
      "direction": {
        "xianTian": "西北",
        "houTian": "东北"
      },
      "geography": "重山之地、静止之所",
      "heLuoNumber": {
        "xianTian": 7,
        "houTian": 8
      },
      "naJia": "艮纳丙",
      "region": "东北方、山岳之地",
      "fengShui": "宜静止守位，宜思不出其位"
    },
    "renJi": {
      "guaCi": "艮其背，不获其身，行其庭，不见其人，无咎",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "艮其趾，无咎，利永贞",
          "interpret": "止于脚趾，无咎，利永守正。"
        },
        {
          "yao": "六二",
          "text": "艮其腓，不拯其随，其心不快",
          "interpret": "止于小腿，不救其随，心不快。"
        },
        {
          "yao": "九三",
          "text": "艮其限，列其夤，厉薰心",
          "interpret": "止于腰部，分裂其脊，危厉薰心。"
        },
        {
          "yao": "六四",
          "text": "艮其身，无咎",
          "interpret": "止于身，无咎。"
        },
        {
          "yao": "六五",
          "text": "艮其辅，言有序，悔亡",
          "interpret": "止于口辅，言有序，悔亡。"
        },
        {
          "yao": "上九",
          "text": "敦艮，吉",
          "interpret": "敦厚而止，吉。"
        }
      ],
      "tuanCi": "艮，止也。时止则止，时行则行，动静不失其时，其道光明。艮其止，止其所也。上下敌应，不相与也。是以不获其身，行其庭不见其人，无咎也。",
      "affairs": "宜知止守位，动静适时，不宜妄动",
      "career": "宜守不宜进，止于所当止，吉",
      "marriage": "宜静止守成，不宜轻举妄动",
      "health": "注意脾胃、关节，宜静养",
      "cultivation": "思不出其位，时止则止，动静不失其时"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阳",
      "阴",
      "阴",
      "阳"
    ],
    "symbol": "☶☶"
  },
  {
    "id": 53,
    "name": "渐",
    "fullName": "风山渐",
    "upperGua": "巽",
    "lowerGua": "艮",
    "tianJi": {
      "nature": "山上有木",
      "virtue": "渐进",
      "xiangCi": "山上有木，渐，君子以居贤德善俗",
      "season": "立春前后，木长山上",
      "wuXing": "木土",
      "astro": "风山之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西南西北",
        "houTian": "东南东北"
      },
      "geography": "山上有木、渐进之地",
      "heLuoNumber": {
        "xianTian": "5/7",
        "houTian": "4/8"
      },
      "naJia": "上巽纳辛，下艮纳丙",
      "region": "东南方、山木之地",
      "fengShui": "宜循序渐进，宜居贤德善俗"
    },
    "renJi": {
      "guaCi": "渐：女归吉，利贞",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "鸿渐于干，小子厉，有言无咎",
          "interpret": "鸿渐于水边，小子危厉，有言无咎。"
        },
        {
          "yao": "六二",
          "text": "鸿渐于磐，饮食衎衎，吉",
          "interpret": "鸿渐于磐石，饮食和乐，吉。"
        },
        {
          "yao": "九三",
          "text": "鸿渐于陆，夫征不复，妇孕不育，凶，利御寇",
          "interpret": "鸿渐于陆，夫征不复，妇孕不育，凶，利御寇。"
        },
        {
          "yao": "六四",
          "text": "鸿渐于木，或得其桷，无咎",
          "interpret": "鸿渐于木，或得其方木，无咎。"
        },
        {
          "yao": "九五",
          "text": "鸿渐于陵，妇三岁不孕，终莫之胜，吉",
          "interpret": "鸿渐于陵，妇三年不孕，终莫能胜，吉。"
        },
        {
          "yao": "上九",
          "text": "鸿渐于陆，其羽可用为仪，吉",
          "interpret": "鸿渐于陆，其羽可用为仪，吉。"
        }
      ],
      "tuanCi": "渐，之进也，女归吉也。进得位，往有功也。进以正，可以正邦也。其位刚得中也。止而巽，动不穷也。",
      "affairs": "宜循序渐进，居贤德善俗，不宜急躁",
      "career": "利于稳步发展，循序渐进，吉",
      "marriage": "大吉之象，女归正礼，终成眷属",
      "health": "宜循序渐进，调养生机",
      "cultivation": "居贤德善俗，进以正，循序渐进"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阳",
      "阴",
      "阳",
      "阳"
    ],
    "symbol": "☴☶"
  },
  {
    "id": 54,
    "name": "归妹",
    "fullName": "雷泽归妹",
    "upperGua": "震",
    "lowerGua": "兑",
    "tianJi": {
      "nature": "泽上有雷",
      "virtue": "归妹",
      "xiangCi": "泽上有雷，归妹，君子以永终知敝",
      "season": "春分前后，雷动泽上",
      "wuXing": "木金",
      "astro": "雷泽之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东北东南",
        "houTian": "东西"
      },
      "geography": "泽上有雷、归妹之地",
      "heLuoNumber": {
        "xianTian": "4/2",
        "houTian": "3/7"
      },
      "naJia": "上震纳庚，下兑纳丁",
      "region": "东方、泽畔之地",
      "fengShui": "宜永终知敝，宜正位归妹"
    },
    "renJi": {
      "guaCi": "归妹：征凶，无攸利",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "归妹以娣，跛能履，征吉",
          "interpret": "归妹以娣，跛能履，征吉。"
        },
        {
          "yao": "九二",
          "text": "眇能视，利幽人之贞",
          "interpret": "眇能视，利幽人守正。"
        },
        {
          "yao": "六三",
          "text": "归妹以须，反归以娣",
          "interpret": "归妹以须，反归以娣。"
        },
        {
          "yao": "九四",
          "text": "归妹愆期，迟归有时",
          "interpret": "归妹愆期，迟归有时。"
        },
        {
          "yao": "六五",
          "text": "帝乙归妹，其君之袂，不如其娣之袂良，月几望，吉",
          "interpret": "帝乙归妹，其君之袂不如娣之袂良，月几望，吉。"
        },
        {
          "yao": "上六",
          "text": "女承筐无实，士刲羊无血，无攸利",
          "interpret": "女承筐无实，士刲羊无血，无所利。"
        }
      ],
      "tuanCi": "归妹，天地之大义也。天地不交，而万物不兴，归妹人之终始也。说以动，所归妹也。征凶，位不当也。无攸利，柔乘刚也。",
      "affairs": "宜永终知敝，正位而行，不宜急进",
      "career": "多有不当之位，宜谨慎行事",
      "marriage": "多有不当之配，宜慎重，防凶",
      "health": "注意肝、肺，宜调和情志",
      "cultivation": "永终知敝，正位而行，天地之大义"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阴",
      "阳",
      "阴",
      "阴"
    ],
    "symbol": "☳☱"
  },
  {
    "id": 55,
    "name": "丰",
    "fullName": "雷火丰",
    "upperGua": "震",
    "lowerGua": "离",
    "tianJi": {
      "nature": "雷电皆至",
      "virtue": "丰盛",
      "xiangCi": "雷电皆至，丰，君子以折狱致刑",
      "season": "夏至前后，雷电交加",
      "wuXing": "木火",
      "astro": "雷火之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东北东",
        "houTian": "东南"
      },
      "geography": "雷电皆至、丰盛之地",
      "heLuoNumber": {
        "xianTian": "4/3",
        "houTian": "3/9"
      },
      "naJia": "上震纳庚，下离纳己",
      "region": "南方、雷电之地",
      "fengShui": "宜折狱致刑，宜丰盛守正"
    },
    "renJi": {
      "guaCi": "丰：亨，王假之，勿忧，宜日中",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "遇其配主，虽旬无咎，往有尚",
          "interpret": "遇其配主，虽旬无咎，往有尚。"
        },
        {
          "yao": "六二",
          "text": "丰其蔀，日中见斗，往得疑疾，有孚发若，吉",
          "interpret": "丰其蔀，日中见斗，往得疑疾，有孚发若，吉。"
        },
        {
          "yao": "九三",
          "text": "丰其沛，日中见沬，折其右肱，无咎",
          "interpret": "丰其沛，日中见沬，折其右肱，无咎。"
        },
        {
          "yao": "九四",
          "text": "丰其蔀，日中见斗，遇其夷主，吉",
          "interpret": "丰其蔀，日中见斗，遇其夷主，吉。"
        },
        {
          "yao": "六五",
          "text": "来章，有庆誉，吉",
          "interpret": "来章，有庆誉，吉。"
        },
        {
          "yao": "上六",
          "text": "丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶",
          "interpret": "丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。"
        }
      ],
      "tuanCi": "丰，大也。明以动，故丰。王假之，尚大也。勿忧宜日中，宜照天下也。日中则昃，月盈则食，天地盈虚，与时消息，而况于人乎？况于鬼神乎？",
      "affairs": "宜折狱致刑，丰盛守正，不宜骄奢",
      "career": "事业丰盛，宜把握盛时，防盛极而衰",
      "marriage": "宜丰盛美满，防日中则昃",
      "health": "气血丰盛，宜防过亢",
      "cultivation": "折狱致刑，宜日中，与时消息"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阳",
      "阳",
      "阴",
      "阴"
    ],
    "symbol": "☳☲"
  },
  {
    "id": 56,
    "name": "旅",
    "fullName": "火山旅",
    "upperGua": "离",
    "lowerGua": "艮",
    "tianJi": {
      "nature": "山上有火",
      "virtue": "旅行",
      "xiangCi": "山上有火，旅，君子以明慎用刑而不留狱",
      "season": "秋分前后，火行山上",
      "wuXing": "火土",
      "astro": "火山之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东西北",
        "houTian": "南东北"
      },
      "geography": "山上有火、旅行之地",
      "heLuoNumber": {
        "xianTian": "3/7",
        "houTian": "9/8"
      },
      "naJia": "上离纳己，下艮纳丙",
      "region": "南方、山火之地",
      "fengShui": "宜明慎用刑，宜旅行在外"
    },
    "renJi": {
      "guaCi": "旅：小亨，旅贞吉",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "旅琐琐，斯其所取灾",
          "interpret": "旅琐琐，斯其所取灾。"
        },
        {
          "yao": "六二",
          "text": "旅即次，怀其资，得童仆贞",
          "interpret": "旅即次，怀其资，得童仆贞。"
        },
        {
          "yao": "九三",
          "text": "旅焚其次，丧其童仆，贞厉",
          "interpret": "旅焚其次，丧其童仆，贞厉。"
        },
        {
          "yao": "九四",
          "text": "旅于处，得其资斧，我心不快",
          "interpret": "旅于处，得其资斧，我心不快。"
        },
        {
          "yao": "六五",
          "text": "射雉一矢亡，终以誉命",
          "interpret": "射雉一矢亡，终以誉命。"
        },
        {
          "yao": "上九",
          "text": "鸟焚其巢，旅人先笑后号啕。丧牛于易，凶",
          "interpret": "鸟焚其巢，旅人先笑后号啕。丧牛于易，凶。"
        }
      ],
      "tuanCi": "旅，小亨，柔得中乎外而顺乎刚，止而丽乎明，是以小亨，旅贞吉也。旅之时义大矣哉！",
      "affairs": "宜明慎用刑，旅行在外，不宜张扬",
      "career": "利于外出发展，小有所成，宜谨慎",
      "marriage": "多有漂泊，宜安定为吉",
      "health": "注意心、脾，宜安神定志",
      "cultivation": "明慎用刑而不留狱，止而丽乎明"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阳",
      "阳",
      "阴",
      "阳"
    ],
    "symbol": "☲☶"
  },
  {
    "id": 57,
    "name": "巽",
    "fullName": "巽为风",
    "upperGua": "巽",
    "lowerGua": "巽",
    "tianJi": {
      "nature": "随风巽",
      "virtue": "顺从",
      "xiangCi": "随风巽，君子以申命行事",
      "season": "立夏前后，风行不息",
      "wuXing": "木",
      "astro": "东南方"
    },
    "diJi": {
      "direction": {
        "xianTian": "西南",
        "houTian": "东南"
      },
      "geography": "风行之地、顺从之所",
      "heLuoNumber": {
        "xianTian": 5,
        "houTian": 4
      },
      "naJia": "巽纳辛",
      "region": "东南方、风行之地",
      "fengShui": "宜申命行事，宜顺从渗透"
    },
    "renJi": {
      "guaCi": "巽：小亨，利有攸往，利见大人",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "进退，利武人之贞",
          "interpret": "进退，利武人守正。"
        },
        {
          "yao": "九二",
          "text": "巽在床下，用史巫纷若，吉无咎",
          "interpret": "巽在床下，用史巫纷若，吉无咎。"
        },
        {
          "yao": "九三",
          "text": "频巽，吝",
          "interpret": "频频顺从，有吝。"
        },
        {
          "yao": "六四",
          "text": "悔亡，田获三品",
          "interpret": "悔亡，田获三品。"
        },
        {
          "yao": "九五",
          "text": "贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉",
          "interpret": "贞吉悔亡，无不利。无初有终，先庚三日，后庚三日，吉。"
        },
        {
          "yao": "上九",
          "text": "巽在床下，丧其资斧，贞凶",
          "interpret": "巽在床下，丧其资斧，贞凶。"
        }
      ],
      "tuanCi": "重巽以申命，刚巽乎中正而志行。柔皆顺乎刚，是以小亨，利有攸往，利见大人。",
      "affairs": "宜申命行事，顺从渗透，不宜优柔",
      "career": "利于顺从行事，循序渐进，小亨",
      "marriage": "宜顺从相待，柔顺为吉",
      "health": "注意肝、风邪，宜避风调养",
      "cultivation": "申命行事，重巽以申命，柔顺乎刚"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阳",
      "阴",
      "阳",
      "阳"
    ],
    "symbol": "☴☴"
  },
  {
    "id": 58,
    "name": "兑",
    "fullName": "兑为泽",
    "upperGua": "兑",
    "lowerGua": "兑",
    "tianJi": {
      "nature": "丽泽兑",
      "virtue": "喜悦",
      "xiangCi": "丽泽兑，君子以朋友讲习",
      "season": "秋分前后，泽润相丽",
      "wuXing": "金",
      "astro": "西方白虎"
    },
    "diJi": {
      "direction": {
        "xianTian": "东南",
        "houTian": "西"
      },
      "geography": "重泽之地、喜悦之所",
      "heLuoNumber": {
        "xianTian": 2,
        "houTian": 7
      },
      "naJia": "兑纳丁",
      "region": "西方、泽润之地",
      "fengShui": "宜朋友讲习，宜喜悦和乐"
    },
    "renJi": {
      "guaCi": "兑：亨，利贞",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "和兑，吉",
          "interpret": "和而悦，吉。"
        },
        {
          "yao": "九二",
          "text": "孚兑，吉，悔亡",
          "interpret": "孚而悦，吉，悔亡。"
        },
        {
          "yao": "六三",
          "text": "来兑，凶",
          "interpret": "来求悦，凶。"
        },
        {
          "yao": "九四",
          "text": "商兑未宁，介疾有喜",
          "interpret": "商议未宁，介疾有喜。"
        },
        {
          "yao": "九五",
          "text": "孚于剥，有厉",
          "interpret": "孚于剥，有厉。"
        },
        {
          "yao": "上六",
          "text": "引兑",
          "interpret": "引诱而悦。"
        }
      ],
      "tuanCi": "兑，说也。刚中而柔外，说以利贞，是以顺乎天而应乎人。说以先民，民忘其劳；说以犯难，民忘其死。说之大，民劝矣哉！",
      "affairs": "宜朋友讲习，喜悦和乐，不宜谄媚",
      "career": "利于和悦共事，朋友相助，吉",
      "marriage": "宜喜悦和合，两情相悦",
      "health": "注意肺、口舌，宜心情愉悦",
      "cultivation": "朋友讲习，刚中柔外，说以劝民"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阴",
      "阳",
      "阳",
      "阴"
    ],
    "symbol": "☱☱"
  },
  {
    "id": 59,
    "name": "涣",
    "fullName": "风水涣",
    "upperGua": "巽",
    "lowerGua": "坎",
    "tianJi": {
      "nature": "风行水上",
      "virtue": "涣散",
      "xiangCi": "风行水上，涣，先王以享于帝立庙",
      "season": "雨水前后，风行水上",
      "wuXing": "木水",
      "astro": "风水之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西南西",
        "houTian": "东南北"
      },
      "geography": "风行水上、涣散之地",
      "heLuoNumber": {
        "xianTian": "5/6",
        "houTian": "4/1"
      },
      "naJia": "上巽纳辛，下坎纳戊",
      "region": "东南方、风水之地",
      "fengShui": "宜涣散凝聚，宜享帝立庙"
    },
    "renJi": {
      "guaCi": "涣：亨。王假有庙，利涉大川，利贞",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "用拯马壮，吉",
          "interpret": "用拯马壮，吉。"
        },
        {
          "yao": "九二",
          "text": "涣奔其机，悔亡",
          "interpret": "涣奔其机，悔亡。"
        },
        {
          "yao": "六三",
          "text": "涣其躬，无悔",
          "interpret": "涣其躬，无悔。"
        },
        {
          "yao": "六四",
          "text": "涣其群，元吉。涣有丘，匪夷所思",
          "interpret": "涣其群，元吉。涣有丘，匪夷所思。"
        },
        {
          "yao": "九五",
          "text": "涣汗其大号，涣王居，无咎",
          "interpret": "涣汗其大号，涣王居，无咎。"
        },
        {
          "yao": "上九",
          "text": "涣其血去逖出，无咎",
          "interpret": "涣其血去逖出，无咎。"
        }
      ],
      "tuanCi": "涣亨，刚来而不穷，柔得位乎外而上同。王假有庙，王乃在中也。利涉大川，乘木有功也。",
      "affairs": "宜涣散凝聚，享帝立庙，不宜一盘散沙",
      "career": "利于化解涣散，凝聚人心，吉",
      "marriage": "宜化解隔阂，重新凝聚",
      "health": "注意肝、肾，宜疏通气血",
      "cultivation": "享于帝立庙，涣散凝聚，乘木有功"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阴",
      "阴",
      "阳",
      "阳"
    ],
    "symbol": "☴☵"
  },
  {
    "id": 60,
    "name": "节",
    "fullName": "水泽节",
    "upperGua": "坎",
    "lowerGua": "兑",
    "tianJi": {
      "nature": "泽上有水",
      "virtue": "节度",
      "xiangCi": "泽上有水，节，君子以制数度，议德行",
      "season": "大雪前后，水满泽上",
      "wuXing": "水金",
      "astro": "水泽之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西东南",
        "houTian": "北西"
      },
      "geography": "泽上有水、节度之地",
      "heLuoNumber": {
        "xianTian": "6/2",
        "houTian": "1/7"
      },
      "naJia": "上坎纳戊，下兑纳丁",
      "region": "北方、水泽之地",
      "fengShui": "宜制数度议德行，宜节度有方"
    },
    "renJi": {
      "guaCi": "节：亨，苦节不可贞",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "不出户庭，无咎",
          "interpret": "不出户庭，无咎。"
        },
        {
          "yao": "九二",
          "text": "不出门庭，凶",
          "interpret": "不出门庭，凶。"
        },
        {
          "yao": "六三",
          "text": "不节若，则嗟若，无咎",
          "interpret": "不节则嗟叹，无咎。"
        },
        {
          "yao": "六四",
          "text": "安节，亨",
          "interpret": "安节，亨。"
        },
        {
          "yao": "九五",
          "text": "甘节，吉，往有尚",
          "interpret": "甘节，吉，往有尚。"
        },
        {
          "yao": "上六",
          "text": "苦节，贞凶，悔亡",
          "interpret": "苦节，贞凶，悔亡。"
        }
      ],
      "tuanCi": "节亨，刚柔分而刚得中。苦节不可贞，其道穷也。说以行险，当位以节，中正以通。天地节而四时成，节以制度，不伤财，不害民。",
      "affairs": "宜制数度议德行，节度有方，不宜苦节",
      "career": "利于节度有方，适度而行，吉",
      "marriage": "宜节度有礼，不宜过分约束",
      "health": "宜节制饮食，适度养生",
      "cultivation": "制数度，议德行，甘节安节"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阴",
      "阴",
      "阳",
      "阴"
    ],
    "symbol": "☵☱"
  },
  {
    "id": 61,
    "name": "中孚",
    "fullName": "风泽中孚",
    "upperGua": "巽",
    "lowerGua": "兑",
    "tianJi": {
      "nature": "泽上有风",
      "virtue": "中孚诚信",
      "xiangCi": "泽上有风，中孚，君子以议狱缓死",
      "season": "春分前后，风行泽上",
      "wuXing": "木金",
      "astro": "风泽之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西南东南",
        "houTian": "东南西"
      },
      "geography": "泽上有风、诚信之地",
      "heLuoNumber": {
        "xianTian": "5/2",
        "houTian": "4/7"
      },
      "naJia": "上巽纳辛，下兑纳丁",
      "region": "东南方、风泽之地",
      "fengShui": "宜诚信感物，宜议狱缓死"
    },
    "renJi": {
      "guaCi": "中孚：豚鱼吉，利涉大川，利贞",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "虞吉，有它不燕",
          "interpret": "虞吉，有它不燕。"
        },
        {
          "yao": "九二",
          "text": "鸣鹤在阴，其子和之。我有好爵，吾与尔靡之",
          "interpret": "鸣鹤在阴，其子和之。我有好爵，吾与尔靡之。"
        },
        {
          "yao": "六三",
          "text": "得敌，或鼓或罢，或泣或歌",
          "interpret": "得敌，或鼓或罢，或泣或歌。"
        },
        {
          "yao": "六四",
          "text": "月几望，马匹亡，无咎",
          "interpret": "月几望，马匹亡，无咎。"
        },
        {
          "yao": "九五",
          "text": "有孚挛如，无咎",
          "interpret": "有孚挛如，无咎。"
        },
        {
          "yao": "上九",
          "text": "翰音登于天，贞凶",
          "interpret": "翰音登于天，贞凶。"
        }
      ],
      "tuanCi": "中孚，柔在内而刚得中。说而巽，孚乃化邦也。豚鱼吉，信及豚鱼也。利涉大川，乘木舟虚也。中孚以利贞，乃应乎天也。",
      "affairs": "宜诚信感物，议狱缓死，不宜虚伪",
      "career": "利于诚信立业，感化人心，大吉",
      "marriage": "宜诚信相待，天作之合",
      "health": "宜心诚气和，真诚待人",
      "cultivation": "议狱缓死，信及豚鱼，诚信化邦"
    },
    "yaoLines": [
      "阳",
      "阳",
      "阴",
      "阴",
      "阳",
      "阳"
    ],
    "symbol": "☴☱"
  },
  {
    "id": 62,
    "name": "小过",
    "fullName": "雷山小过",
    "upperGua": "震",
    "lowerGua": "艮",
    "tianJi": {
      "nature": "山上有雷",
      "virtue": "小过",
      "xiangCi": "山上有雷，小过，君子以行过乎恭，丧过乎哀，用过乎俭",
      "season": "立春前后，雷动山上",
      "wuXing": "木土",
      "astro": "雷山之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东北西北",
        "houTian": "东东北"
      },
      "geography": "山上有雷、小过之地",
      "heLuoNumber": {
        "xianTian": "4/7",
        "houTian": "3/8"
      },
      "naJia": "上震纳庚，下艮纳丙",
      "region": "东方、山雷之地",
      "fengShui": "宜小有过越，宜恭哀俭"
    },
    "renJi": {
      "guaCi": "小过：亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "飞鸟以凶",
          "interpret": "飞鸟以凶。"
        },
        {
          "yao": "六二",
          "text": "过其祖，遇其妣，不及其君，遇其臣，无咎",
          "interpret": "过其祖，遇其妣，不及其君，遇其臣，无咎。"
        },
        {
          "yao": "九三",
          "text": "弗过防之，从或戕之，凶",
          "interpret": "弗过防之，从或戕之，凶。"
        },
        {
          "yao": "九四",
          "text": "无咎，弗过遇之，往厉必戒，勿用永贞",
          "interpret": "无咎，弗过遇之，往厉必戒，勿用永贞。"
        },
        {
          "yao": "六五",
          "text": "密云不雨，自我西郊，公弋取彼在穴",
          "interpret": "密云不雨，自我西郊，公弋取彼在穴。"
        },
        {
          "yao": "上六",
          "text": "弗遇过之，飞鸟离之，凶，是谓灾眚",
          "interpret": "弗遇过之，飞鸟离之，凶，是谓灾眚。"
        }
      ],
      "tuanCi": "小过，小者过而亨也。过以利贞，与时行也。柔得中，是以小事吉也；刚失位而不中，是以不可大事也。有飞鸟之象焉，飞鸟遗之音，不宜上宜下，大吉，上逆而下顺也。",
      "affairs": "宜小有过越，行恭丧哀用俭，不宜大事",
      "career": "利于小事，不可大事，宜低调",
      "marriage": "宜小有过越，恭俭为吉",
      "health": "注意肝、脾，宜谦逊节制",
      "cultivation": "行过乎恭，丧过乎哀，用过乎俭"
    },
    "yaoLines": [
      "阴",
      "阴",
      "阳",
      "阳",
      "阴",
      "阴"
    ],
    "symbol": "☳☶"
  },
  {
    "id": 63,
    "name": "既济",
    "fullName": "水火既济",
    "upperGua": "坎",
    "lowerGua": "离",
    "tianJi": {
      "nature": "水在火上",
      "virtue": "既济",
      "xiangCi": "水在火上，既济，君子以思患而预防之",
      "season": "冬至前后，水火相交",
      "wuXing": "水火",
      "astro": "水火之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "西东",
        "houTian": "北南"
      },
      "geography": "水在火上、既济之地",
      "heLuoNumber": {
        "xianTian": "6/3",
        "houTian": "1/9"
      },
      "naJia": "上坎纳戊，下离纳己",
      "region": "北方、水火之地",
      "fengShui": "宜思患预防，宜水火既济"
    },
    "renJi": {
      "guaCi": "既济：亨小，利贞，初吉终乱",
      "yaoCi": [
        {
          "yao": "初九",
          "text": "曳其轮，濡其尾，无咎",
          "interpret": "曳其轮，濡其尾，无咎。"
        },
        {
          "yao": "六二",
          "text": "妇丧其茀，勿逐，七日得",
          "interpret": "妇丧其茀，勿逐，七日得。"
        },
        {
          "yao": "九三",
          "text": "高宗伐鬼方，三年克之，小人勿用",
          "interpret": "高宗伐鬼方，三年克之，小人勿用。"
        },
        {
          "yao": "六四",
          "text": "繻有衣袽，终日戒",
          "interpret": "繻有衣袽，终日戒。"
        },
        {
          "yao": "九五",
          "text": "东邻杀牛，不如西邻之禴祭，实受其福",
          "interpret": "东邻杀牛，不如西邻之禴祭，实受其福。"
        },
        {
          "yao": "上六",
          "text": "濡其首，厉",
          "interpret": "濡其首，厉。"
        }
      ],
      "tuanCi": "既济亨，小者亨也。利贞，刚柔正而位当也。初吉，柔得中也。终止则乱，其道穷也。",
      "affairs": "宜思患预防，既济守成，不宜懈怠",
      "career": "事业已成，宜守成防患，初吉终乱",
      "marriage": "已成眷属，宜珍惜守成",
      "health": "水火既济，宜保持平衡",
      "cultivation": "思患而预防之，刚柔正而位当"
    },
    "yaoLines": [
      "阳",
      "阴",
      "阳",
      "阴",
      "阳",
      "阴"
    ],
    "symbol": "☵☲"
  },
  {
    "id": 64,
    "name": "未济",
    "fullName": "火水未济",
    "upperGua": "离",
    "lowerGua": "坎",
    "tianJi": {
      "nature": "火在水上",
      "virtue": "未济",
      "xiangCi": "火在水上，未济，君子以慎辨物居方",
      "season": "夏至前后，火水未交",
      "wuXing": "火水",
      "astro": "火水之象"
    },
    "diJi": {
      "direction": {
        "xianTian": "东西",
        "houTian": "南北"
      },
      "geography": "火在水上、未济之地",
      "heLuoNumber": {
        "xianTian": "3/6",
        "houTian": "9/1"
      },
      "naJia": "上离纳己，下坎纳戊",
      "region": "南方、火水之地",
      "fengShui": "宜慎辨物居方，宜未济求济"
    },
    "renJi": {
      "guaCi": "未济：亨，小狐汔济，濡其尾，无攸利",
      "yaoCi": [
        {
          "yao": "初六",
          "text": "濡其尾，吝",
          "interpret": "濡其尾，吝。"
        },
        {
          "yao": "九二",
          "text": "曳其轮，贞吉",
          "interpret": "曳其轮，贞吉。"
        },
        {
          "yao": "六三",
          "text": "未济，征凶，利涉大川",
          "interpret": "未济，征凶，利涉大川。"
        },
        {
          "yao": "九四",
          "text": "贞吉悔亡，震用伐鬼方，三年有赏于大国",
          "interpret": "贞吉悔亡，震用伐鬼方，三年有赏于大国。"
        },
        {
          "yao": "六五",
          "text": "贞吉无悔，君子之光，有孚吉",
          "interpret": "贞吉无悔，君子之光，有孚吉。"
        },
        {
          "yao": "上九",
          "text": "有孚于饮酒，无咎，濡其首，有孚失是",
          "interpret": "有孚于饮酒，无咎，濡其首，有孚失是。"
        }
      ],
      "tuanCi": "未济亨，柔得中也。小狐汔济，未出中也。濡其尾无攸利，不续终也。虽不当位，刚柔应也。",
      "affairs": "宜慎辨物居方，未济求济，不宜半途而废",
      "career": "事业未成，宜坚持到底，终能成功",
      "marriage": "尚未完成，宜坚持努力",
      "health": "水火未济，宜调和阴阳",
      "cultivation": "慎辨物居方，未济求济，刚柔应也"
    },
    "yaoLines": [
      "阴",
      "阳",
      "阴",
      "阳",
      "阴",
      "阳"
    ],
    "symbol": "☲☵"
  }
];

// 兼容 CommonJS 和浏览器全局
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GUA64_DATA;
}
if (typeof window !== 'undefined') {
    window.GUA64_DATA = GUA64_DATA;
}
