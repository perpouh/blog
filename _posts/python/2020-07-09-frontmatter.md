---
date: '2020-07-09'
auther: perpouh
lang: ja
tags:
  - python
---

# pythonで過去記事にfrontmatterを挿入した

道端に何か落ちてるなと思って見たらカラスの死骸だった。何年か前に同じく道端で猫の死骸を拾った（車道の真ん中に横たわっていた）ときに調べて手順を知っていたので速やかに区の道路課に通報できた。経験というのは生きるものだ。（日記）

## 背景

ここで今まで書いていた記事にはfrontmatterが無く、@vuepress/plugin-blogを導入しようとしたときに都合が悪かったので、pythonでfrontmatterを挿入した。  
さすがにタグの生成までは面倒だったのでやらなかった。  
MeCabとかそのあたりで特徴語検出とかちらっと考えないではなかったのだけど、コードを書くことより結果を確認することが面倒。うっかりすると本題に無関係な頻出語がタグになってしまう。  
頻出語からおすすめタグの生成とかまで言っちゃうともうサービスとかアプリの領分だよなとも思うし、機能としては需要がありそうだけど私はインターネット老人なのでブラウザで長文なんて書きたくない。

閑話休題。

取り敢えず記事ファイルの冒頭二行を使ってfrontmatterを生成する。

## 概要

 1. ファイルを開く
 2. 1行目をタイトルとして読み込む
 3. 2行目を最終更新日として読み込む（※2行目の最終更新日は[以前の記事](/posts/qiitaの記事をgithub-pages-vuepressに移行する/)で挿入したもの）
 4. タイトルと最終更新日から生成したfrontmatterをファイル冒頭に挿入する  
    ※やってみたら挿入はできなかったので実際にはファイルの中身を全て書き直している

作業するにあたって、過去記事を `/_posts` フォルダにまとめた。pythonでこの中のファイルを全部取得してぐるぐる作業させようという魂胆。

## コード

```python
# -*- coding: utf-8 -*-
# %%
import os
from datetime import date, datetime
current = '.'
files = os.listdir(path=current)
dirs = [f for f in files if os.path.isdir(os.path.join(current, f))]

for d in dirs:
  path = os.path.join(current, d)
  files = os.listdir(path = path)
  for fname in files:
    fp = open(path + '/' + fname, mode='r')
    # タイトル
    title = fp.readline().strip()
    # 最終更新日
    created = fp.readline().strip()
    try:
      custom_time = datetime.strptime(created[6:], '%Y年%m月%d日').date()
    except ValueError:
      continue
    created = custom_time.strftime('%Y-%m-%d')
    body = fp.read()
    frontmatter = f"""---
description: '{title[2:]}'
tags:
date: '{created}'
---
"""
    fp.close()

    fp = open(path + '/' + fname, mode='w')
    fp.write(frontmatter)
    fp.write(title)
    fp.write(body)
    fp.close()
```
Python3でdate.strptimeができなくなったようで、datetime.strptime.dateと相成りました。try構文挟んでるのはこの書式になっていないファイルが存在したため。`create[6:]` になってるのは `最終更新日:`の部分を無視するためです。
拡張性を考えないで行き当りばったりにやってても楽にカバーできるのがPythonのいいところですね。計画性を持ちましょう。はい。

`open(filename, mode='r+')` で開いたものが上書きではなく追記で、本文を一旦全部消してしまう(r+権限でできると思っていた)のか別名で保存し直すのかggりながら考えた結果、「rで開いて読み込んだあとwで開き直して書く」みたいな記述を見かけた。開き直すしかないのか……。ファイル冒頭にポインタ戻して差し込みみたいなことがしたかったんだけど、まあできないもんはしかたない。知らないだけかもしれないが。

取り敢えずこれでfrontmatterが入って、ブログトップの記事一覧が出せるようになりました。タグ付けは手動かな……。