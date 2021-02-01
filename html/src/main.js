import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import '@/assets/js/flexible';
import '@/assets/js/Tool.js';
createApp(App).use(router).mount('#app')

