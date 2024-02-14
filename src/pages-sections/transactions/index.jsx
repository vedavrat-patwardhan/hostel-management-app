'use client';

import React from 'react';
import { Box } from '@mui/material';
import Header from 'components/header';
import AddTransactionView from './add-transaction';

const Addtransaction = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <AddTransactionView />
    </Box>
  </Box>
);

export default Addtransaction;
