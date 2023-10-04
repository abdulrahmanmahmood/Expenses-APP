import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { hover } from "@testing-library/user-event/dist/hover";

function Root() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link
              sx={{ flexGrow: 1, textDecoration: "none" &hover }}
              href="/"
              color="inherit"
            
            >
              My Expenses
            </Link>
            <Avatar alt="" src="../../src/assets/images/acpc.jpg" />
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </div>
  );
}

export default Root;
