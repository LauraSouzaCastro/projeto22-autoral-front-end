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