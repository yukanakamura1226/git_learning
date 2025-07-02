const gitData = {
    basic: {
        title: "Gitの基本概念",
        description: "リポジトリ、コミット、ブランチなどGitの基礎用語",
        cards: [
            {
                term: "Git",
                type: "バージョン管理システム",
                definition: "ファイルの変更履歴を効率的に管理し、複数人での協調開発を容易にするためのツール。",
                example: `# 新しいプロジェクトでGitを始める例
mkdir my-project
cd my-project
git init

# ファイルを作成して管理開始
echo "Hello Git!" > README.md
git add README.md
git commit -m "プロジェクト開始"`,
                practicalTip: "💡 Gitは「写真アルバム」のようなもの。重要な瞬間（変更）を記録して、後から見返せるようにします。"
            },
            {
                term: "リポジトリ (Repository)",
                type: "基本概念",
                definition: "Gitがバージョン管理を行う対象となるディレクトリ。プロジェクトの全ファイルと変更履歴が保存される場所。",
                example: `# ローカルリポジトリの作成
git init my-project

# リモートリポジトリからクローン
git clone https://github.com/user/project.git

# リポジトリの状態確認
git status`,
                practicalTip: "💡 リポジトリは「プロジェクトの家」です。すべてのファイルと歴史がここに保管されます。"
            },
            {
                term: "コミット (Commit)",
                type: "基本操作",
                definition: "Gitにおける変更履歴の単位。特定の時点でのファイルの状態（スナップショット）を保存する操作。ゲームのセーブポイントに例えられる。",
                example: `# ファイルの変更をコミット
git add index.html
git commit -m "ホームページのタイトルを修正"

# 複数ファイルを一度にコミット
git add .
git commit -m "ログイン機能を追加"

# コミット履歴を確認
git log --oneline`,
                practicalTip: "💡 コミットメッセージは「なぜ変更したか」を書くと、後で見返したときに理解しやすくなります。"
            },
            {
                term: "ステージングエリア",
                type: "基本概念",
                definition: "ワーキングディレクトリでの変更のうち、次にコミットに含める変更を選択し、一時的に保持する場所。",
                example: `# ファイルをステージングエリアに追加
git add style.css
git add script.js

# すべての変更をステージング
git add .

# ステージングを取り消し
git restore --staged style.css

# ステージング状態を確認
git status`,
                practicalTip: "💡 ステージングエリアは「買い物かご」のようなもの。コミットしたいファイルを選んで入れます。"
            },
            {
                term: "ワーキングディレクトリ",
                type: "基本概念",
                definition: "ユーザーが実際にファイルを作成・編集する作業用ディレクトリ。",
                example: `# 現在のワーキングディレクトリを確認
pwd

# ワーキングディレクトリの変更を確認
git status
git diff

# 変更を破棄して元に戻す
git restore index.html`,
                practicalTip: "💡 ワーキングディレクトリは「作業机」です。ここでファイルを編集し、満足したらステージングに移します。"
            },
            {
                term: "ブランチ (Branch)",
                type: "基本概念",
                definition: "コミットの履歴から枝分かれし、独立した開発ラインを進める機能。並行して異なる機能開発やバグ修正を行う際に利用される。",
                example: `# 新しいブランチを作成
git branch feature/login
git checkout feature/login

# または一つのコマンドで
git checkout -b feature/user-profile

# ブランチ一覧を確認
git branch

# ブランチを切り替え
git switch main`,
                practicalTip: "💡 ブランチは「平行世界」を作るようなもの。メイン機能を壊さずに新機能を開発できます。"
            },
            {
                term: "リモートリポジトリ",
                type: "基本概念",
                definition: "ネットワーク上（例: GitHub）に存在する共有リポジトリ。複数人での共同作業の際に、変更を共有するために利用される。",
                example: `# リモートリポジトリを追加
git remote add origin https://github.com/user/project.git

# リモートに変更を送信
git push origin main

# リモートから変更を取得
git pull origin main

# リモートリポジトリ一覧を確認
git remote -v`,
                practicalTip: "💡 リモートリポジトリは「共有ドライブ」のようなもの。チームメンバーと作業を共有します。"
            },
            {
                term: "HEAD",
                type: "基本概念",
                definition: "現在作業しているブランチの最新コミット、または特定のコミットを指し示すポインター。",
                example: `# HEADが指している場所を確認
cat .git/HEAD

# HEADの履歴を確認
git reflog

# HEADを特定のコミットに移動
git checkout abc1234

# HEADをブランチに戻す
git checkout main`,
                practicalTip: "💡 HEADは「あなたが今いる場所」を示すマーカーです。どのコミット地点にいるかを教えてくれます。"
            },
            {
                term: "マージ (Merge)",
                type: "基本操作",
                definition: "異なるブランチの変更を統合する操作。機能ブランチでの作業をメインブランチに取り込む際に使用。",
                example: `# feature/loginブランチをmainにマージ
git checkout main
git merge feature/login

# マージコミットを作らないマージ
git merge --no-ff feature/user-profile

# マージの取り消し
git merge --abort`,
                practicalTip: "💡 マージは「川の合流」のようなもの。二つの開発の流れを一つにまとめます。"
            },
            {
                term: "コンフリクト (Conflict)",
                type: "問題解決",
                definition: "複数のブランチで同じファイルの同じ箇所が異なる方法で変更され、Gitが自動的にマージできない場合に発生する衝突。",
                example: `# コンフリクトが発生した場合の解決手順
git merge feature/new-feature
# CONFLICT が発生

# コンフリクトファイルを編集して解決
# <<<<<<< HEAD と >>>>>>> の間を修正

# 解決後にコミット
git add .
git commit -m "コンフリクトを解決"`,
                practicalTip: "💡 コンフリクトは「意見の対立」です。どちらの変更を採用するか、人間が判断する必要があります。"
            }
        ]
    },
    
    commands: {
        title: "Gitコマンドと操作",
        description: "git add、git commit、git pushなど実際のコマンド",
        cards: [
            {
                term: "git init",
                type: "初期化コマンド",
                definition: "新しいGitリポジトリを初期化するコマンド。現在のディレクトリをGitリポジトリにする。",
                example: `# 新しいプロジェクトを開始
mkdir my-new-project
cd my-new-project
git init

# 既存のディレクトリをGitリポジトリにする
cd existing-project
git init

# 初期化後の確認
ls -la  # .gitディレクトリが作成される`,
                practicalTip: "💡 git initは一番最初に実行するコマンド。プロジェクトを「Git管理下」にします。"
            },
            {
                term: "git add",
                type: "ステージングコマンド",
                definition: "変更されたファイルをステージングエリアに追加するコマンド。コミットしたいファイルを選択する。",
                example: `# 特定のファイルをステージング
git add index.html
git add style.css script.js

# すべてのファイルをステージング
git add .

# ディレクトリ全体をステージング
git add src/

# 対話的にステージング
git add -p`,
                practicalTip: "💡 git addは「コミットしたいファイルを選ぶ」コマンド。慎重に選んでから実行しましょう。"
            },
            {
                term: "git commit",
                type: "記録コマンド",
                definition: "ステージングエリアの変更をリポジトリにコミットするコマンド。変更の記録を作成する。",
                example: `# 基本的なコミット
git commit -m "ユーザー登録機能を追加"

# 詳細なコミットメッセージ
git commit -m "ユーザー登録機能を追加

- バリデーション機能実装
- エラーメッセージ表示
- パスワード暗号化対応"

# ステージングとコミットを同時に
git commit -am "既存ファイルの修正"`,
                practicalTip: "💡 コミットメッセージは「未来の自分へのメモ」。何を変更したか分かりやすく書きましょう。"
            },
            {
                term: "git status",
                type: "確認コマンド",
                definition: "ワーキングディレクトリとステージングエリアの状態を表示するコマンド。現在の状況を把握する。",
                example: `# 現在の状態を確認
git status

# 短縮形式で表示
git status -s

# 無視されているファイルも表示
git status --ignored

# ブランチ情報も表示
git status -b`,
                practicalTip: "💡 git statusは「今の状況」を教えてくれる重要なコマンド。迷ったらまずこれを実行しましょう。"
            },
            {
                term: "git log",
                type: "履歴コマンド",
                definition: "コミット履歴を表示するコマンド。過去の変更記録を確認できる。",
                example: `# 基本的なログ表示
git log

# 一行で表示
git log --oneline

# グラフ形式で表示
git log --graph --oneline

# 特定のファイルの履歴
git log index.html

# 最新5件のみ表示
git log -5`,
                practicalTip: "💡 git logは「日記帳」を見るようなもの。プロジェクトの歴史を振り返ることができます。"
            },
            {
                term: "git push",
                type: "同期コマンド",
                definition: "ローカルリポジトリのコミットをリモートリポジトリにアップロードするコマンド。変更を共有する。",
                example: `# メインブランチをプッシュ
git push origin main

# 新しいブランチをプッシュ
git push origin feature/new-function

# 初回プッシュ時（上流設定）
git push -u origin main

# 強制プッシュ（危険）
git push --force-with-lease origin main`,
                practicalTip: "💡 git pushは「作品の発表」です。ローカルでの作業をチームメンバーと共有します。"
            },
            {
                term: "git pull",
                type: "同期コマンド",
                definition: "リモートリポジトリの変更をローカルリポジトリにダウンロードし、マージするコマンド。最新状態に更新する。",
                example: `# リモートの変更を取得してマージ
git pull origin main

# リベースしながらプル
git pull --rebase origin main

# 特定のブランチをプル
git pull origin feature/updates

# プルしてコンフリクトが発生した場合
git pull origin main
# コンフリクト解決後
git add .
git commit -m "マージコンフリクトを解決"`,
                practicalTip: "💡 git pullは「最新情報を受け取る」コマンド。作業開始前に実行する習慣をつけましょう。"
            },
            {
                term: "git branch",
                type: "ブランチコマンド",
                definition: "ブランチの作成、一覧表示、削除を行うコマンド。並行開発の管理に使用。",
                example: `# ブランチ一覧を表示
git branch

# 新しいブランチを作成
git branch feature/user-auth

# ブランチを削除
git branch -d feature/completed

# リモートブランチも含めて表示
git branch -a

# ブランチの詳細情報
git branch -v`,
                practicalTip: "💡 ブランチは「作業の分岐」を管理します。機能ごとにブランチを作る習慣をつけましょう。"
            },
            {
                term: "git checkout / git switch",
                type: "移動コマンド",
                definition: "ブランチを切り替えたり、特定のコミットの状態にワーキングディレクトリを戻したりするコマンド。",
                example: `# ブランチを切り替え（従来）
git checkout main
git checkout feature/login

# 新しいコマンド
git switch main
git switch feature/login

# ブランチを作成して切り替え
git checkout -b feature/new-page
git switch -c feature/new-page

# 特定のコミットに移動
git checkout abc1234`,
                practicalTip: "💡 git switchは新しいコマンド。ブランチ切り替え専用で、間違いが少なくなります。"
            },
            {
                term: "git merge",
                type: "統合コマンド",
                definition: "異なるブランチの変更を統合するコマンド。機能ブランチの作業をメインブランチに取り込む。",
                example: `# featureブランチをmainに統合
git checkout main
git merge feature/login

# マージコミットを作成しない
git merge --no-ff feature/user-profile

# マージを中止
git merge --abort

# マージ後の確認
git log --graph --oneline`,
                practicalTip: "💡 マージは「作業の合流」です。機能完成後にメインブランチに統合します。"
            }
        ]
    },
    
    internal: {
        title: "Gitの内部構造",
        description: "オブジェクト、インデックスなどGitの仕組み",
        cards: [
            {
                term: ".gitディレクトリ",
                type: "内部構造",
                definition: "Gitリポジトリの心臓部であり、バージョン管理に必要なすべての情報（オブジェクトデータベース、参照など）が保存されている隠しディレクトリ。",
                example: `# .gitディレクトリの中身を確認
ls -la .git/

# 主要なディレクトリ構造
.git/
├── objects/     # オブジェクトストレージ
├── refs/        # ブランチとタグの参照
├── HEAD         # 現在のブランチ
├── index        # ステージングエリア
└── config       # リポジトリ設定

# HEADファイルの中身を確認
cat .git/HEAD`,
                practicalTip: "💡 .gitディレクトリは「Gitの脳」です。ここにすべての情報が保存されています。"
            },
            {
                term: "Blobオブジェクト",
                type: "内部オブジェクト",
                definition: "ファイルの内容（フルバックアップ）を記録するオブジェクト。ファイルデータそのものを保存。",
                example: `# ファイルのBlobオブジェクトを確認
git hash-object README.md

# オブジェクトの中身を表示
git cat-file -p <blob-hash>

# オブジェクトのタイプを確認
git cat-file -t <blob-hash>

# 実際の例
echo "Hello Git" > test.txt
git add test.txt
git ls-files --stage test.txt`,
                practicalTip: "💡 Blobは「ファイルの中身」をそのまま保存するボックスです。同じ内容なら同じハッシュになります。"
            },
            {
                term: "Treeオブジェクト",
                type: "内部オブジェクト",
                definition: "ディレクトリの構造と、そのディレクトリに含まれるファイルやサブディレクトリ（Blobや他のTree）への参照を記録するオブジェクト。",
                example: `# コミットのTreeオブジェクトを確認
git cat-file -p HEAD^{tree}

# 特定のTreeオブジェクトの内容
git ls-tree HEAD

# サブディレクトリのTree情報
git ls-tree -r HEAD

# Tree作成の例
git write-tree`,
                practicalTip: "💡 Treeは「フォルダの構造」を記録します。どのファイルがどこにあるかの設計図です。"
            },
            {
                term: "Commitオブジェクト",
                type: "内部オブジェクト",
                definition: "特定の時点のリポジトリのルートTreeオブジェクトへの参照、親コミットへの参照、コミッター情報、コミットメッセージなどを記録するオブジェクト。",
                example: `# コミットオブジェクトの詳細表示
git cat-file -p HEAD

# コミットオブジェクトの構造例
git show --format=raw HEAD

# 特定のコミットの情報
git cat-file -p abc1234

# コミットオブジェクトの作成例
git commit-tree <tree-hash> -m "コミットメッセージ"`,
                practicalTip: "💡 Commitは「スナップショットの記録カード」です。いつ、誰が、何を変更したかを記録します。"
            },
            {
                term: "Ref (Reference)",
                type: "内部構造",
                definition: "特定のコミット（ハッシュ値）を指し示すポインター。ブランチ、タグ、HEADなどがこれに該当する。",
                example: `# ブランチの参照先を確認
cat .git/refs/heads/main

# タグの参照先を確認
cat .git/refs/tags/v1.0

# すべての参照を表示
git show-ref

# 参照の更新
git update-ref refs/heads/feature abc1234

# リモート参照
cat .git/refs/remotes/origin/main`,
                practicalTip: "💡 Refは「コミットへの道しるべ」です。覚えにくいハッシュ値の代わりに分かりやすい名前を使えます。"
            },
            {
                term: "インデックスファイル",
                type: "内部構造",
                definition: "ステージングエリアの情報を保存するバイナリファイル。現在参照しているファイルの状態やステージングされた変更のBlobオブジェクトへの参照が記録されている。",
                example: `# インデックスの内容を確認
git ls-files --stage

# インデックスファイルの詳細
git ls-files --debug

# インデックスをクリア
git read-tree --empty

# インデックスから作業ディレクトリを更新
git checkout-index -a

# インデックスの状態をTreeオブジェクトに
git write-tree`,
                practicalTip: "💡 インデックスは「コミット予定リスト」を保存するメモ帳です。どのファイルがコミット待ちかを記録します。"
            },
            {
                term: "Packファイル",
                type: "最適化",
                definition: "複数のオブジェクトを圧縮して一つにまとめたファイル。ストレージ効率を高めるために利用される。",
                example: `# Pack統計を確認
git count-objects -v

# ガベージコレクション実行
git gc

# Pack作成
git repack -ad

# Packファイルの場所
ls .git/objects/pack/

# Packファイルの内容確認
git verify-pack -v .git/objects/pack/*.idx`,
                practicalTip: "💡 Packファイルは「圧縮アーカイブ」です。Gitが自動的に作成してストレージを節約します。"
            },
            {
                term: "reflog",
                type: "履歴管理",
                definition: "ローカルリポジトリでのHEADの移動履歴を表示するコマンド。誤って削除されたコミットの復旧などに利用できる。",
                example: `# HEADの移動履歴を表示
git reflog

# 特定のブランチのreflog
git reflog show feature/login

# reflogを使って復旧
git reflog
git reset --hard HEAD@{2}

# reflogの保持期間設定
git config gc.reflogExpire "30 days"`,
                practicalTip: "💡 reflogは「行動の記録」です。間違ってコミットを失っても、ここから復旧できることがあります。"
            },
            {
                term: "git reset",
                type: "状態変更",
                definition: "指定したコミットにHEAD（とインデックス、ワーキングディレクトリ）を戻すコマンド。コミット自体を履歴から削除（参照できなくする）する。",
                example: `# 直前のコミットを取り消し（変更は保持）
git reset --soft HEAD~1

# コミットとステージングを取り消し
git reset --mixed HEAD~1
# または
git reset HEAD~1

# すべてを取り消し（危険）
git reset --hard HEAD~1

# 特定のファイルのみリセット
git reset HEAD file.txt`,
                practicalTip: "💡 git resetは「時間を巻き戻す」コマンド。--softは優しく、--hardは完全に元に戻します。"
            },
            {
                term: "git revert",
                type: "安全な取り消し",
                definition: "指定したコミットの変更を打ち消す新しいコミットを作成するコマンド。履歴を残しつつ変更を取り消したい場合に用いる。",
                example: `# 特定のコミットを打ち消し
git revert abc1234

# 直前のコミットを打ち消し
git revert HEAD

# マージコミットを打ち消し
git revert -m 1 <merge-commit>

# 複数のコミットを打ち消し
git revert HEAD~3..HEAD

# 打ち消しコミットを作成せずに変更のみ
git revert --no-commit abc1234`,
                practicalTip: "💡 git revertは「安全な取り消し」です。履歴を残すので、共有しているリポジトリでも安心です。"
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = gitData;
}