"use client";

import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import canadaData from "../../../db.json";
export default function CanadaDetailPage() {
  const country = canadaData.countries.find(c => c.id === "canada")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "カナダは、広大な国土と豊かな自然、そして多文化社会が特徴の北米の国です。\n都市部では近代的な生活を送りながら、すぐ近くで大自然を満喫できる環境が整っています。";
  
  const countryDescription = "自然と都市が調和した北米の魅力あふれる国";
  
  const countryFeatures = [
    {
      title: "自然と都市の調和",
      description: "都市部からすぐに大自然へアクセス可能",
      imageUrl: "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "カナダの自然と都市"
    },
    {
      title: "多文化社会",
      description: "様々な国の文化が融合した環境",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "多文化社会"
    },
    {
      title: "四季の美しさ",
      description: "春夏秋冬それぞれの季節の魅力",
      imageUrl: "https://images.unsplash.com/photo-1606848011982-a35b47cc0e09?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQyfHxjYW5hZGF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "四季の美しさ"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "地域によって大きく異なりますが、全体的に四季がはっきりしており、夏は温暖、冬は寒い地域が多いです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "世界でも最も安全な国の一つとして知られています。日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "カナダ人は親切でフレンドリーな性格の人が多く、多文化社会を尊重する文化があります。",
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