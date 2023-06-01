import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';
import useToken from '../useToken';

export function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn
  } = useAsync(authApi.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn
  };
}


export function useSessions() {
  const {
    data: sessions,
    loading: sessionsLoading,
    error: sessionsError,
    act: listSessions,
  } = useAsync((token) => authApi.getSessions(token));

  return {
    sessions,
    sessionsLoading,
    sessionsError,
    listSessions,
  };
};

