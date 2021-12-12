import React from 'react';

import { Typography } from '@mui/material';

export default function NotFound() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Typography variant="h3" color="GrayText">
        404, sorry page not found :(
      </Typography>
    </div>
  );
}
