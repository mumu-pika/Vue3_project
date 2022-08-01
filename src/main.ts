// import { createApp } from 'vue'
// // import './style.css'
// import App from './App.vue'

// // 引入mitt库
// import mitt from 'mitt'

// // 引入全局组件
// import Card from './components/Card/index.vue'

// import './assets/css/reset.less'

// // 引入animate.css
// import 'animate.css'

// // 注册插件
// import Loading from './components/loading'


// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'


// import {createPinia} from 'pinia'

// const pinia = createPinia()
// const Mit = mitt()

// declare module 'vue' {
//   export interface ComponentCustomProperties {
//     $Bus: typeof Mit
//   }
// }

// type Filter = {
//   format: <T extends any >(str: T) => T
// }

// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     $filters: Filter,
//     $loading:{
//       show: () => void,
//       hide: () => void
//     }
//   }
// }


// // createApp(App).mount('#app')
// const app = createApp(App)
// app.config.globalProperties.$Bus = Mit

// // 全局定义一个过滤器方法
// app.config.globalProperties.$filters = {
//   format<T>(str:T):string{
//     return `真*${str}`
//   }
// }

// app.use(Loading)
// app.use(ElementPlus)
// app.use(pinia)

// app.component('Card',Card).mount('#app')



import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, PiniaPluginContext } from 'pinia'

// 定义存储state的函数
const setStorage = (key: string, value: any) => {
  // 这里value存储成字符串的形式
  localStorage.setItem(key, JSON.stringify(value))
}



// 在main.ts中定义插件
const piniaPlugin = (context: PiniaPluginContext) => {
  // console.log(context)
  // 解构赋值出store
  let { store } = context

  // store订阅装填
  store.$subscribe(() => {

  })
  console.log(store)
}

const pinia = createPinia()

// 注册pinia的插件
pinia.use(piniaPlugin)

const app = createApp(App)
app.use(pinia)
app.mount('#app')