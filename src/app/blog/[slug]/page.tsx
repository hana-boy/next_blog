import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { formatDate } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  content: string
  date: string
  readTime: string
  tags: string[]
  author: string
}

// モックデータを直接定義
const mockBlogPostsWithContent: BlogPost[] = [
  {
    slug: "minimalist-design-principles",
    title: "ミニマリストデザインの原則",
    date: "2024-01-15",
    readTime: "5分で読める",
    tags: ["デザイン", "ミニマリズム", "UI/UX"],
    author: "デザイナー田中",
    content: `# ミニマリストデザインの原則

ミニマリストデザインは、「少ないほど豊か」という哲学に基づいています。この記事では、効果的なミニマリストデザインを作るための基本原則を探求します。

## 余白の力

余白（ホワイトスペース）は、ミニマリストデザインの最も重要な要素の一つです。適切な余白は：

- コンテンツの可読性を向上させる
- 視覚的な階層を作り出す
- ユーザーの注意を重要な要素に向ける

## タイポグラフィの選択

ミニマリストデザインでは、タイポグラフィが主役になることが多いです。

### フォントの選び方

1. **可読性を最優先に**：装飾的すぎるフォントは避ける
2. **一貫性を保つ**：使用するフォントファミリーを2-3種類に制限
3. **階層を明確に**：サイズとウェイトで情報の重要度を表現

## 色彩の制限

ミニマリストデザインでは、色彩を制限することで強いインパクトを生み出します。

> "完璧とは、付け加えるものがなくなったときではなく、取り除くものがなくなったときに達成される。" - アントワーヌ・ド・サン＝テグジュペリ

## 実践的なアプローチ

ミニマリストデザインを実践する際は、以下のステップを踏むことをお勧めします：

1. **目的を明確にする**
2. **不要な要素を取り除く**
3. **残った要素を最適化する**
4. **ユーザビリティをテストする**

ミニマリストデザインは単純に見えますが、実際には高度な技術と深い理解が必要です。継続的な練習と改善を通じて、真に効果的なミニマリストデザインを作り上げることができるでしょう。`,
  },
  {
    slug: "modern-web-development",
    title: "モダンWeb開発のトレンド",
    date: "2024-01-10",
    readTime: "8分で読める",
    tags: ["Web開発", "React", "Next.js", "TypeScript"],
    author: "エンジニア佐藤",
    content: `# モダンWeb開発のトレンド

Web開発の世界は急速に進化しています。この記事では、2024年における最新のトレンドと技術について詳しく解説します。

## React Ecosystemの進化

Reactエコシステムは継続的に進化しており、以下のような新機能が注目されています：

### Server Components

Server Componentsは、サーバーサイドでレンダリングされるReactコンポーネントです。

\`\`\`jsx
// Server Component例
async function BlogPost({ id }) {
  const post = await fetchPost(id)
  return <article>{post.content}</article>
}
\`\`\`

### Concurrent Features

- **Suspense**: 非同期データの読み込み状態を管理
- **useTransition**: 重い処理を非同期で実行
- **useDeferredValue**: 値の更新を遅延させる

## TypeScriptの重要性

TypeScriptは現代のWeb開発において必須の技術となっています。

### 主な利点

1. **型安全性**: コンパイル時にエラーを検出
2. **開発効率**: IDEの支援機能が充実
3. **保守性**: 大規模プロジェクトでの可読性向上

## Next.js App Router

Next.js 13で導入されたApp Routerは、ファイルベースルーティングの新しいアプローチです。

### 主な特徴

- **レイアウトの共有**: 複数ページで共通のレイアウトを使用
- **ネストしたルーティング**: 階層的なページ構造
- **ストリーミング**: 部分的なページレンダリング

## パフォーマンス最適化

モダンWeb開発では、パフォーマンスが重要な要素です：

- **Core Web Vitals**: Googleが定義するユーザー体験指標
- **Code Splitting**: 必要な部分のみを読み込み
- **Image Optimization**: 次世代画像フォーマットの活用

## まとめ

モダンWeb開発は複雑に見えますが、適切なツールと手法を使用することで、高品質なWebアプリケーションを効率的に開発できます。継続的な学習と実践が成功の鍵となります。`,
  },
  {
    slug: "productivity-tips",
    title: "生産性を向上させる5つの習慣",
    date: "2024-01-05",
    readTime: "6分で読める",
    tags: ["生産性", "ライフハック", "時間管理"],
    author: "コンサルタント山田",
    content: `# 生産性を向上させる5つの習慣

現代の忙しい生活において、生産性の向上は重要な課題です。この記事では、実践的で持続可能な5つの習慣を紹介します。

## 1. 朝のルーティンを確立する

朝の時間は一日の基調を決める重要な時間です。

### 効果的な朝のルーティン

- **早起き**: 6時前に起床する
- **瞑想**: 10分間の瞑想で心を整える
- **運動**: 軽いストレッチや散歩
- **計画**: その日の優先事項を3つ決める

## 2. ポモドーロテクニックの活用

25分間の集中作業と5分間の休憩を繰り返すテクニックです。

### 実践方法

1. タスクを選択する
2. 25分間集中して作業
3. 5分間休憩
4. 4回繰り返したら長い休憩（15-30分）

## 3. デジタルデトックス

情報過多は集中力を阻害します。

### 実践的なアプローチ

- **通知をオフ**: 作業中はスマートフォンの通知を無効化
- **SNS時間制限**: 1日30分以内に制限
- **メール確認**: 決まった時間にのみチェック

## 4. 優先順位の明確化

すべてのタスクが同じ重要度ではありません。

### アイゼンハワーマトリックス

| 緊急 | 重要 | アクション |
|------|------|-----------|
| ○ | ○ | すぐに実行 |
| × | ○ | スケジュール |
| ○ | × | 委任 |
| × | × | 削除 |

## 5. 継続的な学習

スキルの向上は長期的な生産性向上につながります。

### 学習の習慣化

- **読書**: 毎日30分の読書時間を確保
- **オンライン学習**: 通勤時間を活用
- **実践**: 学んだことをすぐに実践

## まとめ

生産性の向上は一朝一夕には実現できません。これらの習慣を段階的に取り入れ、自分に合った方法を見つけることが重要です。小さな変化の積み重ねが、大きな成果につながります。`,
  },
]

async function getBlogPost(slug: string): Promise<BlogPost> {
  // モックデータから該当する記事を検索
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = mockBlogPostsWithContent.find((p) => p.slug === slug)
      if (!post) {
        reject(new Error("記事が見つかりません"))
      } else {
        resolve(post)
      }
    }, 100)
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

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
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>by {post.author}</span>
            </div>

            <h1 className="text-4xl font-bold text-black mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* マークダウンコンテンツ */}
          <div className="prose prose-lg prose-gray max-w-none">
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
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
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
