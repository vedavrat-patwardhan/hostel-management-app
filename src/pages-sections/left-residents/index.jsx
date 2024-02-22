'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import LeftResidentsView from './left-residents-view';

const LeftResidents = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <LeftResidentsView />
    </Box>
  </Box>
);

export default LeftResidents;
