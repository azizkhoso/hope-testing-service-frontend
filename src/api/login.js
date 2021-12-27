import axios from 'axios';

const login = axios.create({
  baseURL: 'http://localhost:4000/login',
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
