import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { H3 } from '../../components/Typography';
import DataListTable from './components/Table';
import { getBedBookingData } from '../../firebase/bookAbed/get-booking';
import { getRentDetails } from '../../firebase/rent-details/get-rent-details';
import { getAllotment } from '../../firebase/allotment/get-allotment';

const AllPaymentsView = () => {
  const [bookingData, setBookingData] = useState([]);
  const [allotmentData, setAllotmentData] = useState([]);
  const [rentDetailsData, setRentDetailsData] = useState([]);
  const [dataList, setDataList] = useState([]);
  const tableHeading = [
    {
      id: '1',
      label: 'Name',
      alignCenter: true,
    },
    {
      id: '2',
      label: 'ID No',
      alignCenter: true,
    },
    {
      id: '3',
      label: 'Contact No',
      alignCenter: true,
    },
    {
      id: '4',
      label: 'Bed No',
      alignCenter: true,
    },
    {
      id: '5',
      label: 'Start Date',
      alignCenter: true,
    },
    {
      id: '6',
      label: 'Due Date',
      alignCenter: true,
    },
    {
      id: '7',
      label: 'Monthly Rent',
      alignCenter: true,
    },
    {
      id: '8',
      label: 'Amount Paid',
      alignCenter: true,
    },
    {
      id: '9',
      label: 'Miscellaneous',
      alignCenter: true,
    },
    {
      id: '10',
      label: 'Remark',
      alignCenter: true,
    },
    {
      id: '11',
      label: 'Receivable',
      alignCenter: true,
    },
    {
      id: '12',
      label: 'Update Payment',
      alignCenter: true,
    },
    {
      id: '13',
      label: 'Payment Reminder',
      alignCenter: true,
    },
    {
      id: '14',
      label: 'Details',
      alignCenter: true,
    },
  ];

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await getBedBookingData();
        if (response.status === 200) {
          setBookingData(response.data);
        }
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchBookingData();
  }, []);

  useEffect(() => {
    const fetchAllotmentData = async () => {
      try {
        const response = await getAllotment();
        if (response.status === 200) {
          setAllotmentData(response.data);
        }
      } catch (error) {
        console.error('Error fetching allotment data:', error);
      }
    };

    fetchAllotmentData();
  }, []);

  useEffect(() => {
    const fetchRentDetailsData = async () => {
      try {
        const response = await getRentDetails();
        if (response.status === 200) {
          setRentDetailsData(response.data);
        }
      } catch (error) {
        console.error('Error fetching rent details data:', error);
      }
    };

    fetchRentDetailsData();
  }, []);

  useEffect(() => {
    if (
      bookingData.length > 0 &&
      allotmentData.length > 0 &&
      rentDetailsData.length > 0
    ) {
      const merged = mergeDocuments(
        bookingData,
        allotmentData,
        rentDetailsData,
      );
      setDataList(merged);
    }
  }, [bookingData, allotmentData, rentDetailsData]);

  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        All Payments
      </H3>
      <DataListTable datalist={dataList} tableHeading={tableHeading} />
    </Container>
  );
};

const mergeDocuments = (bookingData, allotmentData, rentDetailsData) =>
  bookingData.map(booking => {
    const allotment = allotmentData.find(
      a => a.data.name.split('-')[1] === booking.id,
    );
    const rentDetails = rentDetailsData.find(
      r => r.data.idNo.split('-')[1] === booking.id,
    );

    return {
      ...booking?.data,
      ...allotment?.data,
      ...rentDetails?.data,
    };
  });
export default AllPaymentsView;
