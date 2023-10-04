import { Box, Divider, Drawer, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import Appbar from "../MUI-components/Appbar";

function Root() {
  const drawerWidth = 240;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Appbar />

  
      </Box>

      <Outlet />
    </div>
  );
}

export default Root;
