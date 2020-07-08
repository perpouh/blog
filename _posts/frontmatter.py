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