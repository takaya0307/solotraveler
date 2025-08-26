"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import netherlandsData from "../../../db.json";


export default function NetherlandsDetailPage() {
  const country = netherlandsData.countries.find(c => c.id === "netherlands")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ オランダ比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `オランダワーホリの費用、条件、おすすめエージェントを徹底比較。風車・チューリップ・自由の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "風車・チューリップ・自由の国";
  
  const countryDescription = "オランダは、風車、チューリップ、自由な文化で知られる国です。アムステルダムをはじめとする美しい都市、美しい田園風景、そして進歩的な社会制度が特徴です。";
  
  const countryFeatures = [
    {
      title: "風車と田園",
      description: "美しい風車と広大な田園風景",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "オランダの風車と田園"
    },
    {
      title: "チューリップ",
      description: "世界最大のチューリップ畑",
      imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=60",
      imageAlt: "オランダのチューリップ"
    },
    {
      title: "自由な文化",
      description: "進歩的で自由な社会制度",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "オランダの自由な文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "海洋性気候で、夏は温暖、冬は比較的穏やかです。雨が多いですが、四季を通じて過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "オランダ人は率直でフレンドリー、平等を重視する人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "オランダ語学習環境：オランダ語圏で、本格的なオランダ語を学べる",
    "豊富な文化体験：風車、チューリップ、美術館など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "自由な文化体験：進歩的で自由な社会制度を体験できる環境"
  ];
  
  const englishLearningEnvironment = [
    "オランダ語学習：オランダ語圏で、本格的なオランダ語を学べる環境",
    "充実した語学学校：語学学校も充実しており、オランダ語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "オランダには美しい田園風景、海岸線、国立公園など、様々な自然環境があります。サイクリング、ハイキング、スケート、ビーチリゾートなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "自然好き",
      description: "美しい田園風景やチューリップ畑を満喫したい人に最適。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🌷"
    },
    {
      title: "オランダ語学習",
      description: "オランダ語を本格的に学びたい人に最適。オランダ語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "文化体験",
      description: "風車やチューリップなど、オランダ独特の文化を体験したい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🏛️"
    },
    {
      title: "自由な文化",
      description: "進歩的で自由な社会制度を体験したい人に最適。",
      color: "#C2410C",
      borderColor: "#F97316",
      bgColor: "#FFF7ED",
      icon: "🕊️"
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