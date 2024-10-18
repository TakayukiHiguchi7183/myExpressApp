// main.js(フロントエンドのVueアプリケーションのエントリーポイント)

import { createApp } from 'vue';  // Vue 3の場合
import App from './App.vue';      // Appコンポーネントをインポート
//import router from './router';    // Vue Routerをインポート

// Vueアプリケーションを作成し、Vue Routerを設定して、#appにマウントする
const app = createApp(App);

//app.use(router);  // ルーターを登録
app.mount('#app');  // #appというIDを持つHTML要素にVueアプリケーションをマウント
