import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import slovakiaData from "../../../db.json";

export default function SlovakiaDetailPage() {
  const country = slovakiaData.countries.find(c => c.id === "slovakia")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "スロバキアは、美しい山々、豊かな文化、そして深い歴史を持つ国です。\nブラチスラバをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "山・文化・歴史の国";
  
  const countryFeatures = [
    {
      title: "山の国",
      description: "美しいタトラ山脈と自然",
      imageUrl: "https://images.unsplash.com/photo-1470043201067-764120126eb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2xvdmFraWF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "スロバキアの山"
    },
    {
      title: "豊かな文化",
      description: "伝統的なスロバキア文化",
      imageUrl: "https://images.unsplash.com/photo-1572085825670-680538e598fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2xvdmFraWF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "スロバキアの文化"
    },
    {
      title: "深い歴史",
      description: "中世の歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1652421818308-b98cbcb4605e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNsb3Zha2lhfGVufDB8fDB8fHww",
      imageAlt: "スロバキアの歴史"
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
      description: "スロバキア人は親切でフレンドリー、文化を大切にする人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "スロバキア語の本場で学ぶ",
      description: "スラブ系言語とスロバキア文化を習得。ブラチスラバの語学学校で、スロバキア語を学びながら、スロバキアの深い文化と歴史も体験できます。",
      icon: "🗣️"
    },
    {
      title: "タトラ山脈の美しい自然",
      description: "タトラ山脈でのハイキングやスキー。ハイタトラスでのハイキング、スロバキア・パラダイス国立公園、スキーリゾートなど、豊かな自然を満喫できます。",
      icon: "⛰️"
    },
    {
      title: "中世の歴史的建造物",
      description: "中世の歴史的建造物を体験。ブラチスラバ城、スピシュ城、バルデヨフの世界遺産など、中世の歴史と建築文化を学べます。",
      icon: "🏰"
    },
    {
      title: "中央ヨーロッパの拠点",
      description: "中央ヨーロッパの拠点として便利。オーストリア、チェコ、ポーランドなど周辺諸国へのアクセスが良く、ヨーロッパ旅行の拠点として最適です。",
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
