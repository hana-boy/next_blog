import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import { getBlogPost, calculateReadTime, parseTagsString, type BlogPost } from "@/lib/microcms"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// 動的メタデータの生成
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = await getBlogPost(slug)
    const tags = parseTagsString(post.tags) // 文字列を配列に変換

    // 基本的なメタデータ
    const title = `${post.title} | hana-boy Blog`
    const description = post.excerpt || `${post.title}についての記事です。`
    const url = `${process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com"}/blog/${slug}`

    // OG画像のURL（アイキャッチがある場合はそれを使用、なければデフォルト）
    const ogImage =
      post.eyecatch?.url || `${process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com"}/og-default.png`

    return {
      title,
      description,
      keywords: tags.join(", "), // 配列をカンマ区切りの文字列に変換
      authors: [{ name: post.author }],
      creator: post.author,
      publisher: "hana-boy Blog",

      // Open Graph
      openGraph: {
        title: post.title,
        description,
        url,
        siteName: "hana-boy Blog",
        images: [
          {
            url: ogImage,
            width: post.eyecatch?.width || 1200,
            height: post.eyecatch?.height || 630,
            alt: post.title,
          },
        ],
        locale: "ja_JP",
        type: "article",
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt,
        authors: [post.author],
        tags: tags, // 配列として設定
      },

      // Twitter Card
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description,
        images: [ogImage],
        creator: "@hana_boy_",
      },

      // その他のメタデータ
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

      // 構造化データ用
      other: {
        "article:published_time": post.publishedAt,
        "article:modified_time": post.updatedAt,
        "article:author": post.author,
        "article:section": tags.join(", "),
        "article:tag": tags.join(", "),
      },
    }
  } catch (error) {
    console.error("メタデータの生成に失敗しました:", error)

    // エラー時のフォールバックメタデータ
    return {
      title: "記事が見つかりません | hana-boy Blog",
      description: "指定された記事が存在しないか、取得に失敗しました。",
      robots: {
        index: false,
        follow: false,
      },
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  let post: BlogPost
  try {
    post = await getBlogPost(slug)
  } catch (error) {
    console.error("記事の取得に失敗しました:", error)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-6">
          <h1 className="text-4xl font-bold text-black mb-4">記事が見つかりません</h1>
          <p className="text-gray-600 mb-8">指定された記事が存在しないか、取得に失敗しました。</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            ブログ一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  const readTime = calculateReadTime(post.content)
  const tags = parseTagsString(post.tags) // 文字列を配列に変換

  // 構造化データ（JSON-LD）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.eyecatch?.url,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "hana-boy Blog",
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com"}/blog/${slug}`,
    },
    keywords: tags.join(", "), // 配列をカンマ区切りの文字列に変換
  }

  return (
    <>
      {/* 構造化データ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* ヘッダー */}
        <header className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              ブログ一覧に戻る
            </Link>
          </div>
        </header>

        {/* 記事コンテンツ */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <article>
            {/* 記事ヘッダー */}
            <header className="mb-12">
              {/* アイキャッチ画像 */}
              {post.eyecatch && (
                <div className="mb-8">
                  <img
                    src={post.eyecatch.url || "/placeholder.svg"}
                    alt={post.title}
                    width={post.eyecatch.width}
                    height={post.eyecatch.height}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span>•</span>
                <span>{readTime}</span>
                <span>•</span>
                <span>by {post.author}</span>
              </div>

              <h1 className="text-4xl font-bold text-black mb-6 leading-tight">{post.title}</h1>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* マークダウンコンテンツ */}
            <MarkdownRenderer content={post.content} />
          </article>

          {/* 記事フッター */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              他の記事を読む
            </Link>
          </footer>
        </main>
      </div>
    </>
  )
}
