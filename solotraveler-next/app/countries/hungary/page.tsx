"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import hungaryData from "../../../db.json";

export default function HungaryDetailPage() {
  const router = useRouter();
  const country = hungaryData.countries.find(c => c.id === "hungary")!;

  // ページタイトルとメタディスクリプションの最適化
  useEffect(() => {
    document.title = `ワーホリ ハンガリー比較｜費用・条件・おすすめエージェントを徹底比較`;
    
    // meta descriptionの更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `ハンガリーワーホリの費用、条件、おすすめエージェントを徹底比較。温泉と歴史、音楽の国でワーホリ体験。`);
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
            ドナウの輝きと温泉文化が息づく中欧の国
          </p>
        </div>

        {/* 滞在情報カード */}
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
              <p style={{ margin: '0 0 0.3rem 0', fontSize: '1.8rem', fontWeight: 800 }}>{country.stayPeriod || '最大1年間'}</p>
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
          
          {/* ハンガリーの魅力セクション */}
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
                🌟 ハンガリーの魅力
              </span>
            </h2>
            
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '2.5rem', color: '#4b5563', fontSize: '1.15rem' }}>
                ハンガリーは、ドナウ川が流れる美しい街並みと温泉文化が魅力の国。首都ブダペストは「ドナウの真珠」と呼ばれ、歴史的建造物やカフェ文化、夜景が有名です。物価は比較的安く、ヨーロッパ各国へのアクセスも良好。文化や芸術を楽しむのに最適な環境です。
              </p>
              
              {/* ワーホリ生活のイメージ写真 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                <div style={{
                  background: 'url("https://images.unsplash.com/photo-1616432902940-b7a1acbc60b3?w=600&auto=format&fit=crop&q=60")',
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
                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>国会議事堂やくさり橋の壮麗な景観</p>
                  </div>
                </div>
                
                <div style={{
                  background: 'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=60")',
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
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 600 }}>温泉文化</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>セーチェーニ温泉などの伝統的な温泉</p>
                  </div>
                </div>
                
                <div style={{
                  background: 'url("https://images.unsplash.com/photo-1526483360412-f4dbaf036963?w=600&auto=format&fit=crop&q=60")',
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
                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>歴史あるカフェでのくつろぎ時間</p>
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
                    四季がはっきりしており、夏は暑く乾燥、冬は寒くなります。春と秋は過ごしやすく、観光に適しています。
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
                    観光地ではスリなどの軽犯罪に注意が必要ですが、一般的には比較的安全で、基本的な注意で快適に過ごせます。
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
                    ハンガリーの人々は温かく親しみやすい性格。伝統と家族を大切にし、音楽や芸術にも関心が高いです。
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
                  <strong>温泉文化：</strong>セーチェーニ温泉など、疲れを癒やせる温泉が豊富
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>物価の安さ：</strong>西欧に比べて生活コストが抑えやすい
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>ヨーロッパ各国へのアクセス：</strong>周辺国への旅行が便利で、週末旅行も楽しめる
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>文化体験：</strong>音楽、建築、カフェ文化など、多彩な文化に触れられる
                </li>
              </ul>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1f2937', margin: '3rem 0 1.5rem 0' }}>
                📚 ハンガリー語学習の環境
              </h3>
              <ul style={{ 
                marginBottom: '2.5rem', 
                color: '#4b5563',
                paddingLeft: '2rem',
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>英語も通じる：</strong>観光地や若い世代では英語が通じ、生活のハードルは高くない
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>ハンガリー語の学習：</strong>現地語を学ぶことで、より深い交流と体験が可能
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>多言語環境：</strong>中欧の中心に位置し、様々な言語や文化に触れられる
                </li>
              </ul>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1f2937', margin: '3rem 0 1.5rem 0' }}>
                🎻 文化・芸術体験
              </h3>
              <p style={{ marginBottom: '2.5rem', color: '#4b5563', fontSize: '1.15rem' }}>
                ドナウ川沿いの夜景、壮麗な建築、美しい音楽文化、そしてカフェ文化。歴史と芸術が調和するハンガリーならではの体験ができます。
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
                    🛁 温泉好き
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#4b5563', 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    歴史ある温泉に癒やされたい人に最適。セーチェーニ温泉などの大規模温泉を満喫できます。
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
                    🎼 クラシック音楽・芸術好き
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#4b5563', 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    音楽ホールや美術館が充実。文化的な体験を深めたい人に向いています。
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
                    💰 コスパ重視
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#4b5563', 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    西欧より物価が低く、生活コストを抑えながらヨーロッパ生活を楽しみたい人に。
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
                    ✈️ 旅行好き
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    color: '#4b5563', 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    中欧の拠点として、近隣諸国への週末旅行を楽しみたい人に最適です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTAセクション */}
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
              🚀 ハンガリーでワーホリを始めよう
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              margin: '0 0 3rem 0', 
              color: 'rgba(255,255,255,0.9)',
              position: 'relative',
              zIndex: 1,
              lineHeight: 1.6
            }}>
              温泉、歴史、音楽、夜景。文化体験が詰まったハンガリーでの生活を始めましょう。
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