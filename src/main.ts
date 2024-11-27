import { computed, createApp,ref } from 'vue'
import '@src/style.scss'
import App from '@src/App.vue'
import router from '@src/router'
const app=createApp(App);
app.use(router)

const theme = ref('light')
const isDark = computed(() => theme.value === 'dark')
app.provide('theme', {
    theme,
    isDark
})
app.mount('#app')
