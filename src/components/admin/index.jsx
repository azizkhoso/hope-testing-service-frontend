import { IconButton, Typography } from '@mui/material';
import React from 'react';

import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import {
  Logout,
  Menu,
} from '@mui/icons-material';

import { useSelector } from 'react-redux';

import Sidebar from './sidebar';

export default function Admin() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { account } = useSelector((s) => s);
  if (!account.admin) return <Navigate replace to="/login/admin" />;
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar open={openDrawer} setOpen={setOpenDrawer} />
      <section className="flex-grow md:w-9/12 lg:w-9/12 2xl:w-10/12">
        <div className={`flex ${openDrawer ? 'justify-between' : 'justify-end'} w-full py-2 px-4 border-b`} style={{ minHeight: '40px' }}>
          <IconButton className="block md:hidden" onClick={() => setOpenDrawer(true)}>
            <Menu />
          </IconButton>
          <Typography variant="h5" className="flex items-center justify-center flex-grow">Admin</Typography>
          <IconButton>
            <Logout />
          </IconButton>
        </div>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<h1>Admin dashboard</h1>} />
          <Route path="/announcements" element={<h1>Admin Announcements</h1>} />
          <Route path="/profile" element={<h1>Admin profile</h1>} />
          <Route path="/tests" element={<h1>Admin tests</h1>} />
        </Routes>
      </section>
    </div>
  );
}
