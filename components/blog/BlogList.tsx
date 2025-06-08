import { Post } from '@/types/blog';
import { BlogCard } from './BlogCard';

interface BlogListProps {
  posts: Post[];
  title?: string;
  showFeatured?: boolean;
}

export function BlogList({ posts, title = "最新の記事", showFeatured = false }: BlogListProps) {
  const featuredPosts = showFeatured ? posts.filter(post => post.featured) : [];
  const regularPosts = showFeatured ? posts.filter(post => !post.featured) : posts;

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        {title}
      </h1>
      
      {showFeatured && featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            注目記事
          </h2>
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
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              その他の記事
            </h2>
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
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            まだ記事がありません。
          </p>
        </div>
      )}
    </section>
  );
}