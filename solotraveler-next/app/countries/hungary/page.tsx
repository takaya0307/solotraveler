"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import hungaryData from "../../../db.json";

export default function HungaryDetailPage() {
  const country = hungaryData.countries.find(c => c.id === "hungary")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "ハンガリーは、温泉、豊かな文化、深い歴史を持つ国です。\nブダペストをはじめとする美しい都市、そして温泉文化を満喫できます。";
  
  const countryDescription = "温泉・文化・歴史の国";
  
  const countryFeatures = [
    {
      title: "温泉の国",
      description: "世界有数の温泉と温泉文化",
      imageUrl: "https://images.unsplash.com/photo-1572983417754-78ae967b181e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGh1bmdhcnl8ZW58MHx8MHx8fDA%3D",
      imageAlt: "ハンガリーの温泉"
    },
    {
      title: "豊かな文化",
      description: "伝統的なハンガリー文化",
      imageUrl: "https://images.unsplash.com/photo-1613680084365-0c89e5be93e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGh1bmdhcnl8ZW58MHx8MHx8fDA%3D",
      imageAlt: "ハンガリーの文化"
    },
    {
      title: "美しい建築",
      description: "歴史的建造物と美しい街並み",
      imageUrl: "https://images.unsplash.com/photo-1613680042115-cc541362bc41?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGh1bmdhcnl8ZW58MHx8MHx8fDA%3D",
      imageAlt: "ハンガリーの建築"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。温泉は一年中楽しめます。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ハンガリー人は親切でフレンドリー、文化を大切にする人が多いです。",
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
