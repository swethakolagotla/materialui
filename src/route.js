import App from "./App";
import { Home } from "./pages/Home";
import {GoogleBooks} from "./pages/GoogleBooks";
import Products from "./pages/Products"
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "books",
        element: <GoogleBooks />,
      },
    ],
  },
];

export default routes;
