import React, { useState } from "react";
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
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

      <Route index="/" element={<Home />} />
      <Route path="create" element={<Create />} />



      {/* ... etc. */}

    </Route>
  )
);
const [moode, setmoode] = useState("dark");


const darkTheme = createTheme({
  palette: {
    mode: moode,
    primary:{
      main:teal[500]

    }
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />

    <RouterProvider router={router} />

    </ThemeProvider>
  </React.StrictMode>
);
