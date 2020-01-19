import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/writings",
    name: "writings",
    component: () =>
      import("../views/Writings.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import("../views/Projects.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
