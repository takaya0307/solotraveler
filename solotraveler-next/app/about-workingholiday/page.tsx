"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    trackEvent('view', 'ページ', 'ワーキングホリデー制度とは', 1);
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
      <header className="App-header stylish-header main-header">
        <div className="header-container">
          <div className="header-logo">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="logo-text">
                <span className="logo-main">ワーホリ</span>
                <span className="logo-sub">パス</span>
              </span>
              <span className="logo-subtitle">Working Holiday Portal</span>
            </Link>
          </div>
          <nav className="header-nav">
            <a href="/about-workingholiday" className="nav-link">
              ワーキングホリデー制度とは
            </a>
          </nav>
        </div>
        <div className="header-gradient-bar" />
      </header>
      
      <button
        onClick={() => {
          trackEvent('click', 'ナビゲーション', '戻るボタン_ワーキングホリデー制度', 1);
          router.push("/");
        }}
        className="fixed-back-button"
        aria-label="戻る"
      >
        ← 戻る
      </button>

      <div className="wh-page-container">
        {/* ナビゲーション */}
        <nav className="wh-navigation">
          <ul className="wh-nav-list">
            <li className="wh-nav-item">
              <a href="#overview" className="wh-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}>
                📋 概要
              </a>
            </li>
            <li className="wh-nav-item">
              <a href="#pros-cons" className="wh-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('pros-cons'); }}>
                ⚖️ メリット・デメリット
              </a>
            </li>
            <li className="wh-nav-item">
              <a href="#faq" className="wh-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
                ❓ FAQ
              </a>
            </li>
            <li className="wh-nav-item">
              <a href="#target" className="wh-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('target'); }}>
                🎯 対象者
              </a>
            </li>
            <li className="wh-nav-item">
              <a href="#summary" className="wh-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('summary'); }}>
                📝 まとめ
              </a>
            </li>
          </ul>
        </nav>

        {/* ヒーローセクション */}
        <section className="wh-hero-section">
          <div className="wh-hero-content">
            <h1 className="wh-hero-title">
              ワーキングホリデー制度とは？<br />
              海外で働ける夢の制度を解説
            </h1>
            <p className="wh-hero-description">
              「ワーキングホリデーって何？」「どんな国に行けるの？」「英語ができなくても大丈夫？」<br />
              このページでは、ワーキングホリデー制度について詳しく解説します。海外で働きながら生活できる特別なビザ制度の魅力と注意点を、わかりやすくお伝えします。
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

        {/* ワーキングホリデー制度の概要 */}
        <section id="overview" className="wh-section">
          <h2 className="wh-section-title">
            📋 ワーキングホリデー制度の概要
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
              👥 対象年齢・参加条件
            </h3>
            <ul className="wh-list">
              <li><strong>年齢：</strong>18歳〜30歳（一部の国では35歳まで）</li>
              <li><strong>国籍：</strong>日本国籍を有すること</li>
              <li><strong>目的：</strong>休暇を主目的とし、就労は副次的な目的</li>
              <li><strong>資金：</strong>往復航空券代金と滞在費を支弁する能力</li>
              <li><strong>健康：</strong>心身ともに健康であること</li>
              <li><strong>犯罪歴：</strong>重大な犯罪歴がないこと</li>
            </ul>
          </div>

          <div className="wh-card">
            <h3 className="wh-subsection-title">
              🌍 滞在可能な国と期間
            </h3>
            <div className="wh-info-box">
              <p><strong>主要な協定国：</strong></p>
              <ul className="wh-list">
                <li><strong>オーストラリア：</strong>1年間（延長可能）</li>
                <li><strong>カナダ：</strong>1年間</li>
                <li><strong>ニュージーランド：</strong>1年間</li>
                <li><strong>イギリス：</strong>2年間</li>
                <li><strong>アイルランド：</strong>1年間</li>
                <li><strong>ドイツ：</strong>1年間</li>
                <li><strong>フランス：</strong>1年間</li>
                <li><strong>韓国：</strong>1年間</li>
              </ul>
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

        {/* メリットとデメリット */}
        <section id="pros-cons" className="wh-section wh-section-alt">
          <h2 className="wh-section-title">
            ⚖️ メリットとデメリット
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
            {faqData.map((faq, index) => (
              <div key={index} className="wh-faq-item">
                <div 
                  className={`wh-faq-question ${openFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`wh-faq-toggle ${openFaq === index ? 'active' : ''}`}>
                    ▼
                  </span>
                </div>
                <div className={`wh-faq-answer ${openFaq === index ? 'active' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
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
      </div>
    </>
  );
} 