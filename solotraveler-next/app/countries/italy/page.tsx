"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import italyData from "../../../db.json";


export default function ItalyDetailPage() {
  const country = italyData.countries.find(c => c.id === "italy")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ イタリア比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `イタリアワーホリの費用、条件、おすすめエージェントを徹底比較。芸術・美食・歴史が薫る地中海の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "芸術・美食・歴史が薫る地中海の国";
  
  const countryDescription = "イタリアは、世界最高峰の芸術、美食、歴史を持つ地中海の国です。ローマ、フィレンツェ、ベネチアなど、歴史的な都市が数多くあり、豊かな文化を体験できます。";
  
  const countryFeatures = [
    {
      title: "芸術と文化",
      description: "ルネサンス芸術と世界遺産",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "イタリアの芸術と文化"
    },
    {
      title: "美食の国",
      description: "世界最高峰のイタリア料理",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "イタリアの美食"
    },
    {
      title: "歴史的建造物",
      description: "古代ローマ遺跡と中世の街並み",
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
      description: "イタリア人は情熱的でフレンドリー、家族を大切にする人が多いです。陽気で親しみやすい文化があります。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "イタリア語学習環境：イタリア語圏で、本格的なイタリア語を学べる",
    "豊富な文化施設：世界クラスの美術館や博物館が数多くある",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "美食体験：世界最高峰のイタリア料理を楽しめる環境"
  ];
  
  const englishLearningEnvironment = [
    "イタリア語学習：イタリア語圏で、本格的なイタリア語を学べる環境",
    "充実した語学学校：語学学校も充実しており、イタリア語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "イタリアには美しい海岸線、山々、田園風景など、様々な自然環境があります。ハイキング、スキー、ビーチリゾート、サイクリングなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "芸術文化好き",
      description: "ルネサンス芸術や世界遺産を満喫したい人に最適。芸術の本場を体験できます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🎨"
    },
    {
      title: "美食家",
      description: "世界最高峰のイタリア料理を楽しみたい人に最適。食の本場を体験できます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🍝"
    },
    {
      title: "歴史好き",
      description: "古代ローマ遺跡や中世の街並みを満喫したい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🏛️"
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