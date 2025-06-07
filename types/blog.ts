export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: Date;
  updatedAt: Date;
  author: Author;
  category: Category;
  tags: string[];
  featured: boolean;
  coverImage?: string;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface PostMetadata {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
}