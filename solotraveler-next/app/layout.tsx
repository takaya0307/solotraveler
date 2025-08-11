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
  title: "ワーホリ比較｜オーストラリア・カナダ・ニュージーランドなど費用・条件を徹底比較",
  description: "オーストラリア、カナダ、ニュージーランドなど世界各国のワーホリ費用・条件・おすすめエージェントを徹底比較。あなたに合ったワーホリプランが見つかります。",
  keywords: "ワーホリ比較,ワーホリ費用,ワーホリ条件,オーストラリアワーホリ,カナダワーホリ,ニュージーランドワーホリ,イギリスワーホリ,アイルランドワーホリ,フランスワーホリ,ドイツワーホリ,スペインワーホリ,イタリアワーホリ,ポルトガルワーホリ,オーストリアワーホリ,ノルウェーワーホリ,デンマークワーホリ,ポーランドワーホリ,チェコワーホリ,海外就労,海外生活",
  authors: [{ name: "ワーホリ比較サイト" }],
  creator: "ワーホリ比較サイト",
  publisher: "ワーホリ比較サイト",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://workingholidaypass.jp'), // 実際のドメインに変更してください
  alternates: {
    canonical: '/',
    languages: {
      'ja-JP': '/',
    },
  },
  openGraph: {
    title: "ワーホリ比較｜オーストラリア・カナダ・ニュージーランドなど費用・条件を徹底比較",
    description: "オーストラリア、カナダ、ニュージーランドなど世界各国のワーホリ費用・条件・おすすめエージェントを徹底比較。あなたに合ったワーホリプランが見つかります。",
    url: 'https://workingholidaypass.jp', // 実際のドメインに変更してください
    siteName: 'ワーホリ比較サイト',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: 'ワーホリ比較｜オーストラリア・カナダ・ニュージーランドなど費用・条件を徹底比較',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ワーホリ比較｜オーストラリア・カナダ・ニュージーランドなど費用・条件を徹底比較",
    description: "オーストラリア、カナダ、ニュージーランドなど世界各国のワーホリ費用・条件・おすすめエージェントを徹底比較。あなたに合ったワーホリプランが見つかります。",
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
    google: 'G-4K2MGYJY8L', // Google Search Consoleの検証コード（GA4と同じIDを使用）
  },
  other: {
    'hreflang': 'ja-JP',
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
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* 日本語サイト指定 */}
        <meta name="hreflang" content="ja-JP" />
        <link rel="alternate" hrefLang="ja-JP" href="https://workingholidaypass.jp" />
        <link rel="alternate" hrefLang="x-default" href="https://workingholidaypass.jp" />
      </head>
      <body
        className={`${inter.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
