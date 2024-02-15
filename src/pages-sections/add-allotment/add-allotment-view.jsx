import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import AddAllotmentForm from './add-allotment-form';
import { H3 } from '../../components/Typography';
import { getDocById } from '../../firebase/bookAbed/get-booking-by-id';

const AddAllotmentView = () => {
  const [resident, setResident] = useState(null);

  const INITIAL_VALUES = {
    name: '',
    bedNo: '',
    startDate: '',
    dueDate: '',
    deposit: '',
    paymentMethod: '',
  };

  useEffect(() => {
    const documentId = localStorage.getItem('documentId');
    const cachedResident = JSON.parse(
      localStorage.getItem(`resident_${documentId}`),
    );

    if (cachedResident) {
      setResident(cachedResident);
    } else {
      const getAllotmentsData = async () => {
        try {
          const response = await getDocById(documentId);
          setResident(response.data);

          // Cache the resident data
          localStorage.setItem(
            `resident_${documentId}`,
            JSON.stringify(response.data),
          );
        } catch (error) {
          console.error(error);
        }
      };

      getAllotmentsData();
    }
  }, []);
  const handleFormSubmit = async values => {
    console.log(values);
  };
  const formInitialValues = {
    ...INITIAL_VALUES,
    name: resident?.name || '',
  };
  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        AddAllotment
      </H3>
      <AddAllotmentForm
        initialValues={formInitialValues}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  );
};
export default AddAllotmentView;
