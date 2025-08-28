"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";

// GA4イベント計測用のヘルパー関数
const trackEvent = (action: string, category: string, label?: string, value?: string | number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

export default function AboutWorkingHoliday() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ページビュー計測
  useEffect(() => {
    trackEvent('view', 'ページ', 'ワーホリとは', 1);
  }, []);

  const toggleFaq = (index: number) => {
    const isOpening = openFaq !== index;
    trackEvent('click', 'FAQ', `FAQ_${faqData[index].question}`, isOpening ? 1 : 0);
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    trackEvent('click', 'ナビゲーション', `セクション移動_${sectionId}`, 1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "英語ができなくても大丈夫ですか？",
      answer: "基本的な英語力は必要ですが、完璧である必要はありません。現地で生活しながら語学力を向上させることができます。ただし、最低限の日常会話ができるレベルはあった方が安心です。"
    },
    {
      question: "何歳から行けますか？",
      answer: "18歳から申請可能です。上限年齢は国によって異なり、30歳まで（一部の国では35歳まで）となっています。年齢制限に達する前に申請する必要があります。"
    },
    {
      question: "現地での仕事はどう探すの？",
      answer: "求人サイト、現地の求人情報誌、友人や知人の紹介、直接店舗に問い合わせるなど、様々な方法があります。レストラン、カフェ、農場、ホテルなどが一般的です。"
    },
    {
      question: "どのくらいの資金が必要ですか？",
      answer: "国によって異なりますが、往復航空券代金と最低3ヶ月分の生活費（約50〜100万円）が必要です。保険料や初期費用も含めて、余裕を持った資金計画を立てることをお勧めします。"
    },
    {
      question: "一人で行くのは不安です。どうすればいいですか？",
      answer: "同じ志を持つ仲間と事前に知り合っておくことをお勧めします。SNSやコミュニティで情報交換をしたり、同じ時期に渡航する人と連絡を取ったりすることで、不安を軽減できます。"
    }
  ];

  return (
    <>
      <Header />
      


      <div className="wh-page-container" style={{ marginTop: '2rem' }}>


        {/* ヒーローセクション */}
        <section className="wh-hero-section">
          <div className="wh-hero-content">
            <h1 className="wh-hero-title">
              ワーホリとは？
            </h1>
            <p className="wh-hero-definition">
              <strong>ワーホリとは、18〜30歳（国により35歳）を中心とした若者が、協定国に最長1〜2年滞在し、休暇を主目的に就労・就学も体験できる特別なビザ制度</strong>です。
            </p>
            
            {/* ファーストビュー強化 */}
            <div className="wh-hero-features">
              <div className="wh-hero-feature">
                <span className="wh-hero-feature-icon">🌍</span>
                <div className="wh-hero-feature-title">18〜30歳対象</div>
                <div className="wh-hero-feature-desc">若者限定の特別ビザ</div>
              </div>
              <div className="wh-hero-feature">
                <span className="wh-hero-feature-icon">💼</span>
                <div className="wh-hero-feature-title">就労・就学可能</div>
                <div className="wh-hero-feature-desc">働きながら学べる</div>
              </div>
              <div className="wh-hero-feature">
                <span className="wh-hero-feature-icon">🗓️</span>
                <div className="wh-hero-feature-title">1〜2年間滞在</div>
                <div className="wh-hero-feature-desc">じっくり体験できる</div>
              </div>
            </div>
          </div>
        </section>

        {/* ワーホリの概要（定義・目的・できること） */}
        <section id="overview" className="wh-section">
          <h2 className="wh-section-title">
            📋 ワーホリの概要（定義・目的・できること）
          </h2>
          
          <div className="wh-card">
            <h3 className="wh-subsection-title">
              🎯 制度の目的
            </h3>
            <div className="wh-content">
              <p>
                ワーキングホリデー制度は、18歳から30歳（国によっては35歳）までの若者が、協定国・地域で一定期間（通常1年）滞在し、<strong>休暇を楽しみながら現地での就労や学習を体験できる特別なビザ制度</strong>です。
              </p>
              <p>
                異文化交流と相互理解を深めることを目的として、日本と各国が協定を結んでいます。
              </p>
            </div>
          </div>

          <div className="wh-card">
            <h3 className="wh-subsection-title">
              💼 どんなことができるか
            </h3>
            <ul className="wh-list">
              <li><strong>就労：</strong>現地でアルバイトやパートタイムで働く</li>
              <li><strong>就学：</strong>語学学校や専門学校で勉強する</li>
              <li><strong>観光：</strong>休暇として旅行や観光を楽しむ</li>
              <li><strong>文化交流：</strong>現地の人々との交流や文化体験</li>
            </ul>
          </div>
        </section>

        {/* 対象年齢・参加条件 */}
        <section id="requirements" className="wh-section wh-section-alt">
          <h2 className="wh-section-title">
            👥 対象年齢・参加条件
          </h2>
          
          <div className="wh-card">
            <ul className="wh-list">
              <li><strong>年齢：</strong>18歳〜30歳（一部の国では35歳まで）</li>
              <li><strong>国籍：</strong>日本国籍を有すること</li>
              <li><strong>目的：</strong>休暇を主目的とし、就労は副次的な目的</li>
              <li><strong>資金：</strong>往復航空券代金と滞在費を支弁する能力</li>
              <li><strong>健康：</strong>心身ともに健康であること</li>
              <li><strong>犯罪歴：</strong>重大な犯罪歴がないこと</li>
            </ul>
          </div>
        </section>

        {/* 滞在可能な国と期間 */}
        <section id="countries" className="wh-section">
          <h2 className="wh-section-title">
            🌍 ワーホリで行ける人気国と滞在期間
          </h2>
          
          <div className="wh-card">
            <div className="wh-countries-grid">
              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇦🇺 オーストラリア</h3>
                  <p className="wh-country-period">滞在期間：1年間（延長可能）</p>
                  <p className="wh-country-desc">人気No.1のワーホリ先。温暖な気候と豊かな自然が魅力。</p>
                </div>
                <Link href="/countries/australia" className="wh-country-button">
                  詳細を見る →
                </Link>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇨🇦 カナダ</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">広大な自然と多文化社会。英語・フランス語の両方を学べる。</p>
                </div>
                <Link href="/countries/canada" className="wh-country-button">
                  詳細を見る →
                </Link>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇳🇿 ニュージーランド</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">美しい自然とアウトドアアクティビティが充実。</p>
                </div>
                <Link href="/countries/newzealand" className="wh-country-button">
                  詳細を見る →
                </Link>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇬🇧 イギリス</h3>
                  <p className="wh-country-period">滞在期間：2年間</p>
                  <p className="wh-country-desc">歴史と文化の宝庫。最長2年間滞在可能。</p>
                </div>
                <Link href="/countries/uk" className="wh-country-button">
                  詳細を見る →
                </Link>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇮🇪 アイルランド</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">親日国として知られる。英語学習に最適な環境。</p>
                </div>
                <Link href="/countries/ireland" className="wh-country-button">
                  詳細を見る →
                </Link>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇩🇪 ドイツ</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">ヨーロッパの中心。歴史的建造物と現代文化が融合。</p>
                </div>
                <Link href="/countries/germany" className="wh-country-button">
                  詳細を見る →
                </Link>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇫🇷 フランス</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">芸術と文化の都。パリを中心に豊かな体験が可能。</p>
                </div>
                <Link href="/countries/france" className="wh-country-button">
                  詳細を見る →
                </Link>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇰🇷 韓国</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">アジアの隣国。K-POPや韓流文化を身近に体験。</p>
                </div>
                <Link href="/countries/southkorea" className="wh-country-button">
                  詳細を見る →
                </Link>
              </div>

              {/* 他の国も見るカード */}
              <div className="wh-country-card wh-more-countries-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🌍 他の国も見る</h3>
                  <p className="wh-country-period">全協定国をチェック</p>
                  <p className="wh-country-desc">まだまだあります！全協定国の詳細情報をご覧いただけます。</p>
                </div>
                <Link href="/" className="wh-country-button wh-more-countries-button">
                  全協定国を見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* メリット・デメリット */}
        <section id="pros-cons" className="wh-section wh-section-alt">
          <h2 className="wh-section-title">
            ⚖️ メリット・デメリット
          </h2>
          
          <div className="wh-card-grid">
            <div className="wh-benefits-card">
              <h3>
                ✅ メリット
              </h3>
              <ul className="wh-list">
                <li><strong>語学習得：</strong>現地で生活することで実践的な語学力が身につく</li>
                <li><strong>国際経験：</strong>異文化体験で視野が広がる</li>
                <li><strong>柔軟なビザ：</strong>就労・就学・観光を自由に組み合わせ可能</li>
                <li><strong>自立心：</strong>海外で一人暮らしすることで自立心が育まれる</li>
                <li><strong>人脈構築：</strong>世界中の友人やビジネスパートナーを作れる</li>
              </ul>
            </div>
            
            <div className="wh-drawbacks-card">
              <h3>
                ⚠️ デメリット
              </h3>
              <ul className="wh-list">
                <li><strong>収入不安定：</strong>現地での仕事は不安定で低賃金の可能性</li>
                <li><strong>準備コスト：</strong>航空券、保険、初期費用が高額</li>
                <li><strong>文化ギャップ：</strong>言語や文化の違いによるストレス</li>
                <li><strong>孤独感：</strong>一人での海外生活による孤独感</li>
                <li><strong>帰国後の不安：</strong>日本での就職活動への影響</li>
              </ul>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        <section id="faq" className="wh-section">
          <h2 className="wh-section-title">
            ❓ よくある質問（FAQ）
          </h2>
          
          <div>
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="wh-faq-item">
                  <button
                    className={`wh-faq-question ${isOpen ? "active" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`wh-faq-toggle ${isOpen ? "active" : ""}`}>▼</span>
                  </button>
                  <div 
                    id={`faq-panel-${index}`} 
                    role="region" 
                    aria-labelledby={`faq-q-${index}`}
                    className={`wh-faq-answer ${isOpen ? "active" : ""}`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* どんな人に向いているか */}
        <section id="target" className="wh-section wh-section-alt">
          <h2 className="wh-section-title">
            🎯 どんな人に向いているか
          </h2>
          
          <div className="wh-warning-box">
            <ul className="wh-list">
              <li><strong>🌍 海外で働いてみたい人</strong> - 海外での就労経験を積みたい方</li>
              <li><strong>💪 自立したい人</strong> - 一人で海外生活を送り、自立心を育てたい方</li>
              <li><strong>🚀 新しい挑戦をしたい人</strong> - 未知の環境でチャレンジしたい方</li>
              <li><strong>🗣️ 語学力を向上させたい人</strong> - 実践的な語学力を身につけたい方</li>
              <li><strong>🤝 国際的な人脈を作りたい人</strong> - 世界中の友人やビジネスパートナーを作りたい方</li>
              <li><strong>🎯 キャリアの方向性を決めたい人</strong> - 海外経験を通じて将来のキャリアを考えたい方</li>
            </ul>
          </div>
        </section>

        {/* 申請の流れ */}
        <section id="application" className="wh-section">
          <h2 className="wh-section-title">
            📋 申請の流れ
          </h2>
          
          <div className="wh-card">
            <div className="wh-content">
              <h3 className="wh-subsection-title">1️⃣ 事前準備（3〜6ヶ月前）</h3>
              <ul className="wh-list">
                <li><strong>渡航先の決定：</strong>行きたい国と都市を決める</li>
                <li><strong>語学力の確認：</strong>必要に応じて語学学校の手配</li>
                <li><strong>資金計画：</strong>航空券、保険、初期費用の準備</li>
                <li><strong>健康診断：</strong>必要に応じて健康診断を受ける</li>
              </ul>
              
              <h3 className="wh-subsection-title">2️⃣ ビザ申請（2〜3ヶ月前）</h3>
              <ul className="wh-list">
                <li><strong>必要書類の準備：</strong>パスポート、写真、証明書など</li>
                <li><strong>オンライン申請：</strong>各国の公式サイトで申請</li>
                <li><strong>申請料の支払い：</strong>クレジットカードで支払い</li>
                <li><strong>審査待ち：</strong>通常1〜4週間で結果</li>
              </ul>
              
              <h3 className="wh-subsection-title">3️⃣ 渡航準備（1ヶ月前）</h3>
              <ul className="wh-list">
                <li><strong>航空券の手配：</strong>往復航空券の購入</li>
                <li><strong>保険の加入：</strong>海外旅行保険・医療保険</li>
                <li><strong>宿泊先の手配：</strong>最初の1〜2週間分</li>
                <li><strong>現地情報の収集：</strong>交通手段、銀行口座開設など</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 必要書類と費用の目安 */}
        <section id="documents" className="wh-section wh-section-alt">
          <h2 className="wh-section-title">
            📄 必要書類と費用の目安
          </h2>
          
          <div className="wh-card-grid">
            <div className="wh-card">
              <h3 className="wh-subsection-title">📋 必要書類</h3>
              <ul className="wh-list">
                <li><strong>パスポート：</strong>有効期限が滞在期間+6ヶ月以上</li>
                <li><strong>証明写真：</strong>各国の規格に合った写真</li>
                <li><strong>資金証明：</strong>銀行残高証明書</li>
                <li><strong>健康証明：</strong>必要に応じて健康診断書</li>
                <li><strong>犯罪歴証明：</strong>必要に応じて警察証明書</li>
                <li><strong>履歴書：</strong>職歴や学歴の証明</li>
              </ul>
            </div>
            
            <div className="wh-card">
              <h3 className="wh-subsection-title">💰 費用の目安</h3>
              <ul className="wh-list">
                <li><strong>ビザ申請料：</strong>3,000〜15,000円（国により異なる）</li>
                <li><strong>航空券：</strong>往復10〜30万円</li>
                <li><strong>海外保険：</strong>年間5〜15万円</li>
                <li><strong>初期費用：</strong>現地での生活費3〜6ヶ月分</li>
                <li><strong>語学学校：</strong>月5〜15万円（希望する場合）</li>
                <li><strong>その他：</strong>予防接種、ビザ延長料など</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 注意点・よくある失敗 */}
        <section id="warnings" className="wh-section">
          <h2 className="wh-section-title">
            ⚠️ 注意点・よくある失敗
          </h2>
          
          <div className="wh-card">
            <div className="wh-content">
              <h3 className="wh-subsection-title">🚫 よくある失敗例</h3>
              <ul className="wh-list">
                <li><strong>資金不足：</strong>現地での生活費が足りずに早期帰国</li>
                <li><strong>語学力不足：</strong>コミュニケーションが取れずに孤立</li>
                <li><strong>準備不足：</strong>現地の文化やルールを知らずにトラブル</li>
                <li><strong>仕事探しの遅れ：</strong>到着後すぐに仕事が見つからない</li>
                <li><strong>保険未加入：</strong>病気や怪我で高額な医療費が発生</li>
              </ul>
              
              <h3 className="wh-subsection-title">💡 成功のポイント</h3>
              <ul className="wh-list">
                <li><strong>十分な資金準備：</strong>最低6ヶ月分の生活費を確保</li>
                <li><strong>事前学習：</strong>現地の文化、法律、生活習慣を学ぶ</li>
                <li><strong>ネットワーク構築：</strong>現地の日本人コミュニティに参加</li>
                <li><strong>柔軟な対応：</strong>計画通りにいかないことを前提に準備</li>
                <li><strong>健康管理：</strong>体調管理と適切な保険加入</li>
              </ul>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section id="summary" className="wh-section">
          <h2 className="wh-section-title">
            📝 まとめ
          </h2>
          
          <div className="wh-summary-box">
            <div className="wh-content">
              <p>
                ワーキングホリデー制度は、若者にとって<strong>海外で働きながら生活できる貴重な機会</strong>です。語学力の向上、国際経験の獲得、自立心の育成など、多くのメリットがあります。
              </p>
              <p>
                ただし、収入の不安定性や文化ギャップなどのデメリットも理解した上で、しっかりとした準備をしてから挑戦することが重要です。
              </p>
              <p>
                他のビザ（学生ビザ、就労ビザ）と比べて、<strong>自由度が高く、就労・就学・観光を自由に組み合わせられる</strong>のがワーキングホリデービザの大きな特徴です。
              </p>
            </div>
          </div>
        </section>

        <div className="wh-footer-note">
          ※ 詳細は各国大使館・公式サイト等でご確認ください
        </div>

        {/* スキーマ（構造化データ） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ...faqData.map(f => ({
                  "@type": "Question",
                  "name": f.question,
                  "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                })),
                {
                  "@type": "Question",
                  "name": "ワーホリとは何の略？意味は？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ワーホリは\"ワーキングホリデー\"の略で、休暇を主目的に就労・就学も可能な若者向けの在留制度を指します。"
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://solotraveler-next.vercel.app/" },
                { "@type": "ListItem", "position": 2, "name": "ワーホリとは", "item": "https://solotraveler-next.vercel.app/about-workingholiday" }
              ]
            })
          }}
        />
      </div>
    </>
  );
} 