'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/site-config';
import { ThemeDropdown } from '@/components/ui/ThemeDropdown';
import { SearchModal } from '@/components/ui/SearchModal';
import { getAllPosts } from '@/lib/blog';
import { Post } from '@/types/blog';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load posts for search
  useEffect(() => {
    const loadPosts = async () => {
      if (posts.length === 0) {
        try {
          const allPosts = await getAllPosts();
          setPosts(allPosts);
        } catch (error) {
          console.error('Failed to load posts for search:', error);
        }
      }
    };
    loadPosts();
  }, [posts]);

  // Handle search keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
        <div className="mx-auto max-w-4xl">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {siteConfig.name}
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="検索 (⌘+K)"
                title="検索 (⌘+K)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>


              {/* Theme dropdown */}
              <ThemeDropdown />

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="メニューを開く"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="px-4 py-4 space-y-2">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        posts={posts}
      />

      {/* Floating scroll to top button - appears on scroll */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          aria-label="トップに戻る"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Header;