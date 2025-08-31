"use client";

import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import canadaData from "../../../db.json";
export default function CanadaDetailPage() {
  const country = canadaData.countries.find(c => c.id === "canada")!;

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "自然と都市が調和した北米の魅力あふれる国";
  
  const countryDescription = "カナダは、広大な国土と豊かな自然、そして多文化社会が特徴の北米の国です。都市部では近代的な生活を送りながら、すぐ近くで大自然を満喫できる環境が整っています。";
  
  const countryFeatures = [
    {
      title: "自然と都市の調和",
      description: "都市部からすぐに大自然へアクセス可能",
      imageUrl: "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=600&auto=format&fit=crop&q=60",
      imageAlt: "カナダの自然と都市"
    },
    {
      title: "多文化社会",
      description: "様々な国の文化が融合した環境",
      imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&auto=format&fit=crop&q=60",
      imageAlt: "多文化社会"
    },
    {
      title: "四季の美しさ",
      description: "春夏秋冬それぞれの季節の魅力",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop&q=60",
      imageAlt: "四季の美しさ"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "地域によって大きく異なりますが、全体的に四季がはっきりしており、夏は温暖、冬は寒い地域が多いです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "世界でも最も安全な国の一つとして知られています。日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "カナダ人は親切でフレンドリーな性格の人が多く、多文化社会を尊重する文化があります。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "英語学習環境：英語圏で、比較的聞き取りやすいカナダ英語",
    "豊富な仕事：観光業やサービス業の仕事が豊富で、ワーホリビザでも比較的仕事を見つけやすい",
    "高い賃金：最低賃金が高いため、生活費を稼ぎながら英語を学べる",
    "自然体験：都市部からすぐにアクセスできる大自然でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "聞き取りやすい英語：カナダ英語は比較的聞き取りやすく、英語学習初心者にも適しています",
    "充実した語学学校：語学学校も充実しており、英語力を伸ばすのに最適な環境です",
    "多文化社会：様々な国の人々と交流でき、実践的な英語力を身につけることができます"
  ];
  
  const outdoorLifeDescription = "ロッキー山脈、美しい湖、広大な森林など、自然が豊富です。ハイキング、スキー、キャンプ、カヤックなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "自然好き",
      description: "都市部からすぐにアクセスできる大自然が魅力。四季折々の自然を満喫できます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🏔️"
    },
    {
      title: "英語を学びたい",
      description: "英語圏で、比較的聞き取りやすいカナダ英語。語学学校も充実しています。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "多文化体験",
      description: "様々な国の文化が融合した環境で、グローバルな視点を身につけられます。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🌍"
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