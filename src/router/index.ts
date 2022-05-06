import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Family from "../views/Family.vue";
import Thoughts from "../views/Thoughts.vue";

import Tech from "../components/Tech.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // retained the following as an example of usage: route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/family",
    name: "family",
    component: Family
  },
  {
    path: "/tech",
    name: "tech",
    component: Tech
  },
  {
    path: "/thoughts",
    name: "thoughts",
    component: Thoughts
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
