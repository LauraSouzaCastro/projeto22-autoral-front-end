import useAsync from '../useAsync';

import * as proflieApi from '../../services/proflieApi';
import useToken from '../useToken';

export default function useProfile() {
  const token = useToken();
  const {
    loading: profileLoading,
    error: profileError,
    act: profile,
  } = useAsync((formData) => proflieApi.profile(formData, token), false);

  return {
    profileLoading,
    profileError,
    profile,
  };
}
