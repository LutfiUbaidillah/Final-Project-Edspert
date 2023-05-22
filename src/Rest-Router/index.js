import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/layout";
import Payment from "./page/payment";
import DetailPage from "./page/detail";
import ProductPage from "./page/product";
import Checkout from "./page/checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProductPage /> },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const MateriRestRouter = () => {
  return <RouterProvider router={router} />;
};

export default MateriRestRouter;
