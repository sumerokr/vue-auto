import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cars",
    name: "Cars",
    component: () => import(/* webpackChunkName: "cars" */ "../views/Cars.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: () =>
      import(/* webpackChunkName: "service" */ "../views/Service.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
