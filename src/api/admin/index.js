/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import axios from 'axios';

const admin = axios.create({
  baseURL: `${process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://hope-testing-service-backend.herokuapp.com'}/admin`,
});

export function getTests() {
  return admin.get('/tests');
}

export function newTest(data) {
  const fd = new FormData();
  fd.append('title', data.title);
  fd.append('subject', data.subject);
  fd.append('startsAt', data.startsAt);
  fd.append('submittableBefore', data.submittableBefore);
  fd.append('isDemo', data.isDemo);
  fd.append('qualification', data.qualification);
  fd.append('questions', JSON.stringify(data.questions));
  data.questions.forEach((q) => fd.append('images', q.image || 'no image'));
  return admin.post('/tests', fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export default admin;
