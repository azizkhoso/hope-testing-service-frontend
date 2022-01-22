import React from 'react';
import PropTypes from 'prop-types';

import {
  Stack,
  Typography,
  Button,
  Card,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';

function Question({
  question, index, onSubmit, onSkip,
}) {
  function handleSubmit() {
    // handle submission here
    onSubmit();
  }
  function handleSkip() {
    // handle skipping here
    onSkip();
  }
  return (
    <Stack component={Card} className="p-3 overflow-auto">
      <Typography variant="body1">
        {index + 1}
        )&nbsp;
        {question.statement}
      </Typography>
      <img src={question.image} alt="preview" className="self-center w-full max-w-xs" />
      {
        question.type === 'MCQS' && (
          <>
            <Typography variant="body2">
              A:&nbsp;
              {question.A}
            </Typography>
            <Typography variant="body2">
              B:&nbsp;
              {question.B}
            </Typography>
            <Typography variant="body2">
              C:&nbsp;
              {question.C}
            </Typography>
            <Typography variant="body2">
              D:&nbsp;
              {question.D}
            </Typography>
            <div className="flex items-center w-full gap-1 md:w-auto">
              <Typography variant="h6">Your answer:</Typography>
              <Select
                variant="standard"
                className="self-center flex-grow md:flex-grow-0"
                size="small"
                name="answer"
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
                <MenuItem value="C">C</MenuItem>
                <MenuItem value="D">D</MenuItem>
              </Select>
            </div>
          </>
        )
      }
      {
        question.type === 'TrueFalse'
          ? (
            <div className="flex items-center w-full gap-1 md:w-auto">
              <Typography variant="h6">Your answer:</Typography>
              <Select
                variant="standard"
                className="self-center flex-grow md:flex-grow-0"
                size="small"
                name="answer"
              >
                <MenuItem value="True">True</MenuItem>
                <MenuItem value="False">False</MenuItem>
              </Select>
            </div>
          )
          : (
            <div className="flex items-center w-full gap-1 md:w-auto">
              <Typography variant="h6">Your answer:</Typography>
              <TextField
                variant="standard"
                className="w-full"
              />
            </div>
          )
      }
      <div className="flex gap-3 mt-3 items-center">
        <Typography variant="body1" color="primary">Remaining Time:</Typography>
        <Typography variant="h6">{question.duration}</Typography>
      </div>
      <div className="flex justify-end gap-9 mt-6 lg:mt-auto">
        <Button variant="text" color="error" onClick={() => handleSkip()}>Skip</Button>
        <Button variant="contained" color="primary" onClick={() => handleSubmit()}>Submit</Button>
      </div>
    </Stack>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    statement: PropTypes.string.isRequired,
    // Image should be in data uri format
    image: PropTypes.string.isRequired,
    // Duration should be passed as string for convenience
    duration: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    // For MCQS question type
    A: PropTypes.string,
    B: PropTypes.string,
    C: PropTypes.string,
    D: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
};

export default Question;
