"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import taiwanData from "../../../db.json";

export default function TaiwanDetailPage() {
  const country = taiwanData.countries.find(c => c.id === "taiwan")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "台湾は、美食、文化、自然が豊かな国です。\n台北をはじめとする現代的な都市から、美しい山々や海岸線まで、多様な魅力を持つ国です。";
  
  const countryDescription = "美食・文化・自然が豊かな国";
  
  const countryFeatures = [
    {
      title: "美食の国",
      description: "小籠包、牛肉麺、台湾料理",
      imageUrl: "https://images.unsplash.com/photo-1551851300-1fd39219a668?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFpd2FuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "台湾の美食"
    },
    {
      title: "自然豊か",
      description: "美しい山々と海岸線",
      imageUrl: "https://images.unsplash.com/photo-1583395145517-1e3177037600?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhaXdhbnxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "台湾の自然"
    },
    {
      title: "伝統文化",
      description: "台湾の伝統文化と祭り",
      imageUrl: "https://images.unsplash.com/photo-1571555788467-71d9e3add426?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRhaXdhbnxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "台湾の伝統文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "亜熱帯気候で、夏は暑く、冬は比較的穏やかです。雨が多いですが、四季を通じて過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。公共交通機関も発達しています。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "台湾人は親切でフレンドリー、外国人にも親切です。温かくて親しみやすい文化があります。",
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
