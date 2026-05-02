import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboard-layout";
import Home from "../pages/Home";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;