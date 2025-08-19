"use client";
import React, { useEffect } from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import newzealandData from "../../../db.json";

export default function NewZealandDetailPage() {
  const country = newzealandData.countries.find(c => c.id === "newzealand")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ ニュージーランド比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `ニュージーランドワーホリの費用、条件、おすすめエージェントを徹底比較。大自然とフレンドリーな人々が魅力の南太平洋の国でワーホリ体験。`);
    }
  }, []);

  const pageTitle = `${country.nameJa}ワーキングホリデーの魅力`;
  const pageDescription = "大自然とフレンドリーな人々が魅力の南太平洋の国";
  
  const countryDescription = "ニュージーランドは、南太平洋に浮かぶ美しい島国。雄大な自然とフレンドリーな人々が魅力で、のんびりとした雰囲気が特徴です。フィヨルドや山々、美しい湖など、大自然を満喫できる環境が整っています。";
  
  const countryFeatures = [
    {
      title: "大自然",
      description: "フィヨルドや山々でのアウトドア",
      imageUrl: "https://images.unsplash.com/photo-1595125990323-885cec5217ff?w=600&auto=format&fit=crop&q=60",
      imageAlt: "ニュージーランドの大自然"
    },
    {
      title: "アドベンチャー",
      description: "バンジージャンプやスカイダイビング",
      imageUrl: "https://images.unsplash.com/photo-1515253648320-6d70d901f0ac?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アドベンチャースポーツ"
    },
    {
      title: "温泉文化",
      description: "地熱地帯での温泉体験",
      imageUrl: "https://images.unsplash.com/photo-1680180730599-61216c165c96?w=600&auto=format&fit=crop&q=60",
      imageAlt: "温泉文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は比較的穏やか。地域によって気候が異なり、北島は温暖、南島は涼しい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "世界でも最も安全な国の一つとして知られています。日本人にとって安心して生活できる環境で、人々も親切です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ニュージーランド人は親切でフレンドリーな性格の人が多いです。のんびりとした雰囲気で、自然を愛する人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "英語学習環境：英語圏で、比較的聞き取りやすいニュージーランド英語",
    "豊富な仕事：農業や観光業の仕事が豊富で、ワーホリビザでも比較的仕事を見つけやすい",
    "高い賃金：最低賃金が高いため、生活費を稼ぎながら英語を学べる",
    "自然体験：雄大な自然の中でアウトドアアクティビティが楽しめる"
  ];
  
  const englishLearningEnvironment = [
    "聞き取りやすい英語：ニュージーランド英語は比較的聞き取りやすく、英語学習初心者にも適しています",
    "充実した語学学校：語学学校も充実しており、英語力を伸ばすのに最適な環境です",
    "多文化社会：様々な国の人々と交流でき、実践的な英語力を身につけることができます"
  ];
  
  const outdoorLifeDescription = "フィヨルド、山々、美しい湖など、自然が豊富です。ハイキング、スキー、キャンプ、アドベンチャースポーツなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
  const recommendedFor = [
    {
      title: "アウトドア好き",
      description: "雄大な自然が好きな人には最高の環境。ハイキング、スキー、キャンプ、アドベンチャースポーツなど、四季を通じて様々なアウトドアアクティビティが楽しめます。",
      color: "#166534",
      borderColor: "#22C55E",
      bgColor: "#F0FDF4",
      icon: "🏔️"
    },
    {
      title: "英語を話したい",
      description: "英語圏で、比較的聞き取りやすいニュージーランド英語。語学学校も充実しており、英語力を伸ばすのに最適です。",
      color: "#1E40AF",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "🗣️"
    },
    {
      title: "のんびりしたい",
      description: "のんびりとした雰囲気が魅力。自然の中でリラックスした生活を送りたい人に最適です。ストレスフリーな環境で過ごせます。",
      color: "#92400E",
      borderColor: "#F59E0B",
      bgColor: "#FEF3C7",
      icon: "🌍"
    },
    {
      title: "仕事をしながら生活したい",
      description: "最低賃金が高く、農業や観光業の仕事が豊富。生活費を稼ぎながら海外生活を楽しめます。",
      color: "#C2410C",
      borderColor: "#F97316",
      bgColor: "#FFF7ED",
      icon: "💼"
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