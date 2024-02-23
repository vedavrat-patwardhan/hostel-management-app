import { Container } from '@mui/material';
import React from 'react';
import { H3 } from '../../components/Typography';
import DailyReportsData from './daily-reports-data';

const DailyReportsView = () => (
  <Container sx={{ mt: 12, position: 'relative' }}>
    <H3 align="center" mb={2}>
      Daily Reports
    </H3>
    <DailyReportsData />
  </Container>
);

export default DailyReportsView;
