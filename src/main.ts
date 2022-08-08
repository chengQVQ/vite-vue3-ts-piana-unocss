import '@unocss/reset/tailwind.css' //重置样式 如果ui组件出现没颜色的问题 可能是这个导致的
import "./style.css";
import "uno.css";
import router from './router'
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia' 
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
