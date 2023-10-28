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
//测试12233

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElementPlus)
    .mount('#app')
