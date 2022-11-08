# 【DartSass】Gulp　EJS WordPress　環境（スマホファースト）

## 環境
- Gulpが使える環境が前提（4系）
- Nodeはバージョン14以降

## 使い方
- ターミナルを開き、cd src　へ変更し  npm i とコマンドを入力
- node_modulesとpackage-lock.jsonが生成されるのを確認する
- 「 npx gulp 」とコマンドを入力すると動き出します

## 仕様
- 作業はsrcフォルダ内で行う
- HTMLの記述はsrc内のejsフォルダに記載、dist内にHTMLファイルコンパイルされます。
- cssの記述はsrc内のsassフォルダに記載、dist内cssフォルダにコンパイルされます。
- jsの記述はsrc内のjsフォルダに記載、dist内jsフォルダにコンパイルされます。
- 画像はsrc内のimagesフォルダに格納、dist内imagesフォルダにコンパイルされます。（自動圧縮）

## 備考
- スマホファーストが前提の仕様です。
- rem記述を前提としています。
- ルートフォントをvwで設定していることからPCサイズのレイアウトをタブレットで表示させることが出来ます（remで書いた場合のみ）。


## WordPress対応
- src内のcss,js,imagesはWordPressTheme内のassetsフォルダにコンパイルされます。（画像のみ圧縮）


# test
# ejs-wordpress-base-gulp-sp
# ejs-wordpress-base-gulp-pc
