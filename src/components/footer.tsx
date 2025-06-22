import Link from "next/link"
import { Github, ExternalLink, User } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ブログ情報 */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">hana-boy Blog</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              主にエンジニア、技術について発信しています。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">About This Blog</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                ブログ記事一覧
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 text-sm"
              >
                <User size={16} />
                自己紹介
              </Link>
            </nav>
          </div>

          {/* ソーシャルリンク */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Link</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/hana-boy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors duration-200 text-sm group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform duration-200" />
                <span>GitHub</span>
                <ExternalLink size={14} className="opacity-50" />
              </a>
              <a
                href="https://zenn.dev/hana_boy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors duration-200 text-sm group"
              >
                <div className="w-[18px] h-[18px] bg-black rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <span>Zenn</span>
                <ExternalLink size={14} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 hana-boy Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
