import { NextResponse } from "next/server"
import { getBlogPosts } from "@/lib/microcms"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    const response = await getBlogPosts(limit, offset)

    return NextResponse.json({
      posts: response.contents.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        tags: post.tags?.split(',').map((tag: string) => tag.trim()) ?? [],
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
