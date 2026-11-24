import React from "react";
import { Box, Paper, Typography, Divider, Button } from "@mui/material";

function ViewContact() {
  return (
   <Box className="p-4  min-h-screen bg-purple-100" >
     <Typography
            variant="h4"
            fontWeight="bold"
            mb={1}
            className="text-purple-950"
          >
          View Contact
          </Typography>

   <Paper
  elevation={3}
  className="p-6 max-w-xl mx-auto rounded-xl"
>
        <Typography variant="h6" fontWeight="bold" mt={4}>
          Contact Details
        </Typography>

        <Divider  />

        <Box className="flex flex-col gap-5">
          <Box>
            <Typography color="text.secondary">Full Name</Typography>
            <Typography fontWeight="bold">Fathima</Typography>
          </Box>

          <Box>
            <Typography color="text.secondary">Phone Number</Typography>
            <Typography fontWeight="bold">9876543210</Typography>
          </Box>

          <Box>
            <Typography color="text.secondary">Email Address</Typography>
            <Typography fontWeight="bold">fathima@gmail.com</Typography>
          </Box>

          <Box>
            <Typography color="text.secondary">Location</Typography>
            <Typography fontWeight="bold">Kollam</Typography>
          </Box>

          <Box>
            <Typography color="text.secondary">Category</Typography>
            <Typography fontWeight="bold">Friends</Typography>
          </Box>
        </Box>

        <Divider className="my-5" />

        <Box className="flex justify-end gap-3 mt-5">
                      <Button sx={{bgcolor:"#4c1d95"}} variant="contained">Back</Button>
          
          <Button sx={{bgcolor:"#4c1d95"}} variant="contained">Edit</Button>
    
        </Box>
      </Paper>
    </Box>
  );
}

export default ViewContact;