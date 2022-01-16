import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import {
  Typography,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';

export default function Tests() {
  return (
    <Routes>
      <Route
        index
        element={(
          <div className="flex flex-col w-full h-full gap-6">
            <Typography variant="h6" align="center">Tests</Typography>
            <TableContainer className="w-full" component={Card}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sr. No.</TableCell>
                    <TableCell>Test Title</TableCell>
                    <TableCell align="center">Subject</TableCell>
                    <TableCell align="center">Starts At</TableCell>
                    <TableCell align="center">Submittable Before</TableCell>
                    <TableCell align="center">Created By</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </div>
        )}
      />
    </Routes>
  );
}
