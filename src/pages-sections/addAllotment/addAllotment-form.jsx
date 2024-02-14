import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, Card, Grid, MenuItem, TextField } from '@mui/material';
import PropTypes from 'prop-types';

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().min(2).required('Name is required'),
  bedno: yup.string().required('Bed no is required'),
  startdate: yup.date().required('Start date is required'),
  duedate: yup
    .date()
    .required('Due date is required')
    .min(yup.ref('startdate'), 'Due date must be after start date'),
  deposit: yup.number().required('Deposit is required'),
  paymentmethod: yup.string().required('Payment method is required'),
});
const AddAllotmentForm = props => {
  const { initialValues, handleFormSubmit } = props;
  return (
    <Card
      sx={{
        p: 6,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  color="info"
                  size="medium"
                  placeholder="Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="bedno"
                  label="bedno"
                  color="info"
                  size="medium"
                  placeholder="Bed No"
                  value={values.bedno}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.bedno && !!errors.bedno}
                  helperText={touched.bedno && errors.bedno}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="startdate"
                  label="startdate"
                  type="date"
                  color="info"
                  size="medium"
                  placeholder="Start Date"
                  value={values.startdate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.startdate && !!errors.startdate}
                  helperText={touched.startdate && errors.startdate}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="duedate"
                  label="duedate"
                  type="date"
                  color="info"
                  size="medium"
                  placeholder="Due Date"
                  value={values.duedate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.duedate && !!errors.duedate}
                  helperText={touched.duedate && errors.duedate}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="deposit"
                  label="deposit"
                  color="info"
                  size="medium"
                  placeholder="Deposit"
                  value={values.deposit}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.deposit && !!errors.deposit}
                  helperText={touched.deposit && errors.deposit}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  name="paymentmethod"
                  label="paymentmethod"
                  color="info"
                  size="medium"
                  placeholder="Payment Method"
                  value={values.paymentmethod}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.paymentmethod && !!errors.paymentmethod}
                  helperText={touched.paymentmethod && errors.paymentmethod}
                >
                  <MenuItem value="cash">Cash</MenuItem>
                  <MenuItem value="upi">UPI</MenuItem>
                  <MenuItem value="creditcard">Credit Card</MenuItem>
                  <MenuItem value="debitcard">Debit Card</MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  AddAllotment
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default AddAllotmentForm;

AddAllotmentForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bedno: PropTypes.string.isRequired,
    startdate: PropTypes.instanceOf(Date).isRequired,
    duedate: PropTypes.instanceOf(Date).isRequired,
    deposit: PropTypes.number.isRequired,
    paymentmethod: PropTypes.string.isRequired,
  }).isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};
