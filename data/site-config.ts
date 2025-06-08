export const siteConfig = {
  name: 'hiraoku.lab',
  description: 'Web開発とフロントエンド技術、AI・LLMに関する技術ブログ',
  url: 'https://hiraoku.lab',
  author: {
    name: 'Hiraoku',
    email: 'contact@hiraoku.lab',
    avatar: '/images/avatars/hiraoku.png',
  },
  social: {
    twitter: '@hiraoku_lab',
    github: 'hiraoku',
    linkedin: 'hiraoku',
  },
  navigation: [
    { name: 'ホーム', href: '/' },
    { name: 'ブログ', href: '/blog' },
    { name: 'ショート', href: '/blog/shorts' },
    { name: 'About', href: '/about' },
  ],
  postsPerPage: 10,
  featuredPostsCount: 3,
} as const;