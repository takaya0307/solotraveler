"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "./Header";
import styles from "./CountryDetailLayout.module.css";

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
      <Header />
      
      <main className={styles["country-main"]}>
        
        {/* ヒーローセクション */}
        <div 
          className={styles["country-hero"]}
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${country.imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          title={`背景画像: ${country.imageUrl}`}
        >
          <h1 className={styles["country-hero-title"]}>
            {pageTitle}
          </h1>
          <p className={styles["country-hero-description"]}>
            {pageDescription}
          </p>
        </div>

        {/* 滞在情報カード */}
        <div className={styles["info-cards-grid"]}>
          <div className={styles["info-card"]}>
            <div className={styles["info-card-icon"]}>
              💰
            </div>
            <h3>最低賃金</h3>
            <p>{country.minWage}</p>
          </div>
          
          <div className={styles["info-card"]}>
            <div className={styles["info-card-icon"]}>
              👥
            </div>
            <h3>対象年齢</h3>
            <p>{country.ageRange}</p>
          </div>
          
          <div className={styles["info-card"]}>
            <div className={styles["info-card-icon"]}>
              ⏰
            </div>
            <h3>滞在期間</h3>
            <div className={styles["info-card-quota"]}>
              <p className={styles["info-card-quota-main"]}>最大1年3ヶ月</p>
              <p className={styles["info-card-quota-sub"]}>（条件あり）</p>
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
          
          {/* 国の魅力セクション */}
          <section className={`${styles.section} ${styles["section-attractions"]}`}>
            <h2 className={styles["section-title"]}>
              <span className={styles["section-title-icon"]}>🌟</span> {country.nameJa}の魅力
            </h2>
            
            <div className={styles["section-content"]}>
              <p className={styles["description-text-large"]}>
                {countryDescription}
              </p>
              
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
                🌍 その国の雰囲気
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
              
              <h3 className={styles["subsection-title"]}>
                🎯 ワーホリを選ぶ理由
              </h3>
              <ul className={styles["reasons-list"]}>
                {workingHolidayReasons.map((reason, index) => (
                  <li key={index}>
                    {reason}
                  </li>
                ))}
              </ul>
              
              <h3 className={styles["subsection-title"]}>
                📚 英語学習の環境
              </h3>
              <ul className={styles["reasons-list"]}>
                {englishLearningEnvironment.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              
              <h3 className={styles["subsection-title"]}>
                🏃‍♂️ アウトドアライフ
              </h3>
              <p className={styles["description-text"]}>
                {outdoorLifeDescription}
              </p>
            </div>
          </section>

          {/* 都市一覧セクション */}
          <section className={`${styles.section} ${styles["section-cities"]}`}>
            <h2 className={styles["section-title"]}>
              <span className={styles["section-title-icon-blue"]}>🏙️</span> {country.nameJa}の主要都市
            </h2>
            
            <div className={styles["section-content"]}>
              <p className={styles["description-text-large"]}>
                {country.nameJa}には様々な魅力を持つ都市があります。それぞれの都市には独自の特徴があり、自分のライフスタイルや目的に合った都市を選ぶことができます。
              </p>
              
              {/* 都市カードグリッド */}
              <div className={styles["city-grid"]}>
                {country.cities.map((city) => (
                  <div key={city.id} className={styles["city-card"]}>
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
                    
                    <div className={styles["city-description"]}>
                      {city.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* こんな人におすすめセクション */}
          <section className={`${styles.section} ${styles["section-recommended"]}`}>
            <h2 className={styles["section-title"]}>
              <span className={styles["section-title-icon"]}>🎯</span> こんな人におすすめ
            </h2>
            
            <div className={styles["section-content"]}>
              <div className={styles["recommended-grid"]}>
                {recommendedFor.map((item, index) => (
                  <div key={index} className={styles["recommended-card"]} style={{
                    background: item.bgColor,
                    border: `2px solid ${item.borderColor}`,
                    boxShadow: `0 8px 25px ${item.color}20`
                  }}>
                    <h3 className={styles["recommended-title"]} style={{ color: item.color }}>
                      {item.icon} {item.title}
                    </h3>
                    <p className={styles["recommended-description"]}>
                      {item.description}
                    </p>
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
              <span className={styles["consultation-icon"]}>💬</span> 無料相談はこちら
            </h2>
            <p className={styles["consultation-description"]}>
              ワーホリについて詳しく知りたい方、不安なことがある方はお気軽にご相談ください。
            </p>
            <button className={styles["consultation-button"]}>
              📞 無料相談を始める
            </button>
          </section>
        </article>
      </main>
    </>
  );
} 