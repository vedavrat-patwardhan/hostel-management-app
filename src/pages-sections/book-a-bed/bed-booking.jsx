import React from 'react';

import { H3 } from 'components/Typography'; // Local CUSTOM COMPONENT
import { Container } from '@mui/material';
import BedBookingForm from './bed-booking-form';
import bookbed from '../../firebase/bookabed/addbooking';

const BedBookingPageView = () => {
  const INITIAL_VALUES = {
    name: '',
    age: 0,
    apartmentDetails: '',
    streetAddress: '',
    city: '',
    state: '',
    pinCode: 0,
    email: '',
    personalContactNo: 0,
    emergencyContactNo: 0,
    validationDocumentType: '',
    validationDocumentNo: '',
  };

  const handleFormSubmit = async values => {
    try {
      const { bedData, error } = await bookbed(values);

      if (bedData) {
        console.log('Booking successful:', bedData);
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
        Book a Bed
      </H3>
      <BedBookingForm
        initialValues={INITIAL_VALUES}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  );
};

export default BedBookingPageView;
