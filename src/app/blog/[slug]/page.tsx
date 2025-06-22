import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { formatDate } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import { getBlogPost, calculateReadTime, type BlogPost } from "@/lib/microcms"
import { MarkdownRenderer } from "@/components/markdown-renderer"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
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

  return (
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

            {/* <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag.name} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {tag.name}
                </span>
              ))}
            </div> */}
          </header>

          {/* マークダウンコンテンツ */}
          {/* <div className="prose prose-lg prose-gray max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-black mt-12 mb-6 first:mt-0">{children}</h1>
                ),
                h2: ({ children }) => <h2 className="text-2xl font-bold text-black mt-10 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold text-black mt-8 mb-3">{children}</h3>,
                p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-6">{children}</p>,
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">{children}</ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-600 my-8">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">{children}</code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-8">{children}</pre>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-black underline hover:text-gray-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => (
                  <img src={src || "/placeholder.svg"} alt={alt} className="w-full rounded-lg my-8" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div> */}
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
  )
}
