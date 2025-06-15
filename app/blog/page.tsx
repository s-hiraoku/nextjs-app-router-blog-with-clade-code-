import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BlogList } from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'ブログ一覧',
  description: 'すべてのブログ記事を表示します',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">ブログ</span>
              <span className="text-primary"> 一覧</span>
            </h1>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              最新の技術トレンド、プログラミングのベストプラクティス、<br />
              AI・機械学習の洞察をお届けします。
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
              <span className="glass rounded-full px-4 py-2">🚀 最新技術</span>
              <span className="glass rounded-full px-4 py-2">💻 プログラミング</span>
              <span className="glass rounded-full px-4 py-2">🤖 AI/ML</span>
              <span className="glass rounded-full px-4 py-2">📊 データサイエンス</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* ブログリスト */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <BlogList posts={posts} />
        </div>
      </section>
    </div>
  );
}