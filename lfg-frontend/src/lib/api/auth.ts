import api from '../api';

export function loginAuth(email: string, password: string) {
  return api.post('/user/login', { email, password });
}

export function registerAuth(email: string, password: string, username: string) {
  return api.post('/user/register', { email, password, username });
}

export function logoutAuth() {
  return api.post('/user/logout');
}