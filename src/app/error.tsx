"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <h1 className="text-4xl font-bold text-black mb-4">エラーが発生しました</h1>
        <p className="text-gray-600 mb-8">申し訳ございません。ページの読み込み中にエラーが発生しました。</p>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            再試行
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
