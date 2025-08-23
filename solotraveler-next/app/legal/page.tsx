"use client";
import React, { useEffect } from "react";
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

export default function Legal() {
  const router = useRouter();

  // ページ表示時のイベント計測
  useEffect(() => {
    // GA4: 特定商取引法ページ表示イベント
    trackEvent('view', 'ページ', '特定商取引法ページ', 1);
    
    // ページタイトルの設定
    document.title = "特定商取引法に基づく表記｜ワーホリパス";
    
    // meta descriptionの設定
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ワーホリパスの特定商取引法に基づく表記。事業者情報、販売条件、決済方法などの詳細情報をご確認いただけます。');
    }
  }, []);

  // スクロール深度計測
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
      
      // 25%, 50%, 75%, 100%のスクロールポイントでイベント送信
      if (scrollPercentage >= 25 && scrollPercentage < 50) {
        trackEvent('scroll', 'エンゲージメント', '特定商取引法ページ_スクロール25%', scrollPercentage);
      } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
        trackEvent('scroll', 'エンゲージメント', '特定商取引法ページ_スクロール50%', scrollPercentage);
      } else if (scrollPercentage >= 75 && scrollPercentage < 100) {
        trackEvent('scroll', 'エンゲージメント', '特定商取引法ページ_スクロール75%', scrollPercentage);
      } else if (scrollPercentage >= 100) {
        trackEvent('scroll', 'エンゲージメント', '特定商取引法ページ_スクロール100%', scrollPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 戻るボタンクリック時のイベント計測
  const handleBackClick = () => {
    trackEvent('click', 'ナビゲーション', '特定商取引法ページ_戻るボタン', 1);
    router.push("/");
  };

  // ナビゲーションリンククリック時のイベント計測
  const handleNavLinkClick = () => {
    trackEvent('click', 'ナビゲーション', '特定商取引法ページ_ワーキングホリデー制度とは', 1);
  };

  // ロゴクリック時のイベント計測
  const handleLogoClick = () => {
    trackEvent('click', 'ナビゲーション', '特定商取引法ページ_ロゴクリック', 1);
  };

  return (
    <>
      <header className="App-header stylish-header main-header">
        <div className="header-container">
          <div className="header-logo">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLogoClick}>
              <span className="logo-text">
                <span className="logo-main">ワーホリ</span>
                <span className="logo-sub">パス</span>
              </span>
              <span className="logo-subtitle">Working Holiday Portal</span>
            </Link>
          </div>
          <nav className="header-nav">
            <a href="/about-workingholiday" className="nav-link" onClick={handleNavLinkClick}>
              ワーホリとは
            </a>
          </nav>
        </div>
        <div className="header-gradient-bar" />
      </header>
      <button
        onClick={handleBackClick}
        className="fixed-back-button"
        aria-label="戻る"
      >
        ← 戻る
      </button>
      <main style={{
        maxWidth: 800,
        margin: '3.5em auto 2.5em auto',
        padding: '2.5em 1.5em 2em 1.5em',
        background: '#fff',
        borderRadius: 22,
        boxShadow: '0 6px 32px rgba(37,99,235,0.10)',
        minHeight: 380,
        fontFamily: 'Noto Sans JP',
        border: '1.5px solid #e5eaf3',
      }}>
        <h1 style={{ 
          fontSize: '2.2rem', 
          fontWeight: 800, 
          color: '#222', 
          margin: '0 0 1em 0', 
          fontFamily: 'Kiwi Maru, Noto Sans JP, sans-serif', 
          letterSpacing: '0.04em', 
          textAlign: 'center',
          lineHeight: 1.3
        }}>
          特定商取引法に基づく表記
        </h1>
        
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          padding: '1.5em',
          borderRadius: 12,
          marginBottom: '2.5em',
          border: '1px solid #bae6fd'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.8, 
            color: '#0c4a6e', 
            margin: 0,
            fontWeight: 500
          }}>
            ワーホリパスでは、特定商取引法に基づき、以下の情報を開示しています。<br />
            サービスをご利用いただく前に、必ずご確認ください。
          </p>
        </div>

        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#2563eb', 
            margin: '0 0 1.2em 0',
            borderBottom: '3px solid #2563eb',
            paddingBottom: '0.5em'
          }}>
            事業者情報
          </h2>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1.5em', 
            borderRadius: 12,
            border: '1px solid #e9ecef'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333', width: '30%' }}>サービス名</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>ワーホリパス</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>所在地</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>求めがあれば遅滞なく開示します</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>電話番号</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>求めがあれば遅滞なく開示します</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>メールアドレス</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>takayaz0307@gmail.com</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>代表者</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>森 貴哉</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#2563eb', 
            margin: '0 0 1.2em 0',
            borderBottom: '3px solid #2563eb',
            paddingBottom: '0.5em'
          }}>
            販売条件
          </h2>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1.5em', 
            borderRadius: 12,
            border: '1px solid #e9ecef'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333', width: '30%' }}>追加手数料</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>なし</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>交換および返品</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>デジタルサービスのため、返品・交換はできません</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>配達時間</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>決済完了後、即座にDiscord招待リンクをお送りします</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>受け付け可能な決済手段</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>クレジットカード決済</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>決済期間</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>クレジットカード決済の場合はただちに処理されます</td>
                </tr>
                <tr>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>値</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>¥550/月（税込）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={{ 
          background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)', 
          padding: '1.5em', 
          borderRadius: 12,
          border: '1px solid #fecaca',
          marginTop: '2em'
        }}>
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: 1.6, 
            color: '#991b1b', 
            margin: 0,
            fontWeight: 500
          }}>
            ※ 上記の情報は2025年1月時点のものです。最新の情報は各サービス提供時にご確認ください。<br />
            ※ ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
      </main>
    </>
  );
} 