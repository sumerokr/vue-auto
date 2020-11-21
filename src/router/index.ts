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
    path: "/cars/:id",
    name: "Car",
    component: () => import(/* webpackChunkName: "car" */ "../views/Car.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: () =>
      import(/* webpackChunkName: "service" */ "../views/Service.vue"),
  },
  //#region User
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue"),
  },
  {
    path: "/user/adverts",
    name: "UserAdverts",
    component: () =>
      import(/* webpackChunkName: "user-adverts" */ "../views/UserAdverts.vue"),
  },
  {
    path: "/user/favorites",
    name: "UserFavorites",
    component: () =>
      import(
        /* webpackChunkName: "user-favorites" */ "../views/UserFavorites.vue"
      ),
  },
  {
    path: "/user/messages",
    name: "UserMessages",
    component: () =>
      import(
        /* webpackChunkName: "user-messages" */ "../views/UserMessages.vue"
      ),
  },
  {
    path: "/user/subscriptions",
    name: "UserSubscriptions",
    component: () =>
      import(
        /* webpackChunkName: "user-subscriptions" */ "../views/UserSubscriptions.vue"
      ),
  },
  //#endregion
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
