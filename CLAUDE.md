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
│   │   └── index.html          # アートサービス（実験版更新済み）
│   └── incubation/
│       └── index.html          # インキュベーションサービス（実験版更新済み）
├── recruit/
│   └── index.html               # 採用ページ（実験版更新済み）
├── news/
│   └── index.html               # ニュースページ
├── knowledge/
│   └── index.html               # ナレッジページ
├── contact/
│   └── index.html               # お問い合わせページ
├── css/
│   ├── style.css               # 共通スタイル
│   ├── home.css                # ホームページ専用
│   ├── about.css               # Aboutページ専用
│   ├── service.css             # サービスページ共通
│   ├── recruit.css             # Recruitページ専用
│   └── news.css                # News/Knowledgeページ専用
├── js/
│   └── main.js                 # メインJavaScript
└── images/
    ├── ai-business-diagram.png
    ├── fv-recruit.jpg          # Recruitページ FV画像
    ├── recruit-bg2.png         # Recruitページ 背景画像
    └── member1-5.jpg           # Recruitページ メンバー画像
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

## 実験版で更新されたページ（2025年1月15日）

### 1. Artサービスページ (/service/art-making/)
- **タイトル変更**: ART → ART & BUSINESS DEVELOPMENT
- **コンセプト**: アート×経営で、事業や組織の"作家性"を設計
- **主要セクション**:
  - Senjinの独自性（代表自らがアートと経営を実践）
  - 方法的優位性（経営目線、一貫した展開、多様な人材）
  - 作家性の創出 — Authorship（Develop, Support, Collaborate）
  - 組織への応用 — Organization（CI, VI, Brand Collateral, Employee Experience）
  - 事業への応用 — Business（Concept Making, Experiment, Development, Promotion）
- **CTA**: ALTプロジェクトのホームページへのリンク追加

### 2. Incubationサービスページ (/service/incubation/)
- **新コンセプト**: 「あらゆる伝説は、共同体のエゴ（作家性）から始まる」
- **Senjin Incubation定義**: 創業者および企業の「作家性」やエゴを出発点とした実行型キャピタル
- **3つの課題と解決性**:
  1. 起業家の志とそぐわない戦略の問題
  2. 共同体と支援体の時間軸の乖離
  3. 事業グロースを実行支援するノウハウ不足
- **提供サービス**:
  - 対法人: MVV開発、事業開発支援、出資、マーケティング支援等
  - 対自治体: 観光資源開発、ふるさと納税支援、ビジコン企画等
- **支援実績**: 246、fondi、values、coinotaku、outarc（法人）、岩国市、阿武町、天草市、西川町（自治体）

### 3. Recruitページ (/recruit/)
- **FVセクション**: 画像のみ（テキストなし）
- **8つのセクション構成**:
  1. イントロ: 「人生の瞬間最大風速」を更新し続ける組織
  2. About: 異才の融合が世界を加速させる（背景画像付き）
  3. Value: 昨日の自分を超え続ける
  4. CREDO: 4つの行動指針（No.1にこだわれ、Output is everything等）
  5. MEMBER: 5人のメンバー画像とWantedlyリンク
  6. 数字で見るSenjin: 社員数推移グラフ、男女比、平均年齢、拠点数
  7. WELLNESS: 福利厚生（寮制度、家賃補助、部活動等）
  8. 募集職種: 9つのポジション一覧
- **画像ファイル**:
  - fv-recruit.jpg: FV背景画像
  - recruit-bg2.png: Aboutセクション背景
  - member1-5.jpg: メンバー写真

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

4. **画像ファイルの管理**
   - 画像は必ずプロジェクト内のimagesフォルダに配置
   - HTMLでは相対パス（../images/）を使用
   - ローカルの絶対パスは使用しない

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

# 大きなファイルのプッシュでエラーが出た場合
git config http.postBuffer 524288000
git push origin experimental-version
```

## 今後の開発方針

- 実験版でダークテーマの調整を継続
- ユーザーフィードバックを元に改善
- 安定したら本番環境への反映を検討
- 必要に応じてテーマ切り替え機能の実装も検討

---
最終更新: 2025年1月15日