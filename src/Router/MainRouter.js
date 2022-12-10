import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "../Components/ComingSoon/ComingSoon";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>Error Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <ComingSoon />,
      },
    ],
  },
]);

export default mainRouter;
