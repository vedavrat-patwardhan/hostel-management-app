import { Container } from '@mui/material';
import React from 'react';
import { H3 } from '../../components/Typography';

const MonthlyReportsView = () => (
  <Container sx={{ mt: 12, position: 'relative' }}>
    <H3 align="center" mb={2}>
      Monthly Reports
    </H3>
  </Container>
);

export default MonthlyReportsView;
