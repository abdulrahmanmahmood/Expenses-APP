import { AppBar, Avatar, Box, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
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
            <Typography color="inherit" variant="body1" sx={{ mr: "20px" }}>
              AbdulRahman
            </Typography>
            <Avatar alt="" src={acpcImage} sx={{ width: 56, height: 56 }} />
          </Toolbar>
        </AppBar>
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      </Box>

      <Outlet />
    </div>
  );
}

export default Root;
