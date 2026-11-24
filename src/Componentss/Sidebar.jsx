import React from 'react'
import { Link } from 'react-router-dom'

import {
  Box,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material'

import {
  Home,
  PersonAdd,
  Contacts,
  Edit,
  Visibility
} from '@mui/icons-material'

function Sidebar() {
  return (

    <Box sx={{bgcolor:"#a8327b"}} className="w-64 min-h-screen p-3 shadow-2xl">

      <div className="mb-10 px-2">
        <h2 className="text-2xl font-extrabold text-black ">
          Contact Manager
        </h2>

        <p className="text-black-300 text-sm mt-2">
          Manage your contacts easily
        </p>
      </div>

      <List >

        <ListItemButton component={Link} to="/"
          sx={{ borderRadius: '12px', mb: 1 }}
          className="text-white hover:bg-purple-600 transition-all duration-300 hover:translate-x-1">
          <Home className="mr-4 text-black-900" />
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} to="/add-contact"
          sx={{ borderRadius: '12px', mb: 1 }}
          className="text-white hover:bg-purple-600 transition-all duration-300 hover:translate-x-1">
          <PersonAdd className="mr-4 text-black-900" />
          <ListItemText primary="Add Contact" />
        </ListItemButton>

        <ListItemButton component={Link} to="/contact-list"
          sx={{ borderRadius: '12px', mb: 1 }}
          className="text-white hover:bg-purple-600 transition-all duration-300 hover:translate-x-1">
          <Contacts className="mr-4 text-black-900" />
          <ListItemText primary="Contact List" />
        </ListItemButton>

        <ListItemButton component={Link} to="/edit-contact/:id"
          sx={{ borderRadius: '12px', mb: 1 }}
          className="text-white hover:bg-purple-600 transition-all duration-300 hover:translate-x-1">
          <Edit className="mr-4 text-black-900" />
          <ListItemText primary="Edit Contact List" />
        </ListItemButton>

        <ListItemButton component={Link} to="/view-contact/:id"
          sx={{ borderRadius: '12px', mb: 1 }}
          className="text-white hover:bg-purple-600 transition-all duration-300 hover:translate-x-1">
          <Visibility className="mr-4 text-black-900" />
          <ListItemText primary="View Contact List" />
        </ListItemButton>

      </List>

  

    </Box>

  )
}

export default Sidebar