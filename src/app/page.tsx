import Link from "next/link"
import { formatDate } from "@/lib/utils"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

// モックデータを直接定義
const mockBlogPosts: BlogPost[] = [
  {
    slug: "minimalist-design-principles",
    title: "ミニマリストデザインの原則",
    excerpt:
      "シンプルで効果的なデザインを作るための基本的な原則について探求します。余白の使い方、タイポグラフィ、そして色彩の選択について詳しく解説します。",
    date: "2024-01-15",
    readTime: "5分で読める",
    tags: ["デザイン", "ミニマリズム", "UI/UX"],
  },
  {
    slug: "modern-web-development",
    title: "モダンWeb開発のトレンド",
    excerpt:
      "2024年のWeb開発における最新のトレンドと技術について解説します。React、Next.js、TypeScriptなどの現代的な開発手法を紹介します。",
    date: "2024-01-10",
    readTime: "8分で読める",
    tags: ["Web開発", "React", "Next.js", "TypeScript"],
  },
  {
    slug: "productivity-tips",
    title: "生産性を向上させる5つの習慣",
    excerpt:
      "日々の作業効率を劇的に改善するための実践的な習慣とテクニックを紹介します。時間管理、集中力の向上、そして持続可能な働き方について。",
    date: "2024-01-05",
    readTime: "6分で読める",
    tags: ["生産性", "ライフハック", "時間管理"],
  },
]

async function getBlogPosts(): Promise<BlogPost[]> {
  // モックデータを返す（APIの代わり）
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockBlogPosts), 100)
  })
}

export default async function HomePage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-black mb-2">Monochrome Blog</h1>
          <p className="text-gray-600 text-lg">シンプルで洗練されたブログ</p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="border-l-4 border-gray-200 pl-6 hover:border-black transition-colors duration-200">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* フッター */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-500 text-center">© 2024 Monochrome Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
