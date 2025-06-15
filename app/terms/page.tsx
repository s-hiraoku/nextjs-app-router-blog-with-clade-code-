import { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: '利用規約',
  description: `${siteConfig.name}の利用規約です。サービスのご利用にあたってお読みください。`,
  openGraph: {
    title: '利用規約',
    description: `${siteConfig.name}の利用規約`,
    url: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          利用規約
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
            第1条（適用）
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            本利用規約（以下「本規約」といいます）は、{siteConfig.name}（以下「当サイト」といいます）の利用に関して適用されます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            第2条（利用登録）
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当サイトの利用にあたって、ユーザーは本規約に同意したものとみなします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            第3条（禁止事項）
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません：
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>法令または公序良俗に反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>当サイトの運営を妨害するおそれのある行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>他のユーザーに成りすまして当サイトを利用する行為</li>
            <li>当サイトに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            第4条（当サイトの提供停止等）
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当サイトは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく当サイトの全部または一部の提供を停止または中断することができるものとします：
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>当サイトにかかるコンピュータシステムの保守点検または更新を行う場合</li>
            <li>地震、落雷、火災、停電または天災などの不可抗力により、当サイトの提供が困難となった場合</li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、当サイトが当サイトの提供が困難と判断した場合</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            第5条（著作権）
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当サイトに掲載されている文章、画像、動画、音声、その他のコンテンツの著作権は、当サイトまたはコンテンツ提供者に帰属します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            第6条（免責事項）
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当サイトは、当サイトに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            第7条（利用規約の変更）
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            当サイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            第8条（準拠法・裁判管轄）
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            本規約の解釈にあたっては、日本法を準拠法とします。
            当サイトに関して紛争が生じた場合には、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            本利用規約に関するお問い合わせは、以下までご連絡ください：
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