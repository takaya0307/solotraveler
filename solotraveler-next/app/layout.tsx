import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Kiwi_Maru } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  preload: true,
});

const kiwiMaru = Kiwi_Maru({
  variable: "--font-kiwi-maru",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "【2025年最新】ワーホリ対応31カ国一覧と人気都市",
  description: "31カ国のワーキングホリデー制度を比較。オーストラリア、カナダ、ニュージーランドなど人気国の条件や都市情報を詳しく紹介しています。",
  keywords: "ワーホリ国,ワーホリ,海外移住",
  authors: [{ name: "ワーホリパス" }],
  creator: "ワーホリパス",
  publisher: "ワーホリパス",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://workingholidaypass.jp'),
  alternates: {
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
  verification: {
    google: 'G-4K2MGYJY8L',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* iPhoneでの余白問題を修正するviewport設定 */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Google Analytics - パフォーマンス最適化済み */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script id="gtm" strategy="lazyOnload">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PFXX92MJ');
              `}
            </Script>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-4K2MGYJY8L"
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4K2MGYJY8L');
              `}
            </Script>
          </>
        )}
        <link rel="icon" href="/favicon.png" />
        
        {/* 重要なリソースのプリロード */}
        <link rel="preload" href="/ogp.png" as="image" type="image/png" />
        <link rel="preload" href="https://flagcdn.com/w20/au.png" as="image" type="image/png" />
        <link rel="preload" href="https://flagcdn.com/w20/ca.png" as="image" type="image/png" />
        <link rel="preload" href="https://flagcdn.com/w20/nz.png" as="image" type="image/png" />
        
        {/* LCP候補の画像をプリロード（fetchpriority="high"相当） */}
        <link 
          rel="preload" 
          href="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXVzdHJhbGlhfGVufDB8fDB8fHww" 
          as="image" 
          type="image/jpeg"
          fetchPriority="high"
        />
        
        {/* 通常のCSS読み込みに戻す */}
        <link rel="stylesheet" href="/_next/static/css/app/globals.css" />
        
        {/* 重要なドメインの事前接続 */}
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS プリフェッチ（フォールバック） */}
        <link rel="dns-prefetch" href="//flagcdn.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* 日本語サイト指定 */}
        <meta name="hreflang" content="ja-JP" />
        <link rel="alternate" hrefLang="ja-JP" href="https://workingholidaypass.jp" />
        <link rel="alternate" hrefLang="x-default" href="https://workingholidaypass.jp" />
      </head>
      <body
        className={`${inter.variable} ${dancingScript.variable} ${kiwiMaru.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PFXX92MJ"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
