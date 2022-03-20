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
import Contact from '../contact';
import DemoTests from '../demo-tests';
import Faq from '../faq';
import Toasts from '../toasts';
import NotFound from '../NotFound';
import Login from '../login';
import Admin from '../admin';
/* import Student from '../student';
import Teacher from '../teacher'; */
import SignUp from '../signup';

import ErrorBoundary from '../ErrorBoundary';
import Footer from '../footer';

const queryClient = new QueryClient();
export default function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="absolute inset-x-0 min-h-screen m-0 stack">
          <ErrorBoundary>
            <Topbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demo-tests/*" element={<DemoTests />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/signup/*" element={<SignUp />} />
              {/* <Route path="/student/*" element={<Student />} />
              <Route path="/teacher/*" element={<Teacher />} /> */}
              <Route path="/not-found/*" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/not-found" />} />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </div>
        <Toasts />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
