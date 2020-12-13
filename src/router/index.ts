import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pages",
    name: "Pages",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/Pages.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue"),
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
    path: "/companies",
    name: "Companies",
    component: () =>
      import(/* webpackChunkName: "companies" */ "../views/Companies.vue"),
  },
  {
    path: "/add",
    name: "Add",
    component: () => import(/* webpackChunkName: "add" */ "../views/Add.vue"),
  },
  {
    path: "/companies/:id",
    name: "Company",
    component: () =>
      import(/* webpackChunkName: "company" */ "../views/Company.vue"),
  },
  //#region Auth
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () =>
      import(
        /* webpackChunkName: "registration" */ "../views/Registration.vue"
      ),
  },
  {
    path: "/restore-password",
    name: "RestorePassword",
    component: () =>
      import(
        /* webpackChunkName: "restore-password" */ "../views/RestorePassword.vue"
      ),
  },
  //#endregion
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
    path: "/user/personal-details",
    name: "UserPersonalDetails",
    component: () =>
      import(
        /* webpackChunkName: "user-personal-details" */ "../views/UserPersonalDetails.vue"
      ),
  },
  {
    path: "/user/payment-history",
    name: "UserPaymentHistory",
    component: () =>
      import(
        /* webpackChunkName: "user-payment-history" */ "../views/UserPaymentHistory.vue"
      ),
  },
  //#endregion
  {
    path: "/seed",
    name: "Seed",
    component: () => import(/* webpackChunkName: "seed" */ "../views/Seed.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () =>
      import(/* webpackChunkName: "pricing" */ "../views/Pricing.vue"),
  },
  {
    path: "/payments/failure",
    name: "PaymentFailure",
    component: () =>
      import(
        /* webpackChunkName: "payments-failure" */ "../views/Payments/Failure.vue"
      ),
  },
  {
    path: "/payments/success",
    name: "PaymentSuccess",
    component: () =>
      import(
        /* webpackChunkName: "payments-success" */ "../views/Payments/Success.vue"
      ),
  },
  {
    path: "/payments/new",
    name: "PaymentNew",
    component: () =>
      import(
        /* webpackChunkName: "payments-new" */ "../views/Payments/New.vue"
      ),
  },
  {
    path: "/prisma",
    name: "Prisma",
    component: () =>
      import(/* webpackChunkName: "payments-new" */ "../views/Prisma.vue"),
  },
  {
    path: "/users",
    name: "Lambda users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/Users.vue"),
  },
  {
    path: "/fonts",
    name: "Fonts",
    component: () =>
      import(/* webpackChunkName: "fonts" */ "../views/Fonts.vue"),
  },
  {
    path: "/file-list",
    name: "FileList",
    component: () =>
      import(/* webpackChunkName: "file-list" */ "../views/FileList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
