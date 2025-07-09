import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import AboutUs from "../views/AboutUs.vue";
import Solutions from "../views/Solutions.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import AdminView from "../views/AdminView.vue";
import EmployeeDashboard from "../components/backoffice/EmployeeDashboard.vue";

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
  {
    path: "/soluciones",
    name: "Solutions",
    component: Solutions,
  },
  {
    path: "/proyectos",
    name: "projects",
    component: Projects,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: Contact,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
  path: "/admin",
  component: AdminView,
  children: [
      {
        path: "",
        name: "admin-dashboard",
        component: EmployeeDashboard
      }
            ]
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
