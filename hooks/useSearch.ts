'use client';

import { useState, useMemo } from 'react';
import { Post } from '@/types/blog';

export function useSearch(posts: Post[]) {
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return posts;

    const searchQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery) ||
      post.excerpt.toLowerCase().includes(searchQuery) ||
      post.content.toLowerCase().includes(searchQuery) ||
      post.category.name.toLowerCase().includes(searchQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
      post.author.name.toLowerCase().includes(searchQuery)
    );
  }, [posts, query]);

  return {
    query,
    setQuery,
    filteredPosts,
    hasQuery: query.trim().length > 0
  };
}