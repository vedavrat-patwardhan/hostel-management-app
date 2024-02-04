'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from 'pages-sections/common/header';
import BedBookingPageView from './bed-booking';

function BookABed() {
  return (
    <Box bgcolor="background.paper" minHeight="100vh">
      <Header />
      <Box maxWidth={1280} margin="auto">
        <BedBookingPageView />
      </Box>
    </Box>
  );
}

export default BookABed;
