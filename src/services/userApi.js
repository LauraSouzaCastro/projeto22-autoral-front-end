import api from './api';

export async function signUp(data) {
  const response = await api.post('/users', data);
  return response.data;
}
