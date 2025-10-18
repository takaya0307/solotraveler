"use client";

import React from "react";import CountryDetailLayout from "../../components/CountryDetailLayout";
import italyData from "../../../db.json";

export default function ItalyDetailPage() {
  const country = italyData.countries.find(c => c.id === "italy")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "イタリアは、世界最高峰の芸術、美食、歴史を持つ地中海の国です。\nローマ、フィレンツェ、ベネチアなど、歴史的な都市が数多くあり、豊かな文化を体験できます。";
  
  const countryDescription = "芸術・美食・歴史が薫る地中海の国";
  
  const countryFeatures = [
    {
      title: "芸術と文化",
      description: "ルネサンス芸術と世界遺産",
      imageUrl: "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "イタリアの芸術と文化"
    },
    {
      title: "美食の国",
      description: "世界最高峰のイタリア料理",
      imageUrl: "https://images.unsplash.com/photo-1447279506476-3faec8071eee?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "イタリアの美食"
    },
    {
      title: "歴史的建造物",
      description: "古代ローマ遺跡と中世の街並み",
      imageUrl: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?w=1920&auto=format&fit=crop&q=80",
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
      description: "イタリア人は情熱的でフレンドリー、家族を大切にする人が多いです。陽気で親しみやすい文化があります。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "イタリア語の本場で学ぶ",
      description: "美しいイタリア語と文化を同時に習得。フィレンツェやローマの語学学校で、音楽のように美しいイタリア語を学びながら、イタリア人の情熱的な文化も体験できます。",
      icon: "🗣️"
    },
    {
      title: "ルネサンス芸術の宝庫",
      description: "世界最高峰の芸術作品に触れる機会。ウフィツィ美術館でボッティチェッリの「春」を、システィーナ礼拝堂でミケランジェロの天井画を間近で鑑賞できます。",
      icon: "🎨"
    },
    {
      title: "美食とワイン文化",
      description: "本場のイタリア料理とワインを堪能。各地域の特産品を活かした料理、トスカーナのワイン、本場のパスタやピザを味わいながら、イタリアの食文化を深く学べます。",
      icon: "🍝"
    },
    {
      title: "地中海の温暖な気候",
      description: "一年を通じて過ごしやすい環境。春は花が咲き乱れ、夏はビーチで日光浴、秋は葡萄狩り、冬はスキーと、四季を通じて豊富なアクティビティが楽しめます。",
      icon: "☀️"
    }
  ];

  const specialNote = "イタリアのワーキングホリデー制度は、2022年に日本とイタリアの間で協定が署名されましたが、現時点（2025年10月）でまだ正式には開始されておらず、申請もできません。具体的な開始時期は未定で、発効に必要な法的な手続きがイタリア側で完了していないことが理由です。制度が開始された場合、18歳から30歳までの人が対象となり、入国から1年間の滞在と、その期間中に合計6か月未満の就労が認められる見込みです。";

  return (
    <CountryDetailLayout
      country={country}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      countryDescription={countryDescription}
      countryFeatures={countryFeatures}
      countryAtmosphere={countryAtmosphere}
      countryHighlights={countryHighlights}
      specialNote={specialNote}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
