import { createContext } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
