import React, {Suspense, lazy } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Spinner } from 'react-bootstrap';
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import Home from './Home'
import About from './About'
import App from './App'
import FormContato from './FormZap'
const MyLazy = lazy(() => import('./routes/root'));
const router = createHashRouter([
  {
    path: "/",
    element: <MyLazy />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contato",
        element: <FormContato />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner animation="grow" role="status" />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
