import api from './api';

export async function postTransactions(body, token) {
    const response = await api.post('/transactions', body, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    return response.data;
}

export async function getHistoric(token) {
    const response = await api.get('/transactions', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function deleteTransaction(token, transactionId) {
    const response = await api.delete(`/transactions/${transactionId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function getDataGrafic(token) {
    const response = await api.get('/transactions/data', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}
