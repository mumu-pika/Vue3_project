import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 公共基础路径
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue"],
      // 声明生成文件
      dts: "src/auto-import.d.ts",
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000, // 端口号
    open: true, // 是否自动打开浏览器
  },
});
