"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import swedenData from "../../../db.json";

export default function SwedenDetailPage() {
  const country = swedenData.countries.find(c => c.id === "sweden")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ スウェーデン比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `スウェーデンワーホリの費用、条件、おすすめエージェントを徹底比較。福祉・自然・デザインの国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーキングホリデーの魅力`;
  const pageDescription = "福祉・自然・デザインの国";
  
  const countryDescription = "スウェーデンは、高福祉国家として知られ、美しい自然と優れたデザイン文化を持つ国です。ストックホルムをはじめとする美しい都市、広大な森や湖など、北欧の魅力を満喫できます。";
  
  const countryFeatures = [
    {
      title: "高福祉社会",
      description: "充実した社会保障制度",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "スウェーデンの高福祉社会"
    },
    {
      title: "美しい自然",
      description: "広大な森と美しい湖",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "スウェーデンの自然"
    },
    {
      title: "デザイン文化",
      description: "北欧デザインの本場",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "スウェーデンのデザイン文化"
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
      description: "スウェーデン人は控えめで礼儀正しく、平等を重視する人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "スウェーデン語学習環境：スウェーデン語圏で、本格的なスウェーデン語を学べる",
    "豊富な自然体験：広大な森や美しい湖でのアウトドアアクティビティ",
    "北欧文化体験：北欧の伝統文化と現代的なライフスタイル",
    "デザイン体験：北欧デザインの本場でデザイン文化を学べる環境"
  ];
  
  const englishLearningEnvironment = [
    "スウェーデン語学習：スウェーデン語圏で、本格的なスウェーデン語を学べる環境",
    "充実した語学学校：語学学校も充実しており、スウェーデン語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "スウェーデンには広大な森、美しい湖、国立公園など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣りなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "自然好き",
      description: "広大な森や美しい湖を満喫したい人に最適。自然豊かな環境で過ごせます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🌲"
    },
    {
      title: "スウェーデン語学習",
      description: "スウェーデン語を本格的に学びたい人に最適。スウェーデン語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "デザイン好き",
      description: "北欧デザインの本場でデザイン文化を学びたい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🎨"
    },
    {
      title: "福祉に興味",
      description: "高福祉社会の仕組みを学びたい人に最適。充実した社会保障制度を体験できます。",
      color: "#C2410C",
      borderColor: "#F97316",
      bgColor: "#FFF7ED",
      icon: "🏥"
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