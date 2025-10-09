"use client";
import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import southkoreaData from "../../../db.json";

export default function SouthKoreaDetailPage() {
  const country = southkoreaData.countries.find(c => c.id === "southkorea")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "韓国は、K-POPやK-ドラマで世界的に注目されている国です。\n伝統文化と現代文化が融合し、美食も豊富で、アジアの中でも特に人気の高い国です。";
  
  const countryDescription = "K-POP・K-ドラマ・美食の国";
  
  const countryFeatures = [
    {
      title: "K-POP文化",
      description: "世界を席巻するK-POPの本場",
      imageUrl: "https://images.unsplash.com/photo-1577991712260-4ee45603dab8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a29yZWElMjBrcG9wfGVufDB8fDB8fHww",
      imageAlt: "韓国のK-POP文化"
    },
    {
      title: "美食の国",
      description: "キムチ、ビビンバ、韓国料理",
      imageUrl: "https://images.unsplash.com/photo-1583266999030-aabe53af1a46?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGtvcmVhJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "韓国の美食"
    },
    {
      title: "伝統文化",
      description: "韓服、韓屋、伝統工芸",
      imageUrl: "https://images.unsplash.com/photo-1602479185195-32f5cd203559?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtvcmVhfGVufDB8fDB8fHww",
      imageAlt: "韓国の伝統文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、春と秋が過ごしやすいです。夏は暑く、冬は寒いですが、暖房設備が整っています。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。公共交通機関も発達しています。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "韓国人は親切で礼儀正しい人が多く、外国人にも親切です。年齢や上下関係を重視する文化があります。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "韓国語の本場で学ぶ",
      description: "K-POPやK-ドラマで親しんだ言語を実際に習得。ソウルの語学学校で、ハングルを正しく学びながら、韓国の文化も深く理解できます。",
      icon: "🗣️"
    },
    {
      title: "K-POP・K-ドラマ文化",
      description: "世界的ブームの韓流文化を本場で体験。BTSやBLACKPINKのライブ、韓国ドラマの撮影地巡りなど、韓流文化を満喫できます。",
      icon: "🎵"
    },
    {
      title: "豊富な韓国料理",
      description: "キムチ、ビビンバなど本場の韓国料理を堪能。本場の韓国料理店で、日本では味わえない本格的な味と、多様な韓国料理を楽しめます。",
      icon: "🍜"
    },
    {
      title: "アジアの玄関口",
      description: "日本から近く、アジア各国への旅行も便利。中国、台湾、東南アジア各国へのアクセスが良く、アジア旅行の拠点として最適です。",
      icon: "✈️"
    }
  ];

  const jobInfo = {
    popularJobs: [
      "韓国料理店・カフェ（ウェイター、キッチン、バリスタ）",
      "ホテル・宿泊施設（フロント、ハウスキーピング）",
      "小売業（ショップスタッフ、レジ係）",
      "語学学校（日本語教師、アシスタント）",
      "コールセンター（日本語対応）",
      "観光業（ツアーガイド、観光案内）",
      "清掃業（オフィス清掃、ハウスクリーニング）",
      "美容・エステ業（受付、アシスタント）"
    ],
    jobSearchMethods: [
      "Indeed Korea（韓国最大級の求人サイト）",
      "JobKorea（韓国の主要求人サイト）",
      "直接韓国料理店・カフェ訪問",
      "ホテル・宿泊施設の直接訪問",
      "友人・知人からの紹介"
    ],
    averageWage: "平均時給は₩8,000-12,000（約900-1,350円）。ソウルなどの都市部では時給が高く、₩10,000-15,000程度。語学学校での日本語教師は時給が高い場合もあります。",
    specialNotes: "韓国語ができると仕事の選択肢が大幅に広がります。日本語ができるとコールセンターや語学学校での仕事が有利です。韓国は年齢や上下関係を重視する文化があるため、職場での礼儀に注意が必要です。"
  };

  // 体験談セクション（noteの記事へのリンク）
  const testimonials: Array<{
    title: string;
    url: string;
    description: string;
  }> = [
    {
      title: "【 韓国ワーホリ 】 大手美容クリニックを辞めて、28歳で決断したきっかけと理由",
      url: "https://note.com/sevenwld/n/n7e1e9dca9f38",
      description: "ななぴさんが28歳で大手美容クリニックを退職し、韓国ワーキングホリデーを決意した経緯を綴った体験談。BTSとの出会いをきっかけに韓国語の勉強を始め、留学経験もTOPIK資格もない状態から、「今行かなきゃ絶対に後悔する」と決断したリアルな想いが詰まっています。海外生活への憧れ、語学への情熱、そして人生を変える大きな決断に至るまでのストーリーです。"
    },
    {
      title: "【 韓国ワーホリ 】 ビザ申請完全ガイド｜28歳でも通った理由書・活動計画書・申請書の実例と書き方",
      url: "https://note.com/sevenwld/n/n3f1c3253474f",
      description: "ななぴさんが28歳・留学経験なし・TOPIK未取得という状況から韓国ワーホリビザを取得した実体験に基づく完全ガイド。26歳以上の申請に必須となる理由書、そして査証発給申請書・活動計画書の実例と具体的な書き方を詳細に解説。「26歳を超えて申請する時のコツ」「文化体験・観光メインで書く鉄則」など、実践的なアドバイスが満載で、これから申請する方にとって非常に参考になる内容です。"
    },
    {
      title: "【 韓国ワーホリ 】リアルなお金事情｜かかった費用・銀行開設・海外送金まとめ",
      url: "https://note.com/sevenwld/n/n07f8f2ee2958",
      description: "ななぴさんが韓国ワーホリで実際にかかった費用を公開した体験談。渡航前の準備費用から到着後の初期費用（保証金・家賃・家具家電購入など）まで、リアルな金額を詳細に紹介。さらに韓国での銀行口座開設の流れ、Wiseを使った海外送金の方法、必要な貯金額の目安（100〜150万円）など、ワーホリ準備に欠かせないお金の情報が満載の実用的なガイドです。"
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
