import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawer";
import { grey } from "@mui/material/colors";

function Root() {
  const drawerWidth = 240;
  const Ltheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";
  const [mode, setmoode] = useState(Ltheme);
  const [drawerView, setdrawerView] = useState("none");
  const [perm_temp, setperm_temp] = useState("permanent")
  const showDrawer = () => {
    if (drawerView === "none") {
      setdrawerView("block");
    } else {
      setdrawerView("none");
    }
  };

  const 

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            ali: {
              main: "#64748B",
            },
            favColor: {
              main: grey[300],
            },
          }
        : {
            // palette values for dark mode

            favColor: {
              main: grey[800],
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} drawerView = {drawerView} />
        <Drawerr
          drawerWidth={drawerWidth}
          setmoode={setmoode}
          drawerView={drawerView}
        />
        <Box
          component="main"
          className="border"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
            display: "flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Root;
