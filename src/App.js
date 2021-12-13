import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Context } from "./context/Context";
import routes from "./router/routes";
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Context>
          <Routes>
            {routes.map((route, ind) => (
              <Route key={ind} {...route} />
            ))}
          </Routes>
        </Context>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
