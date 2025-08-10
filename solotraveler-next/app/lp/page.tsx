"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

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

export default function LandingPage() {
  const router = useRouter();

  // ページビュー計測
  useEffect(() => {
    trackEvent('view', 'ページ', 'ランディングページ', 1);
  }, []);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lp-container">
      {/* ヒーローセクション */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            海外生活をもっと安心に。<br />
            ワーホリ仲間と繋がるコミュニティ
          </h1>
          <p className="hero-description">
            現地の最新情報、住まい探し、仕事探しのコツを共有。<br />
            同じ都市の仲間とつながって、ワーホリ生活を充実させませんか？
          </p>
          <button 
            onClick={() => {
              trackEvent('click', 'CTA', '今すぐ参加する_ヒーロー', 1);
              window.open('https://buy.stripe.com/5kQdR3dSd6dTd6V2rl93y00', '_blank');
            }}
            className="cta-button primary"
          >
            今すぐ参加する
          </button>
          <p className="hero-note">
            ※ 最初の100人限定で3ヶ月間無料
          </p>
        </div>
        <div className="hero-image">
          <div className="hero-visual">
            <div className="world-map">🌍</div>
            <div className="people-icons">
              <span className="person">👤</span>
              <span className="person">👤</span>
              <span className="person">👤</span>
            </div>
          </div>
        </div>
      </section>

      {/* コミュニティのメリット */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">コミュニティのメリット</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>現地の最新情報が手に入る</h3>
              <p>住まい、仕事、生活のコツなど、リアルタイムの情報を共有。現地にいるメンバーから生の声を聞けます。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>同じ都市の仲間とつながる</h3>
              <p>同じ都市でワーホリ中の仲間と出会い、友達作りや情報交換ができます。一人じゃない安心感。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>質問・相談がいつでもできる</h3>
              <p>困ったことがあれば、いつでも仲間に相談可能。経験豊富な先輩からのアドバイスも。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">料金プラン</h2>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>月額プラン</h3>
              <div className="price">
                <span className="price-amount">550</span>
                <span className="price-currency">円</span>
                <span className="price-period">/月</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>✅ Discordコミュニティへの参加</li>
                <li>✅ 現地情報の共有・閲覧</li>
                <li>✅ 仲間との交流</li>
                <li>✅ 質問・相談サポート</li>
                <li>✅ 求人・物件情報の共有</li>
              </ul>
            </div>
            <div className="limited-offer">
              <p>🎉 <strong>最初の100人限定</strong></p>
              <p>3ヶ月間無料でお試し！</p>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">よくある質問</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>退会は簡単にできますか？</h3>
              <p>はい、いつでも簡単に退会できます。Discordからサーバーを退出するだけで退会完了です。追加の手続きは不要です。</p>
            </div>
            <div className="faq-item">
              <h3>海外からも参加できますか？</h3>
              <p>もちろんです！Discordは世界中どこからでもアクセス可能です。海外にいる方も安心してご参加ください。</p>
            </div>
            <div className="faq-item">
              <h3>どのような情報が共有されますか？</h3>
              <p>住まい探し、仕事探し、生活のコツ、現地のイベント情報など、ワーホリ生活に役立つ実践的な情報を共有しています。</p>
            </div>
            <div className="faq-item">
              <h3>参加者の年齢層は？</h3>
              <p>18歳〜30歳のワーホリ対象年齢の方が中心ですが、年齢制限はありません。ワーホリに興味がある方ならどなたでも参加できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section id="cta-section" className="cta-section">
        <div className="container">
          <h2>今すぐワーホリ仲間とつながる</h2>
          <p>一人で不安な海外生活も、仲間がいれば心強いもの。</p>
          <p>今なら最初の100人限定で3ヶ月間無料！</p>
          <button 
            onClick={() => {
              trackEvent('click', 'CTA', '今すぐ参加する_CTAセクション', 1);
              window.open('https://buy.stripe.com/5kQdR3dSd6dTd6V2rl93y00', '_blank');
            }}
            className="cta-button primary large"
          >
            今すぐ参加する
          </button>
          <p className="cta-note">
            参加後、Discord招待リンクをお送りします
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer className="lp-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>ワーホリパス</h4>
              <p>ワーキングホリデーをより安心で楽しく</p>
            </div>
            <div className="footer-section">
              <p style={{ marginTop: '1rem' }}>
                <a href="/legal" style={{ 
                  color: '#ff6b6b', 
                  textDecoration: 'underline',
                  fontWeight: 600
                }}>
                  特定商取引法に基づく表記
                </a>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 ワーホリパス. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 戻るボタン */}
      <button
        onClick={() => {
          trackEvent('click', 'ナビゲーション', '戻るボタン_ランディングページ', 1);
          router.push("/");
        }}
        className="fixed-back-button"
        aria-label="戻る"
      >
        ← 戻る
      </button>
    </div>
  );
} 