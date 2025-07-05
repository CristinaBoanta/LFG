import api from '../api';

export function postNewJoinRequest(group_id: string) {
  return api.post('/join-requests', { group_id });
}

export function getJoinRequests() {
  return api.get('/join-requests/');
}

export function approveJoinRequest(request_id: string) {
  return api.put(`/join-requests/${request_id}/approve`);
}

export function rejectJoinRequest(request_id: string) {
  return api.put(`/join-requests/${request_id}/reject`);
}