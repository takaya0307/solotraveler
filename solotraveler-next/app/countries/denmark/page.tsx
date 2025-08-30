"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";
import denmarkData from "../../../db.json";


export default function DenmarkDetailPage() {
  const country = denmarkData.countries.find(c => c.id === "denmark")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `デンマークワーホリ｜魅力を徹底解説`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `デンマークワーホリの魅力を徹底解説。幸福・デザイン・自転車の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "幸福・デザイン・自転車の国";
  
  const countryDescription = "デンマークは、世界で最も幸福な国の一つとして知られ、優れたデザイン文化と自転車文化を持つ国です。コペンハーゲンをはじめとする美しい都市、そして北欧の魅力を満喫できます。";
  
  const countryFeatures = [
    {
      title: "幸福の国",
      description: "世界で最も幸福な国の一つ",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "デンマークの幸福"
    },
    {
      title: "デザイン文化",
      description: "北欧デザインの本場",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "デンマークのデザイン文化"
    },
    {
      title: "自転車文化",
      description: "自転車が生活の中心",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "デンマークの自転車文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "海洋性気候で、夏は温暖、冬は比較的穏やかです。雨が多いですが、四季を通じて過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "非常に安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "デンマーク人は親切でフレンドリー、平等を重視する人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "デンマーク語学習環境：デンマーク語圏で、本格的なデンマーク語を学べる",
    "豊富な文化体験：デザイン、アート、音楽など豊富な文化施設",
    "北欧文化体験：北欧の伝統文化と現代的なライフスタイル",
    "幸福な生活体験：世界で最も幸福な国の生活を体験できる環境"
  ];
  
  const englishLearningEnvironment = [
    "デンマーク語学習：デンマーク語圏で、本格的なデンマーク語を学べる環境",
    "充実した語学学校：語学学校も充実しており、デンマーク語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "デンマークには美しい海岸線、森、国立公園など、様々な自然環境があります。サイクリング、ハイキング、ビーチリゾート、キャンプなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "デザイン好き",
      description: "北欧デザインの本場でデザイン文化を学びたい人に最適。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🎨"
    },
    {
      title: "デンマーク語学習",
      description: "デンマーク語を本格的に学びたい人に最適。デンマーク語圏で実践的な語学力を身につけられます。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "自転車文化",
      description: "自転車が生活の中心の文化を体験したい人に最適。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🚴"
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