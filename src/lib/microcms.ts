import { createClient } from "microcms-js-sdk"

if (!process.env.MICROCMS_API_SUBDOMAIN) {
  throw new Error("MICROCMS_API_SUBDOMAIN is required")
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required")
}

// MicroCMSクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_API_SUBDOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

// ブログ記事の型定義
export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  tags: string
  author: string
  eyecatch?: {
    url: string
    width: number
    height: number
  }
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

// MicroCMSのレスポンス型
export interface BlogResponse {
  contents: BlogPost[]
  totalCount: number
  offset: number
  limit: number
}

// タグ文字列を配列に変換するユーティリティ関数
export const parseTagsString = (tagsString: string): string[] => {
  if (!tagsString || typeof tagsString !== "string") {
    return []
  }

  return tagsString
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
}

// タグ配列を文字列に変換するユーティリティ関数（必要に応じて）
export const stringifyTags = (tags: string[]): string => {
  return tags.join(", ")
}

// 記事一覧を取得
export const getBlogPosts = async (limit = 10, offset = 0): Promise<BlogResponse> => {
  try {
    const response = await client.getList<BlogPost>({
      endpoint: "blogs",
      queries: {
        limit,
        offset,
        orders: "-publishedAt",
      },
    })
    return response
  } catch (error) {
    console.error("ブログ記事の取得に失敗しました:", error)
    throw new Error("ブログ記事の取得に失敗しました")
  }
}

// 個別記事を取得
export const getBlogPost = async (slug: string): Promise<BlogPost> => {
  try {
    const response = await client.getList<BlogPost>({
      endpoint: "blogs",
      queries: {
        filters: `slug[equals]${slug}`,
        limit: 1,
      },
    })

    if (response.contents.length === 0) {
      throw new Error("記事が見つかりません")
    }

    return response.contents[0]
  } catch (error) {
    console.error("記事の取得に失敗しました:", error)
    throw new Error("記事の取得に失敗しました")
  }
}

// 読み取り時間を計算する関数
export const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 400 // 日本語の平均読書速度（文字/分）
  const wordCount = content.length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return `${readTime}分で読める`
}
