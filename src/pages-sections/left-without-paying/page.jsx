'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import LeftWithoutPayingView from './left-without-paying-view';

const LeftWithoutPaying = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <LeftWithoutPayingView />
    </Box>
  </Box>
);

export default LeftWithoutPaying;
