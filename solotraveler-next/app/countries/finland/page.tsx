import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import finlandData from "../../../db.json";

export default function FinlandDetailPage() {
  const country = finlandData.countries.find(c => c.id === "finland")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "フィンランドは、サンタクロースの故郷として知られ、美しい森とオーロラ、そして優れた教育制度を持つ国です。\n自然と調和した生活を送ることができる環境です。";
  
  const countryDescription = "サンタ・オーロラ・森の国";
  
  const countryFeatures = [
    {
      title: "オーロラ",
      description: "美しい北極光の観測",
      imageUrl: "https://images.unsplash.com/photo-1505136026201-bbc1bc0949fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZpbmxhbmR8ZW58MHx8MHx8fDA%3D",
      imageAlt: "フィンランドのオーロラ"
    },
    {
      title: "森の国",
      description: "広大な森と美しい湖",
      imageUrl: "https://images.unsplash.com/photo-1564857170582-80855988d55e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZpbmxhbmR8ZW58MHx8MHx8fDA%3D",
      imageAlt: "フィンランドの森"
    },
    {
      title: "サンタクロース",
      description: "サンタクロースの故郷",
      imageUrl: "https://images.unsplash.com/photo-1719247552553-0a93b8bc9fe5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlubGFuZCVFMyU4MCU4MHNhbnRhfGVufDB8fDB8fHww",
      imageAlt: "サンタクロースの故郷"
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
      description: "フィンランド人は控えめで誠実、自然を愛する人が多いです。",
      icon: "😊"
    }
  ];

  const englishProficiency = {
    level: "中程度",
    score: 70,
    description: "若い世代や都市部では英語を話せる人が多く、生活でも困ることはほとんどありません。\n\nただし、地方や年配の人との会話ではフィンランド語が必要になる場面もあります。"
  };

  const countryHighlights = [
    {
      title: "フィンランド語と英語",
      description: "北欧の言語と国際的な英語環境。ヘルシンキの語学学校で、フィンランド語を学びながら、高い英語力を持つフィンランド人との交流で実用的な英語も身につけられます。",
      icon: "🗣️"
    },
    {
      title: "オーロラと白夜",
      description: "美しい北極光と白夜を体験。ラップランドでのオーロラ観測、夏の白夜でのハイキングなど、フィンランドならではの自然現象を心ゆくまで楽しめます。",
      icon: "🌌"
    },
    {
      title: "サンタクロースの故郷",
      description: "サンタクロースの故郷ロヴァニエミで、サンタクロース村を訪れ、クリスマスの魔法を体験。一年中クリスマスの雰囲気を楽しめます。",
      icon: "🎅"
    },
    {
      title: "森と湖の自然",
      description: "広大な森と美しい湖でのアウトドア。サウナ文化、ベリー摘み、フィッシング、ハイキングなど、豊かな自然環境でのリラックスした生活を満喫できます。",
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
      title: "「30歳 営業 男性 ワーホリ フィンランド 行く理由」",
      url: "https://note.com/na5na5na5n/n/n60104f55b7dd",
      description: "na5na5na5さんが北海道から2025年4月に半年間フィンランドへワーホリに行くことを決めた理由を綴った体験談。30歳既婚の営業マンで、住宅・建築業界で働く中で北欧に興味を持ち、昨年の一人旅で確信を得ました。「一次情報を蓄積する」ことを目的に、北欧デザイン、フィンランドサウナ、福祉国家の取り組みなどに関心を持ち、気候環境が似ている北海道との共通点や相違点を探りながら、暮らしの質を高めるための体験を求めています。「迷ったらおもろい方へ」のマインドで渡航を決意した過程が詳しく綴られています。"
    },
    {
      title: "フィンランドでのワーホリ生活で特に意識した3つのポイント",
      url: "https://note.com/na5na5na5n/n/ne7faaf510248",
      description: "na5na5na5さんがフィンランドでの約5ヶ月の滞在を通して意識していた3つのポイントを振り返った体験談。会社を辞めずに給与をいただきながら、現地で新たな仕事を生み出すことに成功した経験から、①多方面にアンテナを張ること（自分だけのフィンランドの感じ方を言語化）、②人との接触を大切にすること（日本人コミュニティとの繋がりと信頼の循環）、③「今しかできない経験」を最優先にすること（迷ったらオモロい方へ）という3つの重要なポイントを解説。フィンランドでの充実した生活を送るための実践的なアドバイスが詰まった記事です。"
    },
    {
      title: "フィンランドで暮らした1ヶ月。ワーキングホリデーの生活費とその内訳",
      url: "https://note.com/na5na5na5n/n/n62ca500c90f7",
      description: "na5na5na5さんがヘルシンキでワーホリ生活1ヶ月間の生活費を詳細に記録した実践的な体験談。30歳男性一人暮らし（ワンルーム）で、基本自炊、1日10ユーロを目標に行動した結果、月約2,065ユーロ（家賃688ユーロ含む）で生活できました。固定費（家賃・保険・SIM）、食料品、外食、交通費、旅行、娯楽、ショッピングなど各項目の詳細な内訳と節約のコツを解説。Wiseカードの活用方法、DNAのプリペイドSIM、HSLとVoiの交通手段、Museum cardなど、実際に役立つ情報が満載です。"
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
