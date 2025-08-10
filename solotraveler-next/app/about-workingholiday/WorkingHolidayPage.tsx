"use client";

import React from "react";
import Link from "next/link";

export function WorkingHolidayPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600">
              ワーホリパス
            </Link>
            <nav className="space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                ホーム
              </Link>
              <Link href="/legal" className="text-gray-600 hover:text-gray-900">
                利用規約
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            ワーキングホリデー制度とは？
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              ワーキングホリデー制度は、18歳から30歳（一部の国では35歳まで）の若者が、相手国で一定期間、休暇を楽しみながら、その間の滞在費を補うために就労することを認める制度です。
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              制度の特徴
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>対象年齢：18歳〜30歳（一部35歳まで）</li>
              <li>滞在期間：通常1年間</li>
              <li>就労可能：滞在費を補うための就労が認められる</li>
              <li>就学可能：語学学校や専門学校での学習も可能</li>
              <li>文化体験：現地の文化や生活を体験できる</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              メリット
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>海外での生活体験</li>
              <li>語学力の向上</li>
              <li>異文化理解の促進</li>
              <li>国際的な人脈の構築</li>
              <li>就職活動でのアピールポイント</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              デメリット・注意点
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>初期費用がかかる（航空券、保険、初期生活費など）</li>
              <li>現地での就労は限定的</li>
              <li>言語の壁や文化の違い</li>
              <li>孤独感やホームシック</li>
              <li>帰国後の就職活動の再開</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              協定国一覧
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">オセアニア</h3>
                <ul className="text-sm space-y-1">
                  <li>• オーストラリア</li>
                  <li>• ニュージーランド</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">北米</h3>
                <ul className="text-sm space-y-1">
                  <li>• カナダ</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">ヨーロッパ</h3>
                <ul className="text-sm space-y-1">
                  <li>• イギリス</li>
                  <li>• アイルランド</li>
                  <li>• ドイツ</li>
                  <li>• フランス</li>
                  <li>• スペイン</li>
                  <li>• イタリア</li>
                  <li>• ポルトガル</li>
                  <li>• オーストリア</li>
                  <li>• ノルウェー</li>
                  <li>• デンマーク</li>
                  <li>• ポーランド</li>
                  <li>• チェコ</li>
                  <li>• ハンガリー</li>
                  <li>• スロバキア</li>
                  <li>• アイスランド</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">アジア</h3>
                <ul className="text-sm space-y-1">
                  <li>• 韓国</li>
                  <li>• 台湾</li>
                  <li>• 香港</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              よくある質問
            </h2>
            <div className="space-y-4 mb-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Q: 年齢制限はありますか？</h3>
                <p className="text-gray-600">A: 基本的に18歳から30歳までですが、一部の国では35歳まで対象となる場合があります。</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Q: どのくらいの期間滞在できますか？</h3>
                <p className="text-gray-600">A: 通常は1年間ですが、国によっては延長可能な場合もあります。</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Q: 現地で働くことはできますか？</h3>
                <p className="text-gray-600">A: はい、滞在費を補うための就労が認められています。ただし、就労時間に制限がある場合があります。</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                国別の詳細情報を見る
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 