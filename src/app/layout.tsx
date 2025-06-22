import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HanaBoy TechBlog',
  description: 'HanaBoy TechBlog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 text-gray-900">
        <main className="max-w-6xl mx-auto p-6">{children}</main>
        <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-gray-500 text-center">
            © 2025 HanaBoy Blog. All rights reserved.
          </p>
        </div>
      </footer>
      </body>
    </html>
  )
}
