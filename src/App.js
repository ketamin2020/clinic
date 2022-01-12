import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Context } from "./context/Context";
import routes from "./router/routes";
import CallDoctorModal from "./modal/ModalComponents/callDoctors/CallDoctors";
import MakeAppointment from "./modal/ModalComponents/makeAppointment/MakeAppointment";
import CallBack from "./modal/ModalComponents/callBack/CallBack";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            {routes.map(({ path, element: Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
      <CallDoctorModal />
      <MakeAppointment />
      <CallBack />
    </Context>
  );
};

export default App;
