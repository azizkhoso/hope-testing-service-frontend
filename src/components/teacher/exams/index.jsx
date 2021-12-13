import React from 'react';

import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import {
  Card,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import {
  Edit,
  Delete,
  Add,
} from '@mui/icons-material';

export default function Exams() {
  const navigate = useNavigate();
  const [exams, setExams] = React.useState([
    {
      id: 'e1',
      title: 'English Test 1',
      subject: 'English',
      type: 'MCQS',
      duration: 180, // seconds
      startsAt: Number(new Date()) + 10000000000,
      qualification: 'IX',
      teacher: {
        id: 't1',
        name: 'Teacher 1',
      },
    },
  ]);
  return (
    <Routes>
      <Route
        index
        element={(
          <div className="flex flex-col w-full h-full gap-6">
            <div className="flex justify-end w-full">
              <Button variant="contained" startIcon={<Add />} onClick={() => navigate('new-exam')}>New Exam</Button>
            </div>
            <Typography variant="h6" align="center">Exams</Typography>
            <TableContainer className="w-full" component={Card}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sr. No.</TableCell>
                    <TableCell>Exam Title</TableCell>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">Subject</TableCell>
                    <TableCell align="center">Starts At</TableCell>
                    <TableCell align="center">Qualification</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    exams.map((exam, index) => (
                      <TableRow key={exam.id}>
                        <TableCell>{index}</TableCell>
                        <TableCell>{exam.title}</TableCell>
                        <TableCell align="center">{exam.type}</TableCell>
                        <TableCell align="center">{exam.subject}</TableCell>
                        <TableCell align="center" style={{ minWidth: '100px' }}>{(new Date(exam.startsAt)).toDateString()}</TableCell>
                        <TableCell align="center">{exam.qualification}</TableCell>
                        <TableCell align="center">
                          <IconButton>
                            <Edit />
                          </IconButton>
                          <IconButton>
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      />
      <Route path="/new-exam" setExams={setExams} element={<h1>New exam</h1>} />
      <Route path="/:id" element={<h1>View Exam</h1>} />
    </Routes>
  );
}
