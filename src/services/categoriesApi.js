import api from './api';

export async function getCategories(token) {
    const response = await api.get('/categories', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}