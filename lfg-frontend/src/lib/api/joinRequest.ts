import api from '../api';

export function postNewJoinRequest(group_id: string) {
  return api.post('/join-requests', { group_id });
}

// group_id