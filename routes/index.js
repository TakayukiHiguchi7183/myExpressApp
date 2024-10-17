var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //1+3を行うロジック
  var sum = add(1,3);
  var today = getCurrentDate();

  // 結果をタイトルの文字列'Express V'の後に入れる
  res.render('index', {title: 'Express V'+sum});
});

//足し算を実行する関数
function add(a, b) {
  return a + b;
}

//今日の日付を文字列で取得
function getCurrentDate() {
  var date = new Date();
  return date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
}

module.exports = router;
