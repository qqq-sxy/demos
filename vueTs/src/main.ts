import { createApp } from 'vue'
import router from "./router";
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import WujieVue from "wujie-vue3";

const app = createApp(App);

app.use(router);
app.use(WujieVue);
app.use(ElementPlus);

app.mount('#app');
