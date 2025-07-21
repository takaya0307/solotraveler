"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function AboutWorkingHoliday() {
  const router = useRouter();
  return (
    <>
      <header className="App-header stylish-header" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <img
          src="/header.png"
          alt="旅のイメージ"
          style={{
            display: 'block',
            margin: '20px 0 0 0',
            width: '320px',
            height: '70px',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <nav style={{
          marginRight: '2.5vw',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
          <a href="/about-workingholiday" style={{
            fontSize: '0.98rem',
            color: '#222',
            fontWeight: 700,
            textDecoration: 'none',
            padding: '0.7em 1.3em',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #fafdff 0%, #eaf1fb 100%)',
            boxShadow: '0 1px 4px rgba(37,99,235,0.06)',
            transition: 'background 0.18s',
            border: '1.5px solid #e5eaf3',
            display: 'inline-block',
          }}>ワーキングホリデー制度とは</a>
        </nav>
        <div className="header-gradient-bar" />
      </header>
      <button
        onClick={() => router.push("/")}
        className="fixed-back-button"
        aria-label="戻る"
      >
        ← 戻る
      </button>
      <main style={{
        maxWidth: 740,
        margin: '3.5em auto 2.5em auto',
        padding: '2.5em 1.5em 2em 1.5em',
        background: '#fff',
        borderRadius: 22,
        boxShadow: '0 6px 32px rgba(37,99,235,0.10)',
        minHeight: 380,
        fontFamily: 'Noto Sans JP',
        border: '1.5px solid #e5eaf3',
      }}>
        <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#222', margin: '0 0 0.7em 0', fontFamily: 'Kiwi Maru, Noto Sans JP, sans-serif', letterSpacing: '0.04em', textAlign: 'center' }}>
          ワーキングホリデー制度とは
        </h1>
        <section style={{ fontSize: '1.08rem', lineHeight: 2.05, color: '#222', marginBottom: '2.2em', textAlign: 'justify' }}>
          <p style={{ marginBottom: '1.2em' }}>
            ワーキングホリデー制度は、18歳から30歳（国によっては35歳）までの若者が、協定国・地域で一定期間（通常1年）滞在し、休暇を楽しみながら現地での就労や学習を体験できる特別なビザ制度です。
          </p>
          <ul style={{ margin: '0 0 1.2em 1.5em', padding: 0, listStyle: 'disc', color: '#222', fontWeight: 600, fontSize: '1.04rem', lineHeight: 2 }}>
            <li style={{ color: '#222', fontWeight: 600, marginBottom: 4 }}>語学力の向上や異文化交流</li>
            <li style={{ color: '#222', fontWeight: 600, marginBottom: 4 }}>現地での就労経験や世界中の友人作り</li>
            <li style={{ color: '#222', fontWeight: 600, marginBottom: 4 }}>自由な旅や長期滞在が可能</li>
          </ul>
          <p style={{ marginBottom: '1.2em' }}>
            国ごとに申請条件や滞在可能期間、就労制限などが異なるため、渡航前に最新情報を必ずご確認ください。
          </p>
        </section>
        <div style={{ fontSize: '0.98rem', color: '#888', textAlign: 'right', marginTop: '2.2em' }}>
          ※ 詳細は各国大使館・公式サイト等でご確認ください
        </div>
      </main>
    </>
  );
} 