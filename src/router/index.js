import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../views/JobsView.vue"),
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: () => import("../views/AddJobView.vue"),
    },
    {
      path: "/job/edit/:id",
      name: "edit-job",
      component: () => import("../views/EditJobView.vue"),
    },
    {
      path: "/job/:id",
      name: "job",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/JobView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "not_found",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
