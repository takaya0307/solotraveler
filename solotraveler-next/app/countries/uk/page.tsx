"use client";

import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import ukData from "../../../db.json";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";


export default function UKDetailPage() {
  const country = ukData.countries.find(c => c.id === "uk")!;

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "歴史と文化が息づくヨーロッパの中心地";
  
  const countryDescription = "イギリスは、豊かな歴史と文化を持つヨーロッパの中心地です。ロンドンをはじめとする歴史的な都市、美しい田園風景、そして世界最高峰の教育機関が集まる国です。";
  
  const countryFeatures = [
    {
      title: "歴史と文化",
      description: "世界遺産や歴史的建造物が数多く存在",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "イギリスの歴史と文化"
    },
    {
      title: "教育の質",
      description: "オックスフォード、ケンブリッジなど世界最高峰の大学",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&auto=format&fit=crop&q=60",
      imageAlt: "イギリスの教育"
    },
    {
      title: "多文化社会",
      description: "様々な国の文化が融合した国際的な環境",
      imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&auto=format&fit=crop&q=60",
      imageAlt: "多文化社会"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "比較的穏やかな気候で、四季がはっきりしています。雨が多いですが、夏は過ごしやすく、冬も極端に寒くはありません。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。公共交通機関も発達しており、移動も便利です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "イギリス人は礼儀正しく、ユーモアのセンスがある人が多いです。最初は少し距離感がありますが、親しくなると親切です。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "英語学習環境：英語の本場で、正統なイギリス英語を学べる",
    "豊富な文化施設：世界クラスの美術館や博物館が数多くある",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "教育体験：世界最高峰の大学や教育機関で学べる環境"
  ];
  
  const englishLearningEnvironment = [
    "正統な英語：イギリス英語の本場で、正統な英語を学べる環境",
    "充実した語学学校：語学学校も充実しており、英語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "イギリスには美しい田園地帯や海岸線、国立公園など、様々な自然環境があります。ハイキング、サイクリング、ガーデニングなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "歴史文化好き",
      description: "豊かな歴史と文化を持つ国で、世界遺産や歴史的建造物を満喫できます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🏛️"
    },
    {
      title: "英語を学びたい",
      description: "英語の本場で、正統なイギリス英語を学べる環境です。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "教育に興味",
      description: "世界最高峰の大学や教育機関で学べる環境が整っています。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🎓"
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