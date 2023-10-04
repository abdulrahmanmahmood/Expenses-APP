import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import { Create, Home, Logout, Person, Settings } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const Drawerr = ({
  drawerWidth,
  setmoode,
  drawerView,
  DrawerType,
  hideDrawer,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const myList = [
    {
      text: "Home",
      icon: <Home />,
      path: "/",
    },
    {
      text: "Create",
      icon: <Create />,
      path: "/create",
    },
    {
      text: "Profile",
      icon: <Person />,
      path: "",
    },
    {
      text: "Setting",
      icon: <Settings />,
      path: "",
    },
    {
      text: "Logout",
      icon: <Logout />,
      path: "",
    },
  ];
  return (
    <Drawer
      sx={{
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
          display: { xs: drawerView, sm: "block" },
        },
      }}
      open={true}
      variant={DrawerType}
      anchor="left"
      onClose={() => {
        hideDrawer();
      }}
    >
      <List>
        {myList.map(()=>{})}
        <ListItem disablePadding sx={{ mr: "auto", ml: "auto", mb: "16px" }}>
          <IconButton
            sx={{ mr: "auto", ml: "auto" }}
            onClick={() => {
              if (theme.palette.mode === "dark") {
                setmoode("light");
                localStorage.setItem("theme", "light");
              } else {
                setmoode("dark");
                localStorage.setItem("theme", "dark");
              }
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </ListItem>
        <Divider />

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem
            disablePadding
            sx={{
              bgcolor:
                location.pathname === "/" ? theme.palette.favColor.main : null,
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem
          disablePadding
          sx={{
            bgcolor:
              location.pathname === "/create"
                ? theme.palette.favColor.main
                : null,
          }}
        >
          <ListItemButton onClick={() => navigate("/create")}>
            <ListItemIcon>
              <Create />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
    </Drawer>
  );
};

export default Drawerr;
