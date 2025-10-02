"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import portugalData from "../../../db.json";

export default function PortugalDetailPage() {
  const country = portugalData.countries.find(c => c.id === "portugal")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "ポルトガルは、豊かな歴史と文化、美しい自然を持つ国です。\nリスボンをはじめとする美しい都市、そして美しい海岸線を満喫できます。";
  
  const countryDescription = "歴史・文化・自然の国";
  
  const countryFeatures = [
    {
      title: "豊かな歴史",
      description: "大航海時代の歴史と文化",
      imageUrl: "https://images.unsplash.com/photo-1501927023255-9063be98970c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHVnYWx8ZW58MHx8MHx8fDA%3D",
      imageAlt: "ポルトガルの歴史"
    },
    {
      title: "美しい文化",
      description: "伝統的なポルトガル文化",
      imageUrl: "https://images.unsplash.com/photo-1581858348434-86eed6d96970?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxwb3J0dWdhbHxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "ポルトガルの文化"
    },
    {
      title: "美しい自然",
      description: "海岸線と美しい景観",
      imageUrl: "https://images.unsplash.com/photo-1555881400-89d5a9c86668?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwb3J0dWdhbHxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "ポルトガルの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "地中海性気候で、夏は温暖、冬は比較的穏やかです。海岸線は特に温暖で過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ポルトガル人は親切でフレンドリー、家族を大切にする人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "ポルトガル語の本場で学ぶ",
      description: "ラテン系言語とポルトガル文化を習得。リスボンの語学学校で、ポルトガル語を学びながら、ブラジルやアフリカ諸国でも通用する国際的な言語を身につけられます。",
      icon: "🗣️"
    },
    {
      title: "大航海時代の歴史",
      description: "世界史に大きな影響を与えた歴史文化。ベレンの塔やジェロニモス修道院、ポルトガル発見記念碑など、大航海時代の栄光を物語る歴史的建造物を巡りながら歴史を学べます。",
      icon: "⛵"
    },
    {
      title: "美しい海岸線",
      description: "大西洋に面した美しいビーチと海岸。アルガルヴェ地方の美しいビーチ、ポルトの海岸線、アゾレス諸島など、大西洋の美しい海岸線を満喫できます。",
      icon: "🏖️"
    },
    {
      title: "温暖な地中海気候",
      description: "一年を通じて過ごしやすい環境。春は花が咲き乱れ、夏はビーチで日光浴、秋はワイン収穫、冬は温暖で、四季を通じて豊富なアクティビティが楽しめます。",
      icon: "☀️"
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
