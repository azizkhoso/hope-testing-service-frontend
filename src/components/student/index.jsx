import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import Sidebar from './sidebar';

export default function Student() {
  return (
    <div className="flex">
      <section className="w-2/6">
        <Sidebar />
      </section>
      <section className="flex-grow">
        <Routes>
          <Route path="/dashboard" element={<h1>Student dashboard</h1>} />
          <Route path="/profile" element={<h1>Student profile</h1>} />
          <Route path="/exams" element={<h1>Student exams</h1>} />
        </Routes>
      </section>
    </div>
  );
}
