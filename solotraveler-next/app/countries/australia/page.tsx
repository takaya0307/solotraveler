"use client";

import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import australiaData from "../../../db.json";
import { generateCountryMetadata, countryData } from "../../components/CountryMetadata";


export default function AustraliaDetailPage() {
  const country = australiaData.countries.find(c => c.id === "australia")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `オーストラリアワーホリ｜魅力を徹底解説`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `オーストラリアワーホリの魅力・人気都市・おすすめポイントを徹底解説。温暖な気候、美しいビーチ、フレンドリーな人々が魅力の南半球の国で、英語学習と豊富な仕事環境を提供。`);
    }
  }, []);

  const pageTitle = `オーストラリア ワーホリの魅力`;
  const pageDescription = "オーストラリア ワーホリの魅力・人気都市・おすすめポイントを徹底解説。温暖な気候、美しいビーチ、フレンドリーな人々が魅力の南半球の国で、英語学習と豊富な仕事環境を提供。";
  
  const countryDescription = "オーストラリア ワーホリは、南半球に位置する広大な大陸国家での素晴らしい体験を提供します。一年中温暖な気候で、美しいビーチや壮大な自然が魅力の国です。シドニー・ハーバーブリッジやオペラハウスなど、世界的に有名な観光スポットも多数あり、オーストラリア ワーホリでしか味わえない特別な体験が待っています。";
  
  const countryFeatures = [
    {
      title: "ビーチライフ",
      description: "美しいビーチでサーフィンや日光浴",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "オーストラリアのビーチ"
    },
    {
      title: "カフェ文化",
      description: "メルボルンのカフェでコーヒーを楽しむ",
      imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&auto=format&fit=crop&q=60",
      imageAlt: "オーストラリアのカフェ"
    },
    {
      title: "アウトドア",
      description: "自然の中でハイキングやキャンプ",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop&q=60",
      imageAlt: "オーストラリアのアウトドア"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "一年中温暖で過ごしやすい気候。シドニーやメルボルンは四季があり、ケアンズは熱帯気候で常夏です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。ただし、都市部では一般的な防犯意識は必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "オーストラリア人はフレンドリーで親しみやすい性格の人が多いです。カジュアルな文化で、すぐに友達を作りやすい環境です。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "英語学習環境：英語圏で、英語学習に最適な環境です",
    "豊富な仕事：農業や観光業の仕事が豊富で、ワーホリビザでも比較的仕事を見つけやすい",
    "高い賃金：最低賃金が高いため、生活費を稼ぎながら英語を学べる",
    "長期滞在：最大3年間の滞在が可能で、じっくりと海外生活を楽しめる"
  ];
  
  const englishLearningEnvironment = [
    "聞き取りやすい英語：オーストラリア英語は比較的聞き取りやすく、英語学習初心者にも適しています",
    "充実した語学学校：語学学校も充実しており、英語力を伸ばすのに最適な環境です",
    "多文化社会：様々な国の人々と交流でき、実践的な英語力を身につけることができます"
  ];
  
  const outdoorLifeDescription = "ビーチやアウトドアアクティビティが豊富で、サーフィン、ダイビング、ハイキングなどが楽しめます。自然と都市のバランスが良く、アクティブな生活を送りたい人に最適です。";
  
  const recommendedFor = [
    {
      title: "ビーチ好き",
      description: "美しいビーチでサーフィンや日光浴を楽しみたい人に最適。一年中温暖な気候でビーチライフを満喫できます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🏖️"
    },
    {
      title: "英語を学びたい",
      description: "英語圏で、比較的聞き取りやすいオーストラリア英語。語学学校も充実しています。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "アウトドア好き",
      description: "自然の中でハイキングやキャンプを楽しみたい人に最適。美しい自然環境が整っています。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FFFBEB",
      icon: "🏕️"
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
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
} 