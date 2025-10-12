import React from "react";
import CountryDetailLayout from "../../components/CountryDetailLayout";
import netherlandsData from "../../../db.json";

export default function NetherlandsDetailPage() {
  const country = netherlandsData.countries.find(c => c.id === "netherlands")!;

  // ページタイトルとメタディスクリプションの最適化
  const pageTitle = `${country.nameJa}ワーホリ`;
  const pageDescription = "オランダは、風車、チューリップ、自由な文化で知られる国です。\nアムステルダムをはじめとする美しい都市、美しい田園風景、そして進歩的な社会制度が特徴です。";
  
  const countryDescription = "風車・チューリップ・自由の国";
  
  const countryFeatures = [
    {
      title: "風車と田園",
      description: "美しい風車と広大な田園風景",
      imageUrl: "https://images.unsplash.com/photo-1595698251407-8e7e3030a715?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0aGVybGFuZHN8ZW58MHx8MHx8fDA%3D",
      imageAlt: "オランダの風車と田園"
    },
    {
      title: "チューリップ",
      description: "世界最大のチューリップ畑",
      imageUrl: "https://images.unsplash.com/photo-1555930316-ae935820b28c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fG5ldGhlcmxhbmRzfGVufDB8fDB8fHww",
      imageAlt: "オランダのチューリップ"
    },
    {
      title: "自由な文化",
      description: "進歩的で自由な社会制度",
      imageUrl: "https://images.unsplash.com/photo-1667053312990-c17655704190?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ldGhlcmxhbmRzfGVufDB8fDB8fHww",
      imageAlt: "オランダの自由な文化"
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
      description: "比較的安全ですが、都市部では一般的な防犯意識が必要です。",
      icon: "🛡️"
    },
    {
      title: "人々の性格",
      description: "オランダ人は率直でフレンドリー、平等を重視する人が多いです。",
      icon: "😊"
    }
  ];

  const countryHighlights = [
    {
      title: "英語とオランダ語の環境",
      description: "国際的な環境で両言語を習得。アムステルダムの語学学校で、オランダ語を学びながら、国際都市として発達した環境で実用的な英語も身につけられます。",
      icon: "🗣️"
    },
    {
      title: "サイクリング文化",
      description: "自転車中心の生活で健康的なライフスタイル。専用レーンが完備された自転車道で、安全にサイクリングを楽しみながら、オランダ人の環境意識も学べます。",
      icon: "🚴"
    },
    {
      title: "風車とチューリップ",
      description: "世界的に有名な観光スポットを体験。キンデルダイクの風車群やキューケンホフのチューリップ畑、アムステルダムの運河クルーズなど、オランダの象徴的な風景を満喫できます。",
      icon: "🌷"
    },
    {
      title: "進歩的な社会制度",
      description: "自由で多様性を尊重する社会。同性婚の合法化、大麻の合法化、安楽死制度など、世界でも最も進歩的な社会制度を体験し、多様性を尊重する文化を学べます。",
      icon: "🌈"
    }
  ];

  // 体験談セクション（noteの記事へのリンク）
  const testimonials: Array<{
    title: string;
    url: string;
    description: string;
  }> = [
    {
      title: "【オランダワーホリ🇳🇱】自己紹介と行く目的",
      url: "https://note.com/yasai_san/n/nad417a594f94",
      description: "itsukiさんが新卒2年目でオランダワーホリを決意した経緯を綴った体験談。23歳で社会人2年目にして会社を辞め、2024年7月からオランダでワーホリをスタート。食べることと旅行が大好きで、大学4年生の時に行ったヨーロッパ周遊旅行での経験が忘れられず、海外移住を決意。新卒という早期のタイミングでワーホリを決断した理由や、不安と葛藤を乗り越えて自分のやりたいことに挑戦する決意について正直に綴られています。"
    },
    {
      title: "【オランダワーホリ】１年間の振り返りと今後の進路",
      url: "https://note.com/yasai_san/n/nf8213958623e",
      description: "itsukiさんがオランダワーホリ9ヶ月目に書いた振り返り記事。初めての海外一人暮らし、語学学校、10か国15都市への旅行、バイト探しでの苦労など、リアルな体験を綴っています。英語学習や仕事探しで悩んだ時期もありながら、オンライン相談を通じて「誰かの役に立ちたい」という目的を見つけ、当初の帰国予定を変更してオランダに残ることを決意。SNS発信やフリーランスとしての道を模索する姿が描かれた、ワーホリのリアルな葛藤と成長の記録です。"
    },
    {
      title: "【2025年度向け】オランダワーホリビザを3週間で取得した方法、体験談",
      url: "https://note.com/yasai_san/n/nbb676adf6602",
      description: "itsukiさんがエージェントを使わず自力でオランダワーホリビザを約3週間で取得した方法を詳しく解説。オランダワーホリは2020年から始まったばかりで情報が少なく、年間先着200人という枠や90日以内の渡航・申請という独特な制約があります。この記事では、渡航前の日本での事前申請と渡航後のオランダでの本申請の流れ、書類の集め方、実際の申請書類の記入例、失敗談を含むリアルな体験談が網羅されています。これからオランダワーホリを目指す方にとって必読の実践的ガイドです。"
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
