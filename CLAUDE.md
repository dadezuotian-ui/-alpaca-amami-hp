# alpaca-hp（ALPACA 自社HP のリポジトリ）

## 先に読む（正本はナレッジ `/root/agents/shared-knowledge/`）
- 共通ルール `01-common/unified-rules.md`
- 本番の場所・作業フォルダ・ポート：`alpaca/facts/system.md`
- 料金・正式情報（対外物はここから写す）：`alpaca/facts/business.md`
- 決まり・言い回し・やる事やらない事：`alpaca/rules/01-absolute.md`・`alpaca/rules/02-wording.md`・`alpaca/rules/03-scope.md`
- 引き継ぎ：`alpaca/status/handoff.md`

## 作業前の確認（重要）
- **このフォルダは古い作業場所で、本番の元ではない。** 直す前に `alpaca/facts/system.md` と `git worktree list` で今の作業場所を確かめる
- ここの `.git` は追加ディスクの作業場所（worktree）と共有している。フォルダを移さない・消さない
- 手元の枝は `origin/main` と大きく違う。未コミット・未追跡のファイルは消さない
- push は毎回大地さんに確認する

## ディレクトリ
- `src/app/` — ページと API（`api/contact/` は問い合わせメール）
- `src/components/`・`src/hooks/`・`src/lib/`・`src/data/`
- `public/images/` — 採用した画像。`public/images/generated/` は探索用で Git 管理外
- `docs/` — 資料（`resend_setup_guide.md` はメール送信の設定手順）
- `DESIGN.md` — 昔のデザインメモ（参考。今の画面とは違う）
- `remove-bg.mjs`・`take-screenshots.mjs` — 補助スクリプト
- ページ構成は枝ごとに違うので、`src/app/` の実物を見る

## このリポジトリの注意点
- Next.js（App Router）＋TypeScript。パッケージ管理は npm（`package-lock.json`）
- `node_modules` は消してある事がある（`NODE_MODULES-REMOVED.txt`）。入れ直しは大地さんに確認する
- ポートは 3700 番台の空きを指定する（`npm run dev -- -p <番号>`）
- 画像は WebP にする。採用する物だけ `public/images/` にコピーする
- 鍵は `.env.local`（Git 管理外）。中身は表示しない
- 旧屋号の表記が残っていたら ALPACA に直す
