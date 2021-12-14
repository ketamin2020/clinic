import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Context } from "./context/Context";
// import routes from "./router/routes";
import HeaderPage from "./pages/HeaderPage";
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Context>
          <Routes>
            <Route path="/" element={<HeaderPage />} />
          </Routes>
        </Context>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
