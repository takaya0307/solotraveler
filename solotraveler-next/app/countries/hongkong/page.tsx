"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import hongkongData from "../../../db.json";


export default function HongKongDetailPage() {
  const country = hongkongData.countries.find(c => c.id === "hongkong")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ 香港比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `香港ワーホリの費用、条件、おすすめエージェントを徹底比較。金融・文化・美食の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "金融・文化・美食の国";
  
  const countryDescription = "香港は、世界有数の金融センター、豊かな文化、そして美食を持つ国です。香港島をはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "金融の国",
      description: "世界有数の金融センター",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "香港の金融"
    },
    {
      title: "豊かな文化",
      description: "東洋と西洋が融合した文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "香港の文化"
    },
    {
      title: "美食の国",
      description: "世界最高級の香港料理",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "香港の美食"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "亜熱帯気候で、夏は暑く、冬は比較的穏やかです。雨が多いですが、四季を通じて過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "香港人は親切でフレンドリー、ビジネスを大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "中国語学習環境：中国語圏で、実用的な中国語を学べる",
    "豊富な文化体験：東洋と西洋が融合した文化施設",
    "アジア旅行の拠点：他のアジア各国へのアクセスが便利",
    "美食体験：世界最高級の香港料理を楽しめる環境"
  ];
  
  const englishLearningEnvironment = [
    "中国語学習：中国語圏で、実用的な中国語を学べる環境",
    "充実した語学学校：語学学校も充実しており、中国語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "香港には美しい山々、海岸線、国立公園など、様々な自然環境があります。ハイキング、ビーチリゾート、サイクリングなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
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
      title: "中国語学習",
      description: "中国語を実用的に学びたい人に最適。中国語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "美食家",
      description: "世界最高級の香港料理を楽しみたい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🍜"
    },
    {
      title: "文化体験",
      description: "東洋と西洋が融合した文化を体験したい人に最適。",
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