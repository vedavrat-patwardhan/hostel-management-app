import { Container } from '@mui/material';
import React from 'react';
import { H3 } from '../../components/Typography';
import LeftWithoutPayingResidentsData from './left-without-paying-data';

const LeftWithoutPayingView = () => (
  <Container sx={{ mt: 12, position: 'relative' }}>
    <H3 align="center" mb={2}>
      Left Without Paying Residents
    </H3>
    <LeftWithoutPayingResidentsData />
  </Container>
);

export default LeftWithoutPayingView;
