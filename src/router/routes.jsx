import { lazy } from "react";

const routes = [
  {
    path: "/",
    name: "home",
    breadcrumb: "Головна",
    element: lazy(() => import("../pages/mainPage/MainPage")),
  },
  {
    path: "/qwerty",
    name: "home",
    breadcrumb: " / ціни",
    element: lazy(() => import("../pages/mainPage/MainPage")),
  },
];

export default routes;
