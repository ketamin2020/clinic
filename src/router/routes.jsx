import { lazy } from "react";

const routes = [
  {
    path: "/",
    name: "home",
    element: lazy(() => import("../pages/mainPage/MainPage")),
  },
];

export default routes;
