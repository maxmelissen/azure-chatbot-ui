import { useSession } from 'next-auth/react';
import { LoginScreenLoader } from '@/components/auth/LoginScreenLoader';
import { LoginScreen } from '@/components/auth/LoginScreen';

type AuthPageProps = {
  children: JSX.Element;
};

export const AuthPage = ({ children }: AuthPageProps) => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return children;
  }

  if (status === 'loading') {
    return <LoginScreenLoader />;
  }

  return <LoginScreen />;
};
