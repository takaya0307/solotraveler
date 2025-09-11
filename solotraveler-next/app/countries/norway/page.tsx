import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import norwayData from "../../../db.json";

export default function NorwayDetailPage() {
  const country = norwayData.countries.find(c => c.id === "norway")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "ノルウェーは、美しいフィヨルド、オーロラ、そして豊かな自然で知られる国です。\n世界最高の生活水準と美しい景観を満喫できる環境です。";
  
  const countryDescription = "フィヨルド・オーロラ・自然の国";
  
  const countryFeatures = [
    {
      title: "フィヨルド",
      description: "世界で最も美しいフィヨルド",
      imageUrl: "https://images.unsplash.com/photo-1656490246727-a58085b306d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9yd2F5JTIwZmpvcmRzfGVufDB8fDB8fHww",
      imageAlt: "ノルウェーのフィヨルド"
    },
    {
      title: "オーロラ",
      description: "美しい北極光の観測",
      imageUrl: "https://images.unsplash.com/photo-1610989432929-9769f3cf8006?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9yd2F5JTIwYXVyb3JhfGVufDB8fDB8fHww",
      imageAlt: "ノルウェーのオーロラ"
    },
    {
      title: "自然豊か",
      description: "広大な森と美しい山々",
      imageUrl: "https://images.unsplash.com/photo-1600256698889-61ff2cd73cd8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5vcndheXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "ノルウェーの自然"
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
      description: "ノルウェー人は控えめで誠実、自然を愛する人が多いです。",
      icon: "😊"
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
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
