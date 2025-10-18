
import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import irelandData from "../../../db.json";
export default function IrelandDetailPage() {
  const country = irelandData.countries.find(c => c.id === "ireland")!;

  const pageTitle = `${country.nameJa}ワーキングホリデー`;
  const pageDescription = "アイルランドは、美しい緑の風景、豊かな文化、そして深い歴史を持つ国です。\nダブリンをはじめとする美しい都市、そして美しい自然を満喫できます。";
  
  const countryDescription = "アイルランドワーホリの年齢制限・人気都市・おすすめポイントを徹底解説。緑豊かな自然と豊かな文化・歴史が魅力の国で、ダブリンを中心とした都市部での就労機会が豊富。英語学習に最適な環境で、フレンドリーな人々との交流を楽しめる。";
  
  const countryFeatures = [
    {
      title: "緑の国",
      description: "美しい緑の風景と自然",
      imageUrl: "https://images.unsplash.com/photo-1602354817989-b9664561ae84?w=1920&auto=format&fit=crop&q=95&crop=top",
      imageAlt: "アイルランドの緑"
    },
    {
      title: "豊かな文化",
      description: "伝統的なアイルランド文化",
      imageUrl: "https://images.unsplash.com/photo-1623430948701-b6653fd917f1?w=1920&auto=format&fit=crop&q=95&crop=top",
      imageAlt: "アイルランドの文化"
    },
    {
      title: "深い歴史",
      description: "ケルト文化と歴史的建造物",
      imageUrl: "https://images.unsplash.com/photo-1572998124463-e2dbc434797a?w=1920&auto=format&fit=crop&q=95&crop=top&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGlyZWxhbmR8ZW58MHx8MHx8fDA%3D",
      imageAlt: "アイルランドの歴史"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "海洋性気候で、夏は温暖、冬は比較的穏やかです。雨が多いですが、四季を通じて過ごしやすい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "比較的安全で、日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "アイルランド人は親切でフレンドリー、ユーモアのセンスがある人が多いです。",
      icon: "😊"
    }
  ];
  
  const workingHolidayReasons = [
    "英語を学べる環境が整っている",
    "比較的安全で生活しやすい",
    "豊かな文化と歴史を体験できる",
    "美しい自然と緑の風景を楽しめる"
  ];
  
  const englishLearningEnvironment = [
    "英語圏で本格的な英語学習が可能",
    "アイルランド英語の独特なアクセントを学べる",
    "語学学校が充実している",
    "現地の人との交流で実践的な英語力を身につけられる"
  ];
  
  const outdoorLifeDescription = "アイルランドは「緑の島」と呼ばれるほど美しい自然に恵まれています。海岸沿いのドライブ、ハイキング、ゴルフなど、豊かな自然を満喫できるアクティビティが充実しています。";
  
  const recommendedFor = [
    {
      title: "英語学習者",
      description: "本格的な英語学習をしたい方",
      color: "#3B82F6",
      borderColor: "#3B82F6",
      bgColor: "#EFF6FF",
      icon: "📚"
    },
    {
      title: "自然愛好家",
      description: "美しい自然を楽しみたい方",
      color: "#10B981",
      borderColor: "#10B981",
      bgColor: "#ECFDF5",
      icon: "🌿"
    },
    {
      title: "文化体験者",
      description: "豊かな文化と歴史を体験したい方",
      color: "#8B5CF6",
      borderColor: "#8B5CF6",
      bgColor: "#F3E8FF",
      icon: "🎭"
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
      title: "アイルランド英語を学ぶ",
      description: "独特のアクセントと表現を習得。ダブリンの語学学校で、アイルランド英語の特徴的な発音や表現を学びながら、アイルランド人のユーモアと文化も体験できます。",
      icon: "🗣️"
    },
    {
      title: "緑の島の自然体験",
      description: "美しい海岸線と田園風景を満喫。モハーの断崖やキルケニー城、エメラルドグリーンの草原でのドライブなど、アイルランドの美しい自然を心ゆくまで楽しめます。",
      icon: "🌿"
    },
    {
      title: "ケルト文化と歴史",
      description: "豊かな伝統文化と歴史的建造物。ケルト十字架や古代遺跡、伝統音楽のセッション、アイリッシュパブでの文化交流など、深い歴史と文化に触れることができます。",
      icon: "🏰"
    },
    {
      title: "EU諸国へのアクセス",
      description: "ヨーロッパ旅行の拠点として便利。格安航空会社を利用してイギリス、フランス、イタリアなどヨーロッパ各国へ簡単に旅行でき、EU内の移動も自由です。",
      icon: "✈️"
    }
  ];

  const jobInfo = {
    popularJobs: [
      "パブ（バーテンダー、ウェイター、キッチン）",
      "レストラン・カフェ（ウェイター、キッチン、バリスタ）",
      "ホテル・宿泊施設（フロント、ハウスキーピング）",
      "小売業（ショップスタッフ、レジ係）",
      "観光業（ツアーガイド、博物館スタッフ）",
      "日本語教師（プライベートレッスン、語学スクール）",
      "清掃業（オフィス清掃、ハウスクリーニング）",
      "農業・畜産業（季節労働）"
    ],
    jobSearchMethods: [
      "Indeed Ireland（アイルランド最大級の求人サイト）",
      "IrishJobs.ie（アイルランドの主要求人サイト）",
      "直接パブ・レストラン訪問",
      "ホテル・宿泊施設の直接訪問",
      "友人・知人からの紹介"
    ],
    averageWage: "平均時給は€10-15（約1,600-2,400円）。ダブリンなどの都市部では時給が高く、€12-18程度。パブやレストランではチップも期待でき、実質的な収入がさらに高くなります。",
    specialNotes: "パブでの仕事はアイルランド特有の文化体験ができる人気の職種です。特にアイリッシュパブでの仕事は、現地の音楽や文化に触れる良い機会です。ダブリンなどの都市部では競争が激しいため、地方都市も検討すると良いでしょう。"
  };

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
      workingHolidayReasons={workingHolidayReasons}
      englishLearningEnvironment={englishLearningEnvironment}
      outdoorLifeDescription={outdoorLifeDescription}
      recommendedFor={recommendedFor}
      jobInfo={jobInfo}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}
