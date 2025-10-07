import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import franceData from "../../../db.json";

export default function FranceDetailPage() {
  const country = franceData.countries.find(c => c.id === "france")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "フランスは、芸術、ファッション、美食の本場として知られるヨーロッパの中心地です。\nパリをはじめとする美しい都市、豊かな文化、そして世界最高峰の料理を楽しむことができます。";
  
  const countryDescription = "芸術・ファッション・美食の本場、ヨーロッパの中心地";
  
  const countryFeatures = [
    {
      title: "芸術と文化",
      description: "ルーブル美術館やオルセー美術館など世界最高峰の美術館",
      imageUrl: "https://images.unsplash.com/photo-1752461046051-3b6c1d95d61c?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "フランスの芸術と文化"
    },
    {
      title: "美食の国",
      description: "世界最高峰のレストランとワイン文化",
      imageUrl: "https://images.unsplash.com/photo-1724015736616-60f63aaf72b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEZyYW5jZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      imageAlt: "フランスの美食"
    },
    {
      title: "ファッション",
      description: "パリコレクションと世界のファッションの中心",
      imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "フランスのファッション"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、春と秋が過ごしやすいです。夏は温暖、冬は比較的寒い地域が多いです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "観光地は比較的安全ですが、都市部では注意が必要です。基本的な防犯意識を持つことが大切です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "フランス人は芸術や文化を大切にし、美食を愛する人が多いです。最初は少し距離感がありますが、親しくなると親切です。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "フランス語の本場で学ぶ",
      description: "正統なフランス語と文化を同時に習得。パリの語学学校で、正しい発音と表現を学びながら、フランスの生活文化も体験できます。",
      icon: "🗣️"
    },
    {
      title: "芸術と文化の宝庫",
      description: "ルーブル美術館など世界最高峰の美術館。モナリザやミロのヴィーナスなど、世界の名作を間近で鑑賞できます。",
      icon: "🎨"
    },
    {
      title: "美食とワイン文化",
      description: "世界最高峰の料理とワインを堪能。ミシュラン星付きレストランで本場のフランス料理を味わい、ブルゴーニュやボルドーのワインを楽しめます。",
      icon: "🍷"
    },
    {
      title: "ヨーロッパ旅行の拠点",
      description: "EU諸国へのアクセスが便利。TGVでベルギーやスイスへ、飛行機でヨーロッパ各国へ簡単に旅行できます。",
      icon: "✈️"
    }
  ];

  const jobInfo = {
    popularJobs: [
      "レストラン・カフェ（ウェイター、キッチン、バリスタ）",
      "ホテル・宿泊施設（フロント、ハウスキーピング、ベルボーイ）",
      "ワイナリー（収穫、醸造、テイスティングルーム）",
      "観光業（ツアーガイド、博物館スタッフ）",
      "小売業（ショップスタッフ、レジ係）",
      "語学学校（英語教師、アシスタント）",
      "日本語教師（プライベートレッスン、語学スクール）",
      "清掃業（オフィス清掃、ハウスクリーニング）"
    ],
    jobSearchMethods: [
      "Indeed France（フランス最大級の求人サイト）",
      "Pôle emploi（フランスの主要求人サイト）",
      "直接レストラン・カフェ訪問",
      "ホテル・宿泊施設の直接訪問",
      "友人・知人からの紹介"
    ],
    averageWage: "平均時給は€10-15（約1,600-2,400円）。パリなどの都市部では時給が高く、€12-18程度。レストランやホテルではチップも期待でき、実質的な収入がさらに高くなります。",
    specialNotes: "フランス語ができると仕事の選択肢が大幅に広がります。ワイナリーでの仕事はフランス特有の文化体験ができる人気の職種です。フランス人は仕事とプライベートのバランスを重視する文化があります。"
  };

  // 体験談セクション（noteの記事へのリンク）
  const testimonials: Array<{
    title: string;
    url: string;
    description: string;
  }> = [
    {
      title: "【フランスワーホリ #6】パリでのお仕事/シェアハウスにお引越し",
      url: "https://note.com/yukiaoshima/n/n18c0c16d05c2",
      description: "yukiさんのフランスワーホリ体験談。パリの日本食レストランでのお仕事の感想、シェアハウスへの引っ越し、フランスでの生活のリアルな情報が満載。フランス語の上達や同僚との関係、生活用品の調達など、実際の生活の様子が詳しく紹介されています。"
    },
    {
      title: "【フランスワーホリ #3】引っ越し準備&諸々の手続き",
      url: "https://note.com/yukiaoshima/n/n678937b0b753",
      description: "yukiさんのフランスワーホリ出発前の準備記録。仮住まいの選び方、荷物の準備、海外転居届などの手続きについて詳しく解説。Airbnbやホステルの選び方、スーツケースとバックパックの準備、日本の手続き（海外転居届、確定申告、銀行口座など）の実用的な情報が満載です。"
    },
    {
      title: "【フランスワーホリ #7】1ヶ月目の振り返り",
      url: "https://note.com/yukiaoshima/n/n7caf5e9159f4",
      description: "yukiさんのフランスワーホリ1ヶ月目の振り返り記録。ホテル生活からシェアハウス生活への移行、仕事のスタート、ランスでのサッカー観戦、クリスマスマーケット体験など、フランスでの生活の充実ぶりが詳しく紹介されています。住まい探しや仕事探しのコツ、現地での生活リズムの作り方なども参考になります。"
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