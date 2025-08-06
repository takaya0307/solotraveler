"use client";
import React, { useState, useEffect, Suspense } from "react";
import { WorkingHolidayCountry, WorkingHolidayCity } from "../types/types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

function CityBoardModal({ city, countryId, onClose }: { city: WorkingHolidayCity, countryId: string, onClose: () => void }) {
  const cityId = city.id;
  const [posts, setPosts] = useState<any[]>([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posting, setPosting] = useState(false);
  const [adminPw, setAdminPw] = useState("");
  const [adminMode, setAdminMode] = useState(false);
  useEffect(() => {
    fetch(`/api/boards/${cityId}`)
      .then(res => res.json())
      .then(setPosts)
      .finally(() => setLoading(false));
  }, [cityId]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      setError("投稿内容を入力してください");
      return;
    }
    setPosting(true);
    setError("");
    try {
      const res = await fetch(`/api/boards/${cityId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
      });
      if (res.ok) {
        setContent("");
        // 投稿後に再取得
        const postsRes = await fetch(`/api/boards/${cityId}`);
        const postsData = await postsRes.json();
        setPosts(postsData);
      } else {
        const data = await res.json();
        setError(data.error || `投稿に失敗しました (status: ${res.status})`);
      }
    } catch (err: any) {
      setError("ネットワークエラー: " + (err?.message || err));
    }
    setPosting(false);
  };
  // 管理者パスワード入力（フォーム式）
  const [adminInput, setAdminInput] = useState("");
  const [adminError, setAdminError] = useState("");
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminInput) return;
    setAdminPw(adminInput);
    setAdminMode(true);
    setAdminInput("");
    setAdminError("");
  };
  // 投稿削除
  const handleDelete = async (postId: string) => {
    if (!adminPw) return;
    try {
      const res = await fetch(`/api/boards/${cityId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, password: adminPw })
      });
      if (res.ok) {
        setPosts(posts.filter(p => p.id !== postId));
      } else {
        const data = await res.json();
        alert(data.error || "削除に失敗しました");
      }
    } catch (err: any) {
      alert("ネットワークエラー: " + (err?.message || err));
    }
  };
  return (
    <div
      style={{ position: 'fixed', zIndex: 2000, left: 0, top: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.32)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={() => { if (!adminMode) onClose(); }}
    >
      <div
        style={{
          maxWidth: 900,
          width: '96vw',
          minHeight: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'linear-gradient(135deg, #fafdff 0%, #f3f6fa 100%)',
          borderRadius: 18,
          boxShadow: '0 8px 32px 0 rgba(37,99,235,0.10)',
          padding: '2.5em 2em 2em 2em',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          border: '1.5px solid #e5eaf3',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7em' }}>
          <h2 style={{ fontSize: '1.5em', fontWeight: 800, letterSpacing: '0.04em', color: '#2563eb', margin: 0, textShadow: '0 1px 0 #fff' }}>{city.nameJa} 掲示板</h2>
          <button onClick={onClose} style={{ fontSize: 22, background: 'none', border: 'none', cursor: 'pointer', color: '#b0b8c9', marginLeft: 12, borderRadius: 8, padding: '0 0.4em', transition: 'background 0.2s' }} aria-label="閉じる" onMouseOver={e => e.currentTarget.style.background = '#e5eaf3'} onMouseOut={e => e.currentTarget.style.background = 'none'}>×</button>
        </div>
        {/* 管理者ログインフォーム（モーダル内、目立たない） */}
        {!adminMode && (
          <form
            onSubmit={handleAdminLogin}
            style={{
              display: 'flex', alignItems: 'center', gap: 4,
              background: '#e5eaf3',
              borderRadius: 8,
              fontSize: 12,
              padding: '0.2em 0.7em',
              marginBottom: '1.2em',
              width: 'fit-content',
              opacity: 0.6,
              transition: 'opacity 0.2s',
              border: '1px solid #d1d8e6',
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = '1')}
            onMouseOut={e => (e.currentTarget.style.opacity = '0.6')}
          >
            <input
              type="password"
              value={adminInput}
              onChange={e => setAdminInput(e.target.value)}
              placeholder="管理PW"
              style={{ outline: 'none', borderRadius: 8, padding: '0.1em 0.5em', fontSize: 12, background: '#f7fafd', color: '#2563eb', minWidth: 48, border: '1px solid #d1d8e6' }}
            />
            <button type="submit" style={{ background: 'none', border: 'none', color: '#2563eb', fontWeight: 700, cursor: 'pointer', fontSize: 12, padding: 0 }}>OK</button>
          </form>
        )}
        <form onSubmit={handleSubmit} style={{ marginBottom: '2.2em', display: 'flex', gap: '1.2em', alignItems: 'flex-start', background: '#f7fafd', borderRadius: 12, boxShadow: '0 1px 4px rgba(37,99,235,0.04)', padding: '1.2em 1em 1em 1em', border: '1px solid #e5eaf3' }}>
          <textarea
            placeholder="投稿内容を入力..."
            value={content}
            onChange={e => setContent(e.target.value)}
            style={{ flex: 1, padding: '1em 1.2em', borderRadius: 10, border: '1.5px solid #bcd', fontSize: 15, minHeight: 60, resize: 'vertical', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.02)' }}
          />
          <button type="submit" disabled={posting} style={{ height: 44, minWidth: 110, borderRadius: 10, background: posting ? '#bcd' : '#2563eb', color: '#fff', fontWeight: 700, border: 'none', fontSize: 16, cursor: posting ? 'not-allowed' : 'pointer', boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}>
            投稿する
          </button>
          {error && <div style={{ color: '#e11d48', marginTop: 6 }}>{error}</div>}
        </form>
        {/* 管理者ログインボタンは右下に移動 */}
        <div style={{ flex: 1 }}>
          {loading ? (
            <div>読み込み中...</div>
          ) : posts.length === 0 ? (
            <div style={{ color: '#888' }}>まだ投稿がありません</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1em', marginBottom: '1em' }}>
              {posts.map(post => (
                <div key={post.id} style={{ background: '#fff', borderRadius: 10, padding: '1.1em 1.3em', boxShadow: '0 1px 4px rgba(37,99,235,0.06)', display: 'flex', flexDirection: 'column', minHeight: 80, position: 'relative', border: '1px solid #e5eaf3' }}>
                  <div style={{ whiteSpace: 'pre-wrap', marginBottom: 7, fontSize: 15, color: '#222', flex: 1 }}>{post.content}</div>
                  <div style={{ fontSize: '0.91em', color: '#7a869a', marginTop: 'auto', letterSpacing: '0.01em' }}>{new Date(post.createdAt).toLocaleString()}</div>
                  {adminMode && (
                    <button onClick={() => handleDelete(post.id)} style={{ position: 'absolute', right: 12, top: 12, fontSize: 13, color: '#e11d48', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', borderRadius: 6, padding: '0 0.3em', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#fbe9eb'} onMouseOut={e => e.currentTarget.style.background = 'none'}>削除</button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PageComponent() {
  const router = useRouter();
  const [countries, setCountries] = useState<WorkingHolidayCountry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCountry, setSelectedCountry] = useState<WorkingHolidayCountry | null>(null);
  const searchParams = useSearchParams();
  const [boardModalCity, setBoardModalCity] = useState<WorkingHolidayCity|null>(null);
  const [openAccordionCountryIds, setOpenAccordionCountryIds] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/countries")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.countries)) {
          setCountries(data.countries);
          // countryIdクエリがあれば自動選択
          const cid = searchParams.get("countryId");
          if (cid) {
            const found = data.countries.find((c: any) => c.id === cid);
            if (found) setSelectedCountry(found);
          }
        } else if (Array.isArray(data)) {
          setCountries(data);
        } else {
          setCountries([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false);
      });
  }, [searchParams]);

  if (loading) {
    return (
      <div className="App">  
        <main>
          <div className="loading-container">
            <p>データを読み込んでいます...</p>
          </div>
        </main>
      </div>
    );
  }

  // 都市一覧表示
  if (selectedCountry) {
    return (
      <div className="App">
        {/* 戻るボタンを左下に固定表示 */}
        <button
          onClick={() => setSelectedCountry(null)}
          className="fixed-back-button"
          aria-label="戻る"
        >
          ← 戻る
        </button>
        <header 
          className="App-header stylish-header city-list-header"
          style={{
            background: `url('${selectedCountry.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="header-inner refined-header-inner" style={{justifyContent: 'center'}}>
            <h1 className="header-title refined-header-title city-header-title travel-title" style={{margin: '0 auto'}}>{selectedCountry.nameJa}の都市一覧</h1>
          </div>
        </header>
        <main>
          <div className={`city-card-grid ${selectedCountry.cities.length === 2 ? 'two-cities' : ''}`}>
            {selectedCountry.cities.length === 0 ? (
              <div style={{padding: '2em', textAlign: 'center'}}>都市データがありません</div>
            ) : (
              selectedCountry.cities.map((city: WorkingHolidayCity) => (
                <div className="city-card" key={city.id}>
                  <div className="city-card-image" style={{backgroundImage: `url('${city.imageUrl}')`}}>
                    <div className="city-card-title-overlay">
                      <h2 className="city-card-title">{city.nameJa}</h2>
                    </div>
                  </div>
                  <div className="city-card-content">
                    <div
                      className="city-card-description"
                      style={{
                        background: 'linear-gradient(90deg, #fafdff 0%, #eaf1fb 100%)',
                        borderRadius: 12,
                        padding: '1.1em 1.3em',
                        marginBottom: '1.1em',
                        color: '#222',
                        fontWeight: 500,
                        fontSize: 15.5,
                        lineHeight: 1.7,
                        letterSpacing: '0.01em',
                        boxShadow: '0 2px 8px rgba(37,99,235,0.06)',
                        textAlign: 'left',
                      }}
                    >
                      {city.description}
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>
          {boardModalCity && (
            <CityBoardModal city={boardModalCity} countryId={selectedCountry.id} onClose={() => setBoardModalCity(null)} />
          )}
        </main>
      </div>
    );
  }

  // 国一覧表示
  return (
    <div className="App">
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
      <main>
        <div className="card-grid">
          {Array.isArray(countries) && countries.map((country) => (
            <div 
              className="country-card" 
              key={`${country.id}-${openAccordionCountryIds.includes(country.id)}`} 
              style={{cursor: 'default'}}
            >
                <div className="card-image" style={{backgroundImage: `url('${country.imageUrl}')`}}>
                  <div className="card-title-overlay">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                      {country.countryCode && (
                        <img
                          src={`https://flagcdn.com/w20/${country.countryCode.toLowerCase()}.png`}
                          alt={country.name}
                          style={{ width: 20, height: 15, borderRadius: '2px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
                        />
                      )}
                    <h2 className="card-title">{country.nameJa}</h2>
                  </div>
                </div>
              </div>
              <div className="card-content">
                {/* 概要（summary）を表示。なければrecommendationや説明文を仮で表示 */}
                <div className="country-summary">
                  {country.summary || country.recommendation || 'ワーホリ協定国です。'}
                </div>
                <div style={{ display: 'flex', gap: '1em', marginTop: '0.2em', marginBottom: '0.2em' }}>
                  <button
                    onClick={() => {
                      if (country.id === 'australia' || country.id === 'canada' || country.id === 'newzealand' || country.id === 'uk' || country.id === 'ireland' || country.id === 'france' || country.id === 'germany' || country.id === 'spain' || country.id === 'italy' || country.id === 'portugal' || country.id === 'austria' || country.id === 'norway' || country.id === 'denmark' || country.id === 'poland' || country.id === 'czech') {
                        router.push(`/countries/${country.id}`);
                      } else {
                        setOpenAccordionCountryIds(prevIds => {
                          if (prevIds.includes(country.id)) {
                            return prevIds.filter(id => id !== country.id);
                          } else {
                            return [...prevIds, country.id];
                          }
                        });
                      }
                    }}
                    className={`accordion-button ${openAccordionCountryIds.includes(country.id) ? 'active' : ''}`}
                  >
                    詳細情報
                  </button>
                  <button
                    onClick={() => setSelectedCountry(country)}
                    style={{
                      flex: 1,
                      borderRadius: 12,
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                      color: '#fff',
                      fontWeight: 700,
                      border: '2px solid #2563eb',
                      fontSize: 15,
                      padding: '0.8em 0',
                      minHeight: 48,
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(37,99,235,0.2)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.2)';
                    }}
                  >
                    都市一覧
                  </button>
                </div>
                {/* 詳細情報アコーディオン展開部分 */}
                {openAccordionCountryIds.includes(country.id) && (
                  <div style={{
                    marginTop: '1.2em',
                    background: 'linear-gradient(135deg, #fafdff 0%, #f3f6fa 100%)',
                    borderRadius: 12,
                    padding: '1.3em 1.5em',
                    border: '1.5px solid #e5eaf3',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.9em',
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 16}}>
                      <span style={{fontSize: 20}}>💰</span>
                      <span style={{fontWeight: 700, color: '#2563eb', minWidth: 80}}>最低賃金</span>
                      <span style={{color: '#222'}}>{country.minWage}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 16}}>
                      <span style={{fontSize: 20}}>🎂</span>
                      <span style={{fontWeight: 700, color: '#2563eb', minWidth: 80}}>対象年齢</span>
                      <span style={{color: '#222'}}>{country.ageRange}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 16}}>
                      <span style={{fontSize: 20}}>🕒</span>
                      <span style={{fontWeight: 700, color: '#2563eb', minWidth: 80}}>滞在期間</span>
                      <span style={{color: '#222'}}>{country.stayPeriod}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 16}}>
                      <span style={{fontSize: 20}}>👥</span>
                      <span style={{fontWeight: 700, color: '#2563eb', minWidth: 80}}>定員数</span>
                      <span style={{color: '#222'}}>{country.quota}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="App-footer">
        <div className="footer-content">
          <span>© 2025 ワーホリパス</span>
          <span style={{fontSize: '0.95em', color: '#aaa', marginLeft: '1.2em'}}>Powered by SoloTraveler</span>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="App">  
        <main>
          <div className="loading-container">
            <p>データを読み込んでいます...</p>
          </div>
        </main>
      </div>
    }>
      <PageComponent />
    </Suspense>
  );
}
