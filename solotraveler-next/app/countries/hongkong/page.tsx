"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import hongkongData from "../../../db.json";

export default function HongKongDetailPage() {
  const country = hongkongData.countries.find(c => c.id === "hongkong")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "香港は、世界有数の金融センター、豊かな文化、そして美食を持つ国です。\n香港島をはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "金融・文化・美食の国";
  
  const countryFeatures = [
    {
      title: "金融の国",
      description: "世界有数の金融センター",
      imageUrl: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZyUyMGtvbmd8ZW58MHx8MHx8fDA%3D",
      imageAlt: "香港の金融"
    },
    {
      title: "豊かな文化",
      description: "東洋と西洋が融合した文化",
      imageUrl: "https://images.unsplash.com/photo-1502099530544-2b61cbaed85c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbmclMjBrb25nfGVufDB8fDB8fHww",
      imageAlt: "香港の文化"
    },
    {
      title: "美食の国",
      description: "世界最高級の香港料理",
      imageUrl: "https://images.unsplash.com/photo-1552912470-ee2e96439539?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZyUyMGtvbmclRTMlODAlODBmb29kfGVufDB8fDB8fHww",
      imageAlt: "香港の美食"
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
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "香港人は親切でフレンドリー、ビジネスを大切にする人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "英語と中国語のバイリンガル環境",
      description: "国際的な環境で両言語を習得",
      icon: "🗣️"
    },
    {
      title: "アジアの金融ハブ",
      description: "世界有数の金融センターでビジネス体験",
      icon: "💼"
    },
    {
      title: "東洋と西洋の文化融合",
      description: "独特の文化と美食を体験",
      icon: "🌏"
    },
    {
      title: "アジア旅行の拠点",
      description: "中国本土や東南アジアへのアクセス良好",
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
