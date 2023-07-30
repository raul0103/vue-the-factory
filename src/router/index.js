import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
      meta: {
        layout: MainLayout,
      },
    },
  ],
});

export default router;
