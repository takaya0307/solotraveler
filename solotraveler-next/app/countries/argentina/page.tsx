"use client";
"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import argentinaData from "../../../db.json";

export default function ArgentinaDetailPage() {
  const country = argentinaData.countries.find(c => c.id === "argentina")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "アルゼンチンは、情熱的なタンゴ、世界最高級のワイン、そして豊かな自然を持つ国です。\nブエノスアイレスをはじめとする美しい都市、そしてパタゴニアの自然を満喫できます。";
  
  const countryDescription = "タンゴ・ワイン・自然の国";
  
  const countryFeatures = [
    {
      title: "タンゴの国",
      description: "情熱的なタンゴ文化",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661326461332-54da72406608?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUUzJTgyJUJGJUUzJTgzJUIzJUUzJTgyJUI0fGVufDB8fDB8fHww",
      imageAlt: "アルゼンチンのタンゴ"
    },
    {
      title: "ワインの国",
      description: "世界最高級のアルゼンチンワイン",
      imageUrl: "https://images.unsplash.com/photo-1626895903331-952492df45f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJnZW50aW5hJTIwd2luZXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "アルゼンチンのワイン"
    },
    {
      title: "豊かな自然",
      description: "パタゴニアとアンデス山脈",
      imageUrl: "https://images.unsplash.com/photo-1556918936-3e73b945d24f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJnZW50aW5hfGVufDB8fDB8fHww",
      imageAlt: "アルゼンチンの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "南北に長い国で、地域により気候が大きく異なります。北部は亜熱帯、中部は温暖、南部は寒い気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "アルゼンチン人は情熱的でフレンドリー、家族を大切にする人が多いです。",
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
