import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { getBlogPosts, calculateReadTime, parseTagsString, type BlogPost } from "@/lib/microcms"
import type { Metadata } from "next"

// ホームページのメタデータ
export const metadata: Metadata = {
  title: "hana-boy Blog",
  description: "エンジニア関連の記事を書いているブログ。",
  keywords: "ブログ, 技術, Next.js, MicroCMS, Docker, Kubernetes, Tech",
  authors: [{ name: "hana-boy Blog" }],
  creator: "hana-boy Blog",
  publisher: "hana-boy Blog",

  openGraph: {
    title: "hana-boy Blog",
    description: "エンジニア関連の記事を書いているブログ",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com",
    siteName: "hana-boy Blog",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com"}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "hana-boy Blog",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "hana-boy Blog",
    description: "エンジニア関連の記事を書いているブログ",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com"}/og-default.png`],
    creator: "@hana_boy_",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

interface BlogPostSummary {
  id: string
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readTime: string
  tags: string[]
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
      tags: parseTagsString(post.tags), // 文字列を配列に変換
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

  // 構造化データ（JSON-LD）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "hana-boy Blog",
    description: "エンジニア関連の記事を書いているブログ",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com",
    author: {
      "@type": "Person",
      name: "hana-boy Blog",
    },
    publisher: {
      "@type": "Organization",
      name: "hana-boy Blog",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com"}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      image: post.eyecatch?.url,
    })),
  }

  return (
    <>
      {/* 構造化データ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* ヘッダー */}
        <header className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-black mb-2">hana-boy Blog</h1>
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
      </div>
    </>
  )
}
