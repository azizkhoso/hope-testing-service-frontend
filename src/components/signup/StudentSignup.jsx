import React from 'react';

import {
  Stack,
  Card,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
} from '@mui/material';

import { useFormik } from 'formik';
import * as yup from 'yup';

export default function StudentSignup() {
  // Form requirements
  const schema = yup.object({
    fullName: yup.string().required('Full Name is required').min(2, 'Full Name should be at least 2 characters long'),
    fatherName: yup.string().required('Father\'s name is required').min(2, 'Father\'s name should be at least 2 characters long'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup.string().required('Password is required').min(8, 'Password should be at least 8 characters long'),
    qualification: yup.string().required('Qualification is required').oneOf(['IX', 'X', 'XI', 'XII'], 'Not eligible in for given qualification'),
    age: yup.number().required('Age is required').min(14, 'Age should be at least 14 years old').max(25, 'Age should be at most 25 years old'),
    cnic: yup.number().required('CNIC is required').min(1000000000000, 'Enter a valid CNIC').max(9999999999999, 'Enter a valid CNIC'),
    phone: yup.number().required('Phone number is required').min(10000000000, 'Enter a valid phone number').max(99999999999, 'Enter a valid phone number'),
    gender: yup.string().required('Gender is required').oneOf(['Male', 'Female'], 'Please provide valid gender'),
    address: yup.string().required('Address is required').min(8, 'Enter at least 8 characters'),
  });
  const formik = useFormik({
    initialValues: {
      fullName: '',
      fatherName: '',
      email: '',
      password: '',
      qualification: 'IX',
      age: 0,
      cnic: 0,
      phone: 0,
      gender: 'Male',
      address: '',
    },
    validationSchema: schema,
    onSubmit: (values) => console.log(values),
  });
  // -----------------
  return (
    <Card elevation={3} className="w-full pb-6 my-14">
      <Stack spacing={2}>
        <div className="flex">
          <Button variant="contained" className="flex-grow">Teacher</Button>
          <Button variant="outlined" className="flex-grow">Student</Button>
        </div>
        <Typography variant="h5" align="center">Welcome to</Typography>
        <Typography variant="h3" align="center">Hope Testing Service</Typography>
        <Typography variant="h5" align="center">Sign up as a Student</Typography>
        <Stack spacing={2} className="px-6" component="form" onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            fullWidth
            label="Full Name"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && formik.errors.fullName}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Father's Name"
            name="fatherName"
            value={formik.values.fatherName}
            onChange={formik.handleChange}
            error={formik.touched.fatherName && formik.errors.fatherName}
            helperText={formik.touched.fatherName && formik.errors.fatherName}
          />
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
          <FormControl
            variant="outlined"
            fullWidth
          >
            <InputLabel className="bg-white">Qualification</InputLabel>
            <Select
              fullWidth
              name="qualification"
              value={formik.values.qualification}
              onChange={formik.handleChange}
            >
              <MenuItem value="IX">IX</MenuItem>
              <MenuItem value="X">X</MenuItem>
              <MenuItem value="XI">XI</MenuItem>
              <MenuItem value="XII">XII</MenuItem>
            </Select>
            {
              formik.touched.qualification && formik.errors.qualification && (
                <FormHelperText>{formik.errors.qualification}</FormHelperText>
              )
            }
          </FormControl>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            label="Age"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && formik.errors.age}
            helperText={formik.touched.age && formik.errors.age}
          />
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            label="Phone Number"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && formik.errors.phone}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            label="CNIC"
            name="cnic"
            value={formik.values.cnic}
            onChange={formik.handleChange}
            error={formik.touched.cnic && formik.errors.cnic}
            helperText={formik.touched.cnic && formik.errors.cnic}
          />
          <FormControl
            variant="outlined"
            fullWidth
          >
            <InputLabel className="bg-white">Gender</InputLabel>
            <Select
              fullWidth
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
            {
              formik.touched.gender && formik.errors.gender && (
                <FormHelperText>{formik.errors.gender}</FormHelperText>
              )
            }
          </FormControl>
          <TextField
            variant="outlined"
            fullWidth
            label="Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && formik.errors.address}
            helperText={formik.touched.address && formik.errors.address}
          />
          <Button type="submit" variant="contained">Signup as a Student</Button>
        </Stack>
      </Stack>
    </Card>
  );
}
