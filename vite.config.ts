import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/fem-repo-frontend-quiz-app/',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  }
})
