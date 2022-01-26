import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Panel from "@/components/Panel.vue";
import Config from "@/components/Config.vue";
import Support from "@/components/Support.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/panel.html",
    name: "panel.html",
    component: Panel,
  },
  {
    path: "/config.html",
    name: "config.html",
    component: Config,
  },
  {
    path: "/support.html",
    name: "support.html",
    component: Support,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
