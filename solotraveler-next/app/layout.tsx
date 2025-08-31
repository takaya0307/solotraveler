import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ワーホリパス｜ワーホリで行ける国一覧・比較・人気都市・魅力を徹底解説",
  description: "オーストラリア、カナダ、ニュージーランドなど世界各国のワーホリ国・都市を徹底比較。人気都市、魅力の情報を網羅。あなたに合ったワーホリプランが見つかります。",
  keywords: "ワーホリパス,ワーホリ費用,ワーホリ条件,ワーホリエージェント,ワーホリビザ,海外就労,海外生活,語学留学,国際交流,オーストラリアワーホリ,カナダワーホリ,ニュージーランドワーホリ,イギリスワーホリ,アイルランドワーホリ,フランスワーホリ,ドイツワーホリ,スペインワーホリ,イタリアワーホリ,ポルトガルワーホリ,オーストリアワーホリ,ノルウェーワーホリ,デンマークワーホリ,ポーランドワーホリ,チェコワーホリ,ハンガリーワーホリ,スロバキアワーホリ,アイスランドワーホリ,韓国ワーホリ,台湾ワーホリ,香港ワーホリ,アルゼンチンワーホリ,チリワーホリ,エストニアワーホリ,リトアニアワーホリ,オランダワーホリ,フィンランドワーホリ,ラトビアワーホリ,ウルグアイワーホリ,ルクセンブルクワーホリ,スウェーデンワーホリ",
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
    canonical: '/',
    languages: {
      'ja-JP': '/',
    },
  },
  openGraph: {
    title: "ワーホリパス｜ワーホリで行ける国一覧・比較・人気都市・魅力を徹底解説",
    description: "オーストラリア、カナダ、ニュージーランドなど世界各国のワーホリ国・都市を徹底比較。人気都市、魅力の情報を網羅。あなたに合ったワーホリプランが見つかります。",
    url: 'https://workingholidaypass.jp', 
    siteName: 'ワーホリパス',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: 'ワーホリパス｜ワーホリで行ける国一覧・比較・人気都市・魅力を徹底解説',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ワーホリパス｜ワーホリで行ける国一覧・比較・人気都市・魅力を徹底解説",
    description: "オーストラリア、カナダ、ニュージーランドなど世界各国のワーホリ国・都市を徹底比較。人気都市、魅力の情報を網羅。あなたに合ったワーホリプランが見つかります。",
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
    'article:tag': 'ワーホリ,ワーホリ費用,ワーホリ条件,ワーホリエージェント,ワーホリビザ,海外就労,海外生活,語学留学,国際交流,オーストラリア,カナダ,ニュージーランド,イギリス,アイルランド,フランス,ドイツ,スペイン,イタリア,ポルトガル,オーストリア,ノルウェー,デンマーク,ポーランド,チェコ,ハンガリー,スロバキア,アイスランド,韓国,台湾,香港,アルゼンチン,チリ,エストニア,リトアニア,オランダ,フィンランド,ラトビア,ウルグアイ,ルクセンブルク,スウェーデン',
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
        
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PFXX92MJ');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4K2MGYJY8L"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4K2MGYJY8L');
          `}
        </Script>
        <link rel="icon" href="/favicon.png" />
        {/* 日本語サイト指定 */}
        <meta name="hreflang" content="ja-JP" />
        <link rel="alternate" hrefLang="ja-JP" href="https://workingholidaypass.jp" />
        <link rel="alternate" hrefLang="x-default" href="https://workingholidaypass.jp" />
      </head>
      <body
        className={`${inter.variable} ${dancingScript.variable} antialiased`}
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
