import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "@/components/AboutUs";
import Frameworks from "@/components/Frameworks";
import Applications from "@/components/Applications";
import ContactUs from "@/components/ContactUs";
import Main from "@/components/Main";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUs,
  },
  {
    path: "/frameworks",
    name: "frameworks",
    component: Frameworks,
  },
  {
    path: "/applications",
    name: "applications",
    component: Applications,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
