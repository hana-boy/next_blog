export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm mb-6">
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            </div>

            <div className="h-12 bg-gray-200 rounded w-4/5 mb-6 animate-pulse"></div>

            <div className="flex gap-2">
              <div className="h-6 bg-gray-100 rounded-full w-16 animate-pulse"></div>
              <div className="h-6 bg-gray-100 rounded-full w-20 animate-pulse"></div>
              <div className="h-6 bg-gray-100 rounded-full w-18 animate-pulse"></div>
            </div>
          </header>

          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="space-y-3">
                <div className="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-100 rounded w-4/5 animate-pulse"></div>
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
