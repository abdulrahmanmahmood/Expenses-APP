import { Box, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawer";

function Root() {
  const drawerWidth = 240;

  return (
    <div>
    <Appbar/>
    <Drawerr drawerWidth={}/>
    <Outlet/>
    </div>
  );
}

export default Root;
