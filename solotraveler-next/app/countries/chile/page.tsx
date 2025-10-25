"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import chileData from "../../../db.json";

export default function ChileDetailPage() {
  const country = chileData.countries.find(c => c.id === "chile")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "チリは、美しいワイン、豊かな自然、そして深い文化を持つ国です。\nサンティアゴをはじめとする美しい都市、そしてアンデス山脈やパタゴニアの自然を満喫できます。";
  
  const countryDescription = "ワイン・自然・文化の国";
  
  const countryFeatures = [
    {
      title: "ワインの国",
      description: "世界最高級のチリワイン",
      imageUrl: "https://images.unsplash.com/photo-1558565850-13a967c4519f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGUlMjB3aW5lfGVufDB8fDB8fHww",
      imageAlt: "チリのワイン"
    },
    {
      title: "豊かな自然",
      description: "アンデス山脈とパタゴニア",
      imageUrl: "https://images.unsplash.com/photo-1478827387698-1527781a4887?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGV8ZW58MHx8MHx8fDA%3D",
      imageAlt: "チリの自然"
    },
    {
      title: "豊かな文化",
      description: "伝統的なチリ文化",
      imageUrl: "https://images.unsplash.com/photo-1601577292853-fe9663adfb18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxjaGlsZXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "チリの文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "南北に長い国で、地域により気候が大きく異なります。北部は砂漠、中部は地中海性気候、南部は寒い気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "チリ人は親切でフレンドリー、家族を大切にする人が多いです。",
      icon: "😊"
    }
  ];

  const englishProficiency = {
    level: "中程度",
    score: 50,
    description: "チリでは都市部や若い世代を中心に英語が通じますが、全体的には英語力はそれほど高くありません。\n\n観光地では英語でやり取りできますが、日常生活ではスペイン語が基本です。\n\nワーホリで滞在する場合は、簡単なスペイン語を覚えておくと生活がぐっと楽になります。"
  };

  const countryHighlights = [
    {
      title: "スペイン語の本場で学ぶ",
      description: "南米のスペイン語とチリ文化を習得。サンティアゴの語学学校で、チリ独特のスペイン語を学びながら、南米の文化も深く体験できます。",
      icon: "🗣️"
    },
    {
      title: "世界最高級のワイン",
      description: "世界最高級のチリワインを堪能。カサブランカ、マイポ、コルチャグアなどのワイナリーで、カルメネールやソーヴィニヨン・ブランなど本場のワインを味わえます。",
      icon: "🍷"
    },
    {
      title: "アンデス山脈とパタゴニア",
      description: "アンデス山脈とパタゴニアの自然を体験。アタカマ砂漠、トーレス・デル・パイネ国立公園、イースター島など、世界有数の自然美を満喫できます。",
      icon: "🏔️"
    },
    {
      title: "南米の玄関口",
      description: "南米諸国へのアクセスが便利。ペルー、ボリビア、アルゼンチンなど周辺諸国へのアクセスが良く、南米旅行の拠点として最適です。",
      icon: "✈️"
    }
  ];

  // 体験談セクション（noteの記事へのリンク）
  const testimonials: Array<{
    title: string;
    url: string;
    description: string;
  }> = [
    {
      title: "チリ🇨🇱のワーホリビザ申請 究極完全解説【2025年版】",
      url: "https://note.com/ghenki_traveler/n/ne2f2e7b0fad8",
      description: "チリワーホリビザ申請の完全ガイド。15,000字のスーパーボリュームで、申請準備から入国まで半年間のスケジュール、必要書類の準備方法、面接の流れ、予防接種の重要性まで詳細に解説。犯罪経歴証明書の取得手順やアポスティーユの取得方法など、手間のかかる手続きについても丁寧に説明。情報が少ないチリワーホリの貴重な最新情報が満載の必読記事です。"
    },
    {
      title: "チリに来て1ヶ月が経ちました",
      url: "https://note.com/ghenki_traveler/n/nd9a14446afe7",
      description: "ミノベゲンキさんのチリ到着1ヶ月目のリアルな生活記録。サンティアゴの賑やかな街並み、ビーニャ・デル・マール・バルパライソの海沿いの街、RUTカード取得の手続き、ボランティア活動での家のリフォーム作業、アンデス山脈沿いの温泉体験、夜行列車での移動など、チリでの実際の生活の様子を詳しく綴った貴重な体験談。"
    },
    {
      title: "南米チリにワーホリ行きます【マイナー国】",
      url: "https://note.com/ghenki_traveler/n/nbf42cc8db940",
      description: "イギリスからチリへの大転換！ミノベゲンキさんがチリワーホリを決意した経緯を綴った記事。当初はイギリス縦断旅行までしてイギリス住みを計画していたが、パートナーの助言で南米・チリに興味を持ち、最終的に68%の確信でチリ行きを決定。チリの細長い国土への憧れ、チリ縦断への挑戦、世界最南端の集落プエルト・トロへの訪問計画など、ワーホリ前の心境と今後の予定を詳しく記録。"
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
      testimonials={testimonials}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
