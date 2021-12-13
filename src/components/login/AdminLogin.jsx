import React from 'react';

import {
  Stack,
  Card,
  Button,
  Typography,
  TextField,
} from '@mui/material';

import { useFormik } from 'formik';
import * as yup from 'yup';

import logo from '../../assets/logo.png';

export default function AdminLogin() {
  // Form requirements
  const schema = yup.object({
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup.string().required('Password is required').min(8, 'Password should be at least 8 characters long'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => console.log(values),
  });
  // -----------------
  return (
    <Card elevation={3} className="w-full py-6 my-6">
      <Stack spacing={2}>
        <img className="self-center w-32" alt="hts logo" src={logo} />
        <Typography variant="h5" align="center">Login as an Admin</Typography>
        <Stack spacing={2} className="px-6" component="form" onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="outlined"
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button type="submit" variant="contained">Login as an Admin</Button>
        </Stack>
      </Stack>
    </Card>
  );
}
