'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import YearlyReportsView from './yearly-reports-view';

const YearlyReports = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <YearlyReportsView />
    </Box>
  </Box>
);

export default YearlyReports;
