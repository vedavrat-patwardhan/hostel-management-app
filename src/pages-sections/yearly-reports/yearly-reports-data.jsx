import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import DataListTable from './components/Table';
import { getExpense } from '../../firebase/expenses/get-expenses';

const YearlyReportsData = () => {
  const [dataList, setDataList] = useState([]);

  const tableHeading = [
    {
      id: '1',
      label: 'Date',
      alignCenter: true,
    },
    {
      id: '2',
      label: 'Electricity Bill',
      alignCenter: true,
    },
    {
      id: '3',
      label: 'Water Bill',
      alignCenter: true,
    },
    {
      id: '4',
      label: 'Municipal Tax',
      alignCenter: true,
    },
    {
      id: '5',
      label: 'Bank EMI',
      alignCenter: true,
    },
    {
      id: '6',
      label: 'Salary',
      alignCenter: true,
    },
    {
      id: '7',
      label: 'Maintenance',
      alignCenter: true,
    },
    {
      id: '8',
      label: 'Laundry',
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
      label: 'Total',
      alignCenter: true,
    },
  ];

  useEffect(() => {
    const ExpenseData = async () => {
      try {
        const response = await getExpense();
        if (response.status === 200) {
          setDataList(response.data);
        } else {
          console.log('Error in getting expenses', response.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    ExpenseData();
  }, []);

  console.log(dataList, 'This is datalist');
  return (
    <Container>
      <DataListTable datalist={dataList} tableHeading={tableHeading} />
    </Container>
  );
};
export default YearlyReportsData;
