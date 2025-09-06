"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import taiwanData from "../../../db.json";

export default function TaiwanDetailPage() {
  const country = taiwanData.countries.find(c => c.id === "taiwan")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "美食・文化・自然が豊かな国";
  
  const countryDescription = "台湾は、美食、文化、自然が豊かな国です。台北をはじめとする現代的な都市から、美しい山々や海岸線まで、多様な魅力を持つ国です。";
  
  const countryFeatures = [
    {
      title: "美食の国",
      description: "小籠包、牛肉麺、台湾料理",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "台湾の美食"
    },
    {
      title: "自然豊か",
      description: "美しい山々と海岸線",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "台湾の自然"
    },
    {
      title: "伝統文化",
      description: "台湾の伝統文化と祭り",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "台湾の伝統文化"
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
      description: "比較的安全で、日本人にとって安心して生活できる環境です。公共交通機関も発達しています。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "台湾人は親切でフレンドリー、外国人にも親切です。温かくて親しみやすい文化があります。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "中国語学習環境：中国語圏で、実用的な中国語を学べる",
    "豊富な文化体験：台湾の伝統文化と現代文化を体験できる",
    "アジア旅行の拠点：他のアジア各国へのアクセスが便利",
    "美食体験：小籠包、牛肉麺など台湾料理を楽しめる環境"
  ];
  
  const englishLearningEnvironment = [
    "中国語学習：中国語圏で、実用的な中国語を学べる環境",
    "充実した語学学校：語学学校も充実しており、中国語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "台湾には美しい山々、海岸線、国立公園など、様々な自然環境があります。ハイキング、スキー、ビーチリゾート、サイクリングなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";

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
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
