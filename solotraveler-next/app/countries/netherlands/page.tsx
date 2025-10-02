import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import netherlandsData from "../../../db.json";

export default function NetherlandsDetailPage() {
  const country = netherlandsData.countries.find(c => c.id === "netherlands")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "オランダは、風車、チューリップ、自由な文化で知られる国です。\nアムステルダムをはじめとする美しい都市、美しい田園風景、そして進歩的な社会制度が特徴です。";
  
  const countryDescription = "風車・チューリップ・自由の国";
  
  const countryFeatures = [
    {
      title: "風車と田園",
      description: "美しい風車と広大な田園風景",
      imageUrl: "https://images.unsplash.com/photo-1595698251407-8e7e3030a715?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0aGVybGFuZHN8ZW58MHx8MHx8fDA%3D",
      imageAlt: "オランダの風車と田園"
    },
    {
      title: "チューリップ",
      description: "世界最大のチューリップ畑",
      imageUrl: "https://images.unsplash.com/photo-1555930316-ae935820b28c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fG5ldGhlcmxhbmRzfGVufDB8fDB8fHww",
      imageAlt: "オランダのチューリップ"
    },
    {
      title: "自由な文化",
      description: "進歩的で自由な社会制度",
      imageUrl: "https://images.unsplash.com/photo-1667053312990-c17655704190?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ldGhlcmxhbmRzfGVufDB8fDB8fHww",
      imageAlt: "オランダの自由な文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "海洋性気候で、夏は温暖、冬は比較的穏やかです。雨が多いですが、四季を通じて過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "オランダ人は率直でフレンドリー、平等を重視する人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "英語とオランダ語の環境",
      description: "国際的な環境で両言語を習得。アムステルダムの語学学校で、オランダ語を学びながら、国際都市として発達した環境で実用的な英語も身につけられます。",
      icon: "🗣️"
    },
    {
      title: "サイクリング文化",
      description: "自転車中心の生活で健康的なライフスタイル。専用レーンが完備された自転車道で、安全にサイクリングを楽しみながら、オランダ人の環境意識も学べます。",
      icon: "🚴"
    },
    {
      title: "風車とチューリップ",
      description: "世界的に有名な観光スポットを体験。キンデルダイクの風車群やキューケンホフのチューリップ畑、アムステルダムの運河クルーズなど、オランダの象徴的な風景を満喫できます。",
      icon: "🌷"
    },
    {
      title: "進歩的な社会制度",
      description: "自由で多様性を尊重する社会。同性婚の合法化、大麻の合法化、安楽死制度など、世界でも最も進歩的な社会制度を体験し、多様性を尊重する文化を学べます。",
      icon: "🌈"
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
