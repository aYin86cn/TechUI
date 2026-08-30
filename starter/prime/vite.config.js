import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['@techui/prime', '@techui/themes'],
  },
})
