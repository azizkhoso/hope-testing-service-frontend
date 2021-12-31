import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Login from '../login';
import Student from '../student';
import Teacher from '../teacher';
import Admin from '../admin';
import NotFound from '../NotFound';
import SignUp from '../signup';
import Toasts from '../toasts';

const queryClient = new QueryClient();
export default function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="w-screen h-screen min-h-screen m-0 border-0">
          <Routes>
            <Route index element={<Navigate replace to="/login" />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/signup/*" element={<SignUp />} />
            <Route path="/student/*" element={<Student />} />
            <Route path="/teacher/*" element={<Teacher />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/not-found/*" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/not-found" />} />
          </Routes>
        </div>
        <Toasts />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
