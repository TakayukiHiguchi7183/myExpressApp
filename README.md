# myExpressApp
* 目的NodeアプリのCICD練習
[参考記事](https://learn.microsoft.com/ja-jp/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode#create-your-nodejs-application)
* 言語：nodeファイル。今後拡張予定
* 環境へのアクセス
  * 開発環境　[URLはこれから作成](これから作成)
  * 本番環境　[URLはこれから作成](これから作成)

## インストール方法（installation）

1. リポジトリをクローンします:
   ```bash
   git clone https://github.com/TakayukiHiguchi7183/myExpressApp.git
2. 実行します:
    ```bash
    DEBUG=myexpressapp:* npm start
3. ```http://localhost:3000```にアクセスすると、ローカル実行できます

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

1. develop環境へのプッシュをトリガーに、devDeployフローを実行
    1. 開発環境（[URLはこれから作成](これから作成)）に自動デプロイ
    2. 自動テスト実行（ユニットテスト）
3. 動作確認し、本番移送しても問題ないことを確認
4. developブランチからmainブランチへのマージ（プルリクエスト）をトリガーに、deployフローを実行
    1. 性的解析ツールによる脆弱性検査を実施
    2. 本番ステージング環境（[URLはこれから作成](これから作成)）に自動デプロイ
    3. ドキュメント作成し、FEP Pagesに記載
6. デプロイ成功を確認できたら稼働環境へスワップ
7. 日次で以下のフローも回す
    1. 依存関係チェック
    2. 稼働確認

## 利用ライセンス

1. 今の所なし
