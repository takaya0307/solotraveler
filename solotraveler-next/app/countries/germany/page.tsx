import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import germanyData from "../../../db.json";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";


export default function GermanyDetailPage() {
  const country = germanyData.countries.find(c => c.id === "germany")!;

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "技術・文化・歴史が融合するヨーロッパの中心地";
  
  const countryDescription = "ドイツは、高度な技術力と豊かな文化、深い歴史を持つヨーロッパの中心地です。自動車産業や製造業で知られ、効率的で質の高い生活を送ることができる国です。";
  
  const countryFeatures = [
    {
      title: "技術力",
      description: "世界最高峰の自動車産業と製造業",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ドイツの技術力"
    },
    {
      title: "文化と芸術",
      description: "豊かな音楽文化と美術館",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ドイツの文化と芸術"
    },
    {
      title: "歴史的建造物",
      description: "中世の街並みと城",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "歴史的建造物"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。地域によって気候が異なり、南部は比較的温暖です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。公共交通機関も発達しており、移動も便利です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ドイツ人は真面目で効率的、時間を大切にする人が多いです。最初は少し距離感がありますが、信頼関係を築くと親切です。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "ドイツ語学習環境：ドイツ語圏で、本格的なドイツ語を学べる",
    "豊富な文化施設：世界クラスの美術館や博物館が数多くある",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "技術体験：世界最高峰の技術と製造業を体験できる環境"
  ];
  
  const englishLearningEnvironment = [
    "ドイツ語学習：ドイツ語圏で、本格的なドイツ語を学べる環境",
    "充実した語学学校：語学学校も充実しており、ドイツ語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "ドイツには美しい森や山々、湖など、様々な自然環境があります。ハイキング、スキー、サイクリング、キャンプなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "技術に興味",
      description: "世界最高峰の技術と製造業を体験したい人に最適。自動車産業やエンジニアリングの本場です。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "⚙️"
    },
    {
      title: "ドイツ語を学びたい",
      description: "ドイツ語圏で、本格的なドイツ語を学べる環境です。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "文化芸術好き",
      description: "豊かな音楽文化や美術館、歴史的建造物を満喫できます。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🎨"
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