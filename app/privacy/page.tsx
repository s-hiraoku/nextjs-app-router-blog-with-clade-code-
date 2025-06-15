import { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: `${siteConfig.name}のプライバシーポリシーです。個人情報の取り扱いについて説明しています。`,
  openGraph: {
    title: 'プライバシーポリシー',
    description: `${siteConfig.name}のプライバシーポリシー`,
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          プライバシーポリシー
        </h1>
        
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          最終更新日: {new Date().toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            個人情報の収集について
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当サイトでは、お問い合わせやコメント投稿の際に、お名前、メールアドレス等の個人情報をお聞きする場合があります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            個人情報の利用目的
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            収集した個人情報は、以下の目的で利用いたします：
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>お問い合わせへの回答</li>
            <li>サービスの提供・向上</li>
            <li>重要なお知らせの配信</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            個人情報の第三者提供
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当サイトでは、法令に基づく場合を除き、ご本人の同意を得ることなく個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Cookie（クッキー）について
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当サイトでは、ユーザーの利便性向上のためCookieを使用する場合があります。
            Cookieの使用を希望されない場合は、ブラウザの設定で無効にできます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            アクセス解析ツール
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当サイトでは、サイトの改善を目的としてGoogle Analyticsを使用する場合があります。
            これらのツールは匿名でデータを収集し、個人を特定するものではありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            プライバシーポリシーの変更
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当プライバシーポリシーの内容は、必要に応じて変更することがあります。
            変更した場合は、当ページにて公表いたします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            プライバシーポリシーに関するお問い合わせは、以下までご連絡ください：
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              サイト名: {siteConfig.name}<br />
              URL: {siteConfig.url}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}