import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import { createPinia } from 'pinia'
//ElementPlus
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import '@/assets/fonts/iconfont/colourless/iconfont.css'
import '@/assets/fonts/iconfont/colour/iconfont.css'

// import '@/utils/number'
//图标icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  // import VueLazyComponent from 'xunlei/vue-lazy-component'
app.use(createPinia())
    .use(router)
    .use(ElementPlus)
    .mount('#app')
