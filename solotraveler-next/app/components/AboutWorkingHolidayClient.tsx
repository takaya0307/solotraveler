"use client";
import React, { useState, useEffect } from "react";
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

export default function AboutWorkingHolidayClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ワーホリページにwh-pageクラスを追加
  useEffect(() => {
    document.body.classList.add('wh-page');
    
    // コンポーネントのアンマウント時にクラスを削除
    return () => {
      document.body.classList.remove('wh-page');
    };
  }, []);

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
    },
    {
      question: "ビザの申請はいつから始めればいいですか？",
      answer: "国によって異なりますが、一般的に渡航予定日の3〜6ヶ月前から申請を開始することをお勧めします。人気の国は枠が早く埋まるため、早めの準備が重要です。申請に必要な書類の準備にも時間がかかります。"
    },
    {
      question: "現地で病気になったらどうすればいいですか？",
      answer: "海外旅行保険に加入していることが前提ですが、現地の病院やクリニックを受診できます。緊急時は救急車を呼ぶことも可能です。事前に現地の医療機関の情報を調べておくことをお勧めします。"
    }
  ];

  return (
    <div className="wh-page-container" style={{ marginTop: '2rem' }}>
      {/* ヒーローセクション */}
      <section className="wh-hero-section">
        <div className="wh-hero-content">
          {/* ヒーロー画像 */}
          <div className="wh-hero-image-section">
            <img 
              src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D" 
              alt="空港の様子" 
              className="wh-hero-main-image"
            />
          </div>
          <h1 className="wh-hero-title">
            ワーホリとは？初心者向け完全ガイド【2025年最新】
          </h1>
          <p className="wh-hero-description">
            ワーホリとは、18〜30歳（国により35歳）を中心とした若者が、協定国に最長1〜2年滞在し、休暇を主目的に就労・就学も体験できる特別なビザ制度です。
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

      {/* よくある質問（FAQ） */}
      <section id="faq" className="wh-section">
        <h2 className="wh-section-title">
          ❓ ワーホリFAQ
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

      {/* 必要書類 */}
      <section id="documents" className="wh-section wh-section-alt">
        <h2 className="wh-section-title">
          📋 ワーホリ申請に必要な書類一覧
        </h2>
        
        <div className="wh-card-grid wh-card-grid-3">
          <div className="wh-document-card">
            <div className="wh-document-icon">📄</div>
            <h3 className="wh-document-title">パスポート</h3>
            <p className="wh-document-desc">有効期限が滞在期間+6ヶ月以上必要</p>
          </div>
          
          <div className="wh-document-card">
            <div className="wh-document-icon">📸</div>
            <h3 className="wh-document-title">証明写真</h3>
            <p className="wh-document-desc">各国の規格に合った写真</p>
          </div>
          
          <div className="wh-document-card">
            <div className="wh-document-icon">💰</div>
            <h3 className="wh-document-title">資金証明</h3>
            <p className="wh-document-desc">銀行残高証明書</p>
          </div>
          
          <div className="wh-document-card">
            <div className="wh-document-icon">🏥</div>
            <h3 className="wh-document-title">健康証明</h3>
            <p className="wh-document-desc">必要に応じて健康診断書</p>
          </div>
          
          <div className="wh-document-card">
            <div className="wh-document-icon">🔒</div>
            <h3 className="wh-document-title">犯罪歴証明</h3>
            <p className="wh-document-desc">必要に応じて警察証明書</p>
          </div>
          
          <div className="wh-document-card">
            <div className="wh-document-icon">📝</div>
            <h3 className="wh-document-title">履歴書</h3>
            <p className="wh-document-desc">職歴や学歴の証明</p>
          </div>
        </div>
      </section>

      {/* 費用の目安 */}
      <section id="costs" className="wh-section">
        <h2 className="wh-section-title">
          💰 ワーホリにかかる費用の目安と内訳
        </h2>
        
        <div className="wh-card-grid wh-card-grid-3">
          <div className="wh-cost-card">
            <div className="wh-cost-icon">🛂</div>
            <h3 className="wh-cost-title">ビザ申請料</h3>
            <p className="wh-cost-amount">3,000〜15,000円</p>
            <p className="wh-cost-desc">国により異なる</p>
          </div>
          
          <div className="wh-cost-card">
            <div className="wh-cost-icon">✈️</div>
            <h3 className="wh-cost-title">航空券</h3>
            <p className="wh-cost-amount">往復10〜30万円</p>
            <p className="wh-cost-desc">時期や航空会社により変動</p>
          </div>
          
          <div className="wh-cost-card">
            <div className="wh-cost-icon">🛡️</div>
            <h3 className="wh-cost-title">海外保険</h3>
            <p className="wh-cost-amount">年間5〜15万円</p>
            <p className="wh-cost-desc">必須の保険料</p>
          </div>
          
          <div className="wh-cost-card">
            <div className="wh-cost-icon">💳</div>
            <h3 className="wh-cost-title">初期費用</h3>
            <p className="wh-cost-amount">3〜6ヶ月分</p>
            <p className="wh-cost-desc">現地での生活費</p>
          </div>
          
          <div className="wh-cost-card">
            <div className="wh-cost-icon">🎓</div>
            <h3 className="wh-cost-title">語学学校</h3>
            <p className="wh-cost-amount">月5〜15万円</p>
            <p className="wh-cost-desc">希望する場合</p>
          </div>
          
          <div className="wh-cost-card">
            <div className="wh-cost-icon">💉</div>
            <h3 className="wh-cost-title">その他</h3>
            <p className="wh-cost-amount">要相談</p>
            <p className="wh-cost-desc">予防接種、ビザ延長料など</p>
          </div>
        </div>
      </section>

      <div className="wh-footer-note">
        ※ 詳細は各国大使館・公式サイト等でご確認ください
      </div>
    </div>
  );
}
