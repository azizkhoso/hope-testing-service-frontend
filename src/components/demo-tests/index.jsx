import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import {
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

function DemoTests() {
  const qualifications = ['XI', 'XII', 'Bachelor', 'Masters'];
  // const subjects = ['English', 'Math', 'Physics', 'Chemistery', 'Biology'];
  return (
    <Routes>
      <Route
        index
        element={(
          <div className="gap-6 px-3 py-6 page-content">
            <Typography variant="h6" color="primary" align="center">Demo Tests</Typography>
            <div className="flex items-center gap-3">
              <Typography variant="body2">Filter</Typography>
              <span className="flex-grow" />
              <FormControl>
                <Select
                  label="Qualification"
                  size="small"
                >
                  {qualifications.map((q) => (
                    <MenuItem key={q} value={q}>{q}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        )}
      />
      <Route path="/:_id" element={<p>Test </p>} />
    </Routes>
  );
}

export default DemoTests;
