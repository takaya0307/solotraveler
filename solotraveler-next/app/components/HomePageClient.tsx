"use client";
import React, { useState, useEffect } from "react";
import { WorkingHolidayCountry, WorkingHolidayCity } from "../../types/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RequestButton from "./RequestButton";
import Header from "./Header";
import BackgroundImage from "./BackgroundImage";

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

// DOM要素を安全に削除するヘルパー関数
const safeRemoveElement = (elementId: string) => {
  try {
    const element = document.getElementById(elementId);
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  } catch (error) {
    console.warn(`Failed to remove element with id: ${elementId}`, error);
  }
};

// 通貨変換用の関数
const getConvertedWage = (wage: string) => {
  if (!wage) return '';
  
  // 「なし」の場合はそのまま返す
  if (wage === 'なし') return 'なし';
  
  // 年齢により異なる注釈を除去
  const cleanWage = wage.replace(' (年齢により異なる)', '');
  
  // 現在のレート（2024年1月時点の概算）
  const exchangeRates: { [key: string]: number } = {
    'A$': 95,   // オーストラリアドル
    'CA$': 110, // カナダドル
    'NZ$': 90,  // ニュージーランドドル
    '€': 160,   // ユーロ
    'EUR': 160, // ユーロ
    '£': 185,   // 英ポンド
    'USD': 148, // 米ドル
    '$': 148,   // 米ドル（$記号）
    'CAD': 110, // カナダドル
    'NZD': 90,  // ニュージーランドドル
    'KRW': 0.11, // 韓国ウォン
    'TWD': 4.7, // 台湾ドル
    'HK$': 19,  // 香港ドル
    'HKD': 19,  // 香港ドル
    'ARS': 0.15, // アルゼンチンペソ
    'CLP': 0.16, // チリペソ
    'UYU': 3.8, // ウルグアイペソ
    'PLN': 37,  // ポーランドズロチ
    'CZK': 6.5, // チェココルナ
    'HUF': 0.4, // ハンガリーフォリント
  };
  
  // 通貨記号と金額を抽出（より柔軟な正規表現）
  const match = cleanWage.match(/([A-Z$€£]+)\s*(\d+(?:[.,]\d+)?)/);
  if (!match) return cleanWage;
  
  const currency = match[1];
  const amount = parseFloat(match[2].replace(',', ''));
  const rate = exchangeRates[currency];
  
  if (!rate) return cleanWage;
  
  // 日本円に変換（100の位で四捨五入）
  const jpyAmount = amount * rate;
  const roundedAmount = Math.round(jpyAmount / 100) * 100;
  
  return `約${roundedAmount.toLocaleString()}円`;
};

const getOriginalCurrency = (wage: string) => {
  if (!wage) return '';
  
  // 「なし」の場合は空文字を返す
  if (wage === 'なし') return '';
  
  // 通貨記号と金額を抽出（より柔軟な正規表現）
  const match = wage.match(/([A-Z$€£]+)\s*(\d+(?:[.,]\d+)?)/);
  if (!match) return '';
  
  const currency = match[1];
  const amount = match[2];
  
  return `${currency}${amount}`;
};

interface HomePageClientProps {
  countries: WorkingHolidayCountry[];
  countryId?: string | null;
}

