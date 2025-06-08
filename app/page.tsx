import { BlogList } from '@/components/blog/BlogList';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/data/site-config';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <main className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {siteConfig.description}
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
