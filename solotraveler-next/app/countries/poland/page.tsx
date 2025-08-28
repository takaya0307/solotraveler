import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import polandData from "../../../db.json";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";


export default function PolandDetailPage() {
  const country = polandData.countries.find(c => c.id === "poland")!;

  const pageTitle = `${country.nameJa}ワーキングホリデーの魅力`;
  const pageDescription = "歴史・文化・自然の国";
  
  const countryDescription = "ポーランドは、豊かな歴史と文化、美しい自然を持つ国です。ワルシャワやクラクフなどの歴史的な都市、そして美しい山々や森を満喫できます。";
  
  const countryFeatures = [
    {
      title: "豊かな歴史",
      description: "中世から現代までの歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ポーランドの歴史"
    },
    {
      title: "美しい自然",
      description: "タトラ山脈と美しい森",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ポーランドの自然"
    },
    {
      title: "豊かな文化",
      description: "伝統的なポーランド文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ポーランドの文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。山岳地帯ではスキーが楽しめます。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ポーランド人は親切でフレンドリー、家族を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "ポーランド語学習環境：ポーランド語圏で、本格的なポーランド語を学べる",
    "豊富な文化体験：歴史、美術、音楽など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "自然体験：美しい山々や森でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "ポーランド語学習：ポーランド語圏で、本格的なポーランド語を学べる環境",
    "充実した語学学校：語学学校も充実しており、ポーランド語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "ポーランドには美しい山々、森、湖など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣りなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "歴史好き",
      description: "中世から現代までの豊かな歴史を体験したい人に最適。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🏛️"
    },
    {
      title: "ポーランド語学習",
      description: "ポーランド語を本格的に学びたい人に最適。ポーランド語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "自然好き",
      description: "美しい山々や森を満喫したい人に最適。自然豊かな環境で過ごせます。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🏔️"
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