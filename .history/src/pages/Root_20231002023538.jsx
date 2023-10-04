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
import acpcImage from '../../src/assets/images/acpc.jpg';


function Root() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link
              sx={{ flexGrow: 1, textDecoration: "none" ,"&:hover":{fontSize:"16.5px"} }}
              href="/"
              color="inherit"
            
            >
              My Expenses
            </Link>
            <Avatar alt="" src />
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </div>
  );
}

export default Root;
