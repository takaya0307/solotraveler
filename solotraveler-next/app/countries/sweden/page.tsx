"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import swedenData from "../../../db.json";

export default function SwedenDetailPage() {
  const country = swedenData.countries.find(c => c.id === "sweden")!;

  const pageTitle = `${country.nameJa}ワーキングホリデー`;
  const pageDescription = "スウェーデンは、高福祉国家として知られ、美しい自然と優れたデザイン文化を持つ国です。\nストックホルムをはじめとする美しい都市、広大な森や湖など、北欧の魅力を満喫できます。";
  
  const countryDescription = "福祉・自然・デザインの国";
  
  const countryFeatures = [
    {
      title: "高福祉社会",
      description: "充実した社会保障制度",
      imageUrl: "https://images.unsplash.com/photo-1600290601473-3b73e4c531c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHN3ZWRlbnxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "スウェーデンの高福祉社会"
    },
    {
      title: "美しい自然",
      description: "広大な森と美しい湖",
      imageUrl: "https://images.unsplash.com/photo-1633430300352-bcb3420c0ed5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWRlbnxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "スウェーデンの自然"
    },
    {
      title: "デザイン文化",
      description: "北欧デザインの本場",
      imageUrl: "https://images.unsplash.com/photo-1585066437551-230239e3131e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZGVuJUUzJTgwJTgwZnVuaXR1cmV8ZW58MHx8MHx8fDA%3D",
      imageAlt: "スウェーデンのデザイン文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。北部は極夜や白夜の現象があります。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "非常に安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "スウェーデン人は控えめで礼儀正しく、平等を重視する人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "スウェーデン語と英語",
      description: "北欧の言語と国際的な英語環境。ストックホルムの語学学校で、スウェーデン語を学びながら、高い英語力を持つスウェーデン人との交流で実用的な英語も身につけられます。",
      icon: "🗣️"
    },
    {
      title: "北欧デザイン文化",
      description: "ミニマルで機能的なデザインを体験。IKEAやH&Mの発祥地で、北欧デザインの本質を学び、機能性と美しさを兼ね備えた生活スタイルを体験できます。",
      icon: "🎨"
    },
    {
      title: "高福祉社会",
      description: "充実した社会保障制度を体験。無料の医療制度、充実した教育制度、働き方改革など、世界最高レベルの福祉制度を体験し、ワークライフバランスの重要性を学べます。",
      icon: "🏥"
    },
    {
      title: "自然とアウトドア",
      description: "森と湖でのリラックスした生活。夏は白夜でのハイキング、冬はオーロラ観測、四季を通じてスキーやアイスホッケーなど、豊かな自然環境でのアウトドアライフを満喫できます。",
      icon: "🌲"
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
      countryHighlights={countryHighlights}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
