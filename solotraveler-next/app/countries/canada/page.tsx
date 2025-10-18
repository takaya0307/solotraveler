import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import canadaData from "../../../db.json";

export default function CanadaDetailPage() {
  const country = canadaData.countries.find(c => c.id === "canada")!;

  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "カナダは、広大な国土と豊かな自然、そして多文化社会が特徴の北米の国です。\n都市部では近代的な生活を送りながら、すぐ近くで大自然を満喫できる環境が整っています。";
  
  const countryDescription = "カナダワーホリの体験談・年齢制限・人気都市・おすすめポイントを見やすくまとめています。自然と都市が調和した北米の魅力あふれる国で、英語・フランス語の両方を学べます。";
  
  const countryFeatures = [
    {
      title: "自然と都市の調和",
      description: "都市部からすぐに大自然へアクセス可能",
      imageUrl: "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "カナダの自然と都市"
    },
    {
      title: "多文化社会",
      description: "様々な国の文化が融合した環境",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop&q=80",
      imageAlt: "多文化社会"
    },
    {
      title: "四季の美しさ",
      description: "春夏秋冬それぞれの季節の魅力",
      imageUrl: "https://images.unsplash.com/photo-1606848011982-a35b47cc0e09?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQyfHxjYW5hZGF8ZW58MHx8MHx8fDA%3D",
      imageAlt: "四季の美しさ"
    }
  ];
  
  const countryAtmosphere = [
    {
      title: "気候",
      description: "地域によって大きく異なりますが、全体的に四季がはっきりしており、夏は温暖、冬は寒い地域が多いです。",
      icon: "🌤️"
    },
    {
      title: "治安",
      description: "世界でも最も安全な国の一つとして知られています。日本人にとって安心して生活できる環境です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "カナダ人は親切でフレンドリーな性格の人が多く、多文化社会を尊重する文化があります。",
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
      description: "29歳で申請する場合は、ビザ発行までに30歳を超えないよう注意が必要です。カナダ政府の判断により31歳まで認められる場合もあります。",
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
      title: "就学期間は最長6ヵ月",
      description: "勉強と仕事をバランスよく経験できる環境。語学学校での英語・フランス語学習と、アルバイトでの実践的な経験を両立できます。",
      icon: "📚"
    },
    {
      title: "英語とフランス語の両方を学べる",
      description: "バイリンガル環境で語学力を大幅に向上。ケベック州ではフランス語、その他の州では英語が主要言語で、1つの国で2つの言語を学べます。",
      icon: "🗣️"
    },
    {
      title: "豊かな自然と都市生活の両立",
      description: "世界遺産や国立公園へのアクセスも良好。バンクーバーやトロントの都市部にいながら、週末にはロッキー山脈やナイアガラの滝を楽しめます。",
      icon: "🏔️"
    },
    {
      title: "再チャレンジ可能な制度",
      description: "2回目のワーホリビザ申請も可能。1回目の経験を活かして、より深い経験や新しい挑戦ができる制度です。",
      icon: "🔄"
    }
  ];

  const jobInfo = {
    popularJobs: [
      "スキーリゾート（リフトオペレーター、レストラン、ホテル）",
      "カフェ・レストラン（ウェイター、キッチン、バリスタ）",
      "小売業（ショップスタッフ、レジ係、倉庫作業）",
      "ホテル・宿泊施設（フロント、ハウスキーピング）",
      "メープルシロップ農場（収穫、加工、販売）",
      "日本語教師（プライベートレッスン、語学スクール）",
      "清掃業（オフィス清掃、ハウスクリーニング）",
      "農業・畜産業（季節労働）"
    ],
    jobSearchMethods: [
      "Indeed Canada（カナダ最大級の求人サイト）",
      "直接店舗訪問（レストラン、カフェ、ショップ）",
      "スキーリゾートの公式サイト",
      "友人・知人からの紹介"
    ],
    averageWage: "平均時給はCA$15-20（約1,650-2,200円）。スキーリゾートや観光地では時給が高く、CA$18-25程度。チップ文化もあるため、サービス業では実質的な収入がさらに高くなります。",
    specialNotes: "冬季のスキーリゾートでの仕事は人気が高く、シーズン前（9-11月）に応募するのが一般的。ケベック州ではフランス語ができると仕事の選択肢が大幅に広がります。季節によって仕事内容が変わるため、事前にリサーチすることが重要です。"
  };

  // 体験談セクション（noteの記事へのリンク）
  const testimonials: Array<{
    title: string;
    url: string;
    description: string;
  }> = [
    {
      title: "ワーホリ仕事探しの現実。観光業への憧れと計画の挫折🤯🇨🇦",
      url: "https://note.com/101misakitoronto/n/n49ced42bd3e5",
      description: "Misakiさんのカナダ・トロントでのワーホリ体験談。新卒でSEとして働いた後、2025年7月からトロントでワーホリをスタート。語学学校を1ヶ月半通った後、スタバで未経験からバリスタとして働き始めた経験を綴っています。当初は観光業でのキャリアを計画していたものの、実際に現地でツアーに参加して感じた観光業の現実と、計画が変わっていく過程をリアルに描いた体験談です。"
    },
    {
      title: "日本での社会人経験2年の私が感じた、カナダの働きやすさ🇨🇦",
      url: "https://note.com/101misakitoronto/n/ne34664632a23",
      description: "Misakiさんがトロントのスタバで働く中で感じたカナダの職場環境について。多国籍国家ならではの特別扱いされない働き方、程よいテキトーさ、新人に優しくフレンドリーな職場環境の魅力を詳しく解説。日本での社会人経験と比較しながら、カナダの働きやすさをリアルに綴った体験談です。忙しい時でも質問しやすい環境や、ミスをしても励ましてくれる同僚たちとの関係性など、実際の職場の雰囲気が伝わる内容です。"
    },
    {
      title: "ホームシックになった？！トロントワーホリ感じるカルチャーショック",
      url: "https://note.com/101misakitoronto/n/naeedfb7259e7",
      description: "Misakiさんがカナダ・トロントで感じたカルチャーショックとホームシックについて正直に綴った体験談。ポジティブな面だけでなく、現地生活で直面するネガティブな側面も包み隠さず紹介。渡航前後の心境の変化や、実際に生活してみて感じた文化の違い、ホームシックへの対処法など、ワーホリのリアルな一面を知ることができる貴重な記事です。"
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