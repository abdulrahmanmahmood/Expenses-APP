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
import acpcImage from "../../src/assets/images/acpc.jpg";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function Root() {
  const drawerWidth = 240;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Link
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                "&:hover": { fontSize: "16.5px" },
              }}
              href="/"
              color="inherit"
            >
              My Expenses
            </Link>
            <Typography color="inherit" variant="body1" sx={{ mr: "20px" }}>
              AbdulRahman
            </Typography>
            <Avatar alt="" src={acpcImage} sx={{ width: 56, height: 56 }} />
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: `${drawerWidth}px`,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
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
