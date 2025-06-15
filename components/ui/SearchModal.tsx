'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Post } from '@/types/blog';
import { useSearch } from '@/hooks/useSearch';
import { Loading } from './Loading';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
}

export function SearchModal({ isOpen, onClose, posts }: SearchModalProps) {
  const { query, setQuery, filteredPosts, hasQuery } = useSearch(posts);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (hasQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 300);
      return () => clearTimeout(timer);
    }
  }, [query, hasQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleResultClick = () => {
    setQuery('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="検索モーダル"
    >
      <div className="flex items-start justify-center min-h-screen pt-16 px-4">
        <div 
          className="w-full max-w-2xl liquid-panel rounded-3xl max-h-[80vh] flex flex-col animate-in slide-in-from-top-4 fade-in-0 duration-500"
          onClick={e => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="p-6 border-b border-gray-200/20 dark:border-gray-700/20">
            <div className="relative">
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="記事を検索..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-base liquid-panel rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:glow text-primary placeholder-muted transition-all duration-300"
                aria-label="検索キーワードを入力"
              />
              {isSearching && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Loading size="sm" variant="spinner" />
                </div>
              )}
            </div>
            <div className="mt-2 text-xs text-muted">
              Escキーで閉じる
            </div>
          </div>

          {/* Search Results */}
          <div className="flex-1 overflow-y-auto">
            {!hasQuery && (
              <div className="p-6 text-center">
                <div className="text-muted">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p>キーワードを入力して記事を検索</p>
                </div>
              </div>
            )}

            {hasQuery && !isSearching && (
              <div className="p-4">
                {filteredPosts.length > 0 ? (
                  <>
                    <div className="mb-4 text-sm text-secondary">
                      {filteredPosts.length}件の記事が見つかりました
                    </div>
                    <div className="space-y-3">
                      {filteredPosts.slice(0, 10).map((post) => (
                        <Link
                          key={post.id}
                          href={`/blog/${post.slug}`}
                          onClick={handleResultClick}
                          className="block p-4 liquid-panel rounded-2xl hover:glow transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <h3 className="font-medium text-primary mb-1 line-clamp-1">
                            {post.title}
                          </h3>
                          <p className="text-sm text-secondary line-clamp-2 mb-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted">
                            <span>{post.category.name}</span>
                            <span>•</span>
                            <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
                          </div>
                        </Link>
                      ))}
                      {filteredPosts.length > 10 && (
                        <div className="text-center pt-4 text-sm text-muted">
                          さらに{filteredPosts.length - 10}件の結果があります
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-muted">
                      <svg className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-lg font-medium mb-2 text-primary">検索結果が見つかりません</p>
                      <p className="text-sm text-secondary">別のキーワードで検索してみてください</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {isSearching && (
              <div className="p-6 text-center">
                <Loading variant="dots" text="検索中..." />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}