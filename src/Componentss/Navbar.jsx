import React from 'react';
import { AppBar,  Toolbar, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#a8327b' }}>
      
      <Toolbar>
        <ContactsIcon sx={{ m:2,fontSize:60 }}  />

        <Typography variant="h6" className='text-black font-extrabold  '>
    CONTACT MANAGEMENT SYSTEM
        </Typography>
       
      </Toolbar>
    </AppBar>
   
  );
}

export default Navbar;