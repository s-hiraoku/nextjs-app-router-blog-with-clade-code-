import { BlogList } from '@/components/blog/BlogList';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <main className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            最新の技術トレンドやWeb開発に関する情報をお届けします
          </p>
        </div>
        
        <BlogList 
          posts={posts} 
          title=""
          showFeatured={true}
        />
      </main>
    </div>
  );
}
