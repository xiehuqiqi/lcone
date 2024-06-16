import { createApp } from "vue";
import App from "./App.vue";
import './main.css';
import { setupRouter } from './router';

import '&/assets/font/font_icon/iconfont.js';

const setupApp = async () => {
  const app = createApp(App);
  // 创建路由
  setupRouter(app);
  app.mount('#app');
};

setupApp();