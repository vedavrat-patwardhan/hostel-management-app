import { Container } from '@mui/material';
import React from 'react';
import { H3 } from '../../components/Typography';
import LeftResidentsData from './left-residents-data';

const LeftResidentsView = () => (
  <Container sx={{ mt: 12, position: 'relative' }}>
    <H3 align="center" mb={2}>
      Left Residents
    </H3>
    <LeftResidentsData />
  </Container>
);

export default LeftResidentsView;
