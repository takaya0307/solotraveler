"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import lithuaniaData from "../../../db.json";

export default function LithuaniaDetailPage() {
  const country = lithuaniaData.countries.find(c => c.id === "lithuania")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "リトアニアは、バルト海に面し、豊かな文化と深い歴史を持つ国です。\nヴィリニュスをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "バルト海・文化・歴史の国";
  
  const countryFeatures = [
    {
      title: "バルト海",
      description: "美しい海岸線と海の景色",
      imageUrl: "https://images.unsplash.com/photo-1583423290950-56d985893cf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fExpdGh1YW5pYXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "リトアニアのバルト海"
    },
    {
      title: "豊かな文化",
      description: "伝統的なリトアニア文化",
      imageUrl: "https://images.unsplash.com/photo-1567023249914-7c83f04de30c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGl0aHVhbmlhfGVufDB8fDB8fHww",
      imageAlt: "リトアニアの文化"
    },
    {
      title: "美しい建築",
      description: "歴史的建造物と美しい街並み",
      imageUrl: "https://images.unsplash.com/photo-1660562278746-72e961bb9644?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGl0aHVhbmlhfGVufDB8fDB8fHww",
      imageAlt: "リトアニアの建築"
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
      description: "リトアニア人は親切でフレンドリー、文化を大切にする人が多いです。",
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
