import { Box, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawer";

function Root() {
  const drawerWidth = 240;
  const [moode, setmoode] = useState("dark");


const darkTheme = createTheme({
  palette: {
    mode: moode,
    primary:{
      main:teal[500]

    }
  },
});

  return (

    <div>
      <Appbar drawerWidth={drawerWidth} />
      <Drawerr drawerWidth={drawerWidth} />
      <Box component="main"
        sx={{
          ml: `${drawerWidth}px`,
          width: `calc(100%-${drawerWidth})px`,
          display: "flex",
          justifyContent:"center",
          mt:"66px"
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}

export default Root;
