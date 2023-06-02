import useAsync from '../useAsync';

import * as proflieApi from '../../services/proflieApi';
import useToken from '../useToken';

export function useProfileImage() {
  const token = useToken();
  const {
    loading: profileImageLoading,
    error: profileImageError,
    act: profileImage,
  } = useAsync((formData) => proflieApi.profileImage(formData, token), false);

  return {
    profileImageLoading,
    profileImageError,
    profileImage,
  };
}

export function useProfileName() {
  const token = useToken();
  const {
    loading: profileNameLoading,
    error: profileNameError,
    act: profileName,
  } = useAsync((data) => proflieApi.profileName(data, token), false);

  return {
    profileNameLoading,
    profileNameError,
    profileName,
  };
}
