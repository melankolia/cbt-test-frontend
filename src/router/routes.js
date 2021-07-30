const Container = () => import("../container");
const Home = () => import("../views/Home");
const About = () => import("../views/About");
const LandingPage = () => import("../views/LandingPage");
const Login = () => import("../views/Login");
const Register = () => import("../views/Register");
const MainPage = () => import("../views/MainPage");
const Anxiety = () => import("../views/Quiz/Anxiety");
const Depression = () => import("../views/Quiz/Depression");
const FirstCBT = () => import("../views/Quiz/CBT/SectionFirst");

import {
  HOME,
  ABOUT,
  LANDING_PAGE,
  LOGIN,
  REGISTER,
  MAIN_PAGE,
  ANXIETY,
  DEPRESSION,
  FIRST_CBT,
} from "./name.types";

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
    path: "/home",
    name: MAIN_PAGE,
    component: MainPage,
  },
  {
    path: "/anxiety",
    name: ANXIETY,
    component: Anxiety,
  },
  {
    path: "/depression",
    name: DEPRESSION,
    component: Depression,
  },
  {
    path: "/cbt",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "",
        name: FIRST_CBT,
        component: FirstCBT,
      },
    ],
  },
  {
    path: "/login",
    name: LOGIN,
    component: Login,
  },
  {
    path: "/register",
    name: REGISTER,
    component: Register,
  },
];
