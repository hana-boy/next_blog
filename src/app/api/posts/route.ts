import { NextResponse } from "next/server"
import { getBlogPosts, parseTagsString } from "@/lib/microcms"

export async function GET(request: Request) {
  try {
    const response = await getBlogPosts(30, 0)

    return NextResponse.json({
      posts: response.contents.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        tags: parseTagsString(post.tags), // 文字列を配列に変換
        author: post.author,
      })),
      totalCount: response.totalCount,
      hasMore: response.offset + response.contents.length < response.totalCount,
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "ブログ記事の取得に失敗しました" }, { status: 500 })
  }
}
