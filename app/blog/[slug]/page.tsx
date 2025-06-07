import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  return {
    title: `記事 - ${params.slug}`,
    description: 'ブログ記事の詳細ページです',
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">記事タイトル</h1>
        <div className="text-gray-600 mb-8">
          <time>2024年1月1日</time> • <span>カテゴリ名</span>
        </div>
        
        <div className="prose max-w-none">
          <p>記事の内容がここに表示されます。</p>
          <p>現在はテンプレートです。実際のコンテンツはMDXファイルから読み込まれます。</p>
        </div>
      </article>
    </div>
  );
}