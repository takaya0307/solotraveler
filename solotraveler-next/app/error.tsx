'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラーをログに記録
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          エラーが発生しました
        </h1>
        <p className="text-gray-600 mb-6">
          申し訳ございません。予期しないエラーが発生しました。
          しばらく時間をおいてから再度お試しください。
        </p>
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          再試行
        </button>
        <div className="mt-4">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ホームページに戻る
          </a>
        </div>
      </div>
    </div>
  )
}
