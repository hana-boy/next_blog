export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-100 rounded w-48 animate-pulse"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {[1, 2, 3].map((i) => (
            <article key={i} className="border-l-4 border-gray-200 pl-6">
              <div className="flex items-center gap-4 text-sm mb-3">
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-6 bg-gray-100 rounded-full w-16 animate-pulse"></div>
                <div className="h-6 bg-gray-100 rounded-full w-20 animate-pulse"></div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
