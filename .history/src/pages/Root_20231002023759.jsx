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
import acpcImage from "../../src/assets/images/acpc.jpg";

function Root() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
            <Typography variant="body1" color="initial">AbdulRahman</Typography>
            <Avatar alt="" src={acpcImage} sx={{ width: 56, height: 56 }} />
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </div>
  );
}

export default Root;
