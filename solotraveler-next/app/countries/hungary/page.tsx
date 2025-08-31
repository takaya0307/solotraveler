"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import hungaryData from "../../../db.json";

export default function HungaryDetailPage() {
  const country = hungaryData.countries.find(c => c.id === "hungary")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "温泉・文化・歴史の国";
  
  const countryDescription = "ハンガリーは、温泉、豊かな文化、深い歴史を持つ国です。ブダペストをはじめとする美しい都市、そして温泉文化を満喫できます。";
  
  const countryFeatures = [
    {
      title: "温泉の国",
      description: "世界有数の温泉と温泉文化",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ハンガリーの温泉"
    },
    {
      title: "豊かな文化",
      description: "伝統的なハンガリー文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ハンガリーの文化"
    },
    {
      title: "美しい建築",
      description: "歴史的建造物と美しい街並み",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ハンガリーの建築"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。温泉は一年中楽しめます。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ハンガリー人は親切でフレンドリー、文化を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "ハンガリー語学習環境：ハンガリー語圏で、本格的なハンガリー語を学べる",
    "豊富な文化体験：温泉、美術、音楽など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "温泉体験：世界有数の温泉文化を体験できる環境"
  ];
  
  const englishLearningEnvironment = [
    "ハンガリー語学習：ハンガリー語圏で、本格的なハンガリー語を学べる環境",
    "充実した語学学校：語学学校も充実しており、ハンガリー語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "ハンガリーには美しい山々、森、湖、温泉など、様々な自然環境があります。ハイキング、スキー、温泉、釣りなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "温泉好き",
      description: "世界有数の温泉を体験したい人に最適。ハンガリーの温泉文化を満喫できます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "♨️"
    },
    {
      title: "ハンガリー語学習",
      description: "ハンガリー語を本格的に学びたい人に最適。ハンガリー語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "文化体験",
      description: "伝統的なハンガリー文化を体験したい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🎭"
    },

  ];

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
      recommendedFor={recommendedFor}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
} 