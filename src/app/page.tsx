import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { getBlogPosts, calculateReadTime, type BlogPost } from "@/lib/microcms"

interface BlogPostSummary {
  id: string
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readTime: string
  tags: string[]
  // tags: string
  eyecatch?: {
    url: string
    width: number
    height: number
  }
}

async function getFormattedBlogPosts(): Promise<BlogPostSummary[]> {
  try {
    const response = await getBlogPosts(10, 0)

    return response.contents.map((post: BlogPost) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      readTime: calculateReadTime(post.content),
      tags: post.tags?.split(',').map((tag: string) => tag.trim()) ?? [],
      eyecatch: post.eyecatch,
    }))
  } catch (error) {
    console.error("記事の取得に失敗しました:", error)
    // フォールバック用のモックデータ
    return [
      {
        id: "1",
        slug: "fallback-post",
        title: "記事の読み込みに失敗しました",
        excerpt: "記事取得に失敗しました。",
        publishedAt: new Date().toISOString(),
        readTime: "1分で読める",
        tags: ["Tech"],
      },
    ]
  }
}

export default async function HomePage() {
  const posts = await getFormattedBlogPosts()

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-black mb-2">HanaBoy Blog</h1>
          <p className="text-gray-600 text-lg">エンジニア関連の記事を書いているブログ</p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="border-l-4 border-gray-200 pl-6 hover:border-black transition-colors duration-200">
                  {/* アイキャッチ画像 */}
                  {post.eyecatch && (
                    <div className="mb-4">
                      <img
                        src={post.eyecatch.url || "/placeholder.svg"}
                        alt={post.title}
                        width={post.eyecatch.width}
                        height={post.eyecatch.height}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-4">{post.excerpt}</p>

                  {/* <div className="flex flex-wrap gap-2">
                    {post.tags?.split(',').map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
