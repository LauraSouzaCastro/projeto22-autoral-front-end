import useAsync from '../useAsync';

import * as historicApi from '../../services/historicApi';
import useToken from '../useToken';

export function useHistoric() {
    const token = useToken();
    const {
        data: historic,
        loading: historicLoading,
        error: historicError,
        act: listHistoric,
    } = useAsync(() => historicApi.getHistoric(token));

    return {
        historic,
        historicLoading,
        historicError,
        listHistoric,
    };
};

export function useDeleteTransaction() {
    const token = useToken();

    const {
        loading: deleteTransactionLoading,
        error: deleteTransactionError,
        act: deleteTransaction
    } = useAsync((transactionId) => historicApi.deleteTransaction(token, transactionId), false);

    return {
        deleteTransactionLoading,
        deleteTransactionError,
        deleteTransaction
    };
}