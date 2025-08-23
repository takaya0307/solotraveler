import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const title = "ワーホリとは？ワーキングホリデーの意味・制度を解説";
  const description =
    "ワーホリとは何かを初心者向けに解説。対象年齢や条件、滞在可能な国、期間、費用、申請の流れ、メリット・デメリット、FAQまで。";
  const url = "https://solotraveler-next.vercel.app/about-workingholiday";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "ワーホリパス",
      type: "article",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
    other: { "last-modified": new Date().toISOString() },
  };
};

export default function AboutWorkingHolidayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 