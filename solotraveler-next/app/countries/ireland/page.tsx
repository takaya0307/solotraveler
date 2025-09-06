"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import irelandData from "../../../db.json";
export default function IrelandDetailPage() {
  const country = irelandData.countries.find(c => c.id === "ireland")!;

  const pageTitle = `${country.nameJa}ワーキングホリデーの魅力`;
  const pageDescription = "緑・文化・歴史の国";
  
  const countryDescription = "アイルランドは、美しい緑の風景、豊かな文化、そして深い歴史を持つ国です。ダブリンをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "緑の国",
      description: "美しい緑の風景と自然",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アイルランドの緑"
    },
    {
      title: "豊かな文化",
      description: "伝統的なアイルランド文化",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アイルランドの文化"
    },
    {
      title: "深い歴史",
      description: "ケルト文化と歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "アイルランドの歴史"
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
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "アイルランド人は親切でフレンドリー、ユーモアのセンスがある人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "英語学習環境：英語圏で、正統な英語を学べる",
    "豊富な文化体験：ケルト文化、音楽、文学など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "自然体験：美しい緑の風景でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "英語学習：英語圏で、正統な英語を学べる環境",
    "充実した語学学校：語学学校も充実しており、英語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "アイルランドには美しい緑の風景、海岸線、国立公園など、様々な自然環境があります。ハイキング、サイクリング、キャンプ、釣り、ゴルフなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";
  
