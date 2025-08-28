"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import luxembourgData from "../../../db.json";


export default function LuxembourgDetailPage() {
  const country = luxembourgData.countries.find(c => c.id === "luxembourg")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ ルクセンブルク比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `ルクセンブルクワーホリの費用、条件、おすすめエージェントを徹底比較。金融・文化・自然の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "金融・文化・自然の国";
  
  const countryDescription = "ルクセンブルクは、世界有数の金融センター、豊かな文化、そして美しい自然を持つ国です。ルクセンブルク市をはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "金融の国",
      description: "世界有数の金融センター",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ルクセンブルクの金融"
    },
    {
      title: "豊かな文化",
      description: "伝統的なルクセンブルク文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ルクセンブルクの文化"
    },
    {
      title: "美しい自然",
      description: "森と美しい景観",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ルクセンブルクの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は比較的穏やかです。比較的過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "非常に安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ルクセンブルク人は親切でフレンドリー、多文化を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "ルクセンブルク語学習環境：ルクセンブルク語圏で、本格的なルクセンブルク語を学べる",
    "豊富な文化体験：美術、音楽、歴史など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "自然体験：美しい森や田園風景でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "ルクセンブルク語学習：ルクセンブルク語圏で、本格的なルクセンブルク語を学べる環境",
    "充実した語学学校：語学学校も充実しており、ルクセンブルク語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "ルクセンブルクには美しい森、田園風景、国立公園など、様々な自然環境があります。ハイキング、サイクリング、キャンプ、釣りなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "金融好き",
      description: "世界有数の金融センターで働きたい人に最適。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "💰"
    },
    {
      title: "ルクセンブルク語学習",
      description: "ルクセンブルク語を本格的に学びたい人に最適。ルクセンブルク語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "文化体験",
      description: "伝統的なルクセンブルク文化を体験したい人に最適。",
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
    />
  );
} 