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

## 実験版で更新されたページ（2025年1月16日更新）

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

### 3. Recruitページ (/recruit/) - 2025年1月16日大幅改修
- **構成変更**:
  - 「異才の融合が世界を加速させる」セクション削除
  - Environment（働く環境）セクションに統合再編成
  
- **現在の6セクション構成**:
  1. **イントロ**: 「人生の瞬間最大風速」を更新し続ける組織
     - 改善された文章（楽しかった・充実していた時の共感を呼ぶ内容）
  
  2. **Value**: 昨日の自分を超え続ける
  
  3. **CREDO**: 4つの行動指針（2カラムレイアウト）
     - **No.1にこだわれ**
       - 左: やるからには1番を取り続けよう。1位じゃないと面白くない。
       - 右: 昨日を超えよう、現状に満足しない / 視座を上げよう / 考え抜いたの？
     - **Output is everything**
       - 左: 生み出した成果にこそ価値がある。
       - 右: 自分で決めた目標は絶対に達成しよう / 本当に全てやり切ったか？ / 目標達成のためには手段を選ぶな
     - **キャパってる？w**
       - 左: 発狂するくらい忙しい時が一番成長してる。
       - 右: もう無理かもって思った時に後1歩だけ進もう / 限界はただ自分が作り出している幻想にすぎない / 結果は限界を超えた先についてくる
     - **どうやったら出来る？**
       - 左: できない理由を語る前にできる方法を考える。
       - 右: 「無理」じゃなく「どうすれば？」で始めよう / 挑戦をデフォルトに / やらない後悔よりやって失敗
  
  4. **MEMBER**: メンバー紹介
     - 5人のメンバー画像（Wantedlyリンク付き）
     - 優秀なメンバーの実績紹介
  
  5. **Environment 働く環境**: 統合セクション
     - **数字で見るSenjin**:
       - 社員数: SVGバーチャート（2020年6人→2025年72人の成長）
       - 男女比率: 7:3のドーナツチャート
       - 平均年齢: SVGドーナツチャート（25.6歳、20代90%強調）
       - 拠点数: 4拠点（東京、岩国、天草、福岡）
     - **福利厚生**:
       - 寮制度: オフィス横のタワーマンション
       - 家賃補助制度: 徒歩圏内5万円/月
       - 部活動: フットサル部、マラソン部、サウナ部
       - 締め会制度: 毎月末の決算報告会後の食事会
       - 自主練応援制度: 書籍購入・セミナー参加費全額負担
  
  6. **POSITION 募集職種**: 5職種に絞り込み
     - WEBマーケター
     - WEBエンジニア
     - 営業職
     - 動画編集者（旧：動画クリエイター）
     - コーポレートスタッフ（旧：管理部長）
     - **ポップアップ機能**: 各職種クリックで詳細表示
       - 募集要項詳細（雇用形態、勤務時間、給与、福利厚生等）
       - エントリーボタン（LINE/Wantedly）

- **エントリーセクション**:
  - 「共にビジネスに熱狂したい仲間を募集」に変更
  - カジュアル面談ボタンのみ（水色・大型）

- **デザイン特徴**:
  - ダークテーマ継続（黒背景）
  - 大型タイトル（WELLNESS/POSITIONスタイル統一）
  - SVGグラフによる視覚的な情報提示

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