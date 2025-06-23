import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Mail, MapPin, Calendar, Code, Palette, Coffee, Languages } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "自己紹介 | hana-boy Blog",
  description:
    "SREエンジニアのhana-boyの自己紹介ページ。経歴、スキル、趣味について紹介しています。",
  keywords: "エンジニア, React, Next.js, TypeScript, SRE",
  authors: [{ name: "hana-boy" }],
  creator: "hana-boy",

  openGraph: {
    title: "自己紹介 | hana-boy Blog",
    description: "エンジニアのhana-boyの自己紹介ページ",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com"}/about`,
    siteName: "hana-boy Blog",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com"}/og-about.png`,
        width: 1200,
        height: 630,
        alt: "hana-boy - SREエンジニア",
      },
    ],
    locale: "ja_JP",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "自己紹介 | hana-boy Blog",
    description: "エンジニアのhana-boyの自己紹介ページ",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL || "https://hana-boy.com"}/og-about.png`],
    creator: "@hana_boy_",
  },
}

export default function AboutPage() {
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

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-16">
          {/* プロフィールセクション */}
          <section className="text-center">
            <div className="mb-8">
              <img
                src="/hana-boy-icon.png"
                alt="プロフィール写真"
                className="w-32 h-32 rounded-full mx-auto border-4 border-gray-200 shadow-sm"
              />
            </div>
            <h1 className="text-4xl font-bold text-black mb-4">hana-boy</h1>
            <p className="text-xl text-gray-600 mb-6">SREエンジニア</p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>東京, 日本</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>エンジニア歴 4年目</span>
              </div>
            </div>
          </section>

          {/* 自己紹介 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-2">自己紹介</h2>
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                こんにちは！
                <br/>
                SREエンジニアのhana-boyです。
                <br/>
                元々バックエンドをやっていましたが、インフラが面白く、現在はインフラメインにやっています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                現在は受託開発企業でバックエンド・インフラエンジニアとして働きながら、
                個人開発など取り組んでいます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                プライベートでは、サッカー観戦が趣味で、語学を勉強中です。
                新しい技術を学ぶことが好きです。
              </p>
            </div>
          </section>

          {/* スキル */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-2">スキル・技術</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Palette size={20} className="text-gray-600" />
                  <h3 className="text-lg font-bold text-black">インフラ</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Docker / Kubernetes - 業務で1年半くらい</li>
                  <li>Google Cloud - 業務で2年半くらい</li>
                  <li>AWS - 社内のHPで1年半くらい</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code size={20} className="text-gray-600" />
                  <h3 className="text-lg font-bold text-black">バックエンド・ミドルウェア</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>PHP / Laravel - 業務で2年半くらい</li>
                  <li>Java / SpringBoot - 業務で半年くらい</li>
                  <li>MySQL - 業務で2年半くらい</li>
                  <li>CloudSpanner - 業務で半年くらい</li>
                  <li>Kafka - 業務で半年くらい</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 経歴 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-2">経歴</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gray-200 pl-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span>2025年 - 現在</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">SREエンジニア</h3>
                <p className="text-gray-700 text-sm">
                  受託開発でECサイトのインフラ構築を担当しています。
                  <br/>
                  TerraformでGoogleCloudリソース作成したり、Kubernetesのマニフェスト書いたりしています。
                </p>
              </div>
              <div className="border-l-4 border-gray-200 pl-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span>2023年 - 現在</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">バックエンド・インフラエンジニア</h3>
                <p className="text-gray-700 text-sm">
                  受託開発でシニア向け健康アプリのバックエンド開発・インフラ構築を担当しています。
                  <br/>
                  元々はバックエンドで、Laravelを使用したAPIサーバーの設計・開発を担当していました。
                  <br/>
                  今はGoogleCloudを使ってGKEなどの運用・構築をしたり、障害対応をメインにしています。
                </p>
              </div>
              <div className="border-l-4 border-gray-200 pl-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span>2022年 - 2023年</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">インフラエンジニア</h3>
                <p className="text-gray-700 text-sm">
                  花市場向けのせりシステムのインフラ構築していました。
                  <br/>
                  たまにせり見学行ったりしてました。
                </p>
              </div>
            </div>
          </section>

          {/* 趣味・興味 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-2">趣味・興味</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Coffee size={20} className="text-gray-600 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">サッカー</h3>
                  <p className="text-gray-700 text-sm">
                    サッカー観戦が好きです。
                    <br/>
                    チームはFC町田ゼルビアを応援してます。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Languages size={20} className="text-gray-600 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">語学</h3>
                  <p className="text-gray-700 text-sm">
                    1年間中国に留学してたことがあります。
                    <br/>
                    現在は英語でドキュメント読めるようにしたいので、英語勉強中です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 連絡先 */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-2">リンク</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Github size={18} className="text-gray-600" />
                <a
                  href="https://github.com/hana-boy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-200"
                >
                  <span>GitHub</span>
                  <ExternalLink size={14} className="opacity-50" />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[18px] h-[18px] bg-black rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <a
                  href="https://zenn.dev/hana_boy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-200"
                >
                  <span>Zenn</span>
                  <ExternalLink size={14} className="opacity-50" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
