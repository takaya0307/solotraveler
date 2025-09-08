"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "./Header";
import CityDetailModal from "./CityDetailModal";
import styles from "./CountryDetailLayout.module.css";

// 国旗を取得する関数
const getCountryFlag = (countryCode: string) => {
  const flagMap: { [key: string]: string } = {
    'AU': '🇦🇺', // オーストラリア
    'CA': '🇨🇦', // カナダ
    'FR': '🇫🇷', // フランス
    'DE': '🇩🇪', // ドイツ
    'ES': '🇪🇸', // スペイン
    'IT': '🇮🇹', // イタリア
    'GB': '🇬🇧', // イギリス
    'NZ': '🇳🇿', // ニュージーランド
    'IE': '🇮🇪', // アイルランド
    'NL': '🇳🇱', // オランダ
    'SE': '🇸🇪', // スウェーデン
    'NO': '🇳🇴', // ノルウェー
    'DK': '🇩🇰', // デンマーク
    'PL': '🇵🇱', // ポーランド
    'LU': '🇱🇺', // ルクセンブルク
    'CZ': '🇨🇿', // チェコ
    'KR': '🇰🇷', // 韓国
    'EE': '🇪🇪', // エストニア
    'LV': '🇱🇻', // ラトビア
    'UY': '🇺🇾', // ウルグアイ
    'SK': '🇸🇰', // スロバキア
    'AR': '🇦🇷', // アルゼンチン
    'TW': '🇹🇼', // 台湾
    'PT': '🇵🇹', // ポルトガル
    'LT': '🇱🇹', // リトアニア
    'HU': '🇭🇺', // ハンガリー
    'HK': '🇭🇰', // 香港
    'AT': '🇦🇹', // オーストリア
    'FI': '🇫🇮', // フィンランド
    'CL': '🇨🇱', // チリ
    'IS': '🇮🇸', // アイスランド
  };
  
  return flagMap[countryCode] || '🏳️';
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
  
  // 年齢により異なる注釈を除去
  const cleanWage = wage.replace(' (年齢により異なる)', '');
  
  // 通貨記号と金額を抽出
  const match = cleanWage.match(/([A-Z$€£]+)\s*(\d+(?:[.,]\d+)?)/);
  if (!match) return '';
  
  const currency = match[1];
  const amount = match[2];
  
  return `${currency}${amount}`;
};

