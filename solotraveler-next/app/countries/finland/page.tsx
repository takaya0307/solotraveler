import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import finlandData from "../../../db.json";

export default function FinlandDetailPage() {
  const country = finlandData.countries.find(c => c.id === "finland")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "フィンランドは、サンタクロースの故郷として知られ、美しい森とオーロラ、そして優れた教育制度を持つ国です。\n自然と調和した生活を送ることができる環境です。";
  
  const countryDescription = "サンタ・オーロラ・森の国";
  
  const countryFeatures = [
    {
      title: "オーロラ",
      description: "美しい北極光の観測",
      imageUrl: "https://images.unsplash.com/photo-1505136026201-bbc1bc0949fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZpbmxhbmR8ZW58MHx8MHx8fDA%3D",
      imageAlt: "フィンランドのオーロラ"
    },
    {
      title: "森の国",
      description: "広大な森と美しい湖",
      imageUrl: "https://images.unsplash.com/photo-1564857170582-80855988d55e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZpbmxhbmR8ZW58MHx8MHx8fDA%3D",
      imageAlt: "フィンランドの森"
    },
    {
      title: "サンタクロース",
      description: "サンタクロースの故郷",
      imageUrl: "https://images.unsplash.com/photo-1719247552553-0a93b8bc9fe5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlubGFuZCVFMyU4MCU4MHNhbnRhfGVufDB8fDB8fHww",
      imageAlt: "サンタクロースの故郷"
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
      description: "フィンランド人は控えめで誠実、自然を愛する人が多いです。",
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
