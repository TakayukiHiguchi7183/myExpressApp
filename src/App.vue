<template>
  <div class="container">
    <div class="header">
      <h1>Welcome to mypage</h1>
      <p class="date">Today is {{ date }} !!!</p>
    </div>

    <div class="calculator">
      <input v-model="number1" type="number" placeholder="First number" />
      <span class="plus-sign">+</span>
      <input v-model="number2" type="number" placeholder="Second number" />
      <button class="calculate-button" @click="calculateSum">=</button>
      <p class="result">Result: {{ sum }}</p>
    </div>

    <div class="ai-section">
      <h2>Ask the AI</h2>
      <div class="ai-input">
        <input v-model="prompt" type="text" placeholder="Ask your question" />
        <button class="submit-button" @click="submitPrompt">></button>
      </div>
      <div class="ai-timeline">
        <div class="ai-message user-message" v-if="answer">
          <p class="user-question">You: {{ prompt }}</p>
        </div>
        <div class="ai-message ai-message-box" v-if="answer">
          <p class="ai-answer">AI: {{ answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: '',
      number2: '',
      sum: '',
      date: '',
      prompt: '',
      answer: ''
    };
  },
  mounted() {
    fetch('/api/date')
      .then(response => response.json())
      .then(data => {
        this.date = data.date;
      });
  },
  methods: {
    calculateSum() {
      fetch('/api/sum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ num1: this.number1, num2: this.number2 })
      })
      .then(response => response.json())
      .then(data => { this.sum = data.sum; });
    },
    submitPrompt() {
      fetch('/api/prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: this.prompt })
      })
      .then(response => response.json())
      .then(data => {
        this.answer = data.answer;
      });
    }
  }
}
</script>

<style scoped>
/* 全体のデザイン */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f8ff; /* 薄い水色 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* ヘッダー部分 */
.header {
  text-align: center;
  margin-bottom: 30px;
}
.header h1 {
  font-size: 3em;
  margin: 0;
  color: #007acc; /* 少し濃い水色 */
}
.header .date {
  font-size: 2em;
  font-weight: bold;
  color: #007acc;
  margin-top: 10px;
}

/* 計算部分 */
.calculator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.calculator input {
  width: 150px; /* 入力欄を広く */
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.plus-sign {
  font-size: 1.5em;
  margin: 0 5px;
  color: #007acc;
}
.calculate-button {
  padding: 5px 15px; /* ボタンを小さく */
  border: none;
  background-color: #007acc;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-left: 10px;
}
.result {
  margin-left: 20px;
  font-size: 1.5em;
  color: #007acc;
  font-weight: bold;
}

/* AIセクション */
.ai-section {
  background-color: #e0f7ff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
}
.ai-section h2 {
  text-align: center;
  color: #007acc;
  font-size: 2.5em;
  margin-bottom: 20px;
}

/* AIの入力部分 */
.ai-input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.ai-input input {
  width: 80%;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.submit-button {
  width: 40px;
  height: 40px;
  border: none;
  background-color: #007acc;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: bold;
}

/* 質問と回答を縦に並べる */
.ai-timeline {
  margin-top: 20px;
}
.ai-message {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.user-message {
  background-color: #f0f8ff; /* 質問の背景色 */
}
.ai-message-box {
  background-color: #ffecd1; /* 薄めのオレンジ色 */
}
.user-question,
.ai-answer {
  font-size: 1.2em;
  font-weight: bold;
}
.user-question {
  color: #007acc;
}
.ai-answer {
  color: #cc7a00; /* 薄めのオレンジ色 */
}
</style>