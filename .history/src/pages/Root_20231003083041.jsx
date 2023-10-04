import { Box, CssBaseline, Divider, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawer";
import { amber, deepOrange, grey } from "@mui/material/colors";

function Root() {
  const drawerWidth = 240;
  const Ltheme = localStorage.getItem("theme") ? localStorage.getItem("theme"):"light"
  const [moode, setmoode] = useState(Ltheme);


const darkTheme = createTheme({
  palette: {
    moode,
    ...(moode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
      <Appbar drawerWidth={drawerWidth} />
      <Drawerr drawerWidth={drawerWidth} setmoode={setmoode}/>
      <Box component="main"
        sx={{
          ml: `${drawerWidth}px`,
          width: `calc(100%-${drawerWidth})px`,
          display: "flex",
          justifyContent:"center",
          mt:"66px"
        }}
      >
        <Outlet />
      </Box>
    </div>
    </ThemeProvider>

  );
}

export default Root;
