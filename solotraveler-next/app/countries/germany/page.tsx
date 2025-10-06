import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import germanyData from "../../../db.json";

export default function GermanyDetailPage() {
  const country = germanyData.countries.find(c => c.id === "germany")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "ドイツは、高度な技術力と豊かな文化、深い歴史を持つヨーロッパの中心地です。\n自動車産業や製造業で知られ、効率的で質の高い生活を送ることができる国です。";
  
  const countryDescription = "技術・文化・歴史が融合するヨーロッパの中心地";
  
  const countryFeatures = [
    {
      title: "技術力",
      description: "世界最高峰の自動車産業と製造業",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "ドイツの技術力"
    },
    {
      title: "文化と芸術",
      description: "豊かな音楽文化と美術館",
      imageUrl: "https://images.unsplash.com/photo-1560929585-ba3c24ec6c44?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "ドイツの文化と芸術"
    },
    {
      title: "歴史的建造物",
      description: "中世の街並みと城",
      imageUrl: "https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdlcm1hbnl8ZW58MHx8MHx8fDA%3D",
      imageAlt: "歴史的建造物"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。地域によって気候が異なり、南部は比較的温暖です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。公共交通機関も発達しており、移動も便利です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ドイツ人は真面目で効率的、時間を大切にする人が多いです。最初は少し距離感がありますが、信頼関係を築くと親切です。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "ドイツ語の本場で学ぶ",
      description: "正統なドイツ語とビジネス文化を習得。ベルリンやミュンヘンの語学学校で、実用的なドイツ語を学びながら、ドイツのビジネス文化も体験できます。",
      icon: "🗣️"
    },
    {
      title: "高い技術力と製造業",
      description: "自動車産業など最先端技術に触れる機会。BMWやメルセデスの工場見学、テクノロジー企業でのインターンシップなどが可能です。",
      icon: "🚗"
    },
    {
      title: "豊かな音楽と芸術文化",
      description: "クラシック音楽の本場で文化体験。ベートーベンやバッハの故郷で、世界最高峰のオーケストラやオペラを楽しめます。",
      icon: "🎼"
    },
    {
      title: "ヨーロッパの中心地",
      description: "EU諸国への旅行やビジネス機会。高速鉄道ICEでフランスやオーストリアへ、飛行機でヨーロッパ各国へ簡単にアクセスできます。",
      icon: "🌍"
    }
  ];

  const jobInfo = {
    popularJobs: [
      "レストラン・カフェ（ウェイター、キッチン、バリスタ）",
      "ホテル・宿泊施設（フロント、ハウスキーピング）",
      "小売業（ショップスタッフ、レジ係、倉庫作業）",
      "オフィスワーク（データ入力、アシスタント）",
      "語学学校（英語教師、アシスタント）",
      "日本語教師（プライベートレッスン、語学スクール）",
      "清掃業（オフィス清掃、ハウスクリーニング）",
      "製造業（工場作業、品質管理）"
    ],
    jobSearchMethods: [
      "Indeed Germany（ドイツ最大級の求人サイト）",
      "StepStone（ドイツの主要求人サイト）",
      "直接レストラン・カフェ訪問",
      "ホテル・宿泊施設の直接訪問",
      "友人・知人からの紹介"
    ],
    averageWage: "平均時給は€10-15（約1,600-2,400円）。ミュンヘンやフランクフルトなどの都市部では時給が高く、€12-18程度。製造業や技術系の仕事ではさらに高時給が期待できます。",
    specialNotes: "ドイツ語ができると仕事の選択肢が大幅に広がります。ドイツ人は時間に厳格で、効率的な働き方を重視する文化があります。製造業での仕事は、ドイツの高い技術力に触れる良い機会です。"
  };

  // 体験談セクション（noteの記事へのリンク）
  const testimonials: Array<{
    title: string;
    url: string;
    description: string;
  }> = [
    {
      title: "ワーホリにおすすめの国はどこ？ドイツワーホリという新たな選択肢！",
      url: "https://note.com/kskngm39/n/n13b341a63992",
      description: "ばたごん夫婦さんがドイツワーホリを選んだ理由と体験談。オーストラリアやカナダとの比較、ドイツワーホリの魅力と課題について詳しく解説されています。検索数の少なさの理由や、ドイツでの生活のリアルな情報が満載です。"
    },
    {
      title: "なぜドイツでは家が見つからない？家探しが大変な理由",
      url: "https://note.com/kskngm39/n/n92b61886fb1f",
      description: "ドイツでの家探しの実情を詳しく解説。住宅不足の理由、競争の激しさ、必要な書類など、実際に家探しを経験したばたごん夫婦さんのリアルな体験談。Wunderflatsを使った家探しのコツや役立つサイトの紹介も含まれています。"
    },
    {
      title: "ドイツワーホリ2025年最新情報！リアルな生活情報！",
      url: "https://note.com/kskngm39/n/nff358dd2d62d",
      description: "2025年のドイツワーホリの最新情報をまとめた記事。ビザ情報、生活費・物価、仕事探しのトレンド、人気都市など、これから渡航を考えている人向けの実用的な情報が満載。ばたごん夫婦さんのリアルな体験談と最新のデータに基づいた情報です。"
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
      jobInfo={jobInfo}
      testimonials={testimonials}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
} 