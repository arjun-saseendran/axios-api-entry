import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Account from "./components/account/Account.jsx";
import Cart from "./components/cart/Cart.jsx";
import Orders from "./components/orders/Orders.jsx";
import Product from "./components/product/Product.jsx";
import Root from "../src/routes/root.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/cart/",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/product/:product_id",
        element: <Product />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
