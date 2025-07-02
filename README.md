# 🚀 Gitマスター - 新人エンジニア向け記憶学習アプリ

Gitの基本概念、コマンド、内部構造を効率的に学習できるフラッシュカード式学習アプリです。

## ✨ 特徴

- **3つの学習カテゴリ**
  - 📚 Gitの基本概念（初級）
  - ⌨️ Gitコマンドと操作（中級） 
  - 🔧 Gitの内部構造（上級）

- **実用的な学習体験**
  - 実際のコマンド例を豊富に掲載
  - 新人エンジニア向けの実践的なTips
  - フラッシュカード形式で記憶に定着

- **進捗管理機能**
  - 理解度の記録（難しい/まあまあ/理解できた）
  - 復習機能で苦手分野を重点学習
  - 学習完了時の詳細な分析

## 🎮 使い方

### 基本操作
1. 学習したいカテゴリを選択
2. フラッシュカードをクリックして説明を表示
3. 理解度に応じてボタンを選択
4. 全カード完了後、復習や他カテゴリに挑戦

### キーボードショートカット
- `スペース` / `Enter`: カードを反転
- `←` / `→`: 前後のカードに移動
- `1` / `2` / `3`: 理解度を記録（難しい/まあまあ/理解できた）

## 🚀 Vercelでの無料デプロイ手順

### 1. GitHubリポジトリの準備
```bash
# プロジェクトディレクトリでGitを初期化
git init

# ファイルをステージング
git add .

# 初回コミット
git commit -m "初回コミット: Gitマスター学習アプリ"

# GitHubにリポジトリを作成後、リモートを追加
git remote add origin https://github.com/あなたのユーザー名/git-learning-app.git

# GitHubにプッシュ
git push -u origin main
```

### 2. Vercelでのデプロイ
1. [Vercel](https://vercel.com)にアクセス
2. GitHubアカウントでログイン
3. "New Project"をクリック
4. GitHubから作成したリポジトリを選択
5. プロジェクト設定:
   - **Project Name**: `git-learning-app`（または任意の名前）
   - **Framework Preset**: `Other`
   - **Root Directory**: `./`（デフォルト）
   - **Build Command**: 空欄のまま（静的ファイルのため不要）
   - **Output Directory**: 空欄のまま
6. "Deploy"をクリック

### 3. 自動デプロイの確認
- GitHubにプッシュすると自動的にVercelが更新されます
- デプロイURL: `https://プロジェクト名.vercel.app`

## 📁 プロジェクト構造

```
git-study/
├── index.html          # メインHTMLファイル
├── style.css           # スタイルシート
├── script.js           # アプリケーションロジック
├── data.js             # 学習データ（概念・コマンド・内部構造）
├── package.json        # Node.js設定ファイル
├── vercel.json         # Vercelデプロイ設定
└── README.md           # このファイル
```

## 🛠 ローカル開発

### 必要な環境
- Node.js 14以上（開発用）
- モダンブラウザ（Chrome, Firefox, Safari, Edge）

### 開発サーバーの起動
```bash
# 依存関係をインストール（初回のみ）
npm install

# 開発サーバーを起動
npm run dev

# ブラウザでhttp://localhost:3000を開く
```

### ファイルを直接開く場合
HTMLファイルをブラウザで直接開くことも可能です：
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

## 🎯 学習のコツ

1. **段階的に学習**: 基本概念 → コマンド → 内部構造の順番で進める
2. **実際にコマンドを試す**: 例を見ながら実際にターミナルで実行
3. **復習を活用**: 「難しい」とマークしたカードは重点的に復習
4. **実践と組み合わせ**: 学習した内容を実際のプロジェクトで試す

## 📚 収録内容

### Gitの基本概念（10カード）
- Git、リポジトリ、コミット、ステージングエリア
- ワーキングディレクトリ、ブランチ、リモートリポジトリ
- HEAD、マージ、コンフリクト

### Gitコマンドと操作（10カード）  
- git init, git add, git commit, git status, git log
- git push, git pull, git branch, git checkout/switch, git merge

### Gitの内部構造（10カード）
- .gitディレクトリ、オブジェクト（Blob/Tree/Commit）
- Ref、インデックス、Packファイル、reflog、reset、revert

## 🤝 貢献

プルリクエストや機能提案を歓迎します！

## 📄 ライセンス

MIT License

## 🙋‍♂️ サポート

問題や質問がある場合は、GitHubのIssuesでお知らせください。

---

**Happy Learning! 🎉**

新人エンジニアの皆さんのGit習得を応援しています！