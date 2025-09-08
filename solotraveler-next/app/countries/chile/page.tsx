"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import chileData from "../../../db.json";

export default function ChileDetailPage() {
  const country = chileData.countries.find(c => c.id === "chile")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "チリは、美しいワイン、豊かな自然、そして深い文化を持つ国です。\nサンティアゴをはじめとする美しい都市、そしてアンデス山脈やパタゴニアの自然を満喫できます。";
  
  const countryDescription = "ワイン・自然・文化の国";
  
  const countryFeatures = [
    {
      title: "ワインの国",
      description: "世界最高級のチリワイン",
      imageUrl: "https://images.unsplash.com/photo-1558565850-13a967c4519f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGUlMjB3aW5lfGVufDB8fDB8fHww",
      imageAlt: "チリのワイン"
    },
    {
      title: "豊かな自然",
      description: "アンデス山脈とパタゴニア",
      imageUrl: "https://images.unsplash.com/photo-1478827387698-1527781a4887?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGV8ZW58MHx8MHx8fDA%3D",
      imageAlt: "チリの自然"
    },
    {
      title: "豊かな文化",
      description: "伝統的なチリ文化",
      imageUrl: "https://images.unsplash.com/photo-1601577292853-fe9663adfb18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxjaGlsZXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "チリの文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "南北に長い国で、地域により気候が大きく異なります。北部は砂漠、中部は地中海性気候、南部は寒い気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "チリ人は親切でフレンドリー、家族を大切にする人が多いです。",
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
