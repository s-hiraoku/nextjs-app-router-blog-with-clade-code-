この Next.js App Router のコードを包括的にレビューしてください。以下の観点から詳細に分析し、具体的な改善提案を行ってください：

## 🏗️ App Router アーキテクチャ

### ディレクトリ構造とファイル配置

- app/ディレクトリの構造が適切か
- layout.tsx、page.tsx、loading.tsx、error.tsx、not-found.tsx の配置
- Route Groups の活用（必要に応じて）
- Parallel Routes や Intercepting Routes の実装

### Server Components と Client Components

- 'use client'ディレクティブの適切な使用
- Server Components と Client Components の境界設計
- Hydration Mismatch の回避
- Interactive 要素の適切な配置

## ⚡ パフォーマンス最適化

### レンダリング戦略

- Static Generation、Dynamic Rendering、ISR の適切な選択
- generateStaticParams()の実装
- Dynamic Segments（[id]、[...slug]）の最適化
- キャッシュ戦略（fetch cache、Router Cache、Full Route Cache）

### データフェッチング

- Server Components での fetch()使用
- データ取得の並列化（Promise.all 等）
- Suspense 境界の適切な配置
- loading.tsx と Suspense の使い分け

### 最適化機能

- next/image の適切な実装（priority、sizes、alt）
- next/font の使用
- Dynamic Imports（lazy loading）
- Bundle 分析対象の特定

## 🔒 セキュリティ

### データ保護

- 環境変数の適切な管理（NEXT*PUBLIC*\*の使い分け）
- Server Actions での入力値検証
- XSS 対策（dangerouslySetInnerHTML 回避）
- 機密情報のクライアント露出チェック

### API・認証

- Server Actions の CSRF 対策
- 認証状態の管理
- 権限ベースのアクセス制御
- セッション・JWT 管理

## 📝 コード品質

### TypeScript 活用

- コンポーネント Props 型定義
- Server Components の型安全性
- searchParams、params の型定義
- カスタムフックの型定義

### Next.js 固有の実装

- Metadata の適切な設定（generateMetadata）
- redirect()、notFound()の使用
- cookies()、headers()の適切な利用
- Server Actions の実装品質

### React ベストプラクティス

- コンポーネントの責務分離
- useEffect、useState 等の適切な使用
- メモ化（memo、useMemo、useCallback）の適切な適用
- Error Boundary の実装

## 🎯 SEO・アクセシビリティ

### SEO 対応

- メタデータの完全性（title、description、OG tags）
- 構造化データ（JSON-LD）
- サイトマップ生成対応
- robots.txt の考慮

### アクセシビリティ

- セマンティック HTML 要素の使用
- ARIA 属性の適切な実装
- キーボードナビゲーション
- スクリーンリーダー対応

## 🛠️ 開発者体験

### エラーハンドリング

- error.tsx、global-error.tsx の実装
- try-catch ブロックの適切な配置
- ユーザーフレンドリーなエラー表示
- 開発環境でのエラー情報

### テスタビリティ

- コンポーネントのテスト容易性
- Server Components のテスト戦略
- モック化の考慮
- E2E テスト対応

## 🔧 具体的な改善提案

各項目について：

1. **現在の実装の評価**
2. **問題点の特定**
3. **具体的な改善コード例**
4. **改善による効果**
5. **実装優先度（高・中・低）**

## 📊 全体評価

最後に以下の観点から総合評価を提供してください：

- **コード品質スコア**（1-10 点）
- **パフォーマンス評価**
- **セキュリティレベル**
- **保守性・拡張性**
- **Next.js App Router 活用度**

---

**レビュー対象コード：**
$ARGUMENTS
