import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Account from './components/account/Account.jsx'
import Cart from "./components/cart/Cart.jsx";
import Orders from "./components/orders/Orders.jsx";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
