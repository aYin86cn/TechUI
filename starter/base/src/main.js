import { createApp } from 'vue'
import TechUIInit from '@techui/base'
import '@techui/themes/lightBlue'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)

TechUIInit({
  app,
  initLang: 'zh-CN',
  debug: import.meta.env.DEV,
}).then(() => {
  app.use(router)
  app.mount('#app')
})
