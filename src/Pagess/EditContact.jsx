import React from 'react'

import {
  Box,
  Typography,
  Paper,
  TextField,
  Button
} from '@mui/material'

function EditContact() {
  return (
 <Box className="p-4  min-h-screen" sx={{bgcolor:"#f3e8ff"}} >

    <Typography
           variant="h4"
           fontWeight="bold"
           mb={1}
           className="text-purple-950"
         >
           Edit New Contact
         </Typography>

<Typography color="text.secondary" mb={4}>
  Update contact information
</Typography>

<Paper
  elevation={4}
  className="max-w-lg mx-auto p-6"
  sx={{
    borderRadius: 4,
    border: "1px solid #e9d5ff",
    backgroundColor: "#ffffff",
  }}
>

  <Typography
    variant="h6"
    fontWeight="bold"
    mb={3}
    sx={{ color: "#6b21a8" }}
  >
    Contact Details
  </Typography>

  <Box className="flex flex-col gap-4">

    <TextField
      label="Enter your name"
      variant="outlined"
      fullWidth
     
    />

    <TextField
      label="Enter your phone"
      variant="outlined"
      fullWidth
      sx={{
      
          borderRadius: 2,
     
      }}
    />

    <TextField
      label="Enter your email address"
      variant="outlined"
      fullWidth
      sx={{
    
          borderRadius: 2,
     
      }}
    />

    <TextField
      label="Enter your address"
      variant="outlined"
      fullWidth
      multiline
      rows={3}
      sx={{
      
          borderRadius: 2,
     
      }}
    />

    <Box className="flex justify-end gap-3 mt-3">

      <Button
        variant="contained"
      
        sx={{
          backgroundColor: "#4c1d95",
          borderRadius: 2,
          px: 3,
          textTransform: "none",
          fontWeight: "bold",
        
        }}
      >
        Cancel
      </Button>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#4c1d95",
          borderRadius: 2,
          px: 3,
          textTransform: "none",
          fontWeight: "bold",
        
        }}
      >
        Update Contact
      </Button>

    </Box>

  </Box>

</Paper>
    </Box>
  )
}

export default EditContact