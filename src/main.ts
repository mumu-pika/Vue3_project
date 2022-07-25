import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// 引入mitt库
import mitt from 'mitt'

// 引入全局组件
import Card from './components/Card/index.vue'

import './assets/css/reset.less'

// 引入animate.css
import 'animate.css'

const Mit = mitt()

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}


// createApp(App).mount('#app')
const app = createApp(App)
app.config.globalProperties.$Bus = Mit
app.component('Card',Card).mount('#app')
