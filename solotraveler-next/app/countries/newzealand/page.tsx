import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import newzealandData from "../../../db.json";

export default function NewZealandDetailPage() {
  const country = newzealandData.countries.find(c => c.id === "newzealand")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "ニュージーランドワーホリは南太平洋に浮かぶ美しい島国での素晴らしい体験を提供します。\n世界で最も安全な国の一つで、キウイフルーツ農場やワイナリーでの就労機会が豊富。雄大な自然とフレンドリーな人々が魅力で、のんびりとした雰囲気が特徴です。フィヨルドや山々、美しい湖など、大自然を満喫できる環境が整っています";
  
  const countryDescription = "ニュージーランドワーホリの年齢制限・人気都市・おすすめポイントを見やすくまとめています。大自然とフレンドリーな人々が魅力の南太平洋の国で、安全でリラックスした環境でのワーホリ体験ができます。";
  
  const countryFeatures = [
    {
      title: "大自然",
      description: "フィヨルドや山々でのアウトドア",
      imageUrl: "https://images.unsplash.com/photo-1595125990323-885cec5217ff?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "ニュージーランドの大自然"
    },
    {
      title: "アドベンチャー",
      description: "バンジージャンプやスカイダイビング",
      imageUrl: "https://images.unsplash.com/photo-1515253648320-6d70d901f0ac?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "アドベンチャースポーツ"
    },
    {
      title: "温泉文化",
      description: "地熱地帯での温泉体験",
      imageUrl: "https://images.unsplash.com/photo-1680180730599-61216c165c96?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "温泉文化"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "四季がはっきりしており、夏は温暖、冬は比較的穏やか。地域によって気候が異なり、北島は温暖、南島は涼しい気候です。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "世界でも最も安全な国の一つとして知られています。日本人にとって安心して生活できる環境で、人々も親切です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "ニュージーランド人は親切でフレンドリーな性格の人が多いです。のんびりとした雰囲気で、自然を愛する人が多いです。",
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
      description: "30歳の誕生日を迎える前にビザ申請を完了する必要があります。ビザ取得後、31歳になってからの渡航も可能です。",
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
      title: "世界最安全な国の一つ",
      description: "治安が良く、日本人にとって安心して生活できる環境。犯罪率が低く、夜間の外出も比較的安全です。",
      icon: "🛡️"
    },
    {
      title: "壮大な自然とアドベンチャー",
      description: "フィヨルド、山々、湖でのアウトドア体験。ミルフォード・サウンドやクック山など、世界有数の自然美を満喫できます。",
      icon: "⛰️"
    },
    {
      title: "農業とホスピタリティの仕事",
      description: "キウイフルーツ農場や観光業での就労機会。特にワイナリーやファームでの仕事は、自然と触れ合いながら収入を得られます。",
      icon: "🚜"
    },
    {
      title: "のんびりとした生活スタイル",
      description: "ストレスフリーでワークライフバランス重視。自然を愛する文化で、リラックスした生活を送ることができます。",
      icon: "😌"
    }
  ];

  const jobInfo = {
    popularJobs: [
      "キウイフルーツ農場（収穫、パッキング、加工）",
      "ワイナリー（収穫、醸造、テイスティングルーム）",
      "カフェ・レストラン（ウェイター、キッチン、バリスタ）",
      "ホテル・宿泊施設（フロント、ハウスキーピング）",
      "観光業（ツアーガイド、アクティビティスタッフ）",
      "小売業（ショップスタッフ、レジ係）",
      "日本語教師（プライベートレッスン、語学スクール）",
      "清掃業（オフィス清掃、ハウスクリーニング）"
    ],
    jobSearchMethods: [
      "Indeed（ニュージーランド最大級の求人サイト）",
      "Seek NZ（ニュージーランド最大級の求人サイト）",
      "Trade Me Jobs（現地人気の求人サイト）",
      "直接農場・ワイナリー訪問",
      "カフェ・レストランの直接訪問",
      "友人・知人からの紹介"
    ],
    averageWage: "平均時給はNZ$18-22（約1,620-1,980円）。農業やワイナリーでは時給が高く、NZ$20-25程度。観光地やクイーンズタウンなどの人気エリアでは時給が高めです。",
    specialNotes: "キウイフルーツの収穫シーズン（3-6月）は特に求人が多く、ファームでの仕事は現地の生活を体験する良い機会です。ワイナリーでの仕事も人気で、ワインの知識も身につけられます。のんびりした環境で働きたい人におすすめです。"
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
      jobInfo={jobInfo}
      consultationLink="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
    />
  );
}  
