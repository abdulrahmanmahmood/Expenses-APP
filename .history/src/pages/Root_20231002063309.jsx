import { Box, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawer";

function Root() {
  const drawerWidth = 240;

  return (
    <div>
      <Box >
        <Typography variant="h5" color="initial">abdulrahman</Typography>
        <Typography variant="h5" color="initial">abdulrahman</Typography>
        <Typography variant="h5" color="initial">abdulrahman</Typography>
      </Box>
    </div>
  );
}

export default Root;
