import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import indexRoutes from "./routes/IndexRoutes";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />  //home
        },
        ...indexRoutes
      ],
      errorElement: <NotFound />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;