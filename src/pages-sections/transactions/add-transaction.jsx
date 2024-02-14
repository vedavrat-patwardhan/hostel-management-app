'use client';

import React from 'react';

import { H3 } from 'components/Typography'; // Local CUSTOM COMPONENT
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import TransactionForm from './add-transaction-form';
import { addExpense } from '../../firebase/expenses/addExpenses';

const AddTransactionView = () => {
  const router = useRouter();

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
      const data = await addExpense(values);

      if (data.ok) {
        console.log('Booking successful:', data);
        router.push('/addAllotment');
      } else {
        console.error('Booking failed:');
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
