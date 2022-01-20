import React from 'react';

import {
  useParams,
  useNavigate,
} from 'react-router-dom';

import {
  Typography,
  CircularProgress,
} from '@mui/material';

import date from 'date-and-time';

import { useDispatch } from 'react-redux';

import { useQuery } from 'react-query';
import { getTest } from '../../api/student';

import { addErrorToast } from '../../redux/actions/toasts';

function AttemptTest() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [test, setTest] = React.useState({});
  const { isLoading } = useQuery(['test', id], () => getTest(id), {
    onSuccess: ({ data }) => setTest(data.test),
    onError: (err) => {
      dispatch(addErrorToast({ message: err.response?.data?.error || err.message }));
      // Go back
      navigate(-1);
    },
  });
  if (isLoading) return <div className="page-pre-loader"><CircularProgress /></div>;
  return (
    <div className="page-content">
      <Typography variant="h6" align="center">{`${test.subject} - ${test.title}`}</Typography>
      <div className="w-full">
        <div className="flex flex-wrap w-full">
          <Typography variant="h6" color="primary" className="w-full md:w-1/2 lg:w-3/12">Created by:</Typography>
          <Typography variant="h6" className="w-full capitalize md:w-1/2 lg:w-9/12">{test.createdBy}</Typography>
        </div>
        <div className="flex flex-wrap w-full">
          <Typography variant="h6" color="primary" className="w-full md:w-1/2 lg:w-3/12">Submittable Before:</Typography>
          <Typography variant="h6" className="w-full capitalize md:w-1/2 lg:w-9/12">{date.format(new Date(test.submittableBefore), 'HH:MM A DD-MMM-YYYY')}</Typography>
        </div>
      </div>
    </div>
  );
}

export default AttemptTest;
