import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


function Root() {
  return (
    <div>

      My Header
      <Typography variant="body1" color="initial"></Typography>


      <Outlet/>
  
    </div>
  )
}

export default Root