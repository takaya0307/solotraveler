"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import icelandData from "../../../db.json";


export default function IcelandDetailPage() {
  const country = icelandData.countries.find(c => c.id === "iceland")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ アイスランド比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `アイスランドワーホリの費用、条件、おすすめエージェントを徹底比較。オーロラ・火山・温泉の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "オーロラ・火山・温泉の国";
  
  const countryDescription = "アイスランドは、美しいオーロラ、活発な火山、そして温泉を持つ国です。レイキャビクをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "オーロラの国",
      description: "美しい北極光の観測",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アイスランドのオーロラ"
    },
    {
      title: "火山の国",
      description: "活発な火山活動と地熱",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アイスランドの火山"
    },
    {
      title: "温泉の国",
      description: "豊富な温泉と地熱資源",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アイスランドの温泉"
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
      description: "アイスランド人は親切でフレンドリー、自然を愛する人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "アイスランド語学習環境：アイスランド語圏で、本格的なアイスランド語を学べる",
    "豊富な自然体験：オーロラ、火山、温泉など豊富な自然現象",
    "北欧文化体験：北欧の伝統文化と現代的なライフスタイル",
    "オーロラ体験：美しい北極光を観測できる環境"
  ];
  
  const englishLearningEnvironment = [
    "アイスランド語学習：アイスランド語圏で、本格的なアイスランド語を学べる環境",
    "充実した語学学校：語学学校も充実しており、アイスランド語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "アイスランドには美しいオーロラ、火山、温泉、氷河など、様々な自然環境があります。オーロラ観測、温泉、ハイキング、スキーなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "オーロラ好き",
      description: "美しい北極光を観測したい人に最適。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "✨"
    },
    {
      title: "アイスランド語学習",
      description: "アイスランド語を本格的に学びたい人に最適。アイスランド語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "温泉好き",
      description: "豊富な温泉を体験したい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "♨️"
    },
    {
      title: "自然好き",
      description: "美しい自然現象を満喫したい人に最適。",
      color: "#C2410C",
      borderColor: "#F97316",
      bgColor: "#FFF7ED",
      icon: "🏔️"
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