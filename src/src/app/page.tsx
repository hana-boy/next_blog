async function fetchPosts() {
  // あとでキーをセキュアにする
  // const res = await fetch(`${process.env.NEXT_PUBLIC_MICROCMS_API_URL}/v1/blogs`, {
  //   headers: {
  //     "X-MICROCMS-API-KEY": `${process.env.NEXT_PUBLIC_MICROCMS_API_KEY}`,
  //     "Content-Type": "application/json"
  //   }
  // });
  const res = await fetch(`https://hana-boy.microcms.io/api/v1/blogs`, {
    headers: {
      "X-MICROCMS-API-KEY": `L8xFeZ40Ws83R0sykIRVvzABoHebHEaMIoh0`,
      "Content-Type": "application/json"
    }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ブログ一覧</h1>
      <div className="space-y-4">
        {posts.contents.map((post: { id: number; title: string; content: string }) => (
          <div key={post.id} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
