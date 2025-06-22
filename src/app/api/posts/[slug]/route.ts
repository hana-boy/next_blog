import { NextResponse } from "next/server"
import { getBlogPost } from "@/lib/microcms"

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
      tags: post.tags?.split(',').map((tag: string) => tag.trim()) ?? [],
      author: post.author,
      eyecatch: post.eyecatch,
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "記事が見つかりません" }, { status: 404 })
  }
}
