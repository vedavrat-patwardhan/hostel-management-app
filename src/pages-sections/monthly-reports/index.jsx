'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import MonthlyReportsView from './monthly-reports-view';

const MonthlyReports = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <MonthlyReportsView />
    </Box>
  </Box>
);

export default MonthlyReports;
