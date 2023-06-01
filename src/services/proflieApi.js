import api from './api';

export async function profile(formData, token) {
  const response = await api.put('/profile', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
    },
  });

  return response.data;
}
