<template>
  <div>
    <p>Welcome to mypage</p>
    <p>Calculate result is {{ sum }} </p>
    <p>Today is {{ date }} !!!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>