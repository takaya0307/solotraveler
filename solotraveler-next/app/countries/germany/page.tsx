"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import germanyData from "../../../db.json";
export default function GermanyDetailPage() {
  const country = germanyData.countries.find(c => c.id === "germany")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "ドイツは、高度な技術力と豊かな文化、深い歴史を持つヨーロッパの中心地です。\n自動車産業や製造業で知られ、効率的で質の高い生活を送ることができる国です。";
  
  const countryDescription = "技術・文化・歴史が融合するヨーロッパの中心地";
  
  const countryFeatures = [
    {
      title: "技術力",
      description: "世界最高峰の自動車産業と製造業",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "ドイツの技術力"
    },
    {
      title: "文化と芸術",
      description: "豊かな音楽文化と美術館",
      imageUrl: "https://images.unsplash.com/photo-1560929585-ba3c24ec6c44?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "ドイツの文化と芸術"
    },
    {
      title: "歴史的建造物",
      description: "中世の街並みと城",
      imageUrl: "https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdlcm1hbnl8ZW58MHx8MHx8fDA%3D",
      imageAlt: "歴史的建造物"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。地域によって気候が異なり、南部は比較的温暖です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。公共交通機関も発達しており、移動も便利です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ドイツ人は真面目で効率的、時間を大切にする人が多いです。最初は少し距離感がありますが、信頼関係を築くと親切です。",
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