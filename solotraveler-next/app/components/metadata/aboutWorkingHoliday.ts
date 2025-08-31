import { Metadata } from "next";

export function generateAboutWorkingHolidayMetadata(): Metadata {
  const title = "ワーホリとは？制度の仕組み・条件・メリット・デメリット・申請方法を徹底解説 | ワーホリパス";
  
  // 150-160文字のディスクリプション
  const description = "ワーホリ（ワーキングホリデー）とは何か？18〜30歳対象の制度の仕組み、参加条件、メリット・デメリット、申請方法、滞在可能な国を詳しく解説。初心者向けにわかりやすく説明します。";
  
  // 体系化されたキーワード（重複排除済み）
  const keywords = [
    // メインキーワード
    "ワーホリ",
    "ワーホリとは",
    "ワーキングホリデー",
    "制度",
    "仕組み",
    // 条件・要件
    "条件",
    "対象年齢",
    "滞在期間",
    "申請方法",
    "必要書類",
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
    "比較"
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
          alt: 'ワーホリとは？制度の仕組み・条件・メリット・デメリット・申請方法を徹底解説',
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