import { isVNode, createVNode, render } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'

// 引入自定义的进度条, 之后将其转为VNode
import loadingBar from '../components/views/loadingBar.vue'

const Vnode = createVNode(loadingBar)

// console.log(Vnode)
render(Vnode, document.body)

//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。

// ts做标注, 为meta数据做类型
declare module 'vue-router' {
  interface RouteMeta {
    title: string
    transition?: string
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // 路由懒加载, 异步加载组件
    component: () => import('@/components/views/Login.vue'),
    meta: {
      title: '登录页面',
      transition: 'animate__bounceInDown',
    },
  },
  {
    path: '/index',
    component: () => import('@/components/views/Index.vue'),
    meta: {
      title: '首页',
      transition: 'animate__fadeInLeft',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  // 注册路由滚动行为
  scrollBehavior: (to, from, savePosition) => {
    // `to` 和 `from` 都是路由地址
    // `savePosition` 记录位置的数值，可以为空
    // 如果有位置数值的话
    // if (savePosition) {
    //   return savePosition
    // }else {
    //   // 如果为空，这里返回一个默认没有滚动的数值
    //   return {
    //     top: 0
    //   }
    // }

    // 此外还支持异步
    return new Promise((r) => {
      setTimeout(() => {
        r({
          top: 999,
        })
      }, 2000)
    })
  },
  routes,
})

// 定义路由跳转的白名单
const whiteList: Array<string> = ['/']

// 全局前置路由
router.beforeEach((to, from, next) => {
  Vnode.component?.exposed?.startLoading()
  document.title = to.meta.title //这里也可以使用断言，但是断言没有类型推导
  //to:获取到要跳转到的路由信息
  //from：获取到从哪个路由跳转过来的信息
  //next: next() 放行  next(path) 放行  next(false)中断当前导航
  // 如果要跳转的地方是白名单中的路径或者用户已经登录
  // if(whiteList.includes(to.path) || localStorage.getItem('pikaToken')){
  //   console.log("放行！")
  //   next()
  // }else {
  //   console.log("不放行!")
  //   next('/')
  // }
  next()
})

// 全局后置路由
router.afterEach((to, from) => {
  Vnode.component?.exposed?.endLoading()
})

export default router
