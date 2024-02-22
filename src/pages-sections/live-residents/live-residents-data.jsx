import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import DataListTable from './components/Table';
import useDataList from '../../hooks/useDataList';

const LiveResidentsData = () => {
  const {
    allotmentData,
    bookingData,
    rentDetailsData,
    fetchBookingData,
    fetchAllotmentData,
    fetchRentDetailsData,
  } = useDataList();

  const [dataList, setDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const tableHeading = [
    {
      id: '1',
      label: 'Id No',
      alignCenter: true,
    },
    {
      id: '2',
      label: 'Name',
      alignCenter: true,
    },
    {
      id: '3',
      label: 'Room No',
      alignCenter: true,
    },
    {
      id: '4',
      label: 'Actions',
      alignCenter: true,
    },
  ];

  useEffect(() => {
    fetchBookingData();
    fetchAllotmentData();
    fetchRentDetailsData();
  }, []);

  useEffect(() => {
    const FilterData = () => {
      const response = allotmentData.filter(
        item => item.data.status === 'live',
      );
      setFilteredData(response);
    };
    FilterData();
  }, [allotmentData]);

  useEffect(() => {
    if (
      bookingData.length > 0 &&
      filteredData.length > 0 &&
      rentDetailsData.length > 0
    ) {
      const merged = mergeDocuments(bookingData, filteredData, rentDetailsData);
      setDataList(merged);
    }
  }, [bookingData, filteredData, rentDetailsData]);

  const mergeDocuments = (bookingData, filteredData, rentDetailsData) =>
    filteredData.map(filter => {
      const booking = bookingData.find(
        a => a.id === filter.data.name.split('-')[1],
      );
      const rentDetails = rentDetailsData.find(
        r => r.data.idNo.split('-')[1] === filter.data.name.split('-')[1],
      );

      return {
        ...booking?.data,
        ...filter?.data,
        ...rentDetails?.data,
      };
    });

  return (
    <Container>
      <DataListTable datalist={dataList} tableHeading={tableHeading} />
    </Container>
  );
};
export default LiveResidentsData;
