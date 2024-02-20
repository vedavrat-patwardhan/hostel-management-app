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
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import TableHeader from '../../home/components/table-head';
import { getRentDetailsById } from '../../../firebase/rent-details/rent-details-by-id';
import { getRentDetailsByIdAndUpdate } from '../../../firebase/rent-details/update-rent-details';

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
  const [selectedRentId, setSelectedRentId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateData, setUpdateData] = useState({
    paidAmount: '',
    miscellaneous: '',
  });
  const ReceivableAmount = id => {
    const document = datalist.find(item => item.idNo.split('-')[1] === id);

    if (document) {
      const totalAmount =
        Number(document.deposit) +
        Number(document.monthlyRent) +
        Number(document.miscellaneous);

      const paidAmount =
        Number(document.paidAmount) + Number(document.advanceDeposit);

      const receivable = totalAmount - paidAmount;

      return receivable >= 0 ? receivable : 0;
    }

    return 0;
  };

  const handleUpdateModalOpen = async id => {
    setSelectedRentId(id);
    try {
      const response = await getRentDetailsById(id);
      if (response.status === 200) {
        setUpdateData({
          paidAmount: response.data.paidAmount,
          miscellaneous: response.data.miscellaneous,
        });
        setIsModalOpen(true);
      } else {
        console.log('Error in getting response', response.message);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleUpdateModalClose = () => {
    setIsModalOpen(false);
    setSelectedRentId('');
  };
  const handleUpdate = async id => {
    try {
      const response = await getRentDetailsByIdAndUpdate(id, updateData);
      if (response.status === 200) {
        handleUpdateModalClose();
      }
    } catch (error) {
      console.error('Error in updating data', error);
    }
  };

  const showDetailsHandler = idNo => {};

  return (
    <div>
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
                      {ReceivableAmount(data.idNo.split('-')[1])}
                    </StyledTableCell>
                    <StyledTableCell align="center" rowSpan={1}>
                      <Button onClick={() => handleUpdateModalOpen(data.idNo)}>
                        Edit
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center" rowSpan={1}>
                      <Button>Payment Reminder</Button>
                    </StyledTableCell>
                    <StyledTableCell align="center" rowSpan={1}>
                      <Button onClick={() => showDetailsHandler(data.idNo)}>
                        Details
                      </Button>
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
      <Dialog open={isModalOpen} onClose={handleUpdateModalClose}>
        <DialogTitle>Update Data</DialogTitle>
        <DialogContent>
          <TextField
            label="Paid Amount"
            value={updateData.paidAmount}
            onChange={e =>
              setUpdateData({ ...updateData, paidAmount: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Miscellaneous"
            value={updateData.miscellaneous}
            onChange={e =>
              setUpdateData({ ...updateData, miscellaneous: e.target.value })
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateModalClose}>Cancel</Button>
          <Button onClick={() => handleUpdate(selectedRentId)} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
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
