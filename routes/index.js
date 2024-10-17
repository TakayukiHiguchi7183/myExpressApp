import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  //1+3を行うロジック
  const sum = add(1,7);
  const today = getCurrentDate();

  // 結果をタイトルの文字列'Express V'の後に入れる
  res.render('index.ejs', {title: 'Express V'+sum, date: today});
});

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