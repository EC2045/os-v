window.OSV_DATA = {
  meta: {
    title: "os^v語 公式ポータル",
    subtitle: "Object → Verb → Subject",
    description: "os^v語の文法・辞書・例文・翻訳・学習・文生成をまとめた公式サイトです。"
  },
  grammar: {
    word_order: {
      title: "語順",
      body: "os^v語の基本は O → V → S です。目的語、動詞、主語の順で文を組み立てます。",
      example: "nek glis^S ie"
    },
    tense: {
      title: "時制記号",
      body: "動詞の語尾に記号を付けて、時間の向きを表します。",
      items: [
        ["^S", "現在 / 標準"],
        ["^P", "過去"],
        ["^F", "未来"],
        ["^C", "継続"]
      ]
    },
    plural: {
      title: "複数形",
      body: "名詞の末尾に ; を付けると複数を表します。 ; のあとに数字を付けて、具体的な数も表現できます。",
      example: "ziva; / ie;3"
    },
    sentence_modes: {
      title: "文の性質",
      body: "文頭や記号で、否定・疑問・感嘆・条件を表します。",
      items: [
        ["nlot", "否定"],
        ["^?", "疑問"],
        ["^!", "感嘆"],
        ["ifx", "条件"]
      ]
    }
  },
  examples: [
    {
      ja: "猫を愛する私は。",
      osv: "nek glis^S ie",
      note: "基本形の例。OSVの順に並びます。"
    },
    {
      ja: "人々は秘密を知らない。",
      osv: "nlot zwrath xnor^S morn",
      note: "nlot を先頭に置いた否定文です。"
    },
    {
      ja: "これは本当ですか？",
      osv: "^? thlornv be^S kox ^?",
      note: "^? で文全体を囲んだ疑問文です。"
    },
    {
      ja: "魂が深淵へ堕ちる！",
      osv: "^! vothx fallyn^S enxa ^!",
      note: "^! を使った感嘆文です。"
    }
  ],
  files: [
    ["index.html", "入口ページ"],
    ["portal.html", "統括ポータル"],
    ["dictionary.html", "辞書ページ"],
    ["grammar.html", "文法ページ"],
    ["phrases.html", "例文ページ"],
    ["translator.html", "翻訳ページ"],
    ["learning.html", "学習ページ"],
    ["builder.html", "文生成ページ"],
    ["style.css", "共通デザイン"],
    ["js/data.js", "語彙データ"],
    ["js/app.js", "共通ロジック"],
    ["README.md", "案内文書"]
  ],
  categories: [
    {
      name: "代名詞・集合",
      items: [
        { jp: "私", osv: "ie" }, { jp: "私たち", osv: "iel" }, { jp: "彼", osv: "de" }, { jp: "彼女", osv: "ke" },
        { jp: "あなた", osv: "nu" }, { jp: "あなたたち", osv: "nul" }, { jp: "彼ら", osv: "dern" }, { jp: "これ", osv: "kox" },
        { jp: "それ", osv: "sox" }, { jp: "あれ", osv: "xax" }, { jp: "誰", osv: "wenu" }, { jp: "誰か", osv: "somun" },
        { jp: "どこか", osv: "somwa" }, { jp: "どこでも", osv: "alwa" }, { jp: "いつでも", osv: "altim" }, { jp: "何もかも", osv: "alvoth" },
        { jp: "自分自身", osv: "selv" }, { jp: "皆 / 人々", osv: "morn" }
      ]
    },
    {
      name: "人間",
      items: [
        { jp: "人 / 人間", osv: "hume" }, { jp: "少年", osv: "bryn" }, { jp: "少女", osv: "lyne" }, { jp: "友達", osv: "fren" },
        { jp: "先生", osv: "tely" }, { jp: "学生", osv: "scal" }, { jp: "旅人", osv: "trav" }, { jp: "王", osv: "kron" }, { jp: "女王", osv: "krona" }
      ]
    },
    {
      name: "自然・宇宙",
      items: [
        { jp: "水", osv: "thran" }, { jp: "星 / 光", osv: "ziva" }, { jp: "風", osv: "vaul" }, { jp: "影", osv: "xnal" },
        { jp: "大地", osv: "grorn" }, { jp: "火", osv: "pyrth" }, { jp: "森", osv: "zylnd" }, { jp: "花", osv: "floth" },
        { jp: "雷", osv: "qrast" }, { jp: "月", osv: "lunyv" }, { jp: "太陽", osv: "sorth" }, { jp: "空", osv: "aerx" },
        { jp: "海", osv: "marx" }, { jp: "山", osv: "mont" }, { jp: "川", osv: "rivn" }, { jp: "雲", osv: "clov" },
        { jp: "雨", osv: "rayn" }, { jp: "雪", osv: "snov" }, { jp: "嵐", osv: "storm" }, { jp: "土", osv: "terx" },
        { jp: "石", osv: "ston" }, { jp: "木", osv: "arbr" }, { jp: "葉", osv: "leaf" }, { jp: "根", osv: "root" },
        { jp: "種", osv: "semd" }, { jp: "花びら", osv: "peta" }, { jp: "炎", osv: "flar" }, { jp: "氷", osv: "fros" },
        { jp: "霧", osv: "mirk" }, { jp: "砂", osv: "sand" }, { jp: "砂漠", osv: "desa" }, { jp: "洞窟", osv: "cavx" },
        { jp: "島", osv: "isla" }, { jp: "宇宙", osv: "kosm" }, { jp: "銀河", osv: "galx" }, { jp: "空気", osv: "airx" },
        { jp: "色", osv: "colo" }, { jp: "庭", osv: "gard" }
      ]
    },
    {
      name: "抽象・精神",
      items: [
        { jp: "生命", osv: "vita" }, { jp: "死", osv: "mort" }, { jp: "夢", osv: "nyol" }, { jp: "記憶", osv: "memo" },
        { jp: "記憶の欠片", osv: "vlothx" }, { jp: "秘密", osv: "zwrath" }, { jp: "嘘", osv: "vaxp" }, { jp: "真実", osv: "thlornv" },
        { jp: "魂", osv: "enxa" }, { jp: "時間", osv: "kronx" }, { jp: "名前", osv: "nomaq" }, { jp: "境界", osv: "flaxz" },
        { jp: "虚無", osv: "nullx" }, { jp: "祈り", osv: "thlynx" }, { jp: "永遠", osv: "qaxn" }, { jp: "運命", osv: "fatex" },
        { jp: "未来", osv: "futur" }, { jp: "過去", osv: "pastx" }, { jp: "現在", osv: "nowx" }, { jp: "意識", osv: "conx" },
        { jp: "無意識", osv: "uncon" }, { jp: "心 / 精神", osv: "mind" }, { jp: "感情", osv: "emot" }, { jp: "希望", osv: "hopen" },
        { jp: "恐れ", osv: "fearx" }, { jp: "勇気", osv: "cora" }, { jp: "静寂", osv: "silv" }, { jp: "混沌", osv: "chaon" },
        { jp: "秩序", osv: "ordx" }, { jp: "知識", osv: "gnos" }, { jp: "言葉", osv: "wordx" }, { jp: "記号", osv: "symb" },
        { jp: "法則", osv: "lawx" }, { jp: "場所", osv: "plac" }, { jp: "世界", osv: "worl" }, { jp: "国", osv: "natio" },
        { jp: "文明", osv: "civx" }, { jp: "歴史", osv: "histx" }, { jp: "物語", osv: "story" }, { jp: "伝説", osv: "lege" },
        { jp: "神話", osv: "myth" }, { jp: "魔法", osv: "magi" }, { jp: "絶望", osv: "desp" }, { jp: "力 / パワー", osv: "powx" },
        { jp: "平和", osv: "peac" }, { jp: "戦争", osv: "warx" }
      ]
    },
    {
      name: "日常・生活",
      items: [
        { jp: "門", osv: "gate" }, { jp: "扉", osv: "vork" }, { jp: "窓", osv: "winx" }, { jp: "鍵", osv: "klav" },
        { jp: "家", osv: "mwel" }, { jp: "学校", osv: "scod" }, { jp: "本", osv: "glom" }, { jp: "道", osv: "frax" },
        { jp: "鏡", osv: "mriz" }, { jp: "刃", osv: "skatx" }, { jp: "船", osv: "vessl" }, { jp: "椅子", osv: "stul" },
        { jp: "机", osv: "desk" }, { jp: "部屋", osv: "room" }, { jp: "街", osv: "city" }, { jp: "橋", osv: "brid" },
        { jp: "塔", osv: "towl" }, { jp: "階段", osv: "steps" }, { jp: "箱", osv: "boxx" }, { jp: "紙", osv: "papr" },
        { jp: "鉛筆", osv: "penc" }, { jp: "時計", osv: "clox" }, { jp: "衣服 / 洋服", osv: "cloth" }, { jp: "鞄 / バッグ", osv: "bagu" },
        { jp: "お金", osv: "moni" }, { jp: "本棚", osv: "shlv" }, { jp: "朝", osv: "mornx" }, { jp: "昼", osv: "noon" },
        { jp: "夜", osv: "nytx" }, { jp: "今日", osv: "toda" }, { jp: "明日", osv: "tomo" }, { jp: "昨日", osv: "yest" },
        { jp: "御飯 / コメ", osv: "rice" }, { jp: "パン", osv: "panx" }, { jp: "肉", osv: "meat" }, { jp: "野菜", osv: "vege" },
        { jp: "果物", osv: "frut" }, { jp: "頭", osv: "head" }, { jp: "心臓 / 身体の心", osv: "hart" }, { jp: "手", osv: "hand" },
        { jp: "足", osv: "foot" }, { jp: "目", osv: "eyex" }, { jp: "Tシャツ", osv: "tixa" }, { jp: "靴", osv: "klen" }
      ]
    },
    {
      name: "技術・システム",
      items: [
        { jp: "端末", osv: "termx" }, { jp: "画面", osv: "scre" }, { jp: "光源", osv: "lumx" }, { jp: "エネルギー", osv: "ener" },
        { jp: "データ", osv: "datax" }, { jp: "信号", osv: "signx" }, { jp: "回路", osv: "cirx" }, { jp: "装置", osv: "devx" },
        { jp: "機械", osv: "mach" }, { jp: "コード", osv: "codx" }, { jp: "ネット", osv: "netx" }, { jp: "電気", osv: "elec" },
        { jp: "ロボット", osv: "rbot" }, { jp: "未来都市", osv: "futurcity" }, { jp: "電話 / 機器", osv: "telv / phon" }
      ]
    },
    {
      name: "動詞",
      items: [
        { jp: "ある / する / 存在する", osv: "be" }, { jp: "愛する", osv: "glis" }, { jp: "知る", osv: "xnor" }, { jp: "見る", osv: "vriz" },
        { jp: "聞く", osv: "harn / sona" }, { jp: "話す", osv: "kwel / laxa" }, { jp: "書く", osv: "scry" }, { jp: "読む", osv: "lire" },
        { jp: "作る / 創造する", osv: "stak" }, { jp: "壊す", osv: "brak" }, { jp: "忘れる", osv: "drax" }, { jp: "思い出す / 覚える", osv: "remx" },
        { jp: "食べる", osv: "glath / graxa" }, { jp: "飲む", osv: "dron / drix" }, { jp: "笑う", osv: "hlim" }, { jp: "泣く", osv: "cryn" },
        { jp: "死ぬ", osv: "mortx" }, { jp: "飛ぶ", osv: "vlim" }, { jp: "歩く", osv: "trax" }, { jp: "走る", osv: "runn" },
        { jp: "来る", osv: "come / nexa" }, { jp: "行く", osv: "gox" }, { jp: "待つ", osv: "vwaitx" }, { jp: "堕ちる", osv: "fallyn" },
        { jp: "響く", osv: "zornx" }, { jp: "祈る", osv: "thlyn" }, { jp: "眠る / 寝る", osv: "dwon" }, { jp: "起きる", osv: "wake" },
        { jp: "歌う", osv: "kluvn" }, { jp: "踊る", osv: "danc" }, { jp: "戦う", osv: "zorg" }, { jp: "守る", osv: "shild" },
        { jp: "追う", osv: "chas" }, { jp: "逃げる", osv: "flee" }, { jp: "開く", osv: "open" }, { jp: "閉じる", osv: "shut" },
        { jp: "持つ", osv: "hold" }, { jp: "取る", osv: "take" }, { jp: "置く", osv: "placv" }, { jp: "与える", osv: "givr" },
        { jp: "受け取る", osv: "recv" }, { jp: "作動する", osv: "actv" }, { jp: "繋ぐ", osv: "link" }, { jp: "切る", osv: "cutx" },
        { jp: "回す", osv: "turn" }, { jp: "変える", osv: "change" }, { jp: "測る", osv: "meas" }, { jp: "問う", osv: "askx" },
        { jp: "答える", osv: "ansr" }, { jp: "集める", osv: "gath" }, { jp: "分ける", osv: "split" }, { jp: "始める", osv: "begn" },
        { jp: "終わる", osv: "endx" }, { jp: "増える", osv: "grow" }, { jp: "減る", osv: "less" }, { jp: "輝く", osv: "shyn" },
        { jp: "消える", osv: "vanx" }, { jp: "変形する", osv: "morph" }, { jp: "理解する", osv: "under" }, { jp: "学ぶ", osv: "lear" },
        { jp: "信じる", osv: "beli" }, { jp: "怒る", osv: "vexa" }, { jp: "買う", osv: "buyv" }, { jp: "売る", osv: "sell" },
        { jp: "急ぐ", osv: "hurr" }, { jp: "滅びる", osv: "Derrisg" }, { jp: "滅びない", osv: "Derrisgit" }
      ]
    },
    {
      name: "形容詞",
      items: [
        { jp: "美しい", osv: "fliva" }, { jp: "冷たい", osv: "kryl" }, { jp: "速い", osv: "zost" }, { jp: "遅い", osv: "slow" },
        { jp: "赤い", osv: "rosh" }, { jp: "青い", osv: "blay" }, { jp: "白い", osv: "whit" }, { jp: "黒い", osv: "blak" },
        { jp: "静かな", osv: "shlyn" }, { jp: "暗い", osv: "xorn" }, { jp: "輝かしい", osv: "zivax" }, { jp: "残酷な", osv: "vraz" },
        { jp: "遠い", osv: "distx" }, { jp: "脆い", osv: "frazl" }, { jp: "透明な", osv: "glax" }, { jp: "重い", osv: "gravx" },
        { jp: "軽い", osv: "light" }, { jp: "広い", osv: "wide" }, { jp: "狭い", osv: "narr" }, { jp: "高い", osv: "high" },
        { jp: "低い", osv: "lowx" }, { jp: "新しい", osv: "newx" }, { jp: "古い", osv: "oldx" }, { jp: "温かい", osv: "warm" },
        { jp: "優しい", osv: "kind" }, { jp: "危険な", osv: "danger" }, { jp: "不思議な", osv: "myst" }, { jp: "神秘的な", osv: "mystr" },
        { jp: "柔らかい", osv: "soft" }, { jp: "硬い", osv: "hardx" }, { jp: "深い", osv: "deep" }, { jp: "浅い", osv: "shal" },
        { jp: "長い", osv: "longx" }, { jp: "短い", osv: "shor" }, { jp: "明るい", osv: "brgt" }, { jp: "楽しい", osv: "yoro" },
        { jp: "悲しい", osv: "sora" }, { jp: "眠い", osv: "drom" }, { jp: "醜い", osv: "ugly" }, { jp: "幸せな", osv: "hapy" },
        { jp: "怒った", osv: "angr" }, { jp: "うるさい", osv: "nois" }, { jp: "安い", osv: "chep" }
      ]
    },
    {
      name: "副詞・関係",
      items: [
        { jp: "とても", osv: "very" }, { jp: "少し", osv: "slit" }, { jp: "かなり", osv: "quite" }, { jp: "すぐ", osv: "soon" },
        { jp: "まだ", osv: "yetx" }, { jp: "すでに", osv: "alrd" }, { jp: "いつも", osv: "alw" }, { jp: "たまに", osv: "somet" },
        { jp: "ゆっくり", osv: "slowl" }, { jp: "速く", osv: "quick" }, { jp: "そっと", osv: "softl" }, { jp: "大きく", osv: "loud" },
        { jp: "小さく", osv: "tiny" }, { jp: "なぜか", osv: "whyx" }, { jp: "完全に", osv: "fully" }, { jp: "と (接続詞)", osv: "andx" },
        { jp: "しかし", osv: "butx" }, { jp: "だから", osv: "there" }, { jp: "ので", osv: "becx" }, { jp: "もし", osv: "ifx" },
        { jp: "は (主題)", osv: "topic" }, { jp: "が (主格)", osv: "subj" }, { jp: "を (目的格)", osv: "objp" }, { jp: "に (与格)", osv: "topk" },
        { jp: "へ", osv: "towx" }, { jp: "で", osv: "locx" }, { jp: "の", osv: "ofx" }, { jp: "も", osv: "also" },
        { jp: "か (疑問)", osv: "qmark" }, { jp: "たぶん", osv: "maby" }, { jp: "絶対に", osv: "surx" }, { jp: "〜のために", osv: "forv" },
        { jp: "〜と一緒に", osv: "with" }
      ]
    },
    {
      name: "挨拶・返答",
      items: [
        { jp: "こんにちは", osv: "zave" }, { jp: "おはよう", osv: "mire" }, { jp: "こんばんは", osv: "noxe" }, { jp: "ありがとう", osv: "vare" },
        { jp: "ごめん", osv: "drex" }, { jp: "さようなら", osv: "faro" }, { jp: "またね", osv: "melo" }, { jp: "はい", osv: "ye" },
        { jp: "いいえ", osv: "noe" }, { jp: "OK", osv: "oka" }, { jp: "NO", osv: "noa" }
      ]
    },
    {
      name: "動物",
      items: [
        { jp: "猫", osv: "nek" }, { jp: "犬", osv: "vark" }, { jp: "鳥", osv: "zeln" }, { jp: "魚", osv: "krox" },
        { jp: "狐", osv: "lix" }, { jp: "狼", osv: "vorx" }, { jp: "熊", osv: "grun" }, { jp: "蛇", osv: "snax" }, { jp: "狸", osv: "bloof" }
      ]
    }
  ]
};