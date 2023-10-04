import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

      <Route index="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="create" element={<Create />} />



      {/* ... etc. */}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
