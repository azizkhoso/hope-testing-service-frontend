import React from 'react';

import {
  Typography,
  Container,
} from '@mui/material';

import onlineExams from '../../assets/online-exams.gif';

function Home() {
  return (
    <div className="home">
      <Container maxWidth="xl" className="justify-between row">
        <Typography
          variant="h2"
          color="primary"
          className="w-full my-auto md:w-1/2 lg:w-1/3"
        >
          Best online tests for you
        </Typography>
        <img
          src={onlineExams}
          alt="online exams"
          className="hidden w-1/3 my-auto md:block"
        />
      </Container>
    </div>
  );
}

export default Home;
