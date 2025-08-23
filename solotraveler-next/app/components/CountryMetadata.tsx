import { Metadata } from "next";

// 各国共通のメタデータ設定テンプレート
export function generateCountryMetadata(
  countryName: string,
  countryNameEn: string,
  countryDescription: string,
  countryFeatures: string[]
): Metadata {
  const title = `ワーホリ ${countryName}比較｜費用・条件・おすすめエージェントを徹底比較`;
  const description = `${countryName}ワーホリの費用、条件、おすすめエージェントを徹底比較。${countryDescription}`;
  
  return {
    title,
    description,
    keywords: `ワーホリ,${countryName}ワーホリ,${countryNameEn}ワーホリ,海外就労,海外生活,語学留学,国際交流,${countryFeatures.join(',')}`,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: "/ogp.png",
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/ogp.png"],
    },
  };
}

// 各国の基本情報
export const countryData = {
  australia: {
    nameJa: "オーストラリア",
    nameEn: "Australia",
    description: "大自然と都市が調和した南半球の魅力あふれる国でワーホリ体験。",
    features: ["ビーチ", "アウトドア", "英語学習", "多文化社会"]
  },
  canada: {
    nameJa: "カナダ",
    nameEn: "Canada", 
    description: "自然と都市が調和した北米の魅力あふれる国でワーホリ体験。",
    features: ["自然", "都市", "英語学習", "多文化社会"]
  },
  newzealand: {
    nameJa: "ニュージーランド",
    nameEn: "New Zealand",
    description: "美しい自然とアドベンチャーが楽しめる国でワーホリ体験。",
    features: ["自然", "アドベンチャー", "英語学習", "安全"]
  },
  uk: {
    nameJa: "イギリス",
    nameEn: "United Kingdom",
    description: "歴史と文化が息づくヨーロッパの中心地でワーホリ体験。",
    features: ["歴史", "文化", "英語学習", "ヨーロッパ"]
  },
  ireland: {
    nameJa: "アイルランド",
    nameEn: "Ireland",
    description: "緑豊かな自然とケルト文化が魅力の国でワーホリ体験。",
    features: ["自然", "ケルト文化", "英語学習", "親切な人々"]
  },
  france: {
    nameJa: "フランス",
    nameEn: "France",
    description: "芸術・ファッション・美食の本場、ヨーロッパの中心地でワーホリ体験。",
    features: ["芸術", "ファッション", "美食", "文化"]
  },
  germany: {
    nameJa: "ドイツ",
    nameEn: "Germany",
    description: "効率性と文化が融合したヨーロッパの大国でワーホリ体験。",
    features: ["効率性", "文化", "歴史", "技術"]
  },
  spain: {
    nameJa: "スペイン",
    nameEn: "Spain",
    description: "情熱的な文化と美しい地中海の国でワーホリ体験。",
    features: ["文化", "地中海", "情熱", "歴史"]
  },
  italy: {
    nameJa: "イタリア",
    nameEn: "Italy",
    description: "芸術・歴史・美食が息づく地中海の国でワーホリ体験。",
    features: ["芸術", "歴史", "美食", "地中海"]
  },
  portugal: {
    nameJa: "ポルトガル",
    nameEn: "Portugal",
    description: "大航海時代の歴史と美しい海岸線が魅力の国でワーホリ体験。",
    features: ["歴史", "海岸線", "文化", "温暖な気候"]
  },
  austria: {
    nameJa: "オーストリア",
    nameEn: "Austria",
    description: "音楽と芸術が息づくアルプスの国でワーホリ体験。",
    features: ["音楽", "芸術", "アルプス", "文化"]
  },
  norway: {
    nameJa: "ノルウェー",
    nameEn: "Norway",
    description: "フィヨルドとオーロラが美しい北欧の国でワーホリ体験。",
    features: ["フィヨルド", "オーロラ", "北欧", "自然"]
  },
  denmark: {
    nameJa: "デンマーク",
    nameEn: "Denmark",
    description: "幸福度が高く、デザインが美しい北欧の国でワーホリ体験。",
    features: ["幸福度", "デザイン", "北欧", "生活の質"]
  },
  poland: {
    nameJa: "ポーランド",
    nameEn: "Poland",
    description: "歴史と文化が豊かな中欧の国でワーホリ体験。",
    features: ["歴史", "文化", "中欧", "伝統"]
  },
  czech: {
    nameJa: "チェコ",
    nameEn: "Czech Republic",
    description: "美しい建築とビール文化が魅力の中欧の国でワーホリ体験。",
    features: ["建築", "ビール", "中欧", "文化"]
  },
  hungary: {
    nameJa: "ハンガリー",
    nameEn: "Hungary",
    description: "温泉と歴史が豊かな中欧の国でワーホリ体験。",
    features: ["温泉", "歴史", "中欧", "文化"]
  },
  slovakia: {
    nameJa: "スロバキア",
    nameEn: "Slovakia",
    description: "美しい山々と歴史が息づく中欧の国でワーホリ体験。",
    features: ["山々", "歴史", "中欧", "自然"]
  },
  iceland: {
    nameJa: "アイスランド",
    nameEn: "Iceland",
    description: "火山と氷河が織りなす神秘的な国でワーホリ体験。",
    features: ["火山", "氷河", "神秘", "自然"]
  },
  southkorea: {
    nameJa: "韓国",
    nameEn: "South Korea",
    description: "K-POPとテクノロジーが発展したアジアの国でワーホリ体験。",
    features: ["K-POP", "テクノロジー", "アジア", "文化"]
  },
  taiwan: {
    nameJa: "台湾",
    nameEn: "Taiwan",
    description: "美食と親切な人々が魅力のアジアの国でワーホリ体験。",
    features: ["美食", "親切", "アジア", "文化"]
  },
  hongkong: {
    nameJa: "香港",
    nameEn: "Hong Kong",
    description: "東洋と西洋が融合した国際都市でワーホリ体験。",
    features: ["国際都市", "融合", "アジア", "ビジネス"]
  },
  argentina: {
    nameJa: "アルゼンチン",
    nameEn: "Argentina",
    description: "タンゴとワインが魅力の南米の国でワーホリ体験。",
    features: ["タンゴ", "ワイン", "南米", "文化"]
  },
  chile: {
    nameJa: "チリ",
    nameEn: "Chile",
    description: "細長い国土と美しい自然が魅力の南米の国でワーホリ体験。",
    features: ["自然", "国土", "南米", "地理"]
  },
  estonia: {
    nameJa: "エストニア",
    nameEn: "Estonia",
    description: "デジタル化が進んだバルト三国の国でワーホリ体験。",
    features: ["デジタル化", "バルト三国", "北欧", "技術"]
  },
  lithuania: {
    nameJa: "リトアニア",
    nameEn: "Lithuania",
    description: "美しい旧市街と歴史が息づくバルト三国の国でワーホリ体験。",
    features: ["旧市街", "歴史", "バルト三国", "文化"]
  },
  netherlands: {
    nameJa: "オランダ",
    nameEn: "Netherlands",
    description: "風車とチューリップが美しい低地の国でワーホリ体験。",
    features: ["風車", "チューリップ", "低地", "文化"]
  },
  finland: {
    nameJa: "フィンランド",
    nameEn: "Finland",
    description: "サウナと教育が発達した北欧の国でワーホリ体験。",
    features: ["サウナ", "教育", "北欧", "生活"]
  },
  latvia: {
    nameJa: "ラトビア",
    nameEn: "Latvia",
    description: "美しい建築と自然が調和したバルト三国の国でワーホリ体験。",
    features: ["建築", "自然", "バルト三国", "調和"]
  },
  uruguay: {
    nameJa: "ウルグアイ",
    nameEn: "Uruguay",
    description: "美しいビーチと安全な環境が魅力の南米の国でワーホリ体験。",
    features: ["ビーチ", "安全", "南米", "環境"]
  },
  luxembourg: {
    nameJa: "ルクセンブルク",
    nameEn: "Luxembourg",
    description: "小さな国ながら多文化が共存するヨーロッパの国でワーホリ体験。",
    features: ["多文化", "共存", "ヨーロッパ", "国際"]
  },
  sweden: {
    nameJa: "スウェーデン",
    nameEn: "Sweden",
    description: "福祉とデザインが発達した北欧の国でワーホリ体験。",
    features: ["福祉", "デザイン", "北欧", "生活の質"]
  }
}; 