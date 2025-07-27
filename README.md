# Senjin Holdings コーポレートサイト

## 概要
Senjin Holdingsのコーポレートサイトです。AI×Marketing×Artで世界を加速させる企業として、4つの事業領域を展開しています。

## サイト構造
```
/
├── index.html              # トップページ
├── about/                  # 企業情報
│   └── index.html
├── service/                # サービス一覧
│   ├── index.html
│   ├── ai-marketing/       # AIマーケティング
│   ├── ai-development/     # AI開発
│   ├── art-making/         # アートメイキング（未実装）
│   └── incubation/         # インキュベーション（未実装）
├── contact/                # お問い合わせ
│   └── index.html
├── css/                    # スタイルシート
│   ├── style.css          # 共通スタイル
│   ├── home.css           # トップページ用
│   ├── about.css          # About用
│   ├── service.css        # Service用
│   └── contact.css        # Contact用
└── js/                     # JavaScript
    └── main.js            # メインスクリプト
```

## 実装済み機能
- レスポンシブデザイン
- スムーススクロール
- ヘッダーのスクロール時の動作
- アニメーション（Intersection Observer）
- モバイルメニュー
- 固定CTAボタン
- ニュースカテゴリフィルター
- ページネーション（UI）

## 実装済みページ
全ページ実装完了:
- トップページ
- About（企業情報）
- Service一覧と4つの詳細ページ
- Recruit（採用情報）
- News（最新ニュース）
- Knowledge（コラム・インサイト）
- Contact（お問い合わせ）

## ローカルでの確認方法

### Python3を使用する場合
```bash
python3 -m http.server 8000
```

### Node.jsを使用する場合
```bash
npx http-server -p 8000
```

その後、ブラウザで `http://localhost:8000` にアクセスしてください。

## デプロイについて
静的サイトホスティングサービス（Netlify、Vercel、GitHub Pages等）にデプロイ可能です。
Vercel: https://hp-sakusei.vercel.app

## カラーパレット
- Primary: #45EEFF (シアンブルー)
- Dark: #0a0a0a
- Light Gray: #f8f9fa
- Text Dark: #1a1a1a
- Text Light: #666

## フォント
- 日本語: Noto Sans JP
- 英語: Inter

## 今後の改善点
1. 実際の画像・動画コンテンツの追加
2. フォームの実装（バックエンド連携）
3. CMSの導入（News/Knowledge用）
4. SEO最適化（メタタグ、構造化データ）
5. パフォーマンス最適化
6. アクセシビリティ向上