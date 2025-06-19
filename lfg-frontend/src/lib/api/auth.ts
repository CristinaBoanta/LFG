import api from '../api'

export function loginAuth(email: string, password: string) {
  return api.post('/auth/login', { email, password });
}

export function registerAuth(email: string, password: string) {
  return api.post('/auth/register', { email, password });
}

export function logoutAuth() {
  return api.post('/auth/logout');
}