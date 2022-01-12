const mainPage = "/";
const directionPage = "/directions";
const doctorsPage = "/doctors";
const vaccinesPage = "/vaccines";
const pricePage = "/price";
const contactsPage = "/contacts";
const doctorPage = "/doctors/:name";
const aboutPage = "/about";

const links = {
  navLinks: [
    { path: mainPage, text: "Головна" },
    { path: aboutPage, text: "Про нас" },
    { path: directionPage, text: "Напрями" },
    { path: doctorsPage, text: "Наші лікарі" },
    { path: vaccinesPage, text: "Вакцинація" },
    { path: pricePage, text: "Вартість" },
    { path: contactsPage, text: "Контакти" },
  ],
};

export {
  links,
  mainPage,
  directionPage,
  doctorsPage,
  vaccinesPage,
  pricePage,
  contactsPage,
  doctorPage,
  aboutPage,
};
