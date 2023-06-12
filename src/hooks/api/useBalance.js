import useAsync from '../useAsync';

import * as balanceApi from '../../services/balanceApi';
import useToken from '../useToken';

export function useBalance() {
    const token = useToken();
    const {
        data: balance,
        loading: balanceLoading,
        error: balanceError,
        act: listBalance,
    } = useAsync(() => balanceApi.getBalance(token));

    return {
        balance,
        balanceLoading,
        balanceError,
        listBalance,
    };
};

