import { Metadata } from "next";

export function generateAboutWorkingHolidayMetadata(): Metadata {
  const title = "【2025年最新】ワーホリとは？制度・人気国・費用・必要書類・FAQまとめ";
  
  // 150-160文字のディスクリプション
  const description = "ワーホリ（ワーキングホリデー）とは？制度の仕組みから人気国、かかる費用、必要書類、よくある質問まで初心者向けにわかりやすく解説。これ1ページで基本情報を網羅！";
  
  // 体系化されたキーワード（重複排除済み）
  const keywords = [
    // メインキーワード
    "ワーホリ",
    "ワーホリとは",
    "ワーキングホリデー",
    "制度",
    "仕組み",
    "2025年",
    "最新",
    // 条件・要件
    "条件",
    "対象年齢",
    "滞在期間",
    "申請方法",
    "必要書類",
    "31カ国",
    // メリット・デメリット
    "メリット",
    "デメリット",
    "利点",
    "注意点",
    // 実用的なキーワード
    "初心者",
    "解説",
    "説明",
    "ガイド",
    "比較",
    "完全ガイド"
  ].join(",");

  return {
    title,
    description,
    keywords,
    authors: [{ name: "ワーホリパス" }],
    creator: "ワーホリパス",
    publisher: "ワーホリパス",
    alternates: {
      canonical: "https://solotraveler-next.vercel.app/about-workingholiday",
      languages: {
        'ja-JP': '/about-workingholiday',
      },
    },
    openGraph: {
      title,
      description,
      url: 'https://solotraveler-next.vercel.app/about-workingholiday',
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