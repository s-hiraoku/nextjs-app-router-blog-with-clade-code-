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
  },
  {
    id: '4',
    name: 'AI/ML',
    slug: 'ai-ml',
    description: '人工知能と機械学習に関する記事'
  }
];

const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Next.js 15の新機能を徹底解説',
    slug: 'nextjs-15-new-features',
    excerpt: 'Next.js 15で追加された新機能について詳しく解説します。App Routerの改善点やパフォーマンスの向上について学びましょう。',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=faces&auto=format&q=80',
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
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&crop=faces&auto=format&q=80',
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
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop&crop=faces&auto=format&q=80',
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
  },
  {
    id: '4',
    title: 'AI時代のフロントエンド開発',
    slug: 'ai-frontend-development',
    excerpt: 'AIと機械学習を活用したフロントエンド開発の未来と、実際の活用事例を紹介します。',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=faces&auto=format&q=80',
    content: `# AI時代のフロントエンド開発

AI技術の急速な発展により、フロントエンド開発のランドスケープが大きく変化しています。

## 主なトレンド

1. **AIアシステッドコーディング**
   - GitHub Copilotの活用
   - コード生成AIの実用化

2. **スマートUI/UX**
   - パーソナライゼーション
   - 予測インターフェース

3. **自動テストと最適化**
   - AIドリブンテスト
   - パフォーマンス最適化

これらの技術を理解し、適切に活用することで、より効率的で革新的なフロントエンドアプリケーションを開発できます。`,
    publishedAt: new Date('2024-11-20'),
    updatedAt: new Date('2024-11-20'),
    author: sampleAuthor,
    category: categories[0],
    tags: ['AI', 'Machine Learning', 'Frontend', 'Innovation'],
    featured: false
  },
  {
    id: '5',
    title: 'パフォーマンス最適化の新手法',
    slug: 'performance-optimization-techniques',
    excerpt: 'Webパフォーマンスを大幅に改善するための最新技術とツールを詳しく紹介します。',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=faces&auto=format&q=80',
    content: `# パフォーマンス最適化の新手法

現代のWebアプリケーションでは、パフォーマンスがユーザー体験を左右します。

## Core Web Vitalsの最適化

1. **Largest Contentful Paint (LCP)**
   - 画像最適化
   - サーバーサイドレンダリング

2. **First Input Delay (FID)**
   - JavaScriptの分割読み込み
   - Web Workersの活用

3. **Cumulative Layout Shift (CLS)**
   - レイアウトシフトの防止
   - サイズ指定の重要性

## 最新の最適化技術

- **ストリーミングSSR**
- **エッジコンピューティング**
- **プログレッシブハイドレーション**

これらの手法を組み合わせることで、ユーザーに快適なWeb体験を提供できます。`,
    publishedAt: new Date('2024-11-15'),
    updatedAt: new Date('2024-11-15'),
    author: sampleAuthor,
    category: categories[1],
    tags: ['Performance', 'Optimization', 'Web Vitals', 'UX'],
    featured: true
  },
  {
    id: '6',
    title: 'モダンCSSの最新トレンド',
    slug: 'modern-css-trends-2024',
    excerpt: '2024年のCSSトレンドを総まとめ。Container Queries、CSS Grid、カスタムプロパティなどの最新機能を活用しましょう。',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=faces&auto=format&q=80',
    content: `# モダンCSSの最新トレンド

CSSは常に進化し続けており、2024年も多くの新機能が登場しました。

## 注目の新機能

1. **Container Queries**
   - コンテナサイズベースのレスポンシブデザイン
   - コンポーネントレベルのスタイリング

2. **:has() 擬似クラス**
   - 親セレクタの実現
   - より柔軟なCSSセレクション

3. **CSS Cascade Layers**
   - スタイルの優先度管理
   - 大規模プロジェクトのスタイル管理

## デザイントレンド

- **Glassmorphism**
- **Neumorphism**
- **ダークモードファースト**
- **マイクロインタラクション**

これらのトレンドを理解し、適切に取り入れることで、ユーザーにとって魅力的で使いやすいインターフェースを作ることができます。`,
    publishedAt: new Date('2024-11-10'),
    updatedAt: new Date('2024-11-10'),
    author: sampleAuthor,
    category: categories[1],
    tags: ['CSS', 'Design', 'Trends', 'Frontend'],
    featured: false
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