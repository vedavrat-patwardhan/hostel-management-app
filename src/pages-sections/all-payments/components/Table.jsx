import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import styled from '@mui/material/styles/styled';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React from 'react';
import useMuiTable from 'hooks/useMuiTable'; // CUSTOM ICON COMPONENT
import PropTypes from 'prop-types';

import Scrollbar from 'components/Scrollbar';
import { Button } from '@mui/material';
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

  console.log(datalist, 'This is datalist');
  return (
    <Scrollbar>
      <TableContainer>
        <Table>
          <TableHeader
            order={order}
            orderBy={orderBy}
            heading={tableHeading}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {datalist && datalist.length > 0 ? (
              datalist.map(data => (
                <StyledTableRow key={data.email}>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.name.split('-')[0]}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.name.split('-')[1]}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.personalContactNo}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.bedNo}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.startDate}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.dueDate}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.monthlyRent}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.paidAmount}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.miscellaneous}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {data.remark}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    receivable
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    <Button>Update Payment</Button>
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    <Button>Payment Reminder</Button>
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    <Button>Details</Button>
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
