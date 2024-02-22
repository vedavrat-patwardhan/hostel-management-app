'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import { H2 } from 'components/Typography';
import DataListTable from './components/table';
import { bedData } from '../../utils/constants';
import { getAllotment } from '../../firebase/allotment/get-allotment';

const AvailabilityTable = () => {
  const [allotmentData, setAllotmentData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  useEffect(() => {
    const AllAllotmentData = async () => {
      try {
        const response = await getAllotment();
        if (response.status === 200) {
          setAllotmentData(response.data);
        } else {
          console.log('Error in getting allotment data', response.message);
        }
      } catch (error) {
        console.error('Error', error.message);
      }
    };
    AllAllotmentData();
  }, []);

  const filteredData = allotmentData.filter(
    item =>
      new Date(item.data.startDate) <= new Date(startDate) &&
      new Date(startDate) <= new Date(item.data.dueDate),
  );

  const beds = filteredData.map(item => {
    const parts = item.data.bedNo.split('-');
    return parts.slice(2).join('-');
  });

  const filteredBeds = bedData.map(floor => ({
    floorNo: floor.floorNo,
    rooms: floor.rooms.map(room => ({
      roomNo: room.roomNo,
      beds: room.beds.filter(bed => {
        const bedNumber = `${room.roomNo}-${bed.split('-')[1]}`;
        return !beds.includes(bedNumber);
      }),
    })),
  }));

  const handleStartDateChange = event => {
    setStartDate(event.target.value);
  };

  const handleDueDateChange = event => {
    setDueDate(event.target.value);
  };
  const tableHeading = [
    {
      id: 'floorNo',
      label: 'Floor No',
      alignCenter: true,
    },
    {
      id: 'roomNo',
      label: 'Room No',
      alignCenter: true,
    },
    {
      id: 'bedNo',
      label: 'Bed No',
      alignCenter: true,
    },
  ];

  return (
    <Box
      id="get"
      sx={{
        backgroundColor: 'grey.100',
      }}
    >
      <Container
        sx={{
          py: 18,
        }}
      >
        <H2
          mb={8}
          fontSize={28}
          textAlign="center"
          fontWeight="700"
          color="secondary.main"
          textTransform="uppercase"
        >
          Use the filters to check available rooms
        </H2>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            mb: 6,
          }}
        >
          <TextField
            id="date"
            label="Start Date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="End Date"
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <DataListTable dataList={filteredBeds} tableHeading={tableHeading} />
      </Container>
    </Box>
  );
};

export default AvailabilityTable;

// AvailabilityTable.propTypes = {
//   handleChangeFilter: PropTypes.func.isRequired,
// };
