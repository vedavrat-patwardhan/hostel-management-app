'use client';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import styled from '@mui/material/styles/styled';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React, { useState } from 'react';
import useMuiTable from 'hooks/useMuiTable'; // CUSTOM ICON COMPONENT
import PropTypes from 'prop-types';

import Scrollbar from 'components/Scrollbar';
import { Button, Dialog, DialogContentText, DialogTitle } from '@mui/material';
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requiredDoc, setRequiredDoc] = useState(null);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalOpen = idNo => {
    setIsModalOpen(true);
    const document = datalist.find(item => item.idNo === idNo);
    console.log(document, 'This is doc');
    if (document) {
      setRequiredDoc(document);
    } else {
      console.log('Error in getting document');
    }
  };
  console.log(datalist, 'datalist');
  return (
    <>
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
                      {data.name.split('-')[1]}
                    </StyledTableCell>
                    <StyledTableCell align="center" rowSpan={1}>
                      {data.name.split('-')[0]}
                    </StyledTableCell>
                    <StyledTableCell align="center" rowSpan={1}>
                      {data.bedNo}
                    </StyledTableCell>
                    <StyledTableCell align="center" rowSpan={1}>
                      <Button onClick={() => handleModalOpen(data.idNo)}>
                        Show Details
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
      <Dialog open={isModalOpen} onClose={handleModalClose}>
        <DialogTitle>Resident Details</DialogTitle>
        {requiredDoc && (
          <>
            <DialogContentText>
              Name:{requiredDoc.name.split('-')[0]}
            </DialogContentText>
            <DialogContentText>Age:{requiredDoc.age}</DialogContentText>
            <DialogContentText>
              Personal Contact:{requiredDoc.personalContactNo}
            </DialogContentText>
            <DialogContentText>
              Emergency Contact:{requiredDoc.emergencyContactNo}
            </DialogContentText>
            <DialogContentText>
              Locality:{requiredDoc.locality}
            </DialogContentText>
            <DialogContentText>City:{requiredDoc.city}</DialogContentText>
            <DialogContentText>State:{requiredDoc.state}</DialogContentText>
            <DialogContentText>Email:{requiredDoc.email}</DialogContentText>
            <DialogContentText>
              Validation Document:{requiredDoc.validationDocumentType}
            </DialogContentText>
            <DialogContentText>
              Validation Document No:{requiredDoc.validationDocumentNo}
            </DialogContentText>
          </>
        )}
      </Dialog>
    </>
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
