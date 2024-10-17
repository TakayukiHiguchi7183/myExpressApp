# myExpressApp
* 目的NodeアプリのCICD練習
[参考記事](https://learn.microsoft.com/ja-jp/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode#create-your-nodejs-application)
* 言語：nodeファイル。今後拡張予定
* 環境へのアクセス
  * 開発環境　[URL](https://nodeapplicationdevelop-g4bgeqh9h6djewc5.japaneast-01.azurewebsites.net/)
  * 本番ステージング環境　[URLはこれから作成](これから作成)
  * 本番稼働環境　[URL](https://nodeapplication-fjd9gsfufwangrhb.japaneast-01.azurewebsites.net/)

## インストール方法（installation）

1. リポジトリをクローンします:
   ```bash
   git clone https://github.com/TakayukiHiguchi7183/myExpressApp.git
2. 初回のみ必要モジュールをインストールします（ルートディレクトリで実施してください）
   ```bash
   npm install
2. ローカルでの稼働を開始します:
    ```bash
    DEBUG=myexpressapp:* npm start
3. ブラウザで```http://localhost:3000```にアクセスすると、ローカル実行できます
4. Terminalで```control+C```を入力すると、アプリが終了します

## 設定方法（Configuration）

1. 今の所なし

## タスクの進め方（work load）
タスクの進め方は以下のルールでやってみよう。

1. Issueでやりたいタスクを書き起こす
2. developブランチで実装。コミット時はメッセージに `#[Issue No]`をつける
3. Issueが解決したらクローズ

## テスト方法(Testing)

1. 今の所なし。追加予定

## デプロイ(Deploying)
Actionsフローによる以下のような流れが目標

1. develop環境へのプッシュをトリガーに、pushDevelopフローを実行
    1. 開発環境（[URL](https://nodeapplicationdevelop-g4bgeqh9h6djewc5.japaneast-01.azurewebsites.net/)）に自動デプロイ（済！）
    2. 自動テスト実行（ユニットテスト）
3. 動作確認し、本番移送しても問題ないことを確認
4. developブランチからmainブランチへのマージ（プルリクエスト）をトリガーに、mergeMainフローを実行
    1. 性的解析ツールによる脆弱性検査を実施
    2. 本番ステージング環境（[URLはこれから作成](これから作成)）に自動デプロイ（仮済！）
    3. ドキュメント作成し、GitHub Pagesに記載
6. デプロイ成功を確認できたら本番稼働環境([URL](https://nodeapplication-fjd9gsfufwangrhb.japaneast-01.azurewebsites.net/))へスワップ
7. 日次で以下のフローも回す
    1. 依存関係チェック
    2. 稼働確認

※注意　最初はmergeMainフローでそのまま稼働環境にデプロイ。その後staging環境を手配（コスト節約のため）

## 利用ライセンス

1. 今の所なし
