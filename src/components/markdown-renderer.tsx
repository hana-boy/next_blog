import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import rehypeRaw from "rehype-raw"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // 見出し
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-black mt-12 mb-6 first:mt-0 border-b border-gray-200 pb-3">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-black mt-10 mb-4 border-b border-gray-100 pb-2">{children}</h2>
          ),
          h3: ({ children }) => <h3 className="text-xl font-bold text-black mt-8 mb-3">{children}</h3>,
          h4: ({ children }) => <h4 className="text-lg font-bold text-black mt-6 mb-2">{children}</h4>,
          h5: ({ children }) => <h5 className="text-base font-bold text-black mt-4 mb-2">{children}</h5>,
          h6: ({ children }) => <h6 className="text-sm font-bold text-black mt-4 mb-2">{children}</h6>,

          // 段落と改行
          p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-6">{children}</p>,
          br: () => <br className="mb-2" />,

          // リスト
          ul: ({ children }) => <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 pl-4">{children}</ul>,
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2 pl-4">{children}</ol>
          ),
          li: ({ children }) => <li className="text-gray-700 leading-relaxed">{children}</li>,

          // 引用
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-600 my-8 bg-gray-50 py-4 rounded-r-lg">
              {children}
            </blockquote>
          ),

          // コード
          code: ({ inline, children }: any) => {
            if (inline) {
              return <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">{children}</code>
            }
            return (
              <code className="block bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-8 font-mono text-sm leading-relaxed">
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-8">{children}</pre>
          ),

          // テーブル
          table: ({ children }) => (
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300 bg-white">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
          tbody: ({ children }) => <tbody className="divide-y divide-gray-200">{children}</tbody>,
          tr: ({ children }) => <tr className="hover:bg-gray-50 transition-colors duration-150">{children}</tr>,
          th: ({ children }) => (
            <th className="border border-gray-300 px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider bg-gray-100">
              {children}
            </th>
          ),
          td: ({ children }) => <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">{children}</td>,

          // リンク
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-black underline hover:text-gray-600 transition-colors duration-200 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),

          // 画像
          img: ({ src, alt }) => (
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              className="w-full rounded-lg my-8 shadow-sm border border-gray-200"
            />
          ),

          // 水平線
          hr: () => <hr className="my-8 border-t-2 border-gray-200" />,

          // 強調
          strong: ({ children }) => <strong className="font-bold text-black">{children}</strong>,
          em: ({ children }) => <em className="italic text-gray-600">{children}</em>,

          // 取り消し線（GFM）
          del: ({ children }) => <del className="line-through text-gray-500">{children}</del>,

          // チェックボックス（GFM）
          input: ({ type, checked, disabled }) => {
            if (type === "checkbox") {
              return (
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={disabled}
                  className="mr-2 rounded border-gray-300 text-black focus:ring-black"
                />
              )
            }
            return <input type={type} checked={checked} disabled={disabled} />
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
