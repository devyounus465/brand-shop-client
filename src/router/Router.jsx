import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRouter from "../privateRouter/PrivateRouter";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/category/:brandName",
        element: <CategoryDetails></CategoryDetails>,
        loader: () =>
          fetch(
            "https://brand-shop-server-d3hs6p0hk-younus-alis-projects.vercel.app/products"
          ),
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-d3hs6p0hk-younus-alis-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRouter>
            <ProductDetails></ProductDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-d3hs6p0hk-younus-alis-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRouter>
            <AddProduct></AddProduct>
          </PrivateRouter>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRouter>
            <MyCart></MyCart>
          </PrivateRouter>
        ),
        loader: () =>
          fetch(
            "https://brand-shop-server-d3hs6p0hk-younus-alis-projects.vercel.app/cart"
          ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Router;
