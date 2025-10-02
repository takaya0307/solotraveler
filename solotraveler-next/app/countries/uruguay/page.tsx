"use client";
import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import uruguayData from "../../../db.json";

export default function UruguayDetailPage() {
  const country = uruguayData.countries.find(c => c.id === "uruguay")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "ウルグアイは、美しいビーチ、豊かな文化、そして美しい自然を持つ国です。\nモンテビデオをはじめとする美しい都市、そして大西洋の海岸線を満喫できます。最低賃金は月給ベースで計算されています。";
  
  const countryDescription = "ビーチ・文化・自然の国";
  
  const countryFeatures = [
    {
      title: "ビーチの国",
      description: "美しい大西洋の海岸線",
      imageUrl: "https://images.unsplash.com/photo-1616959313137-186688889054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VXJ1Z3VheXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "ウルグアイのビーチ"
    },
    {
      title: "豊かな文化",
      description: "伝統的なウルグアイ文化",
      imageUrl: "https://images.unsplash.com/photo-1742287622295-1669f3a84f9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fFVydWd1YXl8ZW58MHx8MHx8fDA%3D",
      imageAlt: "ウルグアイの文化"
    },
    {
      title: "美しい自然",
      description: "田園風景と美しい景観",
      imageUrl: "https://images.unsplash.com/photo-1624416254374-b471bfcaac81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VXJ1Z3VheXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "ウルグアイの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は比較的穏やかです。大西洋の影響で過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ウルグアイ人は親切でフレンドリー、家族を大切にする人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "スペイン語の本場で学ぶ",
      description: "南米のスペイン語とウルグアイ文化を習得。モンテビデオの語学学校で、ウルグアイ独特のスペイン語を学びながら、南米の文化も深く体験できます。",
      icon: "🗣️"
    },
    {
      title: "大西洋の美しいビーチ",
      description: "大西洋に面した美しい海岸線を満喫。プンタ・デル・エステ、コロニア・デル・サクラメント、モンテビデオのビーチなど、大西洋の美しい海岸線を楽しめます。",
      icon: "🏖️"
    },
    {
      title: "タンゴと音楽文化",
      description: "タンゴと音楽文化を体験。アルゼンチンと同様にタンゴの文化が根付いており、本場のタンゴショーや音楽イベントを楽しめます。",
      icon: "🎵"
    },
    {
      title: "南米の隠れた名所",
      description: "南米の隠れた名所として注目。アルゼンチンやブラジルに比べて観光客が少なく、落ち着いた環境で南米の文化を体験できます。",
      icon: "🌟"
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
