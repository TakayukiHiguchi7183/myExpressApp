import express from 'express';
import { add, getCurrentDate } from '../functions/practice.js';
import { callPython } from '../functions/aiUse.js';
const router = express.Router();

// 足し算結果を取得するAPI
router.post('/sum', (req, res) => {
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
router.get('/date', (req, res) => {
    const today = getCurrentDate();
    res.json({ date: today });
});

  // ユーザの質問を後続と仲介するAPI
router.post('/prompt', (req, res) => {
    // クライアントから送信されたデータを取得
    const { prompt } = req.body;

    // Pythonが動くアプリサーバに、結果を投げ、回答を受け取る
    const answer = callPython(prompt);

    // 結果をクライアントに返す
    res.json({ answer: answer });
});

export default router;