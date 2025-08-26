"use client";
"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import argentinaData from "../../../db.json";


export default function ArgentinaDetailPage() {
  const country = argentinaData.countries.find(c => c.id === "argentina")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ アルゼンチン比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `アルゼンチンワーホリの費用、条件、おすすめエージェントを徹底比較。タンゴ・ワイン・自然の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "タンゴ・ワイン・自然の国";
  
  const countryDescription = "アルゼンチンは、情熱的なタンゴ、世界最高級のワイン、そして豊かな自然を持つ国です。ブエノスアイレスをはじめとする美しい都市、そしてパタゴニアの自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "タンゴの国",
      description: "情熱的なタンゴ文化",
      imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アルゼンチンのタンゴ"
    },
    {
      title: "ワインの国",
      description: "世界最高級のアルゼンチンワイン",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アルゼンチンのワイン"
    },
    {
      title: "豊かな自然",
      description: "パタゴニアとアンデス山脈",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アルゼンチンの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "南北に長い国で、地域により気候が大きく異なります。北部は亜熱帯、中部は温暖、南部は寒い気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "アルゼンチン人は情熱的でフレンドリー、家族を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "スペイン語学習環境：スペイン語圏で、本格的なスペイン語を学べる",
    "豊富な文化体験：タンゴ、ワイン、美術など豊富な文化施設",
    "南米旅行の拠点：他の南米各国へのアクセスが便利",
    "自然体験：美しい山々や海岸線でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "スペイン語学習：スペイン語圏で、本格的なスペイン語を学べる環境",
    "充実した語学学校：語学学校も充実しており、スペイン語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "アルゼンチンには美しいパタゴニア、アンデス山脈、海岸線など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣り、ワイン畑巡りなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "タンゴ好き",
      description: "情熱的なタンゴ文化を体験したい人に最適。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "💃"
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
      title: "ワイン好き",
      description: "世界最高級のアルゼンチンワインを体験したい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🍷"
    },
    {
      title: "自然好き",
      description: "美しいパタゴニアやアンデス山脈を満喫したい人に最適。",
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