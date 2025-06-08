import { Post, Author, Category } from '@/types/blog';

const sampleAuthor: Author = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: '/images/avatars/john-doe.jpg',
  bio: 'フロントエンド開発者でNext.jsの専門家です。'
};

const categories: Category[] = [
  {
    id: '1',
    name: 'Technology',
    slug: 'technology',
    description: '最新のテクノロジートレンドについて'
  },
  {
    id: '2',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Web開発に関する記事'
  },
  {
    id: '3',
    name: 'React',
    slug: 'react',
    description: 'Reactに関する技術記事'
  }
];

const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Next.js 15の新機能を徹底解説',
    slug: 'nextjs-15-new-features',
    excerpt: 'Next.js 15で追加された新機能について詳しく解説します。App Routerの改善点やパフォーマンスの向上について学びましょう。',
    content: `# Next.js 15の新機能

Next.js 15では多くの新機能と改善が追加されました。

## 主な新機能

1. **パフォーマンスの向上**
   - ビルド時間の短縮
   - ランタイムパフォーマンスの最適化

2. **開発者体験の改善**
   - より良いエラーメッセージ
   - デバッグツールの強化

3. **新しいAPI**
   - 改良されたApp Router
   - 新しいフック

これらの機能により、より効率的でパフォーマンスの高いWebアプリケーションを構築できるようになりました。`,
    publishedAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-01'),
    author: sampleAuthor,
    category: categories[1],
    tags: ['Next.js', 'React', 'JavaScript'],
    featured: true
  },
  {
    id: '2',
    title: 'React 19の新機能とは',
    slug: 'react-19-new-features',
    excerpt: 'React 19で追加された新しいフックやコンカレント機能について詳しく説明します。',
    content: `# React 19の新機能

React 19では革新的な機能が多数追加されました。

## 新しいフック

- useOptimistic
- useFormStatus
- useActionState

## コンカレント機能

新しいコンカレント機能により、ユーザーインターフェースがより応答性の高いものになりました。

これらの機能を使って、モダンなReactアプリケーションを構築しましょう。`,
    publishedAt: new Date('2024-11-28'),
    updatedAt: new Date('2024-11-28'),
    author: sampleAuthor,
    category: categories[2],
    tags: ['React', 'JavaScript', 'Frontend'],
    featured: false
  },
  {
    id: '3',
    title: 'TypeScriptでより良いコードを書く方法',
    slug: 'better-typescript-code',
    excerpt: 'TypeScriptの型システムを活用して、より保守性の高いコードを書くためのベストプラクティスを紹介します。',
    content: `# TypeScriptのベストプラクティス

TypeScriptを使用する際の重要なポイントをまとめました。

## 型定義のベストプラクティス

1. **適切な型注釈**
   - 必要な場所にのみ型注釈を追加
   - 型推論を活用

2. **union型の活用**
   - より柔軟で安全な型定義

3. **genericsの使用**
   - 再利用可能なコンポーネントの作成

これらのテクニックを使って、より保守性の高いコードを書きましょう。`,
    publishedAt: new Date('2024-11-25'),
    updatedAt: new Date('2024-11-25'),
    author: sampleAuthor,
    category: categories[0],
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    featured: true
  }
];

export function getAllPosts(): Post[] {
  return samplePosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPosts(): Post[] {
  return samplePosts
    .filter(post => post.featured)
    .sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): Post | undefined {
  return samplePosts.find(post => post.slug === slug);
}

export function getCategories(): Category[] {
  return categories;
}