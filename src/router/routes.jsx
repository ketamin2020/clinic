import { lazy } from "react";
import {
  mainPage,
  directionPage,
  doctorsPage,
  vaccinesPage,
  pricePage,
  contactsPage,
  doctorPage,
} from "./LinksPath";

const doctorsList = {
  pravnik: "Правник Михайло Васильович",
  koshman: "Кошман Сергій Миколайович",
};

const routes = [
  {
    path: mainPage,
    name: "home",
    breadcrumb: "Головна",
    element: lazy(() => import("../pages/mainPage/MainPage")),
  },
  {
    path: doctorsPage,
    name: "doctors",
    breadcrumb: "Лікарі",
    element: lazy(() => import("../pages/ourDoctorsPage/OurDoctorsPage")),
  },
  {
    path: contactsPage,
    name: "contacts",
    breadcrumb: "Контакти",
    element: lazy(() => import("../pages/contactsPage/ContactsPage")),
  },
  {
    path: pricePage,
    name: "price",
    breadcrumb: "Вартість",
    element: lazy(() => import("../pages/costPage/CostPage")),
  },
  {
    path: vaccinesPage,
    name: "vaccines",
    breadcrumb: "Вакцинація",
    element: lazy(() => import("../pages/vaccinesPage/VaccinesPage")),
  },
  {
    path: directionPage,
    name: "directions",
    breadcrumb: "Напрями",
    element: lazy(() => import("../pages/directlyPage/DirectlyPage")),
  },
  {
    path: doctorPage,
    name: "doctor",
    breadcrumb: ({ match }) => <span>{doctorsList[match.params.name]}</span>,
    element: lazy(() => import("../pages/doctorPage/DoctorPage")),
  },
];

export default routes;
