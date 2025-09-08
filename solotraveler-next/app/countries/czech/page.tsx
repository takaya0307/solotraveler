"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import czechData from "../../../db.json";

export default function CzechDetailPage() {
  const country = czechData.countries.find(c => c.id === "czech")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "チェコは、世界最高のビール、美しい建築、豊かな文化を持つ国です。\nプラハをはじめとする歴史的な都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "ビール・建築・文化の国";
  
  const countryFeatures = [
    {
      title: "世界最高のビール",
      description: "ピルスナー・ウルケルとチェコビール",
      imageUrl: "https://images.unsplash.com/photo-1687771454203-97d0b08bbeb2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3plY2glMjBiZWVyfGVufDB8fDB8fHww",
      imageAlt: "チェコのビール"
    },
    {
      title: "美しい建築",
      description: "ゴシック建築と歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3plY2h8ZW58MHx8MHx8fDA%3D",
      imageAlt: "チェコの建築"
    },
    {
      title: "豊かな文化",
      description: "伝統的なチェコ文化",
      imageUrl: "https://images.unsplash.com/photo-1638960079008-97d398d34689?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGN6ZWNofGVufDB8fDB8fHww",
      imageAlt: "チェコの文化"
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
      description: "チェコ人は親切でフレンドリー、文化を大切にする人が多いです。",
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
