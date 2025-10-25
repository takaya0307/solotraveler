import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import OptimizedImage from "../components/OptimizedImage";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: 'ワーホリ記事一覧 | ワーホリパス',
  description: 'ワーホリ情報を網羅した記事一覧。各国の詳細情報、都市ガイド、体験談などをチェックして、あなたにぴったりのワーホリ先を見つけましょう。',
  keywords: 'ワーホリ記事,ワーホリ情報,海外移住,ワーキングホリデー',
  openGraph: {
    title: 'ワーホリ記事一覧 | ワーホリパス',
    description: 'ワーホリ情報を網羅した記事一覧。各国の詳細情報、都市ガイド、体験談などをチェックして、あなたにぴったりのワーホリ先を見つけましょう。',
    url: 'https://workingholidaypass.jp/articles',
    siteName: 'ワーホリパス',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: 'ワーホリ記事一覧',
      },
    ],
  },
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* メインコンテンツ */}
      <main className="pt-20">
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ワーホリ記事一覧
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-4xl mx-auto">
              ワーホリ情報を網羅した記事をチェックして、<br />
              あなたにぴったりのワーホリ先を見つけましょう
            </p>
          </div>
        </section>

        {/* 記事一覧セクション */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                記事一覧
              </h2>
            </div>

            {/* 記事カード */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* ワーホリとは記事カード */}
              <Link
                href="/about-workingholiday"
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src="/images/airport.jpg"
                    alt="空港の様子"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    ワーホリとは
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    ワーキングホリデー制度の基本的な仕組みや条件、申請方法について詳しく解説します。
                  </p>
                
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-blue-600 font-medium group-hover:text-blue-700 flex items-center gap-1">
                      詳細を見る
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/* その他の記事カード（準備中） */}
              <div className="group bg-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-100 opacity-60">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl text-gray-300">📝</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-500">
                    準備中
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-400 mb-3">
                    記事を準備中
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    詳細な記事を準備しています。
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex items-center justify-between">
                      <span>内容:</span>
                      <span>準備中</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-gray-400 font-medium">
                      近日公開予定
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-200 px-2 py-1 rounded-full">
                      準備中
                    </span>
                  </div>
                </div>
              </div>

              <div className="group bg-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-100 opacity-60">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl text-gray-300">📝</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-500">
                    準備中
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-400 mb-3">
                    記事を準備中
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    詳細な記事を準備しています。
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex items-center justify-between">
                      <span>内容:</span>
                      <span>準備中</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-gray-400 font-medium">
                      近日公開予定
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-200 px-2 py-1 rounded-full">
                      準備中
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA セクション */}
        <section className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-3">
              まだ迷っている方へ
            </h2>
            <p className="text-base mb-6 text-gray-300">
              ワーホリの準備や計画について、専門家に相談してみませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://px.a8.net/svt/ejp?a8mat=45C1IF+AMTQR6+5S4I+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.iss-ryugakulife.com%2Fcounseling"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                target="_blank"
                rel="nofollow"
              >
                ワーホリ無料相談
              </Link>
              <Link
                href="/about-workingholiday"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                ワーホリ制度の詳細
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
