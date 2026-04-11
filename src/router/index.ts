import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Family from "../views/Family.vue";
import Thoughts from "../views/Thoughts.vue";
import Tech from "../components/Tech.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/family",
    name: "family",
    component: Family,
  },
  {
    path: "/tech",
    name: "tech",
    component: Tech,
  },
  {
    path: "/thoughts",
    name: "thoughts",
    component: Thoughts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
