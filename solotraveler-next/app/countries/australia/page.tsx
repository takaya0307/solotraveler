import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import australiaData from "../../../db.json";

export default function AustraliaDetailPage() {
  const country = australiaData.countries.find(c => c.id === "australia")!;

  const pageTitle = `オーストラリア ワーホリ`;
  const pageDescription = "オーストラリアワーホリは、南半球に位置する広大な大陸国家での素晴らしい体験を提供します。\n一年中温暖な気候で、美しいビーチや壮大な自然が魅力の国です。シドニー・ハーバーブリッジやオペラハウスなど、世界的に有名な観光スポットも多数あり、オーストラリア ワーホリでしか味わえない特別な体験が待っています。";
  
  const countryDescription = "オーストラリアワーホリの体験談・年齢制限・人気都市・おすすめポイントを見やすくまとめています。温暖な気候、美しいビーチ、フレンドリーな人々が魅力の南半球の国で、仕事をしながら英語を勉強しませんか？";
  
  const countryFeatures = [
    {
      title: "ビーチライフ",
      description: "美しいビーチでサーフィンや日光浴",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "オーストラリアのビーチ"
    },
    {
      title: "カフェ文化",
      description: "メルボルンのカフェでコーヒーを楽しむ",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "オーストラリアのカフェ"
    },
    {
      title: "アウトドア",
      description: "自然の中でハイキングやキャンプ",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "オーストラリアのアウトドア"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "一年中温暖で過ごしやすい気候。シドニーやメルボルンは四季があり、ケアンズは熱帯気候で常夏です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。ただし、都市部では一般的な防犯意識は必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "オーストラリア人はフレンドリーで親しみやすい性格の人が多いです。カジュアルな文化で、すぐに友達を作りやすい環境です。",
      icon: "😊"
    }
  ];

  const ageRequirements = [
    {
      title: "年齢制限",
      description: "18歳から30歳までが対象。申請時点で30歳を超えていないことが条件です。",
      icon: "🎂"
    },
    {
      title: "年齢上限ギリギリの注意点",
      description: "30歳のうちにビザを取得すれば、31歳になってからの入国も可能です。29歳で申請する場合は、ビザ発行までに30歳を超えないよう注意が必要です。",
      icon: "⚠️"
    },
    {
      title: "年齢制限を超えた場合",
      description: "30歳を超えた場合は、学生ビザや就労ビザなど他のビザを検討しましょう。",
      icon: "🔄"
    }
  ];

  const countryHighlights = [
    {
      title: "3年間の長期滞在が可能",
      description: "2年目以降は条件付きで延長可能な制度。農業や地方での就労により、最長3年間の滞在が可能で、より深い経験ができます。",
      icon: "⏰"
    },
    {
      title: "豊富な仕事の機会",
      description: "農業、観光、ホスピタリティ業界で多くの求人。特にファームジョブは延長の条件にもなり、収入も得られます。",
      icon: "💼"
    },
    {
      title: "温暖な気候で一年中アクティブ",
      description: "ビーチライフやアウトドア活動を楽しめる。サーフィン、ハイキング、キャンプなど、豊富なアクティビティが一年中楽しめます。",
      icon: "🏖️"
    },
    {
      title: "英語学習に最適な環境",
      description: "多様なアクセントで実践的な英語力向上。オーストラリア英語の独特な表現やスラングも学べる環境です。",
      icon: "🗣️"
    }
  ];

  const jobInfo = {
    popularJobs: [
      "カフェ・レストラン（ウェイター、キッチン、バリスタ）",
      "ファームジョブ（果物摘み、野菜収穫、畜産）",
      "ホテル・宿泊施設（フロント、ハウスキーピング、ベルボーイ）",
      "小売業（ショップスタッフ、レジ係、倉庫作業）",
      "清掃業（オフィス清掃、ハウスクリーニング）",
      "日本語教師（プライベートレッスン、語学スクール）",
      "サーフショップ（レンタル、販売スタッフ）"
    ],
    jobSearchMethods: [
      "Indeed（オーストラリア最大級の求人サイト）",
      "Gumtree（現地最大級の求人サイト）",
      "Seek（オーストラリアの主要求人サイト）",
      "直接店舗訪問（レストラン、カフェ、ショップ）",
      "友人・知人からの紹介"
    ],
    averageWage: "平均時給はA$25-30（約2,400-2,850円）。ファームジョブは時給が高い場合も多く、A$30-35程度。カフェやレストランでは最低賃金で安定した収入が期待できます。",
    specialNotes: "ファームジョブは2年目以降のビザ延長条件にもなるため人気です。季節によって仕事内容が変わるので、事前にリサーチすることが重要。都市部では競争が激しいため、地方での仕事も検討すると良いでしょう。"
  };

  // 体験談セクション（noteの記事へのリンク）
  const testimonials: Array<{
    title: string;
    url: string;
    description: string;
  }> = [
    {
      title: "【オーストラリアワーホリ】初めてのシェアハウス探し",
      url: "https://note.com/sannie_abroad/n/n3d41bea49950",
      description: "Sannieさんのオーストラリアワーホリ体験談。2年間で7回の引っ越しを経験した著者が、初めてのシェアハウス探しについて詳しく解説。flatmateサイトの使い方、内覧の現実、詐欺への注意点、条件の決め方など、実際の家探しで役立つ実用的な情報が満載です。"
    },
    {
      title: "【ワーホリ語学学校】4ヶ月もいらなかった。やめた理由と本当に必要な人の特徴",
      url: "https://note.com/sannie_abroad/n/ne2b6f07f72d4",
      description: "Sannieさんの語学学校体験談。4ヶ月契約したが2ヶ月でフェードアウトした理由とは。授業スタイルの違い、クラスの雰囲気、コース変更の体験、オンライン英会話との比較など、語学学校に通うべきかどうかの判断に役立つ実体験が満載です。"
    },
    {
      title: "【ワーホリ仕事探し】3ヶ月かかってやっと採用！カフェの夢は断念…？",
      url: "https://note.com/sannie_abroad/n/n33a4b80e3b1b",
      description: "Sannieさんのオーストラリアワーホリでの仕事探し体験談。メルボルンでバリスタを目指したが3ヶ月かかってやっと採用された経緯とは。カフェでの面接の現実、ラテアートの重要性、仕事探しのコツなど、実際の就職活動で役立つ情報が満載です。"
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
      ageRequirements={ageRequirements}
      countryHighlights={countryHighlights}
      jobInfo={jobInfo}
      testimonials={testimonials}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
} 