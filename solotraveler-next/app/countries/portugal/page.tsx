"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import portugalData from "../../../db.json";

export default function PortugalDetailPage() {
  const country = portugalData.countries.find(c => c.id === "portugal")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "歴史・文化・自然の国";
  
  const countryDescription = "ポルトガルは、豊かな歴史と文化、美しい自然を持つ国です。リスボンをはじめとする美しい都市、そして美しい海岸線を満喫できます。";
  
  const countryFeatures = [
    {
      title: "豊かな歴史",
      description: "大航海時代の歴史と文化",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ポルトガルの歴史"
    },
    {
      title: "美しい文化",
      description: "伝統的なポルトガル文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ポルトガルの文化"
    },
    {
      title: "美しい自然",
      description: "海岸線と美しい景観",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ポルトガルの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "地中海性気候で、夏は温暖、冬は比較的穏やかです。海岸線は特に温暖で過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ポルトガル人は親切でフレンドリー、家族を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "ポルトガル語学習環境：ポルトガル語圏で、本格的なポルトガル語を学べる",
    "豊富な文化体験：歴史、美術、音楽など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "自然体験：美しい海岸線や田園風景でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "ポルトガル語学習：ポルトガル語圏で、本格的なポルトガル語を学べる環境",
    "充実した語学学校：語学学校も充実しており、ポルトガル語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "ポルトガルには美しい海岸線、田園風景、国立公園など、様々な自然環境があります。ビーチリゾート、ハイキング、サイクリング、キャンプなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";

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
