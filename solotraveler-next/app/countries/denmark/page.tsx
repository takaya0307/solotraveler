"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import denmarkData from "../../../db.json";

export default function DenmarkDetailPage() {
  const country = denmarkData.countries.find(c => c.id === "denmark")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "デンマークは、世界で最も幸福な国の一つとして知られ、優れたデザイン文化と自転車文化を持つ国です。\nコペンハーゲンをはじめとする美しい都市、そして北欧の魅力を満喫できます。";
  
  const countryDescription = "幸福・デザイン・自転車の国";
  
  const countryFeatures = [
    {
      title: "幸福の国",
      description: "世界で最も幸福な国の一つ",
      imageUrl: "https://images.unsplash.com/photo-1577346895253-445f05a6670d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRlbm1hcmt8ZW58MHx8MHx8fDA%3D",
      imageAlt: "デンマークの幸福"
    },
    {
      title: "デザイン文化",
      description: "北欧デザインの本場",
      imageUrl: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVubWFya3xlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "デンマークのデザイン文化"
    },
    {
      title: "自転車文化",
      description: "自転車が生活の中心",
      imageUrl: "https://images.unsplash.com/photo-1561113500-8f4ad4f80a93?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbm1hcmt8ZW58MHx8MHx8fDA%3D",
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
