import { createApp } from 'vue'
import router from '@/router/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'uno.css'

import '@/mock/index'
import { createPinia } from 'pinia'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.mount('#app')
