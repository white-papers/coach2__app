# アプリ名
Coaching.Curriculum

## 概要
コーチングについて、より体系的に学びたい人に向けて作成いたしました。
本WEBアプリに沿って学習を進めていただくことによって、コーチングの基本から実践段階に至るまでのノウハウを効率的に学ぶことができます。

## 詳細
コーチングを学びたいといっても、市販の参考書を購入したり、スクールに通ったりと、様々な方法があります。  
しかし、コーチングを学ぶ上で、無視できない障壁があります。  
それは、高い学習費用です。本WEBアプリは、コーチングをより多くの人にお届けするため、リーズナブルなお値段で体系的に学びたいというニーズにお応えいたします。

## 制作背景
アメリカでは、ビジネスコーチングの市場は1.6兆円以上（※）だと言われています。  
一方、日本では現在約300億程度の規模なので、その差は約50倍になります。  
アフターコロナで働き方や価値観が大きく変わる中、1on1など企業が取り入れていく傾向もあり、コーチングは成長基調にあると考えられます。  
コーチングの注目度が今後高まっていくことに備え、コーチングの正しい知識を身につけておくことはビジネスパーソンにとって必要不可欠になるのではないかと考え、本WEBアプリを制作する運びとなりました。  

（※）「Business Coaching in the US: Market Research Report」を参照

## 工夫した点
①トップページのデザインを決めるにあたって、落ち着きがあって洗練されたイメージにする必要があったので、淡い緑を基調とした色合いにしました。  
②見やすいよう、ページレイアウトは余白を多めに取りました。  
③操作をしやすいよう、カーソルを乗せると各種ボタンやリンクが変わるように設定しました。  
④パソコン、スマホ、タブレット等からでも本アプリを閲覧することができるように、メディアクエリを使用しました。  
⑤JQueryを使用してフォームを入力できるようにしました。  

## 苦労した点
①ゼロからページデザインを考えるにあたって、当初はどのようなデザインにすればいいのか決めかねました。  
そこで、「コーチングを体系的に学ぶ」という軸を明確に設定したところ、シンプルで分かりやすいものにしようという結論に至ることができました。  
②どのような機能が必要なのかを洗い出す作業が難航しました。  
そこで、①と同様に、「コーチングを体系的に学ぶ」ということを軸にして精査したところ、不要な機能がたくさんあることに気がつくことができました。  
③レッスン詳細ページの作成にあたって、どのようなデザインを用いれば学習者が内容を理解しやすくなるのか決めかねました。  
いくつかの学習サイトを参考にし、見やすいと感じた点を抽出して具体的に言語化しました。

## DEMO
![DEMO](https://user-images.githubusercontent.com/60888549/86892817-b741de80-c13b-11ea-96b5-41541533b47a.jpg)

## アドレス
http://54.95.23.196/

## テストアカウントと手順
[テスト用アカウント]  
Email:    test_user@gmail.com  
Password: test_user  

[テスト手順]  
テストは以下の手順で行うことができます。  
① アカウント登録  
② トップページからLesson1の「コーチングとは？」リンク押下  
③ 一番下にある「提出する」ボタンを押下  
④ ヘッダーにある「コース一覧」リンクからトップページに戻る  
⑤ 右下にある「質問フォーム」を押下  
⑥ 画面幅を変えてページを適宜確認  
⑦ ログアウト処理

## 今後実装したいこと
①月会費登録・決済機能  
②レッスン内容の拡充

## ローカルから閲覧する方法
$ git clone https://github.com/white-papers/coach2__app.git  
$ cd coach2__app

## 制作者
Twitter: @StrangeSpace27  
Github: https://github.com/white-papers/white-papers.github.io

__Shuichi Kitaoka__

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## 使用技術(開発環境)
Ruby/Ruby on Rails/MySQL/Github/AWS/Visual Studio Code

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
