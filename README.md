# phina.js-random-dungeon-walk
phina.jsとrot.jsでランダムな部屋と通路を生成し、カーソルキーで移動できるデモ

# 動作サンプル

![phinamove](https://user-images.githubusercontent.com/10125386/44192827-d2805b00-a16b-11e8-8f1b-3795d5dfea29.gif)

# 経緯

**2017/09** 前後にphina.jsを触っていました。  
「ローグライク」ライクゲームを一つの目標としてましたが、  
ゲームプランがあるわけでもなかったため、ダンジョンの生成とその中でも移動を目的としました。  
具体的には

* [phina.jsとrot.jsでマップ自動生成 | Runstant](http://runstant.com/Negiwine/projects/1c899c50) 
* [\[enchant.js\] ランダムダンジョン生成 - フロントエンド開発Blog | オレには鈍器がある 無料ゲーム公式サイト](http://oredon.guitarkouza.net/blog/2014/04/enchantjsrotjs.php)
* [\[enchant.js\] ランダムダンジョン生成 - jsdo.it - Share JavaScript, HTML5 and CSS](http://jsdo.it/oredon/qSJV)

のような形です。  
当初の目標であるダンジョンの生成と、通行可能判定を考慮したグリッド移動が完成したため、最低限の完了としました。  

こちらもローカルに死蔵していたため整理のためあげます。  

# 作業過程

制作物の中では珍しく過程を連載の形でQiitaにあげていました。  
phina.jsというGUIとゲーム(ループ)部分が初体験で難解なためでした。  

[「user:khsk tag:phina.js」の検索結果 - Qiita](https://qiita.com/search?utf8=%E2%9C%93&sort=created&q=user%3Akhsk+tag%3Aphina.js)

# runstant

実際に動かせます。  

http://runstant.com/runstataccount/projects/4fb28c47

# 使用ライブラリ

* [ondras/rot.js: ROguelike Toolkit](https://github.com/ondras/rot.js)
* [Home | phina.js](http://phinajs.com/)
* [クリエイター向け素材 ダウンロード | プログラミング生放送](https://pronama.jp/pronama/download/)
