import React from 'react';

import { H3 } from 'components/Typography'; // Local CUSTOM COMPONENT
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import BedBookingForm from './bed-booking-form';
import { bookbed } from '../../firebase/bookabed/addbooking';

const BedBookingPageView = () => {
  const router = useRouter();
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
      const response = await bookbed(values);

      if (response.status === 200) {
        console.log('Booking successful:', response.data);
        router.push('/addAllotment');
      } else {
        console.error('Booking failed:', response.message);
      }
    } catch (error) {
      console.error('Error during booking:', error);
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
