<template>
  <div>
    <p>Welcome to mypage</p>
    <!-- 数字入力フィールドを追加 -->
    <input v-model="number1" type="number" placeholder="Enter first number" />
    <input v-model="number2" type="number" placeholder="Enter second number" />
    <button @click="calculateSum">Calculate</button>
    <p>Calculate result is {{ sum }} </p>
    <p>Today is {{ date }} !!!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: '',
      number2: '',
      sum: '',
      date: ''
    };
  },
  mounted() {
    // 足し算の結果を取得
    fetch('/api/sum')
      .then(response => response.json())
      .then(data => {
        this.sum = data.sum;
      });

    // 日付を取得
    fetch('/api/date')
      .then(response => response.json())
      .then(data => {
        this.date = data.date;
      });
  },
  methods: {
    // 計算処理
    calculateSum() {
      // フォーム入力をサーバーに送信
      fetch('/api/sum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          num1: this.number1,
          num2: this.number2
        })
      })
      .then(response => response.json())
      .then(data => {
        this.sum = data.sum; // 受け取った結果を表示
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
}
</script>