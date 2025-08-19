"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import uruguayData from "../../../db.json";

export default function UruguayDetailPage() {
  const country = uruguayData.countries.find(c => c.id === "uruguay")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ ウルグアイ比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `ウルグアイワーホリの費用、条件、おすすめエージェントを徹底比較。ビーチ・文化・自然の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーキングホリデーの魅力`;
  const pageDescription = "ビーチ・文化・自然の国";
  
  const countryDescription = "ウルグアイは、美しいビーチ、豊かな文化、そして美しい自然を持つ国です。モンテビデオをはじめとする美しい都市、そして大西洋の海岸線を満喫できます。";
  
  const countryFeatures = [
    {
      title: "ビーチの国",
      description: "美しい大西洋の海岸線",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ウルグアイのビーチ"
    },
    {
      title: "豊かな文化",
      description: "伝統的なウルグアイ文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ウルグアイの文化"
    },
    {
      title: "美しい自然",
      description: "田園風景と美しい景観",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ウルグアイの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は比較的穏やかです。大西洋の影響で過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ウルグアイ人は親切でフレンドリー、家族を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "スペイン語学習環境：スペイン語圏で、本格的なスペイン語を学べる",
    "豊富な文化体験：美術、音楽、文学など豊富な文化施設",
    "南米旅行の拠点：他の南米各国へのアクセスが便利",
    "自然体験：美しいビーチや田園風景でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "スペイン語学習：スペイン語圏で、本格的なスペイン語を学べる環境",
    "充実した語学学校：語学学校も充実しており、スペイン語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "ウルグアイには美しいビーチ、田園風景、国立公園など、様々な自然環境があります。ビーチリゾート、ハイキング、キャンプ、釣りなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "ビーチ好き",
      description: "美しい大西洋のビーチを体験したい人に最適。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🏖️"
    },
    {
      title: "スペイン語学習",
      description: "スペイン語を本格的に学びたい人に最適。スペイン語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "文化体験",
      description: "伝統的なウルグアイ文化を体験したい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🎭"
    },
    {
      title: "自然好き",
      description: "美しい田園風景を満喫したい人に最適。",
      color: "#C2410C",
      borderColor: "#F97316",
      bgColor: "#FFF7ED",
      icon: "🌾"
    }
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
    />
  );
} 