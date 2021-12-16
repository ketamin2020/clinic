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
            {routes.map(({ path, element: Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
          </Routes>
        </Context>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
