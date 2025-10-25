"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import denmarkData from "../../../db.json";

export default function DenmarkDetailPage() {
  const country = denmarkData.countries.find(c => c.id === "denmark")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "デンマークは、世界で最も幸福な国の一つとして知られ、優れたデザイン文化と自転車文化を持つ国です。\nコペンハーゲンをはじめとする美しい都市、そして北欧の魅力を満喫できます。";
  
  const countryDescription = "幸福・デザイン・自転車の国";
  
  const countryFeatures = [
    {
      title: "幸福の国",
      description: "世界で最も幸福な国の一つ",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&auto=format&fit=crop&q=60",
      imageAlt: "デンマークの幸福"
    },
    {
      title: "デザイン文化",
      description: "北欧デザインの本場",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&auto=format&fit=crop&q=60",
      imageAlt: "デンマークのデザイン文化"
    },
    {
      title: "自転車文化",
      description: "自転車が生活の中心",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&auto=format&fit=crop&q=60",
      imageAlt: "デンマークの自転車文化"
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
      description: "非常に安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "デンマーク人は親切でフレンドリー、平等を重視する人が多いです。",
      icon: "😊"
    }
  ];

  const englishProficiency = {
    level: "非常に高い",
    score: 90,
    description: "多くの人が流暢に英語を話し、問題なくコミュニケーションが取れます。母語ではありませんが、ほぼ英語圏に近い感覚で生活できます。"
  };

  const countryHighlights = [
    {
      title: "デンマーク語と英語",
      description: "北欧の言語と国際的な英語環境。コペンハーゲンの語学学校で、デンマーク語を学びながら、高い英語力を持つデンマーク人との交流で実用的な英語も身につけられます。",
      icon: "🗣️"
    },
    {
      title: "世界最高の幸福度",
      description: "世界で最も幸福な国の一つ。ヒュッゲ（居心地の良さ）の文化、充実した社会保障制度、ワークライフバランスを体験し、幸せな生活スタイルを学べます。",
      icon: "😊"
    },
    {
      title: "北欧デザインの本場",
      description: "ミニマルで機能的なデザインを体験。レゴの発祥地で、機能性と美しさを兼ね備えた北欧デザインの本質を学び、シンプルで質の高い生活スタイルを体験できます。",
      icon: "🎨"
    },
    {
      title: "自転車中心の生活",
      description: "自転車が生活の中心。専用レーンが完備された自転車道で、安全にサイクリングを楽しみながら、環境に優しい生活スタイルを体験できます。",
      icon: "🚴"
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
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
