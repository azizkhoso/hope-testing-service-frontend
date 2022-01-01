import axios from 'axios';

const login = axios.create({
  baseURL: `${process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://hope-testing-service-backend.herokuapp.com'}/login`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function loginAdmin(data) {
  return login.post('/admin', data);
}

export function loginTeacher(data) {
  return login.post('/teacher', data);
}