export default function HomePageClient({ countries, countryId }: HomePageClientProps) {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<WorkingHolidayCountry | null>(null);
  // メインページにhome-pageクラスを追加
  useEffect(() => {
    document.body.classList.add('home-page');
    
    // コンポーネントのアンマウント時にクラスを削除
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);
  const [openAccordionCountryIds, setOpenAccordionCountryIds] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  // ドロップダウン選択時のハンドラー
  const handleDropdownSelect = (category: string) => {
    setOpenDropdown(false);
    setSelectedCategory(category);
    // カテゴリに応じた処理をここに追加
    console.log('Selected category:', category);
  };
  // ドロップダウンの外をクリックした時に閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openDropdown && !target.closest('.dropdown-container')) {
        setOpenDropdown(false);
      }
    };
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);
  // countryIdがあれば自動選択
  useEffect(() => {
    if (countryId) {
      const found = countries.find((c: any) => c.id === countryId);
      if (found) setSelectedCountry(found);
    }
  }, [countryId, countries]);
  // スクロール位置の復元（最適化版）
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('mainPageScrollPosition');
    if (savedScrollPosition) {
      // requestAnimationFrameを使用してDOMの描画完了後にスクロール位置を復元
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
        // 復元後は保存された位置を削除
        sessionStorage.removeItem('mainPageScrollPosition');
      });
    }
  }, [countries]); // countriesの状態が変わった後に実行
  // スクロール深度計測（最適化版）
  useEffect(() => {
    let ticking = false;
    let lastScrollPercentage = -1;
    // ドキュメントの高さをキャッシュ（リサイズ時のみ更新）
    let cachedDocumentHeight = 0;
    let cachedWindowHeight = 0;
    const updateCachedDimensions = () => {
      cachedDocumentHeight = document.documentElement.scrollHeight;
      cachedWindowHeight = window.innerHeight;
    };
    // 初期化時にキャッシュを設定
    updateCachedDimensions();
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollPercentage = Math.round((scrollTop / (cachedDocumentHeight - cachedWindowHeight)) * 100);
          // 同じパーセンテージの重複送信を防ぐ
          if (scrollPercentage !== lastScrollPercentage) {
            lastScrollPercentage = scrollPercentage;
            // 25%, 50%, 75%, 100%のスクロールポイントでイベント送信
            if (scrollPercentage >= 25 && scrollPercentage < 50) {
              trackEvent('scroll', 'エンゲージメント', 'スクロール25%', scrollPercentage);
            } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
              trackEvent('scroll', 'エンゲージメント', 'スクロール50%', scrollPercentage);
            } else if (scrollPercentage >= 75 && scrollPercentage < 100) {
              trackEvent('scroll', 'エンゲージメント', 'スクロール75%', scrollPercentage);
            } else if (scrollPercentage >= 100) {
              trackEvent('scroll', 'エンゲージメント', 'スクロール100%', scrollPercentage);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    // リサイズ時にキャッシュを更新
    const handleResize = () => {
      updateCachedDimensions();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // 選択された国に応じてGA4イベントのみ送信（メタデータはサーバーサイドで管理）
  useEffect(() => {
    if (selectedCountry) {
      // GA4: 国選択イベント
      trackEvent('view', 'ページ', `国選択_${selectedCountry.nameJa}`, 1);
    } else {
      // GA4: ホームページ表示イベント
      trackEvent('view', 'ページ', 'ホームページ', 1);
    }
  }, [selectedCountry]);
  // 都市一覧表示
  if (selectedCountry) {
    return (
      <div className="App">
        <Header />
        <div 
          className="city-header-section"
          style={{
            background: `url('${selectedCountry.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '4rem 2rem',
            textAlign: 'center',
            color: 'white',
            position: 'relative'
          }}
        >
          <div className="city-header-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              margin: 0,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>{selectedCountry.nameJa}の都市一覧</h1>
          </div>
        </div>
        <main>
          <div className={`city-card-grid ${selectedCountry.cities.length === 2 ? 'two-cities' : ''}`}>
            {selectedCountry.cities.length === 0 ? (
              <div style={{padding: '2em', textAlign: 'center'}}>都市データがありません</div>
            ) : (
              selectedCountry.cities.map((city: WorkingHolidayCity) => (
                <div className="city-card" key={city.id}>
                  <div className="city-card-image">
                    <img
                      src={city.imageUrl}
                      alt={`${city.nameJa}の風景`}
                      className="city-card-image-bg"
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                    <div className="city-card-title-overlay">
                      <h2 className="city-card-title">{city.nameJa}</h2>
                    </div>
                  </div>
                  <div className="city-card-content">
                    <div
                      className="city-card-description"
                      style={{
                        background: 'var(--neutral)',
                        borderRadius: 12,
                        padding: '1.1em 1.3em',
                        marginBottom: '1.1em',
                        color: '#222',
                        fontWeight: 500,
                        fontSize: 15.5,
                        lineHeight: 1.7,
                        letterSpacing: '0.01em',
                        boxShadow: '0 2px 8px rgba(30,78,140,0.06)',
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
        </main>
      </div>
    );
  }
  // 国一覧表示
  return (
    <div className="App">
      <Header />
      <main className="home-page">
        <section aria-label="ワーキングホリデー協定国一覧">
          <h1 className="main-heading">2025年最新ワーホリ対応国一覧</h1>
          <div className="dropdown-section">
            <div className="dropdown-container">
              <button 
                className="dropdown-button"
                onClick={() => setOpenDropdown(!openDropdown)}
                aria-expanded={openDropdown}
                aria-haspopup="true"
              >
                <span>
                  {selectedCategory === 'beginner' ? '🌱 初めての人におすすめ' :
                   selectedCategory === 'english' ? '📚 英語力を伸ばす' :
                   selectedCategory === 'no-quota' ? '♾️ 定員上限なし' :
                   selectedCategory === 'spanish' ? '🇪🇸 スペイン語を学ぶ' :
                   '条件で絞る'}
                </span>
                <span className={`dropdown-arrow ${openDropdown ? 'open' : ''}`}>▼</span>
              </button>
              {openDropdown ? (
                <div className="dropdown-menu">
                  <button 
                    className="dropdown-item"
                    onClick={() => handleDropdownSelect('')}
                  >
                    📋 条件をリセット
                  </button>
                  <button 
                    className="dropdown-item"
                    onClick={() => handleDropdownSelect('beginner')}
                  >
                    🌱 初めての人におすすめ
                  </button>
                  <button 
                    className="dropdown-item"
                    onClick={() => handleDropdownSelect('english')}
                  >
                    📚 英語力を伸ばす
                  </button>
                  <button 
                    className="dropdown-item"
                    onClick={() => handleDropdownSelect('no-quota')}
                  >
                    ♾️ 定員上限なし
                  </button>
                  <button 
                    className="dropdown-item"
                    onClick={() => handleDropdownSelect('spanish')}
                  >
                    🇪🇸 スペイン語を学ぶ
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <h2 className="sr-only">ワーキングホリデー協定国一覧・条件・人気都市まとめ</h2>
          <div className="card-grid">
            {Array.isArray(countries) ? countries
              .filter(country => {
                if (selectedCategory === 'beginner') {
                  return ['australia', 'canada', 'newzealand'].includes(country.id);
                }
                if (selectedCategory === 'english') {
                  return ['australia', 'canada', 'newzealand', 'uk', 'ireland'].includes(country.id);
                }
                if (selectedCategory === 'no-quota') {
                  return country.quota === '上限なし' || country.quota === '制限なし' || country.quota === '無制限' || country.quota === 'なし';
                }
                if (selectedCategory === 'spanish') {
                  return ['spain', 'argentina', 'chile', 'uruguay'].includes(country.id);
                }
                return true;
              })
              .map((country) => (
            <div 
              className="country-card" 
              key={`${country.id}-${openAccordionCountryIds.includes(country.id)}`} 
              style={{cursor: 'default'}}
            >
                <div className="card-image">
                  <img
                    src={country.imageUrl}
                    alt={`${country.nameJa}の風景`}
                    className="card-image-bg"
                    fetchPriority={country.id === 'australia' ? 'high' : 'auto'}
                    loading={country.id === 'australia' ? 'eager' : 'lazy'}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div className="card-title-overlay">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                      {country.countryCode ? (
                        <Image
                          src={`https://flagcdn.com/w20/${country.countryCode.toLowerCase()}.png`}
                          alt={`${country.nameJa}の国旗`}
                          width={20}
                          height={15}
                          loading="lazy"
                          style={{ borderRadius: '2px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
                        />
                      ) : null}
                      <h2 className="card-title">{country.nameJa}</h2>
                    </div>
                  </div>
                </div>
              <div className="card-content">
                {/* キャッチコピー */}
                {country.catchphrase ? (
                  <div className="catchphrase">
                    {country.catchphrase}
                  </div>
                ) : null}
                {/* 主要数値情報をアイコン付きで表示 */}
                <div className="country-info-grid">
                  <div className="info-item">
                    <div className="info-icon">💰</div>
                    <div className="info-content">
                      <div className="info-label">最低賃金</div>
                              <div className="info-value">
          <div className="wage-with-note">
            <div className="wage-main">{getConvertedWage(country.minWage)}</div>
            <div className="original-currency">{getOriginalCurrency(country.minWage)}</div>
          </div>
        </div>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">🕒</div>
                    <div className="info-content">
                      <div className="info-label">滞在期間</div>
                      <div className="info-value">
                        {country.stayPeriod && country.stayPeriod.includes('（条件あり）') ? (
                          <div className="period-with-note">
                            <div className="period-main">{country.stayPeriod.replace('（条件あり）', '')}</div>
                            <div className="condition-note">（条件あり）</div>
                          </div>
                        ) : country.stayPeriod && country.stayPeriod.includes('ビザ発給から') ? (
                          <div className="period-with-note">
                            <div className="period-main">{country.stayPeriod.replace('ビザ発給から', '')}</div>
                            <div className="condition-note">（ビザ発給から）</div>
                          </div>
                        ) : (
                          country.stayPeriod
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">🗣️</div>
                    <div className="info-content">
                      <div className="info-label">学べる言語</div>
                      <div className="info-value">{country.languages}</div>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">👥</div>
                    <div className="info-content">
                      <div className="info-label">定員</div>
                      <div className="info-value">{country.quota}</div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '0.2em', marginBottom: '0.2em' }}>
                  <button
                    onClick={() => {
                      // 外部ページがある国のリスト
                      const externalPageCountries = [
                        'australia', 'canada', 'newzealand', 'uk', 'ireland', 
                        'france', 'germany', 'spain', 'italy', 'portugal', 
                        'austria', 'norway', 'denmark', 'poland', 'czech', 'hungary', 'slovakia', 'iceland', 'southkorea', 'taiwan', 'hongkong', 'argentina', 'chile', 'estonia', 'lithuania', 'netherlands', 'finland', 'latvia', 'uruguay', 'luxembourg', 'sweden'
                      ];
                      if (externalPageCountries.includes(country.id)) {
                        trackEvent('click', 'CTA', `詳細情報_${country.nameJa}_外部ページ`, 1);
                        // 現在のスクロール位置を保存
                        sessionStorage.setItem('mainPageScrollPosition', window.pageYOffset.toString());
                        router.push(`/countries/${country.id}`);
                      } else {
                        const isOpening = !openAccordionCountryIds.includes(country.id);
                        trackEvent('click', 'CTA', `詳細情報_${country.nameJa}_アコーディオン`, isOpening ? 1 : 0);
                        setOpenAccordionCountryIds(prevIds => {
                          if (prevIds.includes(country.id)) {
                            return prevIds.filter(id => id !== country.id);
                          } else {
                            return prevIds.filter(id => id !== country.id);
                          }
                        });
                      }
                    }}
                    className={`accordion-button ${openAccordionCountryIds.includes(country.id) ? 'active' : ''}`}
                    aria-label={`${country.nameJa}のワーホリ詳細情報`}
                    style={{ 
                      width: '100%',
                      background: 'var(--main-blue)',
                      color: '#fff',
                      border: '2px solid var(--main-blue)',
                      borderRadius: '12px',
                      fontWeight: '700',
                      fontSize: '15px',
                      padding: '0.8em 0',
                      minHeight: '48px',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(30,78,140,0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#1e4e8c';
                      e.currentTarget.style.borderColor = '#1e4e8c';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,78,140,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--main-blue)';
                      e.currentTarget.style.borderColor = 'var(--main-blue)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,78,140,0.2)';
                    }}
                  >
                    もっと詳しく知る 🔍
                  </button>
                </div>
                {/* 詳細情報アコーディオン展開部分 */}
                {openAccordionCountryIds.includes(country.id) ? (
                  <div style={{
                    marginTop: '1.2em',
                    background: 'var(--neutral)',
                    borderRadius: 12,
                    padding: '1.3em 1.5em',
                    border: '1.5px solid var(--neutral)',
                    boxShadow: '0 2px 8px rgba(30,78,140,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.9em',
                  }}>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 16}}>
                      <span style={{fontSize: 20}}>💰</span>
                      <span style={{fontWeight: 700, color: 'var(--main-blue)', minWidth: 80}}>最低賃金</span>
                      <span style={{color: '#222'}}>{country.minWage}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 16}}>
                      <span style={{fontSize: 20}}>🗣️</span>
                      <span style={{fontWeight: 700, color: 'var(--main-blue)', minWidth: 80}}>学べる言語</span>
                      <span style={{color: '#222'}}>{country.languages}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 16}}>
                      <span style={{fontSize: 20}}>🕒</span>
                      <span style={{fontWeight: 700, color: 'var(--main-blue)', minWidth: 80}}>滞在期間</span>
                      <span style={{color: '#222'}}>{country.stayPeriod}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 16}}>
                      <span style={{fontSize: 20}}>👥</span>
                      <span style={{fontWeight: 700, color: 'var(--main-blue)', minWidth: 80}}>定員数</span>
                      <span style={{color: '#222'}}>{country.quota}</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
                      )) : null}
          </div>
        </section>
        </main>
        <RequestButton />
        <footer className="App-footer">
          <div className="footer-content">
            <span>© 2025 ワーホリパス</span>
            <span style={{fontSize: '0.95em', color: '#aaa', marginLeft: '1.2em'}}>Powered by SoloTraveler</span>
          </div>
        </footer>
      </div>
  );
}
