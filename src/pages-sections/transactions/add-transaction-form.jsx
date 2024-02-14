'use client';

import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as yup from 'yup'; // GLOBAL CUSTOM COMPONENTS
import PropTypes from 'prop-types';
import { MenuItem } from '@mui/material';

const VALIDATION_SCHEMA = yup.object().shape({
  ebill: yup.number().required('Electricity bill is required'),
  wbill: yup.number().required('Water bill is required'),
  municipal_tax: yup.number().required('Municipal tax is required'),
  bank_emi: yup.number().required('Bank emi is required'),
  salary: yup.number().required('Salary is required'),
  maintanance: yup.number().required('Maintanance is required'),
  laundry: yup.number().required('Laundry is required'),
  miscellaneous: yup.number().required('Miscellaneous is required'),
  remark: yup.string().required('Remark is required'),
});

const TransactionForm = props => {
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
                  type="number"
                  name="ebill"
                  label="ebill"
                  color="info"
                  size="medium"
                  placeholder="Electricity Bill"
                  value={values.ebill}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.ebill && !!errors.ebill}
                  helperText={touched.ebill && errors.ebill}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="wbill"
                  label="wbill"
                  color="info"
                  size="medium"
                  placeholder="Water Bill"
                  value={values.wbill}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.wbill && !!errors.wbill}
                  helperText={touched.wbill && errors.wbill}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="municipal_tax"
                  label="municipal_tax"
                  color="info"
                  size="medium"
                  placeholder="Municipal Tax"
                  value={values.municipal_tax}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.municipal_tax && !!errors.municipal_tax}
                  helperText={touched.municipal_tax && errors.municipal_tax}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="bank_emi"
                  label="bank_emi"
                  color="info"
                  size="medium"
                  placeholder="Bank Emi"
                  value={values.bank_emi}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.bank_emi && !!errors.bank_emi}
                  helperText={touched.bank_emi && errors.bank_emi}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="salary"
                  label="salary"
                  color="info"
                  size="medium"
                  placeholder="Salary"
                  value={values.salary}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.salary && !!errors.salary}
                  helperText={touched.salary && errors.salary}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="maintanance"
                  label="maintanance"
                  color="info"
                  size="medium"
                  placeholder="Maintanance"
                  value={values.maintanance}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.maintanance && !!errors.maintanance}
                  helperText={touched.maintanance && errors.maintanance}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="laundry"
                  label="laundry"
                  color="info"
                  size="medium"
                  placeholder="Laundry"
                  value={values.laundry}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.laundry && !!errors.laundry}
                  helperText={touched.laundry && errors.laundry}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="miscellaneous"
                  label="miscellaneous"
                  color="info"
                  size="medium"
                  placeholder="Miscellaneous"
                  value={values.miscellaneous}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.miscellaneous && !!errors.miscellaneous}
                  helperText={touched.miscellaneous && errors.miscellaneous}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="string"
                  name="remark"
                  label="remark"
                  color="info"
                  size="medium"
                  placeholder="Remark"
                  value={values.remark}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.remark && !!errors.remark}
                  helperText={touched.remark && errors.remark}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Add Expences
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default TransactionForm;

TransactionForm.propTypes = {
  initialValues: PropTypes.shape({
    ebill: PropTypes.number.isRequired,
    wbill: PropTypes.number.isRequired,
    municipal_tax: PropTypes.number.isRequired,
    bank_emi: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    maintanance: PropTypes.number.isRequired,
    laundry: PropTypes.number.isRequired,
    miscellaneous: PropTypes.number.isRequired,
    remark: PropTypes.string.isRequired,
  }).isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};
