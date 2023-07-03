import { useTranslation } from 'next-i18next';

export type ErrorMessageProps = {
  error: string;
};

const getErrorTexts = (error: string): string[] => {
  if (error === 'AccessDenied') {
    return ['Access denied!', "You don't have permissions to sign in"];
  }

  return ['Error', error];
};

export const ErrorMessage = ({ error }: ErrorMessageProps): JSX.Element => {
  const { t } = useTranslation('login');

  const texts = getErrorTexts(error);

  return (
    <>
      <p className="mb-2 text-center text-3xl text-white">{t(texts[0])}</p>
      <p className="mb-10 text-center text-white">{t(texts[1])}</p>
    </>
  );
};
