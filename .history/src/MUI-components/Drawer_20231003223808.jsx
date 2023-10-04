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
      path: "profile",
    },
    {
      text: "Setting",
      icon: <Settings />,
      path: "setting",
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
      
  
      </List>

      <Divider />

      {myList.map((item)=>(
                  <ListItem disablePadding
                  key={item.text}
                  sx={{
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.favColor.main
                        : null,
                  }}
                  >
                  <ListItemButton>
                    <ListItemIcon>
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
        ))}
    </Drawer>
  );
};

export default Drawerr;
