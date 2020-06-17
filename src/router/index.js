import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/client",
    name: "Client",
    component: () =>
      import(/* webpackChunkName: "client" */ "../views/Client.vue"),
  },
  {
    path: "/register-client",
    name: "registerClient",
    component: () =>
      import(
        /* webpackChunkName: "register-client" */ "../views/RegisterClient.vue"
      ),
  },
];

const router = new Router({
  routes,
});

export default router;
