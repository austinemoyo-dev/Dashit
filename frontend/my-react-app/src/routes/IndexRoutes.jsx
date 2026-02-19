import { Home, Login, Registration } from "../pages";
import PublicRoute from "../components/PublicRoute";

const indexRoutes = [
  {
    path: "home",
    element: <Home />, // No protection - accessible to everyone
  },
  {
    path: "login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "register",
    element: (
      <PublicRoute>
        <Registration />
      </PublicRoute>
    ),
  },
];

export default indexRoutes;