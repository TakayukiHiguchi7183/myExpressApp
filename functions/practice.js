  //足し算を実行する関数
export function add(a, b) {
    return a + b;
}

  //今日の日付を文字列で取得
export function getCurrentDate() {
    const date = new Date();
    return date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
}