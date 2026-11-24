import React from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
 
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function ContactList() {
  return (
    <Box className="p-4 min-h-screen" sx={{bgcolor:"#f3e8ff"}}>

      <Box className="flex justify-between items-center mb-5 text-purple-600">
        <Typography
               variant="h4"
               fontWeight="bold"
               mb={1}
               className="text-purple-950"
             >
               Contact List
             </Typography>
             

    
      </Box>

    

      <Box className="flex gap-4 mb-5 flex-wrap">

        <TextField
          label="Search Contact"
          placeholder="Search by name or phone"
          size="small"
          sx={{ flex: 1, minWidth: 200 }}
        />

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel>Category</InputLabel>

          <Select label="Category" defaultValue="">
            <MenuItem value="All">All Categories</MenuItem>
            <MenuItem value="Family">Family</MenuItem>
            <MenuItem value="Friends">Friends</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
            
            
          </Select>
        </FormControl>

      </Box>

  
<TableContainer
  component={Paper}
  elevation={4}
  sx={{
    borderRadius: 3,
  
    mt: 3,
  }}
>
  <Table>

    <TableHead>
      <TableRow
        sx={{
          backgroundColor: '#a8327b',
          
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
            padding: "16px",
          
        }}
      >
        <TableCell>No</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Category</TableCell>
        <TableCell align="center">Remove</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>

      <TableRow
       
      >
        <TableCell>1</TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>Fathima</TableCell>
        <TableCell>9876543210</TableCell>
        <TableCell>fathima@gmail.com</TableCell>
        <TableCell>
          <Box
            sx={{
              backgroundColor: "#ede9fe",
              color: "#6b21a8",
              padding: "5px 12px",
              borderRadius: 5,
              display: "inline-block",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            Friends
          </Box>
        </TableCell>

        <TableCell align="center">
          <IconButton
         sx={{bgcolor:'#a83232'}}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow
        hover
        sx={{
        
            padding: "16px",
            fontSize: "14px",
        
         
        }}
      >
        <TableCell>2</TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>Riya</TableCell>
        <TableCell>9876543211</TableCell>
        <TableCell>riya@gmail.com</TableCell>
        <TableCell>
          <Box
             sx={{
              backgroundColor: "#ede9fe",
              color: "#6b21a8",
              padding: "5px 12px",
              borderRadius: 5,
              display: "inline-block",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          
           
          >
            Family
          </Box>
        </TableCell>

        <TableCell align="center">
          <IconButton
         sx={{bgcolor:'#a83232'}}
              
            
          >
            <DeleteIcon />
          </IconButton>
          
        </TableCell>
      </TableRow>

    </TableBody>
  </Table>
</TableContainer>

    </Box>
  );
}

export default ContactList;