import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'hana-boy TechBlog',
  description: 'hana-boy TechBlog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-PD81W30D25`} // ← 自分のIDに置き換え
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PD81W30D25');
            `,
          }}
        />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
