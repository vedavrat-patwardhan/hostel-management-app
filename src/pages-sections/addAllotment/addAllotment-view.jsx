import React from 'react';
import { Container } from '@mui/material';
import AddAllotmentForm from './addAllotment-form';
import { H3 } from '../../components/Typography';

const AddAllotmentView = () => {
  const INITIAL_VALUES = {
    name: '',
    bedno: '',
    startdate: '',
    duedate: '',
    deposit: '',
    paymentmethod: '',
  };

  const handleFormSubmit = async (e, values) => {
    console.log(values);
  };
  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        AddAllotment
      </H3>
      <AddAllotmentForm
        initialValues={INITIAL_VALUES}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  );
};
export default AddAllotmentView;
