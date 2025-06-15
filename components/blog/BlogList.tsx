import { Suspense } from 'react';
import { Post } from '@/types/blog';
import { BlogCard } from './BlogCard';
import { BlogListSkeleton } from '@/components/ui/Loading';

interface BlogListProps {
  posts: Post[];
  title?: string;
  showFeatured?: boolean;
}

export function BlogList({ posts, title, showFeatured = false }: BlogListProps) {
  const featuredPosts = showFeatured ? posts.filter(post => post.featured) : [];
  const regularPosts = showFeatured ? posts.filter(post => !post.featured) : posts;

  return (
    <section className="w-full max-w-6xl mx-auto">
      {title && (
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {title}
        </h2>
      )}
      
      <Suspense fallback={<BlogListSkeleton />}>
        {showFeatured && featuredPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              注目記事
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
        
        {regularPosts.length > 0 && (
          <div>
            {showFeatured && (
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                その他の記事
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                記事がまだありません
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                新しい記事が公開されるまでお待ちください。
              </p>
            </div>
          </div>
        )}
      </Suspense>
    </section>
  );
}