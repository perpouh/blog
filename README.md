# Blog

このリポジトリは私の個人的な日記・ブログです。Obsidianで管理されたMarkdownファイルをobsidianhtmlでビルドし、GitHub Pagesで静的ホスティングしています。  
もうちょっと技術寄りでもうちょっとちゃんと書くやつ: [perpouh/zenn](https://github.com/perpouh/zenn)

[![pages-build-deployment](https://github.com/perpouh/blog/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/perpouh/blog/actions/workflows/pages/pages-build-deployment)

## 📁 プロジェクト構造

```
blog/
├── articles/          # ブログ記事（Markdownファイル）
├── attachments/       # 画像やファイルの添付物
├── template/          # 記事テンプレート
├── output/           # ビルド出力ディレクトリ
├── config.yml        # obsidianhtml設定ファイル
├── config.local.yml  # ローカル設定ファイル
├── Dockerfile        # Docker設定
└── package.json      # 依存関係
```

## 🚀 セットアップ

### 前提条件
- Python 3.11以上
- obsidianhtml

### インストール

```bash
# obsidianhtmlのインストール
pip install obsidianhtml

# 依存関係のインストール（Zenn CLI）
npm install
```

### ローカル開発

```bash
# 記事のビルド
obsidianhtml convert -i config.local.yml

# ローカルサーバー起動
obsidianhtml serve --directory output/html --port 8000
```

### Dockerを使用

```bash
# イメージのビルド
docker build -t personal-blog .

# コンテナの起動
docker run -p 8000:8000 personal-blog
```

## 📝 記事の作成

1. `articles/` ディレクトリに新しいMarkdownファイルを作成
2. ファイル名は日付形式（例：`2025-07-13.md`）
3. テンプレートは `template/` ディレクトリを参考にしてください

### 記事テンプレート

- `Daily.md` - 日記用テンプレート

## 🔧 設定

### メイン設定（config.yml）
- サイト名、URL設定
- 出力ディレクトリ設定
- モジュール設定

### ローカル設定（config.local.yml）
- 開発環境固有の設定
- ローカルパス設定

## 🌐 デプロイ

このブログはGitHub Pagesでホスティングされています。

### デプロイ手順

1. 記事を追加・編集
2. ローカルでビルドして確認
3. 変更をコミット・プッシュ
4. GitHub Actionsで自動デプロイ（設定されている場合）

## 📄 ライセンス

このプロジェクトは個人使用のため、ライセンスは適用されません。

## 🤝 貢献

このブログは個人的なプロジェクトのため、外部からの貢献は受け付けていません。ただし、技術的な質問やフィードバックは歓迎します。

---

**最終更新**: 2025年1月
