import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Account from './components/account/Account.jsx'
import Cart from "./components/cart/Cart.jsx";
import Orders from "./components/orders/Orders.jsx";
import Product from "./components/product/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/account",
    element: <Account/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/orders",
    element: <Orders/>
  },
  {
    path: "/product/:product_id",
    element: <Product/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
