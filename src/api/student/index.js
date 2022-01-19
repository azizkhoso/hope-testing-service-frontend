/* eslint-disable no-underscore-dangle */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import * as utils from '../../utils';

const student = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/student`,
  headers: {
    Authorization: `Bearer ${utils.getToken()}`,
  },
});

export function getTests() {
  return student.get('/tests');
}

export default student;
