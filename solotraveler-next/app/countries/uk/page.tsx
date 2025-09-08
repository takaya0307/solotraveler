"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import ukData from "../../../db.json";
export default function UKDetailPage() {
  const country = ukData.countries.find(c => c.id === "uk")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "イギリスは、豊かな歴史と文化を持つヨーロッパの中心地です。\nロンドンをはじめとする歴史的な都市、美しい田園風景、そして世界最高峰の教育機関が集まる国です。";
  
  const countryDescription = "歴史と文化が息づくヨーロッパの中心地";
  
  const countryFeatures = [
    {
      title: "歴史と文化",
      description: "世界遺産や歴史的建造物が数多く存在",
      imageUrl: "https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdGVkJTIwa2luZ2RvbXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "イギリスの歴史と文化"
    },
    {
      title: "教育の質",
      description: "オックスフォード、ケンブリッジなど世界最高峰の大学",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "イギリスの教育"
    },
    {
      title: "多文化社会",
      description: "様々な国の文化が融合した国際的な環境",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "多文化社会"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "比較的穏やかな気候で、四季がはっきりしています。雨が多いですが、夏は過ごしやすく、冬も極端に寒くはありません。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。公共交通機関も発達しており、移動も便利です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "イギリス人は礼儀正しく、ユーモアのセンスがある人が多いです。最初は少し距離感がありますが、親しくなると親切です。",
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
