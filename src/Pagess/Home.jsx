import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import {
  People,
  PersonAdd,
  Contacts,
  Edit,
  Visibility,
} from "@mui/icons-material";

function Home() {
  return (
    <Box className="p-6 min-h-screen" sx={{ bgcolor: "#f3e8ff"}}>
      <div className="mb-8">
        <Typography variant="h4" fontWeight="bold" className="text-black">
          Dashboard
        </Typography>

        <Typography color="text.secondary" mt={1}>
          Welcome to Contact Management System
        </Typography>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-purple-600">
          <CardContent className="p-6">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <People className="text-purple-700" fontSize="large" />
            </div>
            <Typography variant="h6" fontWeight="bold">
              Total Contacts
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              className="text-purple-700 mt-2"
            >
              0
            </Typography>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-green-500">
          <CardContent className="p-6">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
              <PersonAdd className="text-green-600" fontSize="large" />
            </div>
            <Typography variant="h6" fontWeight="bold">
              Add Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              Add your new contacts
            </Typography>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-500">
          <CardContent className="p-6">
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Contacts className="text-blue-600" fontSize="large" />
            </div>
            <Typography variant="h6" fontWeight="bold">
              Contact List
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              View all your contacts
            </Typography>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-orange-500">
          <CardContent className="p-6">
            <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <Edit className="text-orange-600" fontSize="large" />
            </div>
            <Typography variant="h6" fontWeight="bold">
              Edit Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              Easily update your contact details
            </Typography>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-pink-500">
          <CardContent className="p-6">
            <div className="w-14 h-14 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
              <Visibility className="text-pink-600" fontSize="large" />
            </div>
            <Typography variant="h6" fontWeight="bold">
              View Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              View contact details anytime
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
}

export default Home;
