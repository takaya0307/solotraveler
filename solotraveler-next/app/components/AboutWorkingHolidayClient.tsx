"use client";
import React, { useEffect } from "react";

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

export default function AboutWorkingHolidayClient() {
  // ワーホリページにwh-pageクラスを追加
  useEffect(() => {
    document.body.classList.add('wh-page');
    
    // コンポーネントのアンマウント時にクラスを削除
    return () => {
      document.body.classList.remove('wh-page');
    };
  }, []);

  // ページビュー計測
  useEffect(() => {
    trackEvent('view', 'ページ', 'ワーホリとは', 1);
  }, []);

  return null;
}
