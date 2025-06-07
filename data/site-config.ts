export const siteConfig = {
  name: 'Next.js Blog',
  description: 'A modern blog built with Next.js App Router',
  url: 'https://localhost:3000',
  author: {
    name: 'Blog Author',
    email: 'author@example.com',
    avatar: '/images/avatars/author.png',
  },
  social: {
    twitter: '@example',
    github: 'example',
    linkedin: 'example',
  },
  navigation: [
    { name: 'ホーム', href: '/' },
    { name: 'ブログ', href: '/blog' },
    { name: 'カテゴリ', href: '/blog/category' },
    { name: 'About', href: '/about' },
  ],
  postsPerPage: 10,
  featuredPostsCount: 3,
} as const;