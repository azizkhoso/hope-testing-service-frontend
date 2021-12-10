import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Login from '../login';
import AdminLogin from '../login/AdminLogin';
import Student from '../student';
import Teacher from '../teacher';
import Admin from '../admin';
import NotFound from '../NotFound';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/student/*" element={<Student />} />
        <Route path="/teacher/*" element={<Teacher />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
