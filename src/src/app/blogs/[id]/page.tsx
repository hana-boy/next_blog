import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostById } from '@/lib/api';

type PageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] };
};

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getPostById(params.id);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </div>
  );
}
