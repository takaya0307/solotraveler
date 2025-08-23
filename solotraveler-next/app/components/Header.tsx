'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          </Link>
        </div>
        
        {/* デスクトップナビゲーション */}
        <nav className={styles.desktopNavigation} role="navigation" aria-label="メインナビゲーション">
          <Link 
            href="/about-workingholiday" 
            className={styles.navLink}
            aria-label="ワーホリについて詳しく知る"
          >
            ワーホリとは
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
              href="/about-workingholiday" 
              className={styles.mobileNavLink}
              onClick={closeMenu}
              aria-label="ワーホリについて詳しく知る"
            >
              ワーホリとは
            </Link>
          </nav>
        </div>

      <div className={styles.accentLine} aria-hidden="true" />
    </header>
  );
};

export default Header; 