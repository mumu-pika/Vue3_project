import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),AutoImport({
    imports:['vue'],
    // 声明生成文件
    dts:'src/auto-import.d.ts'
  })]
})
