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
import { getTest } from '../../../api/student';

import { addErrorToast } from '../../../redux/actions/toasts';

import Question from './Question';

// Page styles
import styles from './AttemptTest.module.css';

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
  const [index, setIndex] = React.useState(0);
  if (isLoading) return <div className="page-pre-loader"><CircularProgress /></div>;
  return (
    <div className="page-content">
      <Typography variant="h6" align="center">{`${test.subject} - ${test.title}`}</Typography>
      <div className="w-full">
        <div className={styles.record}>
          <Typography variant="h6" color="primary" className={styles['record-item-name']}>Created by:</Typography>
          <Typography variant="h6" className={styles['record-item-value']}>{test.createdBy}</Typography>
        </div>
        <div className={styles.record}>
          <Typography variant="h6" color="primary" className={styles['record-item-name']}>Submittable Before:</Typography>
          <Typography variant="h6" className={styles['record-item-value']}>{date.format(new Date(test.submittableBefore), 'HH:MM A DD-MMM-YYYY')}</Typography>
        </div>
        {/* Questions Component */}
        {
          test.questions && (
            <Question
              question={test.questions[index]}
              index={index}
              onSubmit={() => setIndex(index + 1)}
              onSkip={() => setIndex(index + 1)}
            />
          )
        }
      </div>
    </div>
  );
}

export default AttemptTest;
