import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import AutoImport from "unplugin-auto-import/vite";
import ViteComponents from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"; //自动引用ant desgin组件
import { resolve } from "path"; //路径别名
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],//引用预设插件
      /* options */
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: true,
      imports: ["vue", "vue-router"], //配置自动引用的vue函数
    }),
    ViteComponents({
      dts: true,
      resolvers: [AntDesignVueResolver()],
    }),
  ],
});
