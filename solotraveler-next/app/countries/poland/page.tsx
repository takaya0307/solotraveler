"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import polandData from "../../../db.json";
export default function PolandDetailPage() {
  const country = polandData.countries.find(c => c.id === "poland")!;

  const pageTitle = `${country.nameJa}ワーキングホリデー`;
  const pageDescription = "ポーランドは、豊かな歴史と文化、美しい自然を持つ国です。\nワルシャワやクラクフなどの歴史的な都市、そして美しい山々や森を満喫できます。";
  
  const countryDescription = "歴史・文化・自然の国";
  
  const countryFeatures = [
    {
      title: "豊かな歴史",
      description: "中世から現代までの歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1495181941197-70a606546974?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "ポーランドの歴史"
    },
    {
      title: "美しい自然",
      description: "タトラ山脈と美しい森",
      imageUrl: "https://images.unsplash.com/photo-1508930993032-fbbaf4f2821a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "ポーランドの自然"
    },
    {
      title: "豊かな文化",
      description: "伝統的なポーランド文化",
      imageUrl: "https://images.unsplash.com/photo-1522689764216-4e6966e5e444?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9sYW5kfGVufDB8fDB8fHww",
      imageAlt: "ポーランドの文化"
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
      description: "ポーランド人は親切でフレンドリー、家族を大切にする人が多いです。",
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
