"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    const isOpening = openFaq !== index;
    trackEvent('click', 'FAQ', `FAQ_${faqData[index].question}`, isOpening ? 1 : 0);
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    trackEvent('click', 'ナビゲーション', `セクション移動_${sectionId}`, 1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "英語ができなくても大丈夫ですか？",
      answer: "基本的な英語力は必要ですが、完璧である必要はありません。現地で生活しながら語学力を向上させることができます。ただし、最低限の日常会話ができるレベルはあった方が安心です。"
    },
    {
      question: "何歳から行けますか？",
      answer: "18歳から申請可能です。上限年齢は国によって異なり、30歳まで（一部の国では35歳まで）となっています。年齢制限に達する前に申請する必要があります。"
    },
    {
      question: "現地での仕事はどう探すの？",
      answer: "求人サイト、現地の求人情報誌、友人や知人の紹介、直接店舗に問い合わせるなど、様々な方法があります。レストラン、カフェ、農場、ホテルなどが一般的です。"
    },
    {
      question: "どのくらいの資金が必要ですか？",
      answer: "国によって異なりますが、往復航空券代金と最低3ヶ月分の生活費（約50〜100万円）が必要です。保険料や初期費用も含めて、余裕を持った資金計画を立てることをお勧めします。"
    },
    {
      question: "一人で行くのは不安です。どうすればいいですか？",
      answer: "同じ志を持つ仲間と事前に知り合っておくことをお勧めします。SNSやコミュニティで情報交換をしたり、同じ時期に渡航する人と連絡を取ったりすることで、不安を軽減できます。"
    },
    {
      question: "ビザの申請はいつから始めればいいですか？",
      answer: "国によって異なりますが、一般的に渡航予定日の3〜6ヶ月前から申請を開始することをお勧めします。人気の国は枠が早く埋まるため、早めの準備が重要です。申請に必要な書類の準備にも時間がかかります。"
    },
    {
      question: "現地で病気になったらどうすればいいですか？",
      answer: "海外旅行保険に加入していることが前提ですが、現地の病院やクリニックを受診できます。緊急時は救急車を呼ぶことも可能です。事前に現地の医療機関の情報を調べておくことをお勧めします。"
    }
  ];

  return (
    <div>
      {/* インタラクティブなFAQセクションのみをクライアントサイドで提供 */}
      <section id="faq" className="wh-section">
        <h2 className="wh-section-title">
          ❓ ワーホリFAQ
        </h2>
        
        <div>
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="wh-faq-item">
                <button
                  className={`wh-faq-question ${isOpen ? "active" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`wh-faq-toggle ${isOpen ? "active" : ""}`}>▼</span>
                </button>
                <div 
                  id={`faq-panel-${index}`} 
                  role="region" 
                  aria-labelledby={`faq-q-${index}`}
                  className={`wh-faq-answer ${isOpen ? "active" : ""}`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
