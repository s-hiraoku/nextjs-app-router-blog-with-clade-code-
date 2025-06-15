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
    <article className="glass-card rounded-2xl overflow-hidden animate-pulse">
      <div className="h-56 w-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse"></div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-gray-300 dark:bg-gray-700 rounded px-2 py-1 w-16 h-6 animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-700 rounded w-20 h-4 animate-pulse"></div>
        </div>
        <div className="space-y-3 mb-4">
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl h-6 w-full animate-pulse"></div>
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl h-6 w-3/4 animate-pulse"></div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg h-4 w-full animate-pulse"></div>
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg h-4 w-full animate-pulse"></div>
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg h-4 w-2/3 animate-pulse"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full animate-pulse"></div>
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg w-20 h-4 animate-pulse"></div>
          </div>
          <div className="flex gap-2">
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full w-16 h-6 animate-pulse"></div>
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full w-16 h-6 animate-pulse"></div>
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