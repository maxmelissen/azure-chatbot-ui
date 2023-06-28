import { Spinner } from '@/components/Global/Spinner';

export const LoginScreenLoader = (): JSX.Element => {
  return (
    <div className="flex h-screen items-center justify-center text-white">
      <Spinner size="40px" className="mx-auto" />
    </div>
  );
};
