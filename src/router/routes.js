const Container = () => import("../container");
// const Home = () => import("../views/Home");
const Dashboard = () => import("../views/Dashboard");
const Detail = () => import("../views/Dashboard/Detail");
// const About = () => import("../views/About");
const Screening = () => import("../views/Screening");
const LandingPage = () => import("../views/LandingPage");
const Login = () => import("../views/Login");
const Register = () => import("../views/Register");
const MainPage = () => import("../views/MainPage");
const Anxiety = () => import("../views/Quiz/Anxiety");
const Depression = () => import("../views/Quiz/Depression");
const FirstCBT = () => import("../views/Quiz/CBT/SectionFirst");
const MainCBT = () => import("../views/Quiz/CBT/SectionMain");
const PracticesCBT = () => import("../views/Quiz/CBT/SectionPractice");
const FinalScreen = () => import("../views/Final/index.vue");

import {
  // HOME,?
  DASHBOARD,
  DASHBOARD_DETAIL,
  // ABOUT,
  SCREENING,
  LANDING_PAGE,
  LOGIN,
  REGISTER,
  MAIN_PAGE,
  ANXIETY,
  DEPRESSION,
  FIRST_CBT,
  MAIN_CBT,
  PRACTICES_CBT,
  FINAL_SCREEN,
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
        name: DASHBOARD,
        component: Dashboard,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: ":secureId",
        name: DASHBOARD_DETAIL,
        component: Detail,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/home",
    name: MAIN_PAGE,
    component: MainPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/anxiety",
    name: ANXIETY,
    component: Anxiety,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/depression",
    name: DEPRESSION,
    component: Depression,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/screening",
    name: SCREENING,
    component: Screening,
    meta: {
      requiresAuth: true,
    },
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
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "main",
        name: MAIN_CBT,
        component: MainCBT,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "practices",
        name: PRACTICES_CBT,
        component: PracticesCBT,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/final",
    name: FINAL_SCREEN,
    component: FinalScreen,
    meta: {
      requiresAuth: true,
    },
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
