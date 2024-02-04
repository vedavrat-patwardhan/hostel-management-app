import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import { H2 } from 'components/Typography';
import DataListTable from './components/table';

function AvailabilityTable() {
  const dummyData = [
    {
      floorNo: 1,
      rooms: [
        {
          roomNo: 101,
          beds: ['101-A', '101-B', '101-C'],
        },
        {
          roomNo: 102,
          beds: ['102-A', '102-B', '102-C'],
        },
      ],
    },
    // Add more data here...
  ];

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
            defaultValue="2022-01-01"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="End Date"
            type="date"
            defaultValue="2022-01-01"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <DataListTable dataList={dummyData} tableHeading={tableHeading} />
      </Container>
    </Box>
  );
}

export default AvailabilityTable;

// AvailabilityTable.propTypes = {
//   handleChangeFilter: PropTypes.func.isRequired,
// };
