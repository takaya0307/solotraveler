
"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import irelandData from "../../../db.json";
export default function IrelandDetailPage() {
  const country = irelandData.countries.find(c => c.id === "ireland")!;

  const pageTitle = `${country.nameJa}ワーキングホリデー`;
  const pageDescription = "アイルランドは、美しい緑の風景、豊かな文化、そして深い歴史を持つ国です。\nダブリンをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "緑・文化・歴史の国";
  
  const countryFeatures = [
    {
      title: "緑の国",
      description: "美しい緑の風景と自然",
      imageUrl: "https://images.unsplash.com/photo-1602354817989-b9664561ae84?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "アイルランドの緑"
    },
    {
      title: "豊かな文化",
      description: "伝統的なアイルランド文化",
      imageUrl: "https://images.unsplash.com/photo-1623430948701-b6653fd917f1?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "アイルランドの文化"
    },
    {
      title: "深い歴史",
      description: "ケルト文化と歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1572998124463-e2dbc434797a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGlyZWxhbmR8ZW58MHx8MHx8fDA%3D",
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
