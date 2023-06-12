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
