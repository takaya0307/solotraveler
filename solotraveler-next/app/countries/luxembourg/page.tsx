"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import luxembourgData from "../../../db.json";

export default function LuxembourgDetailPage() {
  const country = luxembourgData.countries.find(c => c.id === "luxembourg")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `ルクセンブルクワーホリ`;
  const pageDescription = "ルクセンブルクでは、世界有数の金融センター、豊かな文化、そして美しい自然を持つ国で生活できます。\nルクセンブルク市をはじめとする美しい都市、そして美しい自然を満喫できるワーホリ体験が待っています。";
  
  const countryDescription = "ルクセンブルクワーホリで体験できる金融・文化・自然の国";
  
  const countryFeatures = [
    {
      title: "金融の国",
      description: "世界有数の金融センター",
      imageUrl: "https://images.unsplash.com/photo-1616778504617-11615e3ceff7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEx1eGVtYm91cmd8ZW58MHx8MHx8fDA%3D",
      imageAlt: "ルクセンブルクの金融"
    },
    {
      title: "豊かな文化",
      description: "伝統的なルクセンブルク文化",
      imageUrl: "https://images.unsplash.com/photo-1543930379-9c68a7de2be8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEx1eGVtYm91cmd8ZW58MHx8MHx8fDA%3D",
      imageAlt: "ルクセンブルクの文化"
    },
    {
      title: "美しい自然",
      description: "森と美しい景観",
      imageUrl: "https://images.unsplash.com/photo-1593449044658-9b256082c8b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEx1eGVtYm91cmd8ZW58MHx8MHx8fDA%3D",
      imageAlt: "ルクセンブルクの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は比較的穏やかです。比較的過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "非常に安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ルクセンブルク人は親切でフレンドリー、多文化を大切にする人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "多言語環境",
      description: "ルクセンブルク語、フランス語、ドイツ語、英語の多言語環境。EUの機関が集まる国際都市で、多様な言語を学びながら、国際的な環境で働く経験ができます。",
      icon: "🗣️"
    },
    {
      title: "EUの金融ハブ",
      description: "世界有数の金融センターでビジネス体験。EU機関や国際金融機関が集まる環境で、金融業界での経験を積みながら、国際的なビジネス文化を学べます。",
      icon: "💼"
    },
    {
      title: "美しい自然と歴史",
      description: "森と美しい景観、歴史的建造物。ルクセンブルク城、ミュラーサル地区、モーゼル川沿いのワイナリーなど、コンパクトな国ながら豊富な観光スポットを楽しめます。",
      icon: "🏰"
    },
    {
      title: "ヨーロッパの中心",
      description: "ヨーロッパの中心に位置する便利な立地。フランス、ドイツ、ベルギーなど周辺諸国へのアクセスが良く、ヨーロッパ旅行の拠点として最適です。",
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
