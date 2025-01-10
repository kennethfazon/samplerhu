'use client'
import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Badge, Avatar } from '@mui/material';
import { AccountCircle, Notifications, ExitToApp } from '@mui/icons-material';
import { useState } from 'react';

const NavAdmin = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const open = Boolean(anchorEl);
  const notificationsOpen = Boolean(notificationAnchor);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenu = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNotificationAnchor(null);
  };

  const handleLogout = () => {
    onLogout();
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#00796b' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <IconButton color="inherit" onClick={handleNotificationMenu}>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={handleMenu}>
          <Avatar sx={{ width: 35, height: 35 }}>A</Avatar>
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleLogout}>
            <ExitToApp sx={{ mr: 2 }} /> Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavAdmin;
