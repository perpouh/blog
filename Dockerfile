FROM python:3.11-slim

# 必要なライブラリインストール（obsidian-html）
RUN pip install obsidianhtml

# 作業ディレクトリの設定
WORKDIR /app

# Markdownファイルと設定ファイルのコピー
COPY . /app

# HTML生成（必要に応じてコマンド修正）
RUN mkdir -p /app/output && \
    obsidianhtml convert -i /app/config.local.yml

# ポートを開ける
EXPOSE 8000

# HTMLディレクトリで静的サーバ起動
# CMD ["python", "-m", "http.server", "8000", "--directory", "/app/output"]
CMD ["obsidianhtml", "serve", "--directory", "output/html", "--port", "8000"]