"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import southkoreaData from "../../../db.json";


export default function SouthKoreaDetailPage() {
  const country = southkoreaData.countries.find(c => c.id === "southkorea")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ 韓国比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `韓国ワーホリの費用、条件、おすすめエージェントを徹底比較。K-POP・K-ドラマ・美食の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "K-POP・K-ドラマ・美食の国";
  
  const countryDescription = "韓国は、K-POPやK-ドラマで世界的に注目されている国です。伝統文化と現代文化が融合し、美食も豊富で、アジアの中でも特に人気の高い国です。";
  
  const countryFeatures = [
    {
      title: "K-POP文化",
      description: "世界を席巻するK-POPの本場",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop&q=60",
      imageAlt: "韓国のK-POP文化"
    },
    {
      title: "美食の国",
      description: "キムチ、ビビンバ、韓国料理",
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      imageAlt: "韓国の美食"
    },
    {
      title: "伝統文化",
      description: "韓服、韓屋、伝統工芸",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "韓国の伝統文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、春と秋が過ごしやすいです。夏は暑く、冬は寒いですが、暖房設備が整っています。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。公共交通機関も発達しています。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "韓国人は親切で礼儀正しい人が多く、外国人にも親切です。年齢や上下関係を重視する文化があります。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "韓国語学習環境：韓国語圏で、本格的な韓国語を学べる",
    "豊富な文化体験：K-POP、K-ドラマ、伝統文化を体験できる",
    "アジア旅行の拠点：他のアジア各国へのアクセスが便利",
    "美食体験：キムチ、ビビンバなど韓国料理を楽しめる環境"
  ];
  
  const englishLearningEnvironment = [
    "韓国語学習：韓国語圏で、本格的な韓国語を学べる環境",
    "充実した語学学校：語学学校も充実しており、韓国語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "韓国には美しい山々、海岸線、国立公園など、様々な自然環境があります。ハイキング、スキー、ビーチリゾート、サイクリングなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "K-POP・K-ドラマ好き",
      description: "K-POPやK-ドラマの本場で、最新のトレンドを体験したい人に最適。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🎵"
    },
    {
      title: "韓国語学習",
      description: "韓国語を本格的に学びたい人に最適。韓国語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "美食家",
      description: "キムチ、ビビンバなど韓国料理を楽しみたい人に最適。食の本場を体験できます。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🍜"
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