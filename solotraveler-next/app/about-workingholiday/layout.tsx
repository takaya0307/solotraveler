import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const title = "ワーホリとは？制度の仕組み・条件・メリットを徹底解説 | ワーホリパス";
  const description =
    "ワーホリ（ワーキングホリデー）とは何か？18〜30歳対象の制度の仕組み、参加条件、メリット・デメリット、申請方法、滞在可能な国を詳しく解説。初心者向けにわかりやすく説明します。";
  const keywords = "ワーホリ, ワーホリとは, ワーキングホリデー, 制度, 条件, メリット, デメリット, 申請方法, 対象年齢, 滞在期間, 費用";
  const url = "https://solotraveler-next.vercel.app/about-workingholiday";

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "ワーホリパス",
      type: "article",
      locale: "ja_JP",
      images: [
        {
          url: "https://solotraveler-next.vercel.app/ogp.png",
          width: 1200,
          height: 630,
          alt: "ワーホリとは？制度の仕組み・条件・メリットを徹底解説",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://solotraveler-next.vercel.app/ogp.png"],
    },
    robots: { 
      index: true, 
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: { 
      "last-modified": new Date().toISOString(),
      "article:published_time": "2024-01-01T00:00:00.000Z",
      "article:modified_time": new Date().toISOString(),
      "article:author": "ワーホリパス",
      "article:section": "ワーホリ情報",
      "article:tag": keywords.split(", "),
    },
    verification: {
      google: "your-google-verification-code", // Google Search Consoleの検証コードを設定
    },
  };
};

export default function AboutWorkingHolidayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 