import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BlogList } from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'ブログ一覧',
  description: 'すべてのブログ記事を表示します',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ブログ一覧
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          技術、プログラミング、AIに関する記事を紹介しています。
        </p>
      </div>
      
      <BlogList posts={posts} />
    </div>
  );
}