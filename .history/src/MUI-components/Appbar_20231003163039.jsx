import { AppBar, Avatar,Toolbar, Typography, Link } from "@mui/material";
import React from "react";
import acpcImage from "../../src/assets/images/acpc.jpg";

const Appbar = () => {
  const drawerWidth = 240;

  return (
      <AppBar
        position="static"
        sx={{ ml: {xs:0, sm:`${drawerWidth}px`}, width: {xs:"100%",sm:`calc(100% - ${drawerWidth}px)`} }}
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

  );
};

export default Appbar;