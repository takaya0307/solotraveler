"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import latviaData from "../../../db.json";

export default function LatviaDetailPage() {
  const country = latviaData.countries.find(c => c.id === "latvia")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "ラトビアは、バルト海に面し、豊かな文化と深い歴史を持つ国です。\nリガをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "バルト海・文化・歴史の国";
  
  const countryFeatures = [
    {
      title: "バルト海",
      description: "美しい海岸線と海の景色",
      imageUrl: "https://images.unsplash.com/photo-1563359474-654203f41b55?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGF0dmlhfGVufDB8fDB8fHww",
      imageAlt: "ラトビアのバルト海"
    },
    {
      title: "豊かな文化",
      description: "伝統的なラトビア文化",
      imageUrl: "https://images.unsplash.com/photo-1656921738916-37afb4886b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxhdHZpYXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "ラトビアの文化"
    },
    {
      title: "美しい建築",
      description: "アールヌーヴォー建築と歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1683730796330-06e60e3438d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHZpYXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "ラトビアの建築"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。バルト海の影響で比較的穏やかです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ラトビア人は親切でフレンドリー、文化を大切にする人が多いです。",
      icon: "😊"
    }
  ];

  const englishProficiency = {
    level: "高い",
    score: 70,
    description: "若い世代や都市部では英語を話せる人が多く、生活でも困ることはほとんどありません。\n\nただし、地方や年配の人との会話ではラトビア語が必要になる場面もあります。"
  };

  const countryHighlights = [
    {
      title: "ラトビア語と英語",
      description: "バルト系言語と国際的な英語環境。リガの語学学校で、ラトビア語を学びながら、高い英語力を持つラトビア人との交流で実用的な英語も身につけられます。",
      icon: "🗣️"
    },
    {
      title: "アールヌーヴォー建築",
      description: "美しいアールヌーヴォー建築を体験。リガ歴史地区の世界遺産、アールヌーヴォー建築の傑作を巡りながら、建築と芸術の文化を学べます。",
      icon: "🏛️"
    },
    {
      title: "バルト海の海岸線",
      description: "バルト海に面した美しい海岸線を体験。ユールマラのビーチ、リガ湾、バルト海の海岸線など、美しい海の景色を楽しめます。",
      icon: "🌊"
    },
    {
      title: "バルト三国の中心",
      description: "バルト三国の中心に位置する便利な立地。エストニア、リトアニアなど周辺諸国へのアクセスが良く、バルト地域旅行の拠点として最適です。",
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
      englishProficiency={englishProficiency}
      countryHighlights={countryHighlights}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
