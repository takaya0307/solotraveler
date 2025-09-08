"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import newzealandData from "../../../db.json";
export default function NewZealandDetailPage() {
  const country = newzealandData.countries.find(c => c.id === "newzealand")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "ニュージーランドは、南太平洋に浮かぶ美しい島国。\n雄大な自然とフレンドリーな人々が魅力で、のんびりとした雰囲気が特徴です。フィヨルドや山々、美しい湖など、大自然を満喫できる環境が整っています。";
  
  const countryDescription = "大自然とフレンドリーな人々が魅力の南太平洋の国";
  
  const countryFeatures = [
    {
      title: "大自然",
      description: "フィヨルドや山々でのアウトドア",
      imageUrl: "https://images.unsplash.com/photo-1595125990323-885cec5217ff?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "ニュージーランドの大自然"
    },
    {
      title: "アドベンチャー",
      description: "バンジージャンプやスカイダイビング",
      imageUrl: "https://images.unsplash.com/photo-1515253648320-6d70d901f0ac?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "アドベンチャースポーツ"
    },
    {
      title: "温泉文化",
      description: "地熱地帯での温泉体験",
      imageUrl: "https://images.unsplash.com/photo-1680180730599-61216c165c96?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "温泉文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は比較的穏やか。地域によって気候が異なり、北島は温暖、南島は涼しい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "世界でも最も安全な国の一つとして知られています。日本人にとって安心して生活できる環境で、人々も親切です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ニュージーランド人は親切でフレンドリーな性格の人が多いです。のんびりとした雰囲気で、自然を愛する人が多いです。",
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
