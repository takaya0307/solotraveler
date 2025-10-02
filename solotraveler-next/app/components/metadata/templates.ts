import { Metadata } from "next";
import { CountryMetadataConfig } from "./types";

// 基本メタデータの生成
export function generateBaseMetadata(config: CountryMetadataConfig): Metadata {
  const { countryInfo, customTitle, customDescription, customKeywords, articleSection, articleTags } = config;
  
  // タイトルの生成
  const title = customTitle || `【2025年版】${countryInfo.nameJa}ワーホリ完全ガイド｜特徴と条件`;
  
  // ディスクリプションの生成（150-160文字）
  const description = customDescription || `${countryInfo.nameJa}ワーホリの特徴・人気都市・おすすめポイントを徹底解説。${countryInfo.description}`;
  
  // キーワードの生成（3-5個に絞る）
  const baseKeywords = [
    // メインキーワード（必須）
    `${countryInfo.nameJa}ワーホリ`,
    `${countryInfo.nameJa} ワーホリ`,
    // 実用的なキーワード（2-3個）
    `${countryInfo.nameJa} ワーホリ 準備`,
    `${countryInfo.nameJa} ワーホリ 費用`,
    "海外就労"
  ];
  
  // カスタムキーワードがあれば追加
  const allKeywords = customKeywords ? [...baseKeywords, ...customKeywords] : baseKeywords;
  const keywords = [...new Set(allKeywords)].join(","); // 重複排除
  
  // 記事セクションとタグ
  const section = articleSection || `${countryInfo.nameJa}ワーホリ`;
  const tags = articleTags || keywords.split(",");

  return {
    title,
    description,
    keywords,
    authors: [{ name: "ワーホリパス" }],
    creator: "ワーホリパス",
    publisher: "ワーホリパス",
    alternates: {
      canonical: `https://workingholidaypass.jp/countries/${countryInfo.id}`,
      languages: {
        'ja-JP': `/countries/${countryInfo.id}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://workingholidaypass.jp/countries/${countryInfo.id}`,
      siteName: 'ワーホリパス',
      locale: 'ja_JP',
      type: 'article',
      images: [
        {
          url: '/ogp.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/ogp.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'hreflang': 'ja-JP',
      'article:published_time': '2024-01-01T00:00:00.000Z',
      'article:modified_time': new Date().toISOString(),
      'article:author': 'ワーホリパス',
      'article:section': section,
      'article:tag': tags,
    },
  };
}

// 構造化データの生成
export function generateCountryStructuredData(config: CountryMetadataConfig): any {
  const { countryInfo } = config;
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `【2025年版】${countryInfo.nameJa}ワーホリ完全ガイド｜特徴と条件`,
    "description": `${countryInfo.nameJa}ワーホリの特徴・人気都市・おすすめポイントを徹底解説。${countryInfo.description}`,
    "author": {
      "@type": "Organization",
      "name": "ワーホリパス",
      "url": "https://workingholidaypass.jp"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ワーホリパス",
      "url": "https://workingholidaypass.jp"
    },
    "datePublished": "2024-01-01T00:00:00.000Z",
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://workingholidaypass.jp/countries/${countryInfo.id}`
    },
    "about": {
      "@type": "Place",
      "name": countryInfo.nameJa,
      "alternateName": countryInfo.nameEn
    },
    "keywords": `${countryInfo.nameJa}ワーホリ,${countryInfo.nameJa} ワーホリ,${countryInfo.nameEn} ワーホリ`,
    "articleSection": `${countryInfo.nameJa}ワーホリ`,
    "inLanguage": "ja-JP"
  };
}

// 国別メタデータの基本情報を取得するヘルパー関数
export function getCountryInfo(countryId: string): any {
  // 各国の基本情報を定義
  const countryData = {
    australia: {
      id: 'australia',
      nameJa: 'オーストラリア',
      nameEn: 'Australia',
      description: '温暖な気候、美しいビーチ、フレンドリーな人々が魅力の南半球の国で、英語学習と豊富な仕事環境を提供。シドニー、メルボルン、ケアンズなど主要都市の情報も充実。',
      keywords: ['ビーチ', 'アウトドア', '英語学習', '温暖な気候', '多文化社会'],
      cities: ['シドニー', 'メルボルン', 'ケアンズ', 'ブリスベン', 'パース'],
      features: ['ビーチ', 'アウトドア', '英語学習', '温暖な気候', '多文化社会'],
      languages: ['英語'],
      culture: ['サーフィン', 'カフェ文化']
    },
    canada: {
      id: 'canada',
      nameJa: 'カナダ',
      nameEn: 'Canada',
      description: '自然と都市が調和した北米の魅力あふれる国で、英語・フランス語学習と豊富な仕事環境を提供。トロント、バンクーバー、モントリオールなど主要都市の情報も充実。',
      keywords: ['自然', '都市', '英語学習', 'フランス語学習', '多文化社会'],
      cities: ['トロント', 'バンクーバー', 'モントリオール', 'カルガリー', 'オタワ'],
      features: ['自然', '都市', '英語学習', 'フランス語学習', '多文化社会'],
      languages: ['英語', 'フランス語'],
      culture: ['アウトドア', 'メープルシロップ']
    },
    newzealand: {
      id: 'newzealand',
      nameJa: 'ニュージーランド',
      nameEn: 'New Zealand',
      description: '美しい自然とアドベンチャーが楽しめる国で、英語学習と安全な環境を提供。オークランド、クライストチャーチ、クイーンズタウンなど主要都市の情報も充実。',
      keywords: ['自然', 'アドベンチャー', '英語学習', '安全', '美しい風景'],
      cities: ['オークランド', 'クライストチャーチ', 'クイーンズタウン', 'ウェリントン', 'ロトルア'],
      features: ['自然', 'アドベンチャー', '英語学習', '安全', '美しい風景'],
      languages: ['英語'],
      culture: ['ハイキング', 'マオリ文化']
    },
    uk: {
      id: 'uk',
      nameJa: 'イギリス',
      nameEn: 'United Kingdom',
      description: '歴史と文化が息づくヨーロッパの中心地で、英語学習と豊富な文化体験を提供。ロンドン、マンチェスター、エディンバラなど主要都市の情報も充実。',
      keywords: ['歴史', '文化', '英語学習', 'ヨーロッパ', '伝統'],
      cities: ['ロンドン', 'マンチェスター', 'エディンバラ', 'リバプール', 'バーミンガム'],
      features: ['歴史', '文化', '英語学習', 'ヨーロッパ', '伝統'],
      languages: ['英語'],
      culture: ['美術館', 'パブ文化']
    },
    ireland: {
      id: 'ireland',
      nameJa: 'アイルランド',
      nameEn: 'Ireland',
      description: '緑豊かな自然とケルト文化が魅力の国で、英語学習と親切な人々との交流を提供。ダブリン、コーク、ゴールウェイなど主要都市の情報も充実。',
      keywords: ['自然', 'ケルト文化', '英語学習', '親切な人々', '緑豊かな風景'],
      cities: ['ダブリン', 'コーク', 'ゴールウェイ', 'リムリック', 'ウォーターフォード'],
      features: ['自然', 'ケルト文化', '英語学習', '親切な人々', '緑豊かな風景'],
      languages: ['英語'],
      culture: ['パブ文化', 'アイリッシュミュージック']
    },
    france: {
      id: 'france',
      nameJa: 'フランス',
      nameEn: 'France',
      description: '芸術・ファッション・美食の本場、ヨーロッパの中心地で、フランス語学習と豊富な文化体験を提供。パリ、リヨン、マルセイユなど主要都市の情報も充実。',
      keywords: ['芸術', 'ファッション', '美食', '文化', '歴史'],
      cities: ['パリ', 'リヨン', 'マルセイユ', 'トゥールーズ', 'ニース'],
      features: ['芸術', 'ファッション', '美食', '文化', '歴史'],
      languages: ['フランス語'],
      culture: ['ワイン文化']
    },
    germany: {
      id: 'germany',
      nameJa: 'ドイツ',
      nameEn: 'Germany',
      description: '効率性と文化が融合したヨーロッパの大国で、ドイツ語学習と豊富な技術・文化体験を提供。ベルリン、ミュンヘン、ハンブルクなど主要都市の情報も充実。',
      keywords: ['効率性', '文化', '歴史', '技術', 'ビール文化'],
      cities: ['ベルリン', 'ミュンヘン', 'ハンブルク', 'ケルン', 'フランクフルト'],
      features: ['効率性', '文化', '歴史', '技術', 'ビール文化'],
      languages: ['ドイツ語'],
      culture: ['オクトーバーフェスト']
    },
    spain: {
      id: 'spain',
      nameJa: 'スペイン',
      nameEn: 'Spain',
      description: '情熱的な文化と美しい地中海の国で、スペイン語学習と豊富な文化体験を提供。マドリード、バルセロナ、セビリアなど主要都市の情報も充実。',
      keywords: ['文化', '地中海', '情熱', '歴史', 'フラメンコ'],
      cities: ['マドリード', 'バルセロナ', 'セビリア', 'バレンシア', 'グラナダ'],
      features: ['文化', '地中海', '情熱', '歴史', 'フラメンコ'],
      languages: ['スペイン語'],
      culture: ['タパス文化']
    },
    italy: {
      id: 'italy',
      nameJa: 'イタリア',
      nameEn: 'Italy',
      description: '芸術・歴史・美食が息づく地中海の国で、イタリア語学習と豊富な文化体験を提供。ローマ、ミラノ、フィレンツェなど主要都市の情報も充実。',
      keywords: ['芸術', '歴史', '美食', '地中海', 'ファッション'],
      cities: ['ローマ', 'ミラノ', 'フィレンツェ', 'ベネチア', 'ナポリ'],
      features: ['芸術', '歴史', '美食', '地中海', 'ファッション'],
      languages: ['イタリア語'],
      culture: ['ピザ文化']
    },
    // 新しく追加する国々
    portugal: {
      id: 'portugal',
      nameJa: 'ポルトガル',
      nameEn: 'Portugal',
      description: '大航海時代の歴史と美しい海岸線が魅力の国で、ポルトガル語学習と豊富な文化体験を提供。リスボン、ポルト、ファロなど主要都市の情報も充実。',
      keywords: ['歴史', '海岸線', '文化', '温暖な気候', '大航海時代'],
      cities: ['リスボン', 'ポルト', 'ファロ', 'コインブラ', 'ブラガ'],
      features: ['歴史', '海岸線', '文化', '温暖な気候', '大航海時代'],
      languages: ['ポルトガル語'],
      culture: ['ファド音楽', 'タイル文化']
    },
    austria: {
      id: 'austria',
      nameJa: 'オーストリア',
      nameEn: 'Austria',
      description: '音楽と芸術が息づくアルプスの国で、ドイツ語学習と豊富な文化体験を提供。ウィーン、ザルツブルク、インスブルックなど主要都市の情報も充実。',
      keywords: ['音楽', '芸術', 'アルプス', '文化', '歴史'],
      cities: ['ウィーン', 'ザルツブルク', 'インスブルック', 'グラーツ', 'リンツ'],
      features: ['音楽', '芸術', 'アルプス', '文化', '歴史'],
      languages: ['ドイツ語'],
      culture: ['クラシック音楽', 'スキー文化']
    },
    norway: {
      id: 'norway',
      nameJa: 'ノルウェー',
      nameEn: 'Norway',
      description: 'フィヨルドとオーロラが美しい北欧の国で、ノルウェー語学習と豊富な自然体験を提供。オスロ、ベルゲン、トロンハイムなど主要都市の情報も充実。',
      keywords: ['フィヨルド', 'オーロラ', '北欧', '自然', '美しい風景'],
      cities: ['オスロ', 'ベルゲン', 'トロンハイム', 'スタヴァンゲル', 'トロムソ'],
      features: ['フィヨルド', 'オーロラ', '北欧', '自然', '美しい風景'],
      languages: ['ノルウェー語'],
      culture: ['北欧文化', 'アウトドア']
    },
    denmark: {
      id: 'denmark',
      nameJa: 'デンマーク',
      nameEn: 'Denmark',
      description: '幸福度が高く、デザインが美しい北欧の国で、デンマーク語学習と豊富な文化体験を提供。コペンハーゲン、オーフス、オーデンセなど主要都市の情報も充実。',
      keywords: ['幸福度', 'デザイン', '北欧', '生活の質', '文化'],
      cities: ['コペンハーゲン', 'オーフス', 'オーデンセ', 'オールボー', 'エスビャウ'],
      features: ['幸福度', 'デザイン', '北欧', '生活の質', '文化'],
      languages: ['デンマーク語'],
      culture: ['北欧デザイン', 'ヒュッゲ文化']
    },
    poland: {
      id: 'poland',
      nameJa: 'ポーランド',
      nameEn: 'Poland',
      description: '歴史と文化が豊かな中欧の国で、ポーランド語学習と豊富な文化体験を提供。ワルシャワ、クラクフ、ヴロツワフなど主要都市の情報も充実。',
      keywords: ['歴史', '文化', '中欧', '伝統', '建築'],
      cities: ['ワルシャワ', 'クラクフ', 'ヴロツワフ', 'ポズナン', 'グダニスク'],
      features: ['歴史', '文化', '中欧', '伝統', '建築'],
      languages: ['ポーランド語'],
      culture: ['ポーランド料理', '歴史文化']
    },
    czech: {
      id: 'czech',
      nameJa: 'チェコ',
      nameEn: 'Czech Republic',
      description: '美しい建築とビール文化が魅力の中欧の国で、チェコ語学習と豊富な文化体験を提供。プラハ、ブルノ、オストラバなど主要都市の情報も充実。',
      keywords: ['建築', 'ビール', '中欧', '文化', '歴史'],
      cities: ['プラハ', 'ブルノ', 'オストラバ', 'プルゼニ', 'リベレツ'],
      features: ['建築', 'ビール', '中欧', '文化', '歴史'],
      languages: ['チェコ語'],
      culture: ['ビール文化', '建築文化']
    },
    hungary: {
      id: 'hungary',
      nameJa: 'ハンガリー',
      nameEn: 'Hungary',
      description: '温泉と歴史が豊かな中欧の国で、ハンガリー語学習と豊富な文化体験を提供。ブダペスト、デブレツェン、セゲドなど主要都市の情報も充実。',
      keywords: ['温泉', '歴史', '中欧', '文化', '伝統'],
      cities: ['ブダペスト', 'デブレツェン', 'セゲド', 'ミシュコルツ', 'ペーチ'],
      features: ['温泉', '歴史', '中欧', '文化', '伝統'],
      languages: ['ハンガリー語'],
      culture: ['温泉文化', 'ハンガリー料理']
    },
    slovakia: {
      id: 'slovakia',
      nameJa: 'スロバキア',
      nameEn: 'Slovakia',
      description: '美しい山々と歴史が息づく中欧の国で、スロバキア語学習と豊富な自然体験を提供。ブラチスラバ、コシツェ、ジリナなど主要都市の情報も充実。',
      keywords: ['山々', '歴史', '中欧', '自然', '文化'],
      cities: ['ブラチスラバ', 'コシツェ', 'ジリナ', 'ニトラ', 'プレショフ'],
      features: ['山々', '歴史', '中欧', '自然', '文化'],
      languages: ['スロバキア語'],
      culture: ['山岳文化', 'スロバキア料理']
    },
    iceland: {
      id: 'iceland',
      nameJa: 'アイスランド',
      nameEn: 'Iceland',
      description: '火山と氷河が織りなす神秘的な国で、アイスランド語学習と豊富な自然体験を提供。レイキャビク、アークレイリ、ハフナルフィヨルズルなど主要都市の情報も充実。',
      keywords: ['火山', '氷河', '神秘', '自然', '北欧'],
      cities: ['レイキャビク', 'アークレイリ', 'ハフナルフィヨルズル', 'セルフォス', 'セイジスフィヨルズル'],
      features: ['火山', '氷河', '神秘', '自然', '北欧'],
      languages: ['アイスランド語'],
      culture: ['北欧文化', '温泉文化']
    },
    southkorea: {
      id: 'southkorea',
      nameJa: '韓国',
      nameEn: 'South Korea',
      description: 'K-POPとテクノロジーが発展したアジアの国で、韓国語学習と豊富な文化体験を提供。ソウル、釜山、大邱など主要都市の情報も充実。',
      keywords: ['K-POP', 'テクノロジー', 'アジア', '文化', '現代'],
      cities: ['ソウル', '釜山', '大邱', '仁川', '光州'],
      features: ['K-POP', 'テクノロジー', 'アジア', '文化', '現代'],
      languages: ['韓国語'],
      culture: ['K-POP文化', '韓国料理']
    },
    taiwan: {
      id: 'taiwan',
      nameJa: '台湾',
      nameEn: 'Taiwan',
      description: '美食と親切な人々が魅力のアジアの国で、中国語学習と豊富な文化体験を提供。台北、高雄、台中など主要都市の情報も充実。',
      keywords: ['美食', '親切', 'アジア', '文化', '伝統'],
      cities: ['台北', '高雄', '台中', '台南', '新竹'],
      features: ['美食', '親切', 'アジア', '文化', '伝統'],
      languages: ['中国語'],
      culture: ['台湾料理', '親切文化']
    },
    hongkong: {
      id: 'hongkong',
      nameJa: '香港',
      nameEn: 'Hong Kong',
      description: '東洋と西洋が融合した国際都市で、中国語・英語学習と豊富な文化体験を提供。香港島、九龍、新界など主要地域の情報も充実。',
      keywords: ['国際都市', '融合', 'アジア', 'ビジネス', '文化'],
      cities: ['香港島', '九龍', '新界', '尖沙咀', '中環'],
      features: ['国際都市', '融合', 'アジア', 'ビジネス', '文化'],
      languages: ['中国語', '英語'],
      culture: ['融合文化', 'ビジネス文化']
    },
    argentina: {
      id: 'argentina',
      nameJa: 'アルゼンチン',
      nameEn: 'Argentina',
      description: 'タンゴとワインが魅力の南米の国で、スペイン語学習と豊富な文化体験を提供。ブエノスアイレス、コルドバ、ロサリオなど主要都市の情報も充実。',
      keywords: ['タンゴ', 'ワイン', '南米', '文化', '伝統'],
      cities: ['ブエノスアイレス', 'コルドバ', 'ロサリオ', 'メンドーサ', 'ラプラタ'],
      features: ['タンゴ', 'ワイン', '南米', '文化', '伝統'],
      languages: ['スペイン語'],
      culture: ['タンゴ文化', 'ワイン文化']
    },
    chile: {
      id: 'chile',
      nameJa: 'チリ',
      nameEn: 'Chile',
      description: '細長い国土と美しい自然が魅力の南米の国で、スペイン語学習と豊富な自然体験を提供。サンティアゴ、バルパライソ、アントファガスタなど主要都市の情報も充実。',
      keywords: ['自然', '国土', '南米', '地理', '文化'],
      cities: ['サンティアゴ', 'バルパライソ', 'アントファガスタ', 'ラセレナ', 'プエルトモント'],
      features: ['自然', '国土', '南米', '地理', '文化'],
      languages: ['スペイン語'],
      culture: ['自然文化', 'チリ料理']
    },
    estonia: {
      id: 'estonia',
      nameJa: 'エストニア',
      nameEn: 'Estonia',
      description: 'デジタル化が進んだバルト三国の国で、エストニア語学習と豊富な文化体験を提供。タリン、タルトゥ、ナルバなど主要都市の情報も充実。',
      keywords: ['デジタル化', 'バルト三国', '北欧', '技術', '文化'],
      cities: ['タリン', 'タルトゥ', 'ナルバ', 'パルヌ', 'コフトラヤルベ'],
      features: ['デジタル化', 'バルト三国', '北欧', '技術', '文化'],
      languages: ['エストニア語'],
      culture: ['デジタル文化', '北欧文化']
    },
    lithuania: {
      id: 'lithuania',
      nameJa: 'リトアニア',
      nameEn: 'Lithuania',
      description: '美しい旧市街と歴史が息づくバルト三国の国で、リトアニア語学習と豊富な文化体験を提供。ヴィリニュス、カウナス、クライペダなど主要都市の情報も充実。',
      keywords: ['旧市街', '歴史', 'バルト三国', '文化', '伝統'],
      cities: ['ヴィリニュス', 'カウナス', 'クライペダ', 'シャウレイ', 'パネヴェジース'],
      features: ['旧市街', '歴史', 'バルト三国', '文化', '伝統'],
      languages: ['リトアニア語'],
      culture: ['歴史文化', 'リトアニア料理']
    },
    netherlands: {
      id: 'netherlands',
      nameJa: 'オランダ',
      nameEn: 'Netherlands',
      description: '風車とチューリップが美しい低地の国で、オランダ語学習と豊富な文化体験を提供。アムステルダム、ロッテルダム、ハーグなど主要都市の情報も充実。',
      keywords: ['風車', 'チューリップ', '低地', '文化', '歴史'],
      cities: ['アムステルダム', 'ロッテルダム', 'ハーグ', 'ユトレヒト', 'アイントホーフェン'],
      features: ['風車', 'チューリップ', '低地', '文化', '歴史'],
      languages: ['オランダ語'],
      culture: ['風車文化', 'チューリップ文化']
    },
    finland: {
      id: 'finland',
      nameJa: 'フィンランド',
      nameEn: 'Finland',
      description: 'サウナと教育が発達した北欧の国で、フィンランド語学習と豊富な文化体験を提供。ヘルシンキ、タンペレ、トゥルクなど主要都市の情報も充実。',
      keywords: ['サウナ', '教育', '北欧', '生活', '文化'],
      cities: ['ヘルシンキ', 'タンペレ', 'トゥルク', 'オウル', 'ユヴァスキュラ'],
      features: ['サウナ', '教育', '北欧', '生活', '文化'],
      languages: ['フィンランド語'],
      culture: ['サウナ文化', '北欧文化']
    },
    latvia: {
      id: 'latvia',
      nameJa: 'ラトビア',
      nameEn: 'Latvia',
      description: '美しい建築と自然が調和したバルト三国の国で、ラトビア語学習と豊富な文化体験を提供。リガ、ダウガフピルス、リエパージャなど主要都市の情報も充実。',
      keywords: ['建築', '自然', 'バルト三国', '調和', '文化'],
      cities: ['リガ', 'ダウガフピルス', 'リエパージャ', 'ユールマラ', 'ヴェンツピルス'],
      features: ['建築', '自然', 'バルト三国', '調和', '文化'],
      languages: ['ラトビア語'],
      culture: ['建築文化', '自然文化']
    },
    uruguay: {
      id: 'uruguay',
      nameJa: 'ウルグアイ',
      nameEn: 'Uruguay',
      description: '美しいビーチと安全な環境が魅力の南米の国で、スペイン語学習と豊富な文化体験を提供。モンテビデオ、プンタデルエステ、コロニアなど主要都市の情報も充実。',
      keywords: ['ビーチ', '安全', '南米', '環境', '文化'],
      cities: ['モンテビデオ', 'プンタデルエステ', 'コロニア', 'サルト', 'メルセデス'],
      features: ['ビーチ', '安全', '南米', '環境', '文化'],
      languages: ['スペイン語'],
      culture: ['ビーチ文化', 'ウルグアイ料理']
    },
    luxembourg: {
      id: 'luxembourg',
      nameJa: 'ルクセンブルク',
      nameEn: 'Luxembourg',
      description: '小さな国ながら多文化が共存するヨーロッパの国で、ルクセンブルク語・フランス語・ドイツ語学習と豊富な文化体験を提供。ルクセンブルク市、エシュシュルアルゼット、デューデランジュなど主要都市の情報も充実。',
      keywords: ['多文化', '共存', 'ヨーロッパ', '国際', '文化'],
      cities: ['ルクセンブルク市', 'エシュシュルアルゼット', 'デューデランジュ', 'ディフェルダンジュ', 'ペタンジュ'],
      features: ['多文化', '共存', 'ヨーロッパ', '国際', '文化'],
      languages: ['ルクセンブルク語', 'フランス語', 'ドイツ語'],
      culture: ['多文化共存', '国際文化']
    },
    sweden: {
      id: 'sweden',
      nameJa: 'スウェーデン',
      nameEn: 'Sweden',
      description: '福祉とデザインが発達した北欧の国で、スウェーデン語学習と豊富な文化体験を提供。ストックホルム、ヨーテボリ、マルメなど主要都市の情報も充実。',
      keywords: ['福祉', 'デザイン', '北欧', '生活の質', '文化'],
      cities: ['ストックホルム', 'ヨーテボリ', 'マルメ', 'ウプサラ', 'ヴェステロース'],
      features: ['福祉', 'デザイン', '北欧', '生活の質', '文化'],
      languages: ['スウェーデン語'],
      culture: ['北欧デザイン', '福祉文化']
    }
  };

  return countryData[countryId as keyof typeof countryData] || null;
} 