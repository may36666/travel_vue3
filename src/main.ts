import { createApp } from 'vue'
import App from './App.vue'
import "./style/tailwind.css";
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);


app.use(pinia);
app.mount('#app');
