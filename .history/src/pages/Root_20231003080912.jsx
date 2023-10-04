import { Box, CssBaseline, Divider, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawer";

function Root() {
  const drawerWidth = 240;
  const Ltheme = 
  const [moode, setmoode] = useState("light");


const darkTheme = createTheme({
  palette: {
    mode: moode,
    // primary:{
    //   main:teal[500]

    // }
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
