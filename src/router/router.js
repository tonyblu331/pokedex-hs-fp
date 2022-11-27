import { createRouter, createWebHashHistory } from "vue-router";
import PokedexView from "../views/PokedexView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "PokedexApp",
    component: PokedexView,
  },
  {
    path: "/AboutView",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
