"use client";
import React, { useState, useMemo, useEffect } from "react";
import { Country } from "../types/types";
import Image from "next/image";

// 難易度の型
type SortOption = "none" | "beginner" | "intermediate" | "advanced" | "expert";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("none");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'info' | 'scores' | 'tips'>('info');
  const [isMobile, setIsMobile] = useState(false);

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

  const filteredAndSortedCountries = useMemo(() => {
    let filtered = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.nameJa.includes(searchTerm) ||
      country.capital.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy !== 'none') {
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

    return filtered;
  }, [searchTerm, sortBy, countries]);

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
          <div className="subtitle">Discover the world, one adventure at a time</div>
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
        <div className="subtitle">Discover the world, one adventure at a time</div>
      </header>
      <main>
        <div className="controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="都市名、国名で検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="sort-container">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="sort-select"
            >
              <option value="none">すべて表示</option>
              <option value="beginner">初級</option>
              <option value="intermediate">中級</option>
              <option value="advanced">上級</option>
              <option value="expert">超上級</option>
            </select>
          </div>
        </div>
        <div className="card-grid">
          {filteredAndSortedCountries.map((country) => {
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
                    <h2 className="card-title">{country.capital}</h2>
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
            <button className="modal-close" onClick={closeModal}>×</button>
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
            <div className="modal-body">
              {isMobile ? (
                <>
                  <div className="modal-tabs">
                    <button className={selectedTab === 'info' ? 'active' : ''} onClick={() => setSelectedTab('info')}>基本情報</button>
                    <button className={selectedTab === 'scores' ? 'active' : ''} onClick={() => setSelectedTab('scores')}>詳細評価</button>
                    <button className={selectedTab === 'tips' ? 'active' : ''} onClick={() => setSelectedTab('tips')}>おすすめポイント</button>
                  </div>
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
                </>
              ) : (
                <>
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
