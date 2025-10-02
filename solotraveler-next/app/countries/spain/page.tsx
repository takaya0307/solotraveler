import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import spainData from "../../../db.json";

export default function SpainDetailPage() {
  const country = spainData.countries.find(c => c.id === "spain")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "スペインは、情熱的な文化、豊かな美食、深い歴史を持つ国です。\nフラメンコ、闘牛、タパス文化など、独特の文化を体験でき、地中海の温暖な気候で過ごしやすい環境です。";
  
  const countryDescription = "情熱的な文化と美食、歴史が薫る国";
  
  const countryFeatures = [
    {
      title: "情熱的な文化",
      description: "フラメンコと闘牛文化",
      imageUrl: "https://images.unsplash.com/photo-1634156589964-c6da0fba0a05?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "スペインの情熱的な文化"
    },
    {
      title: "美食の国",
      description: "タパスと地中海料理",
      imageUrl: "https://images.unsplash.com/photo-1621841957884-1210fe19d66d?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "スペインの美食"
    },
    {
      title: "歴史的建造物",
      description: "アルハンブラ宮殿とサグラダ・ファミリア",
      imageUrl: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "歴史的建造物"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "地中海性気候で、夏は温暖、冬は比較的穏やかです。南部は特に温暖で過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "観光地は比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "スペイン人は情熱的でフレンドリー、家族を大切にする人が多いです。陽気で親しみやすい文化があります。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "スペイン語の本場で学ぶ",
      description: "世界で2番目に話者数の多い言語を習得。マドリードやバルセロナの語学学校で、実用的なスペイン語を学びながら、ラテンアメリカ諸国でも通用する国際的な言語を身につけられます。",
      icon: "🗣️"
    },
    {
      title: "情熱的なフラメンコ文化",
      description: "本場のフラメンコと闘牛文化を体験。セビリアのフラメンコショーで情熱的なダンスを鑑賞し、スペインの深い文化と歴史を肌で感じることができます。",
      icon: "💃"
    },
    {
      title: "タパスと地中海料理",
      description: "豊かな食文化とワインを楽しむ。バルでタパスを食べながら地元の人と交流し、リオハのワインやパエリア、ガスパチョなど本場の料理を堪能できます。",
      icon: "🍷"
    },
    {
      title: "温暖な地中海気候",
      description: "一年を通じて過ごしやすい環境。コスタ・デル・ソルでのビーチライフ、シエラ・ネバダでのスキー、春のセマナ・サンタ祭りなど、四季を通じて多彩な体験ができます。",
      icon: "☀️"
    }
  ];

  const jobInfo = {
    popularJobs: [
      "バル・レストラン（ウェイター、キッチン、バーテンダー）",
      "ホテル・宿泊施設（フロント、ハウスキーピング、ベルボーイ）",
      "観光業（ツアーガイド、博物館スタッフ）",
      "小売業（ショップスタッフ、レジ係）",
      "語学学校（英語教師、アシスタント）",
      "日本語教師（プライベートレッスン、語学スクール）",
      "清掃業（オフィス清掃、ハウスクリーニング）",
      "農業・畜産業（季節労働）"
    ],
    jobSearchMethods: [
      "Indeed Spain（スペイン最大級の求人サイト）",
      "InfoJobs（スペインの主要求人サイト）",
      "直接バル・レストラン訪問",
      "ホテル・宿泊施設の直接訪問",
      "友人・知人からの紹介"
    ],
    averageWage: "平均時給は€8-12（約1,280-1,920円）。マドリードやバルセロナなどの都市部では時給が高く、€10-15程度。観光シーズンには観光業での求人が多くなります。",
    specialNotes: "スペイン語ができると仕事の選択肢が大幅に広がります。バルでの仕事はスペイン特有の文化体験ができる人気の職種です。シエスタ（昼休み）の文化があるため、勤務時間の調整が必要な場合があります。"
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