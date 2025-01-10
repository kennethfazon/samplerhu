'use client'
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse, Divider, ListItemIcon, Box, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, Article, AddCircle, Settings, Category, Home } from '@mui/icons-material';

const Sidebar = ({ activeItem, onSelectItem }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          background: 'linear-gradient(180deg, #2C3E50, #34495E)',
          color: 'white',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        {/* Optional logo or title at the top */}
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Blog Admin</Typography>
      </Box>
      
      <List>
        {/* Home - add an icon for home */}
        <ListItem 
          button 
          selected={activeItem === 'home'} 
          onClick={() => onSelectItem('home')} 
          sx={{
            "&:hover": { backgroundColor: '#00796b' }, 
            paddingLeft: 3,
            borderRadius: 1,
            marginBottom: 1,
          }}
        >
          <ListItemIcon><Home sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Home" sx={{ color: 'white' }} />
        </ListItem>
        
        {/* View Blogs */}
        <ListItem 
          button 
          selected={activeItem === 'view'} 
          onClick={() => onSelectItem('view')} 
          sx={{
            "&:hover": { backgroundColor: '#00796b' },
            paddingLeft: 3,
            borderRadius: 1,
            marginBottom: 1,
          }}
        >
          <ListItemIcon><Article sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="View Blogs" sx={{ color: 'white' }} />
        </ListItem>
        
        {/* Add Blogs */}
        <ListItem 
          button 
          selected={activeItem === 'add'} 
          onClick={() => onSelectItem('add')} 
          sx={{
            "&:hover": { backgroundColor: '#00796b' },
            paddingLeft: 3,
            borderRadius: 1,
            marginBottom: 1,
          }}
        >
          <ListItemIcon><AddCircle sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Add Blogs" sx={{ color: 'white' }} />
        </ListItem>
        
        {/* Collapsible Section for Settings */}
        <ListItem 
          button 
          onClick={handleClick} 
          sx={{
            "&:hover": { backgroundColor: '#00796b' },
            paddingLeft: 3,
            borderRadius: 1,
            marginBottom: 1,
          }}
        >
          <ListItemIcon><Settings sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Settings" sx={{ color: 'white' }} />
          {open ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem 
              button 
              sx={{ pl: 4 }} 
              onClick={() => onSelectItem('category')}
            >
              <ListItemIcon><Category sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Categories" sx={{ color: 'white' }} />
            </ListItem>
          </List>
        </Collapse>
        
        <Divider sx={{ backgroundColor: '#00796b', marginY: 1 }} />
      </List>
    </Drawer>
  );
};

export default Sidebar;
