import { signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ErrorMessage } from '@/components/auth/ErrorMessage';

export const LoginScreen = (): JSX.Element => {
  const { t } = useTranslation('login');

  const router = useRouter();
  const error = router.query.error;

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center rounded-2xl bg-gray-900 p-14">
        <div className="mb-10 flex w-48 items-center justify-center">
          <img src="https://www.nextnovate.ai/wp-content/themes/nextnovate/assets/img/logo-dark.svg" />
        </div>

        {error ? (
          <ErrorMessage error={Array.isArray(error) ? error[0] : error} />
        ) : (
          <>
            <p className="mb-4 text-center text-3xl text-white">
              {t('Welcome to Enterprise ChatGPT, from NextNovate AI')}
            </p>
            <p className="mb-10 text-center text-white">
              {t('Sign in with your Microsoft work account to continue')}
            </p>
          </>
        )}

        <button
          onClick={() => signIn('azure-ad', { callbackUrl: '/' })}
          className="self-center rounded-lg bg-orange-primary px-4 py-2 text-white hover:bg-orange-600 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-orange-500 dark:text-black dark:hover:bg-neutral-300"
          type="button"
        >
          {t('Sign in')}
        </button>
      </div>
    </div>
  );
};
