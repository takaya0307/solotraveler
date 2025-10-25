"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import ukData from "../../../db.json";
export default function UKDetailPage() {
  const country = ukData.countries.find(c => c.id === "uk")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "イギリスは、豊かな歴史と文化を持つヨーロッパの中心地です。\nロンドンをはじめとする歴史的な都市、美しい田園風景、そして世界最高峰の教育機関が集まる国です。";
  
  const countryDescription = "イギリスワーホリの体験談・年齢制限・人気都市・おすすめポイントを見やすくまとめています。豊かな歴史と文化が息づくヨーロッパの中心地で、英語学習に最適な環境です。";
  
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
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&auto=format&fit=crop&q=60",
      imageAlt: "イギリスの教育"
    },
    {
      title: "多文化社会",
      description: "様々な国の文化が融合した国際的な環境",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop&q=60",
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

  const englishProficiency = {
    level: "ネイティブ",
    score: 100,
    description: "英語が母語で、生活や仕事、教育などすべて英語が基本。"
  };

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

  // 体験談セクション（noteの記事へのリンク）
  const testimonials: Array<{
    title: string;
    url: string;
    description: string;
  }> = [
    {
      title: "初めてのワーホリ生活、始まりました🇬🇧 不安だらけのスタート",
      url: "https://note.com/ponpon_day_uk/n/nbe17940f8a7f",
      description: "ポンちゃんさんのイギリスワーホリ体験談。2025年春、英語力ゼロからイギリスでワーホリをスタート。渡英直後の不安とワクワクの気持ちをリアルに綴った体験談。家も仕事も決まっていない状態からのスタートで感じた正直な気持ちや、日本で働いていた会社への感謝、そしてこれからの新しい挑戦への決意が伝わる内容です。「とにかく楽しむ」という心を決めて、不安をワクワクに変えていく姿勢が印象的な記事です。"
    },
    {
      title: "🇬🇧英語CV作りに挑戦！仕事探しの第一歩｜私のイギリス生活1ヶ月記念",
      url: "https://note.com/ponpon_day_uk/n/n114e66d5ad0b",
      description: "ポンちゃんさんのイギリス渡英1ヶ月後のCV（履歴書）作成体験談。英語でCVを書くのは初めてで、フォーマットも何を書けばいいのかもわからない状態からのスタート。無料ツールを試行錯誤した末、最終的にCanvaを使ってCVを完成させた過程をリアルに綴っています。仕事が見つからない不安で押しつぶされそうになりながらも、姉夫婦のサポートを受けて一歩踏み出した経験や、実際にCVに記載した内容についても具体的に紹介。イギリスでの仕事探しの現実が伝わる体験談です。"
    },
    {
      title: "イギリスワーホリ｜３ヶ月目に感じた成長と気づき",
      url: "https://note.com/ponpon_day_uk/n/n168c935abd05",
      description: "ポンちゃんさんのイギリス渡英3ヶ月目の深い内省と成長を綴った体験談。働き始めて2ヶ月、生活には慣れてきたものの「英語がわからない環境に慣れてしまった」ことへの違和感と向き合う内容。ワーホリに来た本来の目的を見失いかけた自分に気づき、過去の挫折や「人のために頑張る」ことから「自分のために成長する」ことへの意識の変化が描かれています。目標を持つことの怖さ、自分自身と向き合う大切さ、そして「まずは自分を高める」という決意まで、ワーホリ生活の中での心の成長がリアルに伝わる深い体験談です。"
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
      jobInfo={jobInfo}
      testimonials={testimonials}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
