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
import { Button, MenuItem, TextField } from '@mui/material';
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

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [reportData, setReportData] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const TotalValueHandler = id => {
    try {
      const document = datalist.find(item => item.data.expenseId === id);
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
      return 0;
    }
  };
  useEffect(() => {
    const FetchData = async () => {
      try {
        if (selectedMonth && selectedYear) {
          const monthNumber = new Date(
            `${selectedYear}-${selectedMonth}-01`,
          ).getMonth();

          const response = datalist.filter(item => {
            const itemDate = new Date(item.data.currentDate);
            return (
              itemDate.getMonth() === monthNumber &&
              itemDate.getFullYear() === parseInt(selectedYear, 10)
            );
          });

          setReportData(response);

          const newTotalSum = response.reduce(
            (acc, item) => acc + TotalValueHandler(item.data.expenseId),
            0,
          );
          setTotalSum(newTotalSum);
        } else {
          setReportData(null);
          setTotalSum(0);
        }
      } catch (error) {
        console.log('Error', error);
      }
    };
    FetchData();
  }, [selectedMonth, selectedYear, datalist]);

  return (
    <Scrollbar>
      <TextField
        select
        fullWidth
        name="month"
        label="Month"
        color="info"
        size="medium"
        placeholder="Month"
        value={selectedMonth}
        onChange={e => setSelectedMonth(e.target.value)}
      >
        <MenuItem value="January">January</MenuItem>
        <MenuItem value="February">February</MenuItem>
        <MenuItem value="March">March</MenuItem>
        <MenuItem value="April">April</MenuItem>
        <MenuItem value="May">May</MenuItem>
        <MenuItem value="June">June</MenuItem>
        <MenuItem value="July">July</MenuItem>
        <MenuItem value="August">August</MenuItem>
        <MenuItem value="September">September</MenuItem>
        <MenuItem value="October">October</MenuItem>
        <MenuItem value="November">November</MenuItem>
        <MenuItem value="December">December</MenuItem>
      </TextField>
      <TextField
        fullWidth
        name="year"
        label="Year"
        color="info"
        size="medium"
        placeholder="Year"
        value={selectedYear}
        onChange={e => setSelectedYear(e.target.value)}
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
            {reportData && reportData.length > 0 ? (
              reportData.map(item => (
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
