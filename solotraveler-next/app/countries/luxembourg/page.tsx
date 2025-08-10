"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import luxembourgData from "../../../db.json";

export default function LuxembourgDetailPage() {
  const router = useRouter();
  const country = luxembourgData.countries.find(c => c.id === "luxembourg")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ ルクセンブルク比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `ルクセンブルクワーホリの費用、条件、おすすめエージェントを徹底比較。小さな国ながら多文化が共存する国際的な環境でワーホリ体験。`);
    }
  }, []);

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
        onClick={() => router.push("/")}
        className="fixed-back-button"
        aria-label="戻る"
      >
        ← 戻る
      </button>

      <main style={{
        maxWidth: 1200,
        margin: '3.5em auto 2.5em auto',
        padding: '3rem 2rem',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        minHeight: 380,
        fontFamily: 'Noto Sans JP',
        border: '1px solid #e5e7eb',
      }}>
        
        {/* ヒーローセクション */}
        <div style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${country.imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 12,
          padding: '5rem 3rem',
          color: 'white',
          textAlign: 'center',
          marginBottom: '4rem',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}>
          <h1 style={{ 
            fontSize: '2.8rem', 
            fontWeight: 800, 
            margin: '0 0 1.5rem 0',
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
            letterSpacing: '0.02em',
            lineHeight: 1.2
          }}>
            {country.nameJa}ワーキングホリデーの魅力
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            margin: 0,
            opacity: 0.95,
            textShadow: '0 1px 2px rgba(0,0,0,0.4)',
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            小さな国ながら多文化が共存する国際的な環境
          </p>
        </div>

        {/* 滞在情報カード */}
        <div className="info-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '2rem',
            borderRadius: 12,
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem' }}>年齢制限</h3>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500 }}>{country.ageRange}</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            padding: '2rem',
            borderRadius: 12,
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem' }}>滞在期間</h3>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500 }}>{country.stayPeriod}</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            padding: '2rem',
            borderRadius: 12,
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem' }}>最低賃金</h3>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500 }}>{country.minWage}</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            padding: '2rem',
            borderRadius: 12,
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem' }}>年間枠</h3>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500 }}>{country.quota}</p>
          </div>
        </div>

        {/* おすすめポイント */}
        <div style={{
          background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
          padding: '2.5rem',
          borderRadius: 12,
          marginBottom: '4rem',
          border: '1px solid #f0f0f0'
        }}>
          <h2 style={{ 
            margin: '0 0 1.5rem 0', 
            fontSize: '1.8rem',
            color: '#2d3748',
            textAlign: 'center'
          }}>
            🌟 {country.nameJa}ワーホリのおすすめポイント
          </h2>
          <p style={{ 
            margin: 0, 
            fontSize: '1.1rem', 
            lineHeight: 1.8,
            color: '#4a5568',
            textAlign: 'center'
          }}>
            {country.recommendation}
          </p>
        </div>

        {/* 都市情報 */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            margin: '0 0 2rem 0', 
            fontSize: '2rem',
            color: '#2d3748',
            textAlign: 'center'
          }}>
            🏙️ おすすめ都市
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {country.cities.map((city) => (
              <div key={city.id} style={{
                background: 'white',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{
                  height: '200px',
                  background: `url('${city.imageUrl}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    margin: '0 0 1rem 0', 
                    fontSize: '1.4rem',
                    color: '#2d3748'
                  }}>
                    {city.nameJa}
                  </h3>
                  <p style={{ 
                    margin: '0 0 1rem 0', 
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#4a5568'
                  }}>
                    {city.description}
                  </p>
                  <div>
                    <h4 style={{ 
                      margin: '0 0 0.5rem 0', 
                      fontSize: '1rem',
                      color: '#2d3748'
                    }}>
                      おすすめポイント：
                    </h4>
                    <ul style={{ 
                      margin: 0, 
                      paddingLeft: '1.2rem',
                      color: '#4a5568'
                    }}>
                      {city.tips.map((tip, index) => (
                        <li key={index} style={{ marginBottom: '0.3rem' }}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": `${country.nameJa}ワーキングホリデー`,
              "description": `${country.nameJa}ワーホリの費用、条件、おすすめエージェントを徹底比較。${country.recommendation}`,
              "image": country.imageUrl,
              "url": `https://your-domain.com/countries/${country.id}`,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": country.countryCode
              }
            })
          }}
        />
      </main>
    </>
  );
} 