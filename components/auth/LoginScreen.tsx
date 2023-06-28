import { signIn } from 'next-auth/react';
import { useTranslation } from 'next-i18next';

export const LoginScreen = (): JSX.Element => {
  const { t } = useTranslation('login');

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="mb-10 flex w-full items-center justify-center">
          <img src="https://www.nextnovate.ai/wp-content/themes/nextnovate/assets/img/logo-dark.svg" />
        </div>

        <p className="mb-2 text-center text-white">
          {t('Welcome to NextNovate chat GPT extension')}
        </p>
        <p className="mb-10 text-center text-white">
          {t('Log in with your Microsoft work account to continue')}
        </p>

        <button
          onClick={() => signIn('azure-ad')}
          className="rounded-lg bg-orange-primary px-4 py-2 text-white hover:bg-orange-600 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-orange-500 dark:text-black dark:hover:bg-neutral-300"
          type="button"
        >
          Log in
        </button>
      </div>
    </div>
  );
};
