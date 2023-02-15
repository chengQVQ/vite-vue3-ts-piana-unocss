import { createRouter, createWebHashHistory } from "vue-router";
import home from "@/views/home/index.vue";
let routes = [
  {
    path: "/",
    name: "home",
    component: home,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
