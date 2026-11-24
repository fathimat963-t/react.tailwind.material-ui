import { Routes, Route } from 'react-router-dom'
import Home from './Pagess/Home'
import AddContact from './Pagess/AddContact'
import ContactList from './Pagess/ContactList'
import ViewContact from './Pagess/ViewContact'
import EditContact from './Pagess/EditContact'


import Navbar from './Componentss/Navbar'
import Sidebar
 from './Componentss/Sidebar'






import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />

      <Box sx={{ display: 'flex', minHeight: '100vh' }}>

        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 3 }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/contact-list" element={<ContactList />} />
            <Route path="/view-contact/:id" element={<ViewContact />} />
            <Route path="/edit-contact/:id" element={<EditContact />} />
          </Routes>

        </Box>

      </Box>
    </>
  );
}

export default App;