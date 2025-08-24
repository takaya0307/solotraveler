
"use client";
import React, { useState, useEffect, Suspense } from "react";
import { WorkingHolidayCountry, WorkingHolidayCity } from "../types/types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Script from "next/script";
import Header from "./components/Header";

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

// 構造化データ（JSON-LD）
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ワーホリパス",
  "description": "世界各国のワーキングホリデー制度の詳細情報を提供する総合情報サイト",
  "url": "https://workingholidaypass.jp",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://workingholidaypass.jp/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ワーホリパス",
    "url": "https://workingholidaypass.jp"
  }
};

// パンくずリストの構造化データ
const generateBreadcrumbData = (countryName?: string) => {
  if (countryName) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ホーム",
          "item": "https://workingholidaypass.jp"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "各国詳細",
          "item": "https://workingholidaypass.jp"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": countryName,
          "item": `https://workingholidaypass.jp/countries/${countryName}`
        }
      ]
    };
  }
  return null;
};

// 順位付きリスト（ItemList）の構造化データ
const generateItemListData = (countries: WorkingHolidayCountry[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ワーキングホリデー協定国ランキング",
    "description": "世界各国のワーキングホリデー制度の比較ランキング",
    "numberOfItems": countries.length,
    "itemListElement": countries.map((country, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": country.nameJa,
      "description": country.summary || country.recommendation || 'ワーホリ協定国です。',
      "url": `https://workingholidaypass.jp/countries/${country.id}`,
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "最低賃金",
          "value": country.minWage
        },
        {
          "@type": "PropertyValue",
          "name": "対象年齢",
          "value": country.ageRange
        },
        {
          "@type": "PropertyValue",
          "name": "滞在期間",
          "value": country.stayPeriod
        },
        {
          "@type": "PropertyValue",
          "name": "定員数",
          "value": country.quota
        }
      ]
    }))
  };
};

function PageComponent() {
  const router = useRouter();
  const [countries, setCountries] = useState<WorkingHolidayCountry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCountry, setSelectedCountry] = useState<WorkingHolidayCountry | null>(null);
  const searchParams = useSearchParams();

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

  // スクロール位置の復元
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('mainPageScrollPosition');
    if (savedScrollPosition) {
      // 少し遅延を入れてスクロール位置を復元（DOMの描画完了後）
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
        // 復元後は保存された位置を削除
        sessionStorage.removeItem('mainPageScrollPosition');
      }, 100);
    }
  }, [countries, loading]); // countriesとloadingの状態が変わった後に実行

  // クエリパラメータがある場合のcanonicalタグ制御（重複URL防止）
  useEffect(() => {
    const hasQueryParams = searchParams.toString().length > 0;
    
    if (hasQueryParams) {
      // クエリパラメータがある場合は、パラメータなしのURLをcanonicalとして設定
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      
      // 現在のパスからクエリパラメータを除去したURLをcanonicalに設定
      const currentPath = window.location.pathname;
      canonicalLink.setAttribute('href', `https://your-domain.com${currentPath}`);
      
      // robotsメタタグでインデックスを許可（canonicalで正規化されるため）
      let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'index, follow');
    }
  }, [searchParams]);

  // スクロール深度計測
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
      
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 選択された国に応じてメタタグを動的に更新
  useEffect(() => {
    if (selectedCountry) {
      // GA4: 国選択イベント
      trackEvent('view', 'ページ', `国選択_${selectedCountry.nameJa}`, 1);
      
      const title = `${selectedCountry.nameJa}ワーホリ｜魅力、人気都市、最低賃金などを一覧比較`;
      document.title = title;
      
      // meta descriptionの更新
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${selectedCountry.nameJa}ワーホリの魅力、人気都市、最低賃金などを一覧比較。${selectedCountry.nameJa}でワーホリ体験ができる都市の詳細情報とおすすめポイントをご紹介。`);
      }
      
      // hreflangの更新（各国ページでも日本語指定を維持）
      const hreflangMeta = document.querySelector('meta[name="hreflang"]');
      if (hreflangMeta) {
        hreflangMeta.setAttribute('content', 'ja-JP');
      }
      
      // canonicalタグの更新（都市一覧ページ用）
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `https://your-domain.com/countries/${selectedCountry.id}`);
      
      // robotsメタタグの更新（都市一覧ページはインデックス対象）
      let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'index, follow');
      
      // パンくずリストの構造化データを追加
      const breadcrumbData = generateBreadcrumbData(selectedCountry.nameJa);
      if (breadcrumbData) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(breadcrumbData);
        script.id = 'breadcrumb-structured-data';
        document.head.appendChild(script);
      }
    } else {
      // GA4: ホームページ表示イベント
      trackEvent('view', 'ページ', 'ホームページ', 1);
      
      document.title = "ワーホリパス｜ワーホリで行ける国一覧・比較";
      
      // meta descriptionを元に戻す
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', "オーストラリア、カナダ、ニュージーランドなど世界各国のワーホリ費用・条件・おすすめエージェントを徹底比較。あなたに合ったワーホリプランが見つかります。");
      }
      
      // hreflangの維持
      const hreflangMeta = document.querySelector('meta[name="hreflang"]');
      if (hreflangMeta) {
        hreflangMeta.setAttribute('content', 'ja-JP');
      }
      
      // canonicalタグをホームページに戻す
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', 'https://your-domain.com/');
      
      // robotsメタタグをホームページ設定に戻す
      let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'index, follow');
      
      // パンくずリストの構造化データを削除
      try {
        const existingBreadcrumb = document.getElementById('breadcrumb-structured-data');
        if (existingBreadcrumb) {
          existingBreadcrumb.remove();
        }
      } catch (error) {
        console.warn('Breadcrumb removal failed:', error);
      }
    }
  }, [selectedCountry]);

  // 順位付きリストの構造化データを追加
  useEffect(() => {
    if (countries.length > 0 && !selectedCountry) {
      const itemListData = generateItemListData(countries);
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(itemListData);
      script.id = 'itemlist-structured-data';
      document.head.appendChild(script);
    } else if (selectedCountry) {
      // 国選択時は順位付きリストを削除
      try {
        const existingItemList = document.getElementById('itemlist-structured-data');
        if (existingItemList) {
          existingItemList.remove();
        }
      } catch (error) {
        console.warn('Item list removal failed:', error);
      }
    }
  }, [countries, selectedCountry]);

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
                  <div className="city-card-image" style={{backgroundImage: `url('${city.imageUrl}')`}}>
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
      <main>
        <section aria-label="ワーキングホリデー協定国一覧">
          <h2 className="sr-only">ワーキングホリデー協定国一覧</h2>
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
                        <Image
                          src={`https://flagcdn.com/w20/${country.countryCode.toLowerCase()}.png`}
                          alt={`${country.nameJa}の国旗`}
                          width={20}
                          height={15}
                          style={{ borderRadius: '2px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
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
                  >
                    詳細情報
                  </button>

                </div>
                {/* 詳細情報アコーディオン展開部分 */}
                {openAccordionCountryIds.includes(country.id) && (
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
                      <span style={{fontSize: 20}}>🎂</span>
                      <span style={{fontWeight: 700, color: 'var(--main-blue)', minWidth: 80}}>対象年齢</span>
                      <span style={{color: '#222'}}>{country.ageRange}</span>
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
                )}
              </div>
            </div>
                      ))}
          </div>
        </section>
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
      <Script id="main-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
    </Suspense>
  );
}
