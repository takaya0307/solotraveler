"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import latviaData from "../../../db.json";


export default function LatviaDetailPage() {
  const country = latviaData.countries.find(c => c.id === "latvia")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ ラトビア比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `ラトビアワーホリの費用、条件、おすすめエージェントを徹底比較。バルト海・文化・歴史の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "バルト海・文化・歴史の国";
  
  const countryDescription = "ラトビアは、バルト海に面し、豊かな文化と深い歴史を持つ国です。リガをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "バルト海",
      description: "美しい海岸線と海の景色",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ラトビアのバルト海"
    },
    {
      title: "豊かな文化",
      description: "伝統的なラトビア文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ラトビアの文化"
    },
    {
      title: "美しい建築",
      description: "アールヌーヴォー建築と歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ラトビアの建築"
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
      description: "ラトビア人は親切でフレンドリー、文化を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "ラトビア語学習環境：ラトビア語圏で、本格的なラトビア語を学べる",
    "豊富な文化体験：建築、美術、音楽など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "自然体験：美しい海岸線や森でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "ラトビア語学習：ラトビア語圏で、本格的なラトビア語を学べる環境",
    "充実した語学学校：語学学校も充実しており、ラトビア語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "ラトビアには美しい海岸線、森、湖など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣り、ビーチリゾートなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "海好き",
      description: "美しいバルト海を体験したい人に最適。海岸線を満喫できます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🌊"
    },
    {
      title: "ラトビア語学習",
      description: "ラトビア語を本格的に学びたい人に最適。ラトビア語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "建築好き",
      description: "美しいアールヌーヴォー建築を満喫したい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🏛️"
    },
    {
      title: "文化体験",
      description: "伝統的なラトビア文化を体験したい人に最適。",
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