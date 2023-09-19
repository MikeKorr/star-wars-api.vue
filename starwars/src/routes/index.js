import { createRouter, createWebHistory } from "vue-router";
// import People from "../components/People.vue";
// import MainPage from "../components/MainPage.vue";
// import Planets from "../components/Planets.vue";
// import Ships from "../components/Ships.vue";

import People from "../components/People.vue";
const MainPage = () => import("../components/MainPage.vue");
const Planets = () => import("../components/Planets.vue");
const Ships = () => import("../components/Ships.vue");
import InfoPage from "../pages/InfoPage.vue";
import NoInfoPage from "../pages/NoInfoPage.vue";
import MoreInfo from "../pages/MoreInfo.vue";
import Pagination from "../components/Pagination.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    {
      name: "People",
      path: "/people",
      component: People,
    },

    {
      name: "MoreInfo",
      path: "/moreinfo/:id",
      component: MoreInfo,
    },

    {
      name: "MainPage",
      path: "/",
      component: MainPage,
    },
    {
      name: "Planets",
      path: "/planets",
      component: Planets,
    },
    {
      name: "Ships",
      path: "/starships",
      component: Ships,
    },
    {
      path: "/:patchMatch(.*)*",
      component: ErrorPage,
    },
  ],
});

export { router };
