import React from "react";
import Header from "../components/Header";
import AboutWorkingHolidayClient from "../components/AboutWorkingHolidayClient";

// FAQデータをサーバーサイドで定義
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

export default function AboutWorkingHoliday() {
  return (
    <>
      <Header />
      
      {/* 記事コンテンツ */}
      <div className="article-container">
        {/* 記事ヘッダー */}
        <header className="article-header">
          <h1 className="article-title">
            ワーホリとは？初心者向け完全ガイド
          </h1>
          <p className="article-excerpt">
            ワーホリとは、18〜30歳（国により35歳）を中心とした若者が、協定国に最長1〜2年滞在し、休暇を主目的に就労・就学も体験できる特別なビザ制度です。この記事では、ワーホリの基本情報から申請方法、人気国まで詳しく解説します。
          </p>
        </header>

        {/* 記事本文 */}
        <main className="article-content">
          {/* 目次 */}
          <nav className="article-toc">
            <h3 className="toc-title">目次</h3>
            <ul className="toc-list">
              <li><a href="#what-is-wh">ワーホリとは何か</a></li>
              <li><a href="#countries">人気国と滞在期間</a></li>
              <li><a href="#documents">必要書類</a></li>
              <li><a href="#costs">費用の目安</a></li>
              <li><a href="#faq">よくある質問</a></li>
            </ul>
          </nav>

          {/* ワーホリとは何か */}
          <section id="what-is-wh" className="article-section">
            <h2 className="section-title">ワーホリとは何か</h2>
            <div className="article-text">
              <p>
                ワーホリ（ワーキングホリデー）は、18歳から30歳（一部の国では35歳まで）の若者を対象とした特別なビザ制度です。休暇を主目的としながら、現地での就労や就学も体験できる、まさに「働きながら学ぶ」ことができる制度です。
              </p>
              <p>
                この制度の最大の特徴は、単なる観光旅行とは異なり、現地の生活に深く関わることができる点です。語学学習、文化交流、就労体験を通じて、その国の文化や社会を肌で感じることができます。
              </p>
            </div>
          </section>

          {/* 滞在可能な国と期間 */}
          <section id="countries" className="article-section">
            <h2 className="section-title">🌍 ワーホリで行ける人気国と滞在期間</h2>
            <div className="article-text">
              <p>
                日本は現在、多くの国とワーキングホリデー協定を結んでいます。各国によって滞在期間や年齢制限が異なるため、自分の希望に合った国を選ぶことが重要です。以下に人気の高い国々を紹介します。
              </p>
            </div>
          
            <div className="countries-grid">
              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇦🇺 オーストラリア</h3>
                  <p className="wh-country-period">滞在期間：1年間（延長可能）</p>
                  <p className="wh-country-desc">人気No.1のワーホリ先。温暖な気候と豊かな自然が魅力。</p>
                </div>
                <a href="/countries/australia" className="wh-country-button">
                  詳細を見る →
                </a>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇨🇦 カナダ</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">広大な自然と多文化社会。英語・フランス語の両方を学べる。</p>
                </div>
                <a href="/countries/canada" className="wh-country-button">
                  詳細を見る →
                </a>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇳🇿 ニュージーランド</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">美しい自然とアウトドアアクティビティが充実。</p>
                </div>
                <a href="/countries/newzealand" className="wh-country-button">
                  詳細を見る →
                </a>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇬🇧 イギリス</h3>
                  <p className="wh-country-period">滞在期間：2年間</p>
                  <p className="wh-country-desc">歴史と文化の宝庫。最長2年間滞在可能。</p>
                </div>
                <a href="/countries/uk" className="wh-country-button">
                  詳細を見る →
                </a>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇮🇪 アイルランド</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">親日国として知られる。英語学習に最適な環境。</p>
                </div>
                <a href="/countries/ireland" className="wh-country-button">
                  詳細を見る →
                </a>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇩🇪 ドイツ</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">ヨーロッパの中心。歴史的建造物と現代文化が融合。</p>
                </div>
                <a href="/countries/germany" className="wh-country-button">
                  詳細を見る →
                </a>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇫🇷 フランス</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">芸術と文化の都。パリを中心に豊かな体験が可能。</p>
                </div>
                <a href="/countries/france" className="wh-country-button">
                  詳細を見る →
                </a>
              </div>

              <div className="wh-country-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🇰🇷 韓国</h3>
                  <p className="wh-country-period">滞在期間：1年間</p>
                  <p className="wh-country-desc">アジアの隣国。K-POPや韓流文化を身近に体験。</p>
                </div>
                <a href="/countries/southkorea" className="wh-country-button">
                  詳細を見る →
                </a>
              </div>

              {/* 他の国も見るカード */}
              <div className="wh-country-card wh-more-countries-card">
                <div className="wh-country-info">
                  <h3 className="wh-country-name">🌍 他の国も見る</h3>
                  <p className="wh-country-period">全協定国をチェック</p>
                  <p className="wh-country-desc">まだまだあります！全協定国の詳細情報をご覧いただけます。</p>
                </div>
                <a href="/" className="wh-country-button wh-more-countries-button">
                  全協定国を見る →
                </a>
              </div>
            </div>
          </section>

          {/* 必要書類 */}
          <section id="documents" className="article-section">
            <h2 className="section-title">📋 ワーホリ申請に必要な書類一覧</h2>
            <div className="article-text">
              <p>
                ワーホリビザの申請には、各国共通の基本書類と、国によって異なる追加書類が必要です。申請前に必ず最新の情報を確認し、余裕を持って準備を始めましょう。
              </p>
            </div>
          
            <div className="documents-grid">
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
          <section id="costs" className="article-section">
            <h2 className="section-title">💰 ワーホリにかかる費用の目安と内訳</h2>
            <div className="article-text">
              <p>
                ワーホリには多額の費用がかかります。事前にしっかりと資金計画を立てることで、現地での生活を安心して送ることができます。以下に主要な費用項目をまとめました。
              </p>
            </div>
          
            <div className="costs-grid">
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

          {/* よくある質問 */}
          <section id="faq" className="article-section">
            <h2 className="section-title">❓ よくある質問</h2>
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 記事の終了 */}
          <div className="article-footer">
            <p className="disclaimer">
              ※ 詳細は各国大使館・公式サイト等でご確認ください。情報は2025年1月時点のものです。
            </p>
          </div>
        </main>

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
                { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://workingholidaypass.jp/" },
                { "@type": "ListItem", "position": 2, "name": "ワーホリとは", "item": "https://workingholidaypass.jp/about-workingholiday" }
              ]
            })
          }}
        />
      </div>

      {/* クライアントサイドのインタラクティブ機能 */}
      <AboutWorkingHolidayClient />
    </>
  );
} 