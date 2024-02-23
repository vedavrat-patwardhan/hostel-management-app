'use client';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import styled from '@mui/material/styles/styled';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React, { useEffect, useState } from 'react';
import useMuiTable from 'hooks/useMuiTable'; // CUSTOM ICON COMPONENT
import PropTypes from 'prop-types';

import Scrollbar from 'components/Scrollbar';
import { Button, TextField } from '@mui/material';
import TableHeader from '../../home/components/table-head';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 13,
  paddingTop: 16,
  fontWeight: 600,
  paddingBottom: 16,
  color: theme.palette.grey[600],
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  ':first-of-type': {
    paddingLeft: 24,
  },
}));

const StyledTableRow = styled(TableRow)({
  ':last-child .MuiTableCell-root': {
    border: 0,
  },
});

const DataListTable = ({ datalist, tableHeading }) => {
  const { order, orderBy, handleRequestSort } = useMuiTable({
    listData: datalist,
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [dailyReportData, setDailyReportData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = datalist.filter(
          item => item.data.currentDate === selectedDate,
        );
        setDailyReportData(response);
      } catch (error) {
        console.log('Error', error);
      }
    };
    FetchData();
  }, [selectedDate]);

  console.log(dailyReportData, 'Daily report data');
  console.log(datalist, 'This is datalist');

  const TotalValueHandler = id => {
    console.log(id, 'Received id is here ');
    try {
      const document = datalist.find(item => item.data.expenseId === id);
      console.log(document, 'This is doc here');
      const total =
        Number(document.data.eBill) +
        Number(document.data.wBill) +
        Number(document.data.municipalTax) +
        Number(document.data.bankEmi) +
        Number(document.data.salary) +
        Number(document.data.maintenance) +
        Number(document.data.laundry) +
        Number(document.data.miscellaneous);
      return total;
    } catch (error) {
      console.error('Error in TotalValueHandler:', error);
      return 0; // Provide a default value or handle the error appropriately
    }
  };

  const totalSum = dailyReportData.reduce(
    (acc, item) => acc + TotalValueHandler(item.data.expenseId),
    0,
  );

  return (
    <Scrollbar>
      <TextField
        id="date"
        label="Start Date"
        type="date"
        value={selectedDate}
        onChange={e => setSelectedDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TableContainer>
        <Table>
          <TableHeader
            order={order}
            orderBy={orderBy}
            heading={tableHeading}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {dailyReportData && dailyReportData.length > 0 ? (
              dailyReportData.map(item => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.currentDate}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.eBill}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.wBill}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.municipalTax}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.bankEmi}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.salary}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.maintenance}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.laundry}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.miscellaneous}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.remark}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {TotalValueHandler(item.data.expenseId)}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={tableHeading.length} align="center">
                  No data available
                </StyledTableCell>
              </StyledTableRow>
            )}
            <StyledTableRow
              style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}
              key="total-row"
            >
              <StyledTableCell align="center" colSpan={1}>
                Overall Total
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={10}>
                {totalSum}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  );
};

export default DataListTable;

DataListTable.propTypes = {
  datalist: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date),
      ]),
    ),
  ).isRequired,
  tableHeading: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])),
  ).isRequired,
};
