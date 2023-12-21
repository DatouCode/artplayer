import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/bilibili/:bv",
      name: "bilibili",
      component: () => import("../views/Bilibili.vue"),
    },
  ],
});

export default router;
