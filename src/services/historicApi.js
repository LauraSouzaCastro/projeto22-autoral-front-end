import api from './api';

export async function getHistoric(token) {
    const response = await api.get('/historic', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function deleteTransaction(token, transactionId) {
    const response = await api.delete(`/historic/${transactionId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}