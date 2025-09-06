"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import chileData from "../../../db.json";

export default function ChileDetailPage() {
  const country = chileData.countries.find(c => c.id === "chile")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "ワイン・自然・文化の国";
  
  const countryDescription = "チリは、美しいワイン、豊かな自然、そして深い文化を持つ国です。サンティアゴをはじめとする美しい都市、そしてアンデス山脈やパタゴニアの自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "ワインの国",
      description: "世界最高級のチリワイン",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "チリのワイン"
    },
    {
      title: "豊かな自然",
      description: "アンデス山脈とパタゴニア",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "チリの自然"
    },
    {
      title: "豊かな文化",
      description: "伝統的なチリ文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "チリの文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "南北に長い国で、地域により気候が大きく異なります。北部は砂漠、中部は地中海性気候、南部は寒い気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "チリ人は親切でフレンドリー、家族を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "スペイン語学習環境：スペイン語圏で、本格的なスペイン語を学べる",
    "豊富な文化体験：ワイン、美術、音楽など豊富な文化施設",
    "南米旅行の拠点：他の南米各国へのアクセスが便利",
    "自然体験：美しい山々や海岸線でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "スペイン語学習：スペイン語圏で、本格的なスペイン語を学べる環境",
    "充実した語学学校：語学学校も充実しており、スペイン語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "チリには美しいアンデス山脈、パタゴニア、海岸線など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣り、ワイン畑巡りなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";

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
