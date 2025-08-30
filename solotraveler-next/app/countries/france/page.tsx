"use client";

import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import franceData from "../../../db.json";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";


export default function FranceDetailPage() {
  const country = franceData.countries.find(c => c.id === "france")!;

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "芸術・ファッション・美食の本場、ヨーロッパの中心地";
  
  const countryDescription = "フランスは、芸術、ファッション、美食の本場として知られるヨーロッパの中心地です。パリをはじめとする美しい都市、豊かな文化、そして世界最高峰の料理を楽しむことができます。";
  
  const countryFeatures = [
    {
      title: "芸術と文化",
      description: "ルーブル美術館やオルセー美術館など世界最高峰の美術館",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "フランスの芸術と文化"
    },
    {
      title: "美食の国",
      description: "世界最高峰のレストランとワイン文化",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "フランスの美食"
    },
    {
      title: "ファッション",
      description: "パリコレクションと世界のファッションの中心",
      imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&auto=format&fit=crop&q=60",
      imageAlt: "フランスのファッション"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、春と秋が過ごしやすいです。夏は温暖、冬は比較的寒い地域が多いです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "観光地は比較的安全ですが、都市部では注意が必要です。基本的な防犯意識を持つことが大切です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "フランス人は芸術や文化を大切にし、美食を愛する人が多いです。最初は少し距離感がありますが、親しくなると親切です。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "芸術文化体験：世界最高峰の美術館や文化施設で芸術に触れられる",
    "語学学習：フランス語を学びながら、実践的な会話力を身につけられる",
    "美食体験：世界最高峰のレストランで本格的なフランス料理を楽しめる",
    "ファッション体験：パリコレクションなど世界のファッションの最前線を体験できる"
  ];
  
  const englishLearningEnvironment = [
    "フランス語学習：フランス語圏で、本格的なフランス語を学べる環境",
    "語学学校：フランス語学校も充実しており、語学力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "フランスには美しい田園地帯やアルプス山脈、地中海沿岸など、様々な自然環境があります。ハイキング、スキー、ビーチリゾートなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "芸術文化好き",
      description: "世界最高峰の美術館や文化施設で芸術に触れたい人に最適。ルーブル美術館やオルセー美術館など、一生に一度は訪れたい場所がたくさんあります。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🎨"
    },
    {
      title: "美食家",
      description: "世界最高峰のレストランで本格的なフランス料理を楽しみたい人に最適。ワイン文化も豊富で、食の本場を体験できます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🍷"
    },
    {
      title: "ファッション好き",
      description: "パリコレクションなど世界のファッションの最前線を体験したい人に最適。ファッションの本場でトレンドを学べます。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "👗"
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