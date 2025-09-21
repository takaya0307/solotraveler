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