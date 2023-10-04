import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import NotFound from "./pages/NotFound";
import React from "react";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

      <Route index="/" element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound />} />



      {/* ... etc. */}

    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>


    <RouterProvider router={router} />

  </React.StrictMode>
);
