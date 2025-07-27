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
        
        {/* 1. タイトルとリード文 */}
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
          ワーキングホリデー制度とは？<br />
          海外で働ける夢の制度を解説
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
            「ワーキングホリデーって何？」「どんな国に行けるの？」「英語ができなくても大丈夫？」<br />
            このページでは、ワーキングホリデー制度について詳しく解説します。海外で働きながら生活できる特別なビザ制度の魅力と注意点を、わかりやすくお伝えします。
          </p>
        </div>

        {/* 2. ワーキングホリデー制度の概要 */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#2563eb', 
            margin: '0 0 1.2em 0',
            borderBottom: '3px solid #2563eb',
            paddingBottom: '0.5em'
          }}>
            ワーキングホリデー制度の概要
          </h2>
          
          <div style={{ marginBottom: '2em' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', margin: '0 0 0.8em 0' }}>
              📋 制度の目的
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: '0 0 1em 0' }}>
              ワーキングホリデー制度は、18歳から30歳（国によっては35歳）までの若者が、協定国・地域で一定期間（通常1年）滞在し、<strong>休暇を楽しみながら現地での就労や学習を体験できる特別なビザ制度</strong>です。
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
              異文化交流と相互理解を深めることを目的として、日本と各国が協定を結んでいます。
            </p>
          </div>

          <div style={{ marginBottom: '2em' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', margin: '0 0 0.8em 0' }}>
              👥 対象年齢・参加条件
            </h3>
            <ul style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: 0, paddingLeft: '1.5em' }}>
              <li style={{ marginBottom: '0.5em' }}><strong>年齢：</strong>18歳〜30歳（一部の国では35歳まで）</li>
              <li style={{ marginBottom: '0.5em' }}><strong>国籍：</strong>日本国籍を有すること</li>
              <li style={{ marginBottom: '0.5em' }}><strong>目的：</strong>休暇を主目的とし、就労は副次的な目的</li>
              <li style={{ marginBottom: '0.5em' }}><strong>資金：</strong>往復航空券代金と滞在費を支弁する能力</li>
              <li style={{ marginBottom: '0.5em' }}><strong>健康：</strong>心身ともに健康であること</li>
              <li style={{ marginBottom: '0.5em' }}><strong>犯罪歴：</strong>重大な犯罪歴がないこと</li>
            </ul>
          </div>

          <div style={{ marginBottom: '2em' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', margin: '0 0 0.8em 0' }}>
              🌍 滞在可能な国と期間
            </h3>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5em', 
              borderRadius: 12,
              border: '1px solid #e9ecef'
            }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: '0 0 1em 0' }}>
                <strong>主要な協定国：</strong>
              </p>
              <ul style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: 0, paddingLeft: '1.5em' }}>
                <li style={{ marginBottom: '0.5em' }}><strong>オーストラリア：</strong>1年間（延長可能）</li>
                <li style={{ marginBottom: '0.5em' }}><strong>カナダ：</strong>1年間</li>
                <li style={{ marginBottom: '0.5em' }}><strong>ニュージーランド：</strong>1年間</li>
                <li style={{ marginBottom: '0.5em' }}><strong>イギリス：</strong>2年間</li>
                <li style={{ marginBottom: '0.5em' }}><strong>アイルランド：</strong>1年間</li>
                <li style={{ marginBottom: '0.5em' }}><strong>ドイツ：</strong>1年間</li>
                <li style={{ marginBottom: '0.5em' }}><strong>フランス：</strong>1年間</li>
                <li style={{ marginBottom: '0.5em' }}><strong>韓国：</strong>1年間</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#333', margin: '0 0 0.8em 0' }}>
              💼 どんなことができるか
            </h3>
            <ul style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: 0, paddingLeft: '1.5em' }}>
              <li style={{ marginBottom: '0.5em' }}><strong>就労：</strong>現地でアルバイトやパートタイムで働く</li>
              <li style={{ marginBottom: '0.5em' }}><strong>就学：</strong>語学学校や専門学校で勉強する</li>
              <li style={{ marginBottom: '0.5em' }}><strong>観光：</strong>休暇として旅行や観光を楽しむ</li>
              <li style={{ marginBottom: '0.5em' }}><strong>文化交流：</strong>現地の人々との交流や文化体験</li>
            </ul>
          </div>
        </section>

        {/* 3. メリットとデメリット */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#2563eb', 
            margin: '0 0 1.2em 0',
            borderBottom: '3px solid #2563eb',
            paddingBottom: '0.5em'
          }}>
            メリットとデメリット
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2em', marginBottom: '2em' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', 
              padding: '1.5em', 
              borderRadius: 12,
              border: '1px solid #bbf7d0'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#166534', margin: '0 0 1em 0' }}>
                ✅ メリット
              </h3>
              <ul style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#166534', margin: 0, paddingLeft: '1.5em' }}>
                <li style={{ marginBottom: '0.5em' }}><strong>語学習得：</strong>現地で生活することで実践的な語学力が身につく</li>
                <li style={{ marginBottom: '0.5em' }}><strong>国際経験：</strong>異文化体験で視野が広がる</li>
                <li style={{ marginBottom: '0.5em' }}><strong>柔軟なビザ：</strong>就労・就学・観光を自由に組み合わせ可能</li>
                <li style={{ marginBottom: '0.5em' }}><strong>自立心：</strong>海外で一人暮らしすることで自立心が育まれる</li>
                <li style={{ marginBottom: '0.5em' }}><strong>人脈構築：</strong>世界中の友人やビジネスパートナーを作れる</li>
              </ul>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)', 
              padding: '1.5em', 
              borderRadius: 12,
              border: '1px solid #fecaca'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#991b1b', margin: '0 0 1em 0' }}>
                ⚠️ デメリット
              </h3>
              <ul style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#991b1b', margin: 0, paddingLeft: '1.5em' }}>
                <li style={{ marginBottom: '0.5em' }}><strong>収入不安定：</strong>現地での仕事は不安定で低賃金の可能性</li>
                <li style={{ marginBottom: '0.5em' }}><strong>準備コスト：</strong>航空券、保険、初期費用が高額</li>
                <li style={{ marginBottom: '0.5em' }}><strong>文化ギャップ：</strong>言語や文化の違いによるストレス</li>
                <li style={{ marginBottom: '0.5em' }}><strong>孤独感：</strong>一人での海外生活による孤独感</li>
                <li style={{ marginBottom: '0.5em' }}><strong>帰国後の不安：</strong>日本での就職活動への影響</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. よくある質問（FAQ） */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#2563eb', 
            margin: '0 0 1.2em 0',
            borderBottom: '3px solid #2563eb',
            paddingBottom: '0.5em'
          }}>
            よくある質問（FAQ）
          </h2>
          
          <div style={{ background: '#f8f9fa', padding: '1.5em', borderRadius: 12, border: '1px solid #e9ecef' }}>
            <div style={{ marginBottom: '2em' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', margin: '0 0 0.8em 0' }}>
                Q. 英語ができなくても大丈夫ですか？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
                A. 基本的な英語力は必要ですが、完璧である必要はありません。現地で生活しながら語学力を向上させることができます。ただし、最低限の日常会話ができるレベルはあった方が安心です。
              </p>
            </div>
            
            <div style={{ marginBottom: '2em' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', margin: '0 0 0.8em 0' }}>
                Q. 何歳から行けますか？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
                A. 18歳から申請可能です。上限年齢は国によって異なり、30歳まで（一部の国では35歳まで）となっています。年齢制限に達する前に申請する必要があります。
              </p>
            </div>
            
            <div style={{ marginBottom: '2em' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', margin: '0 0 0.8em 0' }}>
                Q. 現地での仕事はどう探すの？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
                A. 求人サイト、現地の求人情報誌、友人や知人の紹介、直接店舗に問い合わせるなど、様々な方法があります。レストラン、カフェ、農場、ホテルなどが一般的です。
              </p>
            </div>
            
            <div style={{ marginBottom: '2em' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', margin: '0 0 0.8em 0' }}>
                Q. どのくらいの資金が必要ですか？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
                A. 国によって異なりますが、往復航空券代金と最低3ヶ月分の生活費（約50〜100万円）が必要です。保険料や初期費用も含めて、余裕を持った資金計画を立てることをお勧めします。
              </p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', margin: '0 0 0.8em 0' }}>
                Q. 一人で行くのは不安です。どうすればいいですか？
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#333', margin: 0 }}>
                A. 同じ志を持つ仲間と事前に知り合っておくことをお勧めします。SNSやコミュニティで情報交換をしたり、同じ時期に渡航する人と連絡を取ったりすることで、不安を軽減できます。
              </p>
            </div>
          </div>
        </section>

        {/* 5. どんな人に向いているか */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#2563eb', 
            margin: '0 0 1.2em 0',
            borderBottom: '3px solid #2563eb',
            paddingBottom: '0.5em'
          }}>
            どんな人に向いているか
          </h2>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', 
            padding: '1.5em', 
            borderRadius: 12,
            border: '1px solid #fbbf24'
          }}>
            <ul style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#92400e', margin: 0, paddingLeft: '1.5em' }}>
              <li style={{ marginBottom: '0.8em' }}><strong>🌍 海外で働いてみたい人</strong> - 海外での就労経験を積みたい方</li>
              <li style={{ marginBottom: '0.8em' }}><strong>💪 自立したい人</strong> - 一人で海外生活を送り、自立心を育てたい方</li>
              <li style={{ marginBottom: '0.8em' }}><strong>🚀 新しい挑戦をしたい人</strong> - 未知の環境でチャレンジしたい方</li>
              <li style={{ marginBottom: '0.8em' }}><strong>🗣️ 語学力を向上させたい人</strong> - 実践的な語学力を身につけたい方</li>
              <li style={{ marginBottom: '0.8em' }}><strong>🤝 国際的な人脈を作りたい人</strong> - 世界中の友人やビジネスパートナーを作りたい方</li>
              <li style={{ marginBottom: '0.8em' }}><strong>🎯 キャリアの方向性を決めたい人</strong> - 海外経験を通じて将来のキャリアを考えたい方</li>
            </ul>
          </div>
        </section>

        {/* 6. まとめ */}
        <section style={{ marginBottom: '3em' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#2563eb', 
            margin: '0 0 1.2em 0',
            borderBottom: '3px solid #2563eb',
            paddingBottom: '0.5em'
          }}>
            まとめ
          </h2>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)', 
            padding: '1.5em', 
            borderRadius: 12,
            border: '1px solid #a5b4fc'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#3730a3', margin: '0 0 1em 0' }}>
              ワーキングホリデー制度は、若者にとって<strong>海外で働きながら生活できる貴重な機会</strong>です。語学力の向上、国際経験の獲得、自立心の育成など、多くのメリットがあります。
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#3730a3', margin: '0 0 1em 0' }}>
              ただし、収入の不安定性や文化ギャップなどのデメリットも理解した上で、しっかりとした準備をしてから挑戦することが重要です。
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#3730a3', margin: 0 }}>
              他のビザ（学生ビザ、就労ビザ）と比べて、<strong>自由度が高く、就労・就学・観光を自由に組み合わせられる</strong>のがワーキングホリデービザの大きな特徴です。
            </p>
          </div>
        </section>

        {/* 7. コミュニティ導線 */}
        <section style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          padding: '2em', 
          borderRadius: 16,
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1em 0' }}>
            🤝 ワーホリ仲間とつながろう
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, margin: '0 0 1.5em 0', opacity: 0.9 }}>
            実際にワーホリへ行く前に、同じ志を持つ仲間とつながりたい方は、<br />
            有料Discordコミュニティもご覧ください。
          </p>
          <button 
            onClick={() => router.push("/lp")}
            style={{
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
            }}
          >
            コミュニティに参加する
          </button>
        </section>

        <div style={{ fontSize: '0.95rem', color: '#888', textAlign: 'right', marginTop: '2.2em' }}>
          ※ 詳細は各国大使館・公式サイト等でご確認ください
        </div>
      </main>
    </>
  );
} 