'use client';

import React from 'react';
import styles from './RequestButton.module.css';

const RequestButton: React.FC = () => {

  return (
    <>
      <a href="https://px.a8.net/svt/ejp?a8mat=45C668+FNTINM+5IJI+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.wish.co.jp%2Fform%2Fbrochure-request%2Fform.html" rel="nofollow" target="_blank" 
        className={styles.requestButton}
        aria-label="資料請求"
      >
        <span className={styles.icon}>📄</span>
        <span className={styles.text}>資料請求</span>
      </a>
      <img 
        width="1" 
        height="1" 
        src="https://www10.a8.net/0.gif?a8mat=45C668+FNTINM+5IJI+BW8O2" 
        alt=""
        style={{ 
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          border: 'none',
          opacity: 0
        }}
      />
    </>
  );
};

export default RequestButton;
