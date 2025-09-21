'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-6xl mb-4">🚨</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              システムエラーが発生しました
            </h1>
            <p className="text-gray-600 mb-6">
              申し訳ございません。システムに問題が発生しました。
              しばらく時間をおいてから再度お試しください。
            </p>
            <button
              onClick={reset}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              再試行
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
