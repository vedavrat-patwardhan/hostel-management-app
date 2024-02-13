import React from 'react';

import { H3 } from 'components/Typography'; // Local CUSTOM COMPONENT
import { Container } from '@mui/material';
import TransactionForm from './add-transaction-form';

const AddTransactionView = () => {
  const INITIAL_VALUES = {
    ebill: '',
    wbill: '',
    municipal_tax: '',
    bank_emi: '',
    salary: '',
    maintanance: '',
    laundry: '',
    miscellaneous: '',
    remark: '',
  };

  const handleFormSubmit = async values => {
    try {
      const { expenseData, error } = await addExpense(values);

      if (expenseData) {
        console.log('Booking successful:', expenseData);
      } else {
        console.error('Booking failed:', error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        Add Expenses
      </H3>
      <TransactionForm
        initialValues={INITIAL_VALUES}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  );
};

export default AddTransactionView;
