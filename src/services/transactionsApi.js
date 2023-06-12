import api from './api';

export async function postTransactions(body, token) {
    const response = await api.post('/transactions', body, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    return response.data;
}