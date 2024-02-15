'use client';

import React from 'react';

import { H3 } from 'components/Typography'; // Local CUSTOM COMPONENT
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import TransactionForm from './add-transaction-form';
import { addExpense } from '../../firebase/expenses/add-expenses';

const AddTransactionView = () => {
  const router = useRouter();

  const INITIAL_VALUES = {
    eBill: '',
    wBill: '',
    municipalTax: '',
    bankEmi: '',
    salary: '',
    maintenance: '',
    laundry: '',
    miscellaneous: '',
    remark: '',
  };

  const handleFormSubmit = async values => {
    try {
      const data = await addExpense(values);

      if (data.status === 200) {
        console.log('Expense added successfully:', data);
        router.push('/add-allotment');
      } else {
        console.error('Expense addition failed:', data.message);
      }
    } catch (error) {
      console.error('Error during expense addition:', error);
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
