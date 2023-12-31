import { Divider, Toolbar } from '@mui/material';
import React from 'react';

const Drawerf = ({drawerWidth}) => {
  return (
    <Drawer
    sx={{
      width: `${drawerWidth}px`,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: `${drawerWidth}px`,
        boxSizing: "border-box",
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <Divider />
  </Drawer>
  );
}

export default Drawer;
