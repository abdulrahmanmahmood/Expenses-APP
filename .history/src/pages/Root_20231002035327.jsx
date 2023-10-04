import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function Root() {
  const drawerWidth = 240;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
<

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
      </Box>

      <Outlet />
    </div>
  );
}

export default Root;
