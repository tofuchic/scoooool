import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "router/pages/Home";

const RootRoutes = () => {
  return useRoutes([{ path: "/", element: <Home /> }]);
};

const App = () => {
  return (
    <BrowserRouter>
      <RootRoutes />
    </BrowserRouter>
  );
};

export default App;
