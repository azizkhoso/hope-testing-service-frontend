import axios from 'axios';

const admin = axios.create({
  baseURL: `${process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://hope-testing-service-backend.herokuapp.com'}/admin`,
});

export function getTests() {
  return admin.get('/tests');
}

export default admin;
