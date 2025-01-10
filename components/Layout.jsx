'use client'
import React, { useState } from 'react';
import NavAdmin from './NavAdmin';
import Sidebar from './SideBar';
import { Box, Container } from '@mui/material';

const Layout = ({ children }) => {
  const [activeItem, setActiveItem] = useState('view');
  
  const handleSelectItem = (item) => {
    setActiveItem(item);
  };

  const handleLogout = () => {
    alert('Logged out');
    // Implement actual logout logic here
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar activeItem={activeItem} onSelectItem={handleSelectItem} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          padding: 3,
        }}
      >
        <NavAdmin onLogout={handleLogout} />
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
