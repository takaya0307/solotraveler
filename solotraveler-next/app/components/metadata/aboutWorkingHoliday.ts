import { Metadata } from "next";

export function generateAboutWorkingHolidayMetadata(): Metadata {
  const title = "【2025年最新】ワーホリとは？制度・人気国・費用・必要書類・FAQまとめ";
  
  // 150-160文字のディスクリプション
  const description = "ワーキングホリデー制度について詳しく解説。31カ国の条件や費用、申請方法など、海外就労を検討している方に必要な情報をまとめました。";
  
  // キーワード（3個に絞る）
  const keywords = [
    "ワーホリ国",
    "ワーホリとは",
    "ワーホリ年齢"
  ].join(",");

  return {
    title,
    description,
    keywords,
    authors: [{ name: "ワーホリパス" }],
    creator: "ワーホリパス",
    publisher: "ワーホリパス",
    alternates: {
      canonical: "https://workingholidaypass.jp/about-workingholiday",
      languages: {
        'ja-JP': '/about-workingholiday',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://workingholidaypass.jp/about-workingholiday',
      siteName: 'ワーホリパス',
      locale: 'ja_JP',
      type: 'article',
      images: [
        {
          url: '/ogp.png',
          width: 1200,
          height: 630,
          alt: '【2025年最新】ワーホリとは？制度・人気国・費用・必要書類・FAQまとめ',
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
      'article:section': 'ワーホリ基礎知識',
      'article:tag': keywords.split(','),
    },
  };
} 