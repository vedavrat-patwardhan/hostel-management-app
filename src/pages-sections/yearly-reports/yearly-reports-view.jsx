import React from 'react';
import { Container } from '@mui/material';
import { H3 } from '../../components/Typography';
import YearlyReportsData from './yearly-reports-data';

const YearlyReportsView = () => (
  <Container sx={{ mt: 12, position: 'relative' }}>
    <H3 align="center" mb={2}>
      Yearly Reports
    </H3>
    <YearlyReportsData />
  </Container>
);

export default YearlyReportsView;
