interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'skeleton';
  className?: string;
  text?: string;
}

export function Loading({ size = 'md', variant = 'spinner', className = '', text }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  if (variant === 'spinner') {
    return (
      <div className={`flex items-center justify-center ${className}`} role="status" aria-live="polite">
        <div className={`${sizeClasses[size]} animate-spin border-2 border-gray-300 border-t-blue-600 rounded-full`}></div>
        {text && <span className="ml-2 text-gray-600 dark:text-gray-400">{text}</span>}
        <span className="sr-only">読み込み中...</span>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`} role="status" aria-live="polite">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        {text && <span className="ml-3 text-gray-600 dark:text-gray-400">{text}</span>}
        <span className="sr-only">読み込み中...</span>
      </div>
    );
  }

  // skeleton variant
  return (
    <div className={`animate-pulse ${className}`} role="status" aria-live="polite">
      <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 w-full mb-2"></div>
      <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 w-3/4 mb-2"></div>
      <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 w-1/2"></div>
      <span className="sr-only">コンテンツを読み込み中...</span>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="h-48 w-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-gray-300 dark:bg-gray-700 rounded px-2 py-1 w-16 h-6 animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded w-20 h-4 animate-pulse"></div>
        </div>
        <div className="space-y-2 mb-3">
          <div className="bg-gray-300 dark:bg-gray-700 rounded h-6 w-full animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded h-6 w-3/4 animate-pulse"></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 w-full animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 w-full animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 w-2/3 animate-pulse"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
            <div className="bg-gray-300 dark:bg-gray-700 rounded w-16 h-4 animate-pulse"></div>
          </div>
          <div className="flex gap-1">
            <div className="bg-gray-300 dark:bg-gray-700 rounded w-12 h-6 animate-pulse"></div>
            <div className="bg-gray-300 dark:bg-gray-700 rounded w-12 h-6 animate-pulse"></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function BlogListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }, (_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}