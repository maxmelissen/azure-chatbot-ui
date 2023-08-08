import { useSession } from 'next-auth/react';

import { SKIP_AUTH } from '@/utils/app/const';

import { LoginScreen } from '@/components/auth/LoginScreen';
import { LoginScreenLoader } from '@/components/auth/LoginScreenLoader';

type AuthPageProps = {
  children: JSX.Element;
};

export const AuthPage = ({ children }: AuthPageProps) => {
  const { status } = useSession();

  if (status === 'authenticated' || SKIP_AUTH) {
    return children;
  }

  if (status === 'loading') {
    return <LoginScreenLoader />;
  }

  return <LoginScreen />;
};
