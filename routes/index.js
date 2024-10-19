import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// ルートハンドラを修正
router.get('/', (req, res, next) => {
  res.sendFile(path.join(dirname, '../public/index.html'));  // 静的なindex.htmlを返す
});

// 足し算結果を取得するAPI
router.post('/api/sum', (req, res) => {
  // クライアントから送信されたデータを取得
  const { num1, num2 } = req.body;

  // 数値に変換（もし送信されるデータが文字列の場合に備えて）
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  // 足し算を実行
  const sum = add(number1, number2);

  // 結果をクライアントに返す
  res.json({ sum: sum });
});

// 日付を取得するAPI
router.get('/api/date', (req, res) => {
  const today = getCurrentDate();
  res.json({ date: today });
});

// ユーザの質問を取得し、後続のPython処理に受け渡し、Pythonで作った回答を返すAPI
router.post('/api/prompt', (req, res) => {
  // クライアントから送信されたデータを取得
  const { prompt } = req.body;

  // inputを文字列に直して格納
  const userPrompt = String(prompt);

  // Pythonが動くアプリサーバに、結果を投げ、回答を受け取る
  const answer = callPython(userPrompt);

  // 結果をクライアントに返す
  res.json({ answer: answer });
});

// Pythonが動くアプリサーバに、結果を投げ、回答を受け取る関数
export function callPython(prompt) {
  // promptを格納。Validateも行う

  // Pythonが動くApp Serviceへ接続

  // PromptをApp Seviceに送信

  // App Serviceから結果を受け取る

  // 結果を返す
  return 'まだ回答は返せません。もう少し待ってね'
}


//足し算を実行する関数
export function add(a, b) {
  return a + b;
}

//今日の日付を文字列で取得
export function getCurrentDate() {
  const date = new Date();
  return date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
}

export default router;