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

import Topbar from '../topbar';
import Home from '../home';
import About from '../about';
import DemoTests from '../demo-tests';
import Toasts from '../toasts';
import NotFound from '../NotFound';
import Login from '../login';
import Admin from '../admin';
/* import Student from '../student';
import Teacher from '../teacher';
import SignUp from '../signup'; */

import ErrorBoundary from '../ErrorBoundary';

const queryClient = new QueryClient();
export default function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="w-screen h-screen min-h-screen m-0 border-0">
          <ErrorBoundary>
            <Topbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/demo-tests/*" element={<DemoTests />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/admin/*" element={<Admin />} />
              {/* <Route path="/signup/*" element={<SignUp />} />
              <Route path="/student/*" element={<Student />} />
              <Route path="/teacher/*" element={<Teacher />} /> */}
              <Route path="/not-found/*" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/not-found" />} />
            </Routes>
          </ErrorBoundary>
        </div>
        <Toasts />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
