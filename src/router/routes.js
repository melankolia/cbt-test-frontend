const Container = () => import("../container");
const Home = () => import("../views/Home");
const About = () => import("../views/About");
const LandingPage = () => import("../views/LandingPage");

import { HOME, ABOUT, LANDING_PAGE } from "./name.types";

export const configRoutes = [
  {
    path: "/",
    name: LANDING_PAGE,
    component: LandingPage,
  },
  {
    path: "/dashboard",
    component: Container,
    children: [
      {
        path: "",
        name: HOME,
        component: Home,
      },
      {
        path: "/about",
        name: ABOUT,
        component: About,
      },
    ],
  },
  {
    path: "/abouts",
    name: ABOUT,
    component: About,
  },
];
