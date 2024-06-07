import { createRouter, createWebHistory } from "vue-router";

import AppHome from "../views/AppHome.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AppHome,
  },
  {
    path: "/by-ingredient/:ingredient?",
    name: "byIngredient",
    component: MealsByIngredient,
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: MealsByLetter,
  },
  {
    path: "/by-name/:name?",
    name: "byName",
    component: MealsByName,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
