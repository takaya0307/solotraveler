"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import finlandData from "../../../db.json";

export default function FinlandDetailPage() {
  const router = useRouter();
  const country = finlandData.countries.find(c => c.id === "finland")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ フィンランド比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `フィンランドワーホリの費用、条件、おすすめエージェントを徹底比較。自然とデザイン、教育水準の高さが魅力の北欧の国でワーホリ体験。`);
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
            自然とデザイン、教育水準の高さが魅力の北欧の国
          </p>
        </div>

        {/* 滞在情報カード */}
        <div className="info-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            padding: '2rem',
            borderRadius: 12,
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1rem 0', color: '#1e293b' }}>対象年齢</h3>
            <p style={{ fontSize: '1.1rem', margin: 0, color: '#475569' }}>{country.ageRange}</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            padding: '2rem',
            borderRadius: 12,
            border: '1px solid #bae6fd',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1rem 0', color: '#0c4a6e' }}>滞在期間</h3>
            <p style={{ fontSize: '1.1rem', margin: 0, color: '#0369a1' }}>{country.stayPeriod}</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            padding: '2rem',
            borderRadius: 12,
            border: '1px solid #fcd34d',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1rem 0', color: '#92400e' }}>最低賃金</h3>
            <p style={{ fontSize: '1.1rem', margin: 0, color: '#b45309' }}>{country.minWage}</p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
            padding: '2rem',
            borderRadius: 12,
            border: '1px solid #a7f3d0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1rem 0', color: '#065f46' }}>定員数</h3>
            <p style={{ fontSize: '1.1rem', margin: 0, color: '#047857' }}>{country.quota}</p>
          </div>
        </div>

        {/* おすすめポイント */}
        <div style={{
          background: 'linear-gradient(135deg, #fafdff 0%, #f3f6fa 100%)',
          padding: '2.5rem',
          borderRadius: 16,
          border: '1.5px solid #e5eaf3',
          marginBottom: '3rem',
          boxShadow: '0 4px 16px rgba(37,99,235,0.08)'
        }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 1.5rem 0', color: '#1e293b' }}>フィンランドワーホリのおすすめポイント</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, margin: 0, color: '#374151' }}>{country.recommendation}</p>
        </div>

        {/* 都市一覧 */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 2rem 0', color: '#1e293b', textAlign: 'center' }}>おすすめ都市</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {country.cities.map((city: any) => (
              <div key={city.id} style={{
                background: '#fff',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                <div style={{
                  height: '200px',
                  backgroundImage: `url('${city.imageUrl}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '1.5rem',
                    color: 'white'
                  }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>{city.nameJa}</h3>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ fontSize: '1rem', lineHeight: 1.6, margin: '0 0 1rem 0', color: '#374151' }}>{city.description}</p>
                  <div style={{ marginTop: '1rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: '#1e293b' }}>おすすめポイント：</h4>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#6b7280' }}>
                      {city.tips.map((tip: string, index: number) => (
                        <li key={index} style={{ marginBottom: '0.3rem' }}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 注意事項 */}
        <div style={{
          background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
          padding: '2rem',
          borderRadius: 12,
          border: '1px solid #fecaca',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '0 0 1rem 0', color: '#991b1b' }}>⚠️ 注意事項</h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#7f1d1d', lineHeight: 1.6 }}>
            <li>フィンランド語の基本的な知識があると生活がスムーズです</li>
            <li>冬は非常に寒く、日照時間が短くなります</li>
            <li>物価は日本と比較して高めです</li>
            <li>事前に十分な資金準備が必要です</li>
          </ul>
        </div>
      </main>
    </>
  );
} 