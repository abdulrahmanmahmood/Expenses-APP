import { Box, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawer";

function Root() {
  const drawerWidth = 240;

  return (
    <div>
    <Appbar drawerWidth={drawerWidth}/>
    <Drawerr drawerWidth={drawerWidth}/>
    <Box className="border" sx={{width:`calc(100%-${drawerWidth})px`, mr:drawerWidth }}>
      <Outlet/>
    </Box>
    </div>
  );
}

export default Root;
