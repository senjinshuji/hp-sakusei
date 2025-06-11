# Senjin Holdings - Corporate Website

Senjin Holdings公式ウェブサイト。革新的なソリューションで未来を創造する投資会社のコーポレートサイトです。

## 🌟 プロジェクト概要

Senjin Holdingsは、テクノロジーとイノベーションを通じて持続可能な成長を支援する投資会社です。このウェブサイトは、企業の理念、事業内容、およびお問い合わせ機能を提供しています。

## 🚀 技術スタック

- **フレームワーク**: Next.js 15.3.3 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Geist Sans & Geist Mono
- **ビルドツール**: Turbopack
- **デプロイ**: Vercel

## 📁 プロジェクト構成

```
senjin-holdings-copy/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # ルートレイアウト・SEO設定
│   │   ├── page.tsx           # メインページ
│   │   └── globals.css        # グローバルスタイル
│   └── components/
│       ├── Header.tsx         # ヘッダーナビゲーション
│       ├── HeroSection.tsx    # ヒーローセクション
│       ├── BusinessSection.tsx # 事業紹介セクション
│       ├── AboutSection.tsx   # 会社概要セクション
│       ├── ContactSection.tsx # お問い合わせセクション
│       └── Footer.tsx         # フッター
├── public/
│   ├── robots.txt            # 検索エンジン向けロボット設定
│   └── sitemap.xml           # サイトマップ
└── package.json
```

## 🎨 主な機能

### レスポンシブデザイン
- モバイル・タブレット・デスクトップに完全対応
- Tailwind CSSによる効率的なスタイリング

### SEO最適化
- メタデータの完全設定
- Open Graph & Twitter Cards対応
- 構造化データマークアップ
- robots.txt & sitemap.xml設置

### お問い合わせ機能
- バリデーション付きフォーム
- 連絡先情報の詳細表示
- アクセス情報

### ユーザーエクスペリエンス
- スムーズなアニメーション
- インタラクティブな要素
- 直感的なナビゲーション

## 🛠️ 開発環境のセットアップ

### 前提条件
- Node.js 18.17以上
- npm、yarn、pnpm、またはbun

### インストール
```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ブラウザで確認
# http://localhost:3000
```

### ビルド・デプロイ
```bash
# プロダクションビルド
npm run build

# ローカルでプロダクション確認
npm start

# リント検査
npm run lint
```

## 📱 レスポンシブブレークポイント

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔍 SEO設定

### メタデータ
- タイトル: "Senjin Holdings - Building the Future Together"
- 説明文: 投資会社としての専門性を表現
- キーワード: investment, innovation, sustainable growth等

### Open Graph
- 1200x630pxの画像対応
- Twitter Cards対応
- 多言語対応準備

## 📊 パフォーマンス

- **静的生成**: 全ページ静的プリレンダリング
- **画像最適化**: Next.js Image最適化
- **フォント最適化**: next/font使用
- **バンドルサイズ**: 最適化済み

## 🚀 デプロイ

### Vercel (推奨)
```bash
# Vercel CLIでデプロイ
npx vercel

# または Git連携で自動デプロイ
```

### その他のプラットフォーム
- Netlify
- AWS Amplify
- Docker対応

## 🔧 開発・カスタマイズガイド

### コンポーネントの追加
```typescript
// src/components/NewComponent.tsx
export default function NewComponent() {
  return (
    <section className="py-16">
      {/* コンテンツ */}
    </section>
  );
}
```

### スタイルのカスタマイズ
- `tailwind.config.ts`でテーマ設定
- `src/app/globals.css`でグローバルスタイル

### SEO設定の変更
- `src/app/layout.tsx`のmetadata

## 📈 今後の機能拡張予定

- [ ] 多言語対応(i18n)
- [ ] ブログ機能
- [ ] 投資実績ページ
- [ ] チームページ詳細
- [ ] お問い合わせフォーム送信機能
- [ ] 管理画面

## 🤝 コントリビューション

プルリクエストやイシュー報告を歓迎します。

## 📄 ライセンス

© 2025 Senjin Holdings. All rights reserved.

## 📞 サポート

技術的な質問や要望については、開発チームまでお問い合わせください。

---

**最終更新**: 2025年6月11日
**バージョン**: 1.0.0
**開発者**: Worker3 (QA & Documentation Team)