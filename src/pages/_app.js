import '@/styles/globals.css'
import UserProvider from '@/contexts/UserContext';
import Head from 'next/head';
import useToken from '@/hooks/useToken';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SmartWallet</title>
      </Head>
      <UserProvider>
        <ProtectedRouteGuard>
          <Component {...pageProps} />
        </ProtectedRouteGuard>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();
  if (!token ) {
    const router = useRouter();
    useEffect(() => {
        router.push('/smart-wallet');
    }, []);
  }

  return <>
    {children}
  </>;
}
