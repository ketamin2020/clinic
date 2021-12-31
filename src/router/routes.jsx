import { lazy } from "react";

const routes = [
  {
    path: "/",
    name: "home",
    breadcrumb: "Головна",
    element: lazy(() => import("../pages/mainPage/MainPage")),
  },
  {
    path: "/contacts",
    name: "contacts",
    breadcrumb: "контакти",
    element: lazy(() => import("../pages/contactsPage/ContactsPage")),
  },
  {
    path: "/price",
    name: "price",
    breadcrumb: "вартість",
    element: lazy(() => import("../pages/costPage/CostPage")),
  },
  {
    path: "/vaccines",
    name: "vaccines",
    breadcrumb: "вакцинація",
    element: lazy(() => import("../pages/vaccinesPage/VaccinesPage")),
  },
  {
    path: "/directions",
    name: "directions",
    breadcrumb: "напрями",
    element: lazy(() => import("../pages/directlyPage/DirectlyPage")),
  },
];

export default routes;
