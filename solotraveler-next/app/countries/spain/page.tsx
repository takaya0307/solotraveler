"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import spainData from "../../../db.json";

export default function SpainDetailPage() {
  const country = spainData.countries.find(c => c.id === "spain")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "スペインは、情熱的な文化、豊かな美食、深い歴史を持つ国です。\nフラメンコ、闘牛、タパス文化など、独特の文化を体験でき、地中海の温暖な気候で過ごしやすい環境です。";
  
  const countryDescription = "情熱的な文化と美食、歴史が薫る国";
  
  const countryFeatures = [
    {
      title: "情熱的な文化",
      description: "フラメンコと闘牛文化",
      imageUrl: "https://images.unsplash.com/photo-1634156589964-c6da0fba0a05?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "スペインの情熱的な文化"
    },
    {
      title: "美食の国",
      description: "タパスと地中海料理",
      imageUrl: "https://images.unsplash.com/photo-1621841957884-1210fe19d66d?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "スペインの美食"
    },
    {
      title: "歴史的建造物",
      description: "アルハンブラ宮殿とサグラダ・ファミリア",
      imageUrl: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "歴史的建造物"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "地中海性気候で、夏は温暖、冬は比較的穏やかです。南部は特に温暖で過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "観光地は比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "スペイン人は情熱的でフレンドリー、家族を大切にする人が多いです。陽気で親しみやすい文化があります。",
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