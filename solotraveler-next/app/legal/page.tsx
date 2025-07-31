"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Legal() {
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
          <a href="/lp" style={{
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
            marginLeft: '1rem',
          }}>コミュニティ</a>
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
        maxWidth: 800,
        margin: '3.5em auto 2.5em auto',
        padding: '2.5em 1.5em 2em 1.5em',
        background: '#fff',
        borderRadius: 22,
        boxShadow: '0 6px 32px rgba(37,99,235,0.10)',
        minHeight: 380,
        fontFamily: 'Noto Sans JP',
        border: '1.5px solid #e5eaf3',
      }}>
        <h1 style={{ 
          fontSize: '2.2rem', 
          fontWeight: 800, 
          color: '#222', 
          margin: '0 0 1em 0', 
          fontFamily: 'Kiwi Maru, Noto Sans JP, sans-serif', 
          letterSpacing: '0.04em', 
          textAlign: 'center',
          lineHeight: 1.3
        }}>
          特定商取引法に基づく表記
        </h1>
        
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          padding: '1.5em',
          borderRadius: 12,
          marginBottom: '2.5em',
          border: '1px solid #bae6fd'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.8, 
            color: '#0c4a6e', 
            margin: 0,
            fontWeight: 500
          }}>
            ワーホリパスでは、特定商取引法に基づき、以下の情報を開示しています。<br />
            サービスをご利用いただく前に、必ずご確認ください。
          </p>
        </div>

        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#2563eb', 
            margin: '0 0 1.2em 0',
            borderBottom: '3px solid #2563eb',
            paddingBottom: '0.5em'
          }}>
            事業者情報
          </h2>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1.5em', 
            borderRadius: 12,
            border: '1px solid #e9ecef'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333', width: '30%' }}>法人名</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>ワーホリパス</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>所在地</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>求めがあれば遅滞なく開示します</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>電話番号</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>求めがあれば遅滞なく開示します</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>メールアドレス</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>takayaz0307@gmail.com</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>代表者</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>森 貴哉</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#2563eb', 
            margin: '0 0 1.2em 0',
            borderBottom: '3px solid #2563eb',
            paddingBottom: '0.5em'
          }}>
            販売条件
          </h2>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1.5em', 
            borderRadius: 12,
            border: '1px solid #e9ecef'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333', width: '30%' }}>追加手数料</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>なし</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>交換および返品</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>デジタルサービスのため、返品・交換はできません</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>配達時間</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>決済完了後、即座にDiscord招待リンクをお送りします</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>受け付け可能な決済手段</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>クレジットカード決済</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>決済期間</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>クレジットカード決済の場合はただちに処理されます</td>
                </tr>
                <tr>
                  <td style={{ padding: '1em 0', fontWeight: 600, color: '#333' }}>値</td>
                  <td style={{ padding: '1em 0', color: '#333' }}>¥550/月（税込）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={{ 
          background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)', 
          padding: '1.5em', 
          borderRadius: 12,
          border: '1px solid #fecaca',
          marginTop: '2em'
        }}>
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: 1.6, 
            color: '#991b1b', 
            margin: 0,
            fontWeight: 500
          }}>
            ※ 上記の情報は2025年1月時点のものです。最新の情報は各サービス提供時にご確認ください。<br />
            ※ ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
      </main>
    </>
  );
} 