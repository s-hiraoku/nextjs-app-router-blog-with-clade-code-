import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/blog';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {post.coverImage && (
        <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {post.featured && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium z-10">
              <span className="sr-only">注目記事: </span>
              注目記事
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">
            {post.category.name}
          </span>
          <time 
            className="text-gray-500 dark:text-gray-400 text-sm"
            dateTime={post.publishedAt.toISOString()}
          >
            {formatDate(post.publishedAt)}
          </time>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          <Link 
            href={`/blog/${post.slug}`} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded line-clamp-2 block"
            aria-label={`記事を読む: ${post.title}`}
          >
            <span className="line-clamp-2">{post.title}</span>
          </Link>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              {post.author.name}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                aria-label={`タグ: ${tag}`}
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                +{post.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}