"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import austriaData from "../../../db.json";

export default function AustriaDetailPage() {
  const country = austriaData.countries.find(c => c.id === "austria")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "オーストリアは、音楽の都ウィーンをはじめ、美しいアルプスの山々と豊かな文化を持つ国です。\nモーツァルトやシュトラウスの音楽、そして美しい自然を満喫できます。";
  
  const countryDescription = "音楽・山・文化の国";
  
  const countryFeatures = [
    {
      title: "音楽の都",
      description: "ウィーン・フィルハーモニーと音楽文化",
      imageUrl: "https://images.unsplash.com/photo-1753524998049-8082f40e09ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXVzdHJpYSVFMyU4MCU4MG11c2ljfGVufDB8fDB8fHww",
      imageAlt: "オーストリアの音楽文化"
    },
    {
      title: "アルプスの山々",
      description: "美しい山々とスキーリゾート",
      imageUrl: "https://images.unsplash.com/photo-1598871955824-3db4b5f9494d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEF1c3RyaWF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "オーストリアのアルプス"
    },
    {
      title: "豊かな文化",
      description: "ハプスブルク家の歴史と文化",
      imageUrl: "https://images.unsplash.com/photo-1665519392482-9b176c1a341e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEF1c3RyaWF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "オーストリアの文化"
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
      description: "オーストリア人は礼儀正しく、文化を大切にする人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "ドイツ語の本場で学ぶ",
      description: "正統なドイツ語とオーストリア文化を習得。ウィーンの語学学校で、オーストリア独特のドイツ語を学びながら、音楽と文化の都の雰囲気を体験できます。",
      icon: "🗣️"
    },
    {
      title: "音楽の都ウィーン",
      description: "ウィーン・フィルハーモニーと音楽文化。国立オペラ座でのオペラ鑑賞、ウィーン少年合唱団のコンサート、モーツァルトやシュトラウスの音楽を本場で体験できます。",
      icon: "🎼"
    },
    {
      title: "アルプスの美しい山々",
      description: "美しい山々とスキーリゾート。チロル地方でのスキー、ハイキング、美しい湖でのリラックスなど、アルプスの自然を満喫できます。",
      icon: "⛰️"
    },
    {
      title: "中央ヨーロッパの拠点",
      description: "周辺諸国へのアクセスが便利。ドイツ、チェコ、スロバキア、ハンガリーなど周辺諸国へのアクセスが良く、ヨーロッパ旅行の拠点として最適です。",
      icon: "✈️"
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
