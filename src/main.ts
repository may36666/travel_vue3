import { createApp } from 'vue'
import App from './App.vue'
import "./style/tailwind.css";
import { createPinia } from 'pinia';
import router from './router/index'

const pinia = createPinia();
const app = createApp(App);


app.use(router);
app.use(pinia);
app.mount('#app');
