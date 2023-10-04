import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar } from '@mui/material';
import React from 'react';

const Drawerr = ({drawerWidth}) => {
  return (
    <Drawer
    sx={{
      width: `${drawerWidth}px`,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: `${drawerWidth}px`,
        boxSizing: "border-box",
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
    <Divider />
  </Drawer>
  );
}

export default Drawerr;
