"use client";
import React from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="App">
      <Header />

      <main style={{ padding: '2rem 4rem', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ 
          background: '#fff', 
          borderRadius: '16px', 
          padding: '3rem', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          lineHeight: '1.8',
          fontSize: '1.1rem'
        }}>
          
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              color: '#2F4F2F', 
              fontSize: '2rem', 
              marginBottom: '1.5rem',
              borderBottom: '3px solid #2F4F2F',
              paddingBottom: '0.5rem'
            }}>
              🌍 サイトの目的
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Solotraveler</strong>は、一人旅を考えている方々のために作られた都市情報サイトです。
            </p>
            <p style={{ marginBottom: '1rem' }}>
              一人旅は素晴らしい体験ですが、初めての方にとっては不安や心配がつきものです。
              どこに行けば安全なのか、どのくらいの予算が必要なのか、いつがベストシーズンなのか...
              そんな疑問に答えるために、このサイトは誕生しました。
            </p>
            <p>
              私たちは、一人旅をより安全で楽しく、そして充実したものにするための情報を提供することを使命としています。
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              color: '#2F4F2F', 
              fontSize: '2rem', 
              marginBottom: '1.5rem',
              borderBottom: '3px solid #2F4F2F',
              paddingBottom: '0.5rem'
            }}>
              ✨ このサイトの特徴
            </h2>
            
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ color: '#2F4F2F', fontSize: '1.3rem', marginBottom: '1rem' }}>🎯 一人旅に特化</h3>
                <p>
                  一人旅に必要な情報に特化しています。治安、コスト、移動手段、おすすめスポットなど、
                  一人で旅行する際に重要な情報を厳選して掲載しています。
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ color: '#2F4F2F', fontSize: '1.3rem', marginBottom: '1rem' }}>📊 詳細な評価システム</h3>
                <p>
                  各都市を治安、コスト、難易度で評価。一人旅の経験レベルに応じて、
                  初級から超上級まで分かりやすく分類しています。
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ color: '#2F4F2F', fontSize: '1.3rem', marginBottom: '1rem' }}>🔍 柔軟な検索・フィルター</h3>
                <p>
                  予算、期間、ベストシーズン、治安レベルなど、あなたの条件に合わせて
                  最適な目的地を見つけることができます。
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ color: '#2F4F2F', fontSize: '1.3rem', marginBottom: '1rem' }}>💡 実用的なアドバイス</h3>
                <p>
                  観光スポットだけでなく、移動方法、注意点、おすすめの体験など、
                  実際の旅行で役立つ情報を提供しています。
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              color: '#2F4F2F', 
              fontSize: '2rem', 
              marginBottom: '1.5rem',
              borderBottom: '3px solid #2F4F2F',
              paddingBottom: '0.5rem'
            }}>
              🎯 こんな方におすすめ
            </h2>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
            }}>
              <li style={{ 
                background: '#e8f5e8', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #4caf50'
              }}>
                🚀 初めての一人旅を計画している方
              </li>
              <li style={{ 
                background: '#e8f5e8', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #4caf50'
              }}>
                💰 予算を抑えた旅行をしたい方
              </li>
              <li style={{ 
                background: '#e8f5e8', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #4caf50'
              }}>
                🌟 新しい冒険を求める方
              </li>
              <li style={{ 
                background: '#e8f5e8', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #4caf50'
              }}>
                📚 旅行の事前調査をしたい方
              </li>
              <li style={{ 
                background: '#e8f5e8', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #4caf50'
              }}>
                🗺️ 世界の都市について知りたい方
              </li>
              <li style={{ 
                background: '#e8f5e8', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #4caf50'
              }}>
                ⏰ 限られた時間で効率的に旅行したい方
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              color: '#2F4F2F', 
              fontSize: '2rem', 
              marginBottom: '1.5rem',
              borderBottom: '3px solid #2F4F2F',
              paddingBottom: '0.5rem'
            }}>
              📈 評価基準について
            </h2>
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div>
                <h3 style={{ color: '#2F4F2F', fontSize: '1.3rem', marginBottom: '1rem' }}>🛡️ 治安評価（1-5星）</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li><strong>5星</strong>: 非常に安全、一人旅初心者でも安心</li>
                  <li><strong>4星</strong>: 安全、基本的な注意で問題なし</li>
                  <li><strong>3星</strong>: 普通、一般的な注意が必要</li>
                  <li><strong>2星</strong>: 注意が必要、経験者向け</li>
                  <li><strong>1星</strong>: 十分な注意が必要、上級者向け</li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: '#2F4F2F', fontSize: '1.3rem', marginBottom: '1rem' }}>💰 コスト評価（1-5¥）</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li><strong>1¥</strong>: 非常に安い、予算を抑えたい方に最適</li>
                  <li><strong>2¥</strong>: 安い、コストパフォーマンス良好</li>
                  <li><strong>3¥</strong>: 普通、一般的な予算で対応可能</li>
                  <li><strong>4¥</strong>: 高い、ある程度の予算が必要</li>
                  <li><strong>5¥</strong>: 非常に高い、十分な予算が必要</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              color: '#2F4F2F', 
              fontSize: '2rem', 
              marginBottom: '1.5rem',
              borderBottom: '3px solid #2F4F2F',
              paddingBottom: '0.5rem'
            }}>
              🎯 難易度レベルについて
            </h2>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div style={{ 
                background: '#d1fae5', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '2px solid #10b981'
              }}>
                <h3 style={{ color: '#065f46', fontSize: '1.2rem', marginBottom: '0.5rem' }}>初級</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  一人旅初心者向け。英語が通じやすく、治安が良く、インフラが整っている都市です。
                </p>
              </div>
              <div style={{ 
                background: '#fef3c7', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '2px solid #f59e0b'
              }}>
                <h3 style={{ color: '#92400e', fontSize: '1.2rem', marginBottom: '0.5rem' }}>中級</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  少し経験のある方向け。基本的な注意が必要ですが、十分に楽しめる都市です。
                </p>
              </div>
              <div style={{ 
                background: '#fee2e2', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '2px solid #ef4444'
              }}>
                <h3 style={{ color: '#991b1b', fontSize: '1.2rem', marginBottom: '0.5rem' }}>上級</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  経験豊富な方向け。十分な注意と準備が必要ですが、深い体験ができる都市です。
                </p>
              </div>
              <div style={{ 
                background: '#f3e8ff', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '2px solid #7c3aed'
              }}>
                <h3 style={{ color: '#581c87', fontSize: '1.2rem', marginBottom: '0.5rem' }}>超上級</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  冒険心旺盛な方向け。高いリスクを伴いますが、他では得られない体験ができる都市です。
                </p>
              </div>
            </div>
          </section>

          <section style={{ 
            background: 'linear-gradient(135deg, #2F4F2F 0%, #556B2F 100%)', 
            color: 'white',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>🚀 一人旅を始めよう</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              あなたの一人旅の夢を、Solotravelerがサポートします。
              安全で楽しい旅行のための情報を、いつでもお気軽にご利用ください。
            </p>
            <Link href="/" style={{
              display: 'inline-block',
              background: 'white',
              color: '#2F4F2F',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'transform 0.2s'
            }}>
              都市一覧を見る
            </Link>
          </section>
        </div>
      </main>

      {/* フッター */}
      <footer className="App-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Solotraveler</h3>
            <p>一人旅の新しい体験を</p>
          </div>
          <div className="footer-section">
            <h4>サイト情報</h4>
            <p>一人旅に特化した都市情報サイト</p>
          </div>
          <div className="footer-section">
            <h4>お問い合わせ</h4>
            <p>ご質問・ご要望がございましたらお気軽にお声がけください</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Solotraveler. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 