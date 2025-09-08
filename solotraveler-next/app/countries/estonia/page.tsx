"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import estoniaData from "../../../db.json";

export default function EstoniaDetailPage() {
  const country = estoniaData.countries.find(c => c.id === "estonia")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "エストニアは、デジタル化が進んだ先進国で、豊かな文化と美しい自然を持つ国です。\nタリンをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "デジタル・文化・自然の国";
  
  const countryFeatures = [
    {
      title: "デジタル先進国",
      description: "世界最先端のデジタル技術",
      imageUrl: "https://images.unsplash.com/photo-1560873564-8423716d9f2a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXN0b25pYXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "エストニアのデジタル技術"
    },
    {
      title: "豊かな文化",
      description: "伝統的なエストニア文化",
      imageUrl: "https://images.unsplash.com/photo-1597552945536-204b782f9777?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGVzdG9uaWF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "エストニアの文化"
    },
    {
      title: "美しい自然",
      description: "森と湖の美しい景観",
      imageUrl: "https://images.unsplash.com/photo-1628075838471-2acd4e11b722?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGVzdG9uaWF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "エストニアの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。バルト海の影響で比較的穏やかです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "エストニア人は親切でフレンドリー、技術を大切にする人が多いです。",
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
