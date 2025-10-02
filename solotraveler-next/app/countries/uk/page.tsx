"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import ukData from "../../../db.json";
export default function UKDetailPage() {
  const country = ukData.countries.find(c => c.id === "uk")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "イギリスは、豊かな歴史と文化を持つヨーロッパの中心地です。\nロンドンをはじめとする歴史的な都市、美しい田園風景、そして世界最高峰の教育機関が集まる国です。";
  
  const countryDescription = "歴史と文化が息づくヨーロッパの中心地";
  
  const countryFeatures = [
    {
      title: "歴史と文化",
      description: "世界遺産や歴史的建造物が数多く存在",
      imageUrl: "https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdGVkJTIwa2luZ2RvbXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "イギリスの歴史と文化"
    },
    {
      title: "教育の質",
      description: "オックスフォード、ケンブリッジなど世界最高峰の大学",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "イギリスの教育"
    },
    {
      title: "多文化社会",
      description: "様々な国の文化が融合した国際的な環境",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "多文化社会"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "比較的穏やかな気候で、四季がはっきりしています。雨が多いですが、夏は過ごしやすく、冬も極端に寒くはありません。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。公共交通機関も発達しており、移動も便利です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "イギリス人は礼儀正しく、ユーモアのセンスがある人が多いです。最初は少し距離感がありますが、親しくなると親切です。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "ヨーロッパの玄関口",
      description: "EU諸国への旅行が簡単で、ヨーロッパ観光の拠点。ユーロスターでフランスへ、飛行機でヨーロッパ各国へ簡単にアクセスできます。",
      icon: "🌍"
    },
    {
      title: "歴史と文化の宝庫",
      description: "世界遺産や博物館で豊かな文化体験。大英博物館、タワーブリッジ、バッキンガム宮殿など、歴史的建造物が数多くあります。",
      icon: "🏛️"
    },
    {
      title: "英語の本場で学ぶ",
      description: "クイーンズイングリッシュで正統な英語を習得。オックスフォードやケンブリッジの大学町で、最高レベルの英語教育を受けることができます。",
      icon: "👑"
    },
    {
      title: "多彩な都市体験",
      description: "ロンドンの都会から田園風景まで多様な環境。コッツウォルズの美しい田園地帯から、エディンバラの歴史的街並みまで楽しめます。",
      icon: "🏙️"
    }
  ];

  const jobInfo = {
    popularJobs: [
      "パブ（バーテンダー、ウェイター、キッチン）",
      "レストラン・カフェ（ウェイター、キッチン、バリスタ）",
      "ホテル・宿泊施設（フロント、ハウスキーピング、ベルボーイ）",
      "小売業（ショップスタッフ、レジ係、倉庫作業）",
      "観光業（ツアーガイド、博物館スタッフ）",
      "日本語教師（プライベートレッスン、語学スクール）",
      "清掃業（オフィス清掃、ハウスクリーニング）",
      "オフィスワーク（データ入力、アシスタント）"
    ],
    jobSearchMethods: [
      "Indeed UK（イギリス最大級の求人サイト）",
      "Reed.co.uk（イギリスの主要求人サイト）",
      "直接パブ・レストラン訪問",
      "ホテル・宿泊施設の直接訪問",
      "友人・知人からの紹介"
    ],
    averageWage: "平均時給は£8-12（約1,480-2,220円）。ロンドンなどの都市部では時給が高く、£10-15程度。パブやレストランではチップも期待でき、実質的な収入がさらに高くなります。",
    specialNotes: "パブでの仕事はイギリス特有の文化体験ができる人気の職種です。ロンドンなどの都市部では競争が激しいため、地方都市も検討すると良いでしょう。観光シーズン（夏期）には観光業での求人が多くなります。"
  };

  return (
    <CountryDetailLayout
      country={country}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      countryDescription={countryDescription}
      countryFeatures={countryFeatures}
      countryAtmosphere={countryAtmosphere}
      countryHighlights={countryHighlights}
      jobInfo={jobInfo}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
