(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{585:function(t,s,a){"use strict";a.r(s);var n=a(55),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pythonで過去記事にfrontmatterを挿入した"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pythonで過去記事にfrontmatterを挿入した"}},[t._v("#")]),t._v(" pythonで過去記事にfrontmatterを挿入した")]),t._v(" "),a("p",[t._v("道端に何か落ちてるなと思って見たらカラスの死骸だった。何年か前に同じく道端で猫の死骸を拾った（車道の真ん中に横たわっていた）ときに調べて手順を知っていたので速やかに区の道路課に通報できた。経験というのは生きるものだ。（日記）")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("ここで今まで書いていた記事にはfrontmatterが無く、@vuepress/plugin-blogを導入しようとしたときに都合が悪かったので、pythonでfrontmatterを挿入した。"),a("br"),t._v("\nさすがにタグの生成までは面倒だったのでやらなかった。"),a("br"),t._v("\nMeCabとかそのあたりで特徴語検出とかちらっと考えないではなかったのだけど、コードを書くことより結果を確認することが面倒。うっかりすると本題に無関係な頻出語がタグになってしまう。"),a("br"),t._v("\n頻出語からおすすめタグの生成とかまで言っちゃうともうサービスとかアプリの領分だよなとも思うし、機能としては需要がありそうだけど私はインターネット老人なのでブラウザで長文なんて書きたくない。")]),t._v(" "),a("p",[t._v("閑話休題。")]),t._v(" "),a("p",[t._v("取り敢えず記事ファイルの冒頭二行を使ってfrontmatterを生成する。")]),t._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("ol",[a("li",[t._v("ファイルを開く")]),t._v(" "),a("li",[t._v("1行目をタイトルとして読み込む")]),t._v(" "),a("li",[t._v("2行目を最終更新日として読み込む（※2行目の最終更新日は"),a("RouterLink",{attrs:{to:"/posts/qiitaの記事をgithub-pages-vuepressに移行する/"}},[t._v("以前の記事")]),t._v("で挿入したもの）")],1),t._v(" "),a("li",[t._v("タイトルと最終更新日から生成したfrontmatterをファイル冒頭に挿入する"),a("br"),t._v("\n※やってみたら挿入はできなかったので実際にはファイルの中身を全て書き直している")])]),t._v(" "),a("p",[t._v("作業するにあたって、過去記事を "),a("code",[t._v("/_posts")]),t._v(" フォルダにまとめた。pythonでこの中のファイルを全部取得してぐるぐる作業させようという魂胆。")]),t._v(" "),a("h2",{attrs:{id:"コード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#コード"}},[t._v("#")]),t._v(" コード")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding: utf-8 -*-")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# %%")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" datetime\ncurrent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),t._v("\nfiles "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndirs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" files "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  files "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" fname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# タイトル")]),t._v("\n    title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最終更新日")]),t._v("\n    created "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      custom_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strptime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("created"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%Y年%m月%d日'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" ValueError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n    created "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" custom_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%Y-%m-%d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    frontmatter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"""---\ndescription: \'')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token format-spec"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\ntags:\ndate: '")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("created"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n---\n"""')])]),t._v("\n    fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    fp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("frontmatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Python3でdate.strptimeができなくなったようで、datetime.strptime.dateと相成りました。try構文挟んでるのはこの書式になっていないファイルが存在したため。"),a("code",[t._v("create[6:]")]),t._v(" になってるのは "),a("code",[t._v("最終更新日:")]),t._v("の部分を無視するためです。\n拡張性を考えないで行き当りばったりにやってても楽にカバーできるのがPythonのいいところですね。計画性を持ちましょう。はい。")]),t._v(" "),a("p",[a("code",[t._v("open(filename, mode='r+')")]),t._v(" で開いたものが上書きではなく追記で、本文を一旦全部消してしまう(r+権限でできると思っていた)のか別名で保存し直すのかggりながら考えた結果、「rで開いて読み込んだあとwで開き直して書く」みたいな記述を見かけた。開き直すしかないのか……。ファイル冒頭にポインタ戻して差し込みみたいなことがしたかったんだけど、まあできないもんはしかたない。知らないだけかもしれないが。")]),t._v(" "),a("p",[t._v("取り敢えずこれでfrontmatterが入って、ブログトップの記事一覧が出せるようになりました。タグ付けは手動かな……。")])])}),[],!1,null,null,null);s.default=r.exports}}]);