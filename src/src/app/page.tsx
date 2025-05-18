import Link from "next/link";

export default async function Home() {
  const contents = [
    {id: 1, title: "コンテンツ一覧"}
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ブログ</h1>
      <div className="space-y-4">
        {contents.map((content: { id: number; title: string; }) => (
          <div key={content.id} className="bg-white p-4 shadow-md rounded-lg">
            <Link href={`/blogs`}>
              <h2 className="text-xl font-semibold">{content.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
