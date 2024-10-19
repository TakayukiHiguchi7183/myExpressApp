import express from 'express';
const router = express.Router();

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

  // ユーザの質問を後続と仲介するAPI
router.post('/api/prompt', (req, res) => {
    // クライアントから送信されたデータを取得
    const { prompt } = req.body;

    // Pythonが動くアプリサーバに、結果を投げ、回答を受け取る
    const answer = callPython(prompt);

    // 結果をクライアントに返す
    res.json({ answer: answer });
});

////////////////////利用している関数/////////////////////////

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