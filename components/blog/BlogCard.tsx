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
    <article className="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 liquid-panel">
      {post.coverImage ? (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {post.featured && (
            <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-sm font-medium z-10 animate-float">
              <span className="sr-only">注目記事: </span>
              <span className="text-gradient-accent font-semibold">✨ 注目</span>
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-56 w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-muted">アイキャッチ画像</p>
          </div>
          {post.featured && (
            <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-sm font-medium z-10 animate-float">
              <span className="sr-only">注目記事: </span>
              <span className="text-gradient-accent font-semibold">✨ 注目</span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6 relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block glass rounded-full px-3 py-1.5 text-sm font-medium text-gradient">
            {post.category.name}
          </span>
          <time 
            className="text-muted text-sm"
            dateTime={post.publishedAt.toISOString()}
          >
            {formatDate(post.publishedAt)}
          </time>
        </div>
        
        <h2 className="text-xl font-bold text-primary mb-4">
          <Link 
            href={`/blog/${post.slug}`} 
            className="hover:text-gradient transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg line-clamp-2 block group-hover:text-gradient text-primary"
            aria-label={`記事を読む: ${post.title}`}
          >
            <span className="line-clamp-2">{post.title}</span>
          </Link>
        </h2>
        
        <p className="text-secondary mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
              aria-hidden="true"
            >
              <span className="text-white text-sm font-semibold">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <span className="text-primary text-sm font-medium">
              {post.author.name}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block glass rounded-full px-3 py-1 text-xs font-medium text-secondary hover:text-gradient transition-all duration-300"
                aria-label={`タグ: ${tag}`}
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="text-muted text-xs px-2 py-1">
                +{post.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}