import React from 'react';

import {
  Typography,
} from '@mui/material';

import onlineLearning from '../../assets/online-learning.png';

function Home() {
  return (
    <div className="m-0 page-content b-0">
      <div
        className="container relative flex justify-between w-full px-6"
      >
        <Typography
          variant="h2"
          color="primary"
          className="w-full my-auto md:w-1/2 lg:w-1/3"
        >
          Best online tests for you
        </Typography>
        <img
          src={onlineLearning}
          alt="online learning"
          className="hidden w-1/3 my-auto md:block"
        />
      </div>
    </div>
  );
}

export default Home;
