import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import acpcImage from "../../src/assets/images/acpc.jpg";

const Appbar = () => {
  const drawerWidth = 240;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ ml: `${drawerWidth}px`, width: `calc(100% - ${drawerWidth}px)` }}
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
    </Box>
  );
};

export default Appbar;
