import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ページが見つかりません',
  description: 'お探しのページは見つかりませんでした。',
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ページが見つかりません
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            ホームページに戻る
          </Link>
          <Link
            href="/blog"
            className="inline-block w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            ブログ一覧を見る
          </Link>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            問題が続く場合は、お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}