import { createApp } from 'vue'
import '@src/style.scss'
import App from '@src/App.vue'
import router from '@src/router'
const app=createApp(App);
app.use(router);
app.mount('#app');
