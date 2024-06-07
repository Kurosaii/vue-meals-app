import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import MealListView from "../views/MealListView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealListView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
