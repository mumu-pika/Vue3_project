// import { createApp } from 'vue'
import './style.css'
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

// 设置类型别名
type Options = {
  key?: string
}

// 设置一个默认的key,用于当key没有传的时候
const __piniaKey__: string = 'piniaKey'


// 定义获取state的函数
const getStorage = (key: string) => {
  //  因为会报错:‘不能将类型nuLl分配给类型string’ 这里需要断言下为string, 因为三目运算符也已经判断过了
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}


// 定义存储state的函数
const setStorage = (key: string, value: any) => {
  // 这里value存储成字符串的形式
  localStorage.setItem(key, JSON.stringify(value))

}

// 在main.ts中定义插件
const piniaPlugin = (options: Options) => {
  // 函数柯里化
  return (context: PiniaPluginContext) => {
    // 解构赋值出store
    const { store } = context

    const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id} `)
    console.log(data)

    // store订阅状态
    store.$subscribe(() => {
      // 注意，这里store.$state是一个代理的对象，需要用toRaw()来转为原始对象
      setStorage(`${options?.key ?? __piniaKey__}-${store.$id} `, toRaw(store.$state))
    })

    // 这里将getStorage获取到的本地state值直接赋予渲染好的页面
    return { ...data }
  }
}

const pinia = createPinia()

// 注册pinia的插件
// 这里的piniaPlugin是pinia帮我们调用的，
pinia.use(piniaPlugin({
  key: 'pinia'
}))

const app = createApp(App)
app.use(pinia)
app.mount('#app')