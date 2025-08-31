import { Metadata } from "next";

export function generateMainPageMetadata(): Metadata {
  const title = "ワーホリパス｜ワーホリで行ける国一覧・比較・人気都市・魅力を徹底解説";
  
  // 150-160文字のディスクリプション
  const description = "オーストラリア、カナダ、ニュージーランドなど世界各国のワーホリ国・都市を徹底比較。人気都市、魅力の情報を網羅。あなたに合ったワーホリプランが見つかります。";
  
  // 体系化されたキーワード（重複排除済み）
  const keywords = [
    // メインキーワード
    "ワーホリパス",
    "ワーホリ",
    "ワーキングホリデー",
    // 主要国
    "オーストラリアワーホリ",
    "カナダワーホリ",
    "ニュージーランドワーホリ",
    "イギリスワーホリ",
    "アイルランドワーホリ",
    // ヨーロッパ
    "フランスワーホリ",
    "ドイツワーホリ",
    "スペインワーホリ",
    "イタリアワーホリ",
    // ワーホリ関連
    "ワーホリ費用",
    "ワーホリ条件",
    "ワーホリエージェント",
    "ワーホリビザ",
    "海外就労",
    "海外生活",
    // 実用的なキーワード
    "語学留学",
    "国際交流",
    "比較",
    "一覧"
  ].join(",");

  return {
    title,
    description,
    keywords,
    authors: [{ name: "ワーホリパス" }],
    creator: "ワーホリパス",
    publisher: "ワーホリパス",
    alternates: {
      canonical: "https://workingholidaypass.jp",
      languages: {
        'ja-JP': '/',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://workingholidaypass.jp',
      siteName: 'ワーホリパス',
      locale: 'ja_JP',
      type: 'website',
      images: [
        {
          url: '/ogp.png',
          width: 1200,
          height: 630,
          alt: 'ワーホリパス｜ワーホリで行ける国一覧・比較・費用・条件・おすすめエージェント',
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
      'article:section': 'ワーホリ情報',
      'article:tag': keywords.split(','),
    },
  };
} 