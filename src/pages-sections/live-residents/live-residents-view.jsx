import { Container } from '@mui/material';
import React from 'react';
import { H3 } from '../../components/Typography';
import LiveResidentsData from './live-residents-data';

const LiveResidentsView = () => (
  <Container sx={{ mt: 12, position: 'relative' }}>
    <H3 align="center" mb={2}>
      Live Residents
    </H3>
    <LiveResidentsData />
  </Container>
);

export default LiveResidentsView;
