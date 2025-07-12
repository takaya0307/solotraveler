"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Country } from "../types/types";
import Image from "next/image";

// 難易度の型
type SortOption = "none" | "beginner" | "intermediate" | "advanced" | "expert" | "bestseason";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("none");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'info' | 'scores' | 'tips'>('info');
  const [isMobile, setIsMobile] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [costSort, setCostSort] = useState<'none' | 'asc' | 'desc'>('none');
  const [costStars, setCostStars] = useState<number[]>([]); // コストの星の数（複数選択可）
  const [safetyStars, setSafetyStars] = useState<number[]>([]); // 治安の星の数（複数選択可）
  const [seasonMonth, setSeasonMonth] = useState<string>('all'); // ベストシーズン月
  const [stayDays, setStayDays] = useState<string>('all'); // おすすめ滞在日数
  const [flightPrice, setFlightPrice] = useState<string>('all'); // 航空券の価格

  // filteredAndSortedCountriesのuseMemo定義を上に移動
  const filteredAndSortedCountries = useMemo(() => {
    let filtered = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.nameJa.includes(searchTerm) ||
      country.capital.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // コスト（★の数）フィルター
    if (costStars.length > 0) {
      filtered = filtered.filter(country => costStars.includes(country.scores.cost));
    }
    // 治安（★の数）フィルター
    if (safetyStars.length > 0) {
      filtered = filtered.filter(country => safetyStars.includes(country.scores.safety));
    }
    // ベストシーズン月フィルター
    if (seasonMonth !== 'all') {
      filtered = filtered.filter(country => {
        // bestTimeToVisit例: "3月~5月、10月~12月"
        const month = parseInt(seasonMonth, 10);
        const patterns = country.bestTimeToVisit.split(/[、,]/).map(s => s.trim());
        return patterns.some(p => {
          // "3月~5月" の場合
          const match = p.match(/(\d{1,2})月~(\d{1,2})月/);
          if (match) {
            const start = parseInt(match[1], 10);
            const end = parseInt(match[2], 10);
            if (start <= end) {
              return month >= start && month <= end;
            } else {
              // 例: 10月~2月 のように年をまたぐ場合
              return month >= start || month <= end;
            }
          } else {
            // "4月" のような単月
            const single = p.match(/(\d{1,2})月/);
            if (single) {
              return month === parseInt(single[1], 10);
            }
          }
          return false;
        });
      });
    }
    // おすすめ滞在日数フィルター
    if (stayDays !== 'all') {
      filtered = filtered.filter(country => {
        // requiredDays例: "3~4" または "2~3" など
        const match = String(country.requiredDays).match(/(\d{1,2})~(\d{1,2})/);
        const days = parseInt(stayDays, 10);
        if (match) {
          const start = parseInt(match[1], 10);
          const end = parseInt(match[2], 10);
          return days >= start && days <= end;
        } else {
          // "3" のような単日
          const single = String(country.requiredDays).match(/(\d{1,2})/);
          if (single) {
            return days === parseInt(single[1], 10);
          }
        }
        return false;
      });
    }
    // 航空券の価格フィルター
    if (flightPrice !== 'all') {
      filtered = filtered.filter(country => {
        // flightCost例: "4~8万円" "10~16万円" "15万円〜25万円" "8~14万円"
        const match = String(country.flightCost).match(/(\d{1,2})[万]?円?[~〜-](\d{1,2})[万]?円?/);
        const price = parseInt(flightPrice, 10);
        if (match) {
          const start = parseInt(match[1], 10);
          const end = parseInt(match[2], 10);
          return price >= start && price <= end;
        } else {
          // "8万円" のような単価
          const single = String(country.flightCost).match(/(\d{1,2})[万]?円?/);
          if (single) {
            return price === parseInt(single[1], 10);
          }
        }
        return false;
      });
    }

    if (sortBy !== 'none' && sortBy !== 'bestseason') {
      filtered = filtered.filter(country => {
        const overallScore = calculateOverallScore(country.scores, country.capital);
        const difficulty = getDifficultyLevel(overallScore);
        switch (sortBy) {
          case 'beginner':
            return difficulty.level === '初級';
          case 'intermediate':
            return difficulty.level === '中級';
          case 'advanced':
            return difficulty.level === '上級';
          case 'expert':
            return difficulty.level === '超上級';
          default:
            return true;
        }
      });
    }

    // ベストシーズン順ソート
    if (sortBy === 'bestseason') {
      filtered = [...filtered].sort((a, b) => {
        if (a.bestTimeToVisit < b.bestTimeToVisit) return -1;
        if (a.bestTimeToVisit > b.bestTimeToVisit) return 1;
        return 0;
      });
    }

    // コストでソート
    if (costSort === 'asc') {
      filtered = [...filtered].sort((a, b) => b.scores.cost - a.scores.cost); // ★が多い順＝安い順
    } else if (costSort === 'desc') {
      filtered = [...filtered].sort((a, b) => a.scores.cost - b.scores.cost); // ★が少ない順＝高い順
    }

    return filtered;
  }, [searchTerm, sortBy, countries, costSort, costStars, safetyStars, seasonMonth, stayDays, flightPrice]);

  const [visibleCount, setVisibleCount] = useState(15);
  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // API Routeに後で修正予定
    fetch("/api/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (loading) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 10, filteredAndSortedCountries.length));
        }
      },
      { threshold: 1 }
    );
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [filteredAndSortedCountries.length, loading]);

  useEffect(() => {
    setVisibleCount(15);
  }, [searchTerm, sortBy, costSort, costStars, safetyStars, seasonMonth, stayDays, flightPrice]);

  // 総合評価を計算する関数
  const calculateOverallScore = (scores: any, capital: string) => {
    const safetyScore = scores.safety;
    if (safetyScore === 1) return '超上級';
    if (safetyScore === 2) return '上級';
    if (safetyScore === 3) return '中級';
    if (safetyScore === 4 || safetyScore === 5) return '初級';
    return '中級';
  };

  // 難易度レベルを取得する関数
  const getDifficultyLevel = (score: number | string) => {
    if (typeof score === 'string') {
      switch (score) {
        case '初級': return { level: '初級', color: '#10b981' };
        case '中級': return { level: '中級', color: '#f59e0b' };
        case '上級': return { level: '上級', color: '#ef4444' };
        case '超上級': return { level: '超上級', color: '#7c3aed' };
        default: return { level: score, color: '#7c3aed' };
      }
    }
    if (score >= 4.5) return { level: '初級', color: '#10b981' };
    if (score >= 3.5) return { level: '中級', color: '#f59e0b' };
    if (score >= 2.5) return { level: '上級', color: '#ef4444' };
    return { level: '超上級', color: '#7c3aed' };
  };

  const handleCardClick = (country: Country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  if (loading) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Solotraveler</h1>
          <div className="subtitle">データを読み込んでいます...</div>
        </header>
        <main>
          <div className="loading-container">
            <p>データを読み込んでいます...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Solotraveler</h1>
        <div className="subtitle">世界を旅して、新しい自分に出会おう</div>
      </header>
      <main>
        <div className="controls">
          <div className="search-container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="text"
              placeholder="都市名、国名で検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button
              className="filter-icon-btn"
              aria-label="フィルターを開く"
              onClick={() => setIsFilterOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              {/* SVGじょうご型フィルターアイコン */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4H21L14 13.5V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V13.5L3 4Z" stroke="#2F4F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        {/* フィルターモーダル */}
        {isFilterOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.4)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
            onClick={() => setIsFilterOpen(false)}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                minWidth: 320,
                maxWidth: '90vw',
                maxHeight: '80vh',
                overflowY: 'auto',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                position: 'relative',
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsFilterOpen(false)}
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  background: 'none',
                  border: 'none',
                  fontSize: 20,
                  cursor: 'pointer',
                  color: '#666',
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="閉じる"
              >×</button>
              
              <h2 style={{ 
                fontSize: '1.2rem', 
                marginBottom: '1.5rem', 
                color: '#2F4F2F',
                textAlign: 'center',
                fontWeight: 600
              }}>絞り込み条件</h2>
              
              {/* コスト */}
              <div style={{ 
                padding: '1rem', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                background: '#fafafa'
              }}>
                <div style={{ fontWeight: 600, marginBottom: '0.8rem', color: '#333', fontSize: '1rem' }}>コスト</div>
                <div style={{ display: 'flex', gap: '0.8em', flexWrap: 'wrap' }}>
                  {[1,2,3,4,5].map(star => (
                    <label key={star} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.3em', 
                      fontWeight: 500,
                      cursor: 'pointer',
                      padding: '0.3em 0.5em',
                      borderRadius: '4px',
                      background: costStars.includes(star) ? '#e8f5e8' : 'transparent',
                      border: costStars.includes(star) ? '1px solid #4caf50' : '1px solid transparent'
                    }}>
                      <input
                        type="checkbox"
                        checked={costStars.includes(star)}
                        onChange={e => {
                          if (e.target.checked) {
                            setCostStars([...costStars, star]);
                          } else {
                            setCostStars(costStars.filter(s => s !== star));
                          }
                        }}
                        style={{ margin: 0 }}
                      />
                      <span style={{ color: '#f59e0b', fontSize: '1em' }}>{'★'.repeat(star)}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* 治安 */}
              <div style={{ 
                padding: '1rem', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                background: '#fafafa'
              }}>
                <div style={{ fontWeight: 600, marginBottom: '0.8rem', color: '#333', fontSize: '1rem' }}>治安</div>
                <div style={{ display: 'flex', gap: '0.8em', flexWrap: 'wrap' }}>
                  {[1,2,3,4,5].map(star => (
                    <label key={star} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.3em', 
                      fontWeight: 500,
                      cursor: 'pointer',
                      padding: '0.3em 0.5em',
                      borderRadius: '4px',
                      background: safetyStars.includes(star) ? '#e8f5e8' : 'transparent',
                      border: safetyStars.includes(star) ? '1px solid #4caf50' : '1px solid transparent'
                    }}>
                      <input
                        type="checkbox"
                        checked={safetyStars.includes(star)}
                        onChange={e => {
                          if (e.target.checked) {
                            setSafetyStars([...safetyStars, star]);
                          } else {
                            setSafetyStars(safetyStars.filter(s => s !== star));
                          }
                        }}
                        style={{ margin: 0 }}
                      />
                      <span style={{ color: '#10b981', fontSize: '1em' }}>{'★'.repeat(star)}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* ベストシーズン */}
              <div style={{ 
                padding: '1rem', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                background: '#fafafa'
              }}>
                <div style={{ fontWeight: 600, marginBottom: '0.8rem', color: '#333', fontSize: '1rem' }}>ベストシーズン</div>
                <select
                  value={seasonMonth}
                  onChange={e => setSeasonMonth(e.target.value)}
                  style={{ 
                    fontSize: '0.95em', 
                    padding: '0.5em 0.8em', 
                    borderRadius: '6px', 
                    border: '1px solid #ddd', 
                    width: '100%',
                    background: '#fff'
                  }}
                >
                  <option value="all">すべて</option>
                  {['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'].map((m, i) => (
                    <option value={String(i+1)} key={m}>{m}</option>
                  ))}
                </select>
              </div>
              
              {/* おすすめ滞在日数 */}
              <div style={{ 
                padding: '1rem', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                background: '#fafafa'
              }}>
                <div style={{ fontWeight: 600, marginBottom: '0.8rem', color: '#333', fontSize: '1rem' }}>おすすめ滞在日数</div>
                <select
                  value={stayDays}
                  onChange={e => setStayDays(e.target.value)}
                  style={{ 
                    fontSize: '0.95em', 
                    padding: '0.5em 0.8em', 
                    borderRadius: '6px', 
                    border: '1px solid #ddd', 
                    width: '100%',
                    background: '#fff'
                  }}
                >
                  <option value="all">すべて</option>
                  {[2,3,4,5,6,7].map(d => (
                    <option value={String(d)} key={d}>{d}日</option>
                  ))}
                </select>
              </div>
              
              {/* 航空券の価格 */}
              <div style={{ 
                padding: '1rem', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                marginBottom: '1.5rem',
                background: '#fafafa'
              }}>
                <div style={{ fontWeight: 600, marginBottom: '0.8rem', color: '#333', fontSize: '1rem' }}>航空券の価格</div>
                <select
                  value={flightPrice}
                  onChange={e => setFlightPrice(e.target.value)}
                  style={{ 
                    fontSize: '0.95em', 
                    padding: '0.5em 0.8em', 
                    borderRadius: '6px', 
                    border: '1px solid #ddd', 
                    width: '100%',
                    background: '#fff'
                  }}
                >
                  <option value="all">すべて</option>
                  {[3,4,5,6,7,8,9,10,12,14,15,16,18,20,24,26,28,30].map(p => (
                    <option value={String(p)} key={p}>{p}万円</option>
                  ))}
                </select>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <button
                  style={{ 
                    fontSize: '1em', 
                    color: '#fff', 
                    background: '#2F4F2F', 
                    border: 'none', 
                    borderRadius: '8px', 
                    padding: '0.7em 2em', 
                    cursor: 'pointer', 
                    fontWeight: 600, 
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#1a3d1a'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#2F4F2F'}
                  onClick={() => {
                    setCostStars([]);
                    setSafetyStars([]);
                    setSeasonMonth('all');
                    setStayDays('all');
                    setFlightPrice('all');
                    setCostSort('none');
                    setSortBy('none');
                    setSearchTerm('');
                  }}
                >全て解除</button>
              </div>
            </div>
          </div>
        )}
        <div className="card-grid">
          {filteredAndSortedCountries.slice(0, visibleCount).map((country) => {
            const overallScore = calculateOverallScore(country.scores, country.capital);
            const difficulty = getDifficultyLevel(overallScore);
            let badgeClass = 'card-difficulty-badge';
            switch (difficulty.level) {
              case '初級': badgeClass += ' level-beginner'; break;
              case '中級': badgeClass += ' level-intermediate'; break;
              case '上級': badgeClass += ' level-advanced'; break;
              case '超上級': badgeClass += ' level-expert'; break;
              default: break;
            }
            return (
              <div className="country-card" key={country.id} onClick={() => handleCardClick(country)}>
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
                      <h2 className="card-title">{country.capital}</h2>
                    </div>
                    <span className={badgeClass} style={{background: difficulty.color, borderColor: difficulty.color}}>
                      {difficulty.level}
                    </span>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-score-row">
                    <span>治安: <span className="score-stars">{'⭐'.repeat(country.scores.safety)}</span></span>
                    <span>コスト: <span className="score-stars">{'⭐'.repeat(country.scores.cost)}</span></span>
                  </div>
                  <div className="card-best-season">ベストシーズン: {country.bestTimeToVisit}</div>
                  <div className="card-required-days">おすすめ滞在日数: {country.requiredDays}日</div>
                  <div className="card-flight-cost">航空券: {country.flightCost}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div ref={loader} style={{ height: 1 }} />
        {filteredAndSortedCountries.length === 0 && (
          <div className="no-results">
            <p>検索条件に一致する国が見つかりませんでした。</p>
          </div>
        )}
      </main>

      {/* モーダル */}
      {isModalOpen && selectedCountry && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              {isMobile ? (
                (() => {
                  const overallScore = selectedCountry ? calculateOverallScore(selectedCountry.scores, selectedCountry.capital) : '';
                  const difficulty = selectedCountry ? getDifficultyLevel(overallScore) : { level: '', color: '' };
                  let badgeClass = 'modal-difficulty-badge';
                  switch (difficulty.level) {
                    case '初級': badgeClass += ' level-beginner'; break;
                    case '中級': badgeClass += ' level-intermediate'; break;
                    case '上級': badgeClass += ' level-advanced'; break;
                    case '超上級': badgeClass += ' level-expert'; break;
                    default: break;
                  }
                  return (
                    <>
                      <div className="modal-image-header">
                        <img
                          src={selectedCountry?.imageUrl}
                          alt={selectedCountry?.capital}
                          className="modal-image"
                        />
                        <div className="modal-title-overlay">
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4em', width: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                              {selectedCountry?.countryCode && (
                                <img
                                  src={`https://flagcdn.com/w20/${selectedCountry.countryCode.toLowerCase()}.png`}
                                  alt={selectedCountry.name}
                                  style={{ width: 20, height: 15, borderRadius: '2px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
                                />
                              )}
                              <h2 style={{ margin: 0 }}>{selectedCountry?.capital}</h2>
                            </div>
                            <span className={badgeClass} style={{background: difficulty.color, borderColor: difficulty.color}}>
                              {difficulty.level}
                            </span>
                          </div>
                        </div>
                        <button className="modal-close" onClick={closeModal}>×</button>
                      </div>
                      <div className="modal-tabs">
                        <button className={selectedTab === 'info' ? 'active' : ''} onClick={() => setSelectedTab('info')}>基本情報</button>
                        <button className={selectedTab === 'scores' ? 'active' : ''} onClick={() => setSelectedTab('scores')}>詳細評価</button>
                        <button className={selectedTab === 'tips' ? 'active' : ''} onClick={() => setSelectedTab('tips')}>おすすめポイント</button>
                      </div>
                      <div className="modal-body-inner">
                        {selectedTab === 'info' && (
                          <>
                            <div className="modal-description">
                              <h3>都市の魅力</h3>
                              <p>{selectedCountry.description}</p>
                            </div>
                            <div className="modal-info">
                              <div className="modal-info-item">
                                <span className="info-label">ベストシーズン:</span>
                                <span className="info-value">{selectedCountry.bestTimeToVisit}</span>
                              </div>
                              <div className="modal-info-item">
                                <span className="info-label">おすすめ滞在日数:</span>
                                <span className="info-value">{selectedCountry.requiredDays}日</span>
                              </div>
                              <div className="modal-info-item">
                                <span className="info-label">航空券:</span>
                                <span className="info-value">{selectedCountry.flightCost}</span>
                              </div>
                            </div>
                          </>
                        )}
                        {selectedTab === 'scores' && (
                          <div className="modal-scores">
                            <h3>詳細評価</h3>
                            <div className="modal-score-grid">
                              <div className="modal-score-item">
                                <span className="score-label">治安の良さ</span>
                                <span className="score-stars">{'⭐'.repeat(selectedCountry.scores.safety)}</span>
                              </div>
                              <div className="modal-score-item">
                                <span className="score-label">コスト</span>
                                <span className="score-stars">{'⭐'.repeat(selectedCountry.scores.cost)}</span>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedTab === 'tips' && (
                          <div className="modal-tips">
                            <h3>おすすめポイント</h3>
                            <ul>
                              {selectedCountry.tips.map((tip: string, index: number) => (
                                <li key={index}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()
              ) : (
                <>
                  <div className="modal-header">
                    <div className="modal-title-section">
                      <h2>{selectedCountry.capital}</h2>
                      {(() => {
                        const overallScore = calculateOverallScore(selectedCountry.scores, selectedCountry.capital);
                        const difficulty = getDifficultyLevel(overallScore);
                        let badgeClass = 'modal-difficulty-badge';
                        switch (difficulty.level) {
                          case '初級': badgeClass += ' level-beginner'; break;
                          case '中級': badgeClass += ' level-intermediate'; break;
                          case '上級': badgeClass += ' level-advanced'; break;
                          case '超上級': badgeClass += ' level-expert'; break;
                          default: break;
                        }
                        return (
                          <div className="modal-difficulty">
                            <span className={badgeClass} style={{background: difficulty.color, borderColor: difficulty.color}}>
                              {difficulty.level}
                            </span>
                          </div>
                        );
                      })()}
                    </div>
                    <img
                      src={selectedCountry.imageUrl}
                      alt={selectedCountry.capital}
                      className="modal-image"
                    />
                  </div>
                  <div style={{ height: "1rem" }} />
                  <div className="modal-description">
                    <h3>都市の魅力</h3>
                    <p>{selectedCountry.description}</p>
                  </div>
                  <div className="modal-scores">
                    <h3>詳細評価</h3>
                    <div className="modal-score-grid">
                      <div className="modal-score-item">
                        <span className="score-label">治安の良さ</span>
                        <span className="score-stars">{'⭐'.repeat(selectedCountry.scores.safety)}</span>
                      </div>
                      <div className="modal-score-item">
                        <span className="score-label">コスト</span>
                        <span className="score-stars">{'⭐'.repeat(selectedCountry.scores.cost)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-tips">
                    <h3>おすすめポイント</h3>
                    <ul>
                      {selectedCountry.tips.map((tip: string, index: number) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="modal-info">
                    <div className="modal-info-item">
                      <span className="info-label">ベストシーズン:</span>
                      <span className="info-value">{selectedCountry.bestTimeToVisit}</span>
                    </div>
                    <div className="modal-info-item">
                      <span className="info-label">おすすめ滞在日数:</span>
                      <span className="info-value">{selectedCountry.requiredDays}日</span>
                    </div>
                    <div className="modal-info-item">
                      <span className="info-label">航空券:</span>
                      <span className="info-value">{selectedCountry.flightCost}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* フッター */}
      <footer className="App-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Solotraveler</h3>
            <p>一人旅の世界を発見しよう</p>
          </div>
          <div className="footer-section">
            <h4>難易度について</h4>
            <div className="difficulty-info">
              <div className="difficulty-item">
                <span className="difficulty-badge level-beginner">初級</span>
                <span>初めての一人旅に最適</span>
              </div>
              <div className="difficulty-item">
                <span className="difficulty-badge level-intermediate">中級</span>
                <span>少し経験のある方向け</span>
              </div>
              <div className="difficulty-item">
                <span className="difficulty-badge level-advanced">上級</span>
                <span>経験豊富な方向け</span>
              </div>
              <div className="difficulty-item">
                <span className="difficulty-badge level-expert">超上級</span>
                <span>上級者向けの挑戦的な旅</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h4>評価基準</h4>
            <ul className="evaluation-criteria">
              <li>
                ⭐ 治安の良さ
                <span className="info-icon" data-tooltip="治安スコアはNumbeoデータを参考"></span>
              </li>
              <li>⭐ コストパフォーマンス</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Solotraveler. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
