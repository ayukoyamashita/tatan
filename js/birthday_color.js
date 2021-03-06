var birthday_color = {
	'0101': ['純白', '#FFFFE5', '純粋・優雅・シンプル', '心の美しい最高の女性'],
	'0102': ['フロスティホワイト', '#E6EAE6', '感性・論理・清浄', '美学的な思索のとりこ'],
	'0103': ['シルバーグレイ', '#AFAFB0', '勇気・バランス・経営力', '気高い心の持ち主'],
	'0104': ['アルミニウムグレイ', '#8D9192', '明るさ・エネルギー', '恐れを知らぬ明るい挑戦者'],
	'0105': ['スチールグレイ', '#736D71', '直観力・洞察力・潜在力', '機転のきくしっかり者'],
	'0106': ['葡萄鼠', '#705B67', '倫理・スピード・冒険心', 'ドラマチックな生活の実践者'],
	'0107': ['漆黒', '#0D0015', '情熱・才能・想像力', 'チャレンジする発想豊かな情熱家'],
	'0108': ['シトロンイエロー', '#B8C43A', '宗教的感情・宇宙的構想', '自然を愛する叙情家'],
	'0109': ['苔色', '#69821B', '神秘性・想像力', '人の温かさを感じられる人'],
	'0110': ['草色', '#7B8D42', '英知・芸術・洗練', '広大な感情世界の持ち主'],
	'0111': ['ミストグリーン', '#BDD99F', '努力・才能・勇気', '新時代をつくる理想的な人'],
	'0112': ['白緑', '#D6E9CA', '気品・外交・洞察力', '思いきりのいいチャレンジャー'],
	'0113': ['パロットグリーン', '#37A34A', '行動力・謙遜・冷静沈着', '自分の生き方を持つ自立者'],
	'0114': ['グラスグリーン', '#7B8D42', '感性・ユーモア・熟成', '感情の成熟を待つ芸術家'],
	'0115': ['深緑', '#00552E', '信条・模範・慈愛', '星の輝きのような瞳の持ち主'],
	'0116': ['ホワイトリリー', '#F0F6DA', '大胆・想像力・信念', '自然を愛する実践家'],
	'0117': ['萌黄色', '#006E54', '生活・指導力・微笑み', '度胸と好奇心のある美食家'],
	'0118': ['フォーリッジ', '#47744B', '誠実・洗練・謙虚', '純粋さを保つ幼き者'],
	'0119': ['リーフグリーン', '#9FC24D', '優しさ・自尊心・精神性', '何ごとも一生懸命な努力家'],
	'0120': ['フォレストグリーン', '#288C66', 'エネルギー・自己投資', '理想像をはっきり持つ者'],
	'0121': ['空色', '#A0D8EF', '感性・可能性・芸術性', '美しいものを感じとる才能'],
	'0122': ['浅葱色', '#00A3AF', '幸福・愛・友情', '思いやりのある人'],
	'0123': ['露草', '#38A1DB', '若々しさ・情緒・集中力', '平和で静穏な心の持ち主'],
	'0124': ['鴨の羽色', '#00688B', '頭脳明晰・誠実・感受性', '楽しい夢に向う楽天家'],
	'0125': ['濃藍', '#0F2350', '理想・現実・新生活', 'スムーズな生活ができる人'],
	'0126': ['クリーム', '#E3D7A3', '豊かな表情・組織・機知', '太陽のような個性の持ち主'],
	'0127': ['ペールレモン', '#FEF400', '着こなし・神秘的な眼', 'あか抜けた雰囲気な者'],
	'0128': ['タンポポ色', '#FFD900', '冒険・明るさ・好奇心', '生まれながらの楽天家'],
	'0129': ['若草色', '#C3D825', '運動神経・知覚力・名誉', '並はずれた説得力のある者'],
	'0130': ['メドーグリーン', '#529C47', 'あふれる愛・動物好き', '動植物と相性のいい者'],
	'0131': ['若芽', '#E0EBAF', '感傷的・順応・礼儀', '傷つきやすいロマンチスト'],
	'0201': ['コーンフラワーブルー', '#3F4E93', '文化的・社会的', '社会的にも特に認められた芸術家'],
	'0202': ['若紫', '#BC64A4', '想像力・敬慕・直観力', '人とはっきり差をつける個性派'],
	'0203': ['ディープローヤルブルー', '#21297E', '直観力・はにかみ・威厳', '己の価値を知る生来のプリンセス'],
	'0204': ['紅藤色', '#CCA6BF', '感性・才気煥発・外向性', '人と違う自分でいたい個性派'],
	'0205': ['パンジーパープル', '#50347E', '教的・詩的・神秘と夢幻', '進む道を知る霊感の持ち主'],
	'0206': ['ペールライラック', '#DEBDD8', '家庭・表現力・気高さ', '人を感動させる力を秘めた人'],
	'0207': ['モーベット', '#B269A1', '自主性・天才・感性', 'ひたむきで使命感のある期待の星'],
	'0208': ['バーガンディー', '#6C2735', '情熱・愛嬌・思慮深さ', 'ものまね上手な可愛いいたずら者'],
	'0209': ['フクシャパープル', '#EA4A6E', '国際感覚・活発・指導者', '活躍する人間・味あふれる熱血漢'],
	'0210': ['ローズレッド', '#EA618E', '愛情・感受性・知性', '人を助けて励ます優しい人'],
	'0211': ['紅色', '#D3336F', '開放的・単純明快・表現', '何ごとにも心から喜べる素直な人'],
	'0212': ['カーミン', '#D5345E', '外交的・情熱・激しさ', 'もの静かでも積極的な行動派'],
	'0213': ['うぐいす色', '#585B54', '家庭・几帳面・向上心', '己の価値観を大切に育む芸術家'],
	'0214': ['海松色', '#726D40', '二律背反・誠実・気品', '都会的なセンスを備えた人'],
	'0215': ['勿忘草色', '#89C3EB', '友情・平和・調和', '行動前に２度考える慎重派'],
	'0216': ['スモークブルー', '#A4C1D7', '謙虚・堅実・克己心', '常に自分を高めようとする努力家'],
	'0217': ['スマルト', '#4C5E74', '根気・完全主義・品格', '物事にのめり込む熱中タイプ'],
	'0218': ['チョコレート', '#6C3524', '不屈・閃き・自己正当化', '自分の考えの正しさを主張できる人'],
	'0219': ['紺色', '#223A70', '大器・指導者・感性', '自分が向かっている道を知る識者'],
	'0220': ['鳥の子色', '#FFF1CF', '魅惑・個性・節度', '独創的なセンスを持つ個性派'],
	'0221': ['ライムライト', '#FFF799', '魅惑・個性・節度', '強烈な個性と主張を持つ人'],
	'0222': ['鬱金色', '#FABF14', '感性・楽しい・芸術', '楽しく目新しさを追求する楽天家'],
	'0223': ['菜の花色', '#FFEC47', '人道主義・不言実行', '人々に歓喜を起こさせる行動派'],
	'0224': ['リードグリーン', '#D8E2AE', 'リラックス・社交的', 'いつも希望を抱きながら前進する人'],
	'0225': ['ミストホワイト', '#E5E8E1', '目的・感銘・名誉', 'ねばり強さで目的をとげる努力家'],
	'0226': ['裏葉色', '#BECEBC', '円満・努力・正確', '難問にも全力を傾ける挑戦者'],
	'0227': ['柳茶', '#A1A46D', '楽しい・大雑把・開放', 'しきたりに束縛されない人気者'],
	'0228': ['オリーブグリーン', '#5F6527', '感性・堅実・優雅', '人との交流を大切にする人'],
	'0229': ['アイビーグリーン', '#578A3D', '道徳・知能・構想', '友だちの面倒をよくみる人'],
	'0301': ['一斤染', '#F5B199', '責任感・気配り・優しさ', '人を活気づけてくれる元気者'],
	'0302': ['ベビーピンク', '#FDEDE4', '理想・家庭的・包容力', '幸せな家庭を彷彿とさせる人'],
	'0303': ['鴇色', '#F4B3C2', '恋愛・礼儀・艶やか', '愛されていると美しく輝く人'],
	'0304': ['ポピーレッド', '#EA5550', '主役・高尚・敏感', '平均的では満足しない人'],
	'0305': ['チェリーレッド', '#CF0125', '現実主義・感性・情熱', '現実的な考え方をするしっかり者'],
	'0306': ['桜色', '#FEF4F4', '愛情・思いやり・健全', '人を感動させる力を秘めた人'],
	'0307': ['サーモンピンク', '#F3A68C', '優しさ・気づかい・感性', '人の幸せを心から願える人格者'],
	'0308': ['紅梅色', '#F2A0A1', '愛情・安定・女性らしさ', '愛に満ちあふれた女らしい人'],
	'0309': ['珊瑚色', '#F5B1AA', '意欲・勇猛・外交的', '憧れを実現しようと試みる行動派'],
	'0310': ['シグナルレッド', '#E8383D', '持続力・指導者', '多くの分野で活躍する元気者'],
	'0311': ['砥粉色', '#F4DDA5', '慈悲深さ・情熱・手際よさ', '温かく寛大な心の持ち主'],
	'0312': ['オレンジバーミリオン', '#E65454', '無邪気・感性・純粋', '人を正しい方向に導く天使'],
	'0313': ['柿色', '#ED6D3D', '健やか・組織力・大望', '健やかさをアピールする元気者'],
	'0314': ['スカーレッド', '#E23620', 'エネルギー・明朗・情熱', '華やかで活気に満ちた行動派'],
	'0315': ['ルージュ', '#D11C1E', '活発・健康・外向性', '自発的に行動を起こす情熱家'],
	'0316': ['薄紅藤', '#D2A4C8', '直観力・精神高揚・気高さ', '心も体も女性らしい素直な人'],
	'0317': ['モーブ', '#915DA3', '想像力・センス・魅惑的', '次々と新しい物を創り出す創造者'],
	'0318': ['カンパヌラパープル', '#985B9E', '鋭敏・神秘的・高貴', 'あらゆるものに敏感な神秘的な人'],
	'0319': ['ビオレ', '#581074', '落ち着き・健康・安定感', '湖のように心が静かで美しい人'],
	'0320': ['古代紫', '#895B8A', '落ち着き・品位・高貴', 'いつも冷静に物事を判断できる人'],
	'0321': ['ペールオーキッド', '#AAA7D0', '天賦の才・神秘的・無関係', '周囲の環境を美しく変える人'],
	'0322': ['ディープモーベット', '#BA64A0', '品格・デリケート・控えめ', 'どこでも誰からも好かれる人気者'],
	'0323': ['江戸紫', '#745399', '安定・洗練・芸術的才能', 'けっして思い上がらない品格者'],
	'0324': ['マロー', '#934491', '直感的・高尚・主観的', '心の友人を求めるロマンチス'],
	'0325': ['ワインレッド', '#B33E5C', '主役の風格・個性・自信', '直観力と威厳で名を馳せる芸術家'],
	'0326': ['シルバーグリーン', '#CAE2C6', '可能性・行動力・明哲', '果敢に取り組む努力家'],
	'0327': ['オパールグリーン', '#BEE0CE', '美貌・陶冶・自己表現', '花の生命の広がりのように美しい人'],
	'0328': ['ペールアクア', '#A7D3CF', '感謝・教養・思いやり', '言葉から不思議な香りが漂う人'],
	'0329': ['スプレーグリーン', '#A3D3DD', '謙虚・生真面目・専門的', '複雑な問題もあっさり片づける人'],
	'0330': ['パステルブルー', '#49BDF0', 'トレンド・情熱と安らぎ', '創作力を培うロマンチスト'],
	'0331': ['ストロー', '#ECE093', '激励・感動・歓喜と悲哀', '自由に行動できるスポーツマン'],
	'0401': ['薄桜', '#FDEFF2', '洗練・友人・ほほえみ', '幸せな雰囲気を作るロマンチスト'],
	'0402': ['シェルピンク', '#FBDAC8', '詩的情緒・頭脳明晰・純粋', '天才的感性を備えた努力家'],
	'0403': ['フクシャピンク', '#F5A0BD', '思いやり・無邪気・想像力', 'トレンドを読む感覚にすぐれた人'],
	'0404': ['ディープオーキッドピンク', '#E383A4', '情緒・社交的・目標', '温かいもてなしに満ちた人'],
	'0405': ['青藤色', '#84A2D4', '人づきあい・情熱・洗練', 'すべてがお洒落なベストドレッサー'],
	'0406': ['チョークブルー', '#68A9CF', '無邪気・澄んだ視線・洗練', '現実から遊離して美しさを求める人'],
	'0407': ['白百合', '#F1F5DC', '多才・内向性・創意工夫', '興味を抱いて工夫する努力家'],
	'0408': ['薄緑色', '#69B076', '希望・用意周到・敬愛', 'ほのぼのとした存在感を漂わせる人'],
	'0409': ['支子色', '#FBCA4D', 'スポーツ感・流れる動作', '状況に応じて的確に行動できる人'],
	'0410': ['パンプキン', '#E5A323', '澄んだ瞳・清純・緻密', '若い世代の感性を究めた先駆者'],
	'0411': ['蒸栗色', '#ECDECF', '努力家・現実主義・陽気', '世事に通じた堅実な職人肌'],
	'0412': ['利休白茶', '#A29779', '伝統・技巧・主張', '伝統を重んじる技術ある自信家'],
	'0413': ['フロスティグレイ', '#E8ECE9', '楽観的・明るさ・哲学的', '豊富な生活経験を持つユーモア人'],
	'0414': ['鼠色', '#949495', '美貌・しなやか・思いやり', '人の魂を虜にする天女のような人'],
	'0415': ['ペールミストホワイト', '#D5DAD4', '中立不偏・保守的・伝統', '義理人情に厚く正義感に満ちた人'],
	'0416': ['スカイグレイ', '#CBD0D3', '穏健・快活・謙遜', '仕事をそつなくこなす穏健派'],
	'0417': ['バトルシップグレイ', '#898989', '実直・責任感・客観的', 'どんな障害にも動じない堅実派'],
	'0418': ['スレートグレイ', '#626063', '機知・誇り・良心', '喜びを得るために猛進する行動派'],
	'0419': ['消炭色', '#524E4D', '厳粛・誠実・技量', '洞察力と技量を兼ね備えた人'],
	'0420': ['若苗色', '#C7DC68', '規律・言葉づかい・愛情', '清らかでキラキラした感性の持ち主'],
	'0421': ['若菜色', '#D8E698', '温厚・誠意・感傷的', '常に率直な姿勢で臨む素直な人'],
	'0422': ['鸚緑', '#2AA74B', 'リーダーシップ・指導者', '働くことが好きな人'],
	'0423': ['葦葉色', '#88CB9D', '調和・順応・人間関係', '社会の信用を集めるしっかり者'],
	'0424': ['スプラウト', '#A3D49C', '優雅・優しさ・文学', '文学に心ひかれる優しい人'],
	'0425': ['エルブ', '#79C288', '繊細・スポーツ・時間', '仕事に手ごたえを感じる挑戦者'],
	'0426': ['ディープピーグリーン', '#79C266', '向上心・人の為・完成', '才能を磨くことを忘れない努力家'],
	'0427': ['エメラルドグリーン', '#00A968', '人生・経験・鍛錬', '夢を求め、挑戦する人'],
	'0428': ['ターコイズグリーン', '#00947A', '成熟・バランス・創意', '多様な計画を生み出すアイデアマン'],
	'0429': ['薄浅葱', '#00A6AF', 'ナイーブ・神秘性・癒し', 'ナイーブな心の持ち主'],
	'0430': ['アジュールブルー', '#00B2BC', '助け合い・行動・成長', '成長する人'],
	'0501': ['ターコイズ', '#009B9F', '機敏・叙情性', '誰からも愛される人気者'],
	'0502': ['マラカイトグリーン', '#009854', '情熱的・ユーモア・静寂', '社交的だが喧騒を嫌う自然派'],
	'0503': ['ティールグリーン', '#01686D', '大地・情緒的・牧歌的', '澄んだ小川に憧れる牧歌的な人'],
	'0504': ['小鴨色', '#014127', '再生能力・経営力・刷新力', '正々堂々としたキーパーソン'],
	'0505': ['水色', '#BCE2E8', '奔放・洞察・主役', '理念を形にできる芸術家'],
	'0506': ['フォゲットミーナットブルー', '#70C6F5', '直観・優しさ・アイデア', '才能を発揮する女性らしい人'],
	'0507': ['群青色', '#4C6CB3', '思慮深さ・規律・しなやか', '称賛を浴びるマドンナ'],
	'0508': ['千歳緑', '#316745', '丁寧・辛抱・謙遜', '熟考してから発言する慎重派'],
	'0509': ['パラキートグリーン', '#2CB232', '調和・バランス', '調和とバランスのとれた行動派'],
	'0510': ['エッグシェル', '#F5F6CA', '少女・感傷的・寛大', '戯れの恋に陥らないしっかり者'],
	'0511': ['レタスグリーン', '#D1DE4C', '挑戦・話好き', '失敗を覚悟で新しい事に挑戦する人'],
	'0512': ['シャルトルーズイエロー', '#E3E548', 'グルメ・社交的・田園的', '誠実な人柄と社交性が混在した人'],
	'0513': ['枯草色', '#E4DC8A', '理解力・アイデア', '自分の考えを適確に言葉にできる人'],
	'0514': ['オリーブ', '#72640C', '自然・優しさ', '花や草を育てる喜びを知る自然派'],
	'0515': ['コロニアルイエロー', '#D0C67C', '良心・向上心・体系化', '常に知識を蓄える向上心豊かな人'],
	'0516': ['ペールマスタード', '#A49627', '実直・細心・強情', '堅実でガンコな気質の名人肌'],
	'0517': ['ゴールデンオーカー', '#8D6F2F', '明敏・抜け目なさ・洞察', '自分の考えを曲げない頑固者'],
	'0518': ['オリーブ茶', '#464646', '適確な発言・学識・保守', '知識が充実した穏健派'],
	'0519': ['千歳茶', '#494A41', '中立・公平・バランス', 'どんな問題にも対応できる優れ者'],
	'0520': ['ディープアクア', '#8CCAB0', '感傷的・美しい容貌', 'センチメンタルな幸福の女神'],
	'0521': ['緑青色', '#47885E', '頭脳明晰・技巧・適応', '常に刺激や感動を求める前向きな人'],
	'0522': ['スプルースグリーン', '#036122', '律儀な働き者・バランス', '無償の愛情にあふれた人情家'],
	'0523': ['ボトルグリーン', '#034415', '自然・個性・寛容', '朗らかで人をとがめない心の広い人'],
	'0524': ['サイプレスグリーン', '#264939', '調和・気配り・まとめ役', 'みんなから信頼を集めるあねご肌'],
	'0525': ['ネープルズイエロー', '#FACE9D', '朗らか・順風満帆', '面倒見がよく人に慕われる人気者'],
	'0526': ['マリーゴールドイエロー', '#F9CC77', '生命力・情緒的・情熱', '太陽のように陽気な健康美の麗人'],
	'0527': ['山吹色', '#F8B500', '逞しさ・英知・解放', '陽気で温かく、自由を愛する人'],
	'0528': ['オールドゴールド', '#B36029', '伝統継承・観察力', '仕事を楽しめるしっかり者'],
	'0529': ['コーヒーブラウン', '#7A5347', '規律・模範・自信', '常に向上できる技量を持った人'],
	'0530': ['灰桜', '#E8D3D1', 'ロマンチスト・知識', '優雅で洗練された輪郭の持ち主'],
	'0531': ['薄紅', '#F0908D', '教養・崇高・才媛', '物事をテキパキとこなす敏腕家'],
	'0601': ['ペールクロッカス', '#BEA2CA', '女性らしさ・自惚れ', '気高さを持つ女性の中の女性'],
	'0602': ['菫色', '#7058A3', '気まぐれ・チャーミング', '決して媚びない気高い女性'],
	'0603': ['プルプル', '#5C1767', 'のんき・真理・孤独', '常にバランスを心がける人'],
	'0604': ['ペールホワイトリリー', '#F7F7D9', '無邪気・豊かな才能・刺激', '子供に戻りたい純真な心の持ち主'],
	'0605': ['ペールフレッシュグリーン', '#DDEAB2', '規則正しい・逆境に強い', 'リズムのある生活を楽しむ人'],
	'0606': ['メロンイエロー', '#E0DE94', '人道主義・サービス精神', '人間関係を大切にする平穏な人'],
	'0607': ['エルムグリーン', '#657D61', '清廉潔白・精神力', 'コミュニケーション上手な国際派'],
	'0608': ['オリーブドラブ', '#665A1A', '愛情・バランス・語学堪能', '他人の意見や行動に寛容な人'],
	'0609': ['クリーム', '#FFF8A8', '身だしなみ・洗練・品格', '容姿が周囲の注目を集める品格者'],
	'0610': ['レモンイエロー', '#FFF352', '明るさ・現実・経営力', '明るく周囲の人を元気づける自信家'],
	'0611': ['黄水仙', '#F6D700', '学問・研究開発・企画力', '最先端に立って研究を楽しむ情熱家'],
	'0612': ['サフランイエロー', '#FAC559', '体力・容姿端麗', 'バランスよい食事を楽しみにする人'],
	'0613': ['向日葵色', '#FCC800', '話好き・健康的・向上心', '希望に胸をふくらませる明るい人'],
	'0614': ['アイボリー', '#F8F4E6', '信頼・誠実・保守的', '中間的立場をとる控えめな人'],
	'0615': ['ライトアプリコット', '#F7B894', '我慢強さ・猪突猛進', '徹底した誠実ぶりが長所の人'],
	'0616': ['黄土色', '#C39143', '評価・粘り強さ', '努力で目標達成するコツコツ型'],
	'0617': ['オールドローズ', '#E29399', '精神の安定・仕事が趣味', '経験を知識と技術として蓄える人'],
	'0618': ['マホガニーブラウン', '#724943', '自信・落ち着き・自然', 'ユーモアセンスに溢れた堅実派'],
	'0619': ['卵色', '#FCD575', 'スポーツ・健康・組織', 'スポーツ好きな頑張り屋'],
	'0620': ['サンライトイエロー', '#F19D45', '社交的・友人・エネルギー', '常に行動をもって先導する模範生'],
	'0621': ['金茶', '#F39800', '芸術・スポーツ・グルメ', '料理道具にもこだわる美食家'],
	'0622': ['ガーネットブラウン', '#973B2C', 'エネルギー・忘我・話好き', '人好きで愛想の良いはしゃぎ屋'],
	'0623': ['海老茶', '#773C30', '希望・向上心・指導力', '人生経験により円熟する寛大な人'],
	'0624': ['ライトオーキッドピンク', '#F9BDC5', '微笑み・優しさ・永遠', '妖精のように気品にあふれた人'],
	'0625': ['ペールチェリーピンク', '#E1849E', '勇気・優雅・安らぎ', '人の心をとらえる控えめな人'],
	'0626': ['カーネーションピンク', '#EB5381', '人なつこさ・崇高', '好意的で人に親しまれる永遠の恋人'],
	'0627': ['ローズピンク', '#F19CA7', '激しい気性・外交的', '人を激励しチャンスを与える情熱家'],
	'0628': ['ペッパーレッド', '#CF0141', 'エネルギー・澄んだ心', '気前のよさで人から慕われる才人'],
	'0629': ['ベビーブルー', '#BBE2F1', '平和・静穏・思慮深さ', '他人のニーズに敏感に対応できる人'],
	'0630': ['薄群青', '#5383C3', '個性・理想・向上心', '周囲を飲みこむ魅力の持ち主'],
	'0701': ['ダックブルー', '#007199', '平和・空想・環境問題', '地球を生命と考えるエコロジスト'],
	'0702': ['コバルトブルー', '#0068B7', '手際よさ・繊細', '感性豊かな洗練された都会派'],
	'0703': ['インクブルー', '#003F8E', '気品・耐える人・自信', '人も羨むほどの自信家'],
	'0704': ['アクア', '#3FB5D3', '静穏・崇高・自己発展', '心理状態をコントロールできる人'],
	'0705': ['ペールサックスブルー', '#4593A0', '感性・自由・秘めた情熱', '愛情に満ちた静かな気質の人'],
	'0706': ['新橋色', '#59B9C6', '状況判断・決定力・信念', '前向きで仕事も生活も楽しめる人'],
	'0707': ['ブルーカナール', '#016171', '聡明・大望・チャンス', '一を聞いて十を知る多才な人'],
	'0708': ['マリンブルー', '#006888', '多才・努力・落着き', '努力により真理を追究する情熱家'],
	'0709': ['パールホワイト', '#F7F6F5', '秘密・孤独・正義感', '人から頼られる事を好む高潔な人'],
	'0710': ['ペールパステルブルー', '#608FC3', '優しさ・甘美・謙虚', '女性の美しさを象徴する人'],
	'0711': ['ラベンダーブルー', '#5371AD', '礼儀・審美眼・色彩感', '人をうっとりさせる魅力のある人'],
	'0712': ['マジョリカブル', '#044182', '教養・上品・幸せな未来', '真理を追究する人びとの指導者'],
	'0713': ['紺青', '#192F60', '自尊心・滅私奉公・直観力', '不幸な人を見過ごせない慈悲深い人'],
	'0714': ['ディープベビーピンク', '#FDEDE4', '感性・真心・温かさ', '仕事も生活も楽しめる前向きな人'],
	'0715': ['ペールモーベット', '#B370A6', '繊細・暗示・慎み深さ', 'かわいいものに引かれる優美な人'],
	'0716': ['ファウンテンブルー', '#94ADDA', '踊りと音楽・自由・個性', '自由奔放な生活を望む人'],
	'0717': ['サルビアブルー', '#6B76AE', '経営力・洗練・機知', '道を究めるべくして存在する女性'],
	'0718': ['ロイヤルパープル', '#7F1184', '知性・神秘性・香り', '助けた人をみな成功に導く人'],
	'0719': ['ディープシェルピンク', '#F7A7A0', '繊細・楽しい・温かさ', 'いつも慎ましい不変な愛の持ち主'],
	'0720': ['小麦色', '#E49E61', '思いやり・空想・感受性', '優美さに恵まれた妖精のような女性'],
	'0721': ['ハバナローズ', '#C56950', '奥ゆかしさ・躍動・母性', '美しく礼儀正しい人'],
	'0722': ['臙脂', '#B94047', '支持・向上心・弾力的', '自分の力量を自覚し向上させる人'],
	'0723': ['茜色', '#B7282E', '厳格・可能性・積極性', '世界的視野を持つ穏健派'],
	'0724': ['キューピッドピンク', '#F5949F', 'ほほえみ・良識・質素', '自然な色気で人を陶酔させる美人'],
	'0725': ['ロータスピンク', '#DE82A7', '永久不変・献身と抵抗', '気品ある精神の持ち主'],
	'0726': ['ローズマダー', '#AF363B', '愛敬・優雅・ユーモア', '心に響く言動で感動させる情熱家'],
	'0727': ['クリムソン', '#8D3446', '経験・才能・行動力', '女性の成熟が混在する多感な人'],
	'0728': ['黒柿色', '#404040', 'ユーモア・繊細・英知', '理想と洗練された精神の情熱家'],
	'0729': ['セルリアンブルー', '#008DB7', '誠実・霊感・思いやり', '真心で人に接する優しい人'],
	'0730': ['ピーコックブルー', '#009E9F', '深い愛情・調和・友情', '自分を知り向上できる人'],
	'0731': ['プルシアンブルー', '#044D78', '神秘的・クール・明るさ', '表情に出さず心の奥で感動する人'],
	'0801': ['ブルーシェル', '#438CB5', '社交的・我慢・誠実', '皆に誠実にできる社交的な人'],
	'0802': ['ペールヨットブルー', '#0098D4', '知能・責任・スピーディ', '内向的で格式を好む保守主義者'],
	'0803': ['ヨットブルー', '#409ECC', '謹厳・完全主義・人脈', '人を心の底から信じる頼もしい人'],
	'0804': ['シアンブルー', '#0063A7', '気高さ・品格・頂点', '粘り強く困難に立向う忍耐力の人'],
	'0805': ['瑠璃色', '#1E50A2', '穏やか・信頼・尊敬', '人に愛され信頼され尊敬される人'],
	'0806': ['ラピスラズリー', '#004C97', '粗野と高貴・教養', '思いやりに満ちた知的な人'],
	'0807': ['ローヤルブルー', '#02428C', 'チャーミング・機知', '知ることを求めて突き進む探検家'],
	'0808': ['紺瑠璃', '#164A84', '直観・素朴・勝負', '直観の彼方を見つめつづける人'],
	'0809': ['ネービーブルー', '#202F55', '知的・文化・洗練', '俗悪なものを嫌うロマンチスト'],
	'0810': ['ハイドレンジアブルー', '#3F61A1', '芸術・才能・表現力', '感性を磨いて美しく表す芸術家'],
	'0811': ['桑の実色', '#55295B', '直観・信念・宗教', '精神世界を感じやすい神秘主義者'],
	'0812': ['藤鼠', '#A6A5C4', '情熱・孤独・節度', '自分の存在を見つめるロマンチスト'],
	'0813': ['白群', '#83CCD2', '感性・機敏・信念', '堅実な人柄で信頼と尊敬を集める人'],
	'0814': ['ミヨゾティ', '#4CB8E7', '輝く美声・生気・表現力', '人の心を高みに誘う美声の持ち主'],
	'0815': ['黄色', '#FFD900', '機知・優しい心・家庭的', '温かい愛情で育った聡明な人'],
	'0816': ['ライトクリーム', '#FFFA9C', '感性・意思・リズム', '感性を動きとリズムで表現する天才'],
	'0817': ['プリムローズイエロー', '#FFF97D', '愛と友情・好奇心・探求心', '鮮やかな少女時代を送った無垢な人'],
	'0818': ['柑子色', '#F6AD49', '至高・明朗・自由', '精神を重視する賢者'],
	'0819': ['ゴールデンオレンジ', '#F79101', '自分本位・一番乗り', 'ナンバーワンを求める誇り高き人'],
	'0820': ['蜜柑色', '#F08300', 'エネルギー・大望・現実', '心身ともに健康な現実主義者'],
	'0821': ['肉桂色', '#DD7A56', 'エネルギー・人間関係', 'バランスよく全体をまとめる指導者'],
	'0822': ['ゴールデンコーン', '#FFCC83', '感情移入・創作力', 'ユニークに広がる心の持ち主'],
	'0823': ['ディープサンフラワー', '#FEAE01', 'タイミング・美学センス', 'ものごとを両面から見れる創造者'],
	'0824': ['イエローオーカー', '#C4972F', '努力・トレーニング・行動', '自分をより高めようとする努力家'],
	'0825': ['バフ', '#CAAC71', '節度・平和・優雅', '人間関係を大切にする礼儀正しい人'],
	'0826': ['煙草色', '#7D541C', '堅実・組織力・現実主義', '自分を優位にすることを願う指導者'],
	'0827': ['スカイブルー', '#A0D8EF', '深慮遠謀・ファッション', 'どんな服も似合うロマンチスト'],
	'0828': ['アクアグレイ', '#5D9CBF', '芸術・感性・想像力', '多分野で主役を望むクリエーター'],
	'0829': ['ペールサルビアブルー', '#4B7CB6', 'かぐわしさ・献身・気品', '人脈づくりを得意とする慎重派'],
	'0830': ['ウルトラマリーン', '#356CAC', '母性愛・音楽・気品', '心の琴線にふれる旋律を奏でる人'],
	'0831': ['紫紺', '#460E44', '自己管理・権威・居丈高', '人の上に立つオピニオンリーダー'],
	'0901': ['フレッシュグリーン', '#7DBB7C', '教養・繊細・慎ましさ', '優しい声で語る恋愛小説のヒロイン'],
	'0902': ['牧草色', '#368A56', '頑固・公明正大・努力', '自己犠牲をも辞さない尊敬すべき人'],
	'0903': ['ホリーグリーン', '#016257', '知覚・優しさ・創作意欲', 'ユートピアを夢見る文学少女'],
	'0904': ['ビリジャン', '#006B35', '好奇心・スリル・自発的', '冷静な判断力を持つ客観的な人'],
	'0905': ['鉄色', '#005243', '虚栄心・善悪の区別・秩序', '少しずつ真理に近づく高潔な人'],
	'0906': ['海松藍色', '#003D26', '自分自身・努力', '努力を惜しまない努力家'],
	'0907': ['淡水色', '#6EBDC2', '調和・情熱・純粋', '役立つ事に生きがいを感じる人'],
	'0908': ['アクアマリン', '#67B5B7', '冒険・トップ・臨機応変', '良心を信条とするまじめな人'],
	'0909': ['ディープティールグリーン', '#006069', '思いやり・礼儀・健康', '好奇心を持ちつづける若々しい人'],
	'0910': ['鉄紺', '#17184B', '冷静・自己評価・独創', '陣頭指揮をふるうすぐれた経営者'],
	'0911': ['ブループリュス', '#003221', 'グルメ・思想家・文才', '何でもわかりやすく表現できる才人'],
	'0912': ['マルベリー', '#282B6E', '大器・指導者・感性', '自分が向かっている道を知る識者'],
	'0913': ['パープルネイビー', '#28285A', '細やか・洗練・独創性', '絵画のように繊細なロマンチス'],
	'0914': ['タン', '#BF783E', '着想・努力・徹底追究', '疑問が晴れるまで調べる情熱家'],
	'0915': ['褐色', '#8A3B00', '意志・好奇心・経験', '我の強いストレートな人'],
	'0916': ['テラコッタ', '#BD6856', '心情・伝統・主義主張', '豪気で大胆な考え方を示す善人'],
	'0917': ['浅葱鼠', '#7DBB7C', '冷静沈着・直観・思いやり', '安定した頼られるリーダー'],
	'0918': ['パウダーブルー', '#BCCDDB', '冷静・温厚篤実・威厳', '後進の指導を得意とする温厚な人'],
	'0919': ['ライラックヘイズィ', '#7C7684', '厳格・日本的・素質の開発', '厳しさを糧に円熟に達する努力家'],
	'0920': ['ライトレモン', '#FFFCBF', '憂愁・純粋・洗練', '敏感な感性を持つ素直な人'],
	'0921': ['ティーグリーン', '#E3EDC8', '高潔・神秘主義・孤独', '気高く汚れのない神秘主義者'],
	'0922': ['ブールジョン', '#EDEE9E', '楽しい会話・快活', '気持ちよい雰囲気を創る人'],
	'0923': ['ジョーンシトロン', '#EBE960', '公正さ・自力・自己犠牲', '手ごたえを本格的に感じる野心家'],
	'0924': ['鶸色', '#D7CF3A', '勝負・好機・直観', 'しきたりを打破して突進する情熱家'],
	'0925': ['サンオレンジ', '#FDB86D', '配慮・構想・瞬発力', '周囲に影響されやすいナイーブな人'],
	'0926': ['タンジェリンオレンジ', '#F37F44', '責任感・熟考・オリジナル', '模倣を嫌い独特の発想をする人'],
	'0927': ['タイガーリリー', '#F16F4F', '生命力・先駆者・勇気', '奇想天外な着想をするパイオニア'],
	'0928': ['緋色', '#D3381C', '夢・尊敬・構想', '崇高な雰囲気で尊敬できる人'],
	'0929': ['オペラ', '#E95388', '天真爛漫・強靭な精神', 'ひとつのことに集中できる人'],
	'0930': ['アマランスパープル', '#89438C', '現実・本質・探求心', '美しい土地を求めるロマンチスト'],
	'1001': ['黄丹', '#EE7948', '訓練・生命力・リズム感', '芸術とスポーツに秀でた活発な人'],
	'1002': ['弁柄色', '#8F2E14', '陽気・創造・ほほえみ', '誰からも愛される温かい心の持ち主'],
	'1003': ['キャロットオレンジ', '#ED6D35', 'パワー・充実・挑戦', 'ひとりぼっちを好まない社交的な人'],
	'1004': ['フレイムオレンジ', '#EC5415', '感性・怜悧・美貌', '感情を包み隠した情熱家'],
	'1005': ['丁字色', '#C78A77', '保守的・義務感・責任感', '気まぐれが許せない合理主義者'],
	'1006': ['シナモン', '#BE8F68', '体調・精神安定・安らぎ', '非凡なものが直感的にわかる人'],
	'1007': ['カフェオレ', '#946C45', '知識・たくましさ・決断力', '料理好きで旺盛な生活力の持ち主'],
	'1008': ['煉瓦色', '#B55233', '安楽・幸せ・自由', '自然と一体化できる自由人'],
	'1009': ['テラローザ', '#7B411C', '理論的・感受性・危険回避', '新しい境地を開く驚異の人'],
	'1010': ['オーカー', '#BA8B40', '知力・先見の明・理解', 'あくことなき探求心の持ち主'],
	'1011': ['キャメル', '#B76651', '記憶力・想像力・才能', '衝動的な言動をしない正直な人'],
	'1012': ['バーントシエンナ', '#823616', '個性・壮大・想像力', '素朴な優しさを持つ奥ゆかしい人'],
	'1013': ['栗皮茶', '#6D3C32', 'スタミナ・神秘的・保守的', 'いつも音楽とともにある健康な人'],
	'1014': ['セピア', '#622D18', '教養・初々しさ・独創性', '豊かな感性を持つ気まぐれな人'],
	'1015': ['代赭', '#BB5520', '母性愛・自己啓発・洞察力', '機知に富む聡明な人'],
	'1016': ['トパーズ', '#E9BC00', '優等生・入念・慎重', '自分らしさを出す才人'],
	'1017': ['オーキッドホワイト', '#D7D0CA', '清らか・理解力・思いやり', 'おだやかな心で度量が大きい人'],
	'1018': ['パールグレイ', '#C9C9C4', '活発・優美・威厳', '静と動が融和した魅力的な人'],
	'1019': ['銀鼠', '#AFAFB0', '慎ましさ・礼儀・気品', '思いやり深く気品に満ちた人'],
	'1020': ['マウスグレイ', '#7D7D7D', '自然・慣習・試行錯誤', '安定した人生を送る平和主義者'],
	'1021': ['鳩羽鼠', '#9E8B8E', '宗教的・禁欲・叙情性', '神聖な思索で人間性を回復する人'],
	'1022': ['石板色', '#585C5B', '文化・喧騒・都会的', '仕事一途の合理主義者'],
	'1023': ['芥子色', '#D0AF4C', '自信・記憶力・不屈の精神', '構想を練り実現させる自信家'],
	'1024': ['シーモス', '#646F2D', '情熱・協力・夢', '基礎の思考がしっかりしてる人'],
	'1025': ['ローズグレイ', '#9D8E87', '丁寧・敬意・静叙', '慎ましく振る舞う落ち着いた人'],
	'1026': ['ライトターコイズ', '#548778', '自力本願・指導者・活路', '常に冷静で思慮深く行動する人'],
	'1027': ['錆納戸', '#476B6B', '継続・安らぎ・自然', '常に新しい目標に挑戦する人'],
	'1028': ['鳩羽紫', '#6C6A6D', '前向き・潔癖・気品', '行動で学ぶ実践主義者'],
	'1029': ['栗色', '#665951', '強情・健康・穏健', '穏健でも自分の考えを譲らない'],
	'1030': ['ビンヤード', '#83515D', '経験・相談相手', '問題の解決に協力する頼もしい人'],
	'1031': ['ライラック', '#D1BADA', '機知・理論的・勇猛果敢', '成功させるために燃える情熱家'],
	'1101': ['駱駝色', '#BF794E', '経営力・自信と誇り・我慢', '自信と気力に満ちた才腕をふるう人'],
	'1102': ['小鹿色', '#8B724A', '洞察力・現実派・柔軟性', '決してブレない強い意志の持ち主'],
	'1103': ['黒茶', '#583822', '公正・高潔・信頼', '人からの助けを大切にできる人'],
	'1104': ['トープ', '#504946', '感覚・職人わざ・至高', '自分の仕事に誇りを持てる自信家'],
	'1105': ['チャコールグレイ', '#4E454A', '信念・男性的・礼儀作法', '義理人情に厚く人助けが好きな人'],
	'1106': ['ジョーンドナープル', '#FFCC7B', '気配り・予感・バランス', '思考と行動のバランスをとれる人'],
	'1107': ['サンフラワー', '#FEB75B', 'タイミング・美学センス', '物事を両面から見れる創造者'],
	'1108': ['ナスタチウムオレンジ', '#F5811E', '組織・バランス・協調性', '人間関係の機微を心得た人'],
	'1109': ['樺色', '#CD5E3C', '楽天主義・大胆・向上心', '自分自身の力を信じられる人'],
	'1110': ['タバコブラウン', '#8D6029', '意地・自信・親身', '打ち明け話に聞き入る優しい人'],
	'1111': ['ペールクリーム', '#FFDFAC', '用意周到・創造力・静けさ', '類まれな品格ある感性の持ち主'],
	'1112': ['砂色', '#DCD3B2', '健康・熟練・芸術', '努力と精進により頂点を極める人'],
	'1113': ['アッシュグレイ', '#9FA09E', '堅実さ・公正な判断・仕事', '寸暇を惜しんで仕事に励む働き者'],
	'1114': ['ガンメタル', '#55461B', 'スタミナ・母性本能', '感情に走らない誠実で保守的な人'],
	'1115': ['墨色', '#473A17', '神秘的・強固・独立心', '夢や希望をいっぱい持つ情熱家'],
	'1116': ['桜貝色', '#FABABA', '愛・ロマンチック・上品', '教養豊かな洗練された好みの人'],
	'1117': ['オーキッドピンク', '#DA81B2', 'しとやか・喜び・献身', '代償を求めない献身的な愛の持ち主'],
	'1118': ['マーシュローズ', '#B4766B', '信望・挑戦・育成', '知識や学問を身につける博識家'],
	'1119': ['クラーレット', '#B1585C', '教養・感性・精神力', '上品であか抜けた絶世の美人'],
	'1120': ['ダブグレイ', '#7D7B83', '気まぐれ・おおらか・芸術', '燃えるような生命力の持ち主'],
	'1121': ['ペールサロー', '#C8CEAC', 'せんさく・友人・うぬぼれ', '二番になることを好まない自信家'],
	'1122': ['抹茶色', '#BBC8AC', '信条・理想・器量', '目標達成のため猛然と行動する人'],
	'1123': ['灰汁色', '#9E9478', '目的意識・責任感・集中力', '新しいことに意欲を燃やす挑戦者'],
	'1124': ['鉛色', '#7B7C7D', '感情回避・孤独・冷静沈着', 'いつも心をコントロールする傍観者'],
	'1125': ['オフブラック', '#39423F', '保守的・きまぐれ・厳粛', '威厳があり、神秘的な人'],
	'1126': ['ペールアプリコット', '#FDB58F', '温かさ・中立・芸術', '社会にうまく順応する実践派'],
	'1127': ['肌色', '#FCE2C4', '自活力・現実主義・正直', '現象から本質を導き出す理論派'],
	'1128': ['サンタン', '#B47226', '現実主義・実践・懐疑', '十分に見定める実践者'],
	'1129': ['ブリックレッド', '#8C6B4A', '自信・集中力・自力', '失望や落胆を嫌う慎重派'],
	'1130': ['枯葉色', '#54513E', '信念・基礎・信頼', '自分をしっかりと保つ信念の人'],
	'1201': ['亜麻色', '#D6C6AF', '文化的・気取りや・色彩', '美しさに魅力を感じる芸術家'],
	'1202': ['ハニースイート', '#CAA980', 'のんき・向上心・文化', '安心感を保証するものにひかれる人'],
	'1203': ['栗梅', '#852E19', '本質・実践・実績', '空想にふけるより実践する人'],
	'1204': ['タウニーオリーブ', '#5D5644', '個性・毅然・社交的', '大胆で勇気ある人'],
	'1205': ['黒紫', '#4E4B3A', '貯蓄・信念・慎ましさ', '流行を追わない教養ある学者タイプ'],
	'1206': ['シトロングレイ', '#E5CC96', '才気縦横・機知・母性愛', '途方もない夢を抱く感性豊かな人'],
	'1207': ['ペールライムライト', '#E6D89B', '屋外・外交的・気前', '汗水を流して働くまじめな人'],
	'1208': ['菜種油色', '#A69425', '日常・泰然自若・信頼', '気持ちにムラがなく信用を集める人'],
	'1209': ['オイルイエロー', '#B4935D', '安定・冷静沈着・貫徹', '困難な境遇にも動揺しない人'],
	'1210': ['ブロンズ', '#AC6B25', '保守的・実践派・行動力', '目立つ事を嫌う控えめな人'],
	'1211': ['シーシェルピンク', '#FBBAA8', '清潔・ロマンチック', '身のこなしが優雅な人'],
	'1212': ['鮭色', '#F79383', 'ユニーク・決断・積極', '困難を恐れず行動するアイデアマン'],
	'1213': ['洗朱', '#F4816F', '移り気・優しさ・人間関係', '人を楽しませる気まぐれ者'],
	'1214': ['朱色', '#EB6101', '社交的・人脈・緩急自在', 'そこにいるだけで魅力を発散する人'],
	'1215': ['バーントオレンジ', '#B16268', '衝動的・情緒・表現力', '気持ちが外に向かうスポーツタイプ'],
	'1216': ['ベージュホワイト', '#FDCEBA', '理性・忍耐・思いきり', '自分の力で危機から脱却する勇者'],
	'1217': ['ベージュ', '#EEDCB3', 'バランス・人なつこさ', 'まわりの人を明るくする存在の人'],
	'1218': ['ブラウンゴールド', '#B4766B', '清純・感情の隠蔽・夢', 'とりとめのない夢を追う温かい人'],
	'1219': ['飴色', '#DEB068', '学問・家庭・精神的充足', '頑固で自分勝手な人を嫌う正直な人'],
	'1220': ['ヒーザー', '#715C61', '安定感・信念・活路', '楽しさを求めるユーモア人'],
	'1221': ['リラ', '#E0B5D3', '高尚・上品・明晰', '心身ともに洗練された人'],
	'1222': ['ヘリオトロープ', '#9079B6', '感性・高貴・若々しさ', 'ロマンチックな気分に満たされた人'],
	'1223': ['菖蒲色', '#674196', '神秘的・芸術的・哲学的', 'おとぎの国の生活を夢見る人'],
	'1224': ['エッグプラント', '#241B36', '保守的・厳粛・安心感', 'まじめで真剣に行動するしっかり者'],
	'1225': ['茄子紺', '#824880', '心配性・審美眼・洗練', '世間離れした引っ込み思案な人'],
	'1226': ['ゴールド', '#E6B422', '理想・おおらか・花形', '強力な保護者になるしっかり者'],
	'1227': ['サロー', '#AFB293', '威厳・自己愛・自責', '自分自身を財産だと思える自信家'],
	'1228': ['ジョーンミエル', '#CB981B', '誇り・見識・気まぐれ', '財産に恵まれた太っ腹な人'],
	'1229': ['マスタード', '#B2A280', '静穏・調和・エコロジー', '慈愛に満ちた世界観の持ち主'],
	'1230': ['オータムリーフ', '#B26724', '奥義・自信・ロマンチック', '多くの人の後ろ盾となる人'],
	'1231': ['ターコイズブルー', '#00AFCC', '個性・比較・シンプル', '個性的なファッションを好む人']
};