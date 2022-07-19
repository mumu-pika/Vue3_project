import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// 引入全局组件
import Card from './components/Card/index.vue'

import './assets/css/reset.less'

// createApp(App).mount('#app')

createApp(App).component('Card',Card).mount('#app')
