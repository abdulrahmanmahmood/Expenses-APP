import { Box, Divider, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawer from "../MUI-components/Drawer";

function Root() {
  const drawerWidth = 240;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Appbar />

        <Drawer drawerWidth={drawerWidth} />
      </Box>

      <Outlet />
    </div>
  );
}

export default Root;
