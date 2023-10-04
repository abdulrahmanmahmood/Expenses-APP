import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawer";
import { grey } from "@mui/material/colors";
import getDesignTokens from "../style/theme";

function Root() {
  const drawerWidth = 240;
  const Ltheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";
  const [mode, setmoode] = useState(Ltheme);
  const [drawerView, setdrawerView] = useState("none");
  const [DrawerType, setDrawerType] = useState("permanent");
  const showDrawer = () => {
    if (drawerView === "none") {
      setdrawerView("block");
      setDrawerType("temporary");
    }
  };
  const hideDrawer = () => {
    setdrawerView("none");
    setDrawerType("permanent");
  };
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar
          drawerWidth={drawerWidth}
          showDrawer={showDrawer}
          drawerView={drawerView}
          setDrawerType={setDrawerType}
        />
        <Drawerr
          drawerWidth={drawerWidth}
          setmoode={setmoode}
          drawerView={drawerView}
          DrawerType={DrawerType}
          hideDrawer={hideDrawer}
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
