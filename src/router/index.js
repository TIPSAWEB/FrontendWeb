import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import AboutUs from "../views/AboutUs.vue"; // Importar la nueva vista

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingView,
  },
  {
    path: "/nosotros",
    name: "AboutUs",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0 };
  }
});

export default router;
