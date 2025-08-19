"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CountryDetailLayoutProps {
  country: {
    id: string;
    nameJa: string;
    imageUrl: string;
    minWage: string;
    ageRange: string;
    quota: string;
    cities: Array<{
      id: string;
      nameJa: string;
      description: string;
      imageUrl: string;
    }>;
  };
  pageTitle: string;
  pageDescription: string;
  countryDescription: string;
  countryFeatures: Array<{
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  }>;
  countryAtmosphere: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  workingHolidayReasons: string[];
  englishLearningEnvironment: string[];
  outdoorLifeDescription: string;
  recommendedFor: Array<{
    title: string;
    description: string;
    color: string;
    borderColor: string;
    bgColor: string;
    icon: string;
  }>;
}

export default function CountryDetailLayout({
  country,
  pageTitle,
  pageDescription,
  countryDescription,
  countryFeatures,
  countryAtmosphere,
  workingHolidayReasons,
  englishLearningEnvironment,
  outdoorLifeDescription,
  recommendedFor
}: CountryDetailLayoutProps) {
  const router = useRouter();

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
          borderRadius: 16,
          padding: '5rem 3rem',
          color: 'white',
          textAlign: 'center',
          marginBottom: '4rem',
          position: 'relative',
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
        }}>
          <h1 style={{ 
            fontSize: '2.8rem', 
            fontWeight: 800, 
            margin: '0 0 1.5rem 0',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '0.02em',
            lineHeight: 1.2
          }}>
            {pageTitle}
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            margin: 0,
            opacity: 0.95,
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            {pageDescription}
          </p>
        </div>

        {/* 滞在情報カード */}
        <div className="info-cards-grid" style={{
          marginBottom: '5rem'
        }}>
          <div className="info-card" style={{
            background: '#1E4E8C',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: 16,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(30, 78, 140, 0.3)',
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
            background: '#1E4E8C',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: 16,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(30, 78, 140, 0.3)',
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
            background: '#1E4E8C',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: 16,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(30, 78, 140, 0.3)',
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
              <p style={{ margin: '0 0 0.3rem 0', fontSize: '1.8rem', fontWeight: 800 }}>最大1年3ヶ月</p>
              <p style={{ margin: 0, fontSize: '1rem', fontWeight: 400, opacity: 0.8 }}>（条件あり）</p>
            </div>
          </div>
          
          <div className="info-card" style={{
            background: '#1E4E8C',
            color: 'white',
            padding: '2.5rem 2rem',
            borderRadius: 16,
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(30, 78, 140, 0.3)',
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
          
          {/* 国の魅力セクション */}
          <section style={{ 
            marginBottom: '5rem',
            background: '#F0F4F8',
            padding: '3rem',
            borderRadius: '16px',
            border: '1px solid #E2E8F0'
          }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              fontWeight: 800, 
              color: '#1E4E8C', 
              margin: '0 0 3rem 0',
              borderBottom: '3px solid #3A7DFF',
              paddingBottom: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                color: '#1E4E8C'
              }}>
                <span style={{ color: '#FF6B35' }}>🌟</span> {country.nameJa}の魅力
              </span>
            </h2>
            
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '2.5rem', color: '#1F2937', fontSize: '1.15rem' }}>
                {countryDescription}
              </p>
              
              {/* 国の特徴写真 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {countryFeatures.map((feature, index) => (
                  <div key={index} style={{
                    background: `url("${feature.imageUrl}")`,
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
                      <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 600 }}>{feature.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>{feature.description}</p>
                    </div>
                  </div>
                ))}
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
                {countryAtmosphere.map((item, index) => (
                  <div key={index} style={{
                    background: '#F5F7FA',
                    padding: '2rem',
                    borderRadius: 12,
                    border: '1px solid #3A7DFF',
                    boxShadow: '0 4px 15px rgba(58, 125, 255, 0.2)'
                  }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1E4E8C', margin: '0 0 1rem 0' }}>
                      {item.icon} {item.title}
                    </h4>
                    <p style={{ margin: 0, color: '#374151', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                ))}
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
                {workingHolidayReasons.map((reason, index) => (
                  <li key={index} style={{ marginBottom: '1rem' }}>
                    {reason}
                  </li>
                ))}
              </ul>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1f2937', margin: '3rem 0 1.5rem 0' }}>
                📚 英語学習の環境
              </h3>
              <ul style={{ 
                marginBottom: '2.5rem', 
                color: '#4b5563',
                paddingLeft: '2rem',
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}>
                {englishLearningEnvironment.map((item, index) => (
                  <li key={index} style={{ marginBottom: '1rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1f2937', margin: '3rem 0 1.5rem 0' }}>
                🏃‍♂️ アウトドアライフ
              </h3>
              <p style={{ marginBottom: '2.5rem', color: '#4b5563', fontSize: '1.15rem' }}>
                {outdoorLifeDescription}
              </p>
            </div>
          </section>

          {/* 都市一覧セクション */}
          <section style={{ 
            marginBottom: '5rem',
            background: '#F8FAFC',
            padding: '3rem',
            borderRadius: '16px',
            border: '1px solid #E2E8F0'
          }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              fontWeight: 800, 
              color: '#1E4E8C', 
              margin: '0 0 3rem 0',
              borderBottom: '3px solid #3A7DFF',
              paddingBottom: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                color: '#1E4E8C'
              }}>
                <span style={{ color: '#3A7DFF' }}>🏙️</span> {country.nameJa}の主要都市
              </span>
            </h2>
            
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '3rem', color: '#1F2937', fontSize: '1.15rem' }}>
                {country.nameJa}には様々な魅力を持つ都市があります。それぞれの都市には独自の特徴があり、自分のライフスタイルや目的に合った都市を選ぶことができます。
              </p>
              
              {/* 都市カードグリッド */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {country.cities.map((city) => (
                  <div key={city.id} style={{
                    background: 'white',
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    border: '1px solid #e5e7eb',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                  }}>
                    <div style={{
                      background: `url('${city.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '200px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.6))'
                      }} />
                      <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        color: 'white'
                      }}>
                        <h3 style={{ 
                          margin: '0 0 0.5rem 0', 
                          fontSize: '1.4rem', 
                          fontWeight: 500,
                          textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                          color: 'white'
                        }}>
                          {city.nameJa}
                        </h3>
                      </div>
                    </div>
                    
                    <div style={{ padding: '1.5rem' }}>
                      <p style={{ 
                        margin: '0 0 0 0', 
                        color: '#374151', 
                        lineHeight: 1.6,
                        fontSize: '1rem',
                        fontWeight: 500
                      }}>
                        {city.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* こんな人におすすめセクション */}
          <section style={{ 
            marginBottom: '5rem',
            background: 'white',
            padding: '3rem',
            borderRadius: '16px',
            border: '1px solid #E5E7EB'
          }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              fontWeight: 800, 
              color: '#1E4E8C', 
              margin: '0 0 3rem 0',
              borderBottom: '3px solid #3A7DFF',
              paddingBottom: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                color: '#1E4E8C'
              }}>
                <span style={{ color: '#FF6B35' }}>🎯</span> こんな人におすすめ
              </span>
            </h2>
            
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2rem',
                width: '100%',
                overflowX: 'auto',
                paddingBottom: '1rem'
              }}>
                {recommendedFor.map((item, index) => (
                  <div key={index} style={{
                    background: item.bgColor,
                    padding: '2rem',
                    borderRadius: 16,
                    border: `2px solid ${item.borderColor}`,
                    boxShadow: `0 8px 25px ${item.color}20`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    minHeight: '240px',
                    width: '320px',
                    flexShrink: 0
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 12px 35px ${item.color}40`;
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `0 8px 25px ${item.color}20`;
                  }}>
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 700, 
                      color: item.color, 
                      margin: '0 0 12px 0',
                      lineHeight: 1.4,
                      whiteSpace: 'nowrap'
                    }}>
                      {item.icon} {item.title}
                    </h3>
                    <p style={{ 
                      margin: 0, 
                      color: '#374151', 
                      lineHeight: 1.6,
                      fontSize: '1rem'
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 無料相談セクション */}
          <section style={{ 
            background: '#F0F4F8',
            padding: '4rem 3rem',
            borderRadius: 16,
            border: '1px solid #3A7DFF',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(58, 125, 255, 0.2)',
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
              color: '#1E4E8C',
              position: 'relative',
              zIndex: 1
            }}>
              <span style={{ color: '#FF6B35' }}>💬</span> 無料相談はこちら
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              margin: '0 0 3rem 0', 
              color: '#374151',
              position: 'relative',
              zIndex: 1,
              lineHeight: 1.6
            }}>
              ワーキングホリデーについて詳しく知りたい方、不安なことがある方はお気軽にご相談ください。
            </p>
            <button 
              style={{
                background: '#FF6B35',
                color: 'white',
                border: 'none',
                padding: '1.2rem 3rem',
                borderRadius: 50,
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                position: 'relative',
                zIndex: 1,
                minWidth: '200px',
                minHeight: '50px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 107, 53, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.4)';
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