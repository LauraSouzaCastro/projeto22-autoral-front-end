import api from './api';

export async function profileImage(formData, token) {
  const response = await api.put('/profile/image', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
    },
  });

  return response.data;
}

export async function profileName(body, token) {
  const response = await api.put('/profile/name', body, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });

  return response.data;
}
