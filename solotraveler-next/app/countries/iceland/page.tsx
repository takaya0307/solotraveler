"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import icelandData from "../../../db.json";

export default function IcelandDetailPage() {
  const country = icelandData.countries.find(c => c.id === "iceland")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "アイスランドは、美しいオーロラ、活発な火山、そして温泉を持つ国です。\nレイキャビクをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "オーロラ・火山・温泉の国";
  
  const countryFeatures = [
    {
      title: "オーロラの国",
      description: "美しい北極光の観測",
      imageUrl: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZWxhbmR8ZW58MHx8MHx8fDA%3D",
      imageAlt: "アイスランドのオーロラ"
    },
    {
      title: "火山の国",
      description: "活発な火山活動と地熱",
      imageUrl: "https://images.unsplash.com/photo-1547626740-02cb6aed9ef8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGljZWxhbmR8ZW58MHx8MHx8fDA%3D",
      imageAlt: "アイスランドの火山"
    },
    {
      title: "温泉の国",
      description: "豊富な温泉と地熱資源",
      imageUrl: "https://images.unsplash.com/photo-1456180520039-cf41fe5e719c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGljZWxhbmR8ZW58MHx8MHx8fDA%3D",
      imageAlt: "アイスランドの温泉"
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
      description: "アイスランド人は親切でフレンドリー、自然を愛する人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "アイスランド語と英語",
      description: "北欧の言語と国際的な英語環境。レイキャビクの語学学校で、アイスランド語を学びながら、高い英語力を持つアイスランド人との交流で実用的な英語も身につけられます。",
      icon: "🗣️"
    },
    {
      title: "オーロラと地熱",
      description: "美しい北極光と地熱資源を体験。ブルーラグーンでの温泉、ゲイシール間欠泉、オーロラ観測など、アイスランドならではの自然現象を心ゆくまで楽しめます。",
      icon: "🌌"
    },
    {
      title: "火山と氷河",
      description: "活発な火山活動と氷河を体験。スナイフェルスヨークトル氷河、グリムスヴォトン火山、黄金の滝など、地球の力を感じる壮大な自然を満喫できます。",
      icon: "🌋"
    },
    {
      title: "世界最北の首都",
      description: "世界最北の首都レイキャビクでの生活。コンパクトな街での生活、アートとデザインの文化、北欧の生活スタイルを体験できます。",
      icon: "🏔️"
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
