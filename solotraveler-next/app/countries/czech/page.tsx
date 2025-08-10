"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import czechData from "../../../db.json";

export default function CzechDetailPage() {
  const router = useRouter();
  const country = czechData.countries.find(c => c.id === "czech")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ チェコ比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `チェコワーホリの費用、条件、おすすめエージェントを徹底比較。中世の街並みとビール文化の国でワーホリ体験。`);
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
            歴史と文化が息づく中欧の美しい国
          </p>
        </div>

        {/* 滞在情報カード - ビジュアルヒエラルキー強化 */}
        <div className="info-cards-grid" style={{
          marginBottom: '5rem'
        }}>
          <div className="info-card" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: 16,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
            border: 'none',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              💰
            </div>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 600, opacity: 0.9 }}>最低賃金</h3>
            <p style={{ margin: 0, fontSize: '1.8rem', fontWeight: 800 }}>{country.minWage}</p>
          </div>
          
          <div className="info-card" style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: 16,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(240, 147, 251, 0.3)',
            border: 'none',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              👥
            </div>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 600, opacity: 0.9 }}>対象年齢</h3>
            <p style={{ margin: 0, fontSize: '1.8rem', fontWeight: 800 }}>{country.ageRange}</p>
          </div>
          
          <div className="info-card" style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: 16,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(79, 172, 254, 0.3)',
            border: 'none',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              ⏰
            </div>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 600, opacity: 0.9 }}>滞在期間</h3>
            <div style={{ margin: 0 }}>
              <p style={{ margin: '0 0 0.3rem 0', fontSize: '1.8rem', fontWeight: 800 }}>最大1年間</p>
              <p style={{ margin: 0, fontSize: '1rem', fontWeight: 400, opacity: 0.8 }}>（延長不可）</p>
            </div>
          </div>
          
          <div className="info-card" style={{
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: 16,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(67, 233, 123, 0.3)',
            border: 'none',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              🎯
            </div>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 600, opacity: 0.9 }}>定員数</h3>
            <p style={{ margin: 0, fontSize: '1.8rem', fontWeight: 800 }}>{country.quota}</p>
          </div>
        </div>

        {/* 記事コンテンツ */}
        <article style={{ lineHeight: 1.8, color: '#374151' }}>
          
          {/* チェコの魅力セクション */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              fontWeight: 800, 
              color: '#1e40af', 
              margin: '0 0 3rem 0',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                🌟 チェコの魅力
              </span>
            </h2>
            
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '2.5rem', color: '#4b5563', fontSize: '1.15rem' }}>
                チェコは、中欧に位置する歴史と文化が豊かな国。プラハをはじめとする美しい街並み、世界最高品質のビール、そして親しみやすい人々が魅力です。物価も比較的安く、ヨーロッパ各国へのアクセスも良好で、文化や芸術を楽しみたい方に最適な環境です。
              </p>
              
              {/* ワーホリ生活のイメージ写真 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                <div style={{
                  background: 'url("https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?w=600&auto=format&fit=crop&q=60")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '250px',
                  borderRadius: 12,
                  position: 'relative',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: 'white',
                    padding: '1.5rem',
                    borderRadius: '0 0 12px 12px'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 600 }}>歴史的建造物</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>プラハ城やカレル橋の美しい建築</p>
                  </div>
                </div>
                
                <div style={{
                  background: 'url("https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&auto=format&fit=crop&q=60")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '250px',
                  borderRadius: 12,
                  position: 'relative',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: 'white',
                    padding: '1.5rem',
                    borderRadius: '0 0 12px 12px'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 600 }}>ビール文化</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>世界最高品質のチェコビール</p>
                  </div>
                </div>
                
                <div style={{
                  background: 'url("https://images.unsplash.com/photo-1664658366549-3960633f6e0b?w=600&auto=format&fit=crop&q=60")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '250px',
                  borderRadius: 12,
                  position: 'relative',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: 'white',
                    padding: '1.5rem',
                    borderRadius: '0 0 12px 12px'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 600 }}>カフェ文化</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>伝統的なカフェでのゆったりとした時間</p>
                  </div>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1f2937', margin: '3rem 0 1.5rem 0' }}>
                🌍 その国の雰囲気
              </h3>
              
              {/* 情報カード */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                  padding: '2rem',
                  borderRadius: 12,
                  border: '1px solid #fbbf24',
                  boxShadow: '0 4px 15px rgba(251, 191, 36, 0.2)'
                }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#92400e', margin: '0 0 1rem 0' }}>
                    🌤️ 気候
                  </h4>
                  <p style={{ margin: 0, color: '#78350f', lineHeight: 1.6 }}>
                    四季がはっきりしており、夏は温暖、冬は寒い。春と秋は過ごしやすく、美しい季節の変化を楽しめます。プラハは比較的温暖で、年間を通じて観光に適しています。
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  padding: '2rem',
                  borderRadius: 12,
                  border: '1px solid #60a5fa',
                  boxShadow: '0 4px 15px rgba(96, 165, 250, 0.2)'
                }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e40af', margin: '0 0 1rem 0' }}>
                    🛡️ 治安
                  </h4>
                  <p style={{ margin: 0, color: '#1e3a8a', lineHeight: 1.6 }}>
                    ヨーロッパの中でも比較的安全な国です。観光客が多い地域では基本的な注意が必要ですが、一般的に安心して生活できる環境です。
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  padding: '2rem',
                  borderRadius: 12,
                  border: '1px solid #4ade80',
                  boxShadow: '0 4px 15px rgba(74, 222, 128, 0.2)'
                }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#166534', margin: '0 0 1rem 0' }}>
                    😊 人々の性格
                  </h4>
                  <p style={{ margin: 0, color: '#14532d', lineHeight: 1.6 }}>
                    チェコ人は親切で温かい性格の人が多いです。伝統を大切にし、文化や芸術に深い関心を持っています。外国人にも友好的で、交流しやすい環境です。
                  </p>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1f2937', margin: '3rem 0 1.5rem 0' }}>
                🎯 ワーキングホリデーに向いている理由
              </h3>
              <ul style={{ 
                marginBottom: '2.5rem', 
                color: '#4b5563',
                paddingLeft: '2rem',
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>歴史と文化：</strong>豊富な歴史的建造物と文化遺産を身近に体験できる
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>物価の安さ：</strong>ヨーロッパの中でも比較的物価が安く、生活しやすい
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>ヨーロッパへのアクセス：</strong>周辺国への旅行が便利で、ヨーロッパ全体を体験できる
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>ビール文化：</strong>世界最高品質のビールを楽しめる独特な文化がある
                </li>
              </ul>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1f2937', margin: '3rem 0 1.5rem 0' }}>
                📚 チェコ語学習の環境
              </h3>
              <ul style={{ 
                marginBottom: '2.5rem', 
                color: '#4b5563',
                paddingLeft: '2rem',
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>英語も通じる：</strong>観光地や若い世代では英語が通じるため、チェコ語ができなくても生活可能
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>チェコ語の学習：</strong>現地でチェコ語を学ぶことで、より深い文化体験ができる
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>多言語環境：</strong>ヨーロッパの中心に位置し、様々な言語に触れる機会がある
                </li>
              </ul>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1f2937', margin: '3rem 0 1.5rem 0' }}>
                🏛️ 文化・芸術体験
              </h3>
              <p style={{ marginBottom: '2.5rem', color: '#4b5563', fontSize: '1.15rem' }}>
                プラハをはじめとする美しい街並み、世界遺産の歴史的建造物、そして豊富な芸術文化を体験できます。オペラやクラシック音楽、美術館など、文化的な体験が豊富です。
              </p>
            </div>
          </section>

          {/* こんな人におすすめセクション */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              fontWeight: 800, 
              color: '#1e40af', 
              margin: '0 0 3rem 0',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                🎯 こんな人におすすめ
              </span>
            </h2>
            
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem',
                width: '100%'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                  padding: '2rem',
                  borderRadius: 16,
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '240px',
                  width: '100%'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 700, 
                    color: '#1f2937', 
                    margin: '0 0 12px 0',
                    lineHeight: 1.4
                  }}>
                    🏛️ 歴史・文化好き
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#4b5563', 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    豊富な歴史的建造物と文化遺産が好きな人には最高の環境。プラハ城やカレル橋など、世界遺産を身近に体験できます。
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                  padding: '2rem',
                  borderRadius: 16,
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '240px',
                  width: '100%'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 700, 
                    color: '#1f2937', 
                    margin: '0 0 12px 0',
                    lineHeight: 1.4
                  }}>
                    🍺 ビール好き
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#4b5563', 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    世界最高品質のチェコビールが好きな人には最高の環境。伝統的なビール文化を体験し、様々な種類のビールを楽しめます。
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
                  padding: '2rem',
                  borderRadius: 16,
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '240px',
                  width: '100%'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 700, 
                    color: '#1f2937', 
                    margin: '0 0 12px 0',
                    lineHeight: 1.4
                  }}>
                    🎨 芸術好き
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#4b5563', 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    オペラ、クラシック音楽、美術館など、豊富な芸術文化を体験できます。文化的な刺激を求める人に最適です。
                  </p>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                  padding: '2rem',
                  borderRadius: 16,
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '240px',
                  width: '100%'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 700, 
                    color: '#1f2937', 
                    margin: '0 0 12px 0',
                    lineHeight: 1.4
                  }}>
                    💰 予算を抑えたい
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#4b5563', 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    ヨーロッパの中でも比較的物価が安く、予算を抑えてヨーロッパ体験をしたい人に最適です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTAセクション - 改善されたボタン */}
          <section style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '4rem 3rem',
            borderRadius: 16,
            border: '1px solid #e2e8f0',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '3rem'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '150px',
              height: '150px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '50%'
            }} />
            
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 800, 
              margin: '0 0 1.5rem 0', 
              color: 'white',
              position: 'relative',
              zIndex: 1
            }}>
              🚀 チェコでワーホリを始めよう
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              margin: '0 0 3rem 0', 
              color: 'rgba(255,255,255,0.9)',
              position: 'relative',
              zIndex: 1,
              lineHeight: 1.6
            }}>
              歴史と文化、美しい街並み、そして世界最高品質のビール。チェコは文化体験に最適な国です。
            </p>
            <button 
              onClick={() => router.push("/")}
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                border: 'none',
                padding: '1.2rem 3rem',
                borderRadius: 50,
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(240, 147, 251, 0.4)',
                position: 'relative',
                zIndex: 1,
                minWidth: '200px',
                minHeight: '50px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(240, 147, 251, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(240, 147, 251, 0.4)';
              }}
            >
              🌍 他の国も見てみる
            </button>
          </section>

          {/* 無料相談セクション */}
          <section style={{ 
            background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            padding: '4rem 3rem',
            borderRadius: 16,
            border: '1px solid #fbbf24',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-30px',
              left: '-30px',
              width: '120px',
              height: '120px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '50%'
            }} />
            
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 800, 
              margin: '0 0 1.5rem 0', 
              color: '#92400e',
              position: 'relative',
              zIndex: 1
            }}>
              💬 無料相談はこちら
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              margin: '0 0 3rem 0', 
              color: '#78350f',
              position: 'relative',
              zIndex: 1,
              lineHeight: 1.6
            }}>
              ワーキングホリデーについて詳しく知りたい方、不安なことがある方はお気軽にご相談ください。
            </p>
            <button 
              onClick={() => router.push("/lp")}
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                border: 'none',
                padding: '1.2rem 3rem',
                borderRadius: 50,
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(240, 147, 251, 0.4)',
                position: 'relative',
                zIndex: 1,
                minWidth: '200px',
                minHeight: '50px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(240, 147, 251, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(240, 147, 251, 0.4)';
              }}
            >
              📞 無料相談を始める
            </button>
          </section>
        </article>
      </main>
    </>
  );
} 