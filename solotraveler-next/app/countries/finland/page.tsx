"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import finlandData from "../../../db.json";

export default function FinlandDetailPage() {
  const country = finlandData.countries.find(c => c.id === "finland")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "サンタ・オーロラ・森の国";
  
  const countryDescription = "フィンランドは、サンタクロースの故郷として知られ、美しい森とオーロラ、そして優れた教育制度を持つ国です。自然と調和した生活を送ることができる環境です。";
  
  const countryFeatures = [
    {
      title: "オーロラ",
      description: "美しい北極光の観測",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "フィンランドのオーロラ"
    },
    {
      title: "森の国",
      description: "広大な森と美しい湖",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "フィンランドの森"
    },
    {
      title: "サンタクロース",
      description: "サンタクロースの故郷",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "サンタクロースの故郷"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。北部は極夜や白夜の現象があります。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "非常に安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "フィンランド人は控えめで誠実、自然を愛する人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "フィンランド語学習環境：フィンランド語圏で、本格的なフィンランド語を学べる",
    "豊富な自然体験：広大な森や美しい湖でのアウトドアアクティビティ",
    "オーロラ体験：美しい北極光を観測できる環境",
    "北欧文化体験：北欧の伝統文化と現代的なライフスタイル"
  ];
  
  const englishLearningEnvironment = [
    "フィンランド語学習：フィンランド語圏で、本格的なフィンランド語を学べる環境",
    "充実した語学学校：語学学校も充実しており、フィンランド語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "フィンランドには広大な森、美しい湖、国立公園など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣り、サウナなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";

  return (
    <CountryDetailLayout
      country={country}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      countryDescription={countryDescription}
      countryFeatures={countryFeatures}
      countryAtmosphere={countryAtmosphere}
      workingHolidayReasons={workingHolidayReasons}
      englishLearningEnvironment={englishLearningEnvironment}
      outdoorLifeDescription={outdoorLifeDescription}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
