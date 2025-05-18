import { getPosts } from "@/lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";

async function fetchPosts() {
  const res = await getPosts();
  if (!res) {
    notFound();
  }
  return res;
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ブログ一覧</h1>
      <div className="space-y-4">
        {posts.contents.map((post: { id: number; title: string; edit_date: string }) => (
          <div key={post.id} className="bg-white p-4 shadow-md rounded-lg">
            <Link href={`/blogs/${post.id}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.edit_date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
