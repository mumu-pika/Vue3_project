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

// 注册插件
import Loading from './components/loading'


const Mit = mitt()

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

type Filter = {
  format: <T extends any >(str: T) => T
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: Filter
  }
}


// createApp(App).mount('#app')
const app = createApp(App)
app.config.globalProperties.$Bus = Mit

// 全局定义一个过滤器方法
app.config.globalProperties.$filters = {
  format<T>(str:T):string{
    return `真*${str}`
  }
}

app.use(Loading)


app.component('Card',Card).mount('#app')



