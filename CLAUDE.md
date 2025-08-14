# Senjin Holdings HP開発仕様書

## 現在の開発環境

### ブランチ構成
現在、2つのブランチで並行開発を行っています：

1. **本番環境（mainブランチ）**
   - URL: https://senjin-holdings-nciw1n4z6-senjinshujis-projects.vercel.app/
   - テーマ: ライトテーマ（白ベース）
   - 状態: 安定版

2. **実験環境（experimental-versionブランチ）**
   - URL: https://hp-sakusei-git-experimental-version-senjinshujis-projects.vercel.app/
   - テーマ: ダークテーマ（黒ベース）
   - 状態: 実験版（タイトルに[実験版]表記）

### ブランチの切り替え方法
```bash
# 本番環境に切り替え
git checkout main

# 実験環境に切り替え
git checkout experimental-version

# 現在のブランチを確認
git branch
```

## プロジェクト構成

### ディレクトリ構造
```
senjin-holdings/
├── index.html                    # ホームページ
├── about/
│   └── index.html               # 会社概要ページ
├── service/
│   ├── ai-marketing/
│   │   └── index.html          # AIマーケティングサービス
│   ├── ai-development/
│   │   └── index.html          # AI開発サービス
│   ├── art-making/
│   │   └── index.html          # アートサービス
│   └── incubation/
│       └── index.html          # インキュベーションサービス
├── css/
│   ├── style.css               # 共通スタイル
│   ├── home.css                # ホームページ専用
│   ├── about.css               # Aboutページ専用
│   └── service.css             # サービスページ共通
└── js/
    └── main.js                 # メインJavaScript
```

## 実験版の主な変更点（ダークテーマ）

### CSS変数の変更
```css
/* ライトテーマ（本番） → ダークテーマ（実験版） */
--text-dark: #1a1a1a → #f0f0f0
--text-light: #666 → #b0b0b0
--bg-light: #f8f9fa → #1a1a1a
--bg-dark: #0a0a0a → #000000
--white: #ffffff → #ffffff
--black: (新規追加) → #000000
```

### 主要な変更箇所
1. **背景色**
   - body背景: 白 → 黒
   - ヘッダー: 白半透明 → 黒半透明
   - セクション背景: 白・薄グレー → 黒・ダークグレー

2. **コンポーネント**
   - サービスカード: 白背景 → ダークグレー背景
   - ニュースアイテム: 白背景 → ダークグレー背景
   - CTAボタン: そのまま（視認性のため）

3. **特殊セクション**
   - AI Developmentの独自性セクション: 薄青 → ダークグレー
   - 技術的優位性: 紫グラデーション → ダークグレーグラデーション
   - クロージング: 紫グラデーション → 黒グラデーション

## デプロイメント

### GitHub
- リポジトリ: https://github.com/senjinshuji/hp-sakusei
- mainブランチ: 本番環境に自動デプロイ
- experimental-versionブランチ: 実験環境に自動デプロイ

### Vercel
- 自動デプロイ設定済み
- プッシュすると自動的に該当環境に反映

## 開発時の注意事項

1. **ブランチ確認**
   - 作業前に必ず現在のブランチを確認
   - `git branch` で確認可能

2. **実験版での作業**
   - experimental-versionブランチで作業
   - タイトルに[実験版]が含まれることを確認

3. **本番への反映**
   - 実験版で確認後、必要に応じてmainブランチにマージ
   - マージ前に十分なテストを実施

## よく使うコマンド

```bash
# 変更をコミット
git add -A
git commit -m "コミットメッセージ"

# プッシュ（現在のブランチ）
git push origin $(git branch --show-current)

# ブランチ間の差分確認
git diff main experimental-version

# 実験版を本番にマージ（慎重に）
git checkout main
git merge experimental-version
git push origin main
```

## 今後の開発方針

- 実験版でダークテーマの調整を継続
- ユーザーフィードバックを元に改善
- 安定したら本番環境への反映を検討
- 必要に応じてテーマ切り替え機能の実装も検討

---
最終更新: 2025年1月14日