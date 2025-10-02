'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

// 国データをエリアごとにグループ化
const countryGroups = {
  'オセアニア': [
    { id: 'australia', nameJa: 'オーストラリア' },
    { id: 'newzealand', nameJa: 'ニュージーランド' }
  ],
  '北米': [
    { id: 'canada', nameJa: 'カナダ' }
  ],
  'ヨーロッパ': [
    { id: 'uk', nameJa: 'イギリス' },
    { id: 'ireland', nameJa: 'アイルランド' },
    { id: 'france', nameJa: 'フランス' },
    { id: 'germany', nameJa: 'ドイツ' },
    { id: 'spain', nameJa: 'スペイン' },
    { id: 'italy', nameJa: 'イタリア' },
    { id: 'portugal', nameJa: 'ポルトガル' },
    { id: 'austria', nameJa: 'オーストリア' },
    { id: 'norway', nameJa: 'ノルウェー' },
    { id: 'denmark', nameJa: 'デンマーク' },
    { id: 'poland', nameJa: 'ポーランド' },
    { id: 'czech', nameJa: 'チェコ' },
    { id: 'slovakia', nameJa: 'スロバキア' },
    { id: 'hungary', nameJa: 'ハンガリー' },
    { id: 'estonia', nameJa: 'エストニア' },
    { id: 'latvia', nameJa: 'ラトビア' },
    { id: 'lithuania', nameJa: 'リトアニア' },
    { id: 'finland', nameJa: 'フィンランド' },
    { id: 'sweden', nameJa: 'スウェーデン' },
    { id: 'iceland', nameJa: 'アイスランド' },
    { id: 'luxembourg', nameJa: 'ルクセンブルク' },
    { id: 'netherlands', nameJa: 'オランダ' }
  ],
  'アジア': [
    { id: 'southkorea', nameJa: '韓国' },
    { id: 'taiwan', nameJa: '台湾' },
    { id: 'hongkong', nameJa: '香港' }
  ],
  '南米': [
    { id: 'argentina', nameJa: 'アルゼンチン' },
    { id: 'chile', nameJa: 'チリ' },
    { id: 'uruguay', nameJa: 'ウルグアイ' }
  ]
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
  };

  const closeCountryDropdown = () => {
    setIsCountryDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsCountryDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCountryDropdownOpen(false);
    }, 150); // 150msの遅延
    setHoverTimeout(timeout);
  };

  // クリーンアップ
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink} aria-label="ホームページへ戻る" onClick={closeMenu}>
            <Image
              src="/header.png"
              alt="ワーホリパス - ソロ旅行者のための情報サイト"
              width={480}
              height={170}
              className={styles.logo}
              priority
              quality={95}
            />
            <div className={styles.logoTextContainer}>
              <span className={styles.logoText}>ワーホリパス</span>
              <span className={styles.logoSubtext}>ワーホリ対応国・人気都市一覧</span>
            </div>
          </Link>
        </div>
        
        {/* デスクトップナビゲーション */}
        <nav className={styles.desktopNavigation} role="navigation" aria-label="メインナビゲーション">
          <Link 
            href="/" 
            className={styles.navLink}
            aria-label="ホームページへ戻る"
          >
            ホーム
          </Link>
          <div 
            className={styles.dropdownContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={styles.navLink}
              aria-label="国を選ぶ"
              aria-expanded={isCountryDropdownOpen}
            >
              国を選ぶ
            </button>
            {isCountryDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {Object.entries(countryGroups).map(([region, countries]) => (
                  <div key={region} className={`${styles.dropdownSection} ${region === 'ヨーロッパ' ? styles.europeSection : ''}`}>
                    <h3 className={styles.dropdownSectionTitle}>{region}</h3>
                    <ul className={styles.dropdownList}>
                      {countries.map((country) => (
                        <li key={country.id}>
                          <Link 
                            href={`/countries/${country.id}`}
                            className={styles.dropdownLink}
                            onClick={closeCountryDropdown}
                          >
                            {country.nameJa}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link 
            href="/about-workingholiday" 
            className={styles.navLink}
            aria-label="ワーホリについて詳しく知る"
          >
            ワーホリとは
          </Link>
          <Link 
            href="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling" 
            className={`${styles.navLink} ${styles.ctaButton}`}
            aria-label="ワーホリ無料相談ページへ"
            target="_blank"
            rel="nofollow"
          >
            <span>ワーホリ無料相談</span>
          </Link>
        </nav>

        {/* ハンバーガーメニューボタン */}
        <button 
          className={styles.hamburgerButton}
          onClick={toggleMenu}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>
      </div>

              {/* モバイルナビゲーション */}
        <div className={`${styles.mobileNavigation} ${isMenuOpen ? styles.open : ''}`}>
          <nav className={styles.mobileNav} role="navigation" aria-label="モバイルナビゲーション">
            <Link 
              href="/" 
              className={styles.mobileNavLink}
              onClick={closeMenu}
              aria-label="ホームページへ戻る"
            >
              ホーム
            </Link>
            <div className={styles.mobileDropdownContainer}>
              <button 
                className={styles.mobileNavLink}
                onClick={toggleCountryDropdown}
                aria-label="国を選ぶ"
                aria-expanded={isCountryDropdownOpen}
              >
                国を選ぶ
              </button>
              {isCountryDropdownOpen && (
                <div className={styles.mobileDropdownMenu}>
                  {Object.entries(countryGroups).map(([region, countries]) => (
                    <div key={region} className={`${styles.mobileDropdownSection} ${region === 'ヨーロッパ' ? styles.mobileEuropeSection : ''}`}>
                      <h3 className={styles.mobileDropdownSectionTitle}>{region}</h3>
                      <ul className={styles.mobileDropdownList}>
                        {countries.map((country) => (
                          <li key={country.id}>
                            <Link 
                              href={`/countries/${country.id}`}
                              className={styles.mobileDropdownLink}
                              onClick={() => {
                                closeMenu();
                                closeCountryDropdown();
                              }}
                            >
                              {country.nameJa}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link 
              href="/about-workingholiday" 
              className={styles.mobileNavLink}
              onClick={closeMenu}
              aria-label="ワーホリについて詳しく知る"
            >
              ワーホリとは
            </Link>
            <Link 
              href="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling" 
              className={`${styles.mobileNavLink} ${styles.mobileCtaButton}`}
              onClick={closeMenu}
              aria-label="ワーホリ無料相談ページへ"
              target="_blank"
              rel="nofollow"
            >
              <span>ワーホリ無料相談</span>
            </Link>
          </nav>
        </div>

      <div className={styles.accentLine} aria-hidden="true" />
    </header>
  );
};

export default Header; 