import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { SessionProvider, useSession, signIn } from 'next-auth/react';
import { LoginScreen } from '@/components/auth/LoginScreen';
import { LoginScreenLoader } from '@/components/auth/LoginScreenLoader';

const inter = Inter({ subsets: ['latin'] });

const Auth = ({ children }: { children: JSX.Element }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <LoginScreenLoader />;
  }

  if (status === 'authenticated') {
    return children;
  }

  return <LoginScreen />;
};

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Auth>
        <div className={inter.className}>
          <Toaster />
          <Component {...pageProps} />
        </div>
      </Auth>
    </SessionProvider>
  );
}

export default appWithTranslation(App);
