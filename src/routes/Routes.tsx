import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";

import { adminPaths } from "./admin.routes";
import Register from "../pages/Register";
import { facultyPaths } from "./faculty.routes";
import { routesGenerators } from "../utils/routesGenerators";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerators(adminPaths),
  },

  {
    path: "/faculty",
    element: <App />,
    children: facultyPaths,
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerators(adminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
