import { NextResponse } from "next/server"
import { getBlogPost, parseTagsString } from "@/lib/microcms"

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const post = await getBlogPost(slug)

    return NextResponse.json({
      id: post.id,
      slug: post.slug,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      tags: parseTagsString(post.tags), // 文字列を配列に変換
      author: post.author,
      eyecatch: post.eyecatch,
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "記事が見つかりません" }, { status: 404 })
  }
}
