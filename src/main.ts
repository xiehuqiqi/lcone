import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import ElementPlus from 'element-plus';


const app = createApp(App)


app.mount('#app');
app.use(ElementPlus);



// createApp(App).mount("#app").use(ElementPlus);