"use client";

import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import swedenData from "../../../db.json";

export default function SwedenDetailPage() {
  const country = swedenData.countries.find(c => c.id === "sweden")!;

  const pageTitle = `${country.nameJa}ワーキングホリデー`;
  const pageDescription = "スウェーデンは、高福祉国家として知られ、美しい自然と優れたデザイン文化を持つ国です。\nストックホルムをはじめとする美しい都市、広大な森や湖など、北欧の魅力を満喫できます。";
  
  const countryDescription = "福祉・自然・デザインの国";
  
  const countryFeatures = [
    {
      title: "高福祉社会",
      description: "充実した社会保障制度",
      imageUrl: "https://images.unsplash.com/photo-1600290601473-3b73e4c531c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHN3ZWRlbnxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "スウェーデンの高福祉社会"
    },
    {
      title: "美しい自然",
      description: "広大な森と美しい湖",
      imageUrl: "https://images.unsplash.com/photo-1633430300352-bcb3420c0ed5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWRlbnxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "スウェーデンの自然"
    },
    {
      title: "デザイン文化",
      description: "北欧デザインの本場",
      imageUrl: "https://images.unsplash.com/photo-1585066437551-230239e3131e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZGVuJUUzJTgwJTgwZnVuaXR1cmV8ZW58MHx8MHx8fDA%3D",
      imageAlt: "スウェーデンのデザイン文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は寒いです。北部は極夜や白夜の現象があります。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "非常に安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "スウェーデン人は控えめで礼儀正しく、平等を重視する人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "スウェーデン語と英語",
      description: "北欧の言語と国際的な英語環境。ストックホルムの語学学校で、スウェーデン語を学びながら、高い英語力を持つスウェーデン人との交流で実用的な英語も身につけられます。",
      icon: "🗣️"
    },
    {
      title: "北欧デザイン文化",
      description: "ミニマルで機能的なデザインを体験。IKEAやH&Mの発祥地で、北欧デザインの本質を学び、機能性と美しさを兼ね備えた生活スタイルを体験できます。",
      icon: "🎨"
    },
    {
      title: "高福祉社会",
      description: "充実した社会保障制度を体験。無料の医療制度、充実した教育制度、働き方改革など、世界最高レベルの福祉制度を体験し、ワークライフバランスの重要性を学べます。",
      icon: "🏥"
    },
    {
      title: "自然とアウトドア",
      description: "森と湖でのリラックスした生活。夏は白夜でのハイキング、冬はオーロラ観測、四季を通じてスキーやアイスホッケーなど、豊かな自然環境でのアウトドアライフを満喫できます。",
      icon: "🌲"
    }
  ];

  // 体験談セクション（noteの記事へのリンク）
  const testimonials: Array<{
    title: string;
    url: string;
    description: string;
  }> = [
    {
      title: "スウェーデンワーホリビザ申請②【2024現在】ーオンライン申請",
      url: "https://note.com/moet9628/n/n5c0cae195752",
      description: "Moetさんのスウェーデンワーホリビザ申請体験談。2024年10月に実際に申請した経験を元に、オンライン申請の詳細な手順を解説。ショートエッセイの準備方法、アカウント登録、SMS認証、申請書の作成、デジタルパスポート確認など、実際の申請プロセスを丁寧に説明。申請から許可が下りるまでの期間や、注意すべきポイントも詳しく紹介されています。骨折により一度キャンセルし再申請した経験も含め、リアルな体験談として参考になる貴重な記事です。"
    },
    {
      title: "職なしスキルなし30歳！それでもスウェーデンワーホリに挑むのは？",
      url: "https://note.com/moet9628/n/n58c367e7a7b8",
      description: "Moetさんが30歳でスウェーデンワーホリに挑戦することになった背景と経緯を綴った体験談。大学院卒業後、研究職を志望していたが品質管理の部署に配属され、やりがいを感じられずにいた日々。20歳の時に訪れたスウェーデンの写真をきっかけに留学を決意し、コロナ禍での独学、アイルランド留学、骨折などの紆余曲折を経験。結婚と留学の間で迷いながらも、「挑戦した人生」を選択し、最終的にワーキングホリデーという形でスウェーデンへ渡航するまでの心の葛藤と決意が描かれています。"
    },
    {
      title: "スウェーデンについたらすぐにやろう！ー居住許可カードの申請方法【2025年4月最新版】",
      url: "https://note.com/moet9628/n/n35430c47cbc2",
      description: "Moetさんのスウェーデン到着後の居住許可カード申請体験談。2025年4月に実際に申請した経験を元に、最新の申請方法を詳しく解説。移民局（Migrationsverket）の訪問予約システムが2025年4月頃から変更され、公式サイトのマイページから予約する方法に。必要書類、予約の取り方、ストックホルムのSundbyberg移民局での申請の流れ、滞在先住所の準備など、実際の手続きを写真付きで丁寧に説明。カード到着までの期間も記載されており、これからスウェーデンに渡航する方必見の実用的な情報です。"
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
