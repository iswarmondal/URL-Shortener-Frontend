import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuItem } from '@mui/material';

function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              URL Shortener
            </Typography>
            <NavLink to="/">
              <MenuItem color="inherit" >
                Home
              </MenuItem>
            </NavLink>
            <NavLink to="/user/register">
              <MenuItem color="inherit" >
                Register
              </MenuItem>
            </NavLink>
            <NavLink to="/dashboard">
              <MenuItem color="inherit" >
                Dashboard
              </MenuItem>
            </NavLink>
            <NavLink to="/login">
              <MenuItem color="inherit" >
                Login
              </MenuItem>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default NavBar