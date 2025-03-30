const posts = [
  { id: 1, title: "Next.js でブログを作る", excerpt: "Next.js App Router を使ったブログの作り方..." },
  { id: 2, title: "Tailwind CSS 入門", excerpt: "Tailwind CSS で簡単にスタイリングする方法..." },
  { id: 3, title: "React Server Components とは", excerpt: "Next.js 13 の RSC の仕組みを解説..." },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ブログ一覧</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
