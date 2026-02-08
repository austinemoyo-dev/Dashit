import {
    Home,
    Login,
    Register,
} from "../pages";

const indexRoutes = [
    {
        path: "home",
        element: <Home />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    }
];

export default indexRoutes;