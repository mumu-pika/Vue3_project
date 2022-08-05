import { isVNode, createVNode, render } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'

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

// ts做标注
declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
}


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/components/views/Login.vue'),
    meta: {
      title:'登录页面'
    }
  },
  {
    path: '/index',
    component: () => import('@/components/views/Index.vue'),
    meta: {
      title: '首页'
    }
  },
]

const router  = createRouter({
  history: createWebHistory(),
  routes
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
  if(whiteList.includes(to.path) || localStorage.getItem('pikaToken')){
    console.log("放行！")
    next()
  }else {
    console.log("不放行!")
    next('/')
  }
})

// 全局后置路由
router.afterEach((to, from)=>{
  Vnode.component?.exposed?.endLoading()
})

export default router