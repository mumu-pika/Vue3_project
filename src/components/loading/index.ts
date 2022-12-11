// 自定义插件, 目标是将这个组件封装为一个插件
import { App, createVNode, VNode, render } from "vue";

import Loading from "./index.vue";
export default {
  install(app: App) {
    // 第一步，我们需要将组件转换为虚拟DOM, 使用createVNode()
    const vnode: VNode = createVNode(Loading);

    // 第二步，我们需要将虚拟DOM转为真实DOM, 使用render()
    render(vnode, document.body);
    // 这里我们无法直接通过vnode.component获取到setupState
    // vnode.component?.setupState
    // 采取另外一个方法：exposed, 此外需要Loading暴露出来(defineExpose)所需的函数

    app.config.globalProperties.$loading = {
      show: vnode.component?.exposed?.show,
      hide: vnode.component?.exposed?.hide,
    };
  },
};
