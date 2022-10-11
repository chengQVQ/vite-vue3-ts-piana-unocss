import { createRouter, createWebHashHistory } from "vue-router";
import layout from "@/layout/index.vue";
import login from "@/views/login/index.vue";
import home from "@/views/home/index.vue";
let routes = [
  {
    path: "/",
    name: 'layout',
    component: layout,
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
