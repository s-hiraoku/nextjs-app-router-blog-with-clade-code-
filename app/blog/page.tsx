import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ブログ一覧',
  description: 'すべてのブログ記事を表示します',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ブログ一覧</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* ここに記事一覧が表示される */}
        <div className="text-gray-500 text-center col-span-full py-12">
          記事がまだありません
        </div>
      </div>
    </div>
  );
}