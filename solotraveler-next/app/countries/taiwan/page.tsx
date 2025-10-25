"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import taiwanData from "../../../db.json";

export default function TaiwanDetailPage() {
  const country = taiwanData.countries.find(c => c.id === "taiwan")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "台湾は、美食、文化、自然が豊かな国です。\n台北をはじめとする現代的な都市から、美しい山々や海岸線まで、多様な魅力を持つ国です。";
  
  const countryDescription = "美食・文化・自然が豊かな国";
  
  const countryFeatures = [
    {
      title: "美食の国",
      description: "小籠包、牛肉麺、台湾料理",
      imageUrl: "https://images.unsplash.com/photo-1551851300-1fd39219a668?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFpd2FuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "台湾の美食"
    },
    {
      title: "自然豊か",
      description: "美しい山々と海岸線",
      imageUrl: "https://images.unsplash.com/photo-1583395145517-1e3177037600?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhaXdhbnxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "台湾の自然"
    },
    {
      title: "伝統文化",
      description: "台湾の伝統文化と祭り",
      imageUrl: "https://images.unsplash.com/photo-1571555788467-71d9e3add426?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRhaXdhbnxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "台湾の伝統文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "亜熱帯気候で、夏は暑く、冬は比較的穏やかです。雨が多いですが、四季を通じて過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。公共交通機関も発達しています。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "台湾人は親切でフレンドリー、外国人にも親切です。温かくて親しみやすい文化があります。",
      icon: "😊"
    }
  ];

  const englishProficiency = {
    level: "中程度",
    score: 50,
    description: "台湾では都市部や若い世代を中心に英語が通じますが、全体的には英語力はそれほど高くありません。\n\n観光地では英語でやり取りできますが、日常生活では中国語が基本です。\n\nワーホリで滞在する場合は、簡単な中国語を覚えておくと生活がぐっと楽になります。"
  };

  const countryHighlights = [
    {
      title: "中国語の本場で学ぶ",
      description: "繁体字中国語と台湾文化を同時に習得。台北の語学学校で、実用的な中国語を学びながら、台湾の歴史と文化も深く理解できます。",
      icon: "🗣️"
    },
    {
      title: "豊富な台湾料理",
      description: "小籠包、牛肉麺など本場の台湾料理を堪能。夜市での屋台料理から高級レストランまで、台湾の多様な食文化を満喫できます。",
      icon: "🥟"
    },
    {
      title: "美しい自然環境",
      description: "山々と海岸線でのアウトドア体験。阿里山や日月潭、太平洋に面した美しい海岸線など、台湾の豊かな自然を楽しめます。",
      icon: "🏔️"
    },
    {
      title: "日本から最も近い海外",
      description: "アクセス良好で気軽にワーホリ体験。飛行機で約3時間、ビザなしで90日間滞在可能で、初めての海外生活に最適です。",
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
