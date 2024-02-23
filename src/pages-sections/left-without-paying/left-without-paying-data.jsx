import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import DataListTable from './components/Table';
import useDataList from '../../hooks/useDataList';

const LeftWithoutPayingResidentsData = () => {
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
  const [withoutPaidData, setWithoutPaidData] = useState([]);
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
      label: 'Personal Details',
      alignCenter: true,
    },
    {
      id: '5',
      label: 'Transaction Details',
      alignCenter: true,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllotmentData();
      await fetchBookingData();
      await fetchRentDetailsData();
    };
    fetchData();
  }, []);

  useEffect(() => {
    const FilterData = () => {
      const response = allotmentData.filter(
        item => item.data.status === 'left',
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

  useEffect(() => {
    const DataWithoutPaid = () => {
      const result = dataList.filter(item => {
        const totalAmount =
          Number(item.deposit) +
          Number(item.monthlyRent) +
          Number(item.miscellaneous);
        const amountPaid =
          Number(item.paidAmount) + Number(item.advanceDeposit);
        const receivable = totalAmount - amountPaid;
        return receivable > 0;
      });
      setWithoutPaidData(result);
    };
    DataWithoutPaid();
  }, [dataList]);

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

  console.log(dataList, 'Datalist ');

  return (
    <Container>
      <DataListTable datalist={withoutPaidData} tableHeading={tableHeading} />
    </Container>
  );
};
export default LeftWithoutPayingResidentsData;