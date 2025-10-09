"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import estoniaData from "../../../db.json";

export default function EstoniaDetailPage() {
  const country = estoniaData.countries.find(c => c.id === "estonia")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "エストニアは、デジタル化が進んだ先進国で、豊かな文化と美しい自然を持つ国です。\nタリンをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "デジタル・文化・自然の国";
  
  const countryFeatures = [
    {
      title: "デジタル先進国",
      description: "世界最先端のデジタル技術",
      imageUrl: "https://images.unsplash.com/photo-1560873564-8423716d9f2a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXN0b25pYXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "エストニアのデジタル技術"
    },
    {
      title: "豊かな文化",
      description: "伝統的なエストニア文化",
      imageUrl: "https://images.unsplash.com/photo-1597552945536-204b782f9777?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGVzdG9uaWF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "エストニアの文化"
    },
    {
      title: "美しい自然",
      description: "森と湖の美しい景観",
      imageUrl: "https://images.unsplash.com/photo-1628075838471-2acd4e11b722?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGVzdG9uaWF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "エストニアの自然"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。バルト海の影響で比較的穏やかです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "エストニア人は親切でフレンドリー、技術を大切にする人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "エストニア語と英語",
      description: "フィン・ウゴル語族の言語と国際的な英語環境。タリンの語学学校で、エストニア語を学びながら、高い英語力を持つエストニア人との交流で実用的な英語も身につけられます。",
      icon: "🗣️"
    },
    {
      title: "デジタル先進国",
      description: "世界最先端のデジタル技術を体験。e-レジデンシー、デジタル政府、ITスタートアップの本場で、最新のテクノロジーとデジタル文化を学べます。",
      icon: "💻"
    },
    {
      title: "バルト海の自然",
      description: "バルト海沿岸の美しい自然を体験。タリンの旧市街、ラヘマー国立公園、バルト海の海岸線など、美しい自然と歴史を楽しめます。",
      icon: "🌊"
    },
    {
      title: "バルト三国の拠点",
      description: "バルト三国へのアクセスが便利。ラトビア、リトアニアなど周辺諸国へのアクセスが良く、バルト地域旅行の拠点として最適です。",
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
      title: "【エストニア】海外就職の仕事探し【ワーホリ】",
      url: "https://note.com/takubeen/n/n491129fb63ed",
      description: "たくびーんさんのエストニアワーホリ体験談。20代で会社員を辞め、2023年4月からワーキングホリデービザでエストニア移住を開始。エストニアでの仕事探しについて、CV.ee、work in Estonia、Cvkeskus.eeなどの求人サイト、LinkedIn、Facebookグループ、現地人の紹介など、具体的な方法を詳しく解説。日本からリモートで仕事を受注する方法や、CVとカバーレターの準備についても触れており、エストニアでの就職活動に役立つ実用的な情報が満載です。"
    },
    {
      title: "【海外留学】ワーホリ費用の試算方法と無料の便利ツール：スプレッドシート【エストニア】",
      url: "https://note.com/takubeen/n/n8c73c2f1fc52",
      description: "たくびーんさんによるワーホリ・海外留学費用の試算方法についての解説。「ざっくり100万円」という目安をもとに、国や滞在期間、現地での就労有無によって変わる費用を具体的に試算する方法を紹介。Googleスプレッドシートの「年間予算」テンプレートを活用し、支出・収入を月ごとに入力して費用感を把握する実用的な方法を詳しく解説。渡航先での就労や、実際に現地でワーホリ経験した人から情報を得る重要性についても触れています。"
    },
    {
      title: "【エストニア】ワーキングホリデービザ取得方法を解説！【ワーホリ】",
      url: "https://note.com/takubeen/n/nd7245c6eb977",
      description: "たくびーんさんによるエストニアのワーキングホリデービザ取得方法の詳細ガイド。滞在費用の確保、必要書類の準備、駐日エストニア大使館での面談、ビザ発行までの流れを実体験をもとに解説。ビザ申請書の具体的な入力方法や、パスポート、航空券、滞在先の証明書、証明写真、海外旅行保険の証明書、銀行の残高証明書、エストニアでの計画書など、必要書類について詳しく紹介しています。"
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
      testimonials={testimonials}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
