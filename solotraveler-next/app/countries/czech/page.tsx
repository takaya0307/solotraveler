"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import czechData from "../../../db.json";


export default function CzechDetailPage() {
  const country = czechData.countries.find(c => c.id === "czech")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `チェコワーホリ｜魅力を徹底解説`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `チェコワーホリの魅力を徹底解説。ビール・建築・文化の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "ビール・建築・文化の国";
  
  const countryDescription = "チェコは、世界最高のビール、美しい建築、豊かな文化を持つ国です。プラハをはじめとする歴史的な都市、そして美しい自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "世界最高のビール",
      description: "ピルスナー・ウルケルとチェコビール",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "チェコのビール"
    },
    {
      title: "美しい建築",
      description: "ゴシック建築と歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "チェコの建築"
    },
    {
      title: "豊かな文化",
      description: "伝統的なチェコ文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "チェコの文化"
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
      description: "チェコ人は親切でフレンドリー、文化を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "チェコ語学習環境：チェコ語圏で、本格的なチェコ語を学べる",
    "豊富な文化体験：建築、美術、音楽など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "自然体験：美しい山々や森でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "チェコ語学習：チェコ語圏で、本格的なチェコ語を学べる環境",
    "充実した語学学校：語学学校も充実しており、チェコ語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "チェコには美しい山々、森、湖など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣りなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "ビール好き",
      description: "世界最高のビールを体験したい人に最適。チェコビールの本場を満喫できます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🍺"
    },
    {
      title: "チェコ語学習",
      description: "チェコ語を本格的に学びたい人に最適。チェコ語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "建築好き",
      description: "美しいゴシック建築を満喫したい人に最適。歴史的建造物を体験できます。",
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
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
} 