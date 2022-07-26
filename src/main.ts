import "./style.css";
import "uno.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia' 
import '@unocss/reset/tailwind.css' //重置样式 如果ui组件出现没颜色的问题 可能是这个导致的
const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
