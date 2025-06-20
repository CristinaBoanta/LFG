import api from '../api';

export function postNewGroup (title: string, description: string) {
  return api.post('/groups', { title, description });
}