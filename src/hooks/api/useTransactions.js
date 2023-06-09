import useAsync from '../useAsync';

import * as transactionsApi from '../../services/transactionsApi';
import useToken from '../useToken';

export function useTransactions() {
  const token = useToken();
  const {
    loading: transactionsLoading,
    error: transactionsError,
    act: transactions,
  } = useAsync((data) => transactionsApi.postTransactions(data, token), false);

  return {
    transactionsLoading,
    transactionsError,
    transactions,
  };
}

export function useHistoric() {
  const token = useToken();
  const {
    data: historic,
    loading: historicLoading,
    error: historicError,
    act: listHistoric,
  } = useAsync(() => transactionsApi.getHistoric(token));

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
  } = useAsync((transactionId) => transactionsApi.deleteTransaction(token, transactionId), false);

  return {
    deleteTransactionLoading,
    deleteTransactionError,
    deleteTransaction
  };
}

export function useDataGrafic() {
  const token = useToken();
  const {
    data: dataGrafic,
    loading: dataGraficLoading,
    error: dataGraficError,
    act: listDataGrafic,
  } = useAsync(() => transactionsApi.getDataGrafic(token));

  return {
    dataGrafic,
    dataGraficLoading,
    dataGraficError,
    listDataGrafic,
  };
};

export function useNotifications() {
  const token = useToken();
  const {
    data: notifications,
    loading: notificationsLoading,
    error: notificationsError,
    act: listNotifications,
  } = useAsync(() => transactionsApi.getNotifications(token));

  return {
    notifications,
    notificationsLoading,
    notificationsError,
    listNotifications,
  };
};

export function useUpdateTransaction() {
  const token = useToken();

  const {
    loading: updateTransactionLoading,
    error: updateTransactionError,
    act: updateTransaction
  } = useAsync((transactionId) => transactionsApi.updateTransaction(token, transactionId), false);

  return {
    updateTransactionLoading,
    updateTransactionError,
    updateTransaction
  };
}