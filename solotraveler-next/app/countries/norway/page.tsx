"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import norwayData from "../../../db.json";

export default function NorwayDetailPage() {
  const country = norwayData.countries.find(c => c.id === "norway")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "フィヨルド・オーロラ・自然の国";
  
  const countryDescription = "ノルウェーは、美しいフィヨルド、オーロラ、そして豊かな自然で知られる国です。世界最高の生活水準と美しい景観を満喫できる環境です。";
  
  const countryFeatures = [
    {
      title: "フィヨルド",
      description: "世界で最も美しいフィヨルド",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ノルウェーのフィヨルド"
    },
    {
      title: "オーロラ",
      description: "美しい北極光の観測",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ノルウェーのオーロラ"
    },
    {
      title: "自然豊か",
      description: "広大な森と美しい山々",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ノルウェーの自然"
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
      description: "ノルウェー人は控えめで誠実、自然を愛する人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "ノルウェー語学習環境：ノルウェー語圏で、本格的なノルウェー語を学べる",
    "豊富な自然体験：フィヨルドや山々でのアウトドアアクティビティ",
    "オーロラ体験：美しい北極光を観測できる環境",
    "北欧文化体験：北欧の伝統文化と現代的なライフスタイル"
  ];
  
  const englishLearningEnvironment = [
    "ノルウェー語学習：ノルウェー語圏で、本格的なノルウェー語を学べる環境",
    "充実した語学学校：語学学校も充実しており、ノルウェー語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "ノルウェーには美しいフィヨルド、山々、森、国立公園など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣り、クルーズなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "自然好き",
      description: "美しいフィヨルドや山々を満喫したい人に最適。自然豊かな環境で過ごせます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🏔️"
    },
    {
      title: "ノルウェー語学習",
      description: "ノルウェー語を本格的に学びたい人に最適。ノルウェー語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "オーロラ体験",
      description: "美しい北極光を観測したい人に最適。オーロラの本場を体験できます。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "✨"
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