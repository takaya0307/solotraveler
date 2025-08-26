"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import estoniaData from "../../../db.json";


export default function EstoniaDetailPage() {
  const country = estoniaData.countries.find(c => c.id === "estonia")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ エストニア比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `エストニアワーホリの費用、条件、おすすめエージェントを徹底比較。デジタル・文化・自然の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "デジタル・文化・自然の国";
  
  const countryDescription = "エストニアは、デジタル化が進んだ先進国で、豊かな文化と美しい自然を持つ国です。タリンをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "デジタル先進国",
      description: "世界最先端のデジタル技術",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "エストニアのデジタル技術"
    },
    {
      title: "豊かな文化",
      description: "伝統的なエストニア文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "エストニアの文化"
    },
    {
      title: "美しい自然",
      description: "森と湖の美しい景観",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "エストニアの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。バルト海の影響で比較的穏やかです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "エストニア人は親切でフレンドリー、技術を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "エストニア語学習環境：エストニア語圏で、本格的なエストニア語を学べる",
    "豊富な文化体験：建築、美術、音楽など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "デジタル体験：世界最先端のデジタル技術を体験できる環境"
  ];
  
  const englishLearningEnvironment = [
    "エストニア語学習：エストニア語圏で、本格的なエストニア語を学べる環境",
    "充実した語学学校：語学学校も充実しており、エストニア語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "エストニアには美しい森、湖、海岸線など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣り、ビーチリゾートなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "デジタル好き",
      description: "世界最先端のデジタル技術を体験したい人に最適。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "💻"
    },
    {
      title: "エストニア語学習",
      description: "エストニア語を本格的に学びたい人に最適。エストニア語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "自然好き",
      description: "美しい森や湖を満喫したい人に最適。自然豊かな環境で過ごせます。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🌲"
    },
    {
      title: "文化体験",
      description: "伝統的なエストニア文化を体験したい人に最適。",
      color: "#C2410C",
      borderColor: "#F97316",
      bgColor: "#FFF7ED",
      icon: "🎭"
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