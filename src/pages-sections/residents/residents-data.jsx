import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { getBedBookingData } from '../../firebase/bookAbed/get-booking';
import { getAllotment } from '../../firebase/allotment/get-allotment';
import { getRentDetails } from '../../firebase/rent-details/get-rent-details';
import { H3 } from '../../components/Typography';
import DataListTable from './components/Table';

const ResidentsData = () => {
  const [bookingData, setBookingData] = useState([]);
  const [allotmentData, setAllotmentData] = useState([]);
  const [rentDetailsData, setRentDetailsData] = useState([]);
  const [dataList, setDataList] = useState([]);

  const tableHeading = [
    {
      id: '1',
      label: 'ID No',
      alignCenter: true,
    },
    {
      id: '2',
      label: 'Name',
      alignCenter: true,
    },
    {
      id: '3',
      label: 'Room',
      alignCenter: true,
    },
    {
      id: '4',
      label: 'Actions',
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

  return <DataListTable datalist={dataList} tableHeading={tableHeading} />;
};

export default ResidentsData;
