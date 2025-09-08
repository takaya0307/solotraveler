"use client";

import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import australiaData from "../../../db.json";

export default function AustraliaDetailPage() {
  const country = australiaData.countries.find(c => c.id === "australia")!;

  const pageTitle = `オーストラリア ワーホリ`;
  const pageDescription = "オーストラリア ワーホリは、南半球に位置する広大な大陸国家での素晴らしい体験を提供します。\n一年中温暖な気候で、美しいビーチや壮大な自然が魅力の国です。シドニー・ハーバーブリッジやオペラハウスなど、世界的に有名な観光スポットも多数あり、オーストラリア ワーホリでしか味わえない特別な体験が待っています。";
  
  const countryDescription = "オーストラリア ワーホリ・人気都市・おすすめポイントを徹底解説。温暖な気候、美しいビーチ、フレンドリーな人々が魅力の南半球の国で、英語学習と豊富な仕事環境を提供。";
  
  const countryFeatures = [
    {
      title: "ビーチライフ",
      description: "美しいビーチでサーフィンや日光浴",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "オーストラリアのビーチ"
    },
    {
      title: "カフェ文化",
      description: "メルボルンのカフェでコーヒーを楽しむ",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "オーストラリアのカフェ"
    },
    {
      title: "アウトドア",
      description: "自然の中でハイキングやキャンプ",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&auto=format&fit=crop&q=80",
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
  
  
  
  
    return (
    <CountryDetailLayout
      country={country}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      countryDescription={countryDescription}
      countryFeatures={countryFeatures}
      countryAtmosphere={countryAtmosphere}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
} 