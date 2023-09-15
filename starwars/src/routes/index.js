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

import ErrorPage from "../pages/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: [
    {
      name: "People",
      path: "/people",
      component: People,
      children: [
        {
          name: "NoInfoPage",
          path: "",
          component: NoInfoPage,
        },
        {
          name: "InfoPage",
          path: ":id",
          component: InfoPage,
        },
      ],
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
      children: [
        {
          name: "PlanetsInfoPage",
          path: ":id",
          component: InfoPage,
        },
        {
          name: "PlanetsNoInfoPage",
          path: "",
          component: NoInfoPage,
        },
      ],
    },
    {
      name: "Ships",
      path: "/starships",
      component: Ships,
      children: [
        {
          name: "ShipsInfoPage",
          path: ":id",
          component: InfoPage,
        },
        {
          name: "ShipsNoInfoPage",
          path: "",
          component: NoInfoPage,
        },
      ],
    },
    {
      path: "/:patchMatch(.*)*",
      component: ErrorPage,
    },
  ],
});

export { router };
