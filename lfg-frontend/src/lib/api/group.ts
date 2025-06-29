import api from '../api';

export function postNewGroup (title: string, description: string) {
  return api.post('/groups', { title, description });
}

export function getUserGroups () {
  return api.get('/groups');
}

export function getPublicGroups () {
  return api.get('/groups/public');
}