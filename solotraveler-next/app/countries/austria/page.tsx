"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import austriaData from "../../../db.json";

export default function AustriaDetailPage() {
  const country = austriaData.countries.find(c => c.id === "austria")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリの魅力`;
  const pageDescription = "音楽・山・文化の国";
  
  const countryDescription = "オーストリアは、音楽の都ウィーンをはじめ、美しいアルプスの山々と豊かな文化を持つ国です。モーツァルトやシュトラウスの音楽、そして美しい自然を満喫できます。";
  
  const countryFeatures = [
    {
      title: "音楽の都",
      description: "ウィーン・フィルハーモニーと音楽文化",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop&q=60",
      imageAlt: "オーストリアの音楽文化"
    },
    {
      title: "アルプスの山々",
      description: "美しい山々とスキーリゾート",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      imageAlt: "オーストリアのアルプス"
    },
    {
      title: "豊かな文化",
      description: "ハプスブルク家の歴史と文化",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60",
      imageAlt: "オーストリアの文化"
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
      description: "オーストリア人は礼儀正しく、文化を大切にする人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "ドイツ語学習環境：ドイツ語圏で、本格的なドイツ語を学べる",
    "豊富な文化体験：音楽、美術、歴史など豊富な文化施設",
    "ヨーロッパ旅行の拠点：他のヨーロッパ各国へのアクセスが便利",
    "自然体験：美しいアルプスの山々でのアウトドアアクティビティ"
  ];
  
  const englishLearningEnvironment = [
    "ドイツ語学習：ドイツ語圏で、本格的なドイツ語を学べる環境",
    "充実した語学学校：語学学校も充実しており、ドイツ語力を伸ばすのに最適",
    "多文化社会：様々な国の人々と交流でき、国際的な視点を身につけられる"
  ];
  
  const outdoorLifeDescription = "オーストリアには美しいアルプスの山々、森、湖など、様々な自然環境があります。ハイキング、スキー、キャンプ、釣りなど、四季を通じて様々なアウトドアアクティビティが楽しめます。";

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
