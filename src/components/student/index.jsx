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

export default function Student() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { account } = useSelector((s) => s);
  if (!account.student) return <Navigate replace to="/login/student" />;
  return (
    <div className="flex">
      <Sidebar open={openDrawer} setOpen={setOpenDrawer} />
      <section className="flex-grow">
        <div className={`flex ${openDrawer ? 'justify-between' : 'justify-end'} w-full py-2 px-4 border-b`} style={{ minHeight: '40px' }}>
          <IconButton className="block md:hidden" onClick={() => setOpenDrawer(true)}>
            <Menu />
          </IconButton>
          <Typography variant="h5" className="flex items-center flex-grow">Student Name</Typography>
          <IconButton>
            <Logout />
          </IconButton>
        </div>
        <Routes>
          <Route index element={<Navigate replace to="/student/dashboard" />} />
          <Route path="/dashboard" element={<h1>Student dashboard</h1>} />
          <Route path="/announcements" element={<h1>Student Announcements</h1>} />
          <Route path="/profile" element={<h1>Student profile</h1>} />
          <Route path="/exams" element={<h1>Student exams</h1>} />
        </Routes>
      </section>
    </div>
  );
}