interface CountryDetailLayoutProps {
  country: {
    id: string;
    nameJa: string;
    imageUrl: string;
    minWage: string;
    ageRange: string;
    stayPeriod: string;
    quota: string;
    languages: string;
    countryCode: string;
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
  workingHolidayReasons?: string[];
  englishLearningEnvironment?: string[];
  outdoorLifeDescription?: string;
  recommendedFor?: Array<{
    title: string;
    description: string;
    color: string;
    borderColor: string;
    bgColor: string;
    icon: string;
  }>;
  consultationLink?: string;
  // 国ごとの見出しカスタマイズ用
  sectionTitles?: {
    attractions?: string;
    cities?: string;
    recommended?: string;
    consultation?: string;
  };
  subsectionTitles?: {
    atmosphere?: string;
  };
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
  recommendedFor,
  consultationLink,
  sectionTitles,
  subsectionTitles
}: CountryDetailLayoutProps) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 都市カードをクリックした時の処理
  const handleCityClick = (city: any) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  // モーダルを閉じる処理
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null);
  };

  // 国詳細ページにcountry-detail-pageクラスを追加
  useEffect(() => {
    if (typeof window !== 'undefined' && document && document.body) {
      document.body.classList.add('country-detail-page');
      
      // コンポーネントのアンマウント時にクラスを削除
      return () => {
        if (document && document.body) {
          document.body.classList.remove('country-detail-page');
        }
      };
    }
  }, []);

  return (
    <>
      <Header />
      
      <main className={`${styles["country-main"]} country-detail-container`}>
        
        {/* ヒーローセクション（画像のみ） */}
        <div 
          className={styles["country-hero"]}
          style={{
            background: `url('${country.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          title={`背景画像: ${country.imageUrl}`}
        >
        </div>

        {/* タイトルと説明文セクション */}
        <div className={styles["title-description-section"]}>
          <div className={styles["flag-container"]}>
            {getCountryFlag(country.countryCode)}
          </div>
          <h1 className={styles["page-title"]}>
            {pageTitle}
          </h1>
          <p className={styles["page-description"]}>
            {pageDescription.split('\\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < pageDescription.split('\\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* 滞在情報カード */}
        <div className={styles["info-cards-grid"]}>
          <div className={styles["info-card"]}>
            <div className={styles["info-card-icon"]}>
              💰
            </div>
            <h3>最低賃金</h3>
            <p>
              {getConvertedWage(country.minWage)}
              <br />
              <span style={{ fontSize: '0.8rem', color: '#fff', opacity: 0.8 }}>
                {getOriginalCurrency(country.minWage)}
              </span>
              {country.id === 'uruguay' && (
                <span style={{ fontSize: '0.8rem', color: '#fff', display: 'block', marginTop: '0.3rem' }}>
                  （月給ベースで計算）
                </span>
              )}
              {country.minWage && country.minWage.includes('(年齢により異なる)') && (
                <span style={{ fontSize: '0.8rem', color: '#fff', display: 'block', marginTop: '0.3rem' }}>
                  （年齢により異なる）
                </span>
              )}
            </p>
          </div>
          
          <div className={styles["info-card"]}>
            <div className={styles["info-card-icon"]}>
              🗣️
            </div>
            <h3>学べる言語</h3>
            <p>{country.languages}</p>
          </div>
          
          <div className={styles["info-card"]}>
            <div className={styles["info-card-icon"]}>
              ⏰
            </div>
            <h3>滞在期間</h3>
            <div className={styles["info-card-quota"]}>
              {country.stayPeriod.includes('（条件あり）') ? (
                <>
                  <p className={styles["info-card-quota-main"]}>
                    {country.stayPeriod.replace('（条件あり）', '')}
                  </p>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.65rem', 
                    fontWeight: 400, 
                    opacity: 0.8 
                  }}>（条件あり）</p>
                </>
              ) : (
                <p className={styles["info-card-quota-main"]}>{country.stayPeriod}</p>
              )}
            </div>
          </div>
          
          <div className={styles["info-card"]}>
            <div className={styles["info-card-icon"]}>
              🎯
            </div>
            <h3>定員数</h3>
            <p>{country.quota}</p>
          </div>
        </div>

        {/* 記事コンテンツ */}
        <article className={styles["article-content"]}>
          
          {/* 国の特徴セクション */}
          <section className={`${styles.section} ${styles["section-attractions"]}`}>
            <h2 className={styles["section-title"]}>
              <span className={styles["section-title-icon"]}>🌟</span> {sectionTitles?.attractions || `${country.nameJa}の特徴`}
            </h2>
            
            <div className={styles["section-content"]}>
              {/* 国の特徴写真 */}
              <div className={styles["features-grid"]}>
                {countryFeatures.map((feature, index) => (
                  <div key={index} className={styles["feature-card"]} style={{
                    background: `url("${feature.imageUrl}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}>
                    <div className={styles["feature-overlay"]}>
                      <h4 className={styles["feature-title"]}>{feature.title}</h4>
                      <p className={styles["feature-description"]}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className={styles["subsection-title"]}>
                🌍 {subsectionTitles?.atmosphere || '国の雰囲気'}
              </h3>
              
              {/* 情報カード */}
              <div className={styles["atmosphere-grid"]}>
                {countryAtmosphere.map((item, index) => (
                  <div key={index} className={styles["atmosphere-card"]}>
                    <h4 className={styles["atmosphere-title"]}>
                      {item.icon} {item.title}
                    </h4>
                    <p className={styles["atmosphere-description"]}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              
              
              
            </div>
          </section>

          {/* 都市一覧セクション */}
          <section className={`${styles.section} ${styles["section-cities"]}`}>
            <h2 className={styles["section-title"]}>
              <span className={styles["section-title-icon-blue"]}>🏙️</span> {sectionTitles?.cities || `${country.nameJa}の主要都市`}
            </h2>
            
            <div className={styles["section-content"]}>
              {/* 都市カードグリッド */}
              <div className={styles["city-grid"]}>
                {country.cities.map((city) => (
                  <div 
                    key={city.id} 
                    className={styles["city-card"]}
                    onClick={() => handleCityClick(city)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles["city-image"]} style={{
                      background: `url('${city.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}>
                      <div className={styles["city-overlay"]} />
                      <div className={styles["city-info"]}>
                        <h3 className={styles["city-name"]}>
                          {city.nameJa}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* 無料相談セクション */}
          <section className={styles["consultation-section"]}>
            <div className={styles["consultation-decoration-1"]} />
            <div className={styles["consultation-decoration-2"]} />
            
            <h2 className={styles["consultation-title"]}>
              <span className={styles["consultation-icon"]}>💬</span> {sectionTitles?.consultation || '無料相談はこちら'}
            </h2>
            <p className={styles["consultation-description"]}>
              ワーホリについて詳しく知りたい方、不安なことがある方はお気軽にご相談ください。
            </p>
            {consultationLink ? (
              <>
                <a 
                  href={consultationLink}
                  rel="nofollow"
                  className={styles["consultation-button"]}
                >
                  📞 無料相談を始める
                </a>
                <img 
                  width="1" 
                  height="1" 
                  src="https://www10.a8.net/0.gif?a8mat=45C1IF+AMTQR6+5S4I+BW8O2" 
                  alt=""
                />
              </>
            ) : (
              <button className={styles["consultation-button"]}>
                📞 無料相談を始める
              </button>
            )}
          </section>
        </article>
      </main>

      {/* 都市詳細モーダル */}
      <CityDetailModal
        city={selectedCity}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
} 