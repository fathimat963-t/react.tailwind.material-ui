import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

import { PersonAdd, Save } from "@mui/icons-material";

function AddContact() {
  return (
    <Box className="p-6 min-h-screen" sx={{ bgcolor: "#f3e8ff" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={1}
        className="text-purple-950"
      >
        Add New Contact
      </Typography>

      <Typography color="text.secondary" >
        Create a new contact in your contact list
      </Typography>

      <Paper
        elevation={5}
        className="max-w-2xl mx-auto p-8 rounded-2xl border border-purple-100"
        sx={{ borderRadius: 4 }}
      >
        <Box className="flex items-center gap-3 mb-6 border-b border-purple-100 pb-4">
          <Box className="bg-purple-100 p-3 rounded-xl">
            <PersonAdd color="primary" fontSize="large" />
          </Box>

          <Typography
            variant="h5"
            fontWeight="bold"
            className="text-purple-900"
          >
            Contact Information
          </Typography>
        </Box>

        <Box className="flex flex-col gap-5">
          <TextField
            label="Full Name"
            placeholder="Enter your name"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Phone Number"
            placeholder="Enter your phone number"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Email Address"
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Address"
            placeholder="Enter your address"
            multiline
            rows={3}
            variant="outlined"
            fullWidth
          />
          <Box className="flex justify-end gap-4 mt-4">
            <Button
              sx={{ bgcolor: "#4c1d95", borderRadius: 2, px: 4, py: 1 }}
              variant="contained"
            >
              Cancel
            </Button>

            <Button
              sx={{ bgcolor: "#4c1d95",borderRadius: 2, px: 4, py: 1 }}
              variant="contained"
            >
         <Save/>
         save
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default AddContact;
