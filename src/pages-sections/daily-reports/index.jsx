'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import DailyReportsView from './daily-reports-view';

const DailyReports = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <DailyReportsView />
    </Box>
  </Box>
);

export default DailyReports;
