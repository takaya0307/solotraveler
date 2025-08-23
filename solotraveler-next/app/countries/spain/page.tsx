"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import spainData from "../../../db.json";


export default function SpainDetailPage() {
  const country = spainData.countries.find(c => c.id === "spain")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ スペイン比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `スペインワーホリの費用、条件、おすすめエージェントを徹底比較。情熱的な文化と美食、歴史が薫る国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーキングホリデーの魅力`;
  const pageDescription = "情熱的な文化と美食、歴史が薫る国";
  
  const countryDescription = "スペインは、情熱的な文化、豊かな美食、深い歴史を持つ国です。フラメンコ、闘牛、タパス文化など、独特の文化を体験でき、地中海の温暖な気候で過ごしやすい環境です。";
  
  const countryFeatures = [
    {
      title: "情熱的な文化",
      description: "フラメンコと闘牛文化",
      imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "スペインの情熱的な文化"
    },
    {
      title: "美食の国",
      description: "タパスと地中海料理",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "スペインの美食"
    },
    {
      title: "歴史的建造物",
      description: "アルハンブラ宮殿とサグラダ・ファミリア",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "歴史的建造物"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "地中海性気候で、夏は温暖、冬は比較的穏やかです。南部は特に温暖で過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "観光地は比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "スペイン人は情熱的でフレンドリー、家族を大切にする人が多いです。陽気で親しみやすい文化があります。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "スペイン語学習環境：スペイン語圏で、本格的なスペイン語を学べる",
    "豊富な文化施設：世界クラスの美術館や博物館が数多くある",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "文化体験：フラメンコや闘牛など独特の文化を体験できる環境"
  ];
  
  const englishLearningEnvironment = [
    "スペイン語学習：スペイン語圏で、本格的なスペイン語を学べる環境",
    "充実した語学学校：語学学校も充実しており、スペイン語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "スペインには美しい海岸線、山々、田園風景など、様々な自然環境があります。ハイキング、スキー、ビーチリゾート、サイクリングなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "文化体験好き",
      description: "フラメンコや闘牛など、スペイン独特の文化を体験したい人に最適。",
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
      title: "美食家",
      description: "タパスや地中海料理を楽しみたい人に最適。食の本場を体験できます。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🍷"
    },
    {
      title: "歴史好き",
      description: "アルハンブラ宮殿やサグラダ・ファミリアなど、歴史的建造物を満喫したい人に最適。",
      color: "#C2410C",
      borderColor: "#F97316",
      bgColor: "#FFF7ED",
      icon: "🏛️"
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