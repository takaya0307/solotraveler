import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import franceData from "../../../db.json";

export default function FranceDetailPage() {
  const country = franceData.countries.find(c => c.id === "france")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "フランスは、芸術、ファッション、美食の本場として知られるヨーロッパの中心地です。\nパリをはじめとする美しい都市、豊かな文化、そして世界最高峰の料理を楽しむことができます。";
  
  const countryDescription = "芸術・ファッション・美食の本場、ヨーロッパの中心地";
  
  const countryFeatures = [
    {
      title: "芸術と文化",
      description: "ルーブル美術館やオルセー美術館など世界最高峰の美術館",
      imageUrl: "https://images.unsplash.com/photo-1752461046051-3b6c1d95d61c?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "フランスの芸術と文化"
    },
    {
      title: "美食の国",
      description: "世界最高峰のレストランとワイン文化",
      imageUrl: "https://images.unsplash.com/photo-1724015736616-60f63aaf72b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEZyYW5jZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      imageAlt: "フランスの美食"
    },
    {
      title: "ファッション",
      description: "パリコレクションと世界のファッションの中心",
      imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "フランスのファッション"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、春と秋が過ごしやすいです。夏は温暖、冬は比較的寒い地域が多いです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "観光地は比較的安全ですが、都市部では注意が必要です。基本的な防犯意識を持つことが大切です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "フランス人は芸術や文化を大切にし、美食を愛する人が多いです。最初は少し距離感がありますが、親しくなると親切です。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "フランス語の本場で学ぶ",
      description: "正統なフランス語と文化を同時に習得。パリの語学学校で、正しい発音と表現を学びながら、フランスの生活文化も体験できます。",
      icon: "🗣️"
    },
    {
      title: "芸術と文化の宝庫",
      description: "ルーブル美術館など世界最高峰の美術館。モナリザやミロのヴィーナスなど、世界の名作を間近で鑑賞できます。",
      icon: "🎨"
    },
    {
      title: "美食とワイン文化",
      description: "世界最高峰の料理とワインを堪能。ミシュラン星付きレストランで本場のフランス料理を味わい、ブルゴーニュやボルドーのワインを楽しめます。",
      icon: "🍷"
    },
    {
      title: "ヨーロッパ旅行の拠点",
      description: "EU諸国へのアクセスが便利。TGVでベルギーやスイスへ、飛行機でヨーロッパ各国へ簡単に旅行できます。",
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