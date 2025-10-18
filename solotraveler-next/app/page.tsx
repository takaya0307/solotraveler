
import React, { Suspense } from "react";
import { Metadata } from "next";
import Script from "next/script";
import HomePageClient from "./components/HomePageClient";
import { WorkingHolidayCountry } from "../types/types";

// サーバーサイドでメタデータを生成
export const metadata: Metadata = {
  title: "【2025年最新】ワーホリ対応31カ国一覧と人気都市",
  description: "31カ国のワーキングホリデー制度を比較。オーストラリア、カナダ、ニュージーランドなど人気国の条件や都市情報を詳しく紹介しています。",
  keywords: "ワーホリ,ワーキングホリデー,海外移住",
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
    title: "【2025年最新】ワーホリ対応31カ国一覧と人気都市",
    description: "31カ国のワーキングホリデー制度を比較。オーストラリア、カナダ、ニュージーランドなど人気国の条件や都市情報を詳しく紹介しています。",
    url: 'https://workingholidaypass.jp', 
    siteName: 'ワーホリパス',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: '【2025年最新】ワーホリ対応31カ国一覧と人気都市',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【2025年最新】ワーホリ対応31カ国一覧と人気都市",
    description: "31カ国のワーキングホリデー制度を比較。オーストラリア、カナダ、ニュージーランドなど人気国の条件や都市情報を詳しく紹介しています。",
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
    'article:tag': 'ワーホリ,ワーキングホリデー,海外移住',
  },
};

// サーバーサイドで構造化データを生成（1つに統一）
const generateStructuredData = (countries: WorkingHolidayCountry[]) => {
  return {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ワーホリパス",
    "description": "31カ国のワーキングホリデー制度を比較。オーストラリア、カナダ、ニュージーランドなど人気国の条件や都市情報を詳しく紹介しています。",
  "url": "https://workingholidaypass.jp",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://workingholidaypass.jp/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ワーホリパス",
    "url": "https://workingholidaypass.jp",
    "logo": {
      "@type": "ImageObject",
      "url": "https://workingholidaypass.jp/ogp.png"
    }
  },
  "mainEntity": {
    "@type": "ItemList",
      "name": "ワーキングホリデー協定国一覧",
      "description": "31カ国のワーキングホリデー制度の比較情報",
    "numberOfItems": countries.length,
    "itemListElement": countries.map((country, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": country.nameJa,
      "description": country.summary || country.recommendation || 'ワーホリ協定国です。',
      "url": `https://workingholidaypass.jp/countries/${country.id}`,
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "最低賃金",
          "value": country.minWage
        },
        {
          "@type": "PropertyValue",
          "name": "学べる言語",
          "value": country.languages
        },
        {
          "@type": "PropertyValue",
          "name": "滞在期間",
          "value": country.stayPeriod
        },
        {
          "@type": "PropertyValue",
          "name": "定員数",
          "value": country.quota
        }
      ]
    }))
    }
  };
};

// サーバーサイドでデータを取得
async function getCountriesData(): Promise<WorkingHolidayCountry[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://workingholidaypass.jp'}/api/countries`, {
      cache: 'force-cache', // 静的生成のためキャッシュを使用
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch countries data');
    }
    
    const data = await response.json();
    return data.countries || data || [];
  } catch (error) {
    console.error('Error fetching countries data:', error);
    return [];
  }
}

// サーバーサイドコンポーネント
export default async function Home({
  searchParams,
}: {
  searchParams: { countryId?: string };
}) {
  // サーバーサイドでデータを取得
  const countries = await getCountriesData();
  
  // 構造化データを生成
  const structuredData = generateStructuredData(countries);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageClient countries={countries} countryId={searchParams.countryId} />
      </Suspense>
      <Script id="main-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
    </>
  );
}

