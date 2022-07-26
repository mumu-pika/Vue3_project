// 自定义插件, 目标是将这个组件封装为一个插件
import { App, createVNode, VNode, render } from 'vue'

import Loading from './index.vue'
export default {
  install(app:App) {
    // 第一步，我们需要将组件转换为虚拟DOM, 使用createVNode()
    const vnode:VNode = createVNode(Loading)

    // 第二步，我们需要将虚拟DOM转为真实DOM, 使用render()
    render(vnode, document.body)

    vnode.component?.setupState


    console.log(vnode)
  }
}